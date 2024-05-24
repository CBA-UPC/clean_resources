     */value:function createPropertiesForAttributes(){var a$=this.observedAttributes;for(var _i=0;_i<a$.length;_i++){this.prototype._createPropertyAccessor(caseMap.dashToCamelCase(a$[_i]));}}/**
       * Returns an attribute name that corresponds to the given property.
       * By default, converts camel to dash case, e.g. `fooBar` to `foo-bar`.
       * @param {string} property Property to convert
       * @return {string} Attribute name corresponding to the given property.
       *
       * @protected
       */},{key:'attributeNameForProperty',value:function attributeNameForProperty(property){return caseMap.camelToDashCase(property);}}]);return PropertyAccessors;}(base);return PropertyAccessors;});})();</script>
