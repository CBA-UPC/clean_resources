//US Privacy String API - required by the IAB to be a specific format
/** @function __uspapi
 *   @summary This function provides an api for vendors to access a user's us privacy string data
 *   @param {String} command - A command name
 *   @param {Number} version - The us privacy string version number
 *   @param {Function} callback - A callback function accepting usprivacy object as the first param, and success as the second
 *   @returns { Boolean } - a boolean of whether or not the privacy string exists, not required for iab
 *   @description A lengthy description of the purpose of this function
 *   @references https://iabtechlab.com
 *   @example
 *   __uspapi('getUSPData', 1, (data, success) =>{console.log(data, success) });
 *   > {version: 1, uspString: null}, false
 */
 