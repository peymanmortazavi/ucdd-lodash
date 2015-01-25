/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`.
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0);
 * // => []
 */
function range(start, end) {
    
    // Argument Validation
    if(start && !end) {
    	end = start;
    	start = 0;
    };

    if(start > end)
    	throw "invalid range. start is greater than end.";

    // Implementation
    var array = [];
    for(var index = start; index < end; index++) {
    	array.push(index);
    }

    return array;

}


/**
 * Creates an object composed of the picked `object` properties. Property
 * names may be specified as individual arguments or as arrays of property
 * names.
 *
 * var object = { 'user': 'fred', 'age': 40 };
 *
 * _.pick(object, 'user');
 * // => { 'user': 'fred' }
 *
 */
function pick(object, propertyNames) {
    
	var newObject = {};

    // Argument Validation
    if(!object || !propertyNames) {
    	return newObject;
    }

    // Implementation
    propertyNames.forEach( function(propertyName) {

    	var value = object[propertyName];
    	if( value )
    		newObject[propertyName] = value;

    });

    return newObject;

}


/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * The function returns as soon as it finds a passing value and does not iterate
 * over the entire collection. The predicate is invoked with (value)
 */
function some(collection, predicate) {
    
	// Argument Validation
	if(!collection || !predicate) {
		throw "Arguments 'collection' and 'predicate' must be given.";
	}

	// Implementation
	for(var index = 0; index < collection.length; index++) {
		if( predicate(collection[index]) )
			return true;
	}

	return false;

}

/**
 * Checks if the given callback returns truthy value for **all** elements of a collection.
 */
function every(collection, predicate) {

	// Argument Validation
	if(!collection || !predicate) {
		throw "Arguments 'collection' and 'predicate' must be given.";
	}

	// Implementation
	for(var index = 0; index < collection.length; index++) {
		if(!predicate(collection[index]) )
			return false;
	}

	return true;
}

/**
 * Iterates over elements of `collection`, returning the first element
 * that have the properties of the given
 * object, else `false`.
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': false },
 *   { 'user': 'fred',    'age': 40, 'active': true },
 *   { 'user': 'pebbles', 'age': 1,  'active': false }
 * ];
 *
 *
 * _.find(users, { 'age': 1 })
 * // => { 'user': 'pebbles', 'age': 1,  'active': false }
 *
 */
function find(collection, object) {
    
	// Argument Validation
	if(!collection || !object) {
		throw "Arguments 'collection' and 'object' must be given.";
	}

	for(var index = 0; index < collection.length; index++){
		var currentObject = collection[index];
		var isMatch = true;

		for(var propertyName in object) {
			if( currentObject[propertyName] != object[propertyName]) {
				isMatch = false;
				break;
			}
		}

		if(isMatch)
			return currentObject;
	}

    return false;

}

// Export functions
var lib = {}
lib.range = range
lib.pick = pick
lib.some = some
lib.every = every
lib.find = find

module.exports = lib