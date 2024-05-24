// umd boilerplate for CommonJS and AMD
if (typeof exports === "object" && typeof define !== "function") {
	var define = 
}

define(function(require, exports, module) {
	let arrayLib = require("@sv/arrayLib");
	let extend = require("extend");
	let lodash = require("lodash");
	let goatee = require("goatee");
	let typecaster = require("typecaster");
	let mongolayer = require("mongolayer");
	
	let caster = new typecaster.TypeCaster();
	if (mongolayer !== undefined) {
		// in the browser we don't have mongolayer so in that case we can't add the type def for objectid
		caster.addType(mongolayer.typecasterObjectIdDef);
	}
	
	let forEach = function(obj, callback) {
		let i = 0;
		for (i in obj) {
			callback(obj[i], i);
		}
	}
	
	// forEach variant which exits on a returned true value. Same semantics as Array.prototype.some().
	let some = function(obj, callback) {
		let i = 0;
		for (i in obj) {
			let result = callback(obj[i], i);
			
			if (result === true) {
				break;
			}
		}
	}
	
	let unindex = 	
	let wrapConstructor = function(object, addArgs) {
		return function(args) {
			return new object(extend({}, args, addArgs));
		}
	}

	/**
	 * Takes an object and renames the keys according to the values in the
	 * `renameKeysMap` object. The `renameKeysMap` object should contain keys
	 * in dot notation that correspond to the original object's keys to 
	 * rename. The value of these keys are the values for which to rename the 
	 * new keys.
	 *
	 * The function also provides a `strict` option that will only rename 
	 * keys if they are provided within the `renameKeysMap` object. If a key
	 * is not set it the object, it will be removed from the returned object.
	 *
	 * The returned object is a deep clone of the original object. However, 
	 * all leaf "nodes" within the object are NOT cloned.
	 *
	 * @param {Object} object for which to rename keys
	 * @param {Object} a map of key-value pairs consisting of keys to rename
	 * @param {Boolea} optionally specify a strict rename
	 */
	var renameKeys = function(obj, renameKeysMap, strict) {
		let context = arguments[3];
		let node;

		if (strict === undefined) strict = false;
		if (context === undefined) context = "";

		if (lodash.isArray(obj)) {
			node = obj.map(;
		} else if (lodash.isPlainObject(obj)) {
			node = {};

			for (let key in obj) {
				let value = obj[key];
				let renameLookupKey = context + key;
				let renameKey = renameKeysMap[renameLookupKey];

				if (!renameKey && strict) continue;

				renameKey = renameKey || key;
				node[renameKey] = renameKeys(value, renameKeysMap, strict, renameLookupKey + ".");
			}
		} else {
			node = obj;
		}

		return node;
	}

	/**
	 * Remove all empty strings, empty objects and empty arrays from an object.
	 */
	var clean = function(obj) {
		if (!(obj instanceof Object)) return obj;

		if (obj instanceof Array) {
			for (var i = 0; i < obj.length; i++) {
				let item = obj[i];
				if (item instanceof Object || item instanceof Array) clean(item);
				if (isEmpty(item)) {
					// remove the item and increment backwards since the array now has a different length after the splice
					obj.splice(i, 1);
					i--;
				}
			}
		} else {
			let keys = Object.keys(obj);
			for (var i = 0; i < keys.length; i++) {
				let key = keys[i];
				let value = obj[key];
				if (value instanceof Object || value instanceof Array) clean(value);
				if (isEmpty(value)) delete obj[key];
			}
		}

		return obj;
	}


	/**
	 * Determines if object is an empty array, empty object, undefined or an
	 * empty string.
	 */
	var isEmpty = function(obj) {
		return obj === undefined ||
		obj === null ||
		(obj instanceof Array && obj.length === 0) ||
		(obj instanceof Object && Object.getPrototypeOf(obj) === Object.prototype && Object.keys(obj).length === 0) ||
		obj === "";
	}

	/**
	 * Given an object, remove all attributes from that object that are equal 
	 * in the other object.
	 */
	var diff = function(obj, toRemove, callback) {

		for (let key in obj) {
			let value = obj[key];
			let toRemoveValue = toRemove[key];

			if (lodash.isPlainObject(value)) {
				if (lodash.isPlainObject(toRemoveValue)) {
					diff(value, toRemoveValue);

					if (lodash.isEmpty(value)) {
						delete obj[key];
					}
				} else if (toRemoveValue) {
					obj[key] = toRemoveValue;
				}
			} else {
				if (lodash.isEqual(value, toRemoveValue, callback)) {
					delete obj[key];
				}
			}
		}

		return obj;
	}

	/*
	 * Given an object, apply the given callback to every value it contains.
	 * This function will iterate each value in arrays and dictionaries.
	 */
	var traverse = function(obj, callback) {
		if (! (obj instanceof Object)) { return; }
		
		let keys = Object.keys(obj);
		for (let i = 0; i < keys.length; i++) {
			let property = keys[i];
			
			if (obj[property] instanceof Date || typeof obj[property] !== "object") {
				obj[property] = callback(obj[property]);
			} else {
				traverse(obj[property], callback);
			}
		}
	}
	
	// quick mini-function to add a property which is hidden from console.log
	let privateProperty = function(obj, prop, value) {
		Object.defineProperty(obj, prop, {
			value: value,
			enumerable: false
		});
	}
	
	// Creates a new object with the form of the schema by cherry-picking fields from the obj
	// Can move keys from one part of the object to another, add keys to an array, remove keys from an array
	// Note: In locators "root." will always refer to the root of the object.
	// Note: In locators "current." will refer to where you are in the current structure. In example inside an object in array will refer to that object.
	// Note: Object/arrays, if the value at the locator for 'key' is an object then 'current' will become that object
	// Note: Object/arrays, if the value at the locator for 'key' is an array then each iteration of the array will become 'current'
	// Note: Undefined values are automatically stripped, use trimEmpty to have array and object be stripped:
	// map syntax 
	//	{
	//	keyName : "locator" ("root.foo", "current.foo", "root.0.foo.bar", "current.foo.0.bar")
	//  or
	//	keyName : {
	//		key : "locator" // see notes on how this is treated for object/array
	//		map : map (same syntax as root),
	//		trimEmpty : boolean (default false, if true will trim empty arrays and objects with no keys)
	//		template : goatee template to return the value
	//		cast : cast the return using typecaster
	//		conditional : array { filter(s), result } of possible checks for a value return allowing a different map criteria based on whether the filter matched
	//		addToSet : array { filter(s), result } of checks for a value returning a unique array of results for all matching checks
	//		value : static value to utilize
	//		exec : javascript function string or function to execute
	//	}
	// see unit tests for examples
	let deepMap = function(obj, map) {
		let returnData = {};
		return _deepMap_walk(map, { current: obj, root: obj, rootNew: returnData, new: returnData, var: {} });
	}
	
	var _deepMap_lookup = function(path, scopes) {
		let arr = path.split(".");
		let current = scopes;
		
		for (var i = 0; i < arr.length; i++) {
			let val = arr[i];
			current = current[val];
			
			if (current === undefined) {
				break;
			} else if (current instanceof Array && current.hasOwnProperty(arr[i + 1]) === true) {
				continue;
			} else if (current instanceof Array && i < arr.length - 1) {
				// if we hit an array, we have to loop over each entry and find it's nested value, we only want to do this if we aren't at the end of the lookup
				// and the next value in the lookup can't be casted to a number such as "foo.0.bar" which shouldn't match while "foo.bar", if foo is an array and
				// bar is an object will match this if condition
				let temp = current;
				current = temp.map(function(val) {
					return _deepMap_lookup(arr.slice(i + 1).join("."), val);
				});
				break;
			}
		}
		
		return current;
	}

	let _deepMap_resolveKey = function(dataKey, scopes) {
		if (
			dataKey instanceof Array ||
			typeof dataKey !== "object"
		) {
			return dataKey;
		}

		return _deepMap_lookup(dataKey.key, scopes);
	}
	
	let _deepMap_testFilter = function(filter, scopes) {
		let filters = filter instanceof Array ? filter : [filter];
		
		// some() returns true on match, false on no match, every() returns true on no match, false on match
		
		// if one filter matches (true return) we return true, if no filter matches it will return false
		return filters.some(function(filter, i) {
			// test each filter, if the filter didn't match (false return) it causes it to iterate again, if one filter matches returns true
			return Object.keys(filter).every(function(val, i) {
				let source = _deepMap_lookup(val, scopes);
				
				let filterKey = filter[val];
				
				if (filterKey instanceof RegExp) {
					return filterKey.test(source);
				} else if (filterKey instanceof Object) {
					let keys = Object.keys(filterKey);
					
					if (keys.indexOf("$in") > -1) {
						var sourceArr = source instanceof Array ? source : [source];

						var data = _deepMap_resolveKey(filterKey.$in, scopes);

						return (data || []).some(;
					} else if (keys.indexOf("$nin") > -1) {
						var sourceArr = source instanceof Array ? source : [source];

						var data = _deepMap_resolveKey(filterKey.$nin, scopes);
						
						return data.every(;
					} else if (keys.indexOf("$ne") > -1) {
						return source !== filterKey.$ne;
					} else if (keys.indexOf("$exists") > -1) {
						return (source === undefined) !== filterKey.$exists;
					} else if (keys.indexOf("key") > -1) {
						return source === _deepMap_lookup(filterKey.key, scopes);
					} else if (keys.indexOf("$gt") > -1) {
						return source > filterKey.$gt;
					} else if (keys.indexOf("$lt") > -1) {
						return source < filterKey.$lt;
					} else if (keys.indexOf("$gte") > -1) {
						return source >= filterKey.$gte;
					} else if (keys.indexOf("$lte") > -1) {
						return source <= filterKey.$lte;
					} else {
						throw new Error("Unrecognized filter object mechanism");
					}
				} else {
					// check source against filterKey and if true keep looping
					return source === filterKey;
				}
			});
		});
	}
	
	let _deepMap_getErrorString = 	
	var _deepMap_getValue = function(schema, scopes) {
		let value;
		
		if (schema.log === true) {
			console.log("deepMap log");
			console.log("schema");
			console.dir(schema, { depth: 10 });
			console.log("scopes");
			console.dir(scopes, { depth: 10 });
		}
		
		if (schema.if !== undefined) {
			schema.conditional = [{ if: schema.if, then: schema.then, else: schema.else }];
		}
		
		if (schema.conditional !== undefined) {
			schema.conditional.some(function(val2, i2) {
				// map if => filter and then => result for easier syntax readability
				if (val2.if !== undefined) { val2.filter = val2.if; }
				if (val2.then !== undefined) { val2.result = val2.then; }
				if (val2.result === undefined && val2.else === undefined) {
					// if neither filter/if or result/else is passed then we assume it returns the boolean state of the condition
					val2.result = { value: true };
					val2.else = { value: false };
				}
				
				let matches = val2.filter !== undefined ? _deepMap_testFilter(val2.filter, scopes) : true;
				if (matches === true) {
					// matched value, exit some loop by returning true
					value = _deepMap_getValue(val2.result, scopes);
					return true;
				}
				
				if (val2.else !== undefined) {
					value = _deepMap_getValue(val2.else, scopes);
					return true;
				}
				
				return false;
			});
		} else if (schema.addToSet !== undefined) {
			value = [];
			schema.addToSet.forEach(function(val2, i2) {
				// map if => filter and then => result for easier syntax readability
				if (val2.if !== undefined) { val2.filter = val2.if; }
				if (val2.then !== undefined) { val2.result = val2.then; }
				
				let matches = val2.filter !== undefined ? _deepMap_testFilter(val2.filter, scopes) : true;
				if (matches === true) {
					let tempValue = _deepMap_getValue(val2.result, scopes);
					if (tempValue === undefined) { return; }
					
					value.push[val2.each === true ? "apply" : "call"](value, tempValue);
				}
			});
			value = arrayLib.unique(value);
		} else if (schema.filterArray !== undefined) {
			if (typeof schema.filterArray.cond !== "object") { throw new Error("filterArray.cond requires an object or array of objects, received '" + schema.filterArray.cond + "'."); }
			if (typeof schema.filterArray.input !== "object") { throw new Error("filterArray.input requires an object, received '" + schema.filterArray.input + "'."); }
			
			// filter the elements in an array
			let tempValue = _deepMap_getValue(schema.filterArray.input, scopes) || [];
			value = tempValue.filter(function(val2, i2) {
				let newScopes = extend({}, scopes, { current: val2 });
				return _deepMap_testFilter(schema.filterArray.cond, newScopes);
			});
		} else if (schema.template !== undefined) {
			value = goatee.fill(schema.template, scopes);
		} else if (schema.map !== undefined) {
			if (schema.key === undefined) {
				throw new Error(_deepMap_getErrorString("When using 'map', you must also pass a 'key' for what key will represent the 'current' scope.", schema));
			}
			
			if (typeof schema.map !== "object") {
				throw new Error(_deepMap_getErrorString("When using 'map', you must pass an object for 'map'.", schema));
			}
			
			let source = _deepMap_lookup(schema.key, scopes);
			if (source instanceof Array) {
				let newArr = [];
				
				value = source.map(function(val2) {
					let newScopes = extend({}, scopes, { current: val2, new: {} });
					return _deepMap_walk(schema.map, newScopes);
				});
			} else {
				// var newScopes = Object.assign({}, scopes, { current : source, new : {} });
				let newScopes = extend({}, scopes, { current: source, new: {} });
				value = _deepMap_walk(schema.map, newScopes);
			}
		} else if (schema.value !== undefined) {
			value = schema.value;
		} else if (schema.key !== undefined) {
			value = _deepMap_lookup(schema.key, scopes);
		} else if (schema.exec !== undefined) {
			if (typeof schema.exec === "string") {
				let fn = new Function("window", "require", "global", "process", "document", "module", "exports", "__dirname", "__filename", "scopes", schema.exec);
				value = fn(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, scopes);
			} else if (typeof schema.exec === "function") {
				value = schema.exec(scopes);
			} else {
				throw new Error(_deepMap_getErrorString("When using 'exec', it must either be a function or a string.", schema));
			}
		}
		
		if (value !== undefined && schema.trimEmpty === true) {
			if (value instanceof Array) {
				value = value.filter(_deepMap_isNotEmpty);
				
				if (value.length === 0) {
					return undefined;
				}
			} else if (typeof value === "object") {
				let temp = _deepMap_isNotEmpty(value);
				if (temp === false) {
					return undefined;
				}
			}
		}
		
		if (value !== undefined && schema.cast !== undefined) {
			if (value instanceof Array) {
				value = value.map(;
			} else {
				value = caster.convert(value, schema.cast);
			}
		}
		
		return value;
	}
	
	var _deepMap_isNotEmpty = function(val) {
		return val === undefined ? false : typeof val === "object" ? Object.keys(val).length > 0 : true;
	}
	
	var _deepMap_walk = function(userSchema, scopes) {
		for (let i in userSchema) {
			let val = userSchema[i];
			let schema = val instanceof Object ? val : { key: val };
			let value = _deepMap_getValue(schema, scopes);
			let isVar = schema.var === undefined ? false : schema.var;
			
			if (value !== undefined && isVar === false) { scopes.new[i] = value; }
			if (value !== undefined && isVar === true) { scopes.var[i] = value; }
		}
		
		return scopes.new;
	}
	
	// Short-cut to filter an array via the deepMap filterArray system
	let filterArray = function(arr, filter) {
		let result = deepMap({ key: arr }, {
			key: {
				filterArray: {
					input: { key: "current.key" },
					cond: filter
				}
			}
		});
		
		return result.key;
	}
	
	// mimics a mongodb project call
	// mongoProject({ foo : "fooValue", bar : "barValue" }, { foo : 1 }) === { foo : "fooValue" }
	// Primary differences is that it only supports 1 || true and trims empty arrays/objects
	let mongoProject = function(obj, fields) {
		// convert fields object into our keyPaths object
		// { leaf : {}, nested : { leaf : {}, leaf2 : {} } }
		let keyPaths = {};
		for (var i in fields) {
			if (fields[i] !== 1 && fields[i] !== true) { continue; }
			
			let keyPath = i.split(".");
			let current = keyPaths;
			for (let j = 0; j < keyPath.length; j++) {
				let val = keyPath[j];
				current[val] = current[val] || {};
				current = current[val];
			}
		}
		
		let tempObj = obj instanceof Array ? obj : [obj];
		for (var i = 0; i < tempObj.length; i++) {
			tempObj[i] = _mongoProject_mapper(tempObj[i], keyPaths) || {}; // at the root level we default to at least an empty object
		}
		
		return obj instanceof Array ? tempObj : tempObj[0];
	}

	var _mongoProject_mapper = function(obj, keyPaths) {
		let temp = {};
		for (let i in keyPaths) {
			let data = obj[i];
			if (data === undefined) { continue; }
			
			let hasKeys = Object.keys(keyPaths[i]).length > 0;
			var value;
			if (hasKeys === false) {
				// if we don't have keys, we are a leaf node, so we just grab the data
				value = data;
			} else {
				// if we have keys, then we are key with subkeys, if we are an array we need to run the project on each sub-key recursively
				let tempData = data instanceof Array ? data : [data];
				let returnData = [];
				for (let j = 0; j < tempData.length; j++) {
					value = _mongoProject_mapper(tempData[j], keyPaths[i]);
					if (value !== undefined && Object.keys(value).length > 0) {
						returnData.push(value);
					}
				}
				
				if (returnData.length === 0) {
					value = undefined;
				} else {
					// if we started with an array, return an array, otherwise return first item
					value = data instanceof Array ? returnData : returnData[0];
				}
			}
			
			if (value !== undefined) { temp[i] = value; }
		}
		
		// in recursive scenarios if an object would have been projected away, we fully clear it, should never hit this in practicality
		if (Object.keys(temp).length === 0) { return; }
		
		return temp;
	}
	
	// sorts by key, case insensitive
	let sortByKey = function(obj) {
		let sorted = {}, 
			i = 0, 
			keys = Object.keys(obj), 
			len = keys.length;
		keys.sort(function(s1, s2) {
			let l = s1.toLowerCase(), 
				m = s2.toLowerCase();
			return l === m ? 0 : l > m ? 1 : -1;
		});
		for (i; i < len; i++) {	sorted[keys[i]] = obj[keys[i]]; }
		return sorted;
	};
	
	// returns a new obj based on the passed in object and a desired keys array
	// similar functionality to lodash.pick
	let pick = function(data, arr) {
		let key;
		let value;
		let newObj = {};
		for (let i = 0; i < arr.length; i++) {
			key = arr[i];
			value = data[key];
			
			if (value !== undefined) {
				newObj[key] = value;
			}
		}
		
		return newObj;
	}
	
	// takes an object and converts keys starting with a prefix to it's own object
	let prefixToObject = function(obj, prefix) {
		let newObj = {};
		let prefixRe = new RegExp("^" + prefix + "(.*)");
		for (let i in obj) {
			let match = i.match(prefixRe);
			if (match) {
				newObj[match[1]] = obj[i];
			}
		}
		
		return newObj;
	}
	
	// takes an object and prefixes all keys in the object
	let prefixKeys = function(obj, prefix) {
		let newObj = {};
		for (let i in obj) {
			newObj[prefix + i] = obj[i];
		}
		return newObj;
	}
	
	// protected js values that we don't want reachable inside bangJs statements
	let _bangJsMaskArgs = [
		"window",
		"process",
		"require",
		"setTimeout",
		"setInterval",
		"clearTimeout",
		"clearInterval",
		"__dirname",
		"__filename",
		"module",
		"exports",
		"Buffer",
		"define",
		"global"
	];
	
	let _bangJsMaskedValues = [];
	for (let i = 0; i < _bangJsMaskArgs.length; i++) {
		_bangJsMaskedValues.push(undefined);
	}
	
	let _bangJsRegex = /^!js!(.*)/;
	let bangJs = function(obj, args) {
		// we need to set aside the keys and values of our passed args
		let keys = [];
		let values = [];
		for (let i in args) {
			keys.push(i);
			values.push(args[i]);
		}
		
		// concat our masked values and the keys from the passed object
		let fnArgs = [null].concat(_bangJsMaskArgs).concat(keys);
		
		// loop over the keys in the passed object and transforms the ones that are !js! keys
		traverse(obj, function(val) {
			if (typeof val !== "string") { return val; }
			
			// verify that the string starts with !js!
			let match = val.match(_bangJsRegex);
			if (match === null) { return val; }
			
			// declare a function using some bind magic with our masked arguments and their masked undefined values in addition to our valid arguments
			let myArgs = fnArgs.concat("return " + match[1]);
			let fn = new (Function.prototype.bind.apply(Function, myArgs));
			return fn.apply(null, _bangJsMaskedValues.concat(values));
		});
		
		return obj;
	}
	
	module.exports = {
		bangJs: bangJs,
		forEach: forEach,
		filterArray: filterArray,
		mongoProject: mongoProject,
		some: some,
		unindex: unindex,
		wrapConstructor: wrapConstructor,
		renameKeys: renameKeys,
		clean: clean,
		diff: diff,
		isEmpty: isEmpty,
		traverse: traverse,
		privateProperty: privateProperty,
		pick: pick,
		prefixKeys: prefixKeys,
		prefixToObject: prefixToObject,
		deepMap: deepMap,
		sortByKey: sortByKey
	}
});