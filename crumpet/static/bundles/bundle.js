/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/bundles/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( ">tbody", elem )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var doc, docElem, rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		doc = elem.ownerDocument;
		docElem = doc.documentElement;
		win = doc.defaultView;

		return {
			top: rect.top + win.pageYOffset - docElem.clientTop,
			left: rect.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( jQuery.isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
 Highcharts JS v5.0.12 (2017-05-24)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(K,S){"object"===typeof module&&module.exports?module.exports=K.document?S(K):S:K.Highcharts=S(K)})("undefined"!==typeof window?window:this,function(K){K=function(){var a=window,C=a.document,A=a.navigator&&a.navigator.userAgent||"",G=C&&C.createElementNS&&!!C.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,F=/(edge|msie|trident)/i.test(A)&&!window.opera,m=!G,g=/Firefox/.test(A),k=g&&4>parseInt(A.split("Firefox/")[1],10);return a.Highcharts?a.Highcharts.error(16,!0):{product:"Highcharts",
version:"5.0.12",deg2rad:2*Math.PI/360,doc:C,hasBidiBug:k,hasTouch:C&&void 0!==C.documentElement.ontouchstart,isMS:F,isWebKit:/AppleWebKit/.test(A),isFirefox:g,isTouchDevice:/(Mobile|Android|Windows Phone)/.test(A),SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:G,vml:m,win:a,marginNames:["plotTop","marginRight","marginBottom","plotLeft"],noop:function(){},charts:[]}}();(function(a){var C=[],A=a.charts,G=a.doc,F=a.win;a.error=function(m,g){m=a.isNumber(m)?"Highcharts error #"+
m+": www.highcharts.com/errors/"+m:m;if(g)throw Error(m);F.console&&console.log(m)};a.Fx=function(a,g,k){this.options=g;this.elem=a;this.prop=k};a.Fx.prototype={dSetter:function(){var a=this.paths[0],g=this.paths[1],k=[],q=this.now,v=a.length,u;if(1===q)k=this.toD;else if(v===g.length&&1>q)for(;v--;)u=parseFloat(a[v]),k[v]=isNaN(u)?a[v]:q*parseFloat(g[v]-u)+u;else k=g;this.elem.attr("d",k,null,!0)},update:function(){var a=this.elem,g=this.prop,k=this.now,q=this.options.step;if(this[g+"Setter"])this[g+
"Setter"]();else a.attr?a.element&&a.attr(g,k,null,!0):a.style[g]=k+this.unit;q&&q.call(a,k,this)},run:function(a,g,k){var m=this,v=function(a){return v.stopped?!1:m.step(a)},u;this.startTime=+new Date;this.start=a;this.end=g;this.unit=k;this.now=this.start;this.pos=0;v.elem=this.elem;v.prop=this.prop;v()&&1===C.push(v)&&(v.timerId=setInterval(function(){for(u=0;u<C.length;u++)C[u]()||C.splice(u--,1);C.length||clearInterval(v.timerId)},13))},step:function(m){var g=+new Date,k,q=this.options,v=this.elem,
u=q.complete,h=q.duration,e=q.curAnim;v.attr&&!v.element?m=!1:m||g>=h+this.startTime?(this.now=this.end,this.pos=1,this.update(),k=e[this.prop]=!0,a.objectEach(e,function(a){!0!==a&&(k=!1)}),k&&u&&u.call(v),m=!1):(this.pos=q.easing((g-this.startTime)/h),this.now=this.start+(this.end-this.start)*this.pos,this.update(),m=!0);return m},initPath:function(m,g,k){function q(a){var b,l;for(y=a.length;y--;)b="M"===a[y]||"L"===a[y],l=/[a-zA-Z]/.test(a[y+3]),b&&l&&a.splice(y+1,0,a[y+1],a[y+2],a[y+1],a[y+2])}
function v(a,b){for(;a.length<w;){a[0]=b[w-a.length];var l=a.slice(0,c);[].splice.apply(a,[0,0].concat(l));D&&(l=a.slice(a.length-c),[].splice.apply(a,[a.length,0].concat(l)),y--)}a[0]="M"}function u(a,l){for(var r=(w-a.length)/c;0<r&&r--;)b=a.slice().splice(a.length/H-c,c*H),b[0]=l[w-c-r*c],d&&(b[c-6]=b[c-2],b[c-5]=b[c-1]),[].splice.apply(a,[a.length/H,0].concat(b)),D&&r--}g=g||"";var h,e=m.startX,n=m.endX,d=-1<g.indexOf("C"),c=d?7:3,w,b,y;g=g.split(" ");k=k.slice();var D=m.isArea,H=D?2:1,l;d&&(q(g),
q(k));if(e&&n){for(y=0;y<e.length;y++)if(e[y]===n[0]){h=y;break}else if(e[0]===n[n.length-e.length+y]){h=y;l=!0;break}void 0===h&&(g=[])}g.length&&a.isNumber(h)&&(w=k.length+h*H*c,l?(v(g,k),u(k,g)):(v(k,g),u(g,k)));return[g,k]}};a.Fx.prototype.fillSetter=a.Fx.prototype.strokeSetter=function(){this.elem.attr(this.prop,a.color(this.start).tweenTo(a.color(this.end),this.pos),null,!0)};a.extend=function(a,g){var m;a||(a={});for(m in g)a[m]=g[m];return a};a.merge=function(){var m,g=arguments,k,q={},v=
function(g,h){"object"!==typeof g&&(g={});a.objectEach(h,function(e,n){!a.isObject(e,!0)||a.isClass(e)||a.isDOMElement(e)?g[n]=h[n]:g[n]=v(g[n]||{},e)});return g};!0===g[0]&&(q=g[1],g=Array.prototype.slice.call(g,2));k=g.length;for(m=0;m<k;m++)q=v(q,g[m]);return q};a.pInt=function(a,g){return parseInt(a,g||10)};a.isString=function(a){return"string"===typeof a};a.isArray=function(a){a=Object.prototype.toString.call(a);return"[object Array]"===a||"[object Array Iterator]"===a};a.isObject=function(m,
g){return!!m&&"object"===typeof m&&(!g||!a.isArray(m))};a.isDOMElement=function(m){return a.isObject(m)&&"number"===typeof m.nodeType};a.isClass=function(m){var g=m&&m.constructor;return!(!a.isObject(m,!0)||a.isDOMElement(m)||!g||!g.name||"Object"===g.name)};a.isNumber=function(a){return"number"===typeof a&&!isNaN(a)};a.erase=function(a,g){for(var m=a.length;m--;)if(a[m]===g){a.splice(m,1);break}};a.defined=function(a){return void 0!==a&&null!==a};a.attr=function(m,g,k){var q;a.isString(g)?a.defined(k)?
m.setAttribute(g,k):m&&m.getAttribute&&(q=m.getAttribute(g)):a.defined(g)&&a.isObject(g)&&a.objectEach(g,function(a,g){m.setAttribute(g,a)});return q};a.splat=function(m){return a.isArray(m)?m:[m]};a.syncTimeout=function(a,g,k){if(g)return setTimeout(a,g,k);a.call(0,k)};a.pick=function(){var a=arguments,g,k,q=a.length;for(g=0;g<q;g++)if(k=a[g],void 0!==k&&null!==k)return k};a.css=function(m,g){a.isMS&&!a.svg&&g&&void 0!==g.opacity&&(g.filter="alpha(opacity\x3d"+100*g.opacity+")");a.extend(m.style,
g)};a.createElement=function(m,g,k,q,v){m=G.createElement(m);var u=a.css;g&&a.extend(m,g);v&&u(m,{padding:0,border:"none",margin:0});k&&u(m,k);q&&q.appendChild(m);return m};a.extendClass=function(m,g){var k=function(){};k.prototype=new m;a.extend(k.prototype,g);return k};a.pad=function(a,g,k){return Array((g||2)+1-String(a).length).join(k||0)+a};a.relativeLength=function(a,g){return/%$/.test(a)?g*parseFloat(a)/100:parseFloat(a)};a.wrap=function(a,g,k){var q=a[g];a[g]=function(){var a=Array.prototype.slice.call(arguments),
g=arguments,h=this;h.proceed=function(){q.apply(h,arguments.length?arguments:g)};a.unshift(q);a=k.apply(this,a);h.proceed=null;return a}};a.getTZOffset=function(m){var g=a.Date;return 6E4*(g.hcGetTimezoneOffset&&g.hcGetTimezoneOffset(m)||g.hcTimezoneOffset||0)};a.dateFormat=function(m,g,k){if(!a.defined(g)||isNaN(g))return a.defaultOptions.lang.invalidDate||"";m=a.pick(m,"%Y-%m-%d %H:%M:%S");var q=a.Date,v=new q(g-a.getTZOffset(g)),u=v[q.hcGetHours](),h=v[q.hcGetDay](),e=v[q.hcGetDate](),n=v[q.hcGetMonth](),
d=v[q.hcGetFullYear](),c=a.defaultOptions.lang,w=c.weekdays,b=c.shortWeekdays,y=a.pad,q=a.extend({a:b?b[h]:w[h].substr(0,3),A:w[h],d:y(e),e:y(e,2," "),w:h,b:c.shortMonths[n],B:c.months[n],m:y(n+1),y:d.toString().substr(2,2),Y:d,H:y(u),k:u,I:y(u%12||12),l:u%12||12,M:y(v[q.hcGetMinutes]()),p:12>u?"AM":"PM",P:12>u?"am":"pm",S:y(v.getSeconds()),L:y(Math.round(g%1E3),3)},a.dateFormats);a.objectEach(q,function(a,b){for(;-1!==m.indexOf("%"+b);)m=m.replace("%"+b,"function"===typeof a?a(g):a)});return k?m.substr(0,
1).toUpperCase()+m.substr(1):m};a.formatSingle=function(m,g){var k=/\.([0-9])/,q=a.defaultOptions.lang;/f$/.test(m)?(k=(k=m.match(k))?k[1]:-1,null!==g&&(g=a.numberFormat(g,k,q.decimalPoint,-1<m.indexOf(",")?q.thousandsSep:""))):g=a.dateFormat(m,g);return g};a.format=function(m,g){for(var k="{",q=!1,v,u,h,e,n=[],d;m;){k=m.indexOf(k);if(-1===k)break;v=m.slice(0,k);if(q){v=v.split(":");u=v.shift().split(".");e=u.length;d=g;for(h=0;h<e;h++)d=d[u[h]];v.length&&(d=a.formatSingle(v.join(":"),d));n.push(d)}else n.push(v);
m=m.slice(k+1);k=(q=!q)?"}":"{"}n.push(m);return n.join("")};a.getMagnitude=function(a){return Math.pow(10,Math.floor(Math.log(a)/Math.LN10))};a.normalizeTickInterval=function(m,g,k,q,v){var u,h=m;k=a.pick(k,1);u=m/k;g||(g=v?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===q&&(1===k?g=a.grep(g,function(a){return 0===a%1}):.1>=k&&(g=[1/k])));for(q=0;q<g.length&&!(h=g[q],v&&h*k>=m||!v&&u<=(g[q]+(g[q+1]||g[q]))/2);q++);return h=a.correctFloat(h*k,-Math.round(Math.log(.001)/Math.LN10))};a.stableSort=
function(a,g){var k=a.length,q,m;for(m=0;m<k;m++)a[m].safeI=m;a.sort(function(a,h){q=g(a,h);return 0===q?a.safeI-h.safeI:q});for(m=0;m<k;m++)delete a[m].safeI};a.arrayMin=function(a){for(var g=a.length,k=a[0];g--;)a[g]<k&&(k=a[g]);return k};a.arrayMax=function(a){for(var g=a.length,k=a[0];g--;)a[g]>k&&(k=a[g]);return k};a.destroyObjectProperties=function(m,g){a.objectEach(m,function(a,q){a&&a!==g&&a.destroy&&a.destroy();delete m[q]})};a.discardElement=function(m){var g=a.garbageBin;g||(g=a.createElement("div"));
m&&g.appendChild(m);g.innerHTML=""};a.correctFloat=function(a,g){return parseFloat(a.toPrecision(g||14))};a.setAnimation=function(m,g){g.renderer.globalAnimation=a.pick(m,g.options.chart.animation,!0)};a.animObject=function(m){return a.isObject(m)?a.merge(m):{duration:m?500:0}};a.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5};a.numberFormat=function(m,g,k,q){m=+m||0;g=+g;var v=a.defaultOptions.lang,u=(m.toString().split(".")[1]||"").length,
h,e;-1===g?g=Math.min(u,20):a.isNumber(g)||(g=2);e=(Math.abs(m)+Math.pow(10,-Math.max(g,u)-1)).toFixed(g);u=String(a.pInt(e));h=3<u.length?u.length%3:0;k=a.pick(k,v.decimalPoint);q=a.pick(q,v.thousandsSep);m=(0>m?"-":"")+(h?u.substr(0,h)+q:"");m+=u.substr(h).replace(/(\d{3})(?=\d)/g,"$1"+q);g&&(m+=k+e.slice(-g));return m};Math.easeInOutSine=function(a){return-.5*(Math.cos(Math.PI*a)-1)};a.getStyle=function(m,g,k){if("width"===g)return Math.min(m.offsetWidth,m.scrollWidth)-a.getStyle(m,"padding-left")-
a.getStyle(m,"padding-right");if("height"===g)return Math.min(m.offsetHeight,m.scrollHeight)-a.getStyle(m,"padding-top")-a.getStyle(m,"padding-bottom");if(m=F.getComputedStyle(m,void 0))m=m.getPropertyValue(g),a.pick(k,!0)&&(m=a.pInt(m));return m};a.inArray=function(a,g){return g.indexOf?g.indexOf(a):[].indexOf.call(g,a)};a.grep=function(a,g){return[].filter.call(a,g)};a.find=function(a,g){return[].find.call(a,g)};a.map=function(a,g){for(var k=[],q=0,m=a.length;q<m;q++)k[q]=g.call(a[q],a[q],q,a);
return k};a.offset=function(a){var g=G.documentElement;a=a.getBoundingClientRect();return{top:a.top+(F.pageYOffset||g.scrollTop)-(g.clientTop||0),left:a.left+(F.pageXOffset||g.scrollLeft)-(g.clientLeft||0)}};a.stop=function(a,g){for(var k=C.length;k--;)C[k].elem!==a||g&&g!==C[k].prop||(C[k].stopped=!0)};a.each=function(a,g,k){return Array.prototype.forEach.call(a,g,k)};a.objectEach=function(a,g,k){for(var q in a)a.hasOwnProperty(q)&&g.call(k,a[q],q,a)};a.addEvent=function(m,g,k){function q(a){a.target=
a.srcElement||F;k.call(m,a)}var v=m.hcEvents=m.hcEvents||{};m.addEventListener?m.addEventListener(g,k,!1):m.attachEvent&&(m.hcEventsIE||(m.hcEventsIE={}),m.hcEventsIE[k.toString()]=q,m.attachEvent("on"+g,q));v[g]||(v[g]=[]);v[g].push(k);return function(){a.removeEvent(m,g,k)}};a.removeEvent=function(m,g,k){function q(a,d){m.removeEventListener?m.removeEventListener(a,d,!1):m.attachEvent&&(d=m.hcEventsIE[d.toString()],m.detachEvent("on"+a,d))}function v(){var e,d;m.nodeName&&(g?(e={},e[g]=!0):e=h,
a.objectEach(e,function(a,e){if(h[e])for(d=h[e].length;d--;)q(e,h[e][d])}))}var u,h=m.hcEvents,e;h&&(g?(u=h[g]||[],k?(e=a.inArray(k,u),-1<e&&(u.splice(e,1),h[g]=u),q(g,k)):(v(),h[g]=[])):(v(),m.hcEvents={}))};a.fireEvent=function(m,g,k,q){var v;v=m.hcEvents;var u,h;k=k||{};if(G.createEvent&&(m.dispatchEvent||m.fireEvent))v=G.createEvent("Events"),v.initEvent(g,!0,!0),a.extend(v,k),m.dispatchEvent?m.dispatchEvent(v):m.fireEvent(g,v);else if(v)for(v=v[g]||[],u=v.length,k.target||a.extend(k,{preventDefault:function(){k.defaultPrevented=
!0},target:m,type:g}),g=0;g<u;g++)(h=v[g])&&!1===h.call(m,k)&&k.preventDefault();q&&!k.defaultPrevented&&q(k)};a.animate=function(m,g,k){var q,v="",u,h,e;a.isObject(k)||(e=arguments,k={duration:e[2],easing:e[3],complete:e[4]});a.isNumber(k.duration)||(k.duration=400);k.easing="function"===typeof k.easing?k.easing:Math[k.easing]||Math.easeInOutSine;k.curAnim=a.merge(g);a.objectEach(g,function(e,d){a.stop(m,d);h=new a.Fx(m,k,d);u=null;"d"===d?(h.paths=h.initPath(m,m.d,g.d),h.toD=g.d,q=0,u=1):m.attr?
q=m.attr(d):(q=parseFloat(a.getStyle(m,d))||0,"opacity"!==d&&(v="px"));u||(u=e);u&&u.match&&u.match("px")&&(u=u.replace(/px/g,""));h.run(q,u,v)})};a.seriesType=function(m,g,k,q,v){var u=a.getOptions(),h=a.seriesTypes;if(h[m])return a.error(27);u.plotOptions[m]=a.merge(u.plotOptions[g],k);h[m]=a.extendClass(h[g]||function(){},q);h[m].prototype.type=m;v&&(h[m].prototype.pointClass=a.extendClass(a.Point,v));return h[m]};a.uniqueKey=function(){var a=Math.random().toString(36).substring(2,9),g=0;return function(){return"highcharts-"+
a+"-"+g++}}();F.jQuery&&(F.jQuery.fn.highcharts=function(){var m=[].slice.call(arguments);if(this[0])return m[0]?(new (a[a.isString(m[0])?m.shift():"Chart"])(this[0],m[0],m[1]),this):A[a.attr(this[0],"data-highcharts-chart")]});G&&!G.defaultView&&(a.getStyle=function(m,g){var k={width:"clientWidth",height:"clientHeight"}[g];if(m.style[g])return a.pInt(m.style[g]);"opacity"===g&&(g="filter");if(k)return m.style.zoom=1,Math.max(m[k]-2*a.getStyle(m,"padding"),0);m=m.currentStyle[g.replace(/\-(\w)/g,
function(a,g){return g.toUpperCase()})];"filter"===g&&(m=m.replace(/alpha\(opacity=([0-9]+)\)/,function(a,g){return g/100}));return""===m?1:a.pInt(m)});Array.prototype.forEach||(a.each=function(a,g,k){for(var q=0,m=a.length;q<m;q++)if(!1===g.call(k,a[q],q,a))return q});Array.prototype.indexOf||(a.inArray=function(a,g){var k,q=0;if(g)for(k=g.length;q<k;q++)if(g[q]===a)return q;return-1});Array.prototype.filter||(a.grep=function(a,g){for(var k=[],q=0,m=a.length;q<m;q++)g(a[q],q)&&k.push(a[q]);return k});
Array.prototype.find||(a.find=function(a,g){var k,q=a.length;for(k=0;k<q;k++)if(g(a[k],k))return a[k]})})(K);(function(a){var C=a.each,A=a.isNumber,G=a.map,F=a.merge,m=a.pInt;a.Color=function(g){if(!(this instanceof a.Color))return new a.Color(g);this.init(g)};a.Color.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(a){return[m(a[1]),m(a[2]),m(a[3]),parseFloat(a[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
parse:function(a){return[m(a[1]),m(a[2]),m(a[3]),1]}}],names:{none:"rgba(255,255,255,0)",white:"#ffffff",black:"#000000"},init:function(g){var k,q,m,u;if((this.input=g=this.names[g&&g.toLowerCase?g.toLowerCase():""]||g)&&g.stops)this.stops=G(g.stops,function(h){return new a.Color(h[1])});else if(g&&"#"===g[0]&&(k=g.length,g=parseInt(g.substr(1),16),7===k?q=[(g&16711680)>>16,(g&65280)>>8,g&255,1]:4===k&&(q=[(g&3840)>>4|(g&3840)>>8,(g&240)>>4|g&240,(g&15)<<4|g&15,1])),!q)for(m=this.parsers.length;m--&&
!q;)u=this.parsers[m],(k=u.regex.exec(g))&&(q=u.parse(k));this.rgba=q||[]},get:function(a){var g=this.input,q=this.rgba,m;this.stops?(m=F(g),m.stops=[].concat(m.stops),C(this.stops,function(g,h){m.stops[h]=[m.stops[h][0],g.get(a)]})):m=q&&A(q[0])?"rgb"===a||!a&&1===q[3]?"rgb("+q[0]+","+q[1]+","+q[2]+")":"a"===a?q[3]:"rgba("+q.join(",")+")":g;return m},brighten:function(a){var g,q=this.rgba;if(this.stops)C(this.stops,function(g){g.brighten(a)});else if(A(a)&&0!==a)for(g=0;3>g;g++)q[g]+=m(255*a),0>
q[g]&&(q[g]=0),255<q[g]&&(q[g]=255);return this},setOpacity:function(a){this.rgba[3]=a;return this},tweenTo:function(a,k){var g,m;a.rgba.length?(g=this.rgba,a=a.rgba,m=1!==a[3]||1!==g[3],a=(m?"rgba(":"rgb(")+Math.round(a[0]+(g[0]-a[0])*(1-k))+","+Math.round(a[1]+(g[1]-a[1])*(1-k))+","+Math.round(a[2]+(g[2]-a[2])*(1-k))+(m?","+(a[3]+(g[3]-a[3])*(1-k)):"")+")"):a=a.input||"none";return a}};a.color=function(g){return new a.Color(g)}})(K);(function(a){var C,A,G=a.addEvent,F=a.animate,m=a.attr,g=a.charts,
k=a.color,q=a.css,v=a.createElement,u=a.defined,h=a.deg2rad,e=a.destroyObjectProperties,n=a.doc,d=a.each,c=a.extend,w=a.erase,b=a.grep,y=a.hasTouch,D=a.inArray,H=a.isArray,l=a.isFirefox,B=a.isMS,r=a.isObject,z=a.isString,M=a.isWebKit,p=a.merge,E=a.noop,I=a.objectEach,L=a.pick,f=a.pInt,t=a.removeEvent,R=a.stop,J=a.svg,N=a.SVG_NS,O=a.symbolSizes,P=a.win;C=a.SVGElement=function(){return this};c(C.prototype,{opacity:1,SVG_NS:N,textProps:"direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline".split(" "),
init:function(a,f){this.element="span"===f?v(f):n.createElementNS(this.SVG_NS,f);this.renderer=a},animate:function(x,f,t){f=a.animObject(L(f,this.renderer.globalAnimation,!0));0!==f.duration?(t&&(f.complete=t),F(this,x,f)):(this.attr(x,null,t),f.step&&f.step.call(this));return this},colorGradient:function(x,f,t){var b=this.renderer,l,c,r,Q,e,h,n,y,E,w,J=[],B;x.radialGradient?c="radialGradient":x.linearGradient&&(c="linearGradient");c&&(r=x[c],e=b.gradients,n=x.stops,w=t.radialReference,H(r)&&(x[c]=
r={x1:r[0],y1:r[1],x2:r[2],y2:r[3],gradientUnits:"userSpaceOnUse"}),"radialGradient"===c&&w&&!u(r.gradientUnits)&&(Q=r,r=p(r,b.getRadialAttr(w,Q),{gradientUnits:"userSpaceOnUse"})),I(r,function(a,x){"id"!==x&&J.push(x,a)}),I(n,function(a){J.push(a)}),J=J.join(","),e[J]?w=e[J].attr("id"):(r.id=w=a.uniqueKey(),e[J]=h=b.createElement(c).attr(r).add(b.defs),h.radAttr=Q,h.stops=[],d(n,function(x){0===x[1].indexOf("rgba")?(l=a.color(x[1]),y=l.get("rgb"),E=l.get("a")):(y=x[1],E=1);x=b.createElement("stop").attr({offset:x[0],
"stop-color":y,"stop-opacity":E}).add(h);h.stops.push(x)})),B="url("+b.url+"#"+w+")",t.setAttribute(f,B),t.gradient=J,x.toString=function(){return B})},applyTextOutline:function(x){var f=this.element,t,b,l,c,r;-1!==x.indexOf("contrast")&&(x=x.replace(/contrast/g,this.renderer.getContrast(f.style.fill)));x=x.split(" ");b=x[x.length-1];if((l=x[0])&&"none"!==l&&a.svg){this.fakeTS=!0;x=[].slice.call(f.getElementsByTagName("tspan"));this.ySetter=this.xSetter;l=l.replace(/(^[\d\.]+)(.*?)$/g,function(a,
x,f){return 2*x+f});for(r=x.length;r--;)t=x[r],"highcharts-text-outline"===t.getAttribute("class")&&w(x,f.removeChild(t));c=f.firstChild;d(x,function(a,x){0===x&&(a.setAttribute("x",f.getAttribute("x")),x=f.getAttribute("y"),a.setAttribute("y",x||0),null===x&&f.setAttribute("y",0));a=a.cloneNode(1);m(a,{"class":"highcharts-text-outline",fill:b,stroke:b,"stroke-width":l,"stroke-linejoin":"round"});f.insertBefore(a,c)})}},attr:function(a,f,t,b){var x,l=this.element,c,r=this,d,p;"string"===typeof a&&
void 0!==f&&(x=a,a={},a[x]=f);"string"===typeof a?r=(this[a+"Getter"]||this._defaultGetter).call(this,a,l):(I(a,function(x,f){d=!1;b||R(this,f);this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)$/.test(f)&&(c||(this.symbolAttr(a),c=!0),d=!0);!this.rotation||"x"!==f&&"y"!==f||(this.doTransform=!0);d||(p=this[f+"Setter"]||this._defaultSetter,p.call(this,x,f,l),this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(f)&&this.updateShadows(f,x,p))},this),this.afterSetters());
t&&t();return r},afterSetters:function(){this.doTransform&&(this.updateTransform(),this.doTransform=!1)},updateShadows:function(a,f,t){for(var x=this.shadows,b=x.length;b--;)t.call(x[b],"height"===a?Math.max(f-(x[b].cutHeight||0),0):"d"===a?this.d:f,a,x[b])},addClass:function(a,f){var x=this.attr("class")||"";-1===x.indexOf(a)&&(f||(a=(x+(x?" ":"")+a).replace("  "," ")),this.attr("class",a));return this},hasClass:function(a){return-1!==m(this.element,"class").indexOf(a)},removeClass:function(a){m(this.element,
"class",(m(this.element,"class")||"").replace(a,""));return this},symbolAttr:function(a){var x=this;d("x y r start end width height innerR anchorX anchorY".split(" "),function(f){x[f]=L(a[f],x[f])});x.attr({d:x.renderer.symbols[x.symbolName](x.x,x.y,x.width,x.height,x)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":"none")},crisp:function(a,f){var x=this,t={},b;f=f||a.strokeWidth||0;b=Math.round(f)%2/2;a.x=Math.floor(a.x||x.x||0)+b;a.y=Math.floor(a.y||x.y||
0)+b;a.width=Math.floor((a.width||x.width||0)-2*b);a.height=Math.floor((a.height||x.height||0)-2*b);u(a.strokeWidth)&&(a.strokeWidth=f);I(a,function(a,f){x[f]!==a&&(x[f]=t[f]=a)});return t},css:function(a){var x=this.styles,t={},b=this.element,l,r="",d,p=!x,e=["textOutline","textOverflow","width"];a&&a.color&&(a.fill=a.color);x&&I(a,function(a,f){a!==x[f]&&(t[f]=a,p=!0)});p&&(x&&(a=c(x,t)),l=this.textWidth=a&&a.width&&"auto"!==a.width&&"text"===b.nodeName.toLowerCase()&&f(a.width),this.styles=a,l&&
!J&&this.renderer.forExport&&delete a.width,B&&!J?q(this.element,a):(d=function(a,x){return"-"+x.toLowerCase()},I(a,function(a,x){-1===D(x,e)&&(r+=x.replace(/([A-Z])/g,d)+":"+a+";")}),r&&m(b,"style",r)),this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline)));return this},strokeWidth:function(){return this["stroke-width"]||0},on:function(a,f){var x=this,t=x.element;y&&"click"===a?(t.ontouchstart=function(a){x.touchEventFired=
Date.now();a.preventDefault();f.call(t,a)},t.onclick=function(a){(-1===P.navigator.userAgent.indexOf("Android")||1100<Date.now()-(x.touchEventFired||0))&&f.call(t,a)}):t["on"+a]=f;return this},setRadialReference:function(a){var x=this.renderer.gradients[this.element.gradient];this.element.radialReference=a;x&&x.radAttr&&x.animate(this.renderer.getRadialAttr(a,x.radAttr));return this},translate:function(a,f){return this.attr({translateX:a,translateY:f})},invert:function(a){this.inverted=a;this.updateTransform();
return this},updateTransform:function(){var a=this.translateX||0,f=this.translateY||0,t=this.scaleX,b=this.scaleY,l=this.inverted,c=this.rotation,r=this.element;l&&(a+=this.width,f+=this.height);a=["translate("+a+","+f+")"];l?a.push("rotate(90) scale(-1,1)"):c&&a.push("rotate("+c+" "+(r.getAttribute("x")||0)+" "+(r.getAttribute("y")||0)+")");(u(t)||u(b))&&a.push("scale("+L(t,1)+" "+L(b,1)+")");a.length&&r.setAttribute("transform",a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);
return this},align:function(a,f,t){var x,b,l,c,r={};b=this.renderer;l=b.alignedObjects;var d,p;if(a){if(this.alignOptions=a,this.alignByTranslate=f,!t||z(t))this.alignTo=x=t||"renderer",w(l,this),l.push(this),t=null}else a=this.alignOptions,f=this.alignByTranslate,x=this.alignTo;t=L(t,b[x],b);x=a.align;b=a.verticalAlign;l=(t.x||0)+(a.x||0);c=(t.y||0)+(a.y||0);"right"===x?d=1:"center"===x&&(d=2);d&&(l+=(t.width-(a.width||0))/d);r[f?"translateX":"x"]=Math.round(l);"bottom"===b?p=1:"middle"===b&&(p=
2);p&&(c+=(t.height-(a.height||0))/p);r[f?"translateY":"y"]=Math.round(c);this[this.placed?"animate":"attr"](r);this.placed=!0;this.alignAttr=r;return this},getBBox:function(a,f){var x,t=this.renderer,b,l=this.element,r=this.styles,p,e=this.textStr,n,Q=t.cache,y=t.cacheKeys,E;f=L(f,this.rotation);b=f*h;p=r&&r.fontSize;void 0!==e&&(E=e.toString(),-1===E.indexOf("\x3c")&&(E=E.replace(/[0-9]/g,"0")),E+=["",f||0,p,r&&r.width,r&&r.textOverflow].join());E&&!a&&(x=Q[E]);if(!x){if(l.namespaceURI===this.SVG_NS||
t.forExport){try{(n=this.fakeTS&&function(a){d(l.querySelectorAll(".highcharts-text-outline"),function(x){x.style.display=a})})&&n("none"),x=l.getBBox?c({},l.getBBox()):{width:l.offsetWidth,height:l.offsetHeight},n&&n("")}catch(X){}if(!x||0>x.width)x={width:0,height:0}}else x=this.htmlGetBBox();t.isSVG&&(a=x.width,t=x.height,r&&"11px"===r.fontSize&&17===Math.round(t)&&(x.height=t=14),f&&(x.width=Math.abs(t*Math.sin(b))+Math.abs(a*Math.cos(b)),x.height=Math.abs(t*Math.cos(b))+Math.abs(a*Math.sin(b))));
if(E&&0<x.height){for(;250<y.length;)delete Q[y.shift()];Q[E]||y.push(E);Q[E]=x}}return x},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var x=this;x.animate({opacity:0},{duration:a||150,complete:function(){x.attr({y:-9999})}})},add:function(a){var x=this.renderer,f=this.element,t;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;void 0!==this.textStr&&x.buildText(this);this.added=!0;if(!a||
a.handleZ||this.zIndex)t=this.zIndexSetter();t||(a?a.element:x.box).appendChild(f);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var x=a.parentNode;x&&x.removeChild(a)},destroy:function(){var a=this,f=a.element||{},t=a.renderer.isSVG&&"SPAN"===f.nodeName&&a.parentGroup,b=f.ownerSVGElement;f.onclick=f.onmouseout=f.onmouseover=f.onmousemove=f.point=null;R(a);a.clipPath&&b&&(d(b.querySelectorAll("[clip-path]"),function(x){-1<x.getAttribute("clip-path").indexOf(a.clipPath.element.id+
")")&&x.removeAttribute("clip-path")}),a.clipPath=a.clipPath.destroy());if(a.stops){for(b=0;b<a.stops.length;b++)a.stops[b]=a.stops[b].destroy();a.stops=null}a.safeRemoveChild(f);for(a.destroyShadows();t&&t.div&&0===t.div.childNodes.length;)f=t.parentGroup,a.safeRemoveChild(t.div),delete t.div,t=f;a.alignTo&&w(a.renderer.alignedObjects,a);I(a,function(x,f){delete a[f]});return null},shadow:function(a,f,t){var x=[],b,l,c=this.element,r,d,p,e;if(!a)this.destroyShadows();else if(!this.shadows){d=L(a.width,
3);p=(a.opacity||.15)/d;e=this.parentInverted?"(-1,-1)":"("+L(a.offsetX,1)+", "+L(a.offsetY,1)+")";for(b=1;b<=d;b++)l=c.cloneNode(0),r=2*d+1-2*b,m(l,{isShadow:"true",stroke:a.color||"#000000","stroke-opacity":p*b,"stroke-width":r,transform:"translate"+e,fill:"none"}),t&&(m(l,"height",Math.max(m(l,"height")-r,0)),l.cutHeight=r),f?f.element.appendChild(l):c.parentNode.insertBefore(l,c),x.push(l);this.shadows=x}return this},destroyShadows:function(){d(this.shadows||[],function(a){this.safeRemoveChild(a)},
this);this.shadows=void 0},xGetter:function(a){"circle"===this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)},_defaultGetter:function(a){a=L(this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,f,t){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");t.setAttribute(f,a);this[f]=a},dashstyleSetter:function(a){var x,t=this["stroke-width"];"inherit"===t&&(t=1);if(a=a&&a.toLowerCase()){a=
a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(x=a.length;x--;)a[x]=f(a[x])*t;a=a.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a])},opacitySetter:function(a,f,t){this[f]=
a;t.setAttribute(f,a)},titleSetter:function(a){var f=this.element.getElementsByTagName("title")[0];f||(f=n.createElementNS(this.SVG_NS,"title"),this.element.appendChild(f));f.firstChild&&f.removeChild(f.firstChild);f.appendChild(n.createTextNode(String(L(a),"").replace(/<[^>]*>/g,"")))},textSetter:function(a){a!==this.textStr&&(delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this))},fillSetter:function(a,f,t){"string"===typeof a?t.setAttribute(f,a):a&&this.colorGradient(a,f,t)},
visibilitySetter:function(a,f,t){"inherit"===a?t.removeAttribute(f):t.setAttribute(f,a)},zIndexSetter:function(a,t){var x=this.renderer,b=this.parentGroup,l=(b||x).element||x.box,c,r=this.element,d;c=this.added;var p;u(a)&&(r.zIndex=a,a=+a,this[t]===a&&(c=!1),this[t]=a);if(c){(a=this.zIndex)&&b&&(b.handleZ=!0);t=l.childNodes;for(p=0;p<t.length&&!d;p++)b=t[p],c=b.zIndex,b!==r&&(f(c)>a||!u(a)&&u(c)||0>a&&!u(c)&&l!==x.box)&&(l.insertBefore(r,b),d=!0);d||l.appendChild(r)}return d},_defaultSetter:function(a,
f,t){t.setAttribute(f,a)}});C.prototype.yGetter=C.prototype.xGetter;C.prototype.translateXSetter=C.prototype.translateYSetter=C.prototype.rotationSetter=C.prototype.verticalAlignSetter=C.prototype.scaleXSetter=C.prototype.scaleYSetter=function(a,f){this[f]=a;this.doTransform=!0};C.prototype["stroke-widthSetter"]=C.prototype.strokeSetter=function(a,f,t){this[f]=a;this.stroke&&this["stroke-width"]?(C.prototype.fillSetter.call(this,this.stroke,"stroke",t),t.setAttribute("stroke-width",this["stroke-width"]),
this.hasStroke=!0):"stroke-width"===f&&0===a&&this.hasStroke&&(t.removeAttribute("stroke"),this.hasStroke=!1)};A=a.SVGRenderer=function(){this.init.apply(this,arguments)};c(A.prototype,{Element:C,SVG_NS:N,init:function(a,f,t,b,c,r){var x;b=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"}).css(this.getStyle(b));x=b.element;a.appendChild(x);-1===a.innerHTML.indexOf("xmlns")&&m(x,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=x;this.boxWrapper=b;this.alignedObjects=[];this.url=(l||
M)&&n.getElementsByTagName("base").length?P.location.href.replace(/#.*?$/,"").replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(n.createTextNode("Created with Highcharts 5.0.12"));this.defs=this.createElement("defs").add();this.allowHTML=r;this.forExport=c;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(f,t,!1);var d;l&&a.getBoundingClientRect&&(f=function(){q(a,{left:0,top:0});d=a.getBoundingClientRect();
q(a,{left:Math.ceil(d.left)-d.left+"px",top:Math.ceil(d.top)-d.top+"px"})},f(),this.unSubPixelFix=G(P,"resize",f))},getStyle:function(a){return this.style=c({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},setStyle:function(a){this.boxWrapper.css(this.getStyle(a))},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();e(this.gradients||{});this.gradients=
null;a&&(this.defs=a.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null},createElement:function(a){var f=new this.Element;f.init(this,a);return f},draw:E,getRadialAttr:function(a,f){return{cx:a[0]-a[2]/2+f.cx*a[2],cy:a[1]-a[2]/2+f.cy*a[2],r:f.r*a[2]}},getSpanWidth:function(a,f){var t=a.getBBox(!0).width;!J&&this.forExport&&(t=this.measureSpanWidth(f.firstChild.data,a.styles));return t},applyEllipsis:function(a,f,t,b){var x=this.getSpanWidth(a,f),l=x>b,x=t,c,r=0,d=
t.length,p=function(a){f.removeChild(f.firstChild);a&&f.appendChild(n.createTextNode(a))};if(l){for(;r<=d;)c=Math.ceil((r+d)/2),x=t.substring(0,c)+"\u2026",p(x),x=this.getSpanWidth(a,f),r===d?r=d+1:x>b?d=c-1:r=c;0===d&&p("")}return l},buildText:function(a){var t=a.element,x=this,l=x.forExport,c=L(a.textStr,"").toString(),r=-1!==c.indexOf("\x3c"),p=t.childNodes,e,h,E,y,w=m(t,"x"),B=a.styles,g=a.textWidth,I=B&&B.lineHeight,z=B&&B.textOutline,D=B&&"ellipsis"===B.textOverflow,k=B&&"nowrap"===B.whiteSpace,
u=B&&B.fontSize,R,H,v=p.length,B=g&&!a.added&&this.box,M=function(a){var b;b=/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:u||x.style.fontSize||12;return I?f(I):x.fontMetrics(b,a.getAttribute("style")?a:t).h};R=[c,D,k,I,z,u,g].join();if(R!==a.textCache){for(a.textCache=R;v--;)t.removeChild(p[v]);r||z||D||g||-1!==c.indexOf(" ")?(e=/<.*class="([^"]+)".*>/,h=/<.*style="([^"]+)".*>/,E=/<.*href="([^"]+)".*>/,B&&B.appendChild(t),c=r?c.replace(/<(b|strong)>/g,'\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g,
'\x3cspan style\x3d"font-style:italic"\x3e').replace(/<a/g,"\x3cspan").replace(/<\/(b|strong|i|em|a)>/g,"\x3c/span\x3e").split(/<br.*?>/g):[c],c=b(c,function(a){return""!==a}),d(c,function(f,b){var c,r=0;f=f.replace(/^\s+|\s+$/g,"").replace(/<span/g,"|||\x3cspan").replace(/<\/span>/g,"\x3c/span\x3e|||");c=f.split("|||");d(c,function(f){if(""!==f||1===c.length){var d={},p=n.createElementNS(x.SVG_NS,"tspan"),B,I;e.test(f)&&(B=f.match(e)[1],m(p,"class",B));h.test(f)&&(I=f.match(h)[1].replace(/(;| |^)color([ :])/,
"$1fill$2"),m(p,"style",I));E.test(f)&&!l&&(m(p,"onclick",'location.href\x3d"'+f.match(E)[1]+'"'),q(p,{cursor:"pointer"}));f=(f.replace(/<(.|\n)*?>/g,"")||" ").replace(/&lt;/g,"\x3c").replace(/&gt;/g,"\x3e");if(" "!==f){p.appendChild(n.createTextNode(f));r?d.dx=0:b&&null!==w&&(d.x=w);m(p,d);t.appendChild(p);!r&&H&&(!J&&l&&q(p,{display:"block"}),m(p,"dy",M(p)));if(g){d=f.replace(/([^\^])-/g,"$1- ").split(" ");B=1<c.length||b||1<d.length&&!k;var z=[],Q,u=M(p),R=a.rotation;for(D&&(y=x.applyEllipsis(a,
p,f,g));!D&&B&&(d.length||z.length);)a.rotation=0,Q=x.getSpanWidth(a,p),f=Q>g,void 0===y&&(y=f),f&&1!==d.length?(p.removeChild(p.firstChild),z.unshift(d.pop())):(d=z,z=[],d.length&&!k&&(p=n.createElementNS(N,"tspan"),m(p,{dy:u,x:w}),I&&m(p,"style",I),t.appendChild(p)),Q>g&&(g=Q)),d.length&&p.appendChild(n.createTextNode(d.join(" ").replace(/- /g,"-")));a.rotation=R}r++}}});H=H||t.childNodes.length}),y&&a.attr("title",a.textStr),B&&B.removeChild(t),z&&a.applyTextOutline&&a.applyTextOutline(z)):t.appendChild(n.createTextNode(c.replace(/&lt;/g,
"\x3c").replace(/&gt;/g,"\x3e")))}},getContrast:function(a){a=k(a).rgba;return 510<a[0]+a[1]+a[2]?"#000000":"#FFFFFF"},button:function(a,f,t,b,l,r,d,e,h){var x=this.label(a,f,t,h,null,null,null,null,"button"),n=0;x.attr(p({padding:8,r:2},l));var E,y,w,J;l=p({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},l);E=l.style;delete l.style;r=p(l,{fill:"#e6e6e6"},r);y=r.style;delete r.style;d=p(l,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},
d);w=d.style;delete d.style;e=p(l,{style:{color:"#cccccc"}},e);J=e.style;delete e.style;G(x.element,B?"mouseover":"mouseenter",function(){3!==n&&x.setState(1)});G(x.element,B?"mouseout":"mouseleave",function(){3!==n&&x.setState(n)});x.setState=function(a){1!==a&&(x.state=n=a);x.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][a||0]);x.attr([l,r,d,e][a||0]).css([E,y,w,J][a||0])};x.attr(l).css(c({cursor:"default"},
E));return x.on("click",function(a){3!==n&&b.call(x,a)})},crispLine:function(a,f){a[1]===a[4]&&(a[1]=a[4]=Math.round(a[1])-f%2/2);a[2]===a[5]&&(a[2]=a[5]=Math.round(a[2])+f%2/2);return a},path:function(a){var f={fill:"none"};H(a)?f.d=a:r(a)&&c(f,a);return this.createElement("path").attr(f)},circle:function(a,f,t){a=r(a)?a:{x:a,y:f,r:t};f=this.createElement("circle");f.xSetter=f.ySetter=function(a,f,t){t.setAttribute("c"+f,a)};return f.attr(a)},arc:function(a,f,t,b,l,c){r(a)?(b=a,f=b.y,t=b.r,a=b.x):
b={innerR:b,start:l,end:c};a=this.symbol("arc",a,f,t,t,b);a.r=t;return a},rect:function(a,f,t,b,l,c){l=r(a)?a.r:l;var x=this.createElement("rect");a=r(a)?a:void 0===a?{}:{x:a,y:f,width:Math.max(t,0),height:Math.max(b,0)};void 0!==c&&(a.strokeWidth=c,a=x.crisp(a));a.fill="none";l&&(a.r=l);x.rSetter=function(a,f,t){m(t,{rx:a,ry:a})};return x.attr(a)},setSize:function(a,f,t){var b=this.alignedObjects,l=b.length;this.width=a;this.height=f;for(this.boxWrapper.animate({width:a,height:f},{step:function(){this.attr({viewBox:"0 0 "+
this.attr("width")+" "+this.attr("height")})},duration:L(t,!0)?void 0:0});l--;)b[l].align()},g:function(a){var f=this.createElement("g");return a?f.attr({"class":"highcharts-"+a}):f},image:function(a,f,t,b,l){var x={preserveAspectRatio:"none"};1<arguments.length&&c(x,{x:f,y:t,width:b,height:l});x=this.createElement("image").attr(x);x.element.setAttributeNS?x.element.setAttributeNS("http://www.w3.org/1999/xlink","href",a):x.element.setAttribute("hc-svg-href",a);return x},symbol:function(a,f,t,b,l,
r){var x=this,p,e=/^url\((.*?)\)$/,h=e.test(a),E=!h&&(this.symbols[a]?a:"circle"),y=E&&this.symbols[E],B=u(f)&&y&&y.call(this.symbols,Math.round(f),Math.round(t),b,l,r),w,J;y?(p=this.path(B),p.attr("fill","none"),c(p,{symbolName:E,x:f,y:t,width:b,height:l}),r&&c(p,r)):h&&(w=a.match(e)[1],p=this.image(w),p.imgwidth=L(O[w]&&O[w].width,r&&r.width),p.imgheight=L(O[w]&&O[w].height,r&&r.height),J=function(){p.attr({width:p.width,height:p.height})},d(["width","height"],function(a){p[a+"Setter"]=function(a,
f){var t={},b=this["img"+f],l="width"===f?"translateX":"translateY";this[f]=a;u(b)&&(this.element&&this.element.setAttribute(f,b),this.alignByTranslate||(t[l]=((this[f]||0)-b)/2,this.attr(t)))}}),u(f)&&p.attr({x:f,y:t}),p.isImg=!0,u(p.imgwidth)&&u(p.imgheight)?J():(p.attr({width:0,height:0}),v("img",{onload:function(){var a=g[x.chartIndex];0===this.width&&(q(this,{position:"absolute",top:"-999em"}),n.body.appendChild(this));O[w]={width:this.width,height:this.height};p.imgwidth=this.width;p.imgheight=
this.height;p.element&&J();this.parentNode&&this.parentNode.removeChild(this);x.imgCount--;if(!x.imgCount&&a&&a.onload)a.onload()},src:w}),this.imgCount++));return p},symbols:{circle:function(a,f,t,b){return this.arc(a+t/2,f+b/2,t/2,b/2,{start:0,end:2*Math.PI,open:!1})},square:function(a,f,t,b){return["M",a,f,"L",a+t,f,a+t,f+b,a,f+b,"Z"]},triangle:function(a,f,t,b){return["M",a+t/2,f,"L",a+t,f+b,a,f+b,"Z"]},"triangle-down":function(a,f,t,b){return["M",a,f,"L",a+t,f,a+t/2,f+b,"Z"]},diamond:function(a,
f,t,b){return["M",a+t/2,f,"L",a+t,f+b/2,a+t/2,f+b,a,f+b/2,"Z"]},arc:function(a,f,t,b,l){var c=l.start,x=l.r||t,r=l.r||b||t,p=l.end-.001;t=l.innerR;b=l.open;var d=Math.cos(c),e=Math.sin(c),h=Math.cos(p),p=Math.sin(p);l=l.end-c<Math.PI?0:1;x=["M",a+x*d,f+r*e,"A",x,r,0,l,1,a+x*h,f+r*p];u(t)&&x.push(b?"M":"L",a+t*h,f+t*p,"A",t,t,0,l,0,a+t*d,f+t*e);x.push(b?"":"Z");return x},callout:function(a,f,t,b,l){var c=Math.min(l&&l.r||0,t,b),r=c+6,p=l&&l.anchorX;l=l&&l.anchorY;var d;d=["M",a+c,f,"L",a+t-c,f,"C",
a+t,f,a+t,f,a+t,f+c,"L",a+t,f+b-c,"C",a+t,f+b,a+t,f+b,a+t-c,f+b,"L",a+c,f+b,"C",a,f+b,a,f+b,a,f+b-c,"L",a,f+c,"C",a,f,a,f,a+c,f];p&&p>t?l>f+r&&l<f+b-r?d.splice(13,3,"L",a+t,l-6,a+t+6,l,a+t,l+6,a+t,f+b-c):d.splice(13,3,"L",a+t,b/2,p,l,a+t,b/2,a+t,f+b-c):p&&0>p?l>f+r&&l<f+b-r?d.splice(33,3,"L",a,l+6,a-6,l,a,l-6,a,f+c):d.splice(33,3,"L",a,b/2,p,l,a,b/2,a,f+c):l&&l>b&&p>a+r&&p<a+t-r?d.splice(23,3,"L",p+6,f+b,p,f+b+6,p-6,f+b,a+c,f+b):l&&0>l&&p>a+r&&p<a+t-r&&d.splice(3,3,"L",p-6,f,p,f-6,p+6,f,t-c,f);return d}},
clipRect:function(f,t,b,l){var c=a.uniqueKey(),r=this.createElement("clipPath").attr({id:c}).add(this.defs);f=this.rect(f,t,b,l,0).add(r);f.id=c;f.clipPath=r;f.count=0;return f},text:function(a,f,t,b){var l=!J&&this.forExport,c={};if(b&&(this.allowHTML||!this.forExport))return this.html(a,f,t);c.x=Math.round(f||0);t&&(c.y=Math.round(t));if(a||0===a)c.text=a;a=this.createElement("text").attr(c);l&&a.css({position:"absolute"});b||(a.xSetter=function(a,f,t){var b=t.getElementsByTagName("tspan"),l,c=
t.getAttribute(f),r;for(r=0;r<b.length;r++)l=b[r],l.getAttribute(f)===c&&l.setAttribute(f,a);t.setAttribute(f,a)});return a},fontMetrics:function(a,t){a=a||t&&t.style&&t.style.fontSize||this.style&&this.style.fontSize;a=/px/.test(a)?f(a):/em/.test(a)?parseFloat(a)*(t?this.fontMetrics(null,t.parentNode).f:16):12;t=24>a?a+3:Math.round(1.2*a);return{h:t,b:Math.round(.8*t),f:a}},rotCorr:function(a,f,t){var b=a;f&&t&&(b=Math.max(b*Math.cos(f*h),4));return{x:-a/3*Math.sin(f*h),y:b}},label:function(f,b,
l,r,e,h,n,E,y){var x=this,B=x.g("button"!==y&&"label"),w=B.text=x.text("",0,0,n).attr({zIndex:1}),J,g,I=0,z=3,D=0,q,k,m,R,H,v={},N,M,L=/^url\((.*?)\)$/.test(r),Q=L,V,U,O,P;y&&B.addClass("highcharts-"+y);Q=L;V=function(){return(N||0)%2/2};U=function(){var a=w.element.style,f={};g=(void 0===q||void 0===k||H)&&u(w.textStr)&&w.getBBox();B.width=(q||g.width||0)+2*z+D;B.height=(k||g.height||0)+2*z;M=z+x.fontMetrics(a&&a.fontSize,w).b;Q&&(J||(B.box=J=x.symbols[r]||L?x.symbol(r):x.rect(),J.addClass(("button"===
y?"":"highcharts-label-box")+(y?" highcharts-"+y+"-box":"")),J.add(B),a=V(),f.x=a,f.y=(E?-M:0)+a),f.width=Math.round(B.width),f.height=Math.round(B.height),J.attr(c(f,v)),v={})};O=function(){var a=D+z,f;f=E?0:M;u(q)&&g&&("center"===H||"right"===H)&&(a+={center:.5,right:1}[H]*(q-g.width));if(a!==w.x||f!==w.y)w.attr("x",a),void 0!==f&&w.attr("y",f);w.x=a;w.y=f};P=function(a,f){J?J.attr(a,f):v[a]=f};B.onAdd=function(){w.add(B);B.attr({text:f||0===f?f:"",x:b,y:l});J&&u(e)&&B.attr({anchorX:e,anchorY:h})};
B.widthSetter=function(f){q=a.isNumber(f)?f:null};B.heightSetter=function(a){k=a};B["text-alignSetter"]=function(a){H=a};B.paddingSetter=function(a){u(a)&&a!==z&&(z=B.padding=a,O())};B.paddingLeftSetter=function(a){u(a)&&a!==D&&(D=a,O())};B.alignSetter=function(a){a={left:0,center:.5,right:1}[a];a!==I&&(I=a,g&&B.attr({x:m}))};B.textSetter=function(a){void 0!==a&&w.textSetter(a);U();O()};B["stroke-widthSetter"]=function(a,f){a&&(Q=!0);N=this["stroke-width"]=a;P(f,a)};B.strokeSetter=B.fillSetter=B.rSetter=
function(a,f){"fill"===f&&a&&(Q=!0);P(f,a)};B.anchorXSetter=function(a,f){e=B.anchorX=a;P(f,Math.round(a)-V()-m)};B.anchorYSetter=function(a,f){h=B.anchorY=a;P(f,a-R)};B.xSetter=function(a){B.x=a;I&&(a-=I*((q||g.width)+2*z));m=Math.round(a);B.attr("translateX",m)};B.ySetter=function(a){R=B.y=Math.round(a);B.attr("translateY",R)};var W=B.css;return c(B,{css:function(a){if(a){var f={};a=p(a);d(B.textProps,function(t){void 0!==a[t]&&(f[t]=a[t],delete a[t])});w.css(f)}return W.call(B,a)},getBBox:function(){return{width:g.width+
2*z,height:g.height+2*z,x:g.x-z,y:g.y-z}},shadow:function(a){a&&(U(),J&&J.shadow(a));return B},destroy:function(){t(B.element,"mouseenter");t(B.element,"mouseleave");w&&(w=w.destroy());J&&(J=J.destroy());C.prototype.destroy.call(B);B=x=U=O=P=null}})}});a.Renderer=A})(K);(function(a){var C=a.attr,A=a.createElement,G=a.css,F=a.defined,m=a.each,g=a.extend,k=a.isFirefox,q=a.isMS,v=a.isWebKit,u=a.pInt,h=a.SVGRenderer,e=a.win,n=a.wrap;g(a.SVGElement.prototype,{htmlCss:function(a){var c=this.element;if(c=
a&&"SPAN"===c.tagName&&a.width)delete a.width,this.textWidth=c,this.updateTransform();a&&"ellipsis"===a.textOverflow&&(a.whiteSpace="nowrap",a.overflow="hidden");this.styles=g(this.styles,a);G(this.element,a);return this},htmlGetBBox:function(){var a=this.element;"text"===a.nodeName&&(a.style.position="absolute");return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,c=this.element,e=this.translateX||0,b=this.translateY||
0,h=this.x||0,n=this.y||0,g=this.textAlign||"left",l={left:0,center:.5,right:1}[g],B=this.styles;G(c,{marginLeft:e,marginTop:b});this.shadows&&m(this.shadows,function(a){G(a,{marginLeft:e+1,marginTop:b+1})});this.inverted&&m(c.childNodes,function(b){a.invertChild(b,c)});if("SPAN"===c.tagName){var r=this.rotation,z=u(this.textWidth),q=B&&B.whiteSpace,p=[r,g,c.innerHTML,this.textWidth,this.textAlign].join();p!==this.cTT&&(B=a.fontMetrics(c.style.fontSize).b,F(r)&&this.setSpanRotation(r,l,B),G(c,{width:"",
whiteSpace:q||"nowrap"}),c.offsetWidth>z&&/[ \-]/.test(c.textContent||c.innerText)&&G(c,{width:z+"px",display:"block",whiteSpace:q||"normal"}),this.getSpanCorrection(c.offsetWidth,B,l,r,g));G(c,{left:h+(this.xCorr||0)+"px",top:n+(this.yCorr||0)+"px"});v&&(B=c.offsetHeight);this.cTT=p}}else this.alignOnAdd=!0},setSpanRotation:function(a,c,h){var b={},d=q?"-ms-transform":v?"-webkit-transform":k?"MozTransform":e.opera?"-o-transform":"";b[d]=b.transform="rotate("+a+"deg)";b[d+(k?"Origin":"-origin")]=
b.transformOrigin=100*c+"% "+h+"px";G(this.element,b)},getSpanCorrection:function(a,c,e){this.xCorr=-a*e;this.yCorr=-c}});g(h.prototype,{html:function(a,c,e){var b=this.createElement("span"),d=b.element,h=b.renderer,w=h.isSVG,l=function(a,b){m(["opacity","visibility"],function(l){n(a,l+"Setter",function(a,l,c,r){a.call(this,l,c,r);b[c]=l})})};b.textSetter=function(a){a!==d.innerHTML&&delete this.bBox;d.innerHTML=this.textStr=a;b.htmlUpdateTransform()};w&&l(b,b.element.style);b.xSetter=b.ySetter=b.alignSetter=
b.rotationSetter=function(a,l){"align"===l&&(l="textAlign");b[l]=a;b.htmlUpdateTransform()};b.attr({text:a,x:Math.round(c),y:Math.round(e)}).css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize,position:"absolute"});d.style.whiteSpace="nowrap";b.css=b.htmlCss;w&&(b.add=function(a){var c,e=h.box.parentNode,B=[];if(this.parentGroup=a){if(c=a.div,!c){for(;a;)B.push(a),a=a.parentGroup;m(B.reverse(),function(a){var r,p=C(a.element,"class");p&&(p={className:p});c=a.div=a.div||A("div",p,{position:"absolute",
left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,pointerEvents:a.styles&&a.styles.pointerEvents},c||e);r=c.style;g(a,{on:function(){b.on.apply({element:B[0].div},arguments);return a},translateXSetter:function(b,f){r.left=b+"px";a[f]=b;a.doTransform=!0},translateYSetter:function(b,f){r.top=b+"px";a[f]=b;a.doTransform=!0}});l(a,r)})}}else c=e;c.appendChild(d);b.added=!0;b.alignOnAdd&&b.htmlUpdateTransform();return b});return b}})})(K);(function(a){var C,A,G=
a.createElement,F=a.css,m=a.defined,g=a.deg2rad,k=a.discardElement,q=a.doc,v=a.each,u=a.erase,h=a.extend;C=a.extendClass;var e=a.isArray,n=a.isNumber,d=a.isObject,c=a.merge;A=a.noop;var w=a.pick,b=a.pInt,y=a.SVGElement,D=a.SVGRenderer,H=a.win;a.svg||(A={docMode8:q&&8===q.documentMode,init:function(a,b){var l=["\x3c",b,' filled\x3d"f" stroked\x3d"f"'],c=["position: ","absolute",";"],d="div"===b;("shape"===b||d)&&c.push("left:0;top:0;width:1px;height:1px;");c.push("visibility: ",d?"hidden":"visible");
l.push(' style\x3d"',c.join(""),'"/\x3e');b&&(l=d||"span"===b||"img"===b?l.join(""):a.prepVML(l),this.element=G(l));this.renderer=a},add:function(a){var b=this.renderer,l=this.element,c=b.box,d=a&&a.inverted,c=a?a.element||a:c;a&&(this.parentGroup=a);d&&b.invertChild(l,c);c.appendChild(l);this.added=!0;this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform();if(this.onAdd)this.onAdd();this.className&&this.attr("class",this.className);return this},updateTransform:y.prototype.htmlUpdateTransform,
setSpanRotation:function(){var a=this.rotation,b=Math.cos(a*g),c=Math.sin(a*g);F(this.element,{filter:a?["progid:DXImageTransform.Microsoft.Matrix(M11\x3d",b,", M12\x3d",-c,", M21\x3d",c,", M22\x3d",b,", sizingMethod\x3d'auto expand')"].join(""):"none"})},getSpanCorrection:function(a,b,c,d,e){var l=d?Math.cos(d*g):1,r=d?Math.sin(d*g):0,h=w(this.elemHeight,this.element.offsetHeight),n;this.xCorr=0>l&&-a;this.yCorr=0>r&&-h;n=0>l*r;this.xCorr+=r*b*(n?1-c:c);this.yCorr-=l*b*(d?n?c:1-c:1);e&&"left"!==
e&&(this.xCorr-=a*c*(0>l?-1:1),d&&(this.yCorr-=h*c*(0>r?-1:1)),F(this.element,{textAlign:e}))},pathToVML:function(a){for(var b=a.length,l=[];b--;)n(a[b])?l[b]=Math.round(10*a[b])-5:"Z"===a[b]?l[b]="x":(l[b]=a[b],!a.isArc||"wa"!==a[b]&&"at"!==a[b]||(l[b+5]===l[b+7]&&(l[b+7]+=a[b+7]>a[b+5]?1:-1),l[b+6]===l[b+8]&&(l[b+8]+=a[b+8]>a[b+6]?1:-1)));return l.join(" ")||"x"},clip:function(a){var b=this,l;a?(l=a.members,u(l,b),l.push(b),b.destroyClip=function(){u(l,b)},a=a.getCSS(b)):(b.destroyClip&&b.destroyClip(),
a={clip:b.docMode8?"inherit":"rect(auto)"});return b.css(a)},css:y.prototype.htmlCss,safeRemoveChild:function(a){a.parentNode&&k(a)},destroy:function(){this.destroyClip&&this.destroyClip();return y.prototype.destroy.apply(this)},on:function(a,b){this.element["on"+a]=function(){var a=H.event;a.target=a.srcElement;b(a)};return this},cutOffPath:function(a,c){var l;a=a.split(/[ ,]/);l=a.length;if(9===l||11===l)a[l-4]=a[l-2]=b(a[l-2])-10*c;return a.join(" ")},shadow:function(a,c,d){var l=[],r,p=this.element,
e=this.renderer,h,n=p.style,f,t=p.path,y,J,g,B;t&&"string"!==typeof t.value&&(t="x");J=t;if(a){g=w(a.width,3);B=(a.opacity||.15)/g;for(r=1;3>=r;r++)y=2*g+1-2*r,d&&(J=this.cutOffPath(t.value,y+.5)),f=['\x3cshape isShadow\x3d"true" strokeweight\x3d"',y,'" filled\x3d"false" path\x3d"',J,'" coordsize\x3d"10 10" style\x3d"',p.style.cssText,'" /\x3e'],h=G(e.prepVML(f),null,{left:b(n.left)+w(a.offsetX,1),top:b(n.top)+w(a.offsetY,1)}),d&&(h.cutOff=y+1),f=['\x3cstroke color\x3d"',a.color||"#000000",'" opacity\x3d"',
B*r,'"/\x3e'],G(e.prepVML(f),null,null,h),c?c.element.appendChild(h):p.parentNode.insertBefore(h,p),l.push(h);this.shadows=l}return this},updateShadows:A,setAttr:function(a,b){this.docMode8?this.element[a]=b:this.element.setAttribute(a,b)},classSetter:function(a){(this.added?this.element:this).className=a},dashstyleSetter:function(a,b,c){(c.getElementsByTagName("stroke")[0]||G(this.renderer.prepVML(["\x3cstroke/\x3e"]),null,null,c))[b]=a||"solid";this[b]=a},dSetter:function(a,b,c){var l=this.shadows;
a=a||[];this.d=a.join&&a.join(" ");c.path=a=this.pathToVML(a);if(l)for(c=l.length;c--;)l[c].path=l[c].cutOff?this.cutOffPath(a,l[c].cutOff):a;this.setAttr(b,a)},fillSetter:function(a,b,c){var l=c.nodeName;"SPAN"===l?c.style.color=a:"IMG"!==l&&(c.filled="none"!==a,this.setAttr("fillcolor",this.renderer.color(a,c,b,this)))},"fill-opacitySetter":function(a,b,c){G(this.renderer.prepVML(["\x3c",b.split("-")[0],' opacity\x3d"',a,'"/\x3e']),null,null,c)},opacitySetter:A,rotationSetter:function(a,b,c){c=
c.style;this[b]=c[b]=a;c.left=-Math.round(Math.sin(a*g)+1)+"px";c.top=Math.round(Math.cos(a*g))+"px"},strokeSetter:function(a,b,c){this.setAttr("strokecolor",this.renderer.color(a,c,b,this))},"stroke-widthSetter":function(a,b,c){c.stroked=!!a;this[b]=a;n(a)&&(a+="px");this.setAttr("strokeweight",a)},titleSetter:function(a,b){this.setAttr(b,a)},visibilitySetter:function(a,b,c){"inherit"===a&&(a="visible");this.shadows&&v(this.shadows,function(c){c.style[b]=a});"DIV"===c.nodeName&&(a="hidden"===a?"-999em":
0,this.docMode8||(c.style[b]=a?"visible":"hidden"),b="top");c.style[b]=a},xSetter:function(a,b,c){this[b]=a;"x"===b?b="left":"y"===b&&(b="top");this.updateClipping?(this[b]=a,this.updateClipping()):c.style[b]=a},zIndexSetter:function(a,b,c){c.style[b]=a}},A["stroke-opacitySetter"]=A["fill-opacitySetter"],a.VMLElement=A=C(y,A),A.prototype.ySetter=A.prototype.widthSetter=A.prototype.heightSetter=A.prototype.xSetter,A={Element:A,isIE8:-1<H.navigator.userAgent.indexOf("MSIE 8.0"),init:function(a,b,c){var l,
d;this.alignedObjects=[];l=this.createElement("div").css({position:"relative"});d=l.element;a.appendChild(l.element);this.isVML=!0;this.box=d;this.boxWrapper=l;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(b,c,!1);if(!q.namespaces.hcv){q.namespaces.add("hcv","urn:schemas-microsoft-com:vml");try{q.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}catch(p){q.styleSheets[0].cssText+="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}}},
isHidden:function(){return!this.box.offsetWidth},clipRect:function(a,b,c,e){var l=this.createElement(),p=d(a);return h(l,{members:[],count:0,left:(p?a.x:a)+1,top:(p?a.y:b)+1,width:(p?a.width:c)-1,height:(p?a.height:e)-1,getCSS:function(a){var b=a.element,c=b.nodeName,f=a.inverted,t=this.top-("shape"===c?b.offsetTop:0),l=this.left,b=l+this.width,p=t+this.height,t={clip:"rect("+Math.round(f?l:t)+"px,"+Math.round(f?p:b)+"px,"+Math.round(f?b:p)+"px,"+Math.round(f?t:l)+"px)"};!f&&a.docMode8&&"DIV"===c&&
h(t,{width:b+"px",height:p+"px"});return t},updateClipping:function(){v(l.members,function(a){a.element&&a.css(l.getCSS(a))})}})},color:function(b,c,d,e){var l=this,p,r=/^rgba/,h,n,f="none";b&&b.linearGradient?n="gradient":b&&b.radialGradient&&(n="pattern");if(n){var t,y,w=b.linearGradient||b.radialGradient,g,q,B,x,D,z="";b=b.stops;var k,m=[],u=function(){h=['\x3cfill colors\x3d"'+m.join(",")+'" opacity\x3d"',B,'" o:opacity2\x3d"',q,'" type\x3d"',n,'" ',z,'focus\x3d"100%" method\x3d"any" /\x3e'];
G(l.prepVML(h),null,null,c)};g=b[0];k=b[b.length-1];0<g[0]&&b.unshift([0,g[1]]);1>k[0]&&b.push([1,k[1]]);v(b,function(f,b){r.test(f[1])?(p=a.color(f[1]),t=p.get("rgb"),y=p.get("a")):(t=f[1],y=1);m.push(100*f[0]+"% "+t);b?(B=y,x=t):(q=y,D=t)});if("fill"===d)if("gradient"===n)d=w.x1||w[0]||0,b=w.y1||w[1]||0,g=w.x2||w[2]||0,w=w.y2||w[3]||0,z='angle\x3d"'+(90-180*Math.atan((w-b)/(g-d))/Math.PI)+'"',u();else{var f=w.r,H=2*f,A=2*f,C=w.cx,F=w.cy,T=c.radialReference,K,f=function(){T&&(K=e.getBBox(),C+=(T[0]-
K.x)/K.width-.5,F+=(T[1]-K.y)/K.height-.5,H*=T[2]/K.width,A*=T[2]/K.height);z='src\x3d"'+a.getOptions().global.VMLRadialGradientURL+'" size\x3d"'+H+","+A+'" origin\x3d"0.5,0.5" position\x3d"'+C+","+F+'" color2\x3d"'+D+'" ';u()};e.added?f():e.onAdd=f;f=x}else f=t}else r.test(b)&&"IMG"!==c.tagName?(p=a.color(b),e[d+"-opacitySetter"](p.get("a"),d,c),f=p.get("rgb")):(f=c.getElementsByTagName(d),f.length&&(f[0].opacity=1,f[0].type="solid"),f=b);return f},prepVML:function(a){var b=this.isIE8;a=a.join("");
b?(a=a.replace("/\x3e",' xmlns\x3d"urn:schemas-microsoft-com:vml" /\x3e'),a=-1===a.indexOf('style\x3d"')?a.replace("/\x3e",' style\x3d"display:inline-block;behavior:url(#default#VML);" /\x3e'):a.replace('style\x3d"','style\x3d"display:inline-block;behavior:url(#default#VML);')):a=a.replace("\x3c","\x3chcv:");return a},text:D.prototype.html,path:function(a){var b={coordsize:"10 10"};e(a)?b.d=a:d(a)&&h(b,a);return this.createElement("shape").attr(b)},circle:function(a,b,c){var l=this.symbol("circle");
d(a)&&(c=a.r,b=a.y,a=a.x);l.isCircle=!0;l.r=c;return l.attr({x:a,y:b})},g:function(a){var b;a&&(b={className:"highcharts-"+a,"class":"highcharts-"+a});return this.createElement("div").attr(b)},image:function(a,b,c,d,e){var l=this.createElement("img").attr({src:a});1<arguments.length&&l.attr({x:b,y:c,width:d,height:e});return l},createElement:function(a){return"rect"===a?this.symbol(a):D.prototype.createElement.call(this,a)},invertChild:function(a,c){var d=this;c=c.style;var l="IMG"===a.tagName&&a.style;
F(a,{flip:"x",left:b(c.width)-(l?b(l.top):1),top:b(c.height)-(l?b(l.left):1),rotation:-90});v(a.childNodes,function(b){d.invertChild(b,a)})},symbols:{arc:function(a,b,c,d,e){var p=e.start,l=e.end,r=e.r||c||d;c=e.innerR;d=Math.cos(p);var h=Math.sin(p),f=Math.cos(l),t=Math.sin(l);if(0===l-p)return["x"];p=["wa",a-r,b-r,a+r,b+r,a+r*d,b+r*h,a+r*f,b+r*t];e.open&&!c&&p.push("e","M",a,b);p.push("at",a-c,b-c,a+c,b+c,a+c*f,b+c*t,a+c*d,b+c*h,"x","e");p.isArc=!0;return p},circle:function(a,b,c,d,e){e&&m(e.r)&&
(c=d=2*e.r);e&&e.isCircle&&(a-=c/2,b-=d/2);return["wa",a,b,a+c,b+d,a+c,b+d/2,a+c,b+d/2,"e"]},rect:function(a,b,c,d,e){return D.prototype.symbols[m(e)&&e.r?"callout":"square"].call(0,a,b,c,d,e)}}},a.VMLRenderer=C=function(){this.init.apply(this,arguments)},C.prototype=c(D.prototype,A),a.Renderer=C);D.prototype.measureSpanWidth=function(a,b){var c=q.createElement("span");a=q.createTextNode(a);c.appendChild(a);F(c,b);this.box.appendChild(c);b=c.offsetWidth;k(c);return b}})(K);(function(a){function C(){var g=
a.defaultOptions.global,k=q.moment;if(g.timezone){if(k)return function(a){return-k.tz(a,g.timezone).utcOffset()};a.error(25)}return g.useUTC&&g.getTimezoneOffset}function A(){var g=a.defaultOptions.global,u,h=g.useUTC,e=h?"getUTC":"get",n=h?"setUTC":"set";a.Date=u=g.Date||q.Date;u.hcTimezoneOffset=h&&g.timezoneOffset;u.hcGetTimezoneOffset=C();u.hcMakeTime=function(a,c,e,b,n,g){var d;h?(d=u.UTC.apply(0,arguments),d+=m(d)):d=(new u(a,c,k(e,1),k(b,0),k(n,0),k(g,0))).getTime();return d};F("Minutes Hours Day Date Month FullYear".split(" "),
function(a){u["hcGet"+a]=e+a});F("Milliseconds Seconds Minutes Hours Date Month FullYear".split(" "),function(a){u["hcSet"+a]=n+a})}var G=a.color,F=a.each,m=a.getTZOffset,g=a.merge,k=a.pick,q=a.win;a.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),
shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{useUTC:!0,VMLRadialGradientURL:"http://code.highcharts.com/5.0.12/gfx/vml-radial-gradient.png"},chart:{borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:20},
position:{align:"right",x:-10,y:10}},width:null,height:null,borderColor:"#335cad",backgroundColor:"#ffffff",plotBorderColor:"#cccccc"},title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},plotOptions:{},labels:{style:{position:"absolute",color:"#333333"}},legend:{enabled:!0,align:"center",layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},
itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold",textOverflow:"ellipsis"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,
animation:a.svg,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:a.isTouchDevice?25:10,backgroundColor:G("#f7f7f7").setOpacity(.85).get(),borderWidth:1,headerFormat:'\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e',
shadow:!0,style:{color:"#333333",cursor:"default",fontSize:"12px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};a.setOptions=function(q){a.defaultOptions=g(!0,a.defaultOptions,q);A();return a.defaultOptions};a.getOptions=function(){return a.defaultOptions};a.defaultPlotOptions=a.defaultOptions.plotOptions;A()})(K);
(function(a){var C=a.correctFloat,A=a.defined,G=a.destroyObjectProperties,F=a.isNumber,m=a.merge,g=a.pick,k=a.deg2rad;a.Tick=function(a,g,k,h){this.axis=a;this.pos=g;this.type=k||"";this.isNewLabel=this.isNew=!0;k||h||this.addLabel()};a.Tick.prototype={addLabel:function(){var a=this.axis,k=a.options,u=a.chart,h=a.categories,e=a.names,n=this.pos,d=k.labels,c=a.tickPositions,w=n===c[0],b=n===c[c.length-1],e=h?g(h[n],e[n],n):n,h=this.label,c=c.info,y;a.isDatetimeAxis&&c&&(y=k.dateTimeLabelFormats[c.higherRanks[n]||
c.unitName]);this.isFirst=w;this.isLast=b;k=a.labelFormatter.call({axis:a,chart:u,isFirst:w,isLast:b,dateTimeLabelFormat:y,value:a.isLog?C(a.lin2log(e)):e});A(h)?h&&h.attr({text:k}):(this.labelLength=(this.label=h=A(k)&&d.enabled?u.renderer.text(k,0,0,d.useHTML).css(m(d.style)).add(a.labelGroup):null)&&h.getBBox().width,this.rotation=0)},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(a){var q=this.axis,m=a.x,h=q.chart.chartWidth,
e=q.chart.spacing,n=g(q.labelLeft,Math.min(q.pos,e[3])),e=g(q.labelRight,Math.max(q.pos+q.len,h-e[1])),d=this.label,c=this.rotation,w={left:0,center:.5,right:1}[q.labelAlign],b=d.getBBox().width,y=q.getSlotWidth(),D=y,H=1,l,B={};if(c)0>c&&m-w*b<n?l=Math.round(m/Math.cos(c*k)-n):0<c&&m+w*b>e&&(l=Math.round((h-m)/Math.cos(c*k)));else if(h=m+(1-w)*b,m-w*b<n?D=a.x+D*(1-w)-n:h>e&&(D=e-a.x+D*w,H=-1),D=Math.min(y,D),D<y&&"center"===q.labelAlign&&(a.x+=H*(y-D-w*(y-Math.min(b,D)))),b>D||q.autoRotation&&(d.styles||
{}).width)l=D;l&&(B.width=l,(q.options.labels.style||{}).textOverflow||(B.textOverflow="ellipsis"),d.css(B))},getPosition:function(a,g,k,h){var e=this.axis,n=e.chart,d=h&&n.oldChartHeight||n.chartHeight;return{x:a?e.translate(g+k,null,null,h)+e.transB:e.left+e.offset+(e.opposite?(h&&n.oldChartWidth||n.chartWidth)-e.right-e.left:0),y:a?d-e.bottom+e.offset-(e.opposite?e.height:0):d-e.translate(g+k,null,null,h)-e.transB}},getLabelPosition:function(a,g,m,h,e,n,d,c){var w=this.axis,b=w.transA,y=w.reversed,
D=w.staggerLines,q=w.tickRotCorr||{x:0,y:0},l=e.y;A(l)||(l=0===w.side?m.rotation?-8:-m.getBBox().height:2===w.side?q.y+8:Math.cos(m.rotation*k)*(q.y-m.getBBox(!1,0).height/2));a=a+e.x+q.x-(n&&h?n*b*(y?-1:1):0);g=g+l-(n&&!h?n*b*(y?1:-1):0);D&&(m=d/(c||1)%D,w.opposite&&(m=D-m-1),g+=w.labelOffset/D*m);return{x:a,y:Math.round(g)}},getMarkPath:function(a,g,k,h,e,n){return n.crispLine(["M",a,g,"L",a+(e?0:-k),g+(e?k:0)],h)},renderGridLine:function(a,g,k){var h=this.axis,e=h.options,n=this.gridLine,d={},
c=this.pos,w=this.type,b=h.tickmarkOffset,y=h.chart.renderer,D=w?w+"Grid":"grid",q=e[D+"LineWidth"],l=e[D+"LineColor"],e=e[D+"LineDashStyle"];n||(d.stroke=l,d["stroke-width"]=q,e&&(d.dashstyle=e),w||(d.zIndex=1),a&&(d.opacity=0),this.gridLine=n=y.path().attr(d).addClass("highcharts-"+(w?w+"-":"")+"grid-line").add(h.gridGroup));if(!a&&n&&(a=h.getPlotLinePath(c+b,n.strokeWidth()*k,a,!0)))n[this.isNew?"attr":"animate"]({d:a,opacity:g})},renderMark:function(a,k,m){var h=this.axis,e=h.options,n=h.chart.renderer,
d=this.type,c=d?d+"Tick":"tick",w=h.tickSize(c),b=this.mark,y=!b,D=a.x;a=a.y;var q=g(e[c+"Width"],!d&&h.isXAxis?1:0),e=e[c+"Color"];w&&(h.opposite&&(w[0]=-w[0]),y&&(this.mark=b=n.path().addClass("highcharts-"+(d?d+"-":"")+"tick").add(h.axisGroup),b.attr({stroke:e,"stroke-width":q})),b[y?"attr":"animate"]({d:this.getMarkPath(D,a,w[0],b.strokeWidth()*m,h.horiz,n),opacity:k}))},renderLabel:function(a,k,m,h){var e=this.axis,n=e.horiz,d=e.options,c=this.label,w=d.labels,b=w.step,y=e.tickmarkOffset,D=!0,
q=a.x;a=a.y;c&&F(q)&&(c.xy=a=this.getLabelPosition(q,a,c,n,w,y,h,b),this.isFirst&&!this.isLast&&!g(d.showFirstLabel,1)||this.isLast&&!this.isFirst&&!g(d.showLastLabel,1)?D=!1:!n||e.isRadial||w.step||w.rotation||k||0===m||this.handleOverflow(a),b&&h%b&&(D=!1),D&&F(a.y)?(a.opacity=m,c[this.isNewLabel?"attr":"animate"](a),this.isNewLabel=!1):(c.attr("y",-9999),this.isNewLabel=!0),this.isNew=!1)},render:function(a,k,m){var h=this.axis,e=h.horiz,n=this.getPosition(e,this.pos,h.tickmarkOffset,k),d=n.x,
c=n.y,h=e&&d===h.pos+h.len||!e&&c===h.pos?-1:1;m=g(m,1);this.isActive=!0;this.renderGridLine(k,m,h);this.renderMark(n,m,h);this.renderLabel(n,k,m,a)},destroy:function(){G(this,this.axis)}}})(K);var S=function(a){var C=a.addEvent,A=a.animObject,G=a.arrayMax,F=a.arrayMin,m=a.color,g=a.correctFloat,k=a.defaultOptions,q=a.defined,v=a.deg2rad,u=a.destroyObjectProperties,h=a.each,e=a.extend,n=a.fireEvent,d=a.format,c=a.getMagnitude,w=a.grep,b=a.inArray,y=a.isArray,D=a.isNumber,H=a.isString,l=a.merge,B=
a.normalizeTickInterval,r=a.objectEach,z=a.pick,M=a.removeEvent,p=a.splat,E=a.syncTimeout,I=a.Tick,L=function(){this.init.apply(this,arguments)};a.extend(L.prototype,{defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,labels:{enabled:!0,style:{color:"#666666",cursor:"default",fontSize:"11px"},x:0},minPadding:.01,maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,
startOnTick:!1,tickLength:10,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",title:{align:"middle",style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"},defaultYAxisOptions:{endOnTick:!0,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},maxPadding:.05,minPadding:.05,startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{enabled:!1,
formatter:function(){return a.numberFormat(this.total,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"#000000",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},init:function(a,t){var f=t.isX,c=this;c.chart=a;c.horiz=
a.inverted&&!c.isZAxis?!f:f;c.isXAxis=f;c.coll=c.coll||(f?"xAxis":"yAxis");c.opposite=t.opposite;c.side=t.side||(c.horiz?c.opposite?0:2:c.opposite?1:3);c.setOptions(t);var d=this.options,e=d.type;c.labelFormatter=d.labels.formatter||c.defaultLabelFormatter;c.userOptions=t;c.minPixelPadding=0;c.reversed=d.reversed;c.visible=!1!==d.visible;c.zoomEnabled=!1!==d.zoomEnabled;c.hasNames="category"===e||!0===d.categories;c.categories=d.categories||c.hasNames;c.names=c.names||[];c.plotLinesAndBandsGroups=
{};c.isLog="logarithmic"===e;c.isDatetimeAxis="datetime"===e;c.positiveValuesOnly=c.isLog&&!c.allowNegativeLog;c.isLinked=q(d.linkedTo);c.ticks={};c.labelEdge=[];c.minorTicks={};c.plotLinesAndBands=[];c.alternateBands={};c.len=0;c.minRange=c.userMinRange=d.minRange||d.maxZoom;c.range=d.range;c.offset=d.offset||0;c.stacks={};c.oldStacks={};c.stacksTouched=0;c.max=null;c.min=null;c.crosshair=z(d.crosshair,p(a.options.tooltip.crosshairs)[f?0:1],!1);t=c.options.events;-1===b(c,a.axes)&&(f?a.axes.splice(a.xAxis.length,
0,c):a.axes.push(c),a[c.coll].push(c));c.series=c.series||[];a.inverted&&!c.isZAxis&&f&&void 0===c.reversed&&(c.reversed=!0);r(t,function(a,f){C(c,f,a)});c.lin2log=d.linearToLogConverter||c.lin2log;c.isLog&&(c.val2lin=c.log2lin,c.lin2val=c.lin2log)},setOptions:function(a){this.options=l(this.defaultOptions,"yAxis"===this.coll&&this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],l(k[this.coll],a))},
defaultLabelFormatter:function(){var f=this.axis,b=this.value,c=f.categories,p=this.dateTimeLabelFormat,e=k.lang,l=e.numericSymbols,e=e.numericSymbolMagnitude||1E3,r=l&&l.length,x,h=f.options.labels.format,f=f.isLog?Math.abs(b):f.tickInterval;if(h)x=d(h,this);else if(c)x=b;else if(p)x=a.dateFormat(p,b);else if(r&&1E3<=f)for(;r--&&void 0===x;)c=Math.pow(e,r+1),f>=c&&0===10*b%c&&null!==l[r]&&0!==b&&(x=a.numberFormat(b/c,-1)+l[r]);void 0===x&&(x=1E4<=Math.abs(b)?a.numberFormat(b,-1):a.numberFormat(b,
-1,void 0,""));return x},getSeriesExtremes:function(){var a=this,b=a.chart;a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();h(a.series,function(f){if(f.visible||!b.options.chart.ignoreHiddenSeries){var c=f.options,t=c.threshold,d;a.hasVisibleSeries=!0;a.positiveValuesOnly&&0>=t&&(t=null);if(a.isXAxis)c=f.xData,c.length&&(f=F(c),D(f)||f instanceof Date||(c=w(c,function(a){return D(a)}),f=F(c)),a.dataMin=Math.min(z(a.dataMin,c[0]),
f),a.dataMax=Math.max(z(a.dataMax,c[0]),G(c)));else if(f.getExtremes(),d=f.dataMax,f=f.dataMin,q(f)&&q(d)&&(a.dataMin=Math.min(z(a.dataMin,f),f),a.dataMax=Math.max(z(a.dataMax,d),d)),q(t)&&(a.threshold=t),!c.softThreshold||a.positiveValuesOnly)a.softThreshold=!1}})},translate:function(a,b,c,d,p,e){var f=this.linkedParent||this,t=1,l=0,r=d?f.oldTransA:f.transA;d=d?f.oldMin:f.min;var h=f.minPixelPadding;p=(f.isOrdinal||f.isBroken||f.isLog&&p)&&f.lin2val;r||(r=f.transA);c&&(t*=-1,l=f.len);f.reversed&&
(t*=-1,l-=t*(f.sector||f.len));b?(a=(a*t+l-h)/r+d,p&&(a=f.lin2val(a))):(p&&(a=f.val2lin(a)),a=t*(a-d)*r+l+t*h+(D(e)?r*e:0));return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-(b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,b,c,d,p){var f=this.chart,t=this.left,e=this.top,l,r,h=c&&f.oldChartHeight||f.chartHeight,n=c&&f.oldChartWidth||f.chartWidth,w;l=this.transB;var g=function(a,f,b){if(a<
f||a>b)d?a=Math.min(Math.max(f,a),b):w=!0;return a};p=z(p,this.translate(a,null,null,c));a=c=Math.round(p+l);l=r=Math.round(h-p-l);D(p)?this.horiz?(l=e,r=h-this.bottom,a=c=g(a,t,t+this.width)):(a=t,c=n-this.right,l=r=g(l,e,e+this.height)):w=!0;return w&&!d?null:f.renderer.crispLine(["M",a,l,"L",c,r],b||1)},getLinearTickPositions:function(a,b,c){var f,t=g(Math.floor(b/a)*a);c=g(Math.ceil(c/a)*a);var d=[];if(this.single)return[b];for(b=t;b<=c;){d.push(b);b=g(b+a);if(b===f)break;f=b}return d},getMinorTickPositions:function(){var a=
this,b=a.options,c=a.tickPositions,d=a.minorTickInterval,p=[],e=a.pointRangePadding||0,l=a.min-e,e=a.max+e,x=e-l;if(x&&x/d<a.len/3)if(a.isLog)h(this.paddedTicks,function(b,f,c){f&&p.push.apply(p,a.getLogTickPositions(d,c[f-1],c[f],!0))});else if(a.isDatetimeAxis&&"auto"===b.minorTickInterval)p=p.concat(a.getTimeTicks(a.normalizeTimeTickInterval(d),l,e,b.startOfWeek));else for(b=l+(c[0]-l)%d;b<=e&&b!==p[0];b+=d)p.push(b);0!==p.length&&a.trimTicks(p);return p},adjustForMinRange:function(){var a=this.options,
b=this.min,c=this.max,d,p,e,l,x,r,n,w;this.isXAxis&&void 0===this.minRange&&!this.isLog&&(q(a.min)||q(a.max)?this.minRange=null:(h(this.series,function(a){r=a.xData;for(l=n=a.xIncrement?1:r.length-1;0<l;l--)if(x=r[l]-r[l-1],void 0===e||x<e)e=x}),this.minRange=Math.min(5*e,this.dataMax-this.dataMin)));c-b<this.minRange&&(p=this.dataMax-this.dataMin>=this.minRange,w=this.minRange,d=(w-c+b)/2,d=[b-d,z(a.min,b-d)],p&&(d[2]=this.isLog?this.log2lin(this.dataMin):this.dataMin),b=G(d),c=[b+w,z(a.max,b+w)],
p&&(c[2]=this.isLog?this.log2lin(this.dataMax):this.dataMax),c=F(c),c-b<w&&(d[0]=c-w,d[1]=z(a.min,c-w),b=G(d)));this.min=b;this.max=c},getClosest:function(){var a;this.categories?a=1:h(this.series,function(b){var f=b.closestPointRange,c=b.visible||!b.chart.options.chart.ignoreHiddenSeries;!b.noSharedTooltip&&q(f)&&c&&(a=q(a)?Math.min(a,f):f)});return a},nameToX:function(a){var f=y(this.categories),c=f?this.categories:this.names,d=a.options.x,p;a.series.requireSorting=!1;q(d)||(d=!1===this.options.uniqueNames?
a.series.autoIncrement():b(a.name,c));-1===d?f||(p=c.length):p=d;void 0!==p&&(this.names[p]=a.name);return p},updateNames:function(){var a=this;0<this.names.length&&(this.names.length=0,this.minRange=this.userMinRange,h(this.series||[],function(b){b.xIncrement=null;if(!b.points||b.isDirtyData)b.processData(),b.generatePoints();h(b.points,function(f,c){var t;f.options&&(t=a.nameToX(f),void 0!==t&&t!==f.x&&(f.x=t,b.xData[c]=t))})}))},setAxisTranslation:function(a){var b=this,f=b.max-b.min,c=b.axisPointRange||
0,d,p=0,e=0,l=b.linkedParent,r=!!b.categories,n=b.transA,w=b.isXAxis;if(w||r||c)d=b.getClosest(),l?(p=l.minPointOffset,e=l.pointRangePadding):h(b.series,function(a){var f=r?1:w?z(a.options.pointRange,d,0):b.axisPointRange||0;a=a.options.pointPlacement;c=Math.max(c,f);b.single||(p=Math.max(p,H(a)?0:f/2),e=Math.max(e,"on"===a?0:f))}),l=b.ordinalSlope&&d?b.ordinalSlope/d:1,b.minPointOffset=p*=l,b.pointRangePadding=e*=l,b.pointRange=Math.min(c,f),w&&(b.closestPointRange=d);a&&(b.oldTransA=n);b.translationSlope=
b.transA=n=b.options.staticScale||b.len/(f+e||1);b.transB=b.horiz?b.left:b.bottom;b.minPixelPadding=n*p},minFromRange:function(){return this.max-this.range},setTickInterval:function(b){var f=this,d=f.chart,p=f.options,e=f.isLog,l=f.log2lin,r=f.isDatetimeAxis,x=f.isXAxis,w=f.isLinked,y=p.maxPadding,E=p.minPadding,k=p.tickInterval,I=p.tickPixelInterval,m=f.categories,H=f.threshold,u=f.softThreshold,L,v,M,A;r||m||w||this.getTickAmount();M=z(f.userMin,p.min);A=z(f.userMax,p.max);w?(f.linkedParent=d[f.coll][p.linkedTo],
d=f.linkedParent.getExtremes(),f.min=z(d.min,d.dataMin),f.max=z(d.max,d.dataMax),p.type!==f.linkedParent.options.type&&a.error(11,1)):(!u&&q(H)&&(f.dataMin>=H?(L=H,E=0):f.dataMax<=H&&(v=H,y=0)),f.min=z(M,L,f.dataMin),f.max=z(A,v,f.dataMax));e&&(f.positiveValuesOnly&&!b&&0>=Math.min(f.min,z(f.dataMin,f.min))&&a.error(10,1),f.min=g(l(f.min),15),f.max=g(l(f.max),15));f.range&&q(f.max)&&(f.userMin=f.min=M=Math.max(f.min,f.minFromRange()),f.userMax=A=f.max,f.range=null);n(f,"foundExtremes");f.beforePadding&&
f.beforePadding();f.adjustForMinRange();!(m||f.axisPointRange||f.usePercentage||w)&&q(f.min)&&q(f.max)&&(l=f.max-f.min)&&(!q(M)&&E&&(f.min-=l*E),!q(A)&&y&&(f.max+=l*y));D(p.softMin)&&(f.min=Math.min(f.min,p.softMin));D(p.softMax)&&(f.max=Math.max(f.max,p.softMax));D(p.floor)&&(f.min=Math.max(f.min,p.floor));D(p.ceiling)&&(f.max=Math.min(f.max,p.ceiling));u&&q(f.dataMin)&&(H=H||0,!q(M)&&f.min<H&&f.dataMin>=H?f.min=H:!q(A)&&f.max>H&&f.dataMax<=H&&(f.max=H));f.tickInterval=f.min===f.max||void 0===f.min||
void 0===f.max?1:w&&!k&&I===f.linkedParent.options.tickPixelInterval?k=f.linkedParent.tickInterval:z(k,this.tickAmount?(f.max-f.min)/Math.max(this.tickAmount-1,1):void 0,m?1:(f.max-f.min)*I/Math.max(f.len,I));x&&!b&&h(f.series,function(a){a.processData(f.min!==f.oldMin||f.max!==f.oldMax)});f.setAxisTranslation(!0);f.beforeSetTickPositions&&f.beforeSetTickPositions();f.postProcessTickInterval&&(f.tickInterval=f.postProcessTickInterval(f.tickInterval));f.pointRange&&!k&&(f.tickInterval=Math.max(f.pointRange,
f.tickInterval));b=z(p.minTickInterval,f.isDatetimeAxis&&f.closestPointRange);!k&&f.tickInterval<b&&(f.tickInterval=b);r||e||k||(f.tickInterval=B(f.tickInterval,null,c(f.tickInterval),z(p.allowDecimals,!(.5<f.tickInterval&&5>f.tickInterval&&1E3<f.max&&9999>f.max)),!!this.tickAmount));this.tickAmount||(f.tickInterval=f.unsquish());this.setTickPositions()},setTickPositions:function(){var a=this.options,b,c=a.tickPositions,d=a.tickPositioner,p=a.startOnTick,l=a.endOnTick;this.tickmarkOffset=this.categories&&
"between"===a.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===a.minorTickInterval&&this.tickInterval?this.tickInterval/5:a.minorTickInterval;this.single=this.min===this.max&&q(this.min)&&!this.tickAmount&&(parseInt(this.min,10)===this.min||!1!==a.allowDecimals);this.tickPositions=b=c&&c.slice();!b&&(b=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,a.units),this.min,this.max,a.startOfWeek,this.ordinalPositions,this.closestPointRange,
!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),b.length>this.len&&(b=[b[0],b.pop()]),this.tickPositions=b,d&&(d=d.apply(this,[this.min,this.max])))&&(this.tickPositions=b=d);this.paddedTicks=b.slice(0);this.trimTicks(b,p,l);this.isLinked||(this.single&&(this.min-=.5,this.max+=.5),c||d||this.adjustTickAmount())},trimTicks:function(a,b,c){var f=a[0],d=a[a.length-1],p=this.minPointOffset||0;if(!this.isLinked){if(b&&
-Infinity!==f)this.min=f;else for(;this.min-p>a[0];)a.shift();if(c)this.max=d;else for(;this.max+p<a[a.length-1];)a.pop();0===a.length&&q(f)&&a.push((d+f)/2)}},alignToOthers:function(){var a={},b,c=this.options;!1===this.chart.options.chart.alignTicks||!1===c.alignTicks||this.isLog||h(this.chart[this.coll],function(f){var c=f.options,c=[f.horiz?c.left:c.top,c.width,c.height,c.pane].join();f.series.length&&(a[c]?b=!0:a[c]=1)});return b},getTickAmount:function(){var a=this.options,b=a.tickAmount,c=
a.tickPixelInterval;!q(a.tickInterval)&&this.len<c&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(b=2);!b&&this.alignToOthers()&&(b=Math.ceil(this.len/c)+1);4>b&&(this.finalTickAmt=b,b=5);this.tickAmount=b},adjustTickAmount:function(){var a=this.tickInterval,b=this.tickPositions,c=this.tickAmount,d=this.finalTickAmt,p=b&&b.length;if(p<c){for(;b.length<c;)b.push(g(b[b.length-1]+a));this.transA*=(p-1)/(c-1);this.max=b[b.length-1]}else p>c&&(this.tickInterval*=2,this.setTickPositions());
if(q(d)){for(a=c=b.length;a--;)(3===d&&1===a%2||2>=d&&0<a&&a<c-1)&&b.splice(a,1);this.finalTickAmt=void 0}},setScale:function(){var a,b;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();b=this.len!==this.oldAxisLength;h(this.series,function(b){if(b.isDirtyData||b.isDirty||b.xAxis.isDirty)a=!0});b||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.resetStacks&&this.resetStacks(),this.forceRedraw=
!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,this.isDirty||(this.isDirty=b||this.min!==this.oldMin||this.max!==this.oldMax)):this.cleanStacks&&this.cleanStacks()},setExtremes:function(a,b,c,d,p){var f=this,l=f.chart;c=z(c,!0);h(f.series,function(a){delete a.kdTree});p=e(p,{min:a,max:b});n(f,"setExtremes",p,function(){f.userMin=a;f.userMax=b;f.eventArgs=p;c&&l.redraw(d)})},zoom:function(a,b){var f=this.dataMin,c=this.dataMax,d=this.options,
p=Math.min(f,z(d.min,f)),d=Math.max(c,z(d.max,c));if(a!==this.min||b!==this.max)this.allowZoomOutside||(q(f)&&(a<p&&(a=p),a>d&&(a=d)),q(c)&&(b<p&&(b=p),b>d&&(b=d))),this.displayBtn=void 0!==a||void 0!==b,this.setExtremes(a,b,!1,void 0,{trigger:"zoom"});return!0},setAxisSize:function(){var a=this.chart,b=this.options,c=b.offsets||[0,0,0,0],d=this.horiz,p=z(b.width,a.plotWidth-c[3]+c[1]),l=z(b.height,a.plotHeight-c[0]+c[2]),e=z(b.top,a.plotTop+c[0]),b=z(b.left,a.plotLeft+c[3]),c=/%$/;c.test(l)&&(l=
Math.round(parseFloat(l)/100*a.plotHeight));c.test(e)&&(e=Math.round(parseFloat(e)/100*a.plotHeight+a.plotTop));this.left=b;this.top=e;this.width=p;this.height=l;this.bottom=a.chartHeight-l-e;this.right=a.chartWidth-p-b;this.len=Math.max(d?p:l,0);this.pos=d?b:e},getExtremes:function(){var a=this.isLog,b=this.lin2log;return{min:a?g(b(this.min)):this.min,max:a?g(b(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=
this.isLog,f=this.lin2log,c=b?f(this.min):this.min,b=b?f(this.max):this.max;null===a?a=c:c>a?a=c:b<a&&(a=b);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(z(a,0)-90*this.side+720)%360;return 15<a&&165>a?"right":195<a&&345>a?"left":"center"},tickSize:function(a){var b=this.options,f=b[a+"Length"],c=z(b[a+"Width"],"tick"===a&&this.isXAxis?1:0);if(c&&f)return"inside"===b[a+"Position"]&&(f=-f),[f,c]},labelMetrics:function(){var a=this.tickPositions&&this.tickPositions[0]||0;return this.chart.renderer.fontMetrics(this.options.labels.style&&
this.options.labels.style.fontSize,this.ticks[a]&&this.ticks[a].label)},unsquish:function(){var a=this.options.labels,b=this.horiz,c=this.tickInterval,d=c,p=this.len/(((this.categories?1:0)+this.max-this.min)/c),l,e=a.rotation,r=this.labelMetrics(),n,w=Number.MAX_VALUE,g,y=function(a){a/=p||1;a=1<a?Math.ceil(a):1;return a*c};b?(g=!a.staggerLines&&!a.step&&(q(e)?[e]:p<z(a.autoRotationLimit,80)&&a.autoRotation))&&h(g,function(a){var b;if(a===e||a&&-90<=a&&90>=a)n=y(Math.abs(r.h/Math.sin(v*a))),b=n+
Math.abs(a/360),b<w&&(w=b,l=a,d=n)}):a.step||(d=y(r.h));this.autoRotation=g;this.labelRotation=z(l,e);return d},getSlotWidth:function(){var a=this.chart,b=this.horiz,c=this.options.labels,d=Math.max(this.tickPositions.length-(this.categories?0:1),1),p=a.margin[3];return b&&2>(c.step||0)&&!c.rotation&&(this.staggerLines||1)*this.len/d||!b&&(p&&p-a.spacing[3]||.33*a.chartWidth)},renderUnsquish:function(){var a=this.chart,b=a.renderer,c=this.tickPositions,d=this.ticks,p=this.options.labels,e=this.horiz,
r=this.getSlotWidth(),x=Math.max(1,Math.round(r-2*(p.padding||5))),n={},w=this.labelMetrics(),g=p.style&&p.style.textOverflow,y,E=0,k,I;H(p.rotation)||(n.rotation=p.rotation||0);h(c,function(a){(a=d[a])&&a.labelLength>E&&(E=a.labelLength)});this.maxLabelLength=E;if(this.autoRotation)E>x&&E>w.h?n.rotation=this.labelRotation:this.labelRotation=0;else if(r&&(y={width:x+"px"},!g))for(y.textOverflow="clip",k=c.length;!e&&k--;)if(I=c[k],x=d[I].label)x.styles&&"ellipsis"===x.styles.textOverflow?x.css({textOverflow:"clip"}):
d[I].labelLength>r&&x.css({width:r+"px"}),x.getBBox().height>this.len/c.length-(w.h-w.f)&&(x.specCss={textOverflow:"ellipsis"});n.rotation&&(y={width:(E>.5*a.chartHeight?.33*a.chartHeight:a.chartHeight)+"px"},g||(y.textOverflow="ellipsis"));if(this.labelAlign=p.align||this.autoLabelAlign(this.labelRotation))n.align=this.labelAlign;h(c,function(a){var b=(a=d[a])&&a.label;b&&(b.attr(n),y&&b.css(l(y,b.specCss)),delete b.specCss,a.rotation=n.rotation)});this.tickRotCorr=b.rotCorr(w.b,this.labelRotation||
0,0!==this.side)},hasData:function(){return this.hasVisibleSeries||q(this.min)&&q(this.max)&&!!this.tickPositions},addTitle:function(a){var b=this.chart.renderer,f=this.horiz,c=this.opposite,d=this.options.title,p;this.axisTitle||((p=d.textAlign)||(p=(f?{low:"left",middle:"center",high:"right"}:{low:c?"right":"left",middle:"center",high:c?"left":"right"})[d.align]),this.axisTitle=b.text(d.text,0,0,d.useHTML).attr({zIndex:7,rotation:d.rotation||0,align:p}).addClass("highcharts-axis-title").css(d.style).add(this.axisGroup),
this.axisTitle.isNew=!0);this.axisTitle[a?"show":"hide"](!0)},generateTick:function(a){var b=this.ticks;b[a]?b[a].addLabel():b[a]=new I(this,a)},getOffset:function(){var a=this,b=a.chart,c=b.renderer,d=a.options,p=a.tickPositions,l=a.ticks,e=a.horiz,x=a.side,n=b.inverted&&!a.isZAxis?[1,0,3,2][x]:x,w,g,y=0,E,k=0,I=d.title,D=d.labels,m=0,B=b.axisOffset,b=b.clipOffset,H=[-1,1,1,-1][x],u=d.className,L=a.axisParent,v=this.tickSize("tick");w=a.hasData();a.showAxis=g=w||z(d.showEmpty,!0);a.staggerLines=
a.horiz&&D.staggerLines;a.axisGroup||(a.gridGroup=c.g("grid").attr({zIndex:d.gridZIndex||1}).addClass("highcharts-"+this.coll.toLowerCase()+"-grid "+(u||"")).add(L),a.axisGroup=c.g("axis").attr({zIndex:d.zIndex||2}).addClass("highcharts-"+this.coll.toLowerCase()+" "+(u||"")).add(L),a.labelGroup=c.g("axis-labels").attr({zIndex:D.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels "+(u||"")).add(L));w||a.isLinked?(h(p,function(b,c){a.generateTick(b,c)}),a.renderUnsquish(),!1===D.reserveSpace||
0!==x&&2!==x&&{1:"left",3:"right"}[x]!==a.labelAlign&&"center"!==a.labelAlign||h(p,function(a){m=Math.max(l[a].getLabelSize(),m)}),a.staggerLines&&(m*=a.staggerLines,a.labelOffset=m*(a.opposite?-1:1))):r(l,function(a,b){a.destroy();delete l[b]});I&&I.text&&!1!==I.enabled&&(a.addTitle(g),g&&!1!==I.reserveSpace&&(a.titleOffset=y=a.axisTitle.getBBox()[e?"height":"width"],E=I.offset,k=q(E)?0:z(I.margin,e?5:10)));a.renderLine();a.offset=H*z(d.offset,B[x]);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};c=0===x?
-a.labelMetrics().h:2===x?a.tickRotCorr.y:0;k=Math.abs(m)+k;m&&(k=k-c+H*(e?z(D.y,a.tickRotCorr.y+8*H):D.x));a.axisTitleMargin=z(E,k);B[x]=Math.max(B[x],a.axisTitleMargin+y+H*a.offset,k,w&&p.length&&v?v[0]+H*a.offset:0);p=2*Math.floor(a.axisLine.strokeWidth()/2);0<d.offset&&(p-=2*d.offset);b[n]=Math.max(b[n]||p,p)},getLinePath:function(a){var b=this.chart,c=this.opposite,f=this.offset,d=this.horiz,p=this.left+(c?this.width:0)+f,f=b.chartHeight-this.bottom-(c?this.height:0)+f;c&&(a*=-1);return b.renderer.crispLine(["M",
d?this.left:p,d?f:this.top,"L",d?b.chartWidth-this.right:p,d?f:b.chartHeight-this.bottom],a)},renderLine:function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,zIndex:7}))},getTitlePosition:function(){var a=this.horiz,b=this.left,c=this.top,d=this.len,p=this.options.title,l=a?b:c,e=this.opposite,r=this.offset,h=p.x||0,n=p.y||0,w=this.chart.renderer.fontMetrics(p.style&&
p.style.fontSize,this.axisTitle).f,d={low:l+(a?0:d),middle:l+d/2,high:l+(a?d:0)}[p.align],b=(a?c+this.height:b)+(a?1:-1)*(e?-1:1)*this.axisTitleMargin+(2===this.side?w:0);return{x:a?d+h:b+(e?this.width:0)+r+h,y:a?b+n-(e?this.height:0)+r:d+n}},renderMinorTick:function(a){var b=this.chart.hasRendered&&D(this.oldMin),c=this.minorTicks;c[a]||(c[a]=new I(this,a,"minor"));b&&c[a].isNew&&c[a].render(null,!0);c[a].render(null,!1,1)},renderTick:function(a,b){var c=this.isLinked,f=this.ticks,d=this.chart.hasRendered&&
D(this.oldMin);if(!c||a>=this.min&&a<=this.max)f[a]||(f[a]=new I(this,a)),d&&f[a].isNew&&f[a].render(b,!0,.1),f[a].render(b)},render:function(){var b=this,c=b.chart,d=b.options,p=b.isLog,l=b.lin2log,e=b.isLinked,n=b.tickPositions,x=b.axisTitle,w=b.ticks,g=b.minorTicks,y=b.alternateBands,k=d.stackLabels,m=d.alternateGridColor,q=b.tickmarkOffset,z=b.axisLine,B=b.showAxis,H=A(c.renderer.globalAnimation),u,L;b.labelEdge.length=0;b.overlap=!1;h([w,g,y],function(a){r(a,function(a){a.isActive=!1})});if(b.hasData()||
e)b.minorTickInterval&&!b.categories&&h(b.getMinorTickPositions(),function(a){b.renderMinorTick(a)}),n.length&&(h(n,function(a,c){b.renderTick(a,c)}),q&&(0===b.min||b.single)&&(w[-1]||(w[-1]=new I(b,-1,null,!0)),w[-1].render(-1))),m&&h(n,function(f,d){L=void 0!==n[d+1]?n[d+1]+q:b.max-q;0===d%2&&f<b.max&&L<=b.max+(c.polar?-q:q)&&(y[f]||(y[f]=new a.PlotLineOrBand(b)),u=f+q,y[f].options={from:p?l(u):u,to:p?l(L):L,color:m},y[f].render(),y[f].isActive=!0)}),b._addedPlotLB||(h((d.plotLines||[]).concat(d.plotBands||
[]),function(a){b.addPlotBandOrLine(a)}),b._addedPlotLB=!0);h([w,g,y],function(a){var b,f=[],d=H.duration;r(a,function(a,b){a.isActive||(a.render(b,!1,0),a.isActive=!1,f.push(b))});E(function(){for(b=f.length;b--;)a[f[b]]&&!a[f[b]].isActive&&(a[f[b]].destroy(),delete a[f[b]])},a!==y&&c.hasRendered&&d?d:0)});z&&(z[z.isPlaced?"animate":"attr"]({d:this.getLinePath(z.strokeWidth())}),z.isPlaced=!0,z[B?"show":"hide"](!0));x&&B&&(d=b.getTitlePosition(),D(d.y)?(x[x.isNew?"attr":"animate"](d),x.isNew=!1):
(x.attr("y",-9999),x.isNew=!0));k&&k.enabled&&b.renderStackTotals();b.isDirty=!1},redraw:function(){this.visible&&(this.render(),h(this.plotLinesAndBands,function(a){a.render()}));h(this.series,function(a){a.isDirty=!0})},keepProps:"extKey hcEvents names series userMax userMin".split(" "),destroy:function(a){var c=this,f=c.stacks,d=c.plotLinesAndBands,p;a||M(c);r(f,function(a,b){u(a);f[b]=null});h([c.ticks,c.minorTicks,c.alternateBands],function(a){u(a)});if(d)for(a=d.length;a--;)d[a].destroy();h("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross".split(" "),
function(a){c[a]&&(c[a]=c[a].destroy())});for(p in c.plotLinesAndBandsGroups)c.plotLinesAndBandsGroups[p]=c.plotLinesAndBandsGroups[p].destroy();r(c,function(a,f){-1===b(f,c.keepProps)&&delete c[f]})},drawCrosshair:function(a,b){var c,f=this.crosshair,d=z(f.snap,!0),p,l=this.cross;a||(a=this.cross&&this.cross.e);this.crosshair&&!1!==(q(b)||!d)?(d?q(b)&&(p=this.isXAxis?b.plotX:this.len-b.plotY):p=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos),q(p)&&(c=this.getPlotLinePath(b&&(this.isXAxis?
b.x:z(b.stackY,b.y)),null,null,null,p)||null),q(c)?(b=this.categories&&!this.isRadial,l||(this.cross=l=this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+(b?"category ":"thin ")+f.className).attr({zIndex:z(f.zIndex,2)}).add(),l.attr({stroke:f.color||(b?m("#ccd6eb").setOpacity(.25).get():"#cccccc"),"stroke-width":z(f.width,1)}),f.dashStyle&&l.attr({dashstyle:f.dashStyle})),l.show().attr({d:c}),b&&!f.width&&l.attr({"stroke-width":this.transA}),this.cross.e=a):this.hideCrosshair()):
this.hideCrosshair()},hideCrosshair:function(){this.cross&&this.cross.hide()}});return a.Axis=L}(K);(function(a){var C=a.Axis,A=a.Date,G=a.dateFormat,F=a.defaultOptions,m=a.defined,g=a.each,k=a.extend,q=a.getMagnitude,v=a.getTZOffset,u=a.normalizeTickInterval,h=a.pick,e=a.timeUnits;C.prototype.getTimeTicks=function(a,d,c,w){var b=[],n={},D=F.global.useUTC,q,l=new A(d-Math.max(v(d),v(c))),B=A.hcMakeTime,r=a.unitRange,z=a.count,u;if(m(d)){l[A.hcSetMilliseconds](r>=e.second?0:z*Math.floor(l.getMilliseconds()/
z));if(r>=e.second)l[A.hcSetSeconds](r>=e.minute?0:z*Math.floor(l.getSeconds()/z));if(r>=e.minute)l[A.hcSetMinutes](r>=e.hour?0:z*Math.floor(l[A.hcGetMinutes]()/z));if(r>=e.hour)l[A.hcSetHours](r>=e.day?0:z*Math.floor(l[A.hcGetHours]()/z));if(r>=e.day)l[A.hcSetDate](r>=e.month?1:z*Math.floor(l[A.hcGetDate]()/z));r>=e.month&&(l[A.hcSetMonth](r>=e.year?0:z*Math.floor(l[A.hcGetMonth]()/z)),q=l[A.hcGetFullYear]());if(r>=e.year)l[A.hcSetFullYear](q-q%z);if(r===e.week)l[A.hcSetDate](l[A.hcGetDate]()-l[A.hcGetDay]()+
h(w,1));q=l[A.hcGetFullYear]();w=l[A.hcGetMonth]();var p=l[A.hcGetDate](),E=l[A.hcGetHours]();if(A.hcTimezoneOffset||A.hcGetTimezoneOffset)u=(!D||!!A.hcGetTimezoneOffset)&&(c-d>4*e.month||v(d)!==v(c)),l=l.getTime(),l=new A(l+v(l));D=l.getTime();for(d=1;D<c;)b.push(D),D=r===e.year?B(q+d*z,0):r===e.month?B(q,w+d*z):!u||r!==e.day&&r!==e.week?u&&r===e.hour?B(q,w,p,E+d*z):D+r*z:B(q,w,p+d*z*(r===e.day?1:7)),d++;b.push(D);r<=e.hour&&1E4>b.length&&g(b,function(a){0===a%18E5&&"000000000"===G("%H%M%S%L",a)&&
(n[a]="day")})}b.info=k(a,{higherRanks:n,totalRange:r*z});return b};C.prototype.normalizeTimeTickInterval=function(a,d){var c=d||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]];d=c[c.length-1];var h=e[d[0]],b=d[1],n;for(n=0;n<c.length&&!(d=c[n],h=e[d[0]],b=d[1],c[n+1]&&a<=(h*b[b.length-1]+e[c[n+1][0]])/2);n++);h===e.year&&a<5*h&&(b=[1,2,5]);a=u(a/h,b,
"year"===d[0]?Math.max(q(a/h),1):1);return{unitRange:h,count:a,unitName:d[0]}}})(K);(function(a){var C=a.Axis,A=a.getMagnitude,G=a.map,F=a.normalizeTickInterval,m=a.pick;C.prototype.getLogTickPositions=function(a,k,q,v){var g=this.options,h=this.len,e=this.lin2log,n=this.log2lin,d=[];v||(this._minorAutoInterval=null);if(.5<=a)a=Math.round(a),d=this.getLinearTickPositions(a,k,q);else if(.08<=a)for(var h=Math.floor(k),c,w,b,y,D,g=.3<a?[1,2,4]:.15<a?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];h<q+1&&!D;h++)for(w=
g.length,c=0;c<w&&!D;c++)b=n(e(h)*g[c]),b>k&&(!v||y<=q)&&void 0!==y&&d.push(y),y>q&&(D=!0),y=b;else k=e(k),q=e(q),a=g[v?"minorTickInterval":"tickInterval"],a=m("auto"===a?null:a,this._minorAutoInterval,g.tickPixelInterval/(v?5:1)*(q-k)/((v?h/this.tickPositions.length:h)||1)),a=F(a,null,A(a)),d=G(this.getLinearTickPositions(a,k,q),n),v||(this._minorAutoInterval=a/5);v||(this.tickInterval=a);return d};C.prototype.log2lin=function(a){return Math.log(a)/Math.LN10};C.prototype.lin2log=function(a){return Math.pow(10,
a)}})(K);(function(a,C){var A=a.arrayMax,G=a.arrayMin,F=a.defined,m=a.destroyObjectProperties,g=a.each,k=a.erase,q=a.merge,v=a.pick;a.PlotLineOrBand=function(a,h){this.axis=a;h&&(this.options=h,this.id=h.id)};a.PlotLineOrBand.prototype={render:function(){var g=this,h=g.axis,e=h.horiz,n=g.options,d=n.label,c=g.label,w=n.to,b=n.from,y=n.value,k=F(b)&&F(w),m=F(y),l=g.svgElem,B=!l,r=[],z=n.color,M=v(n.zIndex,0),p=n.events,r={"class":"highcharts-plot-"+(k?"band ":"line ")+(n.className||"")},E={},I=h.chart.renderer,
L=k?"bands":"lines",f=h.log2lin;h.isLog&&(b=f(b),w=f(w),y=f(y));m?(r={stroke:z,"stroke-width":n.width},n.dashStyle&&(r.dashstyle=n.dashStyle)):k&&(z&&(r.fill=z),n.borderWidth&&(r.stroke=n.borderColor,r["stroke-width"]=n.borderWidth));E.zIndex=M;L+="-"+M;(z=h.plotLinesAndBandsGroups[L])||(h.plotLinesAndBandsGroups[L]=z=I.g("plot-"+L).attr(E).add());B&&(g.svgElem=l=I.path().attr(r).add(z));if(m)r=h.getPlotLinePath(y,l.strokeWidth());else if(k)r=h.getPlotBandPath(b,w,n);else return;B&&r&&r.length?(l.attr({d:r}),
p&&a.objectEach(p,function(a,b){l.on(b,function(a){p[b].apply(g,[a])})})):l&&(r?(l.show(),l.animate({d:r})):(l.hide(),c&&(g.label=c=c.destroy())));d&&F(d.text)&&r&&r.length&&0<h.width&&0<h.height&&!r.flat?(d=q({align:e&&k&&"center",x:e?!k&&4:10,verticalAlign:!e&&k&&"middle",y:e?k?16:10:k?6:-4,rotation:e&&!k&&90},d),this.renderLabel(d,r,k,M)):c&&c.hide();return g},renderLabel:function(a,h,e,n){var d=this.label,c=this.axis.chart.renderer;d||(d={align:a.textAlign||a.align,rotation:a.rotation,"class":"highcharts-plot-"+
(e?"band":"line")+"-label "+(a.className||"")},d.zIndex=n,this.label=d=c.text(a.text,0,0,a.useHTML).attr(d).add(),d.css(a.style));n=[h[1],h[4],e?h[6]:h[1]];h=[h[2],h[5],e?h[7]:h[2]];e=G(n);c=G(h);d.align(a,!1,{x:e,y:c,width:A(n)-e,height:A(h)-c});d.show()},destroy:function(){k(this.axis.plotLinesAndBands,this);delete this.axis;m(this)}};a.extend(C.prototype,{getPlotBandPath:function(a,h){var e=this.getPlotLinePath(h,null,null,!0),n=this.getPlotLinePath(a,null,null,!0),d=this.horiz,c=1;a=a<this.min&&
h<this.min||a>this.max&&h>this.max;n&&e?(a&&(n.flat=n.toString()===e.toString(),c=0),n.push(d&&e[4]===n[4]?e[4]+c:e[4],d||e[5]!==n[5]?e[5]:e[5]+c,d&&e[1]===n[1]?e[1]+c:e[1],d||e[2]!==n[2]?e[2]:e[2]+c)):n=null;return n},addPlotBand:function(a){return this.addPlotBandOrLine(a,"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,"plotLines")},addPlotBandOrLine:function(g,h){var e=(new a.PlotLineOrBand(this,g)).render(),n=this.userOptions;e&&(h&&(n[h]=n[h]||[],n[h].push(g)),this.plotLinesAndBands.push(e));
return e},removePlotBandOrLine:function(a){for(var h=this.plotLinesAndBands,e=this.options,n=this.userOptions,d=h.length;d--;)h[d].id===a&&h[d].destroy();g([e.plotLines||[],n.plotLines||[],e.plotBands||[],n.plotBands||[]],function(c){for(d=c.length;d--;)c[d].id===a&&k(c,c[d])})},removePlotBand:function(a){this.removePlotBandOrLine(a)},removePlotLine:function(a){this.removePlotBandOrLine(a)}})})(K,S);(function(a){var C=a.dateFormat,A=a.each,G=a.extend,F=a.format,m=a.isNumber,g=a.map,k=a.merge,q=a.pick,
v=a.splat,u=a.syncTimeout,h=a.timeUnits;a.Tooltip=function(){this.init.apply(this,arguments)};a.Tooltip.prototype={init:function(a,h){this.chart=a;this.options=h;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=h.split&&!a.inverted;this.shared=h.shared||this.split},cleanSplit:function(a){A(this.chart.series,function(e){var d=e&&e.tt;d&&(!d.isActive||a?e.tt=d.destroy():d.isActive=!1)})},getLabel:function(){var a=this.chart.renderer,h=this.options;this.label||(this.split?this.label=
a.g("tooltip"):(this.label=a.label("",0,0,h.shape||"callout",null,null,h.useHTML,null,"tooltip").attr({padding:h.padding,r:h.borderRadius}),this.label.attr({fill:h.backgroundColor,"stroke-width":h.borderWidth}).css(h.style).shadow(h.shadow)),this.label.attr({zIndex:8}).add());return this.label},update:function(a){this.destroy();k(!0,this.chart.options.tooltip.userOptions,a);this.init(this.chart,k(!0,this.options,a))},destroy:function(){this.label&&(this.label=this.label.destroy());this.split&&this.tt&&
(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());clearTimeout(this.hideTimer);clearTimeout(this.tooltipTimeout)},move:function(a,h,d,c){var e=this,b=e.now,n=!1!==e.options.animation&&!e.isHidden&&(1<Math.abs(a-b.x)||1<Math.abs(h-b.y)),g=e.followPointer||1<e.len;G(b,{x:n?(2*b.x+a)/3:a,y:n?(b.y+h)/2:h,anchorX:g?void 0:n?(2*b.anchorX+d)/3:d,anchorY:g?void 0:n?(b.anchorY+c)/2:c});e.getLabel().attr(b);n&&(clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){e&&e.move(a,
h,d,c)},32))},hide:function(a){var e=this;clearTimeout(this.hideTimer);a=q(a,this.options.hideDelay,500);this.isHidden||(this.hideTimer=u(function(){e.getLabel()[a?"fadeOut":"hide"]();e.isHidden=!0},a))},getAnchor:function(a,h){var d,c=this.chart,e=c.inverted,b=c.plotTop,n=c.plotLeft,k=0,m=0,l,q;a=v(a);d=a[0].tooltipPos;this.followPointer&&h&&(void 0===h.chartX&&(h=c.pointer.normalize(h)),d=[h.chartX-c.plotLeft,h.chartY-b]);d||(A(a,function(a){l=a.series.yAxis;q=a.series.xAxis;k+=a.plotX+(!e&&q?q.left-
n:0);m+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!e&&l?l.top-b:0)}),k/=a.length,m/=a.length,d=[e?c.plotWidth-m:k,this.shared&&!e&&1<a.length&&h?h.chartY-b:e?c.plotHeight-k:m]);return g(d,Math.round)},getPosition:function(a,h,d){var c=this.chart,e=this.distance,b={},n=d.h||0,g,k=["y",c.chartHeight,h,d.plotY+c.plotTop,c.plotTop,c.plotTop+c.plotHeight],l=["x",c.chartWidth,a,d.plotX+c.plotLeft,c.plotLeft,c.plotLeft+c.plotWidth],m=!this.followPointer&&q(d.ttBelow,!c.inverted===!!d.negative),r=function(a,
c,d,f,p,l){var h=d<f-e,r=f+e+d<c,g=f-e-d;f+=e;if(m&&r)b[a]=f;else if(!m&&h)b[a]=g;else if(h)b[a]=Math.min(l-d,0>g-n?g:g-n);else if(r)b[a]=Math.max(p,f+n+d>c?f:f+n);else return!1},z=function(a,c,d,f){var p;f<e||f>c-e?p=!1:b[a]=f<d/2?1:f>c-d/2?c-d-2:f-d/2;return p},v=function(a){var b=k;k=l;l=b;g=a},p=function(){!1!==r.apply(0,k)?!1!==z.apply(0,l)||g||(v(!0),p()):g?b.x=b.y=0:(v(!0),p())};(c.inverted||1<this.len)&&v();p();return b},defaultFormatter:function(a){var e=this.points||v(this),d;d=[a.tooltipFooterHeaderFormatter(e[0])];
d=d.concat(a.bodyFormatter(e));d.push(a.tooltipFooterHeaderFormatter(e[0],!0));return d},refresh:function(a,h){var d,c=this.options,e,b=a,g,n={},k=[];d=c.formatter||this.defaultFormatter;var n=this.shared,l;clearTimeout(this.hideTimer);this.followPointer=v(b)[0].series.tooltipOptions.followPointer;g=this.getAnchor(b,h);h=g[0];e=g[1];!n||b.series&&b.series.noSharedTooltip?n=b.getLabelConfig():(A(b,function(a){a.setState("hover");k.push(a.getLabelConfig())}),n={x:b[0].category,y:b[0].y},n.points=k,
b=b[0]);this.len=k.length;n=d.call(n,this);l=b.series;this.distance=q(l.tooltipOptions.distance,16);!1===n?this.hide():(d=this.getLabel(),this.isHidden&&d.attr({opacity:1}).show(),this.split?this.renderSplit(n,a):(c.style.width||d.css({width:this.chart.spacingBox.width}),d.attr({text:n&&n.join?n.join(""):n}),d.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+q(b.colorIndex,l.colorIndex)),d.attr({stroke:c.borderColor||b.color||l.color||"#666666"}),this.updatePosition({plotX:h,plotY:e,
negative:b.negative,ttBelow:b.ttBelow,h:g[2]||0})),this.isHidden=!1)},renderSplit:function(e,h){var d=this,c=[],g=this.chart,b=g.renderer,n=!0,k=this.options,m,l=this.getLabel();A(e.slice(0,h.length+1),function(a,e){e=h[e-1]||{isHeader:!0,plotX:h[0].plotX};var r=e.series||d,w=r.tt,p=e.series||{},y="highcharts-color-"+q(e.colorIndex,p.colorIndex,"none");w||(r.tt=w=b.label(null,null,null,"callout").addClass("highcharts-tooltip-box "+y).attr({padding:k.padding,r:k.borderRadius,fill:k.backgroundColor,
stroke:e.color||p.color||"#333333","stroke-width":k.borderWidth}).add(l));w.isActive=!0;w.attr({text:a});w.css(k.style);a=w.getBBox();p=a.width+w.strokeWidth();e.isHeader?(m=a.height,p=Math.max(0,Math.min(e.plotX+g.plotLeft-p/2,g.chartWidth-p))):p=e.plotX+g.plotLeft-q(k.distance,16)-p;0>p&&(n=!1);a=(e.series&&e.series.yAxis&&e.series.yAxis.pos)+(e.plotY||0);a-=g.plotTop;c.push({target:e.isHeader?g.plotHeight+m:a,rank:e.isHeader?1:0,size:r.tt.getBBox().height+1,point:e,x:p,tt:w})});this.cleanSplit();
a.distribute(c,g.plotHeight+m);A(c,function(a){var b=a.point,c=b.series;a.tt.attr({visibility:void 0===a.pos?"hidden":"inherit",x:n||b.isHeader?a.x:b.plotX+g.plotLeft+q(k.distance,16),y:a.pos+g.plotTop,anchorX:b.isHeader?b.plotX+g.plotLeft:b.plotX+c.xAxis.pos,anchorY:b.isHeader?a.pos+g.plotTop-15:b.plotY+c.yAxis.pos})})},updatePosition:function(a){var e=this.chart,d=this.getLabel(),d=(this.options.positioner||this.getPosition).call(this,d.width,d.height,a);this.move(Math.round(d.x),Math.round(d.y||
0),a.plotX+e.plotLeft,a.plotY+e.plotTop)},getDateFormat:function(a,g,d,c){var e=C("%m-%d %H:%M:%S.%L",g),b,n,k={millisecond:15,second:12,minute:9,hour:6,day:3},m="millisecond";for(n in h){if(a===h.week&&+C("%w",g)===d&&"00:00:00.000"===e.substr(6)){n="week";break}if(h[n]>a){n=m;break}if(k[n]&&e.substr(k[n])!=="01-01 00:00:00.000".substr(k[n]))break;"week"!==n&&(m=n)}n&&(b=c[n]);return b},getXDateFormat:function(a,h,d){h=h.dateTimeLabelFormats;var c=d&&d.closestPointRange;return(c?this.getDateFormat(c,
a.x,d.options.startOfWeek,h):h.day)||h.year},tooltipFooterHeaderFormatter:function(a,h){var d=h?"footer":"header";h=a.series;var c=h.tooltipOptions,e=c.xDateFormat,b=h.xAxis,g=b&&"datetime"===b.options.type&&m(a.key),d=c[d+"Format"];g&&!e&&(e=this.getXDateFormat(a,c,b));g&&e&&(d=d.replace("{point.key}","{point.key:"+e+"}"));return F(d,{point:a,series:h})},bodyFormatter:function(a){return g(a,function(a){var d=a.series.tooltipOptions;return(d.pointFormatter||a.point.tooltipFormatter).call(a.point,
d.pointFormat)})}}})(K);(function(a){var C=a.addEvent,A=a.attr,G=a.charts,F=a.color,m=a.css,g=a.defined,k=a.doc,q=a.each,v=a.extend,u=a.fireEvent,h=a.offset,e=a.pick,n=a.removeEvent,d=a.splat,c=a.Tooltip,w=a.win;a.Pointer=function(a,c){this.init(a,c)};a.Pointer.prototype={init:function(a,d){this.options=d;this.chart=a;this.runChartClick=d.chart.events&&!!d.chart.events.click;this.pinchDown=[];this.lastValidTouch={};c&&d.tooltip.enabled&&(a.tooltip=new c(a,d.tooltip),this.followTouchMove=e(d.tooltip.followTouchMove,
!0));this.setDOMEvents()},zoomOption:function(a){var b=this.chart,c=b.options.chart,d=c.zoomType||"",b=b.inverted;/touch/.test(a.type)&&(d=e(c.pinchType,d));this.zoomX=a=/x/.test(d);this.zoomY=d=/y/.test(d);this.zoomHor=a&&!b||d&&b;this.zoomVert=d&&!b||a&&b;this.hasZoom=a||d},normalize:function(a,c){var b,d;a=a||w.event;a.target||(a.target=a.srcElement);d=a.touches?a.touches.length?a.touches.item(0):a.changedTouches[0]:a;c||(this.chartPosition=c=h(this.chart.container));void 0===d.pageX?(b=Math.max(a.x,
a.clientX-c.left),c=a.y):(b=d.pageX-c.left,c=d.pageY-c.top);return v(a,{chartX:Math.round(b),chartY:Math.round(c)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};q(this.chart.axes,function(c){b[c.isXAxis?"xAxis":"yAxis"].push({axis:c,value:c.toValue(a[c.horiz?"chartX":"chartY"])})});return b},getKDPoints:function(a,c,d){var b=[],l,h,r;q(a,function(a){l=a.noSharedTooltip&&c;h=!c&&a.directTouch;a.visible&&!h&&e(a.options.enableMouseTracking,!0)&&(r=a.searchPoint(d,!l&&0>a.options.findNearestPointBy.indexOf("y")))&&
r.series&&b.push(r)});b.sort(function(a,b){var d=a.distX-b.distX,l=a.dist-b.dist,e=(b.series.group&&b.series.group.zIndex)-(a.series.group&&a.series.group.zIndex);return 0!==d&&c?d:0!==l?l:0!==e?e:a.series.index>b.series.index?-1:1});if(c&&b[0]&&!b[0].series.noSharedTooltip)for(a=b.length;a--;)(b[a].x!==b[0].x||b[a].series.noSharedTooltip)&&b.splice(a,1);return b},getPointFromEvent:function(a){a=a.target;for(var b;a&&!b;)b=a.point,a=a.parentNode;return b},getChartCoordinatesFromPoint:function(a,c){var b=
a.series,d=b.xAxis,b=b.yAxis;if(d&&b)return c?{chartX:d.len+d.pos-a.clientX,chartY:b.len+b.pos-a.plotY}:{chartX:a.clientX+d.pos,chartY:a.plotY+b.pos}},getHoverData:function(b,c,d,e,l,h){var r=b,g=c,r=l?d:[g];e=!(!e||!b);c=g&&!g.stickyTracking;var n=function(a,b){return 0===b},p;e?n=function(a){return a===b}:c?n=function(a){return a.series===g}:r=a.grep(d,function(a){return a.stickyTracking});p=e&&!l?[b]:this.getKDPoints(r,l,h);g=(r=a.find(p,n))&&r.series;e||c||!l||(p=this.getKDPoints(d,l,h));p.sort(function(a,
b){return a.series.index-b.series.index});return{hoverPoint:r,hoverSeries:g,hoverPoints:p}},runPointActions:function(b,c){var d=this.chart,h=d.tooltip,l=h?h.shared:!1,g=c||d.hoverPoint,r=g&&g.series||d.hoverSeries;c=this.getHoverData(g,r,d.series,!!c||r&&r.directTouch&&this.isDirectTouch,l,b);var n,w,g=c.hoverPoint;n=(r=c.hoverSeries)&&r.tooltipOptions.followPointer;w=(l=l&&g&&!g.series.noSharedTooltip)?c.hoverPoints:g?[g]:[];if(g&&(g!==d.hoverPoint||h&&h.isHidden)){q(d.hoverPoints||[],function(b){-1===
a.inArray(b,w)&&b.setState()});q(w||[],function(a){a.setState("hover")});if(d.hoverSeries!==r)r.onMouseOver();d.hoverPoint&&d.hoverPoint.firePointEvent("mouseOut");g.firePointEvent("mouseOver");d.hoverPoints=w;d.hoverPoint=g;h&&h.refresh(l?w:g,b)}else n&&h&&!h.isHidden&&(r=h.getAnchor([{}],b),h.updatePosition({plotX:r[0],plotY:r[1]}));this.unDocMouseMove||(this.unDocMouseMove=C(k,"mousemove",function(b){var c=G[a.hoverChartIndex];if(c)c.pointer.onDocumentMouseMove(b)}));q(d.axes,function(c){e(c.crosshair.snap,
!0)?a.find(w,function(a){return a.series[c.coll]===c})?c.drawCrosshair(b,g):c.hideCrosshair():c.drawCrosshair(b)})},reset:function(a,c){var b=this.chart,e=b.hoverSeries,l=b.hoverPoint,h=b.hoverPoints,g=b.tooltip,n=g&&g.shared?h:l;a&&n&&q(d(n),function(b){b.series.isCartesian&&void 0===b.plotX&&(a=!1)});if(a)g&&n&&(g.refresh(n),l&&(l.setState(l.state,!0),q(b.axes,function(a){a.crosshair&&a.drawCrosshair(null,l)})));else{if(l)l.onMouseOut();h&&q(h,function(a){a.setState()});if(e)e.onMouseOut();g&&g.hide(c);
this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());q(b.axes,function(a){a.hideCrosshair()});this.hoverX=b.hoverPoints=b.hoverPoint=null}},scaleGroups:function(a,c){var b=this.chart,d;q(b.series,function(e){d=a||e.getPlotBox();e.xAxis&&e.xAxis.zoomEnabled&&e.group&&(e.group.attr(d),e.markerGroup&&(e.markerGroup.attr(d),e.markerGroup.clip(c?b.clipRect:null)),e.dataLabelsGroup&&e.dataLabelsGroup.attr(d))});b.clipRect.attr(c||b.clipBox)},dragStart:function(a){var b=this.chart;b.mouseIsDown=
a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=this.chart,c=b.options.chart,d=a.chartX,e=a.chartY,h=this.zoomHor,g=this.zoomVert,n=b.plotLeft,w=b.plotTop,p=b.plotWidth,k=b.plotHeight,m,q=this.selectionMarker,f=this.mouseDownX,t=this.mouseDownY,v=c.panKey&&a[c.panKey+"Key"];q&&q.touch||(d<n?d=n:d>n+p&&(d=n+p),e<w?e=w:e>w+k&&(e=w+k),this.hasDragged=Math.sqrt(Math.pow(f-d,2)+Math.pow(t-e,2)),10<this.hasDragged&&(m=b.isInsidePlot(f-
n,t-w),b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&m&&!v&&!q&&(this.selectionMarker=q=b.renderer.rect(n,w,h?1:p,g?1:k,0).attr({fill:c.selectionMarkerFill||F("#335cad").setOpacity(.25).get(),"class":"highcharts-selection-marker",zIndex:7}).add()),q&&h&&(d-=f,q.attr({width:Math.abs(d),x:(0<d?0:d)+f})),q&&g&&(d=e-t,q.attr({height:Math.abs(d),y:(0<d?0:d)+t})),m&&!q&&c.panning&&b.pan(a,c.panning)))},drop:function(a){var b=this,c=this.chart,d=this.hasPinched;if(this.selectionMarker){var e={originalEvent:a,
xAxis:[],yAxis:[]},h=this.selectionMarker,r=h.attr?h.attr("x"):h.x,n=h.attr?h.attr("y"):h.y,w=h.attr?h.attr("width"):h.width,p=h.attr?h.attr("height"):h.height,k;if(this.hasDragged||d)q(c.axes,function(c){if(c.zoomEnabled&&g(c.min)&&(d||b[{xAxis:"zoomX",yAxis:"zoomY"}[c.coll]])){var l=c.horiz,f="touchend"===a.type?c.minPixelPadding:0,h=c.toValue((l?r:n)+f),l=c.toValue((l?r+w:n+p)-f);e[c.coll].push({axis:c,min:Math.min(h,l),max:Math.max(h,l)});k=!0}}),k&&u(c,"selection",e,function(a){c.zoom(v(a,d?
{animation:!1}:null))});this.selectionMarker=this.selectionMarker.destroy();d&&this.scaleGroups()}c&&(m(c.container,{cursor:c._cursor}),c.cancelClick=10<this.hasDragged,c.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[])},onContainerMouseDown:function(a){a=this.normalize(a);this.zoomOption(a);a.preventDefault&&a.preventDefault();this.dragStart(a)},onDocumentMouseUp:function(b){G[a.hoverChartIndex]&&G[a.hoverChartIndex].pointer.drop(b)},onDocumentMouseMove:function(a){var b=this.chart,
c=this.chartPosition;a=this.normalize(a,c);!c||this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)||this.reset()},onContainerMouseLeave:function(b){var c=G[a.hoverChartIndex];c&&(b.relatedTarget||b.toElement)&&(c.pointer.reset(),c.pointer.chartPosition=null)},onContainerMouseMove:function(b){var c=this.chart;g(a.hoverChartIndex)&&G[a.hoverChartIndex]&&G[a.hoverChartIndex].mouseIsDown||(a.hoverChartIndex=c.index);b=this.normalize(b);b.returnValue=!1;
"mousedown"===c.mouseIsDown&&this.drag(b);!this.inClass(b.target,"highcharts-tracker")&&!c.isInsidePlot(b.chartX-c.plotLeft,b.chartY-c.plotTop)||c.openMenu||this.runPointActions(b)},inClass:function(a,c){for(var b;a;){if(b=A(a,"class")){if(-1!==b.indexOf(c))return!0;if(-1!==b.indexOf("highcharts-container"))return!1}a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries;a=a.relatedTarget||a.toElement;this.isDirectTouch=!1;if(!(!b||!a||b.stickyTracking||this.inClass(a,"highcharts-tooltip")||
this.inClass(a,"highcharts-series-"+b.index)&&this.inClass(a,"highcharts-tracker")))b.onMouseOut()},onContainerClick:function(a){var b=this.chart,c=b.hoverPoint,d=b.plotLeft,e=b.plotTop;a=this.normalize(a);b.cancelClick||(c&&this.inClass(a.target,"highcharts-tracker")?(u(c.series,"click",v(a,{point:c})),b.hoverPoint&&c.firePointEvent("click",a)):(v(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-d,a.chartY-e)&&u(b,"click",a)))},setDOMEvents:function(){var b=this,c=b.chart.container;c.onmousedown=
function(a){b.onContainerMouseDown(a)};c.onmousemove=function(a){b.onContainerMouseMove(a)};c.onclick=function(a){b.onContainerClick(a)};C(c,"mouseleave",b.onContainerMouseLeave);1===a.chartCount&&C(k,"mouseup",b.onDocumentMouseUp);a.hasTouch&&(c.ontouchstart=function(a){b.onContainerTouchStart(a)},c.ontouchmove=function(a){b.onContainerTouchMove(a)},1===a.chartCount&&C(k,"touchend",b.onDocumentTouchEnd))},destroy:function(){var b=this;b.unDocMouseMove&&b.unDocMouseMove();n(b.chart.container,"mouseleave",
b.onContainerMouseLeave);a.chartCount||(n(k,"mouseup",b.onDocumentMouseUp),n(k,"touchend",b.onDocumentTouchEnd));clearInterval(b.tooltipTimeout);a.objectEach(b,function(a,c){b[c]=null})}}})(K);(function(a){var C=a.charts,A=a.each,G=a.extend,F=a.map,m=a.noop,g=a.pick;G(a.Pointer.prototype,{pinchTranslate:function(a,g,m,u,h,e){this.zoomHor&&this.pinchTranslateDirection(!0,a,g,m,u,h,e);this.zoomVert&&this.pinchTranslateDirection(!1,a,g,m,u,h,e)},pinchTranslateDirection:function(a,g,m,u,h,e,n,d){var c=
this.chart,w=a?"x":"y",b=a?"X":"Y",k="chart"+b,q=a?"width":"height",v=c["plot"+(a?"Left":"Top")],l,B,r=d||1,z=c.inverted,M=c.bounds[a?"h":"v"],p=1===g.length,E=g[0][k],I=m[0][k],L=!p&&g[1][k],f=!p&&m[1][k],t;m=function(){!p&&20<Math.abs(E-L)&&(r=d||Math.abs(I-f)/Math.abs(E-L));B=(v-I)/r+E;l=c["plot"+(a?"Width":"Height")]/r};m();g=B;g<M.min?(g=M.min,t=!0):g+l>M.max&&(g=M.max-l,t=!0);t?(I-=.8*(I-n[w][0]),p||(f-=.8*(f-n[w][1])),m()):n[w]=[I,f];z||(e[w]=B-v,e[q]=l);e=z?1/r:r;h[q]=l;h[w]=g;u[z?a?"scaleY":
"scaleX":"scale"+b]=r;u["translate"+b]=e*v+(I-e*E)},pinch:function(a){var k=this,v=k.chart,u=k.pinchDown,h=a.touches,e=h.length,n=k.lastValidTouch,d=k.hasZoom,c=k.selectionMarker,w={},b=1===e&&(k.inClass(a.target,"highcharts-tracker")&&v.runTrackerClick||k.runChartClick),y={};1<e&&(k.initiated=!0);d&&k.initiated&&!b&&a.preventDefault();F(h,function(a){return k.normalize(a)});"touchstart"===a.type?(A(h,function(a,b){u[b]={chartX:a.chartX,chartY:a.chartY}}),n.x=[u[0].chartX,u[1]&&u[1].chartX],n.y=[u[0].chartY,
u[1]&&u[1].chartY],A(v.axes,function(a){if(a.zoomEnabled){var b=v.bounds[a.horiz?"h":"v"],c=a.minPixelPadding,d=a.toPixels(g(a.options.min,a.dataMin)),e=a.toPixels(g(a.options.max,a.dataMax)),h=Math.max(d,e);b.min=Math.min(a.pos,Math.min(d,e)-c);b.max=Math.max(a.pos+a.len,h+c)}}),k.res=!0):k.followTouchMove&&1===e?this.runPointActions(k.normalize(a)):u.length&&(c||(k.selectionMarker=c=G({destroy:m,touch:!0},v.plotBox)),k.pinchTranslate(u,h,w,c,y,n),k.hasPinched=d,k.scaleGroups(w,y),k.res&&(k.res=
!1,this.reset(!1,0)))},touch:function(k,m){var q=this.chart,u,h;if(q.index!==a.hoverChartIndex)this.onContainerMouseLeave({relatedTarget:!0});a.hoverChartIndex=q.index;1===k.touches.length?(k=this.normalize(k),(h=q.isInsidePlot(k.chartX-q.plotLeft,k.chartY-q.plotTop))&&!q.openMenu?(m&&this.runPointActions(k),"touchmove"===k.type&&(m=this.pinchDown,u=m[0]?4<=Math.sqrt(Math.pow(m[0].chartX-k.chartX,2)+Math.pow(m[0].chartY-k.chartY,2)):!1),g(u,!0)&&this.pinch(k)):m&&this.reset()):2===k.touches.length&&
this.pinch(k)},onContainerTouchStart:function(a){this.zoomOption(a);this.touch(a,!0)},onContainerTouchMove:function(a){this.touch(a)},onDocumentTouchEnd:function(g){C[a.hoverChartIndex]&&C[a.hoverChartIndex].pointer.drop(g)}})})(K);(function(a){var C=a.addEvent,A=a.charts,G=a.css,F=a.doc,m=a.extend,g=a.noop,k=a.Pointer,q=a.removeEvent,v=a.win,u=a.wrap;if(!a.hasTouch&&(v.PointerEvent||v.MSPointerEvent)){var h={},e=!!v.PointerEvent,n=function(){var c=[];c.item=function(a){return this[a]};a.objectEach(h,
function(a){c.push({pageX:a.pageX,pageY:a.pageY,target:a.target})});return c},d=function(c,d,b,e){"touch"!==c.pointerType&&c.pointerType!==c.MSPOINTER_TYPE_TOUCH||!A[a.hoverChartIndex]||(e(c),e=A[a.hoverChartIndex].pointer,e[d]({type:b,target:c.currentTarget,preventDefault:g,touches:n()}))};m(k.prototype,{onContainerPointerDown:function(a){d(a,"onContainerTouchStart","touchstart",function(a){h[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},onContainerPointerMove:function(a){d(a,
"onContainerTouchMove","touchmove",function(a){h[a.pointerId]={pageX:a.pageX,pageY:a.pageY};h[a.pointerId].target||(h[a.pointerId].target=a.currentTarget)})},onDocumentPointerUp:function(a){d(a,"onDocumentTouchEnd","touchend",function(a){delete h[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,e?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,e?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(F,e?"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});
u(k.prototype,"init",function(a,d,b){a.call(this,d,b);this.hasZoom&&G(d.container,{"-ms-touch-action":"none","touch-action":"none"})});u(k.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(C)});u(k.prototype,"destroy",function(a){this.batchMSEvents(q);a.call(this)})}})(K);(function(a){var C=a.addEvent,A=a.css,G=a.discardElement,F=a.defined,m=a.each,g=a.isFirefox,k=a.marginNames,q=a.merge,v=a.pick,u=a.setAnimation,h=a.stableSort,e=a.win,n=a.wrap;
a.Legend=function(a,c){this.init(a,c)};a.Legend.prototype={init:function(a,c){this.chart=a;this.setOptions(c);c.enabled&&(this.render(),C(this.chart,"endResize",function(){this.legend.positionCheckboxes()}))},setOptions:function(a){var c=v(a.padding,8);this.options=a;this.itemStyle=a.itemStyle;this.itemHiddenStyle=q(this.itemStyle,a.itemHiddenStyle);this.itemMarginTop=a.itemMarginTop||0;this.padding=c;this.initialItemY=c-5;this.itemHeight=this.maxItemWidth=0;this.symbolWidth=v(a.symbolWidth,16);this.pages=
[]},update:function(a,c){var d=this.chart;this.setOptions(q(!0,this.options,a));this.destroy();d.isDirtyLegend=d.isDirtyBox=!0;v(c,!0)&&d.redraw()},colorizeItem:function(d,c){d.legendGroup[c?"removeClass":"addClass"]("highcharts-legend-item-hidden");var e=this.options,b=d.legendItem,h=d.legendLine,g=d.legendSymbol,n=this.itemHiddenStyle.color,e=c?e.itemStyle.color:n,l=c?d.color||n:n,k=d.options&&d.options.marker,r={fill:l};b&&b.css({fill:e,color:e});h&&h.attr({stroke:l});g&&(k&&g.isMarker&&(r=d.pointAttribs(),
c||a.objectEach(r,function(a,b){r[b]=n})),g.attr(r))},positionItem:function(a){var c=this.options,d=c.symbolPadding,c=!c.rtl,b=a._legendItemPos,e=b[0],b=b[1],h=a.checkbox;(a=a.legendGroup)&&a.element&&a.translate(c?e:this.legendWidth-e-2*d-4,b);h&&(h.x=e,h.y=b)},destroyItem:function(a){var c=a.checkbox;m(["legendItem","legendLine","legendSymbol","legendGroup"],function(c){a[c]&&(a[c]=a[c].destroy())});c&&G(a.checkbox)},destroy:function(){function a(a){this[a]&&(this[a]=this[a].destroy())}m(this.getAllItems(),
function(c){m(["legendItem","legendGroup"],a,c)});m("clipRect up down pager nav box title group".split(" "),a,this);this.display=null},positionCheckboxes:function(a){var c=this.group&&this.group.alignAttr,d,b=this.clipHeight||this.legendHeight,e=this.titleHeight;c&&(d=c.translateY,m(this.allItems,function(h){var g=h.checkbox,l;g&&(l=d+e+g.y+(a||0)+3,A(g,{left:c.translateX+h.checkboxOffset+g.x-20+"px",top:l+"px",display:l>d-6&&l<d+b-6?"":"none"}))}))},renderTitle:function(){var a=this.options,c=this.padding,
e=a.title,b=0;e.text&&(this.title||(this.title=this.chart.renderer.label(e.text,c-3,c-4,null,null,null,a.useHTML,null,"legend-title").attr({zIndex:1}).css(e.style).add(this.group)),a=this.title.getBBox(),b=a.height,this.offsetWidth=a.width,this.contentGroup.attr({translateY:b}));this.titleHeight=b},setText:function(d){var c=this.options;d.legendItem.attr({text:c.labelFormat?a.format(c.labelFormat,d):c.labelFormatter.call(d)})},renderItem:function(a){var c=this.chart,d=c.renderer,b=this.options,e=
"horizontal"===b.layout,h=this.symbolWidth,g=b.symbolPadding,l=this.itemStyle,n=this.itemHiddenStyle,r=this.padding,k=e?v(b.itemDistance,20):0,m=!b.rtl,p=b.width,E=b.itemMarginBottom||0,I=this.itemMarginTop,u=a.legendItem,f=!a.series,t=!f&&a.series.drawLegendSymbol?a.series:a,A=t.options,J=this.createCheckboxForItem&&A&&A.showCheckbox,A=h+g+k+(J?20:0),N=b.useHTML,C=a.options.className;u||(a.legendGroup=d.g("legend-item").addClass("highcharts-"+t.type+"-series highcharts-color-"+a.colorIndex+(C?" "+
C:"")+(f?" highcharts-series-"+a.index:"")).attr({zIndex:1}).add(this.scrollGroup),a.legendItem=u=d.text("",m?h+g:-g,this.baseline||0,N).css(q(a.visible?l:n)).attr({align:m?"left":"right",zIndex:2}).add(a.legendGroup),this.baseline||(h=l.fontSize,this.fontMetrics=d.fontMetrics(h,u),this.baseline=this.fontMetrics.f+3+I,u.attr("y",this.baseline)),this.symbolHeight=b.symbolHeight||this.fontMetrics.f,t.drawLegendSymbol(this,a),this.setItemEvents&&this.setItemEvents(a,u,N),J&&this.createCheckboxForItem(a));
this.colorizeItem(a,a.visible);l.width||u.css({width:(b.itemWidth||c.spacingBox.width)-A});this.setText(a);d=u.getBBox();l=a.checkboxOffset=b.itemWidth||a.legendItemWidth||d.width+A;this.itemHeight=d=Math.round(a.legendItemHeight||d.height||this.symbolHeight);e&&this.itemX-r+l>(p||c.spacingBox.width-2*r-b.x)&&(this.itemX=r,this.itemY+=I+this.lastLineHeight+E,this.lastLineHeight=0);this.maxItemWidth=Math.max(this.maxItemWidth,l);this.lastItemY=I+this.itemY+E;this.lastLineHeight=Math.max(d,this.lastLineHeight);
a._legendItemPos=[this.itemX,this.itemY];e?this.itemX+=l:(this.itemY+=I+d+E,this.lastLineHeight=d);this.offsetWidth=p||Math.max((e?this.itemX-r-k:l)+r,this.offsetWidth)},getAllItems:function(){var a=[];m(this.chart.series,function(c){var d=c&&c.options;c&&v(d.showInLegend,F(d.linkedTo)?!1:void 0,!0)&&(a=a.concat(c.legendItems||("point"===d.legendType?c.data:c)))});return a},adjustMargins:function(a,c){var d=this.chart,b=this.options,e=b.align.charAt(0)+b.verticalAlign.charAt(0)+b.layout.charAt(0);
b.floating||m([/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/],function(h,g){h.test(e)&&!F(a[g])&&(d[k[g]]=Math.max(d[k[g]],d.legend[(g+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][g]*b[g%2?"x":"y"]+v(b.margin,12)+c[g]))})},render:function(){var a=this,c=a.chart,e=c.renderer,b=a.group,g,n,k,l,B=a.box,r=a.options,z=a.padding;a.itemX=z;a.itemY=a.initialItemY;a.offsetWidth=0;a.lastItemY=0;b||(a.group=b=e.g("legend").attr({zIndex:7}).add(),a.contentGroup=e.g().attr({zIndex:1}).add(b),a.scrollGroup=
e.g().add(a.contentGroup));a.renderTitle();g=a.getAllItems();h(g,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});r.reversed&&g.reverse();a.allItems=g;a.display=n=!!g.length;a.lastLineHeight=0;m(g,function(b){a.renderItem(b)});k=(r.width||a.offsetWidth)+z;l=a.lastItemY+a.lastLineHeight+a.titleHeight;l=a.handleOverflow(l);l+=z;B||(a.box=B=e.rect().addClass("highcharts-legend-box").attr({r:r.borderRadius}).add(b),B.isNew=!0);B.attr({stroke:r.borderColor,
"stroke-width":r.borderWidth||0,fill:r.backgroundColor||"none"}).shadow(r.shadow);0<k&&0<l&&(B[B.isNew?"attr":"animate"](B.crisp({x:0,y:0,width:k,height:l},B.strokeWidth())),B.isNew=!1);B[n?"show":"hide"]();a.legendWidth=k;a.legendHeight=l;m(g,function(b){a.positionItem(b)});n&&b.align(q(r,{width:k,height:l}),!0,"spacingBox");c.isResizing||this.positionCheckboxes()},handleOverflow:function(a){var c=this,d=this.chart,b=d.renderer,e=this.options,h=e.y,g=this.padding,d=d.spacingBox.height+("top"===e.verticalAlign?
-h:h)-g,h=e.maxHeight,l,n=this.clipRect,r=e.navigation,k=v(r.animation,!0),q=r.arrowSize||12,p=this.nav,E=this.pages,I,u=this.allItems,f=function(a){"number"===typeof a?n.attr({height:a}):n&&(c.clipRect=n.destroy(),c.contentGroup.clip());c.contentGroup.div&&(c.contentGroup.div.style.clip=a?"rect("+g+"px,9999px,"+(g+a)+"px,0)":"auto")};"horizontal"!==e.layout||"middle"===e.verticalAlign||e.floating||(d/=2);h&&(d=Math.min(d,h));E.length=0;a>d&&!1!==r.enabled?(this.clipHeight=l=Math.max(d-20-this.titleHeight-
g,0),this.currentPage=v(this.currentPage,1),this.fullHeight=a,m(u,function(a,b){var c=a._legendItemPos[1];a=Math.round(a.legendItem.getBBox().height);var f=E.length;if(!f||c-E[f-1]>l&&(I||c)!==E[f-1])E.push(I||c),f++;b===u.length-1&&c+a-E[f-1]>l&&E.push(c);c!==I&&(I=c)}),n||(n=c.clipRect=b.clipRect(0,g,9999,0),c.contentGroup.clip(n)),f(l),p||(this.nav=p=b.g().attr({zIndex:1}).add(this.group),this.up=b.symbol("triangle",0,0,q,q).on("click",function(){c.scroll(-1,k)}).add(p),this.pager=b.text("",15,
10).addClass("highcharts-legend-navigation").css(r.style).add(p),this.down=b.symbol("triangle-down",0,0,q,q).on("click",function(){c.scroll(1,k)}).add(p)),c.scroll(0),a=d):p&&(f(),this.nav=p.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return a},scroll:function(a,c){var d=this.pages,b=d.length;a=this.currentPage+a;var e=this.clipHeight,h=this.options.navigation,g=this.pager,l=this.padding;a>b&&(a=b);0<a&&(void 0!==c&&u(c,this.chart),this.nav.attr({translateX:l,translateY:e+this.padding+
7+this.titleHeight,visibility:"visible"}),this.up.attr({"class":1===a?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),g.attr({text:a+"/"+b}),this.down.attr({x:18+this.pager.getBBox().width,"class":a===b?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),this.up.attr({fill:1===a?h.inactiveColor:h.activeColor}).css({cursor:1===a?"default":"pointer"}),this.down.attr({fill:a===b?h.inactiveColor:h.activeColor}).css({cursor:a===b?"default":"pointer"}),c=-d[a-1]+this.initialItemY,
this.scrollGroup.animate({translateY:c}),this.currentPage=a,this.positionCheckboxes(c))}};a.LegendSymbolMixin={drawRectangle:function(a,c){var d=a.symbolHeight,b=a.options.squareSymbol;c.legendSymbol=this.chart.renderer.rect(b?(a.symbolWidth-d)/2:0,a.baseline-d+1,b?d:a.symbolWidth,d,v(a.options.symbolRadius,d/2)).addClass("highcharts-point").attr({zIndex:3}).add(c.legendGroup)},drawLineMarker:function(a){var c=this.options,d=c.marker,b=a.symbolWidth,e=a.symbolHeight,h=e/2,g=this.chart.renderer,l=
this.legendGroup;a=a.baseline-Math.round(.3*a.fontMetrics.b);var n;n={"stroke-width":c.lineWidth||0};c.dashStyle&&(n.dashstyle=c.dashStyle);this.legendLine=g.path(["M",0,a,"L",b,a]).addClass("highcharts-graph").attr(n).add(l);d&&!1!==d.enabled&&(c=Math.min(v(d.radius,h),h),0===this.symbol.indexOf("url")&&(d=q(d,{width:e,height:e}),c=0),this.legendSymbol=d=g.symbol(this.symbol,b/2-c,a-c,2*c,2*c,d).addClass("highcharts-point").add(l),d.isMarker=!0)}};(/Trident\/7\.0/.test(e.navigator.userAgent)||g)&&
n(a.Legend.prototype,"positionItem",function(a,c){var d=this,b=function(){c._legendItemPos&&a.call(d,c)};b();setTimeout(b)})})(K);(function(a){var C=a.addEvent,A=a.animate,G=a.animObject,F=a.attr,m=a.doc,g=a.Axis,k=a.createElement,q=a.defaultOptions,v=a.discardElement,u=a.charts,h=a.css,e=a.defined,n=a.each,d=a.extend,c=a.find,w=a.fireEvent,b=a.getStyle,y=a.grep,D=a.isNumber,H=a.isObject,l=a.isString,B=a.Legend,r=a.marginNames,z=a.merge,M=a.objectEach,p=a.Pointer,E=a.pick,I=a.pInt,L=a.removeEvent,
f=a.seriesTypes,t=a.splat,R=a.svg,J=a.syncTimeout,N=a.win,O=a.Renderer,P=a.Chart=function(){this.getArgs.apply(this,arguments)};a.chart=function(a,b,c){return new P(a,b,c)};d(P.prototype,{callbacks:[],getArgs:function(){var a=[].slice.call(arguments);if(l(a[0])||a[0].nodeName)this.renderTo=a.shift();this.init(a[0],a[1])},init:function(b,c){var f,d,e=b.series,p=b.plotOptions||{};b.series=null;f=z(q,b);for(d in f.plotOptions)f.plotOptions[d].tooltip=p[d]&&z(p[d].tooltip)||void 0;f.tooltip.userOptions=
b.chart&&b.chart.forExport&&b.tooltip.userOptions||b.tooltip;f.series=b.series=e;this.userOptions=b;b=f.chart;d=b.events;this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.callback=c;this.isResizing=0;this.options=f;this.axes=[];this.series=[];this.hasCartesianSeries=b.showAxes;var h=this;h.index=u.length;u.push(h);a.chartCount++;d&&M(d,function(a,b){C(h,b,a)});h.xAxis=[];h.yAxis=[];h.pointCount=h.colorCounter=h.symbolCounter=0;h.firstRender()},initSeries:function(b){var c=this.options.chart;
(c=f[b.type||c.type||c.defaultSeriesType])||a.error(17,!0);c=new c;c.init(this,b);return c},orderSeries:function(a){var b=this.series;for(a=a||0;a<b.length;a++)b[a]&&(b[a].index=a,b[a].name=b[a].name||"Series "+(b[a].index+1))},isInsidePlot:function(a,b,c){var f=c?b:a;a=c?a:b;return 0<=f&&f<=this.plotWidth&&0<=a&&a<=this.plotHeight},redraw:function(b){var c=this.axes,f=this.series,e=this.pointer,p=this.legend,h=this.isDirtyLegend,l,g,r=this.hasCartesianSeries,t=this.isDirtyBox,x,k=this.renderer,m=
k.isHidden(),E=[];this.setResponsive&&this.setResponsive(!1);a.setAnimation(b,this);m&&this.temporaryDisplay();this.layOutTitles();for(b=f.length;b--;)if(x=f[b],x.options.stacking&&(l=!0,x.isDirty)){g=!0;break}if(g)for(b=f.length;b--;)x=f[b],x.options.stacking&&(x.isDirty=!0);n(f,function(a){a.isDirty&&"point"===a.options.legendType&&(a.updateTotals&&a.updateTotals(),h=!0);a.isDirtyData&&w(a,"updatedData")});h&&p.options.enabled&&(p.render(),this.isDirtyLegend=!1);l&&this.getStacks();r&&n(c,function(a){a.updateNames();
a.setScale()});this.getMargins();r&&(n(c,function(a){a.isDirty&&(t=!0)}),n(c,function(a){var b=a.min+","+a.max;a.extKey!==b&&(a.extKey=b,E.push(function(){w(a,"afterSetExtremes",d(a.eventArgs,a.getExtremes()));delete a.eventArgs}));(t||l)&&a.redraw()}));t&&this.drawChartBox();w(this,"predraw");n(f,function(a){(t||a.isDirty)&&a.visible&&a.redraw();a.isDirtyData=!1});e&&e.reset(!0);k.draw();w(this,"redraw");w(this,"render");m&&this.temporaryDisplay(!0);n(E,function(a){a.call()})},get:function(a){function b(b){return b.id===
a||b.options&&b.options.id===a}var f,d=this.series,e;f=c(this.axes,b)||c(this.series,b);for(e=0;!f&&e<d.length;e++)f=c(d[e].points||[],b);return f},getAxes:function(){var a=this,b=this.options,c=b.xAxis=t(b.xAxis||{}),b=b.yAxis=t(b.yAxis||{});n(c,function(a,b){a.index=b;a.isX=!0});n(b,function(a,b){a.index=b});c=c.concat(b);n(c,function(b){new g(a,b)})},getSelectedPoints:function(){var a=[];n(this.series,function(b){a=a.concat(y(b.data||[],function(a){return a.selected}))});return a},getSelectedSeries:function(){return y(this.series,
function(a){return a.selected})},setTitle:function(a,b,c){var f=this,d=f.options,e;e=d.title=z({style:{color:"#333333",fontSize:d.isStock?"16px":"18px"}},d.title,a);d=d.subtitle=z({style:{color:"#666666"}},d.subtitle,b);n([["title",a,e],["subtitle",b,d]],function(a,b){var c=a[0],d=f[c],e=a[1];a=a[2];d&&e&&(f[c]=d=d.destroy());a&&a.text&&!d&&(f[c]=f.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+c,zIndex:a.zIndex||4}).add(),f[c].update=function(a){f.setTitle(!b&&a,b&&
a)},f[c].css(a.style))});f.layOutTitles(c)},layOutTitles:function(a){var b=0,c,f=this.renderer,e=this.spacingBox;n(["title","subtitle"],function(a){var c=this[a],p=this.options[a];a="title"===a?-3:p.verticalAlign?0:b+2;var h;c&&(h=p.style.fontSize,h=f.fontMetrics(h,c).b,c.css({width:(p.width||e.width+p.widthAdjust)+"px"}).align(d({y:a+h},p),!1,"spacingBox"),p.floating||p.verticalAlign||(b=Math.ceil(b+c.getBBox(p.useHTML).height)))},this);c=this.titleOffset!==b;this.titleOffset=b;!this.isDirtyBox&&
c&&(this.isDirtyBox=c,this.hasRendered&&E(a,!0)&&this.isDirtyBox&&this.redraw())},getChartSize:function(){var c=this.options.chart,f=c.width,c=c.height,d=this.renderTo;e(f)||(this.containerWidth=b(d,"width"));e(c)||(this.containerHeight=b(d,"height"));this.chartWidth=Math.max(0,f||this.containerWidth||600);this.chartHeight=Math.max(0,a.relativeLength(c,this.chartWidth)||this.containerHeight||400)},temporaryDisplay:function(c){var f=this.renderTo;if(c)for(;f&&f.style;)f.hcOrigStyle&&(a.css(f,f.hcOrigStyle),
delete f.hcOrigStyle),f=f.parentNode;else for(;f&&f.style;)"none"===b(f,"display",!1)&&(f.hcOrigStyle={display:f.style.display,height:f.style.height,overflow:f.style.overflow},c={display:"block",overflow:"hidden"},f!==this.renderTo&&(c.height=0),a.css(f,c),f.style.setProperty&&f.style.setProperty("display","block","important")),f=f.parentNode},setClassName:function(a){this.container.className="highcharts-container "+(a||"")},getContainer:function(){var b,c=this.options,f=c.chart,e,p;b=this.renderTo;
var h=a.uniqueKey(),g;b||(this.renderTo=b=f.renderTo);l(b)&&(this.renderTo=b=m.getElementById(b));b||a.error(13,!0);e=I(F(b,"data-highcharts-chart"));D(e)&&u[e]&&u[e].hasRendered&&u[e].destroy();F(b,"data-highcharts-chart",this.index);b.innerHTML="";f.skipClone||b.offsetWidth||this.temporaryDisplay();this.getChartSize();e=this.chartWidth;p=this.chartHeight;g=d({position:"relative",overflow:"hidden",width:e+"px",height:p+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},
f.style);this.container=b=k("div",{id:h},g,b);this._cursor=b.style.cursor;this.renderer=new (a[f.renderer]||O)(b,e,p,null,f.forExport,c.exporting&&c.exporting.allowHTML);this.setClassName(f.className);this.renderer.setStyle(f.style);this.renderer.chartIndex=this.index},getMargins:function(a){var b=this.spacing,c=this.margin,f=this.titleOffset;this.resetMargins();f&&!e(c[0])&&(this.plotTop=Math.max(this.plotTop,f+this.options.title.margin+b[0]));this.legend.display&&this.legend.adjustMargins(c,b);
this.extraMargin&&(this[this.extraMargin.type]=(this[this.extraMargin.type]||0)+this.extraMargin.value);this.extraTopMargin&&(this.plotTop+=this.extraTopMargin);a||this.getAxisMargins()},getAxisMargins:function(){var a=this,b=a.axisOffset=[0,0,0,0],c=a.margin;a.hasCartesianSeries&&n(a.axes,function(a){a.visible&&a.getOffset()});n(r,function(f,d){e(c[d])||(a[f]+=b[d])});a.setChartSize()},reflow:function(a){var c=this,f=c.options.chart,d=c.renderTo,p=e(f.width),h=f.width||b(d,"width"),f=f.height||b(d,
"height"),d=a?a.target:N;if(!p&&!c.isPrinting&&h&&f&&(d===N||d===m)){if(h!==c.containerWidth||f!==c.containerHeight)clearTimeout(c.reflowTimeout),c.reflowTimeout=J(function(){c.container&&c.setSize(void 0,void 0,!1)},a?100:0);c.containerWidth=h;c.containerHeight=f}},initReflow:function(){var a=this,b;b=C(N,"resize",function(b){a.reflow(b)});C(a,"destroy",b)},setSize:function(b,c,f){var d=this,e=d.renderer;d.isResizing+=1;a.setAnimation(f,d);d.oldChartHeight=d.chartHeight;d.oldChartWidth=d.chartWidth;
void 0!==b&&(d.options.chart.width=b);void 0!==c&&(d.options.chart.height=c);d.getChartSize();b=e.globalAnimation;(b?A:h)(d.container,{width:d.chartWidth+"px",height:d.chartHeight+"px"},b);d.setChartSize(!0);e.setSize(d.chartWidth,d.chartHeight,f);n(d.axes,function(a){a.isDirty=!0;a.setScale()});d.isDirtyLegend=!0;d.isDirtyBox=!0;d.layOutTitles();d.getMargins();d.redraw(f);d.oldChartHeight=null;w(d,"resize");J(function(){d&&w(d,"endResize",null,function(){--d.isResizing})},G(b).duration)},setChartSize:function(a){function b(a){a=
l[a]||0;return Math.max(m||a,a)/2}var c=this.inverted,f=this.renderer,d=this.chartWidth,e=this.chartHeight,p=this.options.chart,h=this.spacing,l=this.clipOffset,g,r,t,k,m;this.plotLeft=g=Math.round(this.plotLeft);this.plotTop=r=Math.round(this.plotTop);this.plotWidth=t=Math.max(0,Math.round(d-g-this.marginRight));this.plotHeight=k=Math.max(0,Math.round(e-r-this.marginBottom));this.plotSizeX=c?k:t;this.plotSizeY=c?t:k;this.plotBorderWidth=p.plotBorderWidth||0;this.spacingBox=f.spacingBox={x:h[3],y:h[0],
width:d-h[3]-h[1],height:e-h[0]-h[2]};this.plotBox=f.plotBox={x:g,y:r,width:t,height:k};m=2*Math.floor(this.plotBorderWidth/2);c=Math.ceil(b(3));f=Math.ceil(b(0));this.clipBox={x:c,y:f,width:Math.floor(this.plotSizeX-b(1)-c),height:Math.max(0,Math.floor(this.plotSizeY-b(2)-f))};a||n(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()})},resetMargins:function(){var a=this,b=a.options.chart;n(["margin","spacing"],function(c){var f=b[c],d=H(f)?f:[f,f,f,f];n(["Top","Right","Bottom","Left"],function(f,
e){a[c][e]=E(b[c+f],d[e])})});n(r,function(b,c){a[b]=E(a.margin[c],a.spacing[c])});a.axisOffset=[0,0,0,0];a.clipOffset=[]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,c=this.chartWidth,f=this.chartHeight,d=this.chartBackground,e=this.plotBackground,p=this.plotBorder,h,l=this.plotBGImage,g=a.backgroundColor,n=a.plotBackgroundColor,r=a.plotBackgroundImage,t,k=this.plotLeft,m=this.plotTop,E=this.plotWidth,w=this.plotHeight,q=this.plotBox,I=this.clipRect,z=this.clipBox,y="animate";
d||(this.chartBackground=d=b.rect().addClass("highcharts-background").add(),y="attr");h=a.borderWidth||0;t=h+(a.shadow?8:0);g={fill:g||"none"};if(h||d["stroke-width"])g.stroke=a.borderColor,g["stroke-width"]=h;d.attr(g).shadow(a.shadow);d[y]({x:t/2,y:t/2,width:c-t-h%2,height:f-t-h%2,r:a.borderRadius});y="animate";e||(y="attr",this.plotBackground=e=b.rect().addClass("highcharts-plot-background").add());e[y](q);e.attr({fill:n||"none"}).shadow(a.plotShadow);r&&(l?l.animate(q):this.plotBGImage=b.image(r,
k,m,E,w).add());I?I.animate({width:z.width,height:z.height}):this.clipRect=b.clipRect(z);y="animate";p||(y="attr",this.plotBorder=p=b.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());p.attr({stroke:a.plotBorderColor,"stroke-width":a.plotBorderWidth||0,fill:"none"});p[y](p.crisp({x:k,y:m,width:E,height:w},-p.strokeWidth()));this.isDirtyBox=!1},propFromSeries:function(){var a=this,b=a.options.chart,c,d=a.options.series,e,p;n(["inverted","angular","polar"],function(h){c=f[b.type||b.defaultSeriesType];
p=b[h]||c&&c.prototype[h];for(e=d&&d.length;!p&&e--;)(c=f[d[e].type])&&c.prototype[h]&&(p=!0);a[h]=p})},linkSeries:function(){var a=this,b=a.series;n(b,function(a){a.linkedSeries.length=0});n(b,function(b){var c=b.options.linkedTo;l(c)&&(c=":previous"===c?a.series[b.index-1]:a.get(c))&&c.linkedParent!==b&&(c.linkedSeries.push(b),b.linkedParent=c,b.visible=E(b.options.visible,c.options.visible,b.visible))})},renderSeries:function(){n(this.series,function(a){a.translate();a.render()})},renderLabels:function(){var a=
this,b=a.options.labels;b.items&&n(b.items,function(c){var f=d(b.style,c.style),e=I(f.left)+a.plotLeft,p=I(f.top)+a.plotTop+12;delete f.left;delete f.top;a.renderer.text(c.html,e,p).attr({zIndex:2}).css(f).add()})},render:function(){var a=this.axes,b=this.renderer,c=this.options,f,d,e;this.setTitle();this.legend=new B(this,c.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();c=this.plotWidth;f=this.plotHeight-=21;n(a,function(a){a.setScale()});this.getAxisMargins();d=
1.1<c/this.plotWidth;e=1.05<f/this.plotHeight;if(d||e)n(a,function(a){(a.horiz&&d||!a.horiz&&e)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries&&n(a,function(a){a.visible&&a.render()});this.seriesGroup||(this.seriesGroup=b.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.hasRendered=!0},addCredits:function(a){var b=this;a=z(!0,this.options.credits,a);a.enabled&&!this.credits&&
(this.credits=this.renderer.text(a.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){a.href&&(N.location.href=a.href)}).attr({align:a.position.align,zIndex:8}).css(a.style).add().align(a.position),this.credits.update=function(a){b.credits=b.credits.destroy();b.addCredits(a)})},destroy:function(){var b=this,c=b.axes,f=b.series,d=b.container,e,p=d&&d.parentNode;w(b,"destroy");b.renderer.forExport?a.erase(u,b):u[b.index]=void 0;a.chartCount--;b.renderTo.removeAttribute("data-highcharts-chart");
L(b);for(e=c.length;e--;)c[e]=c[e].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(e=f.length;e--;)f[e]=f[e].destroy();n("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "),function(a){var c=b[a];c&&c.destroy&&(b[a]=c.destroy())});d&&(d.innerHTML="",L(d),p&&v(d));M(b,function(a,c){delete b[c]})},isReadyToRender:function(){var a=this;return R||N!=N.top||
"complete"===m.readyState?!0:(m.attachEvent("onreadystatechange",function(){m.detachEvent("onreadystatechange",a.firstRender);"complete"===m.readyState&&a.firstRender()}),!1)},firstRender:function(){var a=this,b=a.options;if(a.isReadyToRender()){a.getContainer();w(a,"init");a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();n(b.series||[],function(b){a.initSeries(b)});a.linkSeries();w(a,"beforeRender");p&&(a.pointer=new p(a,b));a.render();if(!a.renderer.imgCount&&a.onload)a.onload();
a.temporaryDisplay(!0)}},onload:function(){n([this.callback].concat(this.callbacks),function(a){a&&void 0!==this.index&&a.apply(this,[this])},this);w(this,"load");w(this,"render");e(this.index)&&!1!==this.options.chart.reflow&&this.initReflow();this.onload=null}})})(K);(function(a){var C,A=a.each,G=a.extend,F=a.erase,m=a.fireEvent,g=a.format,k=a.isArray,q=a.isNumber,v=a.pick,u=a.removeEvent;a.Point=C=function(){};a.Point.prototype={init:function(a,e,g){this.series=a;this.color=a.color;this.applyOptions(e,
g);a.options.colorByPoint?(e=a.options.colors||a.chart.options.colors,this.color=this.color||e[a.colorCounter],e=e.length,g=a.colorCounter,a.colorCounter++,a.colorCounter===e&&(a.colorCounter=0)):g=a.colorIndex;this.colorIndex=v(this.colorIndex,g);a.chart.pointCount++;return this},applyOptions:function(a,e){var h=this.series,d=h.options.pointValKey||h.pointValKey;a=C.prototype.optionsToObject.call(this,a);G(this,a);this.options=this.options?G(this.options,a):a;a.group&&delete this.group;d&&(this.y=
this[d]);this.isNull=v(this.isValid&&!this.isValid(),null===this.x||!q(this.y,!0));this.selected&&(this.state="select");"name"in this&&void 0===e&&h.xAxis&&h.xAxis.hasNames&&(this.x=h.xAxis.nameToX(this));void 0===this.x&&h&&(this.x=void 0===e?h.autoIncrement(this):e);return this},optionsToObject:function(a){var e={},h=this.series,d=h.options.keys,c=d||h.pointArrayMap||["y"],g=c.length,b=0,m=0;if(q(a)||null===a)e[c[0]]=a;else if(k(a))for(!d&&a.length>g&&(h=typeof a[0],"string"===h?e.name=a[0]:"number"===
h&&(e.x=a[0]),b++);m<g;)d&&void 0===a[b]||(e[c[m]]=a[b]),b++,m++;else"object"===typeof a&&(e=a,a.dataLabels&&(h._hasPointLabels=!0),a.marker&&(h._hasPointMarkers=!0));return e},getClassName:function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":"")+(void 0!==this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?
" "+this.zone.className.replace("highcharts-negative",""):"")},getZone:function(){var a=this.series,e=a.zones,a=a.zoneAxis||"y",g=0,d;for(d=e[g];this[a]>=d.value;)d=e[++g];d&&d.color&&!this.options.color&&(this.color=d.color);return d},destroy:function(){var a=this.series.chart,e=a.hoverPoints,g;a.pointCount--;e&&(this.setState(),F(e,this),e.length||(a.hoverPoints=null));if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)u(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);
for(g in this)this[g]=null},destroyElements:function(){for(var a=["graphic","dataLabel","dataLabelUpper","connector","shadowGroup"],e,g=6;g--;)e=a[g],this[e]&&(this[e]=this[e].destroy())},getLabelConfig:function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var e=this.series,h=e.tooltipOptions,d=v(h.valueDecimals,""),
c=h.valuePrefix||"",k=h.valueSuffix||"";A(e.pointArrayMap||["y"],function(b){b="{point."+b;if(c||k)a=a.replace(b+"}",c+b+"}"+k);a=a.replace(b+"}",b+":,."+d+"f}")});return g(a,{point:this,series:this.series})},firePointEvent:function(a,e,g){var d=this,c=this.series.options;(c.point.events[a]||d.options&&d.options.events&&d.options.events[a])&&this.importEvents();"click"===a&&c.allowPointSelect&&(g=function(a){d.select&&d.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});m(this,a,e,g)},visible:!0}})(K);
(function(a){var C=a.addEvent,A=a.animObject,G=a.arrayMax,F=a.arrayMin,m=a.correctFloat,g=a.Date,k=a.defaultOptions,q=a.defaultPlotOptions,v=a.defined,u=a.each,h=a.erase,e=a.extend,n=a.fireEvent,d=a.grep,c=a.isArray,w=a.isNumber,b=a.isString,y=a.merge,D=a.objectEach,H=a.pick,l=a.removeEvent,B=a.splat,r=a.SVGElement,z=a.syncTimeout,M=a.win;a.Series=a.seriesType("line",null,{lineWidth:2,allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},marker:{lineWidth:0,lineColor:"#ffffff",radius:4,
states:{hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return null===this.y?"":a.numberFormat(this.y,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0,padding:5},cropThreshold:300,pointRange:0,softThreshold:!0,states:{hover:{animation:{duration:50},lineWidthPlus:1,marker:{},
halo:{size:10,opacity:.25}},select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3,findNearestPointBy:"x"},{isCartesian:!0,pointClass:a.Point,sorted:!0,requireSorting:!0,directTouch:!1,axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],coll:"series",init:function(a,b){var c=this,d,f=a.series,p;c.chart=a;c.options=b=c.setOptions(b);c.linkedSeries=[];c.bindAxes();e(c,{name:b.name,state:"",visible:!1!==b.visible,selected:!0===b.selected});d=b.events;D(d,function(a,b){C(c,b,a)});if(d&&
d.click||b.point&&b.point.events&&b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;c.getColor();c.getSymbol();u(c.parallelArrays,function(a){c[a+"Data"]=[]});c.setData(b.data,!1);c.isCartesian&&(a.hasCartesianSeries=!0);f.length&&(p=f[f.length-1]);c._i=H(p&&p._i,-1)+1;a.orderSeries(this.insert(f))},insert:function(a){var b=this.options.index,c;if(w(b)){for(c=a.length;c--;)if(b>=H(a[c].options.index,a[c]._i)){a.splice(c+1,0,this);break}-1===c&&a.unshift(this);c+=1}else a.push(this);return H(c,
a.length-1)},bindAxes:function(){var b=this,c=b.options,d=b.chart,e;u(b.axisTypes||[],function(f){u(d[f],function(a){e=a.options;if(c[f]===e.index||void 0!==c[f]&&c[f]===e.id||void 0===c[f]&&0===e.index)b.insert(a.series),b[f]=a,a.isDirty=!0});b[f]||b.optionalAxis===f||a.error(18,!0)})},updateParallelArrays:function(a,b){var c=a.series,d=arguments,f=w(b)?function(f){var d="y"===f&&c.toYData?c.toYData(a):a[f];c[f+"Data"][b]=d}:function(a){Array.prototype[b].apply(c[a+"Data"],Array.prototype.slice.call(d,
2))};u(c.parallelArrays,f)},autoIncrement:function(){var a=this.options,b=this.xIncrement,c,d=a.pointIntervalUnit,b=H(b,a.pointStart,0);this.pointInterval=c=H(this.pointInterval,a.pointInterval,1);d&&(a=new g(b),"day"===d?a=+a[g.hcSetDate](a[g.hcGetDate]()+c):"month"===d?a=+a[g.hcSetMonth](a[g.hcGetMonth]()+c):"year"===d&&(a=+a[g.hcSetFullYear](a[g.hcGetFullYear]()+c)),c=a-b);this.xIncrement=b+c;return b},setOptions:function(a){var b=this.chart,c=b.options,d=c.plotOptions,f=(b.userOptions||{}).plotOptions||
{},e=d[this.type];this.userOptions=a;b=y(e,d.series,a);this.tooltipOptions=y(k.tooltip,k.plotOptions.series&&k.plotOptions.series.tooltip,k.plotOptions[this.type].tooltip,c.tooltip.userOptions,d.series&&d.series.tooltip,d[this.type].tooltip,a.tooltip);this.stickyTracking=H(a.stickyTracking,f[this.type]&&f[this.type].stickyTracking,f.series&&f.series.stickyTracking,this.tooltipOptions.shared&&!this.noSharedTooltip?!0:b.stickyTracking);null===e.marker&&delete b.marker;this.zoneAxis=b.zoneAxis;a=this.zones=
(b.zones||[]).slice();!b.negativeColor&&!b.negativeFillColor||b.zones||a.push({value:b[this.zoneAxis+"Threshold"]||b.threshold||0,className:"highcharts-negative",color:b.negativeColor,fillColor:b.negativeFillColor});a.length&&v(a[a.length-1].value)&&a.push({color:this.color,fillColor:this.fillColor});return b},getCyclic:function(a,b,c){var d,f=this.chart,e=this.userOptions,p=a+"Index",h=a+"Counter",l=c?c.length:H(f.options.chart[a+"Count"],f[a+"Count"]);b||(d=H(e[p],e["_"+p]),v(d)||(f.series.length||
(f[h]=0),e["_"+p]=d=f[h]%l,f[h]+=1),c&&(b=c[d]));void 0!==d&&(this[p]=d);this[a]=b},getColor:function(){this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||q[this.type].color,this.chart.options.colors)},getSymbol:function(){this.getCyclic("symbol",this.options.marker.symbol,this.chart.options.symbols)},drawLegendSymbol:a.LegendSymbolMixin.drawLineMarker,setData:function(d,e,h,l){var f=this,p=f.points,g=p&&p.length||0,r,n=f.options,k=f.chart,m=null,q=f.xAxis,
E=n.turboThreshold,z=this.xData,y=this.yData,I=(r=f.pointArrayMap)&&r.length;d=d||[];r=d.length;e=H(e,!0);if(!1!==l&&r&&g===r&&!f.cropped&&!f.hasGroupedData&&f.visible)u(d,function(a,b){p[b].update&&a!==n.data[b]&&p[b].update(a,!1,null,!1)});else{f.xIncrement=null;f.colorCounter=0;u(this.parallelArrays,function(a){f[a+"Data"].length=0});if(E&&r>E){for(h=0;null===m&&h<r;)m=d[h],h++;if(w(m))for(h=0;h<r;h++)z[h]=this.autoIncrement(),y[h]=d[h];else if(c(m))if(I)for(h=0;h<r;h++)m=d[h],z[h]=m[0],y[h]=m.slice(1,
I+1);else for(h=0;h<r;h++)m=d[h],z[h]=m[0],y[h]=m[1];else a.error(12)}else for(h=0;h<r;h++)void 0!==d[h]&&(m={series:f},f.pointClass.prototype.applyOptions.apply(m,[d[h]]),f.updateParallelArrays(m,h));b(y[0])&&a.error(14,!0);f.data=[];f.options.data=f.userOptions.data=d;for(h=g;h--;)p[h]&&p[h].destroy&&p[h].destroy();q&&(q.minRange=q.userMinRange);f.isDirty=k.isDirtyBox=!0;f.isDirtyData=!!p;h=!1}"point"===n.legendType&&(this.processData(),this.generatePoints());e&&k.redraw(h)},processData:function(b){var c=
this.xData,d=this.yData,e=c.length,f;f=0;var h,p,l=this.xAxis,g,r=this.options;g=r.cropThreshold;var n=this.getExtremesFromAll||r.getExtremesFromAll,k=this.isCartesian,r=l&&l.val2lin,m=l&&l.isLog,q,w;if(k&&!this.isDirty&&!l.isDirty&&!this.yAxis.isDirty&&!b)return!1;l&&(b=l.getExtremes(),q=b.min,w=b.max);if(k&&this.sorted&&!n&&(!g||e>g||this.forceCrop))if(c[e-1]<q||c[0]>w)c=[],d=[];else if(c[0]<q||c[e-1]>w)f=this.cropData(this.xData,this.yData,q,w),c=f.xData,d=f.yData,f=f.start,h=!0;for(g=c.length||
1;--g;)e=m?r(c[g])-r(c[g-1]):c[g]-c[g-1],0<e&&(void 0===p||e<p)?p=e:0>e&&this.requireSorting&&a.error(15);this.cropped=h;this.cropStart=f;this.processedXData=c;this.processedYData=d;this.closestPointRange=p},cropData:function(a,b,c,d){var f=a.length,e=0,h=f,p=H(this.cropShoulder,1),l;for(l=0;l<f;l++)if(a[l]>=c){e=Math.max(0,l-p);break}for(c=l;c<f;c++)if(a[c]>d){h=c+p;break}return{xData:a.slice(e,h),yData:b.slice(e,h),start:e,end:h}},generatePoints:function(){var a=this.options,b=a.data,c=this.data,
d,f=this.processedXData,e=this.processedYData,h=this.pointClass,l=f.length,g=this.cropStart||0,r,n=this.hasGroupedData,a=a.keys,k,m=[],q;c||n||(c=[],c.length=b.length,c=this.data=c);a&&n&&(this.options.keys=!1);for(q=0;q<l;q++)r=g+q,n?(k=(new h).init(this,[f[q]].concat(B(e[q]))),k.dataGroup=this.groupMap[q]):(k=c[r])||void 0===b[r]||(c[r]=k=(new h).init(this,b[r],f[q])),k&&(k.index=r,m[q]=k);this.options.keys=a;if(c&&(l!==(d=c.length)||n))for(q=0;q<d;q++)q!==g||n||(q+=l),c[q]&&(c[q].destroyElements(),
c[q].plotX=void 0);this.data=c;this.points=m},getExtremes:function(a){var b=this.yAxis,d=this.processedXData,e,f=[],h=0;e=this.xAxis.getExtremes();var p=e.min,l=e.max,g,r,n,k;a=a||this.stackedYData||this.processedYData||[];e=a.length;for(k=0;k<e;k++)if(r=d[k],n=a[k],g=(w(n,!0)||c(n))&&(!b.positiveValuesOnly||n.length||0<n),r=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||(d[k]||r)>=p&&(d[k]||r)<=l,g&&r)if(g=n.length)for(;g--;)null!==n[g]&&(f[h++]=n[g]);else f[h++]=n;this.dataMin=
F(f);this.dataMax=G(f)},translate:function(){this.processedXData||this.processData();this.generatePoints();var a=this.options,b=a.stacking,c=this.xAxis,d=c.categories,f=this.yAxis,e=this.points,h=e.length,l=!!this.modifyValue,g=a.pointPlacement,r="between"===g||w(g),n=a.threshold,k=a.startFromThreshold?n:0,q,z,y,B,u=Number.MAX_VALUE;"between"===g&&(g=.5);w(g)&&(g*=H(a.pointRange||c.pointRange));for(a=0;a<h;a++){var D=e[a],M=D.x,A=D.y;z=D.low;var C=b&&f.stacks[(this.negStacks&&A<(k?0:n)?"-":"")+this.stackKey],
F;f.positiveValuesOnly&&null!==A&&0>=A&&(D.isNull=!0);D.plotX=q=m(Math.min(Math.max(-1E5,c.translate(M,0,0,0,1,g,"flags"===this.type)),1E5));b&&this.visible&&!D.isNull&&C&&C[M]&&(B=this.getStackIndicator(B,M,this.index),F=C[M],A=F.points[B.key],z=A[0],A=A[1],z===k&&B.key===C[M].base&&(z=H(n,f.min)),f.positiveValuesOnly&&0>=z&&(z=null),D.total=D.stackTotal=F.total,D.percentage=F.total&&D.y/F.total*100,D.stackY=A,F.setOffset(this.pointXOffset||0,this.barW||0));D.yBottom=v(z)?f.translate(z,0,1,0,1):
null;l&&(A=this.modifyValue(A,D));D.plotY=z="number"===typeof A&&Infinity!==A?Math.min(Math.max(-1E5,f.translate(A,0,1,0,1)),1E5):void 0;D.isInside=void 0!==z&&0<=z&&z<=f.len&&0<=q&&q<=c.len;D.clientX=r?m(c.translate(M,0,0,0,1,g)):q;D.negative=D.y<(n||0);D.category=d&&void 0!==d[D.x]?d[D.x]:D.x;D.isNull||(void 0!==y&&(u=Math.min(u,Math.abs(q-y))),y=q);D.zone=this.zones.length&&D.getZone()}this.closestPointRangePx=u},getValidPoints:function(a,b){var c=this.chart;return d(a||this.points||[],function(a){return b&&
!c.isInsidePlot(a.plotX,a.plotY,c.inverted)?!1:!a.isNull})},setClip:function(a){var b=this.chart,c=this.options,d=b.renderer,f=b.inverted,e=this.clipBox,h=e||b.clipBox,l=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,h.height,c.xAxis,c.yAxis].join(),g=b[l],p=b[l+"m"];g||(a&&(h.width=0,b[l+"m"]=p=d.clipRect(-99,f?-b.plotLeft:-b.plotTop,99,f?b.chartWidth:b.chartHeight)),b[l]=g=d.clipRect(h),g.count={length:0});a&&!g.count[this.index]&&(g.count[this.index]=!0,g.count.length+=1);!1!==c.clip&&
(this.group.clip(a||e?g:b.clipRect),this.markerGroup.clip(p),this.sharedClipKey=l);a||(g.count[this.index]&&(delete g.count[this.index],--g.count.length),0===g.count.length&&l&&b[l]&&(e||(b[l]=b[l].destroy()),b[l+"m"]&&(b[l+"m"]=b[l+"m"].destroy())))},animate:function(a){var b=this.chart,c=A(this.options.animation),d;a?this.setClip(c):(d=this.sharedClipKey,(a=b[d])&&a.animate({width:b.plotSizeX},c),b[d+"m"]&&b[d+"m"].animate({width:b.plotSizeX+99},c),this.animate=null)},afterAnimate:function(){this.setClip();
n(this,"afterAnimate")},drawPoints:function(){var a=this.points,b=this.chart,c,d,f,e,h=this.options.marker,l,g,r,n,k=this[this.specialGroup]||this.markerGroup,m=H(h.enabled,this.xAxis.isRadial?!0:null,this.closestPointRangePx>=2*h.radius);if(!1!==h.enabled||this._hasPointMarkers)for(d=0;d<a.length;d++)f=a[d],c=f.plotY,e=f.graphic,l=f.marker||{},g=!!f.marker,r=m&&void 0===l.enabled||l.enabled,n=f.isInside,r&&w(c)&&null!==f.y?(c=H(l.symbol,this.symbol),f.hasImage=0===c.indexOf("url"),r=this.markerAttribs(f,
f.selected&&"select"),e?e[n?"show":"hide"](!0).animate(r):n&&(0<r.width||f.hasImage)&&(f.graphic=e=b.renderer.symbol(c,r.x,r.y,r.width,r.height,g?l:h).add(k)),e&&e.attr(this.pointAttribs(f,f.selected&&"select")),e&&e.addClass(f.getClassName(),!0)):e&&(f.graphic=e.destroy())},markerAttribs:function(a,b){var c=this.options.marker,d=a.marker||{},f=H(d.radius,c.radius);b&&(c=c.states[b],b=d.states&&d.states[b],f=H(b&&b.radius,c&&c.radius,f+(c&&c.radiusPlus||0)));a.hasImage&&(f=0);a={x:Math.floor(a.plotX)-
f,y:a.plotY-f};f&&(a.width=a.height=2*f);return a},pointAttribs:function(a,b){var c=this.options.marker,d=a&&a.options,f=d&&d.marker||{},e=this.color,h=d&&d.color,l=a&&a.color,d=H(f.lineWidth,c.lineWidth);a=a&&a.zone&&a.zone.color;e=h||a||l||e;a=f.fillColor||c.fillColor||e;e=f.lineColor||c.lineColor||e;b&&(c=c.states[b],b=f.states&&f.states[b]||{},d=H(b.lineWidth,c.lineWidth,d+H(b.lineWidthPlus,c.lineWidthPlus,0)),a=b.fillColor||c.fillColor||a,e=b.lineColor||c.lineColor||e);return{stroke:e,"stroke-width":d,
fill:a}},destroy:function(){var a=this,b=a.chart,c=/AppleWebKit\/533/.test(M.navigator.userAgent),d,f,e=a.data||[],g,k;n(a,"destroy");l(a);u(a.axisTypes||[],function(b){(k=a[b])&&k.series&&(h(k.series,a),k.isDirty=k.forceRedraw=!0)});a.legendItem&&a.chart.legend.destroyItem(a);for(f=e.length;f--;)(g=e[f])&&g.destroy&&g.destroy();a.points=null;clearTimeout(a.animationTimeout);D(a,function(a,b){a instanceof r&&!a.survive&&(d=c&&"group"===b?"hide":"destroy",a[d]())});b.hoverSeries===a&&(b.hoverSeries=
null);h(b.series,a);b.orderSeries();D(a,function(b,c){delete a[c]})},getGraphPath:function(a,b,c){var d=this,f=d.options,e=f.step,h,l=[],g=[],p;a=a||d.points;(h=a.reversed)&&a.reverse();(e={right:1,center:2}[e]||e&&3)&&h&&(e=4-e);!f.connectNulls||b||c||(a=this.getValidPoints(a));u(a,function(h,r){var n=h.plotX,k=h.plotY,m=a[r-1];(h.leftCliff||m&&m.rightCliff)&&!c&&(p=!0);h.isNull&&!v(b)&&0<r?p=!f.connectNulls:h.isNull&&!b?p=!0:(0===r||p?r=["M",h.plotX,h.plotY]:d.getPointSpline?r=d.getPointSpline(a,
h,r):e?(r=1===e?["L",m.plotX,k]:2===e?["L",(m.plotX+n)/2,m.plotY,"L",(m.plotX+n)/2,k]:["L",n,m.plotY],r.push("L",n,k)):r=["L",n,k],g.push(h.x),e&&g.push(h.x),l.push.apply(l,r),p=!1)});l.xMap=g;return d.graphPath=l},drawGraph:function(){var a=this,b=this.options,c=(this.gappedPath||this.getGraphPath).call(this),d=[["graph","highcharts-graph",b.lineColor||this.color,b.dashStyle]];u(this.zones,function(c,e){d.push(["zone-graph-"+e,"highcharts-graph highcharts-zone-graph-"+e+" "+(c.className||""),c.color||
a.color,c.dashStyle||b.dashStyle])});u(d,function(f,d){var e=f[0],h=a[e];h?(h.endX=c.xMap,h.animate({d:c})):c.length&&(a[e]=a.chart.renderer.path(c).addClass(f[1]).attr({zIndex:1}).add(a.group),h={stroke:f[2],"stroke-width":b.lineWidth,fill:a.fillGraph&&a.color||"none"},f[3]?h.dashstyle=f[3]:"square"!==b.linecap&&(h["stroke-linecap"]=h["stroke-linejoin"]="round"),h=a[e].attr(h).shadow(2>d&&b.shadow));h&&(h.startX=c.xMap,h.isArea=c.isArea)})},applyZones:function(){var a=this,b=this.chart,c=b.renderer,
d=this.zones,f,e,h=this.clips||[],l,g=this.graph,r=this.area,n=Math.max(b.chartWidth,b.chartHeight),k=this[(this.zoneAxis||"y")+"Axis"],m,q,w=b.inverted,z,y,B,v,D=!1;d.length&&(g||r)&&k&&void 0!==k.min&&(q=k.reversed,z=k.horiz,g&&g.hide(),r&&r.hide(),m=k.getExtremes(),u(d,function(d,p){f=q?z?b.plotWidth:0:z?0:k.toPixels(m.min);f=Math.min(Math.max(H(e,f),0),n);e=Math.min(Math.max(Math.round(k.toPixels(H(d.value,m.max),!0)),0),n);D&&(f=e=k.toPixels(m.max));y=Math.abs(f-e);B=Math.min(f,e);v=Math.max(f,
e);k.isXAxis?(l={x:w?v:B,y:0,width:y,height:n},z||(l.x=b.plotHeight-l.x)):(l={x:0,y:w?v:B,width:n,height:y},z&&(l.y=b.plotWidth-l.y));w&&c.isVML&&(l=k.isXAxis?{x:0,y:q?B:v,height:l.width,width:b.chartWidth}:{x:l.y-b.plotLeft-b.spacingBox.x,y:0,width:l.height,height:b.chartHeight});h[p]?h[p].animate(l):(h[p]=c.clipRect(l),g&&a["zone-graph-"+p].clip(h[p]),r&&a["zone-area-"+p].clip(h[p]));D=d.value>m.max}),this.clips=h)},invertGroups:function(a){function b(){u(["group","markerGroup"],function(b){c[b]&&
(d.renderer.isVML&&c[b].attr({width:c.yAxis.len,height:c.xAxis.len}),c[b].width=c.yAxis.len,c[b].height=c.xAxis.len,c[b].invert(a))})}var c=this,d=c.chart,f;c.xAxis&&(f=C(d,"resize",b),C(c,"destroy",f),b(a),c.invertGroups=b)},plotGroup:function(a,b,c,d,f){var e=this[a],h=!e;h&&(this[a]=e=this.chart.renderer.g().attr({zIndex:d||.1}).add(f));e.addClass("highcharts-"+b+" highcharts-series-"+this.index+" highcharts-"+this.type+"-series highcharts-color-"+this.colorIndex+" "+(this.options.className||""),
!0);e.attr({visibility:c})[h?"attr":"animate"](this.getPlotBox());return e},getPlotBox:function(){var a=this.chart,b=this.xAxis,c=this.yAxis;a.inverted&&(b=c,c=this.xAxis);return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,b=a.chart,c,d=a.options,f=!!a.animate&&b.renderer.isSVG&&A(d.animation).duration,e=a.visible?"inherit":"hidden",h=d.zIndex,l=a.hasRendered,g=b.seriesGroup,r=b.inverted;c=a.plotGroup("group","series",e,h,g);a.markerGroup=
a.plotGroup("markerGroup","markers",e,h,g);f&&a.animate(!0);c.inverted=a.isCartesian?r:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.drawDataLabels&&a.drawDataLabels();a.visible&&a.drawPoints();a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(r);!1===d.clip||a.sharedClipKey||l||c.clip(b.clipRect);f&&a.animate();l||(a.animationTimeout=z(function(){a.afterAnimate()},f));a.isDirty=!1;a.hasRendered=!0},redraw:function(){var a=this.chart,b=this.isDirty||this.isDirtyData,
c=this.group,d=this.xAxis,f=this.yAxis;c&&(a.inverted&&c.attr({width:a.plotWidth,height:a.plotHeight}),c.animate({translateX:H(d&&d.left,a.plotLeft),translateY:H(f&&f.top,a.plotTop)}));this.translate();this.render();b&&delete this.kdTree},kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var c=this.xAxis,d=this.yAxis,f=this.chart.inverted;return this.searchKDTree({clientX:f?c.len-a.chartY+c.pos:a.chartX-c.pos,plotY:f?d.len-a.chartX+d.pos:a.chartY-d.pos},b)},buildKDTree:function(){function a(c,
f,d){var e,h;if(h=c&&c.length)return e=b.kdAxisArray[f%d],c.sort(function(a,b){return a[e]-b[e]}),h=Math.floor(h/2),{point:c[h],left:a(c.slice(0,h),f+1,d),right:a(c.slice(h+1),f+1,d)}}this.buildingKdTree=!0;var b=this,c=-1<b.options.findNearestPointBy.indexOf("y")?2:1;delete b.kdTree;z(function(){b.kdTree=a(b.getValidPoints(null,!b.directTouch),c,c);b.buildingKdTree=!1},b.options.kdNow?0:1)},searchKDTree:function(a,b){function c(a,b,l,g){var r=b.point,p=d.kdAxisArray[l%g],n,k,m=r;k=v(a[f])&&v(r[f])?
Math.pow(a[f]-r[f],2):null;n=v(a[e])&&v(r[e])?Math.pow(a[e]-r[e],2):null;n=(k||0)+(n||0);r.dist=v(n)?Math.sqrt(n):Number.MAX_VALUE;r.distX=v(k)?Math.sqrt(k):Number.MAX_VALUE;p=a[p]-r[p];n=0>p?"left":"right";k=0>p?"right":"left";b[n]&&(n=c(a,b[n],l+1,g),m=n[h]<m[h]?n:r);b[k]&&Math.sqrt(p*p)<m[h]&&(a=c(a,b[k],l+1,g),m=a[h]<m[h]?a:m);return m}var d=this,f=this.kdAxisArray[0],e=this.kdAxisArray[1],h=b?"distX":"dist";b=-1<d.options.findNearestPointBy.indexOf("y")?2:1;this.kdTree||this.buildingKdTree||
this.buildKDTree();if(this.kdTree)return c(a,this.kdTree,b,b)}})})(K);(function(a){function C(a,e,g,d,c){var h=a.chart.inverted;this.axis=a;this.isNegative=g;this.options=e;this.x=d;this.total=null;this.points={};this.stack=c;this.rightCliff=this.leftCliff=0;this.alignOptions={align:e.align||(h?g?"left":"right":"center"),verticalAlign:e.verticalAlign||(h?"middle":g?"bottom":"top"),y:u(e.y,h?4:g?14:-6),x:u(e.x,h?g?-6:6:0)};this.textAlign=e.textAlign||(h?g?"right":"left":"center")}var A=a.Axis,G=a.Chart,
F=a.correctFloat,m=a.defined,g=a.destroyObjectProperties,k=a.each,q=a.format,v=a.objectEach,u=a.pick;a=a.Series;C.prototype={destroy:function(){g(this,this.axis)},render:function(a){var e=this.options,h=e.format,h=h?q(h,this):e.formatter.call(this);this.label?this.label.attr({text:h,visibility:"hidden"}):this.label=this.axis.chart.renderer.text(h,null,null,e.useHTML).css(e.style).attr({align:this.textAlign,rotation:e.rotation,visibility:"hidden"}).add(a)},setOffset:function(a,e){var h=this.axis,d=
h.chart,c=d.inverted,g=h.reversed,g=this.isNegative&&!g||!this.isNegative&&g,b=h.translate(h.usePercentage?100:this.total,0,0,0,1),h=h.translate(0),h=Math.abs(b-h);a=d.xAxis[0].translate(this.x)+a;var k=d.plotHeight,c={x:c?g?b:b-h:a,y:c?k-a-e:g?k-b-h:k-b,width:c?h:e,height:c?e:h};if(e=this.label)e.align(this.alignOptions,null,c),c=e.alignAttr,e[!1===this.options.crop||d.isInsidePlot(c.x,c.y)?"show":"hide"](!0)}};G.prototype.getStacks=function(){var a=this;k(a.yAxis,function(a){a.stacks&&a.hasVisibleSeries&&
(a.oldStacks=a.stacks)});k(a.series,function(e){!e.options.stacking||!0!==e.visible&&!1!==a.options.chart.ignoreHiddenSeries||(e.stackKey=e.type+u(e.options.stack,""))})};A.prototype.buildStacks=function(){var a=this.series,e,g=u(this.options.reversedStacks,!0),d=a.length,c;if(!this.isXAxis){this.usePercentage=!1;for(c=d;c--;)a[g?c:d-c-1].setStackedPoints();for(c=d;c--;)e=a[g?c:d-c-1],e.setStackCliffs&&e.setStackCliffs();if(this.usePercentage)for(c=0;c<d;c++)a[c].setPercentStacks()}};A.prototype.renderStackTotals=
function(){var a=this.chart,e=a.renderer,g=this.stacks,d=this.stackTotalGroup;d||(this.stackTotalGroup=d=e.g("stack-labels").attr({visibility:"visible",zIndex:6}).add());d.translate(a.plotLeft,a.plotTop);v(g,function(a){v(a,function(a){a.render(d)})})};A.prototype.resetStacks=function(){var a=this,e=a.stacks;a.isXAxis||v(e,function(e){v(e,function(d,c){d.touched<a.stacksTouched?(d.destroy(),delete e[c]):(d.total=null,d.cum=null)})})};A.prototype.cleanStacks=function(){var a;this.isXAxis||(this.oldStacks&&
(a=this.stacks=this.oldStacks),v(a,function(a){v(a,function(a){a.cum=a.total})}))};a.prototype.setStackedPoints=function(){if(this.options.stacking&&(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var a=this.processedXData,e=this.processedYData,g=[],d=e.length,c=this.options,k=c.threshold,b=c.startFromThreshold?k:0,q=c.stack,c=c.stacking,v=this.stackKey,H="-"+v,l=this.negStacks,B=this.yAxis,r=B.stacks,z=B.oldStacks,M,p,E,I,A,f,t;B.stacksTouched+=1;for(A=0;A<d;A++)f=a[A],t=e[A],
M=this.getStackIndicator(M,f,this.index),I=M.key,E=(p=l&&t<(b?0:k))?H:v,r[E]||(r[E]={}),r[E][f]||(z[E]&&z[E][f]?(r[E][f]=z[E][f],r[E][f].total=null):r[E][f]=new C(B,B.options.stackLabels,p,f,q)),E=r[E][f],null!==t&&(E.points[I]=E.points[this.index]=[u(E.cum,b)],m(E.cum)||(E.base=I),E.touched=B.stacksTouched,0<M.index&&!1===this.singleStacks&&(E.points[I][0]=E.points[this.index+","+f+",0"][0])),"percent"===c?(p=p?v:H,l&&r[p]&&r[p][f]?(p=r[p][f],E.total=p.total=Math.max(p.total,E.total)+Math.abs(t)||
0):E.total=F(E.total+(Math.abs(t)||0))):E.total=F(E.total+(t||0)),E.cum=u(E.cum,b)+(t||0),null!==t&&(E.points[I].push(E.cum),g[A]=E.cum);"percent"===c&&(B.usePercentage=!0);this.stackedYData=g;B.oldStacks={}}};a.prototype.setPercentStacks=function(){var a=this,e=a.stackKey,g=a.yAxis.stacks,d=a.processedXData,c;k([e,"-"+e],function(e){for(var b=d.length,h,k;b--;)if(h=d[b],c=a.getStackIndicator(c,h,a.index,e),h=(k=g[e]&&g[e][h])&&k.points[c.key])k=k.total?100/k.total:0,h[0]=F(h[0]*k),h[1]=F(h[1]*k),
a.stackedYData[b]=h[1]})};a.prototype.getStackIndicator=function(a,e,g,d){!m(a)||a.x!==e||d&&a.key!==d?a={x:e,index:0,key:d}:a.index++;a.key=[g,e,a.index].join();return a}})(K);(function(a){var C=a.addEvent,A=a.animate,G=a.Axis,F=a.createElement,m=a.css,g=a.defined,k=a.each,q=a.erase,v=a.extend,u=a.fireEvent,h=a.inArray,e=a.isNumber,n=a.isObject,d=a.isArray,c=a.merge,w=a.objectEach,b=a.pick,y=a.Point,D=a.Series,H=a.seriesTypes,l=a.setAnimation,B=a.splat;v(a.Chart.prototype,{addSeries:function(a,c,
d){var e,h=this;a&&(c=b(c,!0),u(h,"addSeries",{options:a},function(){e=h.initSeries(a);h.isDirtyLegend=!0;h.linkSeries();c&&h.redraw(d)}));return e},addAxis:function(a,d,e,h){var g=d?"xAxis":"yAxis",l=this.options;a=c(a,{index:this[g].length,isX:d});new G(this,a);l[g]=B(l[g]||{});l[g].push(a);b(e,!0)&&this.redraw(h)},showLoading:function(a){var b=this,c=b.options,d=b.loadingDiv,e=c.loading,h=function(){d&&m(d,{left:b.plotLeft+"px",top:b.plotTop+"px",width:b.plotWidth+"px",height:b.plotHeight+"px"})};
d||(b.loadingDiv=d=F("div",{className:"highcharts-loading highcharts-loading-hidden"},null,b.container),b.loadingSpan=F("span",{className:"highcharts-loading-inner"},null,d),C(b,"redraw",h));d.className="highcharts-loading";b.loadingSpan.innerHTML=a||c.lang.loading;m(d,v(e.style,{zIndex:10}));m(b.loadingSpan,e.labelStyle);b.loadingShown||(m(d,{opacity:0,display:""}),A(d,{opacity:e.style.opacity||.5},{duration:e.showDuration||0}));b.loadingShown=!0;h()},hideLoading:function(){var a=this.options,b=
this.loadingDiv;b&&(b.className="highcharts-loading highcharts-loading-hidden",A(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){m(b,{display:"none"})}}));this.loadingShown=!1},propsRequireDirtyBox:"backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions tooltip".split(" "),
update:function(a,d){var l=this,r={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle"},n=a.chart,m,q;if(n){c(!0,l.options.chart,n);"className"in n&&l.setClassName(n.className);if("inverted"in n||"polar"in n)l.propFromSeries(),m=!0;"alignTicks"in n&&(m=!0);w(n,function(a,b){-1!==h("chart."+b,l.propsRequireUpdateSeries)&&(q=!0);-1!==h(b,l.propsRequireDirtyBox)&&(l.isDirtyBox=!0)});"style"in n&&l.renderer.setStyle(n.style)}a.colors&&(this.options.colors=a.colors);a.plotOptions&&c(!0,this.options.plotOptions,
a.plotOptions);w(a,function(a,b){if(l[b]&&"function"===typeof l[b].update)l[b].update(a,!1);else if("function"===typeof l[r[b]])l[r[b]](a);"chart"!==b&&-1!==h(b,l.propsRequireUpdateSeries)&&(q=!0)});k("xAxis yAxis zAxis series colorAxis pane".split(" "),function(b){a[b]&&k(B(a[b]),function(a,c){(c=g(a.id)&&l.get(a.id)||l[b][c])&&c.coll===b&&c.update(a,!1)})});m&&k(l.axes,function(a){a.update({},!1)});q&&k(l.series,function(a){a.update({},!1)});a.loading&&c(!0,l.options.loading,a.loading);m=n&&n.width;
n=n&&n.height;e(m)&&m!==l.chartWidth||e(n)&&n!==l.chartHeight?l.setSize(m,n):b(d,!0)&&l.redraw()},setSubtitle:function(a){this.setTitle(void 0,a)}});v(y.prototype,{update:function(a,c,d,e){function h(){l.applyOptions(a);null===l.y&&f&&(l.graphic=f.destroy());n(a,!0)&&(f&&f.element&&a&&a.marker&&a.marker.symbol&&(l.graphic=f.destroy()),a&&a.dataLabels&&l.dataLabel&&(l.dataLabel=l.dataLabel.destroy()));r=l.index;g.updateParallelArrays(l,r);p.data[r]=n(p.data[r],!0)||n(a,!0)?l.options:a;g.isDirty=g.isDirtyData=
!0;!g.fixedBox&&g.hasCartesianSeries&&(k.isDirtyBox=!0);"point"===p.legendType&&(k.isDirtyLegend=!0);c&&k.redraw(d)}var l=this,g=l.series,f=l.graphic,r,k=g.chart,p=g.options;c=b(c,!0);!1===e?h():l.firePointEvent("update",{options:a},h)},remove:function(a,b){this.series.removePoint(h(this,this.series.data),a,b)}});v(D.prototype,{addPoint:function(a,c,d,e){var h=this.options,l=this.data,g=this.chart,f=this.xAxis,f=f&&f.hasNames&&f.names,r=h.data,k,p,n=this.xData,m,q;c=b(c,!0);k={series:this};this.pointClass.prototype.applyOptions.apply(k,
[a]);q=k.x;m=n.length;if(this.requireSorting&&q<n[m-1])for(p=!0;m&&n[m-1]>q;)m--;this.updateParallelArrays(k,"splice",m,0,0);this.updateParallelArrays(k,m);f&&k.name&&(f[q]=k.name);r.splice(m,0,a);p&&(this.data.splice(m,0,null),this.processData());"point"===h.legendType&&this.generatePoints();d&&(l[0]&&l[0].remove?l[0].remove(!1):(l.shift(),this.updateParallelArrays(k,"shift"),r.shift()));this.isDirtyData=this.isDirty=!0;c&&g.redraw(e)},removePoint:function(a,c,d){var e=this,h=e.data,g=h[a],k=e.points,
f=e.chart,r=function(){k&&k.length===h.length&&k.splice(a,1);h.splice(a,1);e.options.data.splice(a,1);e.updateParallelArrays(g||{series:e},"splice",a,1);g&&g.destroy();e.isDirty=!0;e.isDirtyData=!0;c&&f.redraw()};l(d,f);c=b(c,!0);g?g.firePointEvent("remove",null,r):r()},remove:function(a,c,d){function e(){h.destroy();l.isDirtyLegend=l.isDirtyBox=!0;l.linkSeries();b(a,!0)&&l.redraw(c)}var h=this,l=h.chart;!1!==d?u(h,"remove",null,e):e()},update:function(a,d){var e=this,h=e.chart,l=e.userOptions,g=
e.oldType||e.type,r=a.type||l.type||h.options.chart.type,f=H[g].prototype,n=["group","markerGroup","dataLabelsGroup"],m;if(Object.keys&&"data"===Object.keys(a).toString())return this.setData(a.data,d);if(r&&r!==g||void 0!==a.zIndex)n.length=0;k(n,function(a){n[a]=e[a];delete e[a]});a=c(l,{animation:!1,index:e.index,pointStart:e.xData[0]},{data:e.options.data},a);e.remove(!1,null,!1);for(m in f)e[m]=void 0;v(e,H[r||g].prototype);k(n,function(a){e[a]=n[a]});e.init(h,a);e.oldType=g;h.linkSeries();b(d,
!0)&&h.redraw(!1)}});v(G.prototype,{update:function(a,d){var e=this.chart;a=e.options[this.coll][this.options.index]=c(this.userOptions,a);this.destroy(!0);this.init(e,v(a,{events:void 0}));e.isDirtyBox=!0;b(d,!0)&&e.redraw()},remove:function(a){for(var c=this.chart,e=this.coll,h=this.series,l=h.length;l--;)h[l]&&h[l].remove(!1);q(c.axes,this);q(c[e],this);d(c.options[e])?c.options[e].splice(this.options.index,1):delete c.options[e];k(c[e],function(a,b){a.options.index=b});this.destroy();c.isDirtyBox=
!0;b(a,!0)&&c.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}})})(K);(function(a){var C=a.color,A=a.each,G=a.map,F=a.pick,m=a.Series,g=a.seriesType;g("area","line",{softThreshold:!1,threshold:0},{singleStacks:!1,getStackPoints:function(){var g=[],m=[],v=this.xAxis,u=this.yAxis,h=u.stacks[this.stackKey],e={},n=this.points,d=this.index,c=u.series,w=c.length,b,y=F(u.options.reversedStacks,!0)?1:-1,D;if(this.options.stacking){for(D=
0;D<n.length;D++)e[n[D].x]=n[D];a.objectEach(h,function(a,b){null!==a.total&&m.push(b)});m.sort(function(a,b){return a-b});b=G(c,function(){return this.visible});A(m,function(a,c){var l=0,k,n;if(e[a]&&!e[a].isNull)g.push(e[a]),A([-1,1],function(l){var g=1===l?"rightNull":"leftNull",r=0,q=h[m[c+l]];if(q)for(D=d;0<=D&&D<w;)k=q.points[D],k||(D===d?e[a][g]=!0:b[D]&&(n=h[a].points[D])&&(r-=n[1]-n[0])),D+=y;e[a][1===l?"rightCliff":"leftCliff"]=r});else{for(D=d;0<=D&&D<w;){if(k=h[a].points[D]){l=k[1];break}D+=
y}l=u.translate(l,0,1,0,1);g.push({isNull:!0,plotX:v.translate(a,0,0,0,1),x:a,plotY:l,yBottom:l})}})}return g},getGraphPath:function(a){var g=m.prototype.getGraphPath,k=this.options,u=k.stacking,h=this.yAxis,e,n,d=[],c=[],w=this.index,b,y=h.stacks[this.stackKey],D=k.threshold,A=h.getThreshold(k.threshold),l,k=k.connectNulls||"percent"===u,B=function(e,l,g){var k=a[e];e=u&&y[k.x].points[w];var n=k[g+"Null"]||0;g=k[g+"Cliff"]||0;var r,m,k=!0;g||n?(r=(n?e[0]:e[1])+g,m=e[0]+g,k=!!n):!u&&a[l]&&a[l].isNull&&
(r=m=D);void 0!==r&&(c.push({plotX:b,plotY:null===r?A:h.getThreshold(r),isNull:k,isCliff:!0}),d.push({plotX:b,plotY:null===m?A:h.getThreshold(m),doCurve:!1}))};a=a||this.points;u&&(a=this.getStackPoints());for(e=0;e<a.length;e++)if(n=a[e].isNull,b=F(a[e].rectPlotX,a[e].plotX),l=F(a[e].yBottom,A),!n||k)k||B(e,e-1,"left"),n&&!u&&k||(c.push(a[e]),d.push({x:e,plotX:b,plotY:l})),k||B(e,e+1,"right");e=g.call(this,c,!0,!0);d.reversed=!0;n=g.call(this,d,!0,!0);n.length&&(n[0]="L");n=e.concat(n);g=g.call(this,
c,!1,k);n.xMap=e.xMap;this.areaPath=n;return g},drawGraph:function(){this.areaPath=[];m.prototype.drawGraph.apply(this);var a=this,g=this.areaPath,v=this.options,u=[["area","highcharts-area",this.color,v.fillColor]];A(this.zones,function(h,e){u.push(["zone-area-"+e,"highcharts-area highcharts-zone-area-"+e+" "+h.className,h.color||a.color,h.fillColor||v.fillColor])});A(u,function(h){var e=h[0],k=a[e];k?(k.endX=g.xMap,k.animate({d:g})):(k=a[e]=a.chart.renderer.path(g).addClass(h[1]).attr({fill:F(h[3],
C(h[2]).setOpacity(F(v.fillOpacity,.75)).get()),zIndex:0}).add(a.group),k.isArea=!0);k.startX=g.xMap;k.shiftUnit=v.step?2:1})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(K);(function(a){var C=a.pick;a=a.seriesType;a("spline","line",{},{getPointSpline:function(a,G,F){var m=G.plotX,g=G.plotY,k=a[F-1];F=a[F+1];var q,v,u,h;if(k&&!k.isNull&&!1!==k.doCurve&&!G.isCliff&&F&&!F.isNull&&!1!==F.doCurve&&!G.isCliff){a=k.plotY;u=F.plotX;F=F.plotY;var e=0;q=(1.5*m+k.plotX)/2.5;v=(1.5*g+a)/2.5;u=(1.5*
m+u)/2.5;h=(1.5*g+F)/2.5;u!==q&&(e=(h-v)*(u-m)/(u-q)+g-h);v+=e;h+=e;v>a&&v>g?(v=Math.max(a,g),h=2*g-v):v<a&&v<g&&(v=Math.min(a,g),h=2*g-v);h>F&&h>g?(h=Math.max(F,g),v=2*g-h):h<F&&h<g&&(h=Math.min(F,g),v=2*g-h);G.rightContX=u;G.rightContY=h}G=["C",C(k.rightContX,k.plotX),C(k.rightContY,k.plotY),C(q,m),C(v,g),m,g];k.rightContX=k.rightContY=null;return G}})})(K);(function(a){var C=a.seriesTypes.area.prototype,A=a.seriesType;A("areaspline","spline",a.defaultPlotOptions.area,{getStackPoints:C.getStackPoints,
getGraphPath:C.getGraphPath,setStackCliffs:C.setStackCliffs,drawGraph:C.drawGraph,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(K);(function(a){var C=a.animObject,A=a.color,G=a.each,F=a.extend,m=a.isNumber,g=a.merge,k=a.pick,q=a.Series,v=a.seriesType,u=a.svg;v("column","line",{borderRadius:0,crisp:!0,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1,shadow:!1},select:{color:"#cccccc",borderColor:"#000000",shadow:!1}},
dataLabels:{align:null,verticalAlign:null,y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){q.prototype.init.apply(this,arguments);var a=this,e=a.chart;e.hasRendered&&G(e.series,function(e){e.type===a.type&&(e.isDirty=!0)})},getColumnMetrics:function(){var a=this,e=a.options,g=a.xAxis,d=a.yAxis,c=g.reversed,m,b={},q=0;!1===e.grouping?
q=1:G(a.chart.series,function(c){var e=c.options,g=c.yAxis,h;c.type!==a.type||!c.visible&&a.chart.options.chart.ignoreHiddenSeries||d.len!==g.len||d.pos!==g.pos||(e.stacking?(m=c.stackKey,void 0===b[m]&&(b[m]=q++),h=b[m]):!1!==e.grouping&&(h=q++),c.columnIndex=h)});var u=Math.min(Math.abs(g.transA)*(g.ordinalSlope||e.pointRange||g.closestPointRange||g.tickInterval||1),g.len),v=u*e.groupPadding,l=(u-2*v)/(q||1),e=Math.min(e.maxPointWidth||g.len,k(e.pointWidth,l*(1-2*e.pointPadding)));a.columnMetrics=
{width:e,offset:(l-e)/2+(v+((a.columnIndex||0)+(c?1:0))*l-u/2)*(c?-1:1)};return a.columnMetrics},crispCol:function(a,e,g,d){var c=this.chart,h=this.borderWidth,b=-(h%2?.5:0),h=h%2?.5:1;c.inverted&&c.renderer.isVML&&(h+=1);this.options.crisp&&(g=Math.round(a+g)+b,a=Math.round(a)+b,g-=a);d=Math.round(e+d)+h;b=.5>=Math.abs(e)&&.5<d;e=Math.round(e)+h;d-=e;b&&d&&(--e,d+=1);return{x:a,y:e,width:g,height:d}},translate:function(){var a=this,e=a.chart,g=a.options,d=a.dense=2>a.closestPointRange*a.xAxis.transA,
d=a.borderWidth=k(g.borderWidth,d?0:1),c=a.yAxis,m=a.translatedThreshold=c.getThreshold(g.threshold),b=k(g.minPointLength,5),y=a.getColumnMetrics(),u=y.width,v=a.barW=Math.max(u,1+2*d),l=a.pointXOffset=y.offset;e.inverted&&(m-=.5);g.pointPadding&&(v=Math.ceil(v));q.prototype.translate.apply(a);G(a.points,function(d){var g=k(d.yBottom,m),h=999+Math.abs(g),h=Math.min(Math.max(-h,d.plotY),c.len+h),n=d.plotX+l,p=v,q=Math.min(h,g),w,y=Math.max(h,g)-q;Math.abs(y)<b&&b&&(y=b,w=!c.reversed&&!d.negative||
c.reversed&&d.negative,q=Math.abs(q-m)>b?g-b:m-(w?b:0));d.barX=n;d.pointWidth=u;d.tooltipPos=e.inverted?[c.len+c.pos-e.plotLeft-h,a.xAxis.len-n-p/2,y]:[n+p/2,h+c.pos-e.plotTop,y];d.shapeType="rect";d.shapeArgs=a.crispCol.apply(a,d.isNull?[n,m,p,0]:[n,q,p,y])})},getSymbol:a.noop,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},pointAttribs:function(a,e){var h=this.options,d,c=this.pointAttrToOptions||{};
d=c.stroke||"borderColor";var k=c["stroke-width"]||"borderWidth",b=a&&a.color||this.color,m=a[d]||h[d]||this.color||b,q=a[k]||h[k]||this[k]||0,c=h.dashStyle;a&&this.zones.length&&(b=a.getZone(),b=a.options.color||b&&b.color||this.color);e&&(a=g(h.states[e],a.options.states&&a.options.states[e]||{}),e=a.brightness,b=a.color||void 0!==e&&A(b).brighten(a.brightness).get()||b,m=a[d]||m,q=a[k]||q,c=a.dashStyle||c);d={fill:b,stroke:m,"stroke-width":q};h.borderRadius&&(d.r=h.borderRadius);c&&(d.dashstyle=
c);return d},drawPoints:function(){var a=this,e=this.chart,k=a.options,d=e.renderer,c=k.animationLimit||250,q;G(a.points,function(b){var h=b.graphic;if(m(b.plotY)&&null!==b.y){q=b.shapeArgs;if(h)h[e.pointCount<c?"animate":"attr"](g(q));else b.graphic=h=d[b.shapeType](q).add(b.group||a.group);h.attr(a.pointAttribs(b,b.selected&&"select")).shadow(k.shadow,null,k.stacking&&!k.borderRadius);h.addClass(b.getClassName(),!0)}else h&&(b.graphic=h.destroy())})},animate:function(a){var e=this,g=this.yAxis,
d=e.options,c=this.chart.inverted,h={};u&&(a?(h.scaleY=.001,a=Math.min(g.pos+g.len,Math.max(g.pos,g.toPixels(d.threshold))),c?h.translateX=a-g.len:h.translateY=a,e.group.attr(h)):(h[c?"translateX":"translateY"]=g.pos,e.group.animate(h,F(C(e.options.animation),{step:function(a,c){e.group.attr({scaleY:Math.max(.001,c.pos)})}})),e.animate=null))},remove:function(){var a=this,e=a.chart;e.hasRendered&&G(e.series,function(e){e.type===a.type&&(e.isDirty=!0)});q.prototype.remove.apply(a,arguments)}})})(K);
(function(a){a=a.seriesType;a("bar","column",null,{inverted:!0})})(K);(function(a){var C=a.Series;a=a.seriesType;a("scatter","line",{lineWidth:0,findNearestPointBy:"xy",marker:{enabled:!0},tooltip:{headerFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 0.85em"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e',pointFormat:"x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e"}},{sorted:!1,requireSorting:!1,noSharedTooltip:!0,
trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,drawGraph:function(){this.options.lineWidth&&C.prototype.drawGraph.call(this)}})})(K);(function(a){var C=a.pick,A=a.relativeLength;a.CenteredSeriesMixin={getCenter:function(){var a=this.options,F=this.chart,m=2*(a.slicedOffset||0),g=F.plotWidth-2*m,F=F.plotHeight-2*m,k=a.center,k=[C(k[0],"50%"),C(k[1],"50%"),a.size||"100%",a.innerSize||0],q=Math.min(g,F),v,u;for(v=0;4>v;++v)u=k[v],a=2>v||2===v&&/%$/.test(u),k[v]=A(u,[g,
F,q,k[2]][v])+(a?m:0);k[3]>k[2]&&(k[3]=k[2]);return k}}})(K);(function(a){var C=a.addEvent,A=a.defined,G=a.each,F=a.extend,m=a.inArray,g=a.noop,k=a.pick,q=a.Point,v=a.Series,u=a.seriesType,h=a.setAnimation;u("pie","line",{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,enabled:!0,formatter:function(){return this.point.isNull?void 0:this.point.name},x:0},ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},
borderColor:"#ffffff",borderWidth:1,states:{hover:{brightness:.1,shadow:!1}}},{isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttribs:a.seriesTypes.column.prototype.pointAttribs,animate:function(a){var e=this,d=e.points,c=e.startAngleRad;a||(G(d,function(a){var b=a.graphic,d=a.shapeArgs;b&&(b.attr({r:a.startR||e.center[3]/2,start:c,end:c}),b.animate({r:d.r,start:d.start,end:d.end},e.options.animation))}),e.animate=null)},
updateTotals:function(){var a,g=0,d=this.points,c=d.length,h,b=this.options.ignoreHiddenPoint;for(a=0;a<c;a++)h=d[a],g+=b&&!h.visible?0:h.isNull?0:h.y;this.total=g;for(a=0;a<c;a++)h=d[a],h.percentage=0<g&&(h.visible||!b)?h.y/g*100:0,h.total=g},generatePoints:function(){v.prototype.generatePoints.call(this);this.updateTotals()},translate:function(a){this.generatePoints();var e=0,d=this.options,c=d.slicedOffset,g=c+(d.borderWidth||0),b,h,m,q=d.startAngle||0,l=this.startAngleRad=Math.PI/180*(q-90),q=
(this.endAngleRad=Math.PI/180*(k(d.endAngle,q+360)-90))-l,u=this.points,r,z=d.dataLabels.distance,d=d.ignoreHiddenPoint,v,p=u.length,E;a||(this.center=a=this.getCenter());this.getX=function(b,c,d){m=Math.asin(Math.min((b-a[1])/(a[2]/2+d.labelDistance),1));return a[0]+(c?-1:1)*Math.cos(m)*(a[2]/2+d.labelDistance)};for(v=0;v<p;v++){E=u[v];E.labelDistance=k(E.options.dataLabels&&E.options.dataLabels.distance,z);this.maxLabelDistance=Math.max(this.maxLabelDistance||0,E.labelDistance);b=l+e*q;if(!d||E.visible)e+=
E.percentage/100;h=l+e*q;E.shapeType="arc";E.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:Math.round(1E3*b)/1E3,end:Math.round(1E3*h)/1E3};m=(h+b)/2;m>1.5*Math.PI?m-=2*Math.PI:m<-Math.PI/2&&(m+=2*Math.PI);E.slicedTranslation={translateX:Math.round(Math.cos(m)*c),translateY:Math.round(Math.sin(m)*c)};h=Math.cos(m)*a[2]/2;r=Math.sin(m)*a[2]/2;E.tooltipPos=[a[0]+.7*h,a[1]+.7*r];E.half=m<-Math.PI/2||m>Math.PI/2?1:0;E.angle=m;b=Math.min(g,E.labelDistance/5);E.labelPos=[a[0]+h+Math.cos(m)*E.labelDistance,
a[1]+r+Math.sin(m)*E.labelDistance,a[0]+h+Math.cos(m)*b,a[1]+r+Math.sin(m)*b,a[0]+h,a[1]+r,0>E.labelDistance?"center":E.half?"right":"left",m]}},drawGraph:null,drawPoints:function(){var a=this,g=a.chart.renderer,d,c,h,b,k=a.options.shadow;k&&!a.shadowGroup&&(a.shadowGroup=g.g("shadow").add(a.group));G(a.points,function(e){if(!e.isNull){c=e.graphic;b=e.shapeArgs;d=e.getTranslate();var m=e.shadowGroup;k&&!m&&(m=e.shadowGroup=g.g("shadow").add(a.shadowGroup));m&&m.attr(d);h=a.pointAttribs(e,e.selected&&
"select");c?c.setRadialReference(a.center).attr(h).animate(F(b,d)):(e.graphic=c=g[e.shapeType](b).setRadialReference(a.center).attr(d).add(a.group),e.visible||c.attr({visibility:"hidden"}),c.attr(h).attr({"stroke-linejoin":"round"}).shadow(k,m));c.addClass(e.getClassName())}})},searchPoint:g,sortByAngle:function(a,g){a.sort(function(a,c){return void 0!==a.angle&&(c.angle-a.angle)*g})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,getCenter:a.CenteredSeriesMixin.getCenter,getSymbol:g},{init:function(){q.prototype.init.apply(this,
arguments);var a=this,g;a.name=k(a.name,"Slice");g=function(d){a.slice("select"===d.type)};C(a,"select",g);C(a,"unselect",g);return a},isValid:function(){return a.isNumber(this.y,!0)&&0<=this.y},setVisible:function(a,g){var d=this,c=d.series,e=c.chart,b=c.options.ignoreHiddenPoint;g=k(g,b);a!==d.visible&&(d.visible=d.options.visible=a=void 0===a?!d.visible:a,c.options.data[m(d,c.data)]=d.options,G(["graphic","dataLabel","connector","shadowGroup"],function(b){if(d[b])d[b][a?"show":"hide"](!0)}),d.legendItem&&
e.legend.colorizeItem(d,a),a||"hover"!==d.state||d.setState(""),b&&(c.isDirty=!0),g&&e.redraw())},slice:function(a,g,d){var c=this.series;h(d,c.chart);k(g,!0);this.sliced=this.options.sliced=A(a)?a:!this.sliced;c.options.data[m(this,c.data)]=this.options;this.graphic.animate(this.getTranslate());this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())},getTranslate:function(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}},haloPath:function(a){var e=this.shapeArgs;return this.sliced||
!this.visible?[]:this.series.chart.renderer.symbols.arc(e.x,e.y,e.r+a,e.r+a,{innerR:this.shapeArgs.r,start:e.start,end:e.end})}})})(K);(function(a){var C=a.addEvent,A=a.arrayMax,G=a.defined,F=a.each,m=a.extend,g=a.format,k=a.map,q=a.merge,v=a.noop,u=a.pick,h=a.relativeLength,e=a.Series,n=a.seriesTypes,d=a.stableSort;a.distribute=function(a,e){function b(a,b){return a.target-b.target}var c,g=!0,h=a,l=[],m;m=0;for(c=a.length;c--;)m+=a[c].size;if(m>e){d(a,function(a,b){return(b.rank||0)-(a.rank||0)});
for(m=c=0;m<=e;)m+=a[c].size,c++;l=a.splice(c-1,a.length)}d(a,b);for(a=k(a,function(a){return{size:a.size,targets:[a.target]}});g;){for(c=a.length;c--;)g=a[c],m=(Math.min.apply(0,g.targets)+Math.max.apply(0,g.targets))/2,g.pos=Math.min(Math.max(0,m-g.size/2),e-g.size);c=a.length;for(g=!1;c--;)0<c&&a[c-1].pos+a[c-1].size>a[c].pos&&(a[c-1].size+=a[c].size,a[c-1].targets=a[c-1].targets.concat(a[c].targets),a[c-1].pos+a[c-1].size>e&&(a[c-1].pos=e-a[c-1].size),a.splice(c,1),g=!0)}c=0;F(a,function(a){var b=
0;F(a.targets,function(){h[c].pos=a.pos+b;b+=h[c].size;c++})});h.push.apply(h,l);d(h,b)};e.prototype.drawDataLabels=function(){var c=this,d=c.options,b=d.dataLabels,e=c.points,h,k,l=c.hasRendered||0,m,r,n=u(b.defer,!!d.animation),v=c.chart.renderer;if(b.enabled||c._hasPointLabels)c.dlProcessOptions&&c.dlProcessOptions(b),r=c.plotGroup("dataLabelsGroup","data-labels",n&&!l?"hidden":"visible",b.zIndex||6),n&&(r.attr({opacity:+l}),l||C(c,"afterAnimate",function(){c.visible&&r.show(!0);r[d.animation?
"animate":"attr"]({opacity:1},{duration:200})})),k=b,F(e,function(e){var l,p=e.dataLabel,n,f,t=e.connector,w=!p,z;h=e.dlOptions||e.options&&e.options.dataLabels;if(l=u(h&&h.enabled,k.enabled)&&null!==e.y)b=q(k,h),n=e.getLabelConfig(),m=b.format?g(b.format,n):b.formatter.call(n,b),z=b.style,n=b.rotation,z.color=u(b.color,z.color,c.color,"#000000"),"contrast"===z.color&&(e.contrastColor=v.getContrast(e.color||c.color),z.color=b.inside||0>u(e.labelDistance,b.distance)||d.stacking?e.contrastColor:"#000000"),
d.cursor&&(z.cursor=d.cursor),f={fill:b.backgroundColor,stroke:b.borderColor,"stroke-width":b.borderWidth,r:b.borderRadius||0,rotation:n,padding:b.padding,zIndex:1},a.objectEach(f,function(a,b){void 0===a&&delete f[b]});!p||l&&G(m)?l&&G(m)&&(p?f.text=m:(p=e.dataLabel=v[n?"text":"label"](m,0,-9999,b.shape,null,null,b.useHTML,null,"data-label"),p.addClass("highcharts-data-label-color-"+e.colorIndex+" "+(b.className||"")+(b.useHTML?"highcharts-tracker":""))),p.attr(f),p.css(z).shadow(b.shadow),p.added||
p.add(r),c.alignDataLabel(e,p,b,null,w)):(e.dataLabel=p=p.destroy(),t&&(e.connector=t.destroy()))})};e.prototype.alignDataLabel=function(a,d,b,e,g){var c=this.chart,h=c.inverted,k=u(a.plotX,-9999),r=u(a.plotY,-9999),n=d.getBBox(),q,p=b.rotation,w=b.align,v=this.visible&&(a.series.forceDL||c.isInsidePlot(k,Math.round(r),h)||e&&c.isInsidePlot(k,h?e.x+1:e.y+e.height-1,h)),y="justify"===u(b.overflow,"justify");if(v&&(q=b.style.fontSize,q=c.renderer.fontMetrics(q,d).b,e=m({x:h?c.plotWidth-r:k,y:Math.round(h?
c.plotHeight-k:r),width:0,height:0},e),m(b,{width:n.width,height:n.height}),p?(y=!1,k=c.renderer.rotCorr(q,p),k={x:e.x+b.x+e.width/2+k.x,y:e.y+b.y+{top:0,middle:.5,bottom:1}[b.verticalAlign]*e.height},d[g?"attr":"animate"](k).attr({align:w}),r=(p+720)%360,r=180<r&&360>r,"left"===w?k.y-=r?n.height:0:"center"===w?(k.x-=n.width/2,k.y-=n.height/2):"right"===w&&(k.x-=n.width,k.y-=r?0:n.height)):(d.align(b,null,e),k=d.alignAttr),y?a.isLabelJustified=this.justifyDataLabel(d,b,k,n,e,g):u(b.crop,!0)&&(v=c.isInsidePlot(k.x,
k.y)&&c.isInsidePlot(k.x+n.width,k.y+n.height)),b.shape&&!p))d[g?"attr":"animate"]({anchorX:h?c.plotWidth-a.plotY:a.plotX,anchorY:h?c.plotHeight-a.plotX:a.plotY});v||(d.attr({y:-9999}),d.placed=!1)};e.prototype.justifyDataLabel=function(a,d,b,e,g,h){var c=this.chart,k=d.align,m=d.verticalAlign,n,q,p=a.box?0:a.padding||0;n=b.x+p;0>n&&("right"===k?d.align="left":d.x=-n,q=!0);n=b.x+e.width-p;n>c.plotWidth&&("left"===k?d.align="right":d.x=c.plotWidth-n,q=!0);n=b.y+p;0>n&&("bottom"===m?d.verticalAlign=
"top":d.y=-n,q=!0);n=b.y+e.height-p;n>c.plotHeight&&("top"===m?d.verticalAlign="bottom":d.y=c.plotHeight-n,q=!0);q&&(a.placed=!h,a.align(d,null,g));return q};n.pie&&(n.pie.prototype.drawDataLabels=function(){var c=this,d=c.data,b,g=c.chart,h=c.options.dataLabels,k=u(h.connectorPadding,10),l=u(h.connectorWidth,1),m=g.plotWidth,r=g.plotHeight,n,q=c.center,p=q[2]/2,v=q[1],C,L,f,t,K=[[],[]],J,N,O,P,x=[0,0,0,0];c.visible&&(h.enabled||c._hasPointLabels)&&(F(d,function(a){a.dataLabel&&a.visible&&a.dataLabel.shortened&&
(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1)}),e.prototype.drawDataLabels.apply(c),F(d,function(a){a.dataLabel&&a.visible&&(K[a.half].push(a),a.dataLabel._pos=null)}),F(K,function(d,e){var l,n,u=d.length,w=[],z;if(u)for(c.sortByAngle(d,e-.5),0<c.maxLabelDistance&&(l=Math.max(0,v-p-c.maxLabelDistance),n=Math.min(v+p+c.maxLabelDistance,g.plotHeight),F(d,function(a){0<a.labelDistance&&a.dataLabel&&(a.top=Math.max(0,v-p-a.labelDistance),a.bottom=
Math.min(v+p+a.labelDistance,g.plotHeight),z=a.dataLabel.getBBox().height||21,a.positionsIndex=w.push({target:a.labelPos[1]-a.top+z/2,size:z,rank:a.y})-1)}),a.distribute(w,n+z-l)),P=0;P<u;P++)b=d[P],n=b.positionsIndex,f=b.labelPos,C=b.dataLabel,O=!1===b.visible?"hidden":"inherit",l=f[1],w&&G(w[n])?void 0===w[n].pos?O="hidden":(t=w[n].size,N=b.top+w[n].pos):N=l,delete b.positionIndex,J=h.justify?q[0]+(e?-1:1)*(p+b.labelDistance):c.getX(N<b.top+2||N>b.bottom-2?l:N,e,b),C._attr={visibility:O,align:f[6]},
C._pos={x:J+h.x+({left:k,right:-k}[f[6]]||0),y:N+h.y-10},f.x=J,f.y=N,L=C.getBBox().width,l=null,J-L<k?(l=Math.round(L-J+k),x[3]=Math.max(l,x[3])):J+L>m-k&&(l=Math.round(J+L-m+k),x[1]=Math.max(l,x[1])),0>N-t/2?x[0]=Math.max(Math.round(-N+t/2),x[0]):N+t/2>r&&(x[2]=Math.max(Math.round(N+t/2-r),x[2])),C.sideOverflow=l}),0===A(x)||this.verifyDataLabelOverflow(x))&&(this.placeDataLabels(),l&&F(this.points,function(a){var b;n=a.connector;if((C=a.dataLabel)&&C._pos&&a.visible&&0<a.labelDistance){O=C._attr.visibility;
if(b=!n)a.connector=n=g.renderer.path().addClass("highcharts-data-label-connector highcharts-color-"+a.colorIndex).add(c.dataLabelsGroup),n.attr({"stroke-width":l,stroke:h.connectorColor||a.color||"#666666"});n[b?"attr":"animate"]({d:c.connectorPath(a.labelPos)});n.attr("visibility",O)}else n&&(a.connector=n.destroy())}))},n.pie.prototype.connectorPath=function(a){var c=a.x,b=a.y;return u(this.options.dataLabels.softConnector,!0)?["M",c+("left"===a[6]?5:-5),b,"C",c,b,2*a[2]-a[4],2*a[3]-a[5],a[2],
a[3],"L",a[4],a[5]]:["M",c+("left"===a[6]?5:-5),b,"L",a[2],a[3],"L",a[4],a[5]]},n.pie.prototype.placeDataLabels=function(){F(this.points,function(a){var c=a.dataLabel;c&&a.visible&&((a=c._pos)?(c.sideOverflow&&(c._attr.width=c.getBBox().width-c.sideOverflow,c.css({width:c._attr.width+"px",textOverflow:"ellipsis"}),c.shortened=!0),c.attr(c._attr),c[c.moved?"animate":"attr"](a),c.moved=!0):c&&c.attr({y:-9999}))},this)},n.pie.prototype.alignDataLabel=v,n.pie.prototype.verifyDataLabelOverflow=function(a){var c=
this.center,b=this.options,d=b.center,e=b.minSize||80,g,l=null!==b.size;l||(null!==d[0]?g=Math.max(c[2]-Math.max(a[1],a[3]),e):(g=Math.max(c[2]-a[1]-a[3],e),c[0]+=(a[3]-a[1])/2),null!==d[1]?g=Math.max(Math.min(g,c[2]-Math.max(a[0],a[2])),e):(g=Math.max(Math.min(g,c[2]-a[0]-a[2]),e),c[1]+=(a[0]-a[2])/2),g<c[2]?(c[2]=g,c[3]=Math.min(h(b.innerSize||0,g),g),this.translate(c),this.drawDataLabels&&this.drawDataLabels()):l=!0);return l});n.column&&(n.column.prototype.alignDataLabel=function(a,d,b,g,h){var c=
this.chart.inverted,l=a.series,k=a.dlBox||a.shapeArgs,m=u(a.below,a.plotY>u(this.translatedThreshold,l.yAxis.len)),n=u(b.inside,!!this.options.stacking);k&&(g=q(k),0>g.y&&(g.height+=g.y,g.y=0),k=g.y+g.height-l.yAxis.len,0<k&&(g.height-=k),c&&(g={x:l.yAxis.len-g.y-g.height,y:l.xAxis.len-g.x-g.width,width:g.height,height:g.width}),n||(c?(g.x+=m?0:g.width,g.width=0):(g.y+=m?g.height:0,g.height=0)));b.align=u(b.align,!c||n?"center":m?"right":"left");b.verticalAlign=u(b.verticalAlign,c||n?"middle":m?"top":
"bottom");e.prototype.alignDataLabel.call(this,a,d,b,g,h);a.isLabelJustified&&a.contrastColor&&a.dataLabel.css({color:a.contrastColor})})})(K);(function(a){var C=a.Chart,A=a.each,G=a.pick,F=a.addEvent;C.prototype.callbacks.push(function(a){function g(){var g=[];A(a.series||[],function(a){var k=a.options.dataLabels,m=a.dataLabelCollections||["dataLabel"];(k.enabled||a._hasPointLabels)&&!k.allowOverlap&&a.visible&&A(m,function(h){A(a.points,function(a){a[h]&&(a[h].labelrank=G(a.labelrank,a.shapeArgs&&
a.shapeArgs.height),g.push(a[h]))})})});a.hideOverlappingLabels(g)}g();F(a,"redraw",g)});C.prototype.hideOverlappingLabels=function(a){var g=a.length,k,m,v,u,h,e,n,d,c,w=function(a,c,d,e,g,h,k,m){return!(g>a+d||g+k<a||h>c+e||h+m<c)};for(m=0;m<g;m++)if(k=a[m])k.oldOpacity=k.opacity,k.newOpacity=1;a.sort(function(a,c){return(c.labelrank||0)-(a.labelrank||0)});for(m=0;m<g;m++)for(v=a[m],k=m+1;k<g;++k)if(u=a[k],v&&u&&v!==u&&v.placed&&u.placed&&0!==v.newOpacity&&0!==u.newOpacity&&(h=v.alignAttr,e=u.alignAttr,
n=v.parentGroup,d=u.parentGroup,c=2*(v.box?0:v.padding),h=w(h.x+n.translateX,h.y+n.translateY,v.width-c,v.height-c,e.x+d.translateX,e.y+d.translateY,u.width-c,u.height-c)))(v.labelrank<u.labelrank?v:u).newOpacity=0;A(a,function(a){var b,c;a&&(c=a.newOpacity,a.oldOpacity!==c&&a.placed&&(c?a.show(!0):b=function(){a.hide()},a.alignAttr.opacity=c,a[a.isOld?"animate":"attr"](a.alignAttr,null,b)),a.isOld=!0)})}})(K);(function(a){var C=a.addEvent,A=a.Chart,G=a.createElement,F=a.css,m=a.defaultOptions,g=
a.defaultPlotOptions,k=a.each,q=a.extend,v=a.fireEvent,u=a.hasTouch,h=a.inArray,e=a.isObject,n=a.Legend,d=a.merge,c=a.pick,w=a.Point,b=a.Series,y=a.seriesTypes,D=a.svg,H;H=a.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart.pointer,c=function(a){var c=b.getPointFromEvent(a);void 0!==c&&(b.isDirectTouch=!0,c.onMouseOver(a))};k(a.points,function(a){a.graphic&&(a.graphic.element.point=a);a.dataLabel&&(a.dataLabel.div?a.dataLabel.div.point=a:a.dataLabel.element.point=a)});a._hasTracking||
(k(a.trackerGroups,function(d){if(a[d]){a[d].addClass("highcharts-tracker").on("mouseover",c).on("mouseout",function(a){b.onTrackerMouseOut(a)});if(u)a[d].on("touchstart",c);a.options.cursor&&a[d].css(F).css({cursor:a.options.cursor})}}),a._hasTracking=!0)},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:a.graphPath),e=d.length,g=a.chart,h=g.pointer,m=g.renderer,n=g.options.tooltip.snap,f=a.tracker,q,v=function(){if(g.hoverSeries!==a)a.onMouseOver()},w=
"rgba(192,192,192,"+(D?.0001:.002)+")";if(e&&!c)for(q=e+1;q--;)"M"===d[q]&&d.splice(q+1,0,d[q+1]-n,d[q+2],"L"),(q&&"M"===d[q]||q===e)&&d.splice(q,0,"L",d[q-2]+n,d[q-1]);f?f.attr({d:d}):a.graph&&(a.tracker=m.path(d).attr({"stroke-linejoin":"round",visibility:a.visible?"visible":"hidden",stroke:w,fill:c?w:"none","stroke-width":a.graph.strokeWidth()+(c?0:2*n),zIndex:2}).add(a.group),k([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",v).on("mouseout",function(a){h.onTrackerMouseOut(a)});
b.cursor&&a.css({cursor:b.cursor});if(u)a.on("touchstart",v)}))}};y.column&&(y.column.prototype.drawTracker=H.drawTrackerPoint);y.pie&&(y.pie.prototype.drawTracker=H.drawTrackerPoint);y.scatter&&(y.scatter.prototype.drawTracker=H.drawTrackerPoint);q(n.prototype,{setItemEvents:function(a,b,c){var e=this,g=e.chart.renderer.boxWrapper,h="highcharts-legend-"+(a.series?"point":"series")+"-active";(c?b:a.legendGroup).on("mouseover",function(){a.setState("hover");g.addClass(h);b.css(e.options.itemHoverStyle)}).on("mouseout",
function(){b.css(d(a.visible?e.itemStyle:e.itemHiddenStyle));g.removeClass(h);a.setState()}).on("click",function(b){var c=function(){a.setVisible&&a.setVisible()};b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,c):v(a,"legendItemClick",b,c)})},createCheckboxForItem:function(a){a.checkbox=G("input",{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);C(a.checkbox,"click",function(b){v(a.series||a,"checkboxClick",
{checked:b.target.checked,item:a},function(){a.select()})})}});m.legend.itemStyle.cursor="pointer";q(A.prototype,{showResetZoom:function(){var a=this,b=m.lang,c=a.options.chart.resetZoomButton,d=c.theme,e=d.states,g="chart"===c.relativeTo?null:"plotBox";this.resetZoomButton=a.renderer.button(b.resetZoom,null,null,function(){a.zoomOut()},d,e&&e.hover).attr({align:c.position.align,title:b.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(c.position,!1,g)},zoomOut:function(){var a=this;
v(a,"selection",{resetSelection:!0},function(){a.zoom()})},zoom:function(a){var b,d=this.pointer,g=!1,h;!a||a.resetSelection?k(this.axes,function(a){b=a.zoom()}):k(a.xAxis.concat(a.yAxis),function(a){var c=a.axis;d[c.isXAxis?"zoomX":"zoomY"]&&(b=c.zoom(a.min,a.max),c.displayBtn&&(g=!0))});h=this.resetZoomButton;g&&!h?this.showResetZoom():!g&&e(h)&&(this.resetZoomButton=h.destroy());b&&this.redraw(c(this.options.chart.animation,a&&a.animation,100>this.pointCount))},pan:function(a,b){var c=this,d=c.hoverPoints,
e;d&&k(d,function(a){a.setState()});k("xy"===b?[1,0]:[1],function(b){b=c[b?"xAxis":"yAxis"][0];var d=b.horiz,g=a[d?"chartX":"chartY"],d=d?"mouseDownX":"mouseDownY",h=c[d],f=(b.pointRange||0)/2,l=b.getExtremes(),k=b.toValue(h-g,!0)+f,f=b.toValue(h+b.len-g,!0)-f,m=f<k,h=m?f:k,k=m?k:f,f=Math.min(l.dataMin,b.toValue(b.toPixels(l.min)-b.minPixelPadding)),m=Math.max(l.dataMax,b.toValue(b.toPixels(l.max)+b.minPixelPadding)),n;n=f-h;0<n&&(k+=n,h=f);n=k-m;0<n&&(k=m,h-=n);b.series.length&&h!==l.min&&k!==l.max&&
(b.setExtremes(h,k,!1,!1,{trigger:"pan"}),e=!0);c[d]=g});e&&c.redraw(!1);F(c.container,{cursor:"move"})}});q(w.prototype,{select:function(a,b){var d=this,e=d.series,g=e.chart;a=c(a,!d.selected);d.firePointEvent(a?"select":"unselect",{accumulate:b},function(){d.selected=d.options.selected=a;e.options.data[h(d,e.data)]=d.options;d.setState(a&&"select");b||k(g.getSelectedPoints(),function(a){a.selected&&a!==d&&(a.selected=a.options.selected=!1,e.options.data[h(a,e.data)]=a.options,a.setState(""),a.firePointEvent("unselect"))})})},
onMouseOver:function(a){var b=this.series.chart,c=b.pointer;a=a?c.normalize(a):c.getChartCoordinatesFromPoint(this,b.inverted);c.runPointActions(a,this)},onMouseOut:function(){var a=this.series.chart;this.firePointEvent("mouseOut");k(a.hoverPoints||[],function(a){a.setState()});a.hoverPoints=a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var b=this,c=d(b.series.options.point,b.options).events;b.events=c;a.objectEach(c,function(a,c){C(b,c,a)});this.hasImportedEvents=!0}},setState:function(a,
b){var d=Math.floor(this.plotX),e=this.plotY,h=this.series,l=h.options.states[a]||{},k=g[h.type].marker&&h.options.marker,m=k&&!1===k.enabled,n=k&&k.states&&k.states[a]||{},f=!1===n.enabled,t=h.stateMarkerGraphic,u=this.marker||{},v=h.chart,w=h.halo,y,B=k&&h.markerAttribs;a=a||"";if(!(a===this.state&&!b||this.selected&&"select"!==a||!1===l.enabled||a&&(f||m&&!1===n.enabled)||a&&u.states&&u.states[a]&&!1===u.states[a].enabled)){B&&(y=h.markerAttribs(this,a));if(this.graphic)this.state&&this.graphic.removeClass("highcharts-point-"+
this.state),a&&this.graphic.addClass("highcharts-point-"+a),this.graphic.attr(h.pointAttribs(this,a)),y&&this.graphic.animate(y,c(v.options.chart.animation,n.animation,k.animation)),t&&t.hide();else{if(a&&n){k=u.symbol||h.symbol;t&&t.currentSymbol!==k&&(t=t.destroy());if(t)t[b?"animate":"attr"]({x:y.x,y:y.y});else k&&(h.stateMarkerGraphic=t=v.renderer.symbol(k,y.x,y.y,y.width,y.height).add(h.markerGroup),t.currentSymbol=k);t&&t.attr(h.pointAttribs(this,a))}t&&(t[a&&v.isInsidePlot(d,e,v.inverted)?
"show":"hide"](),t.element.point=this)}(d=l.halo)&&d.size?(w||(h.halo=w=v.renderer.path().add((this.graphic||t).parentGroup)),w[b?"animate":"attr"]({d:this.haloPath(d.size)}),w.attr({"class":"highcharts-halo highcharts-color-"+c(this.colorIndex,h.colorIndex)}),w.point=this,w.attr(q({fill:this.color||h.color,"fill-opacity":d.opacity,zIndex:-1},d.attributes))):w&&w.point&&w.point.haloPath&&w.animate({d:w.point.haloPath(0)});this.state=a}},haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-
a,this.plotY-a,2*a,2*a)}});q(b.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&v(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();this&&a.events.mouseOut&&v(this,"mouseOut");!c||this.stickyTracking||c.shared&&!this.noSharedTooltip||c.hide();this.setState()},setState:function(a){var b=this,
d=b.options,e=b.graph,g=d.states,h=d.lineWidth,d=0;a=a||"";if(b.state!==a&&(k([b.group,b.markerGroup,b.dataLabelsGroup],function(c){c&&(b.state&&c.removeClass("highcharts-series-"+b.state),a&&c.addClass("highcharts-series-"+a))}),b.state=a,!g[a]||!1!==g[a].enabled)&&(a&&(h=g[a].lineWidth||h+(g[a].lineWidthPlus||0)),e&&!e.dashstyle))for(h={"stroke-width":h},e.animate(h,c(b.chart.options.chart.animation,g[a]&&g[a].animation));b["zone-graph-"+d];)b["zone-graph-"+d].attr(h),d+=1},setVisible:function(a,
b){var c=this,d=c.chart,e=c.legendItem,g,h=d.options.chart.ignoreHiddenSeries,l=c.visible;g=(c.visible=a=c.options.visible=c.userOptions.visible=void 0===a?!l:a)?"show":"hide";k(["group","dataLabelsGroup","markerGroup","tracker","tt"],function(a){if(c[a])c[a][g]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&k(d.series,function(a){a.options.stacking&&a.visible&&(a.isDirty=!0)});k(c.linkedSeries,function(b){b.setVisible(a,
!1)});h&&(d.isDirtyBox=!0);!1!==b&&d.redraw();v(c,g)},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=void 0===a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);v(this,a?"select":"unselect")},drawTracker:H.drawTrackerGraph})})(K);(function(a){var C=a.Chart,A=a.each,G=a.inArray,F=a.isArray,m=a.isObject,g=a.pick,k=a.splat;C.prototype.setResponsive=function(g){var k=this.options.responsive,m=[],h=this.currentResponsive;k&&k.rules&&
A(k.rules,function(e){void 0===e._id&&(e._id=a.uniqueKey());this.matchResponsiveRule(e,m,g)},this);var e=a.merge.apply(0,a.map(m,function(e){return a.find(k.rules,function(a){return a._id===e}).chartOptions})),m=m.toString()||void 0;m!==(h&&h.ruleIds)&&(h&&this.update(h.undoOptions,g),m?(this.currentResponsive={ruleIds:m,mergedOptions:e,undoOptions:this.currentOptions(e)},this.update(e,g)):this.currentResponsive=void 0)};C.prototype.matchResponsiveRule=function(a,k){var m=a.condition;(m.callback||
function(){return this.chartWidth<=g(m.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=g(m.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=g(m.minWidth,0)&&this.chartHeight>=g(m.minHeight,0)}).call(this)&&k.push(a._id)};C.prototype.currentOptions=function(g){function q(g,e,n,d){var c;a.objectEach(g,function(a,b){if(!d&&-1<G(b,["series","xAxis","yAxis"]))for(g[b]=k(g[b]),n[b]=[],c=0;c<g[b].length;c++)e[b][c]&&(n[b][c]={},q(a[c],e[b][c],n[b][c],d+1));else m(a)?(n[b]=F(a)?[]:{},q(a,e[b]||{},n[b],d+1)):n[b]=
e[b]||null})}var u={};q(g,this.options,u,0);return u}})(K);return K});


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
 Highstock JS v5.0.12 (2017-05-24)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(L,T){"object"===typeof module&&module.exports?module.exports=L.document?T(L):T:L.Highcharts=T(L)})("undefined"!==typeof window?window:this,function(L){L=function(){var a=window,E=a.document,B=a.navigator&&a.navigator.userAgent||"",F=E&&E.createElementNS&&!!E.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,D=/(edge|msie|trident)/i.test(B)&&!window.opera,n=!F,h=/Firefox/.test(B),u=h&&4>parseInt(B.split("Firefox/")[1],10);return a.Highcharts?a.Highcharts.error(16,!0):{product:"Highstock",
version:"5.0.12",deg2rad:2*Math.PI/360,doc:E,hasBidiBug:u,hasTouch:E&&void 0!==E.documentElement.ontouchstart,isMS:D,isWebKit:/AppleWebKit/.test(B),isFirefox:h,isTouchDevice:/(Mobile|Android|Windows Phone)/.test(B),SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:F,vml:n,win:a,marginNames:["plotTop","marginRight","marginBottom","plotLeft"],noop:function(){},charts:[]}}();(function(a){var E=[],B=a.charts,F=a.doc,D=a.win;a.error=function(n,h){n=a.isNumber(n)?"Highcharts error #"+
n+": www.highcharts.com/errors/"+n:n;if(h)throw Error(n);D.console&&console.log(n)};a.Fx=function(a,h,u){this.options=h;this.elem=a;this.prop=u};a.Fx.prototype={dSetter:function(){var a=this.paths[0],h=this.paths[1],u=[],r=this.now,x=a.length,t;if(1===r)u=this.toD;else if(x===h.length&&1>r)for(;x--;)t=parseFloat(a[x]),u[x]=isNaN(t)?a[x]:r*parseFloat(h[x]-t)+t;else u=h;this.elem.attr("d",u,null,!0)},update:function(){var a=this.elem,h=this.prop,u=this.now,r=this.options.step;if(this[h+"Setter"])this[h+
"Setter"]();else a.attr?a.element&&a.attr(h,u,null,!0):a.style[h]=u+this.unit;r&&r.call(a,u,this)},run:function(a,h,u){var r=this,n=function(a){return n.stopped?!1:r.step(a)},t;this.startTime=+new Date;this.start=a;this.end=h;this.unit=u;this.now=this.start;this.pos=0;n.elem=this.elem;n.prop=this.prop;n()&&1===E.push(n)&&(n.timerId=setInterval(function(){for(t=0;t<E.length;t++)E[t]()||E.splice(t--,1);E.length||clearInterval(n.timerId)},13))},step:function(n){var h=+new Date,u,r=this.options,x=this.elem,
t=r.complete,m=r.duration,f=r.curAnim;x.attr&&!x.element?n=!1:n||h>=m+this.startTime?(this.now=this.end,this.pos=1,this.update(),u=f[this.prop]=!0,a.objectEach(f,function(a){!0!==a&&(u=!1)}),u&&t&&t.call(x),n=!1):(this.pos=r.easing((h-this.startTime)/m),this.now=this.start+(this.end-this.start)*this.pos,this.update(),n=!0);return n},initPath:function(n,h,u){function r(a){var c,b;for(A=a.length;A--;)c="M"===a[A]||"L"===a[A],b=/[a-zA-Z]/.test(a[A+3]),c&&b&&a.splice(A+1,0,a[A+1],a[A+2],a[A+1],a[A+2])}
function x(a,c){for(;a.length<p;){a[0]=c[p-a.length];var b=a.slice(0,d);[].splice.apply(a,[0,0].concat(b));v&&(b=a.slice(a.length-d),[].splice.apply(a,[a.length,0].concat(b)),A--)}a[0]="M"}function t(a,c){for(var q=(p-a.length)/d;0<q&&q--;)b=a.slice().splice(a.length/H-d,d*H),b[0]=c[p-d-q*d],e&&(b[d-6]=b[d-2],b[d-5]=b[d-1]),[].splice.apply(a,[a.length/H,0].concat(b)),v&&q--}h=h||"";var m,f=n.startX,g=n.endX,e=-1<h.indexOf("C"),d=e?7:3,p,b,A;h=h.split(" ");u=u.slice();var v=n.isArea,H=v?2:1,q;e&&(r(h),
r(u));if(f&&g){for(A=0;A<f.length;A++)if(f[A]===g[0]){m=A;break}else if(f[0]===g[g.length-f.length+A]){m=A;q=!0;break}void 0===m&&(h=[])}h.length&&a.isNumber(m)&&(p=u.length+m*H*d,q?(x(h,u),t(u,h)):(x(u,h),t(h,u)));return[h,u]}};a.Fx.prototype.fillSetter=a.Fx.prototype.strokeSetter=function(){this.elem.attr(this.prop,a.color(this.start).tweenTo(a.color(this.end),this.pos),null,!0)};a.extend=function(a,h){var n;a||(a={});for(n in h)a[n]=h[n];return a};a.merge=function(){var n,h=arguments,u,r={},x=
function(h,m){"object"!==typeof h&&(h={});a.objectEach(m,function(f,g){!a.isObject(f,!0)||a.isClass(f)||a.isDOMElement(f)?h[g]=m[g]:h[g]=x(h[g]||{},f)});return h};!0===h[0]&&(r=h[1],h=Array.prototype.slice.call(h,2));u=h.length;for(n=0;n<u;n++)r=x(r,h[n]);return r};a.pInt=function(a,h){return parseInt(a,h||10)};a.isString=function(a){return"string"===typeof a};a.isArray=function(a){a=Object.prototype.toString.call(a);return"[object Array]"===a||"[object Array Iterator]"===a};a.isObject=function(n,
h){return!!n&&"object"===typeof n&&(!h||!a.isArray(n))};a.isDOMElement=function(n){return a.isObject(n)&&"number"===typeof n.nodeType};a.isClass=function(n){var h=n&&n.constructor;return!(!a.isObject(n,!0)||a.isDOMElement(n)||!h||!h.name||"Object"===h.name)};a.isNumber=function(a){return"number"===typeof a&&!isNaN(a)};a.erase=function(a,h){for(var n=a.length;n--;)if(a[n]===h){a.splice(n,1);break}};a.defined=function(a){return void 0!==a&&null!==a};a.attr=function(n,h,u){var r;a.isString(h)?a.defined(u)?
n.setAttribute(h,u):n&&n.getAttribute&&(r=n.getAttribute(h)):a.defined(h)&&a.isObject(h)&&a.objectEach(h,function(a,h){n.setAttribute(h,a)});return r};a.splat=function(n){return a.isArray(n)?n:[n]};a.syncTimeout=function(a,h,u){if(h)return setTimeout(a,h,u);a.call(0,u)};a.pick=function(){var a=arguments,h,u,r=a.length;for(h=0;h<r;h++)if(u=a[h],void 0!==u&&null!==u)return u};a.css=function(n,h){a.isMS&&!a.svg&&h&&void 0!==h.opacity&&(h.filter="alpha(opacity\x3d"+100*h.opacity+")");a.extend(n.style,
h)};a.createElement=function(n,h,u,r,x){n=F.createElement(n);var t=a.css;h&&a.extend(n,h);x&&t(n,{padding:0,border:"none",margin:0});u&&t(n,u);r&&r.appendChild(n);return n};a.extendClass=function(n,h){var u=function(){};u.prototype=new n;a.extend(u.prototype,h);return u};a.pad=function(a,h,u){return Array((h||2)+1-String(a).length).join(u||0)+a};a.relativeLength=function(a,h){return/%$/.test(a)?h*parseFloat(a)/100:parseFloat(a)};a.wrap=function(a,h,u){var r=a[h];a[h]=function(){var a=Array.prototype.slice.call(arguments),
h=arguments,m=this;m.proceed=function(){r.apply(m,arguments.length?arguments:h)};a.unshift(r);a=u.apply(this,a);m.proceed=null;return a}};a.getTZOffset=function(n){var h=a.Date;return 6E4*(h.hcGetTimezoneOffset&&h.hcGetTimezoneOffset(n)||h.hcTimezoneOffset||0)};a.dateFormat=function(n,h,u){if(!a.defined(h)||isNaN(h))return a.defaultOptions.lang.invalidDate||"";n=a.pick(n,"%Y-%m-%d %H:%M:%S");var r=a.Date,x=new r(h-a.getTZOffset(h)),t=x[r.hcGetHours](),m=x[r.hcGetDay](),f=x[r.hcGetDate](),g=x[r.hcGetMonth](),
e=x[r.hcGetFullYear](),d=a.defaultOptions.lang,p=d.weekdays,b=d.shortWeekdays,A=a.pad,r=a.extend({a:b?b[m]:p[m].substr(0,3),A:p[m],d:A(f),e:A(f,2," "),w:m,b:d.shortMonths[g],B:d.months[g],m:A(g+1),y:e.toString().substr(2,2),Y:e,H:A(t),k:t,I:A(t%12||12),l:t%12||12,M:A(x[r.hcGetMinutes]()),p:12>t?"AM":"PM",P:12>t?"am":"pm",S:A(x.getSeconds()),L:A(Math.round(h%1E3),3)},a.dateFormats);a.objectEach(r,function(a,b){for(;-1!==n.indexOf("%"+b);)n=n.replace("%"+b,"function"===typeof a?a(h):a)});return u?n.substr(0,
1).toUpperCase()+n.substr(1):n};a.formatSingle=function(n,h){var u=/\.([0-9])/,r=a.defaultOptions.lang;/f$/.test(n)?(u=(u=n.match(u))?u[1]:-1,null!==h&&(h=a.numberFormat(h,u,r.decimalPoint,-1<n.indexOf(",")?r.thousandsSep:""))):h=a.dateFormat(n,h);return h};a.format=function(n,h){for(var u="{",r=!1,x,t,m,f,g=[],e;n;){u=n.indexOf(u);if(-1===u)break;x=n.slice(0,u);if(r){x=x.split(":");t=x.shift().split(".");f=t.length;e=h;for(m=0;m<f;m++)e=e[t[m]];x.length&&(e=a.formatSingle(x.join(":"),e));g.push(e)}else g.push(x);
n=n.slice(u+1);u=(r=!r)?"}":"{"}g.push(n);return g.join("")};a.getMagnitude=function(a){return Math.pow(10,Math.floor(Math.log(a)/Math.LN10))};a.normalizeTickInterval=function(n,h,u,r,x){var t,m=n;u=a.pick(u,1);t=n/u;h||(h=x?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===r&&(1===u?h=a.grep(h,function(a){return 0===a%1}):.1>=u&&(h=[1/u])));for(r=0;r<h.length&&!(m=h[r],x&&m*u>=n||!x&&t<=(h[r]+(h[r+1]||h[r]))/2);r++);return m=a.correctFloat(m*u,-Math.round(Math.log(.001)/Math.LN10))};a.stableSort=
function(a,h){var n=a.length,r,x;for(x=0;x<n;x++)a[x].safeI=x;a.sort(function(a,m){r=h(a,m);return 0===r?a.safeI-m.safeI:r});for(x=0;x<n;x++)delete a[x].safeI};a.arrayMin=function(a){for(var h=a.length,n=a[0];h--;)a[h]<n&&(n=a[h]);return n};a.arrayMax=function(a){for(var h=a.length,n=a[0];h--;)a[h]>n&&(n=a[h]);return n};a.destroyObjectProperties=function(n,h){a.objectEach(n,function(a,r){a&&a!==h&&a.destroy&&a.destroy();delete n[r]})};a.discardElement=function(n){var h=a.garbageBin;h||(h=a.createElement("div"));
n&&h.appendChild(n);h.innerHTML=""};a.correctFloat=function(a,h){return parseFloat(a.toPrecision(h||14))};a.setAnimation=function(n,h){h.renderer.globalAnimation=a.pick(n,h.options.chart.animation,!0)};a.animObject=function(n){return a.isObject(n)?a.merge(n):{duration:n?500:0}};a.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5};a.numberFormat=function(n,h,u,r){n=+n||0;h=+h;var x=a.defaultOptions.lang,t=(n.toString().split(".")[1]||"").length,
m,f;-1===h?h=Math.min(t,20):a.isNumber(h)||(h=2);f=(Math.abs(n)+Math.pow(10,-Math.max(h,t)-1)).toFixed(h);t=String(a.pInt(f));m=3<t.length?t.length%3:0;u=a.pick(u,x.decimalPoint);r=a.pick(r,x.thousandsSep);n=(0>n?"-":"")+(m?t.substr(0,m)+r:"");n+=t.substr(m).replace(/(\d{3})(?=\d)/g,"$1"+r);h&&(n+=u+f.slice(-h));return n};Math.easeInOutSine=function(a){return-.5*(Math.cos(Math.PI*a)-1)};a.getStyle=function(n,h,u){if("width"===h)return Math.min(n.offsetWidth,n.scrollWidth)-a.getStyle(n,"padding-left")-
a.getStyle(n,"padding-right");if("height"===h)return Math.min(n.offsetHeight,n.scrollHeight)-a.getStyle(n,"padding-top")-a.getStyle(n,"padding-bottom");if(n=D.getComputedStyle(n,void 0))n=n.getPropertyValue(h),a.pick(u,!0)&&(n=a.pInt(n));return n};a.inArray=function(a,h){return h.indexOf?h.indexOf(a):[].indexOf.call(h,a)};a.grep=function(a,h){return[].filter.call(a,h)};a.find=function(a,h){return[].find.call(a,h)};a.map=function(a,h){for(var n=[],r=0,x=a.length;r<x;r++)n[r]=h.call(a[r],a[r],r,a);
return n};a.offset=function(a){var h=F.documentElement;a=a.getBoundingClientRect();return{top:a.top+(D.pageYOffset||h.scrollTop)-(h.clientTop||0),left:a.left+(D.pageXOffset||h.scrollLeft)-(h.clientLeft||0)}};a.stop=function(a,h){for(var n=E.length;n--;)E[n].elem!==a||h&&h!==E[n].prop||(E[n].stopped=!0)};a.each=function(a,h,u){return Array.prototype.forEach.call(a,h,u)};a.objectEach=function(a,h,u){for(var r in a)a.hasOwnProperty(r)&&h.call(u,a[r],r,a)};a.addEvent=function(n,h,u){function r(a){a.target=
a.srcElement||D;u.call(n,a)}var x=n.hcEvents=n.hcEvents||{};n.addEventListener?n.addEventListener(h,u,!1):n.attachEvent&&(n.hcEventsIE||(n.hcEventsIE={}),n.hcEventsIE[u.toString()]=r,n.attachEvent("on"+h,r));x[h]||(x[h]=[]);x[h].push(u);return function(){a.removeEvent(n,h,u)}};a.removeEvent=function(n,h,u){function r(a,e){n.removeEventListener?n.removeEventListener(a,e,!1):n.attachEvent&&(e=n.hcEventsIE[e.toString()],n.detachEvent("on"+a,e))}function x(){var f,e;n.nodeName&&(h?(f={},f[h]=!0):f=m,
a.objectEach(f,function(a,f){if(m[f])for(e=m[f].length;e--;)r(f,m[f][e])}))}var t,m=n.hcEvents,f;m&&(h?(t=m[h]||[],u?(f=a.inArray(u,t),-1<f&&(t.splice(f,1),m[h]=t),r(h,u)):(x(),m[h]=[])):(x(),n.hcEvents={}))};a.fireEvent=function(n,h,u,r){var x;x=n.hcEvents;var t,m;u=u||{};if(F.createEvent&&(n.dispatchEvent||n.fireEvent))x=F.createEvent("Events"),x.initEvent(h,!0,!0),a.extend(x,u),n.dispatchEvent?n.dispatchEvent(x):n.fireEvent(h,x);else if(x)for(x=x[h]||[],t=x.length,u.target||a.extend(u,{preventDefault:function(){u.defaultPrevented=
!0},target:n,type:h}),h=0;h<t;h++)(m=x[h])&&!1===m.call(n,u)&&u.preventDefault();r&&!u.defaultPrevented&&r(u)};a.animate=function(n,h,u){var r,x="",t,m,f;a.isObject(u)||(f=arguments,u={duration:f[2],easing:f[3],complete:f[4]});a.isNumber(u.duration)||(u.duration=400);u.easing="function"===typeof u.easing?u.easing:Math[u.easing]||Math.easeInOutSine;u.curAnim=a.merge(h);a.objectEach(h,function(f,e){a.stop(n,e);m=new a.Fx(n,u,e);t=null;"d"===e?(m.paths=m.initPath(n,n.d,h.d),m.toD=h.d,r=0,t=1):n.attr?
r=n.attr(e):(r=parseFloat(a.getStyle(n,e))||0,"opacity"!==e&&(x="px"));t||(t=f);t&&t.match&&t.match("px")&&(t=t.replace(/px/g,""));m.run(r,t,x)})};a.seriesType=function(n,h,u,r,x){var t=a.getOptions(),m=a.seriesTypes;if(m[n])return a.error(27);t.plotOptions[n]=a.merge(t.plotOptions[h],u);m[n]=a.extendClass(m[h]||function(){},r);m[n].prototype.type=n;x&&(m[n].prototype.pointClass=a.extendClass(a.Point,x));return m[n]};a.uniqueKey=function(){var a=Math.random().toString(36).substring(2,9),h=0;return function(){return"highcharts-"+
a+"-"+h++}}();D.jQuery&&(D.jQuery.fn.highcharts=function(){var n=[].slice.call(arguments);if(this[0])return n[0]?(new (a[a.isString(n[0])?n.shift():"Chart"])(this[0],n[0],n[1]),this):B[a.attr(this[0],"data-highcharts-chart")]});F&&!F.defaultView&&(a.getStyle=function(n,h){var u={width:"clientWidth",height:"clientHeight"}[h];if(n.style[h])return a.pInt(n.style[h]);"opacity"===h&&(h="filter");if(u)return n.style.zoom=1,Math.max(n[u]-2*a.getStyle(n,"padding"),0);n=n.currentStyle[h.replace(/\-(\w)/g,
function(a,h){return h.toUpperCase()})];"filter"===h&&(n=n.replace(/alpha\(opacity=([0-9]+)\)/,function(a,h){return h/100}));return""===n?1:a.pInt(n)});Array.prototype.forEach||(a.each=function(a,h,u){for(var r=0,n=a.length;r<n;r++)if(!1===h.call(u,a[r],r,a))return r});Array.prototype.indexOf||(a.inArray=function(a,h){var n,r=0;if(h)for(n=h.length;r<n;r++)if(h[r]===a)return r;return-1});Array.prototype.filter||(a.grep=function(a,h){for(var n=[],r=0,x=a.length;r<x;r++)h(a[r],r)&&n.push(a[r]);return n});
Array.prototype.find||(a.find=function(a,h){var n,r=a.length;for(n=0;n<r;n++)if(h(a[n],n))return a[n]})})(L);(function(a){var E=a.each,B=a.isNumber,F=a.map,D=a.merge,n=a.pInt;a.Color=function(h){if(!(this instanceof a.Color))return new a.Color(h);this.init(h)};a.Color.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(a){return[n(a[1]),n(a[2]),n(a[3]),parseFloat(a[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
parse:function(a){return[n(a[1]),n(a[2]),n(a[3]),1]}}],names:{none:"rgba(255,255,255,0)",white:"#ffffff",black:"#000000"},init:function(h){var n,r,x,t;if((this.input=h=this.names[h&&h.toLowerCase?h.toLowerCase():""]||h)&&h.stops)this.stops=F(h.stops,function(m){return new a.Color(m[1])});else if(h&&"#"===h[0]&&(n=h.length,h=parseInt(h.substr(1),16),7===n?r=[(h&16711680)>>16,(h&65280)>>8,h&255,1]:4===n&&(r=[(h&3840)>>4|(h&3840)>>8,(h&240)>>4|h&240,(h&15)<<4|h&15,1])),!r)for(x=this.parsers.length;x--&&
!r;)t=this.parsers[x],(n=t.regex.exec(h))&&(r=t.parse(n));this.rgba=r||[]},get:function(a){var h=this.input,r=this.rgba,n;this.stops?(n=D(h),n.stops=[].concat(n.stops),E(this.stops,function(h,m){n.stops[m]=[n.stops[m][0],h.get(a)]})):n=r&&B(r[0])?"rgb"===a||!a&&1===r[3]?"rgb("+r[0]+","+r[1]+","+r[2]+")":"a"===a?r[3]:"rgba("+r.join(",")+")":h;return n},brighten:function(a){var h,r=this.rgba;if(this.stops)E(this.stops,function(h){h.brighten(a)});else if(B(a)&&0!==a)for(h=0;3>h;h++)r[h]+=n(255*a),0>
r[h]&&(r[h]=0),255<r[h]&&(r[h]=255);return this},setOpacity:function(a){this.rgba[3]=a;return this},tweenTo:function(a,n){var h,x;a.rgba.length?(h=this.rgba,a=a.rgba,x=1!==a[3]||1!==h[3],a=(x?"rgba(":"rgb(")+Math.round(a[0]+(h[0]-a[0])*(1-n))+","+Math.round(a[1]+(h[1]-a[1])*(1-n))+","+Math.round(a[2]+(h[2]-a[2])*(1-n))+(x?","+(a[3]+(h[3]-a[3])*(1-n)):"")+")"):a=a.input||"none";return a}};a.color=function(h){return new a.Color(h)}})(L);(function(a){var E,B,F=a.addEvent,D=a.animate,n=a.attr,h=a.charts,
u=a.color,r=a.css,x=a.createElement,t=a.defined,m=a.deg2rad,f=a.destroyObjectProperties,g=a.doc,e=a.each,d=a.extend,p=a.erase,b=a.grep,A=a.hasTouch,v=a.inArray,H=a.isArray,q=a.isFirefox,J=a.isMS,c=a.isObject,w=a.isString,K=a.isWebKit,y=a.merge,G=a.noop,l=a.objectEach,I=a.pick,k=a.pInt,z=a.removeEvent,Q=a.stop,M=a.svg,N=a.SVG_NS,P=a.symbolSizes,O=a.win;E=a.SVGElement=function(){return this};d(E.prototype,{opacity:1,SVG_NS:N,textProps:"direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline".split(" "),
init:function(a,k){this.element="span"===k?x(k):g.createElementNS(this.SVG_NS,k);this.renderer=a},animate:function(C,k,c){k=a.animObject(I(k,this.renderer.globalAnimation,!0));0!==k.duration?(c&&(k.complete=c),D(this,C,k)):(this.attr(C,null,c),k.step&&k.step.call(this));return this},colorGradient:function(C,k,c){var z=this.renderer,b,d,q,f,w,G,g,M,v,R,p=[],I;C.radialGradient?d="radialGradient":C.linearGradient&&(d="linearGradient");d&&(q=C[d],w=z.gradients,g=C.stops,R=c.radialReference,H(q)&&(C[d]=
q={x1:q[0],y1:q[1],x2:q[2],y2:q[3],gradientUnits:"userSpaceOnUse"}),"radialGradient"===d&&R&&!t(q.gradientUnits)&&(f=q,q=y(q,z.getRadialAttr(R,f),{gradientUnits:"userSpaceOnUse"})),l(q,function(a,C){"id"!==C&&p.push(C,a)}),l(g,function(a){p.push(a)}),p=p.join(","),w[p]?R=w[p].attr("id"):(q.id=R=a.uniqueKey(),w[p]=G=z.createElement(d).attr(q).add(z.defs),G.radAttr=f,G.stops=[],e(g,function(C){0===C[1].indexOf("rgba")?(b=a.color(C[1]),M=b.get("rgb"),v=b.get("a")):(M=C[1],v=1);C=z.createElement("stop").attr({offset:C[0],
"stop-color":M,"stop-opacity":v}).add(G);G.stops.push(C)})),I="url("+z.url+"#"+R+")",c.setAttribute(k,I),c.gradient=p,C.toString=function(){return I})},applyTextOutline:function(C){var k=this.element,c,z,l,b,d;-1!==C.indexOf("contrast")&&(C=C.replace(/contrast/g,this.renderer.getContrast(k.style.fill)));C=C.split(" ");z=C[C.length-1];if((l=C[0])&&"none"!==l&&a.svg){this.fakeTS=!0;C=[].slice.call(k.getElementsByTagName("tspan"));this.ySetter=this.xSetter;l=l.replace(/(^[\d\.]+)(.*?)$/g,function(a,
C,k){return 2*C+k});for(d=C.length;d--;)c=C[d],"highcharts-text-outline"===c.getAttribute("class")&&p(C,k.removeChild(c));b=k.firstChild;e(C,function(a,C){0===C&&(a.setAttribute("x",k.getAttribute("x")),C=k.getAttribute("y"),a.setAttribute("y",C||0),null===C&&k.setAttribute("y",0));a=a.cloneNode(1);n(a,{"class":"highcharts-text-outline",fill:z,stroke:z,"stroke-width":l,"stroke-linejoin":"round"});k.insertBefore(a,b)})}},attr:function(a,k,c,z){var C,b=this.element,d,q=this,e,y;"string"===typeof a&&
void 0!==k&&(C=a,a={},a[C]=k);"string"===typeof a?q=(this[a+"Getter"]||this._defaultGetter).call(this,a,b):(l(a,function(k,C){e=!1;z||Q(this,C);this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)$/.test(C)&&(d||(this.symbolAttr(a),d=!0),e=!0);!this.rotation||"x"!==C&&"y"!==C||(this.doTransform=!0);e||(y=this[C+"Setter"]||this._defaultSetter,y.call(this,k,C,b),this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(C)&&this.updateShadows(C,k,y))},this),this.afterSetters());
c&&c();return q},afterSetters:function(){this.doTransform&&(this.updateTransform(),this.doTransform=!1)},updateShadows:function(a,k,c){for(var C=this.shadows,z=C.length;z--;)c.call(C[z],"height"===a?Math.max(k-(C[z].cutHeight||0),0):"d"===a?this.d:k,a,C[z])},addClass:function(a,k){var C=this.attr("class")||"";-1===C.indexOf(a)&&(k||(a=(C+(C?" ":"")+a).replace("  "," ")),this.attr("class",a));return this},hasClass:function(a){return-1!==n(this.element,"class").indexOf(a)},removeClass:function(a){n(this.element,
"class",(n(this.element,"class")||"").replace(a,""));return this},symbolAttr:function(a){var k=this;e("x y r start end width height innerR anchorX anchorY".split(" "),function(C){k[C]=I(a[C],k[C])});k.attr({d:k.renderer.symbols[k.symbolName](k.x,k.y,k.width,k.height,k)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":"none")},crisp:function(a,k){var C=this,c={},z;k=k||a.strokeWidth||0;z=Math.round(k)%2/2;a.x=Math.floor(a.x||C.x||0)+z;a.y=Math.floor(a.y||C.y||
0)+z;a.width=Math.floor((a.width||C.width||0)-2*z);a.height=Math.floor((a.height||C.height||0)-2*z);t(a.strokeWidth)&&(a.strokeWidth=k);l(a,function(a,k){C[k]!==a&&(C[k]=c[k]=a)});return c},css:function(a){var C=this.styles,c={},z=this.element,b,q="",e,y=!C,f=["textOutline","textOverflow","width"];a&&a.color&&(a.fill=a.color);C&&l(a,function(a,k){a!==C[k]&&(c[k]=a,y=!0)});y&&(C&&(a=d(C,c)),b=this.textWidth=a&&a.width&&"auto"!==a.width&&"text"===z.nodeName.toLowerCase()&&k(a.width),this.styles=a,b&&
!M&&this.renderer.forExport&&delete a.width,J&&!M?r(this.element,a):(e=function(a,k){return"-"+k.toLowerCase()},l(a,function(a,k){-1===v(k,f)&&(q+=k.replace(/([A-Z])/g,e)+":"+a+";")}),q&&n(z,"style",q)),this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline)));return this},strokeWidth:function(){return this["stroke-width"]||0},on:function(a,k){var C=this,c=C.element;A&&"click"===a?(c.ontouchstart=function(a){C.touchEventFired=
Date.now();a.preventDefault();k.call(c,a)},c.onclick=function(a){(-1===O.navigator.userAgent.indexOf("Android")||1100<Date.now()-(C.touchEventFired||0))&&k.call(c,a)}):c["on"+a]=k;return this},setRadialReference:function(a){var k=this.renderer.gradients[this.element.gradient];this.element.radialReference=a;k&&k.radAttr&&k.animate(this.renderer.getRadialAttr(a,k.radAttr));return this},translate:function(a,k){return this.attr({translateX:a,translateY:k})},invert:function(a){this.inverted=a;this.updateTransform();
return this},updateTransform:function(){var a=this.translateX||0,k=this.translateY||0,c=this.scaleX,z=this.scaleY,l=this.inverted,b=this.rotation,d=this.element;l&&(a+=this.width,k+=this.height);a=["translate("+a+","+k+")"];l?a.push("rotate(90) scale(-1,1)"):b&&a.push("rotate("+b+" "+(d.getAttribute("x")||0)+" "+(d.getAttribute("y")||0)+")");(t(c)||t(z))&&a.push("scale("+I(c,1)+" "+I(z,1)+")");a.length&&d.setAttribute("transform",a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);
return this},align:function(a,k,c){var C,z,l,b,d={};z=this.renderer;l=z.alignedObjects;var q,e;if(a){if(this.alignOptions=a,this.alignByTranslate=k,!c||w(c))this.alignTo=C=c||"renderer",p(l,this),l.push(this),c=null}else a=this.alignOptions,k=this.alignByTranslate,C=this.alignTo;c=I(c,z[C],z);C=a.align;z=a.verticalAlign;l=(c.x||0)+(a.x||0);b=(c.y||0)+(a.y||0);"right"===C?q=1:"center"===C&&(q=2);q&&(l+=(c.width-(a.width||0))/q);d[k?"translateX":"x"]=Math.round(l);"bottom"===z?e=1:"middle"===z&&(e=
2);e&&(b+=(c.height-(a.height||0))/e);d[k?"translateY":"y"]=Math.round(b);this[this.placed?"animate":"attr"](d);this.placed=!0;this.alignAttr=d;return this},getBBox:function(a,k){var C,c=this.renderer,z,l=this.element,b=this.styles,q,y=this.textStr,f,w=c.cache,G=c.cacheKeys,g;k=I(k,this.rotation);z=k*m;q=b&&b.fontSize;void 0!==y&&(g=y.toString(),-1===g.indexOf("\x3c")&&(g=g.replace(/[0-9]/g,"0")),g+=["",k||0,q,b&&b.width,b&&b.textOverflow].join());g&&!a&&(C=w[g]);if(!C){if(l.namespaceURI===this.SVG_NS||
c.forExport){try{(f=this.fakeTS&&function(a){e(l.querySelectorAll(".highcharts-text-outline"),function(k){k.style.display=a})})&&f("none"),C=l.getBBox?d({},l.getBBox()):{width:l.offsetWidth,height:l.offsetHeight},f&&f("")}catch(W){}if(!C||0>C.width)C={width:0,height:0}}else C=this.htmlGetBBox();c.isSVG&&(a=C.width,c=C.height,b&&"11px"===b.fontSize&&17===Math.round(c)&&(C.height=c=14),k&&(C.width=Math.abs(c*Math.sin(z))+Math.abs(a*Math.cos(z)),C.height=Math.abs(c*Math.cos(z))+Math.abs(a*Math.sin(z))));
if(g&&0<C.height){for(;250<G.length;)delete w[G.shift()];w[g]||G.push(g);w[g]=C}}return C},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var k=this;k.animate({opacity:0},{duration:a||150,complete:function(){k.attr({y:-9999})}})},add:function(a){var k=this.renderer,c=this.element,C;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;void 0!==this.textStr&&k.buildText(this);this.added=!0;if(!a||
a.handleZ||this.zIndex)C=this.zIndexSetter();C||(a?a.element:k.box).appendChild(c);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var k=a.parentNode;k&&k.removeChild(a)},destroy:function(){var a=this,k=a.element||{},c=a.renderer.isSVG&&"SPAN"===k.nodeName&&a.parentGroup,z=k.ownerSVGElement;k.onclick=k.onmouseout=k.onmouseover=k.onmousemove=k.point=null;Q(a);a.clipPath&&z&&(e(z.querySelectorAll("[clip-path]"),function(k){-1<k.getAttribute("clip-path").indexOf(a.clipPath.element.id+
")")&&k.removeAttribute("clip-path")}),a.clipPath=a.clipPath.destroy());if(a.stops){for(z=0;z<a.stops.length;z++)a.stops[z]=a.stops[z].destroy();a.stops=null}a.safeRemoveChild(k);for(a.destroyShadows();c&&c.div&&0===c.div.childNodes.length;)k=c.parentGroup,a.safeRemoveChild(c.div),delete c.div,c=k;a.alignTo&&p(a.renderer.alignedObjects,a);l(a,function(k,c){delete a[c]});return null},shadow:function(a,k,c){var C=[],z,l,b=this.element,d,q,e,y;if(!a)this.destroyShadows();else if(!this.shadows){q=I(a.width,
3);e=(a.opacity||.15)/q;y=this.parentInverted?"(-1,-1)":"("+I(a.offsetX,1)+", "+I(a.offsetY,1)+")";for(z=1;z<=q;z++)l=b.cloneNode(0),d=2*q+1-2*z,n(l,{isShadow:"true",stroke:a.color||"#000000","stroke-opacity":e*z,"stroke-width":d,transform:"translate"+y,fill:"none"}),c&&(n(l,"height",Math.max(n(l,"height")-d,0)),l.cutHeight=d),k?k.element.appendChild(l):b.parentNode.insertBefore(l,b),C.push(l);this.shadows=C}return this},destroyShadows:function(){e(this.shadows||[],function(a){this.safeRemoveChild(a)},
this);this.shadows=void 0},xGetter:function(a){"circle"===this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)},_defaultGetter:function(a){a=I(this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,k,c){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");c.setAttribute(k,a);this[k]=a},dashstyleSetter:function(a){var c,z=this["stroke-width"];"inherit"===z&&(z=1);if(a=a&&a.toLowerCase()){a=
a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(c=a.length;c--;)a[c]=k(a[c])*z;a=a.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a])},opacitySetter:function(a,k,c){this[k]=
a;c.setAttribute(k,a)},titleSetter:function(a){var k=this.element.getElementsByTagName("title")[0];k||(k=g.createElementNS(this.SVG_NS,"title"),this.element.appendChild(k));k.firstChild&&k.removeChild(k.firstChild);k.appendChild(g.createTextNode(String(I(a),"").replace(/<[^>]*>/g,"")))},textSetter:function(a){a!==this.textStr&&(delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this))},fillSetter:function(a,k,c){"string"===typeof a?c.setAttribute(k,a):a&&this.colorGradient(a,k,c)},
visibilitySetter:function(a,k,c){"inherit"===a?c.removeAttribute(k):c.setAttribute(k,a)},zIndexSetter:function(a,c){var z=this.renderer,l=this.parentGroup,C=(l||z).element||z.box,b,d=this.element,q;b=this.added;var e;t(a)&&(d.zIndex=a,a=+a,this[c]===a&&(b=!1),this[c]=a);if(b){(a=this.zIndex)&&l&&(l.handleZ=!0);c=C.childNodes;for(e=0;e<c.length&&!q;e++)l=c[e],b=l.zIndex,l!==d&&(k(b)>a||!t(a)&&t(b)||0>a&&!t(b)&&C!==z.box)&&(C.insertBefore(d,l),q=!0);q||C.appendChild(d)}return q},_defaultSetter:function(a,
k,c){c.setAttribute(k,a)}});E.prototype.yGetter=E.prototype.xGetter;E.prototype.translateXSetter=E.prototype.translateYSetter=E.prototype.rotationSetter=E.prototype.verticalAlignSetter=E.prototype.scaleXSetter=E.prototype.scaleYSetter=function(a,k){this[k]=a;this.doTransform=!0};E.prototype["stroke-widthSetter"]=E.prototype.strokeSetter=function(a,k,c){this[k]=a;this.stroke&&this["stroke-width"]?(E.prototype.fillSetter.call(this,this.stroke,"stroke",c),c.setAttribute("stroke-width",this["stroke-width"]),
this.hasStroke=!0):"stroke-width"===k&&0===a&&this.hasStroke&&(c.removeAttribute("stroke"),this.hasStroke=!1)};B=a.SVGRenderer=function(){this.init.apply(this,arguments)};d(B.prototype,{Element:E,SVG_NS:N,init:function(a,k,c,z,l,b){var C;z=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"}).css(this.getStyle(z));C=z.element;a.appendChild(C);-1===a.innerHTML.indexOf("xmlns")&&n(C,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=C;this.boxWrapper=z;this.alignedObjects=[];this.url=(q||
K)&&g.getElementsByTagName("base").length?O.location.href.replace(/#.*?$/,"").replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(g.createTextNode("Created with Highstock 5.0.12"));this.defs=this.createElement("defs").add();this.allowHTML=b;this.forExport=l;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(k,c,!1);var d;q&&a.getBoundingClientRect&&(k=function(){r(a,{left:0,top:0});d=a.getBoundingClientRect();
r(a,{left:Math.ceil(d.left)-d.left+"px",top:Math.ceil(d.top)-d.top+"px"})},k(),this.unSubPixelFix=F(O,"resize",k))},getStyle:function(a){return this.style=d({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},setStyle:function(a){this.boxWrapper.css(this.getStyle(a))},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();f(this.gradients||{});this.gradients=
null;a&&(this.defs=a.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null},createElement:function(a){var k=new this.Element;k.init(this,a);return k},draw:G,getRadialAttr:function(a,k){return{cx:a[0]-a[2]/2+k.cx*a[2],cy:a[1]-a[2]/2+k.cy*a[2],r:k.r*a[2]}},getSpanWidth:function(a,k){var c=a.getBBox(!0).width;!M&&this.forExport&&(c=this.measureSpanWidth(k.firstChild.data,a.styles));return c},applyEllipsis:function(a,k,c,z){var l=this.getSpanWidth(a,k),b=l>z,l=c,d,q=0,C=
c.length,e=function(a){k.removeChild(k.firstChild);a&&k.appendChild(g.createTextNode(a))};if(b){for(;q<=C;)d=Math.ceil((q+C)/2),l=c.substring(0,d)+"\u2026",e(l),l=this.getSpanWidth(a,k),q===C?q=C+1:l>z?C=d-1:q=d;0===C&&e("")}return b},buildText:function(a){var c=a.element,z=this,l=z.forExport,d=I(a.textStr,"").toString(),q=-1!==d.indexOf("\x3c"),C=c.childNodes,y,f,w,G,v=n(c,"x"),p=a.styles,J=a.textWidth,m=p&&p.lineHeight,A=p&&p.textOutline,H=p&&"ellipsis"===p.textOverflow,K=p&&"nowrap"===p.whiteSpace,
h=p&&p.fontSize,Q,t,x=C.length,p=J&&!a.added&&this.box,u=function(a){var l;l=/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:h||z.style.fontSize||12;return m?k(m):z.fontMetrics(l,a.getAttribute("style")?a:c).h};Q=[d,H,K,m,A,h,J].join();if(Q!==a.textCache){for(a.textCache=Q;x--;)c.removeChild(C[x]);q||A||H||J||-1!==d.indexOf(" ")?(y=/<.*class="([^"]+)".*>/,f=/<.*style="([^"]+)".*>/,w=/<.*href="([^"]+)".*>/,p&&p.appendChild(c),d=q?d.replace(/<(b|strong)>/g,'\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g,
'\x3cspan style\x3d"font-style:italic"\x3e').replace(/<a/g,"\x3cspan").replace(/<\/(b|strong|i|em|a)>/g,"\x3c/span\x3e").split(/<br.*?>/g):[d],d=b(d,function(a){return""!==a}),e(d,function(k,b){var d,q=0;k=k.replace(/^\s+|\s+$/g,"").replace(/<span/g,"|||\x3cspan").replace(/<\/span>/g,"\x3c/span\x3e|||");d=k.split("|||");e(d,function(k){if(""!==k||1===d.length){var C={},e=g.createElementNS(z.SVG_NS,"tspan"),p,I;y.test(k)&&(p=k.match(y)[1],n(e,"class",p));f.test(k)&&(I=k.match(f)[1].replace(/(;| |^)color([ :])/,
"$1fill$2"),n(e,"style",I));w.test(k)&&!l&&(n(e,"onclick",'location.href\x3d"'+k.match(w)[1]+'"'),r(e,{cursor:"pointer"}));k=(k.replace(/<(.|\n)*?>/g,"")||" ").replace(/&lt;/g,"\x3c").replace(/&gt;/g,"\x3e");if(" "!==k){e.appendChild(g.createTextNode(k));q?C.dx=0:b&&null!==v&&(C.x=v);n(e,C);c.appendChild(e);!q&&t&&(!M&&l&&r(e,{display:"block"}),n(e,"dy",u(e)));if(J){C=k.replace(/([^\^])-/g,"$1- ").split(" ");p=1<d.length||b||1<C.length&&!K;var m=[],A,h=u(e),Q=a.rotation;for(H&&(G=z.applyEllipsis(a,
e,k,J));!H&&p&&(C.length||m.length);)a.rotation=0,A=z.getSpanWidth(a,e),k=A>J,void 0===G&&(G=k),k&&1!==C.length?(e.removeChild(e.firstChild),m.unshift(C.pop())):(C=m,m=[],C.length&&!K&&(e=g.createElementNS(N,"tspan"),n(e,{dy:h,x:v}),I&&n(e,"style",I),c.appendChild(e)),A>J&&(J=A)),C.length&&e.appendChild(g.createTextNode(C.join(" ").replace(/- /g,"-")));a.rotation=Q}q++}}});t=t||c.childNodes.length}),G&&a.attr("title",a.textStr),p&&p.removeChild(c),A&&a.applyTextOutline&&a.applyTextOutline(A)):c.appendChild(g.createTextNode(d.replace(/&lt;/g,
"\x3c").replace(/&gt;/g,"\x3e")))}},getContrast:function(a){a=u(a).rgba;return 510<a[0]+a[1]+a[2]?"#000000":"#FFFFFF"},button:function(a,k,c,z,l,b,q,e,f){var C=this.label(a,k,c,f,null,null,null,null,"button"),w=0;C.attr(y({padding:8,r:2},l));var G,g,p,v;l=y({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},l);G=l.style;delete l.style;b=y(l,{fill:"#e6e6e6"},b);g=b.style;delete b.style;q=y(l,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},
q);p=q.style;delete q.style;e=y(l,{style:{color:"#cccccc"}},e);v=e.style;delete e.style;F(C.element,J?"mouseover":"mouseenter",function(){3!==w&&C.setState(1)});F(C.element,J?"mouseout":"mouseleave",function(){3!==w&&C.setState(w)});C.setState=function(a){1!==a&&(C.state=w=a);C.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][a||0]);C.attr([l,b,q,e][a||0]).css([G,g,p,v][a||0])};C.attr(l).css(d({cursor:"default"},
G));return C.on("click",function(a){3!==w&&z.call(C,a)})},crispLine:function(a,k){a[1]===a[4]&&(a[1]=a[4]=Math.round(a[1])-k%2/2);a[2]===a[5]&&(a[2]=a[5]=Math.round(a[2])+k%2/2);return a},path:function(a){var k={fill:"none"};H(a)?k.d=a:c(a)&&d(k,a);return this.createElement("path").attr(k)},circle:function(a,k,z){a=c(a)?a:{x:a,y:k,r:z};k=this.createElement("circle");k.xSetter=k.ySetter=function(a,k,c){c.setAttribute("c"+k,a)};return k.attr(a)},arc:function(a,k,z,l,b,d){c(a)?(l=a,k=l.y,z=l.r,a=l.x):
l={innerR:l,start:b,end:d};a=this.symbol("arc",a,k,z,z,l);a.r=z;return a},rect:function(a,k,z,l,b,d){b=c(a)?a.r:b;var q=this.createElement("rect");a=c(a)?a:void 0===a?{}:{x:a,y:k,width:Math.max(z,0),height:Math.max(l,0)};void 0!==d&&(a.strokeWidth=d,a=q.crisp(a));a.fill="none";b&&(a.r=b);q.rSetter=function(a,k,c){n(c,{rx:a,ry:a})};return q.attr(a)},setSize:function(a,k,c){var z=this.alignedObjects,l=z.length;this.width=a;this.height=k;for(this.boxWrapper.animate({width:a,height:k},{step:function(){this.attr({viewBox:"0 0 "+
this.attr("width")+" "+this.attr("height")})},duration:I(c,!0)?void 0:0});l--;)z[l].align()},g:function(a){var k=this.createElement("g");return a?k.attr({"class":"highcharts-"+a}):k},image:function(a,k,c,z,l){var b={preserveAspectRatio:"none"};1<arguments.length&&d(b,{x:k,y:c,width:z,height:l});b=this.createElement("image").attr(b);b.element.setAttributeNS?b.element.setAttributeNS("http://www.w3.org/1999/xlink","href",a):b.element.setAttribute("hc-svg-href",a);return b},symbol:function(a,k,c,z,l,
b){var q=this,y,C=/^url\((.*?)\)$/,f=C.test(a),w=!f&&(this.symbols[a]?a:"circle"),G=w&&this.symbols[w],p=t(k)&&G&&G.call(this.symbols,Math.round(k),Math.round(c),z,l,b),v,M;G?(y=this.path(p),y.attr("fill","none"),d(y,{symbolName:w,x:k,y:c,width:z,height:l}),b&&d(y,b)):f&&(v=a.match(C)[1],y=this.image(v),y.imgwidth=I(P[v]&&P[v].width,b&&b.width),y.imgheight=I(P[v]&&P[v].height,b&&b.height),M=function(){y.attr({width:y.width,height:y.height})},e(["width","height"],function(a){y[a+"Setter"]=function(a,
k){var c={},z=this["img"+k],l="width"===k?"translateX":"translateY";this[k]=a;t(z)&&(this.element&&this.element.setAttribute(k,z),this.alignByTranslate||(c[l]=((this[k]||0)-z)/2,this.attr(c)))}}),t(k)&&y.attr({x:k,y:c}),y.isImg=!0,t(y.imgwidth)&&t(y.imgheight)?M():(y.attr({width:0,height:0}),x("img",{onload:function(){var a=h[q.chartIndex];0===this.width&&(r(this,{position:"absolute",top:"-999em"}),g.body.appendChild(this));P[v]={width:this.width,height:this.height};y.imgwidth=this.width;y.imgheight=
this.height;y.element&&M();this.parentNode&&this.parentNode.removeChild(this);q.imgCount--;if(!q.imgCount&&a&&a.onload)a.onload()},src:v}),this.imgCount++));return y},symbols:{circle:function(a,k,c,z){return this.arc(a+c/2,k+z/2,c/2,z/2,{start:0,end:2*Math.PI,open:!1})},square:function(a,k,c,z){return["M",a,k,"L",a+c,k,a+c,k+z,a,k+z,"Z"]},triangle:function(a,k,c,z){return["M",a+c/2,k,"L",a+c,k+z,a,k+z,"Z"]},"triangle-down":function(a,k,c,z){return["M",a,k,"L",a+c,k,a+c/2,k+z,"Z"]},diamond:function(a,
k,c,z){return["M",a+c/2,k,"L",a+c,k+z/2,a+c/2,k+z,a,k+z/2,"Z"]},arc:function(a,k,c,z,l){var b=l.start,d=l.r||c,q=l.r||z||c,e=l.end-.001;c=l.innerR;z=l.open;var y=Math.cos(b),f=Math.sin(b),C=Math.cos(e),e=Math.sin(e);l=l.end-b<Math.PI?0:1;d=["M",a+d*y,k+q*f,"A",d,q,0,l,1,a+d*C,k+q*e];t(c)&&d.push(z?"M":"L",a+c*C,k+c*e,"A",c,c,0,l,0,a+c*y,k+c*f);d.push(z?"":"Z");return d},callout:function(a,k,c,z,l){var b=Math.min(l&&l.r||0,c,z),d=b+6,q=l&&l.anchorX;l=l&&l.anchorY;var e;e=["M",a+b,k,"L",a+c-b,k,"C",
a+c,k,a+c,k,a+c,k+b,"L",a+c,k+z-b,"C",a+c,k+z,a+c,k+z,a+c-b,k+z,"L",a+b,k+z,"C",a,k+z,a,k+z,a,k+z-b,"L",a,k+b,"C",a,k,a,k,a+b,k];q&&q>c?l>k+d&&l<k+z-d?e.splice(13,3,"L",a+c,l-6,a+c+6,l,a+c,l+6,a+c,k+z-b):e.splice(13,3,"L",a+c,z/2,q,l,a+c,z/2,a+c,k+z-b):q&&0>q?l>k+d&&l<k+z-d?e.splice(33,3,"L",a,l+6,a-6,l,a,l-6,a,k+b):e.splice(33,3,"L",a,z/2,q,l,a,z/2,a,k+b):l&&l>z&&q>a+d&&q<a+c-d?e.splice(23,3,"L",q+6,k+z,q,k+z+6,q-6,k+z,a+b,k+z):l&&0>l&&q>a+d&&q<a+c-d&&e.splice(3,3,"L",q-6,k,q,k-6,q+6,k,c-b,k);return e}},
clipRect:function(k,c,z,l){var b=a.uniqueKey(),d=this.createElement("clipPath").attr({id:b}).add(this.defs);k=this.rect(k,c,z,l,0).add(d);k.id=b;k.clipPath=d;k.count=0;return k},text:function(a,k,c,z){var l=!M&&this.forExport,b={};if(z&&(this.allowHTML||!this.forExport))return this.html(a,k,c);b.x=Math.round(k||0);c&&(b.y=Math.round(c));if(a||0===a)b.text=a;a=this.createElement("text").attr(b);l&&a.css({position:"absolute"});z||(a.xSetter=function(a,k,c){var z=c.getElementsByTagName("tspan"),l,b=
c.getAttribute(k),d;for(d=0;d<z.length;d++)l=z[d],l.getAttribute(k)===b&&l.setAttribute(k,a);c.setAttribute(k,a)});return a},fontMetrics:function(a,c){a=a||c&&c.style&&c.style.fontSize||this.style&&this.style.fontSize;a=/px/.test(a)?k(a):/em/.test(a)?parseFloat(a)*(c?this.fontMetrics(null,c.parentNode).f:16):12;c=24>a?a+3:Math.round(1.2*a);return{h:c,b:Math.round(.8*c),f:a}},rotCorr:function(a,k,c){var z=a;k&&c&&(z=Math.max(z*Math.cos(k*m),4));return{x:-a/3*Math.sin(k*m),y:z}},label:function(k,c,
l,b,q,f,w,G,g){var v=this,p=v.g("button"!==g&&"label"),M=p.text=v.text("",0,0,w).attr({zIndex:1}),C,I,J=0,m=3,A=0,H,h,K,Q,r,N={},n,x,u=/^url\((.*?)\)$/.test(b),P=u,R,V,U,O;g&&p.addClass("highcharts-"+g);P=u;R=function(){return(n||0)%2/2};V=function(){var a=M.element.style,k={};I=(void 0===H||void 0===h||r)&&t(M.textStr)&&M.getBBox();p.width=(H||I.width||0)+2*m+A;p.height=(h||I.height||0)+2*m;x=m+v.fontMetrics(a&&a.fontSize,M).b;P&&(C||(p.box=C=v.symbols[b]||u?v.symbol(b):v.rect(),C.addClass(("button"===
g?"":"highcharts-label-box")+(g?" highcharts-"+g+"-box":"")),C.add(p),a=R(),k.x=a,k.y=(G?-x:0)+a),k.width=Math.round(p.width),k.height=Math.round(p.height),C.attr(d(k,N)),N={})};U=function(){var a=A+m,k;k=G?0:x;t(H)&&I&&("center"===r||"right"===r)&&(a+={center:.5,right:1}[r]*(H-I.width));if(a!==M.x||k!==M.y)M.attr("x",a),void 0!==k&&M.attr("y",k);M.x=a;M.y=k};O=function(a,k){C?C.attr(a,k):N[a]=k};p.onAdd=function(){M.add(p);p.attr({text:k||0===k?k:"",x:c,y:l});C&&t(q)&&p.attr({anchorX:q,anchorY:f})};
p.widthSetter=function(k){H=a.isNumber(k)?k:null};p.heightSetter=function(a){h=a};p["text-alignSetter"]=function(a){r=a};p.paddingSetter=function(a){t(a)&&a!==m&&(m=p.padding=a,U())};p.paddingLeftSetter=function(a){t(a)&&a!==A&&(A=a,U())};p.alignSetter=function(a){a={left:0,center:.5,right:1}[a];a!==J&&(J=a,I&&p.attr({x:K}))};p.textSetter=function(a){void 0!==a&&M.textSetter(a);V();U()};p["stroke-widthSetter"]=function(a,k){a&&(P=!0);n=this["stroke-width"]=a;O(k,a)};p.strokeSetter=p.fillSetter=p.rSetter=
function(a,k){"fill"===k&&a&&(P=!0);O(k,a)};p.anchorXSetter=function(a,k){q=p.anchorX=a;O(k,Math.round(a)-R()-K)};p.anchorYSetter=function(a,k){f=p.anchorY=a;O(k,a-Q)};p.xSetter=function(a){p.x=a;J&&(a-=J*((H||I.width)+2*m));K=Math.round(a);p.attr("translateX",K)};p.ySetter=function(a){Q=p.y=Math.round(a);p.attr("translateY",Q)};var B=p.css;return d(p,{css:function(a){if(a){var k={};a=y(a);e(p.textProps,function(c){void 0!==a[c]&&(k[c]=a[c],delete a[c])});M.css(k)}return B.call(p,a)},getBBox:function(){return{width:I.width+
2*m,height:I.height+2*m,x:I.x-m,y:I.y-m}},shadow:function(a){a&&(V(),C&&C.shadow(a));return p},destroy:function(){z(p.element,"mouseenter");z(p.element,"mouseleave");M&&(M=M.destroy());C&&(C=C.destroy());E.prototype.destroy.call(p);p=v=V=U=O=null}})}});a.Renderer=B})(L);(function(a){var E=a.attr,B=a.createElement,F=a.css,D=a.defined,n=a.each,h=a.extend,u=a.isFirefox,r=a.isMS,x=a.isWebKit,t=a.pInt,m=a.SVGRenderer,f=a.win,g=a.wrap;h(a.SVGElement.prototype,{htmlCss:function(a){var d=this.element;if(d=
a&&"SPAN"===d.tagName&&a.width)delete a.width,this.textWidth=d,this.updateTransform();a&&"ellipsis"===a.textOverflow&&(a.whiteSpace="nowrap",a.overflow="hidden");this.styles=h(this.styles,a);F(this.element,a);return this},htmlGetBBox:function(){var a=this.element;"text"===a.nodeName&&(a.style.position="absolute");return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,d=this.element,f=this.translateX||0,b=this.translateY||
0,g=this.x||0,v=this.y||0,m=this.textAlign||"left",q={left:0,center:.5,right:1}[m],J=this.styles;F(d,{marginLeft:f,marginTop:b});this.shadows&&n(this.shadows,function(a){F(a,{marginLeft:f+1,marginTop:b+1})});this.inverted&&n(d.childNodes,function(c){a.invertChild(c,d)});if("SPAN"===d.tagName){var c=this.rotation,w=t(this.textWidth),K=J&&J.whiteSpace,y=[c,m,d.innerHTML,this.textWidth,this.textAlign].join();y!==this.cTT&&(J=a.fontMetrics(d.style.fontSize).b,D(c)&&this.setSpanRotation(c,q,J),F(d,{width:"",
whiteSpace:K||"nowrap"}),d.offsetWidth>w&&/[ \-]/.test(d.textContent||d.innerText)&&F(d,{width:w+"px",display:"block",whiteSpace:K||"normal"}),this.getSpanCorrection(d.offsetWidth,J,q,c,m));F(d,{left:g+(this.xCorr||0)+"px",top:v+(this.yCorr||0)+"px"});x&&(J=d.offsetHeight);this.cTT=y}}else this.alignOnAdd=!0},setSpanRotation:function(a,d,p){var b={},e=r?"-ms-transform":x?"-webkit-transform":u?"MozTransform":f.opera?"-o-transform":"";b[e]=b.transform="rotate("+a+"deg)";b[e+(u?"Origin":"-origin")]=
b.transformOrigin=100*d+"% "+p+"px";F(this.element,b)},getSpanCorrection:function(a,d,f){this.xCorr=-a*f;this.yCorr=-d}});h(m.prototype,{html:function(a,d,f){var b=this.createElement("span"),e=b.element,p=b.renderer,m=p.isSVG,q=function(a,c){n(["opacity","visibility"],function(b){g(a,b+"Setter",function(a,b,d,l){a.call(this,b,d,l);c[d]=b})})};b.textSetter=function(a){a!==e.innerHTML&&delete this.bBox;e.innerHTML=this.textStr=a;b.htmlUpdateTransform()};m&&q(b,b.element.style);b.xSetter=b.ySetter=b.alignSetter=
b.rotationSetter=function(a,c){"align"===c&&(c="textAlign");b[c]=a;b.htmlUpdateTransform()};b.attr({text:a,x:Math.round(d),y:Math.round(f)}).css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize,position:"absolute"});e.style.whiteSpace="nowrap";b.css=b.htmlCss;m&&(b.add=function(a){var c,d=p.box.parentNode,f=[];if(this.parentGroup=a){if(c=a.div,!c){for(;a;)f.push(a),a=a.parentGroup;n(f.reverse(),function(a){var e,l=E(a.element,"class");l&&(l={className:l});c=a.div=a.div||B("div",l,{position:"absolute",
left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,pointerEvents:a.styles&&a.styles.pointerEvents},c||d);e=c.style;h(a,{on:function(){b.on.apply({element:f[0].div},arguments);return a},translateXSetter:function(c,k){e.left=c+"px";a[k]=c;a.doTransform=!0},translateYSetter:function(c,k){e.top=c+"px";a[k]=c;a.doTransform=!0}});q(a,e)})}}else c=d;c.appendChild(e);b.added=!0;b.alignOnAdd&&b.htmlUpdateTransform();return b});return b}})})(L);(function(a){var E,B,F=
a.createElement,D=a.css,n=a.defined,h=a.deg2rad,u=a.discardElement,r=a.doc,x=a.each,t=a.erase,m=a.extend;E=a.extendClass;var f=a.isArray,g=a.isNumber,e=a.isObject,d=a.merge;B=a.noop;var p=a.pick,b=a.pInt,A=a.SVGElement,v=a.SVGRenderer,H=a.win;a.svg||(B={docMode8:r&&8===r.documentMode,init:function(a,b){var c=["\x3c",b,' filled\x3d"f" stroked\x3d"f"'],d=["position: ","absolute",";"],q="div"===b;("shape"===b||q)&&d.push("left:0;top:0;width:1px;height:1px;");d.push("visibility: ",q?"hidden":"visible");
c.push(' style\x3d"',d.join(""),'"/\x3e');b&&(c=q||"span"===b||"img"===b?c.join(""):a.prepVML(c),this.element=F(c));this.renderer=a},add:function(a){var b=this.renderer,c=this.element,d=b.box,q=a&&a.inverted,d=a?a.element||a:d;a&&(this.parentGroup=a);q&&b.invertChild(c,d);d.appendChild(c);this.added=!0;this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform();if(this.onAdd)this.onAdd();this.className&&this.attr("class",this.className);return this},updateTransform:A.prototype.htmlUpdateTransform,
setSpanRotation:function(){var a=this.rotation,b=Math.cos(a*h),c=Math.sin(a*h);D(this.element,{filter:a?["progid:DXImageTransform.Microsoft.Matrix(M11\x3d",b,", M12\x3d",-c,", M21\x3d",c,", M22\x3d",b,", sizingMethod\x3d'auto expand')"].join(""):"none"})},getSpanCorrection:function(a,b,c,d,e){var q=d?Math.cos(d*h):1,f=d?Math.sin(d*h):0,l=p(this.elemHeight,this.element.offsetHeight),w;this.xCorr=0>q&&-a;this.yCorr=0>f&&-l;w=0>q*f;this.xCorr+=f*b*(w?1-c:c);this.yCorr-=q*b*(d?w?c:1-c:1);e&&"left"!==
e&&(this.xCorr-=a*c*(0>q?-1:1),d&&(this.yCorr-=l*c*(0>f?-1:1)),D(this.element,{textAlign:e}))},pathToVML:function(a){for(var b=a.length,c=[];b--;)g(a[b])?c[b]=Math.round(10*a[b])-5:"Z"===a[b]?c[b]="x":(c[b]=a[b],!a.isArc||"wa"!==a[b]&&"at"!==a[b]||(c[b+5]===c[b+7]&&(c[b+7]+=a[b+7]>a[b+5]?1:-1),c[b+6]===c[b+8]&&(c[b+8]+=a[b+8]>a[b+6]?1:-1)));return c.join(" ")||"x"},clip:function(a){var b=this,c;a?(c=a.members,t(c,b),c.push(b),b.destroyClip=function(){t(c,b)},a=a.getCSS(b)):(b.destroyClip&&b.destroyClip(),
a={clip:b.docMode8?"inherit":"rect(auto)"});return b.css(a)},css:A.prototype.htmlCss,safeRemoveChild:function(a){a.parentNode&&u(a)},destroy:function(){this.destroyClip&&this.destroyClip();return A.prototype.destroy.apply(this)},on:function(a,b){this.element["on"+a]=function(){var a=H.event;a.target=a.srcElement;b(a)};return this},cutOffPath:function(a,d){var c;a=a.split(/[ ,]/);c=a.length;if(9===c||11===c)a[c-4]=a[c-2]=b(a[c-2])-10*d;return a.join(" ")},shadow:function(a,d,c){var e=[],q,f=this.element,
g=this.renderer,l,v=f.style,k,z=f.path,m,M,A,J;z&&"string"!==typeof z.value&&(z="x");M=z;if(a){A=p(a.width,3);J=(a.opacity||.15)/A;for(q=1;3>=q;q++)m=2*A+1-2*q,c&&(M=this.cutOffPath(z.value,m+.5)),k=['\x3cshape isShadow\x3d"true" strokeweight\x3d"',m,'" filled\x3d"false" path\x3d"',M,'" coordsize\x3d"10 10" style\x3d"',f.style.cssText,'" /\x3e'],l=F(g.prepVML(k),null,{left:b(v.left)+p(a.offsetX,1),top:b(v.top)+p(a.offsetY,1)}),c&&(l.cutOff=m+1),k=['\x3cstroke color\x3d"',a.color||"#000000",'" opacity\x3d"',
J*q,'"/\x3e'],F(g.prepVML(k),null,null,l),d?d.element.appendChild(l):f.parentNode.insertBefore(l,f),e.push(l);this.shadows=e}return this},updateShadows:B,setAttr:function(a,b){this.docMode8?this.element[a]=b:this.element.setAttribute(a,b)},classSetter:function(a){(this.added?this.element:this).className=a},dashstyleSetter:function(a,b,c){(c.getElementsByTagName("stroke")[0]||F(this.renderer.prepVML(["\x3cstroke/\x3e"]),null,null,c))[b]=a||"solid";this[b]=a},dSetter:function(a,b,c){var d=this.shadows;
a=a||[];this.d=a.join&&a.join(" ");c.path=a=this.pathToVML(a);if(d)for(c=d.length;c--;)d[c].path=d[c].cutOff?this.cutOffPath(a,d[c].cutOff):a;this.setAttr(b,a)},fillSetter:function(a,b,c){var d=c.nodeName;"SPAN"===d?c.style.color=a:"IMG"!==d&&(c.filled="none"!==a,this.setAttr("fillcolor",this.renderer.color(a,c,b,this)))},"fill-opacitySetter":function(a,b,c){F(this.renderer.prepVML(["\x3c",b.split("-")[0],' opacity\x3d"',a,'"/\x3e']),null,null,c)},opacitySetter:B,rotationSetter:function(a,b,c){c=
c.style;this[b]=c[b]=a;c.left=-Math.round(Math.sin(a*h)+1)+"px";c.top=Math.round(Math.cos(a*h))+"px"},strokeSetter:function(a,b,c){this.setAttr("strokecolor",this.renderer.color(a,c,b,this))},"stroke-widthSetter":function(a,b,c){c.stroked=!!a;this[b]=a;g(a)&&(a+="px");this.setAttr("strokeweight",a)},titleSetter:function(a,b){this.setAttr(b,a)},visibilitySetter:function(a,b,c){"inherit"===a&&(a="visible");this.shadows&&x(this.shadows,function(c){c.style[b]=a});"DIV"===c.nodeName&&(a="hidden"===a?"-999em":
0,this.docMode8||(c.style[b]=a?"visible":"hidden"),b="top");c.style[b]=a},xSetter:function(a,b,c){this[b]=a;"x"===b?b="left":"y"===b&&(b="top");this.updateClipping?(this[b]=a,this.updateClipping()):c.style[b]=a},zIndexSetter:function(a,b,c){c.style[b]=a}},B["stroke-opacitySetter"]=B["fill-opacitySetter"],a.VMLElement=B=E(A,B),B.prototype.ySetter=B.prototype.widthSetter=B.prototype.heightSetter=B.prototype.xSetter,B={Element:B,isIE8:-1<H.navigator.userAgent.indexOf("MSIE 8.0"),init:function(a,b,c){var d,
e;this.alignedObjects=[];d=this.createElement("div").css({position:"relative"});e=d.element;a.appendChild(d.element);this.isVML=!0;this.box=e;this.boxWrapper=d;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(b,c,!1);if(!r.namespaces.hcv){r.namespaces.add("hcv","urn:schemas-microsoft-com:vml");try{r.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}catch(y){r.styleSheets[0].cssText+="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}}},
isHidden:function(){return!this.box.offsetWidth},clipRect:function(a,b,c,d){var f=this.createElement(),q=e(a);return m(f,{members:[],count:0,left:(q?a.x:a)+1,top:(q?a.y:b)+1,width:(q?a.width:c)-1,height:(q?a.height:d)-1,getCSS:function(a){var c=a.element,b=c.nodeName,k=a.inverted,z=this.top-("shape"===b?c.offsetTop:0),d=this.left,c=d+this.width,e=z+this.height,z={clip:"rect("+Math.round(k?d:z)+"px,"+Math.round(k?e:c)+"px,"+Math.round(k?c:e)+"px,"+Math.round(k?z:d)+"px)"};!k&&a.docMode8&&"DIV"===b&&
m(z,{width:c+"px",height:e+"px"});return z},updateClipping:function(){x(f.members,function(a){a.element&&a.css(f.getCSS(a))})}})},color:function(b,d,c,e){var f=this,y,q=/^rgba/,l,p,k="none";b&&b.linearGradient?p="gradient":b&&b.radialGradient&&(p="pattern");if(p){var z,g,v=b.linearGradient||b.radialGradient,w,m,A,C,H,h="";b=b.stops;var J,r=[],n=function(){l=['\x3cfill colors\x3d"'+r.join(",")+'" opacity\x3d"',A,'" o:opacity2\x3d"',m,'" type\x3d"',p,'" ',h,'focus\x3d"100%" method\x3d"any" /\x3e'];
F(f.prepVML(l),null,null,d)};w=b[0];J=b[b.length-1];0<w[0]&&b.unshift([0,w[1]]);1>J[0]&&b.push([1,J[1]]);x(b,function(k,c){q.test(k[1])?(y=a.color(k[1]),z=y.get("rgb"),g=y.get("a")):(z=k[1],g=1);r.push(100*k[0]+"% "+z);c?(A=g,C=z):(m=g,H=z)});if("fill"===c)if("gradient"===p)c=v.x1||v[0]||0,b=v.y1||v[1]||0,w=v.x2||v[2]||0,v=v.y2||v[3]||0,h='angle\x3d"'+(90-180*Math.atan((v-b)/(w-c))/Math.PI)+'"',n();else{var k=v.r,t=2*k,u=2*k,B=v.cx,E=v.cy,D=d.radialReference,S,k=function(){D&&(S=e.getBBox(),B+=(D[0]-
S.x)/S.width-.5,E+=(D[1]-S.y)/S.height-.5,t*=D[2]/S.width,u*=D[2]/S.height);h='src\x3d"'+a.getOptions().global.VMLRadialGradientURL+'" size\x3d"'+t+","+u+'" origin\x3d"0.5,0.5" position\x3d"'+B+","+E+'" color2\x3d"'+H+'" ';n()};e.added?k():e.onAdd=k;k=C}else k=z}else q.test(b)&&"IMG"!==d.tagName?(y=a.color(b),e[c+"-opacitySetter"](y.get("a"),c,d),k=y.get("rgb")):(k=d.getElementsByTagName(c),k.length&&(k[0].opacity=1,k[0].type="solid"),k=b);return k},prepVML:function(a){var b=this.isIE8;a=a.join("");
b?(a=a.replace("/\x3e",' xmlns\x3d"urn:schemas-microsoft-com:vml" /\x3e'),a=-1===a.indexOf('style\x3d"')?a.replace("/\x3e",' style\x3d"display:inline-block;behavior:url(#default#VML);" /\x3e'):a.replace('style\x3d"','style\x3d"display:inline-block;behavior:url(#default#VML);')):a=a.replace("\x3c","\x3chcv:");return a},text:v.prototype.html,path:function(a){var b={coordsize:"10 10"};f(a)?b.d=a:e(a)&&m(b,a);return this.createElement("shape").attr(b)},circle:function(a,b,c){var d=this.symbol("circle");
e(a)&&(c=a.r,b=a.y,a=a.x);d.isCircle=!0;d.r=c;return d.attr({x:a,y:b})},g:function(a){var b;a&&(b={className:"highcharts-"+a,"class":"highcharts-"+a});return this.createElement("div").attr(b)},image:function(a,b,c,d,e){var f=this.createElement("img").attr({src:a});1<arguments.length&&f.attr({x:b,y:c,width:d,height:e});return f},createElement:function(a){return"rect"===a?this.symbol(a):v.prototype.createElement.call(this,a)},invertChild:function(a,d){var c=this;d=d.style;var e="IMG"===a.tagName&&a.style;
D(a,{flip:"x",left:b(d.width)-(e?b(e.top):1),top:b(d.height)-(e?b(e.left):1),rotation:-90});x(a.childNodes,function(b){c.invertChild(b,a)})},symbols:{arc:function(a,b,c,d,e){var f=e.start,p=e.end,l=e.r||c||d;c=e.innerR;d=Math.cos(f);var g=Math.sin(f),k=Math.cos(p),z=Math.sin(p);if(0===p-f)return["x"];f=["wa",a-l,b-l,a+l,b+l,a+l*d,b+l*g,a+l*k,b+l*z];e.open&&!c&&f.push("e","M",a,b);f.push("at",a-c,b-c,a+c,b+c,a+c*k,b+c*z,a+c*d,b+c*g,"x","e");f.isArc=!0;return f},circle:function(a,b,c,d,e){e&&n(e.r)&&
(c=d=2*e.r);e&&e.isCircle&&(a-=c/2,b-=d/2);return["wa",a,b,a+c,b+d,a+c,b+d/2,a+c,b+d/2,"e"]},rect:function(a,b,c,d,e){return v.prototype.symbols[n(e)&&e.r?"callout":"square"].call(0,a,b,c,d,e)}}},a.VMLRenderer=E=function(){this.init.apply(this,arguments)},E.prototype=d(v.prototype,B),a.Renderer=E);v.prototype.measureSpanWidth=function(a,b){var c=r.createElement("span");a=r.createTextNode(a);c.appendChild(a);D(c,b);this.box.appendChild(c);b=c.offsetWidth;u(c);return b}})(L);(function(a){function E(){var h=
a.defaultOptions.global,n=r.moment;if(h.timezone){if(n)return function(a){return-n.tz(a,h.timezone).utcOffset()};a.error(25)}return h.useUTC&&h.getTimezoneOffset}function B(){var h=a.defaultOptions.global,t,m=h.useUTC,f=m?"getUTC":"get",g=m?"setUTC":"set";a.Date=t=h.Date||r.Date;t.hcTimezoneOffset=m&&h.timezoneOffset;t.hcGetTimezoneOffset=E();t.hcMakeTime=function(a,d,f,b,g,v){var e;m?(e=t.UTC.apply(0,arguments),e+=n(e)):e=(new t(a,d,u(f,1),u(b,0),u(g,0),u(v,0))).getTime();return e};D("Minutes Hours Day Date Month FullYear".split(" "),
function(a){t["hcGet"+a]=f+a});D("Milliseconds Seconds Minutes Hours Date Month FullYear".split(" "),function(a){t["hcSet"+a]=g+a})}var F=a.color,D=a.each,n=a.getTZOffset,h=a.merge,u=a.pick,r=a.win;a.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),
shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{useUTC:!0,VMLRadialGradientURL:"http://code.highcharts.com/5.0.12/gfx/vml-radial-gradient.png"},chart:{borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:20},
position:{align:"right",x:-10,y:10}},width:null,height:null,borderColor:"#335cad",backgroundColor:"#ffffff",plotBorderColor:"#cccccc"},title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},plotOptions:{},labels:{style:{position:"absolute",color:"#333333"}},legend:{enabled:!0,align:"center",layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},
itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold",textOverflow:"ellipsis"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,
animation:a.svg,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:a.isTouchDevice?25:10,backgroundColor:F("#f7f7f7").setOpacity(.85).get(),borderWidth:1,headerFormat:'\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e',
shadow:!0,style:{color:"#333333",cursor:"default",fontSize:"12px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};a.setOptions=function(r){a.defaultOptions=h(!0,a.defaultOptions,r);B();return a.defaultOptions};a.getOptions=function(){return a.defaultOptions};a.defaultPlotOptions=a.defaultOptions.plotOptions;B()})(L);
(function(a){var E=a.correctFloat,B=a.defined,F=a.destroyObjectProperties,D=a.isNumber,n=a.merge,h=a.pick,u=a.deg2rad;a.Tick=function(a,h,n,m){this.axis=a;this.pos=h;this.type=n||"";this.isNewLabel=this.isNew=!0;n||m||this.addLabel()};a.Tick.prototype={addLabel:function(){var a=this.axis,x=a.options,t=a.chart,m=a.categories,f=a.names,g=this.pos,e=x.labels,d=a.tickPositions,p=g===d[0],b=g===d[d.length-1],f=m?h(m[g],f[g],g):g,m=this.label,d=d.info,A;a.isDatetimeAxis&&d&&(A=x.dateTimeLabelFormats[d.higherRanks[g]||
d.unitName]);this.isFirst=p;this.isLast=b;x=a.labelFormatter.call({axis:a,chart:t,isFirst:p,isLast:b,dateTimeLabelFormat:A,value:a.isLog?E(a.lin2log(f)):f});B(m)?m&&m.attr({text:x}):(this.labelLength=(this.label=m=B(x)&&e.enabled?t.renderer.text(x,0,0,e.useHTML).css(n(e.style)).add(a.labelGroup):null)&&m.getBBox().width,this.rotation=0)},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(a){var r=this.axis,n=a.x,m=r.chart.chartWidth,
f=r.chart.spacing,g=h(r.labelLeft,Math.min(r.pos,f[3])),f=h(r.labelRight,Math.max(r.pos+r.len,m-f[1])),e=this.label,d=this.rotation,p={left:0,center:.5,right:1}[r.labelAlign],b=e.getBBox().width,A=r.getSlotWidth(),v=A,H=1,q,J={};if(d)0>d&&n-p*b<g?q=Math.round(n/Math.cos(d*u)-g):0<d&&n+p*b>f&&(q=Math.round((m-n)/Math.cos(d*u)));else if(m=n+(1-p)*b,n-p*b<g?v=a.x+v*(1-p)-g:m>f&&(v=f-a.x+v*p,H=-1),v=Math.min(A,v),v<A&&"center"===r.labelAlign&&(a.x+=H*(A-v-p*(A-Math.min(b,v)))),b>v||r.autoRotation&&(e.styles||
{}).width)q=v;q&&(J.width=q,(r.options.labels.style||{}).textOverflow||(J.textOverflow="ellipsis"),e.css(J))},getPosition:function(a,h,n,m){var f=this.axis,g=f.chart,e=m&&g.oldChartHeight||g.chartHeight;return{x:a?f.translate(h+n,null,null,m)+f.transB:f.left+f.offset+(f.opposite?(m&&g.oldChartWidth||g.chartWidth)-f.right-f.left:0),y:a?e-f.bottom+f.offset-(f.opposite?f.height:0):e-f.translate(h+n,null,null,m)-f.transB}},getLabelPosition:function(a,h,n,m,f,g,e,d){var p=this.axis,b=p.transA,A=p.reversed,
v=p.staggerLines,H=p.tickRotCorr||{x:0,y:0},q=f.y;B(q)||(q=0===p.side?n.rotation?-8:-n.getBBox().height:2===p.side?H.y+8:Math.cos(n.rotation*u)*(H.y-n.getBBox(!1,0).height/2));a=a+f.x+H.x-(g&&m?g*b*(A?-1:1):0);h=h+q-(g&&!m?g*b*(A?1:-1):0);v&&(n=e/(d||1)%v,p.opposite&&(n=v-n-1),h+=p.labelOffset/v*n);return{x:a,y:Math.round(h)}},getMarkPath:function(a,h,n,m,f,g){return g.crispLine(["M",a,h,"L",a+(f?0:-n),h+(f?n:0)],m)},renderGridLine:function(a,h,n){var m=this.axis,f=m.options,g=this.gridLine,e={},
d=this.pos,p=this.type,b=m.tickmarkOffset,A=m.chart.renderer,v=p?p+"Grid":"grid",H=f[v+"LineWidth"],q=f[v+"LineColor"],f=f[v+"LineDashStyle"];g||(e.stroke=q,e["stroke-width"]=H,f&&(e.dashstyle=f),p||(e.zIndex=1),a&&(e.opacity=0),this.gridLine=g=A.path().attr(e).addClass("highcharts-"+(p?p+"-":"")+"grid-line").add(m.gridGroup));if(!a&&g&&(a=m.getPlotLinePath(d+b,g.strokeWidth()*n,a,!0)))g[this.isNew?"attr":"animate"]({d:a,opacity:h})},renderMark:function(a,n,t){var m=this.axis,f=m.options,g=m.chart.renderer,
e=this.type,d=e?e+"Tick":"tick",p=m.tickSize(d),b=this.mark,A=!b,v=a.x;a=a.y;var H=h(f[d+"Width"],!e&&m.isXAxis?1:0),f=f[d+"Color"];p&&(m.opposite&&(p[0]=-p[0]),A&&(this.mark=b=g.path().addClass("highcharts-"+(e?e+"-":"")+"tick").add(m.axisGroup),b.attr({stroke:f,"stroke-width":H})),b[A?"attr":"animate"]({d:this.getMarkPath(v,a,p[0],b.strokeWidth()*t,m.horiz,g),opacity:n}))},renderLabel:function(a,n,t,m){var f=this.axis,g=f.horiz,e=f.options,d=this.label,p=e.labels,b=p.step,A=f.tickmarkOffset,v=!0,
H=a.x;a=a.y;d&&D(H)&&(d.xy=a=this.getLabelPosition(H,a,d,g,p,A,m,b),this.isFirst&&!this.isLast&&!h(e.showFirstLabel,1)||this.isLast&&!this.isFirst&&!h(e.showLastLabel,1)?v=!1:!g||f.isRadial||p.step||p.rotation||n||0===t||this.handleOverflow(a),b&&m%b&&(v=!1),v&&D(a.y)?(a.opacity=t,d[this.isNewLabel?"attr":"animate"](a),this.isNewLabel=!1):(d.attr("y",-9999),this.isNewLabel=!0),this.isNew=!1)},render:function(a,n,t){var m=this.axis,f=m.horiz,g=this.getPosition(f,this.pos,m.tickmarkOffset,n),e=g.x,
d=g.y,m=f&&e===m.pos+m.len||!f&&d===m.pos?-1:1;t=h(t,1);this.isActive=!0;this.renderGridLine(n,t,m);this.renderMark(g,t,m);this.renderLabel(g,n,t,a)},destroy:function(){F(this,this.axis)}}})(L);var T=function(a){var E=a.addEvent,B=a.animObject,F=a.arrayMax,D=a.arrayMin,n=a.color,h=a.correctFloat,u=a.defaultOptions,r=a.defined,x=a.deg2rad,t=a.destroyObjectProperties,m=a.each,f=a.extend,g=a.fireEvent,e=a.format,d=a.getMagnitude,p=a.grep,b=a.inArray,A=a.isArray,v=a.isNumber,H=a.isString,q=a.merge,J=
a.normalizeTickInterval,c=a.objectEach,w=a.pick,K=a.removeEvent,y=a.splat,G=a.syncTimeout,l=a.Tick,I=function(){this.init.apply(this,arguments)};a.extend(I.prototype,{defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,labels:{enabled:!0,style:{color:"#666666",cursor:"default",fontSize:"11px"},x:0},minPadding:.01,maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,
startOnTick:!1,tickLength:10,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",title:{align:"middle",style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"},defaultYAxisOptions:{endOnTick:!0,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},maxPadding:.05,minPadding:.05,startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{enabled:!1,
formatter:function(){return a.numberFormat(this.total,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"#000000",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},init:function(a,z){var k=z.isX,l=this;l.chart=a;l.horiz=
a.inverted&&!l.isZAxis?!k:k;l.isXAxis=k;l.coll=l.coll||(k?"xAxis":"yAxis");l.opposite=z.opposite;l.side=z.side||(l.horiz?l.opposite?0:2:l.opposite?1:3);l.setOptions(z);var d=this.options,e=d.type;l.labelFormatter=d.labels.formatter||l.defaultLabelFormatter;l.userOptions=z;l.minPixelPadding=0;l.reversed=d.reversed;l.visible=!1!==d.visible;l.zoomEnabled=!1!==d.zoomEnabled;l.hasNames="category"===e||!0===d.categories;l.categories=d.categories||l.hasNames;l.names=l.names||[];l.plotLinesAndBandsGroups=
{};l.isLog="logarithmic"===e;l.isDatetimeAxis="datetime"===e;l.positiveValuesOnly=l.isLog&&!l.allowNegativeLog;l.isLinked=r(d.linkedTo);l.ticks={};l.labelEdge=[];l.minorTicks={};l.plotLinesAndBands=[];l.alternateBands={};l.len=0;l.minRange=l.userMinRange=d.minRange||d.maxZoom;l.range=d.range;l.offset=d.offset||0;l.stacks={};l.oldStacks={};l.stacksTouched=0;l.max=null;l.min=null;l.crosshair=w(d.crosshair,y(a.options.tooltip.crosshairs)[k?0:1],!1);z=l.options.events;-1===b(l,a.axes)&&(k?a.axes.splice(a.xAxis.length,
0,l):a.axes.push(l),a[l.coll].push(l));l.series=l.series||[];a.inverted&&!l.isZAxis&&k&&void 0===l.reversed&&(l.reversed=!0);c(z,function(a,k){E(l,k,a)});l.lin2log=d.linearToLogConverter||l.lin2log;l.isLog&&(l.val2lin=l.log2lin,l.lin2val=l.lin2log)},setOptions:function(a){this.options=q(this.defaultOptions,"yAxis"===this.coll&&this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],q(u[this.coll],a))},
defaultLabelFormatter:function(){var k=this.axis,c=this.value,b=k.categories,l=this.dateTimeLabelFormat,d=u.lang,f=d.numericSymbols,d=d.numericSymbolMagnitude||1E3,y=f&&f.length,p,g=k.options.labels.format,k=k.isLog?Math.abs(c):k.tickInterval;if(g)p=e(g,this);else if(b)p=c;else if(l)p=a.dateFormat(l,c);else if(y&&1E3<=k)for(;y--&&void 0===p;)b=Math.pow(d,y+1),k>=b&&0===10*c%b&&null!==f[y]&&0!==c&&(p=a.numberFormat(c/b,-1)+f[y]);void 0===p&&(p=1E4<=Math.abs(c)?a.numberFormat(c,-1):a.numberFormat(c,
-1,void 0,""));return p},getSeriesExtremes:function(){var a=this,c=a.chart;a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();m(a.series,function(k){if(k.visible||!c.options.chart.ignoreHiddenSeries){var b=k.options,l=b.threshold,z;a.hasVisibleSeries=!0;a.positiveValuesOnly&&0>=l&&(l=null);if(a.isXAxis)b=k.xData,b.length&&(k=D(b),v(k)||k instanceof Date||(b=p(b,function(a){return v(a)}),k=D(b)),a.dataMin=Math.min(w(a.dataMin,b[0]),
k),a.dataMax=Math.max(w(a.dataMax,b[0]),F(b)));else if(k.getExtremes(),z=k.dataMax,k=k.dataMin,r(k)&&r(z)&&(a.dataMin=Math.min(w(a.dataMin,k),k),a.dataMax=Math.max(w(a.dataMax,z),z)),r(l)&&(a.threshold=l),!b.softThreshold||a.positiveValuesOnly)a.softThreshold=!1}})},translate:function(a,c,b,l,d,e){var k=this.linkedParent||this,z=1,f=0,y=l?k.oldTransA:k.transA;l=l?k.oldMin:k.min;var p=k.minPixelPadding;d=(k.isOrdinal||k.isBroken||k.isLog&&d)&&k.lin2val;y||(y=k.transA);b&&(z*=-1,f=k.len);k.reversed&&
(z*=-1,f-=z*(k.sector||k.len));c?(a=(a*z+f-p)/y+l,d&&(a=k.lin2val(a))):(d&&(a=k.val2lin(a)),a=z*(a-l)*y+f+z*p+(v(e)?y*e:0));return a},toPixels:function(a,c){return this.translate(a,!1,!this.horiz,null,!0)+(c?0:this.pos)},toValue:function(a,c){return this.translate(a-(c?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,c,b,l,d){var k=this.chart,z=this.left,e=this.top,f,y,p=b&&k.oldChartHeight||k.chartHeight,g=b&&k.oldChartWidth||k.chartWidth,q;f=this.transB;var G=function(a,k,c){if(a<
k||a>c)l?a=Math.min(Math.max(k,a),c):q=!0;return a};d=w(d,this.translate(a,null,null,b));a=b=Math.round(d+f);f=y=Math.round(p-d-f);v(d)?this.horiz?(f=e,y=p-this.bottom,a=b=G(a,z,z+this.width)):(a=z,b=g-this.right,f=y=G(f,e,e+this.height)):q=!0;return q&&!l?null:k.renderer.crispLine(["M",a,f,"L",b,y],c||1)},getLinearTickPositions:function(a,c,b){var k,l=h(Math.floor(c/a)*a);b=h(Math.ceil(b/a)*a);var z=[];if(this.single)return[c];for(c=l;c<=b;){z.push(c);c=h(c+a);if(c===k)break;k=c}return z},getMinorTickPositions:function(){var a=
this,c=a.options,b=a.tickPositions,l=a.minorTickInterval,d=[],e=a.pointRangePadding||0,f=a.min-e,e=a.max+e,y=e-f;if(y&&y/l<a.len/3)if(a.isLog)m(this.paddedTicks,function(k,c,b){c&&d.push.apply(d,a.getLogTickPositions(l,b[c-1],b[c],!0))});else if(a.isDatetimeAxis&&"auto"===c.minorTickInterval)d=d.concat(a.getTimeTicks(a.normalizeTimeTickInterval(l),f,e,c.startOfWeek));else for(c=f+(b[0]-f)%l;c<=e&&c!==d[0];c+=l)d.push(c);0!==d.length&&a.trimTicks(d);return d},adjustForMinRange:function(){var a=this.options,
c=this.min,b=this.max,l,d,e,f,y,p,g,v;this.isXAxis&&void 0===this.minRange&&!this.isLog&&(r(a.min)||r(a.max)?this.minRange=null:(m(this.series,function(a){p=a.xData;for(f=g=a.xIncrement?1:p.length-1;0<f;f--)if(y=p[f]-p[f-1],void 0===e||y<e)e=y}),this.minRange=Math.min(5*e,this.dataMax-this.dataMin)));b-c<this.minRange&&(d=this.dataMax-this.dataMin>=this.minRange,v=this.minRange,l=(v-b+c)/2,l=[c-l,w(a.min,c-l)],d&&(l[2]=this.isLog?this.log2lin(this.dataMin):this.dataMin),c=F(l),b=[c+v,w(a.max,c+v)],
d&&(b[2]=this.isLog?this.log2lin(this.dataMax):this.dataMax),b=D(b),b-c<v&&(l[0]=b-v,l[1]=w(a.min,b-v),c=F(l)));this.min=c;this.max=b},getClosest:function(){var a;this.categories?a=1:m(this.series,function(k){var c=k.closestPointRange,b=k.visible||!k.chart.options.chart.ignoreHiddenSeries;!k.noSharedTooltip&&r(c)&&b&&(a=r(a)?Math.min(a,c):c)});return a},nameToX:function(a){var k=A(this.categories),c=k?this.categories:this.names,l=a.options.x,d;a.series.requireSorting=!1;r(l)||(l=!1===this.options.uniqueNames?
a.series.autoIncrement():b(a.name,c));-1===l?k||(d=c.length):d=l;void 0!==d&&(this.names[d]=a.name);return d},updateNames:function(){var a=this;0<this.names.length&&(this.names.length=0,this.minRange=this.userMinRange,m(this.series||[],function(k){k.xIncrement=null;if(!k.points||k.isDirtyData)k.processData(),k.generatePoints();m(k.points,function(c,b){var l;c.options&&(l=a.nameToX(c),void 0!==l&&l!==c.x&&(c.x=l,k.xData[b]=l))})}))},setAxisTranslation:function(a){var k=this,c=k.max-k.min,b=k.axisPointRange||
0,l,d=0,e=0,f=k.linkedParent,y=!!k.categories,p=k.transA,g=k.isXAxis;if(g||y||b)l=k.getClosest(),f?(d=f.minPointOffset,e=f.pointRangePadding):m(k.series,function(a){var c=y?1:g?w(a.options.pointRange,l,0):k.axisPointRange||0;a=a.options.pointPlacement;b=Math.max(b,c);k.single||(d=Math.max(d,H(a)?0:c/2),e=Math.max(e,"on"===a?0:c))}),f=k.ordinalSlope&&l?k.ordinalSlope/l:1,k.minPointOffset=d*=f,k.pointRangePadding=e*=f,k.pointRange=Math.min(b,c),g&&(k.closestPointRange=l);a&&(k.oldTransA=p);k.translationSlope=
k.transA=p=k.options.staticScale||k.len/(c+e||1);k.transB=k.horiz?k.left:k.bottom;k.minPixelPadding=p*d},minFromRange:function(){return this.max-this.range},setTickInterval:function(k){var c=this,b=c.chart,l=c.options,e=c.isLog,f=c.log2lin,y=c.isDatetimeAxis,p=c.isXAxis,q=c.isLinked,G=l.maxPadding,I=l.minPadding,A=l.tickInterval,H=l.tickPixelInterval,n=c.categories,K=c.threshold,t=c.softThreshold,u,x,B,D;y||n||q||this.getTickAmount();B=w(c.userMin,l.min);D=w(c.userMax,l.max);q?(c.linkedParent=b[c.coll][l.linkedTo],
b=c.linkedParent.getExtremes(),c.min=w(b.min,b.dataMin),c.max=w(b.max,b.dataMax),l.type!==c.linkedParent.options.type&&a.error(11,1)):(!t&&r(K)&&(c.dataMin>=K?(u=K,I=0):c.dataMax<=K&&(x=K,G=0)),c.min=w(B,u,c.dataMin),c.max=w(D,x,c.dataMax));e&&(c.positiveValuesOnly&&!k&&0>=Math.min(c.min,w(c.dataMin,c.min))&&a.error(10,1),c.min=h(f(c.min),15),c.max=h(f(c.max),15));c.range&&r(c.max)&&(c.userMin=c.min=B=Math.max(c.min,c.minFromRange()),c.userMax=D=c.max,c.range=null);g(c,"foundExtremes");c.beforePadding&&
c.beforePadding();c.adjustForMinRange();!(n||c.axisPointRange||c.usePercentage||q)&&r(c.min)&&r(c.max)&&(f=c.max-c.min)&&(!r(B)&&I&&(c.min-=f*I),!r(D)&&G&&(c.max+=f*G));v(l.softMin)&&(c.min=Math.min(c.min,l.softMin));v(l.softMax)&&(c.max=Math.max(c.max,l.softMax));v(l.floor)&&(c.min=Math.max(c.min,l.floor));v(l.ceiling)&&(c.max=Math.min(c.max,l.ceiling));t&&r(c.dataMin)&&(K=K||0,!r(B)&&c.min<K&&c.dataMin>=K?c.min=K:!r(D)&&c.max>K&&c.dataMax<=K&&(c.max=K));c.tickInterval=c.min===c.max||void 0===c.min||
void 0===c.max?1:q&&!A&&H===c.linkedParent.options.tickPixelInterval?A=c.linkedParent.tickInterval:w(A,this.tickAmount?(c.max-c.min)/Math.max(this.tickAmount-1,1):void 0,n?1:(c.max-c.min)*H/Math.max(c.len,H));p&&!k&&m(c.series,function(a){a.processData(c.min!==c.oldMin||c.max!==c.oldMax)});c.setAxisTranslation(!0);c.beforeSetTickPositions&&c.beforeSetTickPositions();c.postProcessTickInterval&&(c.tickInterval=c.postProcessTickInterval(c.tickInterval));c.pointRange&&!A&&(c.tickInterval=Math.max(c.pointRange,
c.tickInterval));k=w(l.minTickInterval,c.isDatetimeAxis&&c.closestPointRange);!A&&c.tickInterval<k&&(c.tickInterval=k);y||e||A||(c.tickInterval=J(c.tickInterval,null,d(c.tickInterval),w(l.allowDecimals,!(.5<c.tickInterval&&5>c.tickInterval&&1E3<c.max&&9999>c.max)),!!this.tickAmount));this.tickAmount||(c.tickInterval=c.unsquish());this.setTickPositions()},setTickPositions:function(){var a=this.options,c,b=a.tickPositions,l=a.tickPositioner,d=a.startOnTick,e=a.endOnTick;this.tickmarkOffset=this.categories&&
"between"===a.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===a.minorTickInterval&&this.tickInterval?this.tickInterval/5:a.minorTickInterval;this.single=this.min===this.max&&r(this.min)&&!this.tickAmount&&(parseInt(this.min,10)===this.min||!1!==a.allowDecimals);this.tickPositions=c=b&&b.slice();!c&&(c=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,a.units),this.min,this.max,a.startOfWeek,this.ordinalPositions,this.closestPointRange,
!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),c.length>this.len&&(c=[c[0],c.pop()]),this.tickPositions=c,l&&(l=l.apply(this,[this.min,this.max])))&&(this.tickPositions=c=l);this.paddedTicks=c.slice(0);this.trimTicks(c,d,e);this.isLinked||(this.single&&(this.min-=.5,this.max+=.5),b||l||this.adjustTickAmount())},trimTicks:function(a,c,b){var k=a[0],l=a[a.length-1],d=this.minPointOffset||0;if(!this.isLinked){if(c&&
-Infinity!==k)this.min=k;else for(;this.min-d>a[0];)a.shift();if(b)this.max=l;else for(;this.max+d<a[a.length-1];)a.pop();0===a.length&&r(k)&&a.push((l+k)/2)}},alignToOthers:function(){var a={},c,b=this.options;!1===this.chart.options.chart.alignTicks||!1===b.alignTicks||this.isLog||m(this.chart[this.coll],function(k){var b=k.options,b=[k.horiz?b.left:b.top,b.width,b.height,b.pane].join();k.series.length&&(a[b]?c=!0:a[b]=1)});return c},getTickAmount:function(){var a=this.options,c=a.tickAmount,b=
a.tickPixelInterval;!r(a.tickInterval)&&this.len<b&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(c=2);!c&&this.alignToOthers()&&(c=Math.ceil(this.len/b)+1);4>c&&(this.finalTickAmt=c,c=5);this.tickAmount=c},adjustTickAmount:function(){var a=this.tickInterval,c=this.tickPositions,b=this.tickAmount,l=this.finalTickAmt,d=c&&c.length;if(d<b){for(;c.length<b;)c.push(h(c[c.length-1]+a));this.transA*=(d-1)/(b-1);this.max=c[c.length-1]}else d>b&&(this.tickInterval*=2,this.setTickPositions());
if(r(l)){for(a=b=c.length;a--;)(3===l&&1===a%2||2>=l&&0<a&&a<b-1)&&c.splice(a,1);this.finalTickAmt=void 0}},setScale:function(){var a,c;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();c=this.len!==this.oldAxisLength;m(this.series,function(c){if(c.isDirtyData||c.isDirty||c.xAxis.isDirty)a=!0});c||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.resetStacks&&this.resetStacks(),this.forceRedraw=
!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,this.isDirty||(this.isDirty=c||this.min!==this.oldMin||this.max!==this.oldMax)):this.cleanStacks&&this.cleanStacks()},setExtremes:function(a,c,b,l,d){var k=this,e=k.chart;b=w(b,!0);m(k.series,function(a){delete a.kdTree});d=f(d,{min:a,max:c});g(k,"setExtremes",d,function(){k.userMin=a;k.userMax=c;k.eventArgs=d;b&&e.redraw(l)})},zoom:function(a,c){var k=this.dataMin,b=this.dataMax,l=this.options,
d=Math.min(k,w(l.min,k)),l=Math.max(b,w(l.max,b));if(a!==this.min||c!==this.max)this.allowZoomOutside||(r(k)&&(a<d&&(a=d),a>l&&(a=l)),r(b)&&(c<d&&(c=d),c>l&&(c=l))),this.displayBtn=void 0!==a||void 0!==c,this.setExtremes(a,c,!1,void 0,{trigger:"zoom"});return!0},setAxisSize:function(){var a=this.chart,c=this.options,b=c.offsets||[0,0,0,0],l=this.horiz,d=w(c.width,a.plotWidth-b[3]+b[1]),e=w(c.height,a.plotHeight-b[0]+b[2]),f=w(c.top,a.plotTop+b[0]),c=w(c.left,a.plotLeft+b[3]),b=/%$/;b.test(e)&&(e=
Math.round(parseFloat(e)/100*a.plotHeight));b.test(f)&&(f=Math.round(parseFloat(f)/100*a.plotHeight+a.plotTop));this.left=c;this.top=f;this.width=d;this.height=e;this.bottom=a.chartHeight-e-f;this.right=a.chartWidth-d-c;this.len=Math.max(l?d:e,0);this.pos=l?c:f},getExtremes:function(){var a=this.isLog,c=this.lin2log;return{min:a?h(c(this.min)):this.min,max:a?h(c(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var c=
this.isLog,k=this.lin2log,b=c?k(this.min):this.min,c=c?k(this.max):this.max;null===a?a=b:b>a?a=b:c<a&&(a=c);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(w(a,0)-90*this.side+720)%360;return 15<a&&165>a?"right":195<a&&345>a?"left":"center"},tickSize:function(a){var c=this.options,k=c[a+"Length"],b=w(c[a+"Width"],"tick"===a&&this.isXAxis?1:0);if(b&&k)return"inside"===c[a+"Position"]&&(k=-k),[k,b]},labelMetrics:function(){var a=this.tickPositions&&this.tickPositions[0]||0;return this.chart.renderer.fontMetrics(this.options.labels.style&&
this.options.labels.style.fontSize,this.ticks[a]&&this.ticks[a].label)},unsquish:function(){var a=this.options.labels,c=this.horiz,b=this.tickInterval,l=b,d=this.len/(((this.categories?1:0)+this.max-this.min)/b),e,f=a.rotation,y=this.labelMetrics(),p,g=Number.MAX_VALUE,v,q=function(a){a/=d||1;a=1<a?Math.ceil(a):1;return a*b};c?(v=!a.staggerLines&&!a.step&&(r(f)?[f]:d<w(a.autoRotationLimit,80)&&a.autoRotation))&&m(v,function(a){var c;if(a===f||a&&-90<=a&&90>=a)p=q(Math.abs(y.h/Math.sin(x*a))),c=p+
Math.abs(a/360),c<g&&(g=c,e=a,l=p)}):a.step||(l=q(y.h));this.autoRotation=v;this.labelRotation=w(e,f);return l},getSlotWidth:function(){var a=this.chart,c=this.horiz,b=this.options.labels,l=Math.max(this.tickPositions.length-(this.categories?0:1),1),d=a.margin[3];return c&&2>(b.step||0)&&!b.rotation&&(this.staggerLines||1)*this.len/l||!c&&(d&&d-a.spacing[3]||.33*a.chartWidth)},renderUnsquish:function(){var a=this.chart,c=a.renderer,b=this.tickPositions,l=this.ticks,d=this.options.labels,e=this.horiz,
f=this.getSlotWidth(),y=Math.max(1,Math.round(f-2*(d.padding||5))),p={},g=this.labelMetrics(),v=d.style&&d.style.textOverflow,G,w=0,I,A;H(d.rotation)||(p.rotation=d.rotation||0);m(b,function(a){(a=l[a])&&a.labelLength>w&&(w=a.labelLength)});this.maxLabelLength=w;if(this.autoRotation)w>y&&w>g.h?p.rotation=this.labelRotation:this.labelRotation=0;else if(f&&(G={width:y+"px"},!v))for(G.textOverflow="clip",I=b.length;!e&&I--;)if(A=b[I],y=l[A].label)y.styles&&"ellipsis"===y.styles.textOverflow?y.css({textOverflow:"clip"}):
l[A].labelLength>f&&y.css({width:f+"px"}),y.getBBox().height>this.len/b.length-(g.h-g.f)&&(y.specCss={textOverflow:"ellipsis"});p.rotation&&(G={width:(w>.5*a.chartHeight?.33*a.chartHeight:a.chartHeight)+"px"},v||(G.textOverflow="ellipsis"));if(this.labelAlign=d.align||this.autoLabelAlign(this.labelRotation))p.align=this.labelAlign;m(b,function(a){var c=(a=l[a])&&a.label;c&&(c.attr(p),G&&c.css(q(G,c.specCss)),delete c.specCss,a.rotation=p.rotation)});this.tickRotCorr=c.rotCorr(g.b,this.labelRotation||
0,0!==this.side)},hasData:function(){return this.hasVisibleSeries||r(this.min)&&r(this.max)&&!!this.tickPositions},addTitle:function(a){var c=this.chart.renderer,k=this.horiz,b=this.opposite,l=this.options.title,d;this.axisTitle||((d=l.textAlign)||(d=(k?{low:"left",middle:"center",high:"right"}:{low:b?"right":"left",middle:"center",high:b?"left":"right"})[l.align]),this.axisTitle=c.text(l.text,0,0,l.useHTML).attr({zIndex:7,rotation:l.rotation||0,align:d}).addClass("highcharts-axis-title").css(l.style).add(this.axisGroup),
this.axisTitle.isNew=!0);this.axisTitle[a?"show":"hide"](!0)},generateTick:function(a){var c=this.ticks;c[a]?c[a].addLabel():c[a]=new l(this,a)},getOffset:function(){var a=this,b=a.chart,l=b.renderer,d=a.options,e=a.tickPositions,f=a.ticks,y=a.horiz,p=a.side,g=b.inverted&&!a.isZAxis?[1,0,3,2][p]:p,v,q,G=0,I,A=0,h=d.title,H=d.labels,n=0,K=b.axisOffset,b=b.clipOffset,J=[-1,1,1,-1][p],t=d.className,u=a.axisParent,x=this.tickSize("tick");v=a.hasData();a.showAxis=q=v||w(d.showEmpty,!0);a.staggerLines=
a.horiz&&H.staggerLines;a.axisGroup||(a.gridGroup=l.g("grid").attr({zIndex:d.gridZIndex||1}).addClass("highcharts-"+this.coll.toLowerCase()+"-grid "+(t||"")).add(u),a.axisGroup=l.g("axis").attr({zIndex:d.zIndex||2}).addClass("highcharts-"+this.coll.toLowerCase()+" "+(t||"")).add(u),a.labelGroup=l.g("axis-labels").attr({zIndex:H.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels "+(t||"")).add(u));v||a.isLinked?(m(e,function(c,b){a.generateTick(c,b)}),a.renderUnsquish(),!1===H.reserveSpace||
0!==p&&2!==p&&{1:"left",3:"right"}[p]!==a.labelAlign&&"center"!==a.labelAlign||m(e,function(a){n=Math.max(f[a].getLabelSize(),n)}),a.staggerLines&&(n*=a.staggerLines,a.labelOffset=n*(a.opposite?-1:1))):c(f,function(a,c){a.destroy();delete f[c]});h&&h.text&&!1!==h.enabled&&(a.addTitle(q),q&&!1!==h.reserveSpace&&(a.titleOffset=G=a.axisTitle.getBBox()[y?"height":"width"],I=h.offset,A=r(I)?0:w(h.margin,y?5:10)));a.renderLine();a.offset=J*w(d.offset,K[p]);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};l=0===p?
-a.labelMetrics().h:2===p?a.tickRotCorr.y:0;A=Math.abs(n)+A;n&&(A=A-l+J*(y?w(H.y,a.tickRotCorr.y+8*J):H.x));a.axisTitleMargin=w(I,A);K[p]=Math.max(K[p],a.axisTitleMargin+G+J*a.offset,A,v&&e.length&&x?x[0]+J*a.offset:0);e=2*Math.floor(a.axisLine.strokeWidth()/2);0<d.offset&&(e-=2*d.offset);b[g]=Math.max(b[g]||e,e)},getLinePath:function(a){var c=this.chart,b=this.opposite,k=this.offset,l=this.horiz,d=this.left+(b?this.width:0)+k,k=c.chartHeight-this.bottom-(b?this.height:0)+k;b&&(a*=-1);return c.renderer.crispLine(["M",
l?this.left:d,l?k:this.top,"L",l?c.chartWidth-this.right:d,l?k:c.chartHeight-this.bottom],a)},renderLine:function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,zIndex:7}))},getTitlePosition:function(){var a=this.horiz,c=this.left,b=this.top,l=this.len,d=this.options.title,e=a?c:b,f=this.opposite,y=this.offset,p=d.x||0,g=d.y||0,v=this.chart.renderer.fontMetrics(d.style&&
d.style.fontSize,this.axisTitle).f,l={low:e+(a?0:l),middle:e+l/2,high:e+(a?l:0)}[d.align],c=(a?b+this.height:c)+(a?1:-1)*(f?-1:1)*this.axisTitleMargin+(2===this.side?v:0);return{x:a?l+p:c+(f?this.width:0)+y+p,y:a?c+g-(f?this.height:0)+y:l+g}},renderMinorTick:function(a){var c=this.chart.hasRendered&&v(this.oldMin),b=this.minorTicks;b[a]||(b[a]=new l(this,a,"minor"));c&&b[a].isNew&&b[a].render(null,!0);b[a].render(null,!1,1)},renderTick:function(a,c){var b=this.isLinked,k=this.ticks,d=this.chart.hasRendered&&
v(this.oldMin);if(!b||a>=this.min&&a<=this.max)k[a]||(k[a]=new l(this,a)),d&&k[a].isNew&&k[a].render(c,!0,.1),k[a].render(c)},render:function(){var b=this,d=b.chart,e=b.options,f=b.isLog,y=b.lin2log,p=b.isLinked,g=b.tickPositions,q=b.axisTitle,w=b.ticks,I=b.minorTicks,A=b.alternateBands,h=e.stackLabels,H=e.alternateGridColor,n=b.tickmarkOffset,K=b.axisLine,J=b.showAxis,r=B(d.renderer.globalAnimation),t,u;b.labelEdge.length=0;b.overlap=!1;m([w,I,A],function(a){c(a,function(a){a.isActive=!1})});if(b.hasData()||
p)b.minorTickInterval&&!b.categories&&m(b.getMinorTickPositions(),function(a){b.renderMinorTick(a)}),g.length&&(m(g,function(a,c){b.renderTick(a,c)}),n&&(0===b.min||b.single)&&(w[-1]||(w[-1]=new l(b,-1,null,!0)),w[-1].render(-1))),H&&m(g,function(c,l){u=void 0!==g[l+1]?g[l+1]+n:b.max-n;0===l%2&&c<b.max&&u<=b.max+(d.polar?-n:n)&&(A[c]||(A[c]=new a.PlotLineOrBand(b)),t=c+n,A[c].options={from:f?y(t):t,to:f?y(u):u,color:H},A[c].render(),A[c].isActive=!0)}),b._addedPlotLB||(m((e.plotLines||[]).concat(e.plotBands||
[]),function(a){b.addPlotBandOrLine(a)}),b._addedPlotLB=!0);m([w,I,A],function(a){var b,l=[],k=r.duration;c(a,function(a,c){a.isActive||(a.render(c,!1,0),a.isActive=!1,l.push(c))});G(function(){for(b=l.length;b--;)a[l[b]]&&!a[l[b]].isActive&&(a[l[b]].destroy(),delete a[l[b]])},a!==A&&d.hasRendered&&k?k:0)});K&&(K[K.isPlaced?"animate":"attr"]({d:this.getLinePath(K.strokeWidth())}),K.isPlaced=!0,K[J?"show":"hide"](!0));q&&J&&(e=b.getTitlePosition(),v(e.y)?(q[q.isNew?"attr":"animate"](e),q.isNew=!1):
(q.attr("y",-9999),q.isNew=!0));h&&h.enabled&&b.renderStackTotals();b.isDirty=!1},redraw:function(){this.visible&&(this.render(),m(this.plotLinesAndBands,function(a){a.render()}));m(this.series,function(a){a.isDirty=!0})},keepProps:"extKey hcEvents names series userMax userMin".split(" "),destroy:function(a){var l=this,k=l.stacks,d=l.plotLinesAndBands,e;a||K(l);c(k,function(a,c){t(a);k[c]=null});m([l.ticks,l.minorTicks,l.alternateBands],function(a){t(a)});if(d)for(a=d.length;a--;)d[a].destroy();m("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross".split(" "),
function(a){l[a]&&(l[a]=l[a].destroy())});for(e in l.plotLinesAndBandsGroups)l.plotLinesAndBandsGroups[e]=l.plotLinesAndBandsGroups[e].destroy();c(l,function(a,c){-1===b(c,l.keepProps)&&delete l[c]})},drawCrosshair:function(a,c){var b,l=this.crosshair,k=w(l.snap,!0),d,e=this.cross;a||(a=this.cross&&this.cross.e);this.crosshair&&!1!==(r(c)||!k)?(k?r(c)&&(d=this.isXAxis?c.plotX:this.len-c.plotY):d=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos),r(d)&&(b=this.getPlotLinePath(c&&(this.isXAxis?
c.x:w(c.stackY,c.y)),null,null,null,d)||null),r(b)?(c=this.categories&&!this.isRadial,e||(this.cross=e=this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+(c?"category ":"thin ")+l.className).attr({zIndex:w(l.zIndex,2)}).add(),e.attr({stroke:l.color||(c?n("#ccd6eb").setOpacity(.25).get():"#cccccc"),"stroke-width":w(l.width,1)}),l.dashStyle&&e.attr({dashstyle:l.dashStyle})),e.show().attr({d:b}),c&&!l.width&&e.attr({"stroke-width":this.transA}),this.cross.e=a):this.hideCrosshair()):
this.hideCrosshair()},hideCrosshair:function(){this.cross&&this.cross.hide()}});return a.Axis=I}(L);(function(a){var E=a.Axis,B=a.Date,F=a.dateFormat,D=a.defaultOptions,n=a.defined,h=a.each,u=a.extend,r=a.getMagnitude,x=a.getTZOffset,t=a.normalizeTickInterval,m=a.pick,f=a.timeUnits;E.prototype.getTimeTicks=function(a,e,d,p){var b=[],g={},v=D.global.useUTC,H,q=new B(e-Math.max(x(e),x(d))),J=B.hcMakeTime,c=a.unitRange,w=a.count,K;if(n(e)){q[B.hcSetMilliseconds](c>=f.second?0:w*Math.floor(q.getMilliseconds()/
w));if(c>=f.second)q[B.hcSetSeconds](c>=f.minute?0:w*Math.floor(q.getSeconds()/w));if(c>=f.minute)q[B.hcSetMinutes](c>=f.hour?0:w*Math.floor(q[B.hcGetMinutes]()/w));if(c>=f.hour)q[B.hcSetHours](c>=f.day?0:w*Math.floor(q[B.hcGetHours]()/w));if(c>=f.day)q[B.hcSetDate](c>=f.month?1:w*Math.floor(q[B.hcGetDate]()/w));c>=f.month&&(q[B.hcSetMonth](c>=f.year?0:w*Math.floor(q[B.hcGetMonth]()/w)),H=q[B.hcGetFullYear]());if(c>=f.year)q[B.hcSetFullYear](H-H%w);if(c===f.week)q[B.hcSetDate](q[B.hcGetDate]()-q[B.hcGetDay]()+
m(p,1));H=q[B.hcGetFullYear]();p=q[B.hcGetMonth]();var y=q[B.hcGetDate](),G=q[B.hcGetHours]();if(B.hcTimezoneOffset||B.hcGetTimezoneOffset)K=(!v||!!B.hcGetTimezoneOffset)&&(d-e>4*f.month||x(e)!==x(d)),q=q.getTime(),q=new B(q+x(q));v=q.getTime();for(e=1;v<d;)b.push(v),v=c===f.year?J(H+e*w,0):c===f.month?J(H,p+e*w):!K||c!==f.day&&c!==f.week?K&&c===f.hour?J(H,p,y,G+e*w):v+c*w:J(H,p,y+e*w*(c===f.day?1:7)),e++;b.push(v);c<=f.hour&&1E4>b.length&&h(b,function(a){0===a%18E5&&"000000000"===F("%H%M%S%L",a)&&
(g[a]="day")})}b.info=u(a,{higherRanks:g,totalRange:c*w});return b};E.prototype.normalizeTimeTickInterval=function(a,e){var d=e||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]];e=d[d.length-1];var p=f[e[0]],b=e[1],g;for(g=0;g<d.length&&!(e=d[g],p=f[e[0]],b=e[1],d[g+1]&&a<=(p*b[b.length-1]+f[d[g+1][0]])/2);g++);p===f.year&&a<5*p&&(b=[1,2,5]);a=t(a/p,b,
"year"===e[0]?Math.max(r(a/p),1):1);return{unitRange:p,count:a,unitName:e[0]}}})(L);(function(a){var E=a.Axis,B=a.getMagnitude,F=a.map,D=a.normalizeTickInterval,n=a.pick;E.prototype.getLogTickPositions=function(a,u,r,x){var h=this.options,m=this.len,f=this.lin2log,g=this.log2lin,e=[];x||(this._minorAutoInterval=null);if(.5<=a)a=Math.round(a),e=this.getLinearTickPositions(a,u,r);else if(.08<=a)for(var m=Math.floor(u),d,p,b,A,v,h=.3<a?[1,2,4]:.15<a?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];m<r+1&&!v;m++)for(p=
h.length,d=0;d<p&&!v;d++)b=g(f(m)*h[d]),b>u&&(!x||A<=r)&&void 0!==A&&e.push(A),A>r&&(v=!0),A=b;else u=f(u),r=f(r),a=h[x?"minorTickInterval":"tickInterval"],a=n("auto"===a?null:a,this._minorAutoInterval,h.tickPixelInterval/(x?5:1)*(r-u)/((x?m/this.tickPositions.length:m)||1)),a=D(a,null,B(a)),e=F(this.getLinearTickPositions(a,u,r),g),x||(this._minorAutoInterval=a/5);x||(this.tickInterval=a);return e};E.prototype.log2lin=function(a){return Math.log(a)/Math.LN10};E.prototype.lin2log=function(a){return Math.pow(10,
a)}})(L);(function(a,E){var B=a.arrayMax,F=a.arrayMin,D=a.defined,n=a.destroyObjectProperties,h=a.each,u=a.erase,r=a.merge,x=a.pick;a.PlotLineOrBand=function(a,m){this.axis=a;m&&(this.options=m,this.id=m.id)};a.PlotLineOrBand.prototype={render:function(){var h=this,m=h.axis,f=m.horiz,g=h.options,e=g.label,d=h.label,p=g.to,b=g.from,A=g.value,v=D(b)&&D(p),H=D(A),q=h.svgElem,n=!q,c=[],w=g.color,K=x(g.zIndex,0),y=g.events,c={"class":"highcharts-plot-"+(v?"band ":"line ")+(g.className||"")},G={},l=m.chart.renderer,
I=v?"bands":"lines",k=m.log2lin;m.isLog&&(b=k(b),p=k(p),A=k(A));H?(c={stroke:w,"stroke-width":g.width},g.dashStyle&&(c.dashstyle=g.dashStyle)):v&&(w&&(c.fill=w),g.borderWidth&&(c.stroke=g.borderColor,c["stroke-width"]=g.borderWidth));G.zIndex=K;I+="-"+K;(w=m.plotLinesAndBandsGroups[I])||(m.plotLinesAndBandsGroups[I]=w=l.g("plot-"+I).attr(G).add());n&&(h.svgElem=q=l.path().attr(c).add(w));if(H)c=m.getPlotLinePath(A,q.strokeWidth());else if(v)c=m.getPlotBandPath(b,p,g);else return;n&&c&&c.length?(q.attr({d:c}),
y&&a.objectEach(y,function(a,c){q.on(c,function(a){y[c].apply(h,[a])})})):q&&(c?(q.show(),q.animate({d:c})):(q.hide(),d&&(h.label=d=d.destroy())));e&&D(e.text)&&c&&c.length&&0<m.width&&0<m.height&&!c.flat?(e=r({align:f&&v&&"center",x:f?!v&&4:10,verticalAlign:!f&&v&&"middle",y:f?v?16:10:v?6:-4,rotation:f&&!v&&90},e),this.renderLabel(e,c,v,K)):d&&d.hide();return h},renderLabel:function(a,m,f,g){var e=this.label,d=this.axis.chart.renderer;e||(e={align:a.textAlign||a.align,rotation:a.rotation,"class":"highcharts-plot-"+
(f?"band":"line")+"-label "+(a.className||"")},e.zIndex=g,this.label=e=d.text(a.text,0,0,a.useHTML).attr(e).add(),e.css(a.style));g=[m[1],m[4],f?m[6]:m[1]];m=[m[2],m[5],f?m[7]:m[2]];f=F(g);d=F(m);e.align(a,!1,{x:f,y:d,width:B(g)-f,height:B(m)-d});e.show()},destroy:function(){u(this.axis.plotLinesAndBands,this);delete this.axis;n(this)}};a.extend(E.prototype,{getPlotBandPath:function(a,m){var f=this.getPlotLinePath(m,null,null,!0),g=this.getPlotLinePath(a,null,null,!0),e=this.horiz,d=1;a=a<this.min&&
m<this.min||a>this.max&&m>this.max;g&&f?(a&&(g.flat=g.toString()===f.toString(),d=0),g.push(e&&f[4]===g[4]?f[4]+d:f[4],e||f[5]!==g[5]?f[5]:f[5]+d,e&&f[1]===g[1]?f[1]+d:f[1],e||f[2]!==g[2]?f[2]:f[2]+d)):g=null;return g},addPlotBand:function(a){return this.addPlotBandOrLine(a,"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,"plotLines")},addPlotBandOrLine:function(h,m){var f=(new a.PlotLineOrBand(this,h)).render(),g=this.userOptions;f&&(m&&(g[m]=g[m]||[],g[m].push(h)),this.plotLinesAndBands.push(f));
return f},removePlotBandOrLine:function(a){for(var m=this.plotLinesAndBands,f=this.options,g=this.userOptions,e=m.length;e--;)m[e].id===a&&m[e].destroy();h([f.plotLines||[],g.plotLines||[],f.plotBands||[],g.plotBands||[]],function(d){for(e=d.length;e--;)d[e].id===a&&u(d,d[e])})},removePlotBand:function(a){this.removePlotBandOrLine(a)},removePlotLine:function(a){this.removePlotBandOrLine(a)}})})(L,T);(function(a){var E=a.dateFormat,B=a.each,F=a.extend,D=a.format,n=a.isNumber,h=a.map,u=a.merge,r=a.pick,
x=a.splat,t=a.syncTimeout,m=a.timeUnits;a.Tooltip=function(){this.init.apply(this,arguments)};a.Tooltip.prototype={init:function(a,g){this.chart=a;this.options=g;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=g.split&&!a.inverted;this.shared=g.shared||this.split},cleanSplit:function(a){B(this.chart.series,function(f){var e=f&&f.tt;e&&(!e.isActive||a?f.tt=e.destroy():e.isActive=!1)})},getLabel:function(){var a=this.chart.renderer,g=this.options;this.label||(this.split?this.label=
a.g("tooltip"):(this.label=a.label("",0,0,g.shape||"callout",null,null,g.useHTML,null,"tooltip").attr({padding:g.padding,r:g.borderRadius}),this.label.attr({fill:g.backgroundColor,"stroke-width":g.borderWidth}).css(g.style).shadow(g.shadow)),this.label.attr({zIndex:8}).add());return this.label},update:function(a){this.destroy();u(!0,this.chart.options.tooltip.userOptions,a);this.init(this.chart,u(!0,this.options,a))},destroy:function(){this.label&&(this.label=this.label.destroy());this.split&&this.tt&&
(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());clearTimeout(this.hideTimer);clearTimeout(this.tooltipTimeout)},move:function(a,g,e,d){var f=this,b=f.now,m=!1!==f.options.animation&&!f.isHidden&&(1<Math.abs(a-b.x)||1<Math.abs(g-b.y)),v=f.followPointer||1<f.len;F(b,{x:m?(2*b.x+a)/3:a,y:m?(b.y+g)/2:g,anchorX:v?void 0:m?(2*b.anchorX+e)/3:e,anchorY:v?void 0:m?(b.anchorY+d)/2:d});f.getLabel().attr(b);m&&(clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){f&&f.move(a,
g,e,d)},32))},hide:function(a){var f=this;clearTimeout(this.hideTimer);a=r(a,this.options.hideDelay,500);this.isHidden||(this.hideTimer=t(function(){f.getLabel()[a?"fadeOut":"hide"]();f.isHidden=!0},a))},getAnchor:function(a,g){var e,d=this.chart,f=d.inverted,b=d.plotTop,m=d.plotLeft,v=0,H=0,q,n;a=x(a);e=a[0].tooltipPos;this.followPointer&&g&&(void 0===g.chartX&&(g=d.pointer.normalize(g)),e=[g.chartX-d.plotLeft,g.chartY-b]);e||(B(a,function(a){q=a.series.yAxis;n=a.series.xAxis;v+=a.plotX+(!f&&n?n.left-
m:0);H+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!f&&q?q.top-b:0)}),v/=a.length,H/=a.length,e=[f?d.plotWidth-H:v,this.shared&&!f&&1<a.length&&g?g.chartY-b:f?d.plotHeight-v:H]);return h(e,Math.round)},getPosition:function(a,g,e){var d=this.chart,f=this.distance,b={},m=e.h||0,v,h=["y",d.chartHeight,g,e.plotY+d.plotTop,d.plotTop,d.plotTop+d.plotHeight],q=["x",d.chartWidth,a,e.plotX+d.plotLeft,d.plotLeft,d.plotLeft+d.plotWidth],n=!this.followPointer&&r(e.ttBelow,!d.inverted===!!e.negative),c=function(a,
c,d,k,e,y){var l=d<k-f,p=k+f+d<c,g=k-f-d;k+=f;if(n&&p)b[a]=k;else if(!n&&l)b[a]=g;else if(l)b[a]=Math.min(y-d,0>g-m?g:g-m);else if(p)b[a]=Math.max(e,k+m+d>c?k:k+m);else return!1},w=function(a,c,d,k){var l;k<f||k>c-f?l=!1:b[a]=k<d/2?1:k>c-d/2?c-d-2:k-d/2;return l},K=function(a){var c=h;h=q;q=c;v=a},y=function(){!1!==c.apply(0,h)?!1!==w.apply(0,q)||v||(K(!0),y()):v?b.x=b.y=0:(K(!0),y())};(d.inverted||1<this.len)&&K();y();return b},defaultFormatter:function(a){var f=this.points||x(this),e;e=[a.tooltipFooterHeaderFormatter(f[0])];
e=e.concat(a.bodyFormatter(f));e.push(a.tooltipFooterHeaderFormatter(f[0],!0));return e},refresh:function(a,g){var e,d=this.options,f,b=a,m,v={},h=[];e=d.formatter||this.defaultFormatter;var v=this.shared,q;clearTimeout(this.hideTimer);this.followPointer=x(b)[0].series.tooltipOptions.followPointer;m=this.getAnchor(b,g);g=m[0];f=m[1];!v||b.series&&b.series.noSharedTooltip?v=b.getLabelConfig():(B(b,function(a){a.setState("hover");h.push(a.getLabelConfig())}),v={x:b[0].category,y:b[0].y},v.points=h,
b=b[0]);this.len=h.length;v=e.call(v,this);q=b.series;this.distance=r(q.tooltipOptions.distance,16);!1===v?this.hide():(e=this.getLabel(),this.isHidden&&e.attr({opacity:1}).show(),this.split?this.renderSplit(v,a):(d.style.width||e.css({width:this.chart.spacingBox.width}),e.attr({text:v&&v.join?v.join(""):v}),e.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+r(b.colorIndex,q.colorIndex)),e.attr({stroke:d.borderColor||b.color||q.color||"#666666"}),this.updatePosition({plotX:g,plotY:f,
negative:b.negative,ttBelow:b.ttBelow,h:m[2]||0})),this.isHidden=!1)},renderSplit:function(f,g){var e=this,d=[],p=this.chart,b=p.renderer,m=!0,v=this.options,h,q=this.getLabel();B(f.slice(0,g.length+1),function(a,c){c=g[c-1]||{isHeader:!0,plotX:g[0].plotX};var f=c.series||e,A=f.tt,y=c.series||{},G="highcharts-color-"+r(c.colorIndex,y.colorIndex,"none");A||(f.tt=A=b.label(null,null,null,"callout").addClass("highcharts-tooltip-box "+G).attr({padding:v.padding,r:v.borderRadius,fill:v.backgroundColor,
stroke:c.color||y.color||"#333333","stroke-width":v.borderWidth}).add(q));A.isActive=!0;A.attr({text:a});A.css(v.style);a=A.getBBox();y=a.width+A.strokeWidth();c.isHeader?(h=a.height,y=Math.max(0,Math.min(c.plotX+p.plotLeft-y/2,p.chartWidth-y))):y=c.plotX+p.plotLeft-r(v.distance,16)-y;0>y&&(m=!1);a=(c.series&&c.series.yAxis&&c.series.yAxis.pos)+(c.plotY||0);a-=p.plotTop;d.push({target:c.isHeader?p.plotHeight+h:a,rank:c.isHeader?1:0,size:f.tt.getBBox().height+1,point:c,x:y,tt:A})});this.cleanSplit();
a.distribute(d,p.plotHeight+h);B(d,function(a){var c=a.point,b=c.series;a.tt.attr({visibility:void 0===a.pos?"hidden":"inherit",x:m||c.isHeader?a.x:c.plotX+p.plotLeft+r(v.distance,16),y:a.pos+p.plotTop,anchorX:c.isHeader?c.plotX+p.plotLeft:c.plotX+b.xAxis.pos,anchorY:c.isHeader?a.pos+p.plotTop-15:c.plotY+b.yAxis.pos})})},updatePosition:function(a){var f=this.chart,e=this.getLabel(),e=(this.options.positioner||this.getPosition).call(this,e.width,e.height,a);this.move(Math.round(e.x),Math.round(e.y||
0),a.plotX+f.plotLeft,a.plotY+f.plotTop)},getDateFormat:function(a,g,e,d){var f=E("%m-%d %H:%M:%S.%L",g),b,A,v={millisecond:15,second:12,minute:9,hour:6,day:3},h="millisecond";for(A in m){if(a===m.week&&+E("%w",g)===e&&"00:00:00.000"===f.substr(6)){A="week";break}if(m[A]>a){A=h;break}if(v[A]&&f.substr(v[A])!=="01-01 00:00:00.000".substr(v[A]))break;"week"!==A&&(h=A)}A&&(b=d[A]);return b},getXDateFormat:function(a,g,e){g=g.dateTimeLabelFormats;var d=e&&e.closestPointRange;return(d?this.getDateFormat(d,
a.x,e.options.startOfWeek,g):g.day)||g.year},tooltipFooterHeaderFormatter:function(a,g){var e=g?"footer":"header";g=a.series;var d=g.tooltipOptions,f=d.xDateFormat,b=g.xAxis,m=b&&"datetime"===b.options.type&&n(a.key),e=d[e+"Format"];m&&!f&&(f=this.getXDateFormat(a,d,b));m&&f&&(e=e.replace("{point.key}","{point.key:"+f+"}"));return D(e,{point:a,series:g})},bodyFormatter:function(a){return h(a,function(a){var e=a.series.tooltipOptions;return(e.pointFormatter||a.point.tooltipFormatter).call(a.point,
e.pointFormat)})}}})(L);(function(a){var E=a.addEvent,B=a.attr,F=a.charts,D=a.color,n=a.css,h=a.defined,u=a.doc,r=a.each,x=a.extend,t=a.fireEvent,m=a.offset,f=a.pick,g=a.removeEvent,e=a.splat,d=a.Tooltip,p=a.win;a.Pointer=function(a,d){this.init(a,d)};a.Pointer.prototype={init:function(a,e){this.options=e;this.chart=a;this.runChartClick=e.chart.events&&!!e.chart.events.click;this.pinchDown=[];this.lastValidTouch={};d&&e.tooltip.enabled&&(a.tooltip=new d(a,e.tooltip),this.followTouchMove=f(e.tooltip.followTouchMove,
!0));this.setDOMEvents()},zoomOption:function(a){var b=this.chart,d=b.options.chart,e=d.zoomType||"",b=b.inverted;/touch/.test(a.type)&&(e=f(d.pinchType,e));this.zoomX=a=/x/.test(e);this.zoomY=e=/y/.test(e);this.zoomHor=a&&!b||e&&b;this.zoomVert=e&&!b||a&&b;this.hasZoom=a||e},normalize:function(a,d){var b,e;a=a||p.event;a.target||(a.target=a.srcElement);e=a.touches?a.touches.length?a.touches.item(0):a.changedTouches[0]:a;d||(this.chartPosition=d=m(this.chart.container));void 0===e.pageX?(b=Math.max(a.x,
a.clientX-d.left),d=a.y):(b=e.pageX-d.left,d=e.pageY-d.top);return x(a,{chartX:Math.round(b),chartY:Math.round(d)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};r(this.chart.axes,function(d){b[d.isXAxis?"xAxis":"yAxis"].push({axis:d,value:d.toValue(a[d.horiz?"chartX":"chartY"])})});return b},getKDPoints:function(a,d,e){var b=[],p,g,c;r(a,function(a){p=a.noSharedTooltip&&d;g=!d&&a.directTouch;a.visible&&!g&&f(a.options.enableMouseTracking,!0)&&(c=a.searchPoint(e,!p&&0>a.options.findNearestPointBy.indexOf("y")))&&
c.series&&b.push(c)});b.sort(function(a,c){var b=a.distX-c.distX,e=a.dist-c.dist,l=(c.series.group&&c.series.group.zIndex)-(a.series.group&&a.series.group.zIndex);return 0!==b&&d?b:0!==e?e:0!==l?l:a.series.index>c.series.index?-1:1});if(d&&b[0]&&!b[0].series.noSharedTooltip)for(a=b.length;a--;)(b[a].x!==b[0].x||b[a].series.noSharedTooltip)&&b.splice(a,1);return b},getPointFromEvent:function(a){a=a.target;for(var b;a&&!b;)b=a.point,a=a.parentNode;return b},getChartCoordinatesFromPoint:function(a,d){var b=
a.series,e=b.xAxis,b=b.yAxis;if(e&&b)return d?{chartX:e.len+e.pos-a.clientX,chartY:b.len+b.pos-a.plotY}:{chartX:a.clientX+e.pos,chartY:a.plotY+b.pos}},getHoverData:function(b,d,e,f,p,g){var c=b,v=d,c=p?e:[v];f=!(!f||!b);d=v&&!v.stickyTracking;var q=function(a,c){return 0===c},y;f?q=function(a){return a===b}:d?q=function(a){return a.series===v}:c=a.grep(e,function(a){return a.stickyTracking});y=f&&!p?[b]:this.getKDPoints(c,p,g);v=(c=a.find(y,q))&&c.series;f||d||!p||(y=this.getKDPoints(e,p,g));y.sort(function(a,
c){return a.series.index-c.series.index});return{hoverPoint:c,hoverSeries:v,hoverPoints:y}},runPointActions:function(b,d){var e=this.chart,p=e.tooltip,g=p?p.shared:!1,m=d||e.hoverPoint,c=m&&m.series||e.hoverSeries;d=this.getHoverData(m,c,e.series,!!d||c&&c.directTouch&&this.isDirectTouch,g,b);var w,h,m=d.hoverPoint;w=(c=d.hoverSeries)&&c.tooltipOptions.followPointer;h=(g=g&&m&&!m.series.noSharedTooltip)?d.hoverPoints:m?[m]:[];if(m&&(m!==e.hoverPoint||p&&p.isHidden)){r(e.hoverPoints||[],function(c){-1===
a.inArray(c,h)&&c.setState()});r(h||[],function(a){a.setState("hover")});if(e.hoverSeries!==c)c.onMouseOver();e.hoverPoint&&e.hoverPoint.firePointEvent("mouseOut");m.firePointEvent("mouseOver");e.hoverPoints=h;e.hoverPoint=m;p&&p.refresh(g?h:m,b)}else w&&p&&!p.isHidden&&(c=p.getAnchor([{}],b),p.updatePosition({plotX:c[0],plotY:c[1]}));this.unDocMouseMove||(this.unDocMouseMove=E(u,"mousemove",function(c){var b=F[a.hoverChartIndex];if(b)b.pointer.onDocumentMouseMove(c)}));r(e.axes,function(c){f(c.crosshair.snap,
!0)?a.find(h,function(a){return a.series[c.coll]===c})?c.drawCrosshair(b,m):c.hideCrosshair():c.drawCrosshair(b)})},reset:function(a,d){var b=this.chart,f=b.hoverSeries,p=b.hoverPoint,g=b.hoverPoints,c=b.tooltip,m=c&&c.shared?g:p;a&&m&&r(e(m),function(c){c.series.isCartesian&&void 0===c.plotX&&(a=!1)});if(a)c&&m&&(c.refresh(m),p&&(p.setState(p.state,!0),r(b.axes,function(a){a.crosshair&&a.drawCrosshair(null,p)})));else{if(p)p.onMouseOut();g&&r(g,function(a){a.setState()});if(f)f.onMouseOut();c&&c.hide(d);
this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());r(b.axes,function(a){a.hideCrosshair()});this.hoverX=b.hoverPoints=b.hoverPoint=null}},scaleGroups:function(a,d){var b=this.chart,e;r(b.series,function(f){e=a||f.getPlotBox();f.xAxis&&f.xAxis.zoomEnabled&&f.group&&(f.group.attr(e),f.markerGroup&&(f.markerGroup.attr(e),f.markerGroup.clip(d?b.clipRect:null)),f.dataLabelsGroup&&f.dataLabelsGroup.attr(e))});b.clipRect.attr(d||b.clipBox)},dragStart:function(a){var b=this.chart;b.mouseIsDown=
a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=this.chart,d=b.options.chart,e=a.chartX,f=a.chartY,p=this.zoomHor,c=this.zoomVert,g=b.plotLeft,m=b.plotTop,y=b.plotWidth,G=b.plotHeight,l,I=this.selectionMarker,k=this.mouseDownX,z=this.mouseDownY,h=d.panKey&&a[d.panKey+"Key"];I&&I.touch||(e<g?e=g:e>g+y&&(e=g+y),f<m?f=m:f>m+G&&(f=m+G),this.hasDragged=Math.sqrt(Math.pow(k-e,2)+Math.pow(z-f,2)),10<this.hasDragged&&(l=b.isInsidePlot(k-
g,z-m),b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&l&&!h&&!I&&(this.selectionMarker=I=b.renderer.rect(g,m,p?1:y,c?1:G,0).attr({fill:d.selectionMarkerFill||D("#335cad").setOpacity(.25).get(),"class":"highcharts-selection-marker",zIndex:7}).add()),I&&p&&(e-=k,I.attr({width:Math.abs(e),x:(0<e?0:e)+k})),I&&c&&(e=f-z,I.attr({height:Math.abs(e),y:(0<e?0:e)+z})),l&&!I&&d.panning&&b.pan(a,d.panning)))},drop:function(a){var b=this,d=this.chart,e=this.hasPinched;if(this.selectionMarker){var f={originalEvent:a,
xAxis:[],yAxis:[]},p=this.selectionMarker,c=p.attr?p.attr("x"):p.x,g=p.attr?p.attr("y"):p.y,m=p.attr?p.attr("width"):p.width,y=p.attr?p.attr("height"):p.height,G;if(this.hasDragged||e)r(d.axes,function(l){if(l.zoomEnabled&&h(l.min)&&(e||b[{xAxis:"zoomX",yAxis:"zoomY"}[l.coll]])){var d=l.horiz,k="touchend"===a.type?l.minPixelPadding:0,p=l.toValue((d?c:g)+k),d=l.toValue((d?c+m:g+y)-k);f[l.coll].push({axis:l,min:Math.min(p,d),max:Math.max(p,d)});G=!0}}),G&&t(d,"selection",f,function(a){d.zoom(x(a,e?
{animation:!1}:null))});this.selectionMarker=this.selectionMarker.destroy();e&&this.scaleGroups()}d&&(n(d.container,{cursor:d._cursor}),d.cancelClick=10<this.hasDragged,d.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[])},onContainerMouseDown:function(a){a=this.normalize(a);this.zoomOption(a);a.preventDefault&&a.preventDefault();this.dragStart(a)},onDocumentMouseUp:function(b){F[a.hoverChartIndex]&&F[a.hoverChartIndex].pointer.drop(b)},onDocumentMouseMove:function(a){var b=this.chart,
d=this.chartPosition;a=this.normalize(a,d);!d||this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)||this.reset()},onContainerMouseLeave:function(b){var d=F[a.hoverChartIndex];d&&(b.relatedTarget||b.toElement)&&(d.pointer.reset(),d.pointer.chartPosition=null)},onContainerMouseMove:function(b){var d=this.chart;h(a.hoverChartIndex)&&F[a.hoverChartIndex]&&F[a.hoverChartIndex].mouseIsDown||(a.hoverChartIndex=d.index);b=this.normalize(b);b.returnValue=!1;
"mousedown"===d.mouseIsDown&&this.drag(b);!this.inClass(b.target,"highcharts-tracker")&&!d.isInsidePlot(b.chartX-d.plotLeft,b.chartY-d.plotTop)||d.openMenu||this.runPointActions(b)},inClass:function(a,d){for(var b;a;){if(b=B(a,"class")){if(-1!==b.indexOf(d))return!0;if(-1!==b.indexOf("highcharts-container"))return!1}a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries;a=a.relatedTarget||a.toElement;this.isDirectTouch=!1;if(!(!b||!a||b.stickyTracking||this.inClass(a,"highcharts-tooltip")||
this.inClass(a,"highcharts-series-"+b.index)&&this.inClass(a,"highcharts-tracker")))b.onMouseOut()},onContainerClick:function(a){var b=this.chart,d=b.hoverPoint,e=b.plotLeft,f=b.plotTop;a=this.normalize(a);b.cancelClick||(d&&this.inClass(a.target,"highcharts-tracker")?(t(d.series,"click",x(a,{point:d})),b.hoverPoint&&d.firePointEvent("click",a)):(x(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-e,a.chartY-f)&&t(b,"click",a)))},setDOMEvents:function(){var b=this,d=b.chart.container;d.onmousedown=
function(a){b.onContainerMouseDown(a)};d.onmousemove=function(a){b.onContainerMouseMove(a)};d.onclick=function(a){b.onContainerClick(a)};E(d,"mouseleave",b.onContainerMouseLeave);1===a.chartCount&&E(u,"mouseup",b.onDocumentMouseUp);a.hasTouch&&(d.ontouchstart=function(a){b.onContainerTouchStart(a)},d.ontouchmove=function(a){b.onContainerTouchMove(a)},1===a.chartCount&&E(u,"touchend",b.onDocumentTouchEnd))},destroy:function(){var b=this;b.unDocMouseMove&&b.unDocMouseMove();g(b.chart.container,"mouseleave",
b.onContainerMouseLeave);a.chartCount||(g(u,"mouseup",b.onDocumentMouseUp),g(u,"touchend",b.onDocumentTouchEnd));clearInterval(b.tooltipTimeout);a.objectEach(b,function(a,d){b[d]=null})}}})(L);(function(a){var E=a.charts,B=a.each,F=a.extend,D=a.map,n=a.noop,h=a.pick;F(a.Pointer.prototype,{pinchTranslate:function(a,h,n,t,m,f){this.zoomHor&&this.pinchTranslateDirection(!0,a,h,n,t,m,f);this.zoomVert&&this.pinchTranslateDirection(!1,a,h,n,t,m,f)},pinchTranslateDirection:function(a,h,n,t,m,f,g,e){var d=
this.chart,p=a?"x":"y",b=a?"X":"Y",A="chart"+b,v=a?"width":"height",H=d["plot"+(a?"Left":"Top")],q,r,c=e||1,w=d.inverted,K=d.bounds[a?"h":"v"],y=1===h.length,G=h[0][A],l=n[0][A],I=!y&&h[1][A],k=!y&&n[1][A],z;n=function(){!y&&20<Math.abs(G-I)&&(c=e||Math.abs(l-k)/Math.abs(G-I));r=(H-l)/c+G;q=d["plot"+(a?"Width":"Height")]/c};n();h=r;h<K.min?(h=K.min,z=!0):h+q>K.max&&(h=K.max-q,z=!0);z?(l-=.8*(l-g[p][0]),y||(k-=.8*(k-g[p][1])),n()):g[p]=[l,k];w||(f[p]=r-H,f[v]=q);f=w?1/c:c;m[v]=q;m[p]=h;t[w?a?"scaleY":
"scaleX":"scale"+b]=c;t["translate"+b]=f*H+(l-f*G)},pinch:function(a){var r=this,u=r.chart,t=r.pinchDown,m=a.touches,f=m.length,g=r.lastValidTouch,e=r.hasZoom,d=r.selectionMarker,p={},b=1===f&&(r.inClass(a.target,"highcharts-tracker")&&u.runTrackerClick||r.runChartClick),A={};1<f&&(r.initiated=!0);e&&r.initiated&&!b&&a.preventDefault();D(m,function(a){return r.normalize(a)});"touchstart"===a.type?(B(m,function(a,b){t[b]={chartX:a.chartX,chartY:a.chartY}}),g.x=[t[0].chartX,t[1]&&t[1].chartX],g.y=[t[0].chartY,
t[1]&&t[1].chartY],B(u.axes,function(a){if(a.zoomEnabled){var b=u.bounds[a.horiz?"h":"v"],d=a.minPixelPadding,e=a.toPixels(h(a.options.min,a.dataMin)),c=a.toPixels(h(a.options.max,a.dataMax)),f=Math.max(e,c);b.min=Math.min(a.pos,Math.min(e,c)-d);b.max=Math.max(a.pos+a.len,f+d)}}),r.res=!0):r.followTouchMove&&1===f?this.runPointActions(r.normalize(a)):t.length&&(d||(r.selectionMarker=d=F({destroy:n,touch:!0},u.plotBox)),r.pinchTranslate(t,m,p,d,A,g),r.hasPinched=e,r.scaleGroups(p,A),r.res&&(r.res=
!1,this.reset(!1,0)))},touch:function(n,r){var u=this.chart,t,m;if(u.index!==a.hoverChartIndex)this.onContainerMouseLeave({relatedTarget:!0});a.hoverChartIndex=u.index;1===n.touches.length?(n=this.normalize(n),(m=u.isInsidePlot(n.chartX-u.plotLeft,n.chartY-u.plotTop))&&!u.openMenu?(r&&this.runPointActions(n),"touchmove"===n.type&&(r=this.pinchDown,t=r[0]?4<=Math.sqrt(Math.pow(r[0].chartX-n.chartX,2)+Math.pow(r[0].chartY-n.chartY,2)):!1),h(t,!0)&&this.pinch(n)):r&&this.reset()):2===n.touches.length&&
this.pinch(n)},onContainerTouchStart:function(a){this.zoomOption(a);this.touch(a,!0)},onContainerTouchMove:function(a){this.touch(a)},onDocumentTouchEnd:function(h){E[a.hoverChartIndex]&&E[a.hoverChartIndex].pointer.drop(h)}})})(L);(function(a){var E=a.addEvent,B=a.charts,F=a.css,D=a.doc,n=a.extend,h=a.noop,u=a.Pointer,r=a.removeEvent,x=a.win,t=a.wrap;if(!a.hasTouch&&(x.PointerEvent||x.MSPointerEvent)){var m={},f=!!x.PointerEvent,g=function(){var d=[];d.item=function(a){return this[a]};a.objectEach(m,
function(a){d.push({pageX:a.pageX,pageY:a.pageY,target:a.target})});return d},e=function(d,e,b,f){"touch"!==d.pointerType&&d.pointerType!==d.MSPOINTER_TYPE_TOUCH||!B[a.hoverChartIndex]||(f(d),f=B[a.hoverChartIndex].pointer,f[e]({type:b,target:d.currentTarget,preventDefault:h,touches:g()}))};n(u.prototype,{onContainerPointerDown:function(a){e(a,"onContainerTouchStart","touchstart",function(a){m[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},onContainerPointerMove:function(a){e(a,
"onContainerTouchMove","touchmove",function(a){m[a.pointerId]={pageX:a.pageX,pageY:a.pageY};m[a.pointerId].target||(m[a.pointerId].target=a.currentTarget)})},onDocumentPointerUp:function(a){e(a,"onDocumentTouchEnd","touchend",function(a){delete m[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,f?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,f?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(D,f?"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});
t(u.prototype,"init",function(a,e,b){a.call(this,e,b);this.hasZoom&&F(e.container,{"-ms-touch-action":"none","touch-action":"none"})});t(u.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(E)});t(u.prototype,"destroy",function(a){this.batchMSEvents(r);a.call(this)})}})(L);(function(a){var E=a.addEvent,B=a.css,F=a.discardElement,D=a.defined,n=a.each,h=a.isFirefox,u=a.marginNames,r=a.merge,x=a.pick,t=a.setAnimation,m=a.stableSort,f=a.win,g=a.wrap;
a.Legend=function(a,d){this.init(a,d)};a.Legend.prototype={init:function(a,d){this.chart=a;this.setOptions(d);d.enabled&&(this.render(),E(this.chart,"endResize",function(){this.legend.positionCheckboxes()}))},setOptions:function(a){var d=x(a.padding,8);this.options=a;this.itemStyle=a.itemStyle;this.itemHiddenStyle=r(this.itemStyle,a.itemHiddenStyle);this.itemMarginTop=a.itemMarginTop||0;this.padding=d;this.initialItemY=d-5;this.itemHeight=this.maxItemWidth=0;this.symbolWidth=x(a.symbolWidth,16);this.pages=
[]},update:function(a,d){var e=this.chart;this.setOptions(r(!0,this.options,a));this.destroy();e.isDirtyLegend=e.isDirtyBox=!0;x(d,!0)&&e.redraw()},colorizeItem:function(e,d){e.legendGroup[d?"removeClass":"addClass"]("highcharts-legend-item-hidden");var f=this.options,b=e.legendItem,g=e.legendLine,m=e.legendSymbol,h=this.itemHiddenStyle.color,f=d?f.itemStyle.color:h,q=d?e.color||h:h,n=e.options&&e.options.marker,c={fill:q};b&&b.css({fill:f,color:f});g&&g.attr({stroke:q});m&&(n&&m.isMarker&&(c=e.pointAttribs(),
d||a.objectEach(c,function(a,b){c[b]=h})),m.attr(c))},positionItem:function(a){var d=this.options,e=d.symbolPadding,d=!d.rtl,b=a._legendItemPos,f=b[0],b=b[1],g=a.checkbox;(a=a.legendGroup)&&a.element&&a.translate(d?f:this.legendWidth-f-2*e-4,b);g&&(g.x=f,g.y=b)},destroyItem:function(a){var d=a.checkbox;n(["legendItem","legendLine","legendSymbol","legendGroup"],function(d){a[d]&&(a[d]=a[d].destroy())});d&&F(a.checkbox)},destroy:function(){function a(a){this[a]&&(this[a]=this[a].destroy())}n(this.getAllItems(),
function(d){n(["legendItem","legendGroup"],a,d)});n("clipRect up down pager nav box title group".split(" "),a,this);this.display=null},positionCheckboxes:function(a){var d=this.group&&this.group.alignAttr,e,b=this.clipHeight||this.legendHeight,f=this.titleHeight;d&&(e=d.translateY,n(this.allItems,function(g){var p=g.checkbox,m;p&&(m=e+f+p.y+(a||0)+3,B(p,{left:d.translateX+g.checkboxOffset+p.x-20+"px",top:m+"px",display:m>e-6&&m<e+b-6?"":"none"}))}))},renderTitle:function(){var a=this.options,d=this.padding,
f=a.title,b=0;f.text&&(this.title||(this.title=this.chart.renderer.label(f.text,d-3,d-4,null,null,null,a.useHTML,null,"legend-title").attr({zIndex:1}).css(f.style).add(this.group)),a=this.title.getBBox(),b=a.height,this.offsetWidth=a.width,this.contentGroup.attr({translateY:b}));this.titleHeight=b},setText:function(e){var d=this.options;e.legendItem.attr({text:d.labelFormat?a.format(d.labelFormat,e):d.labelFormatter.call(e)})},renderItem:function(a){var d=this.chart,e=d.renderer,b=this.options,f=
"horizontal"===b.layout,g=this.symbolWidth,m=b.symbolPadding,q=this.itemStyle,h=this.itemHiddenStyle,c=this.padding,w=f?x(b.itemDistance,20):0,n=!b.rtl,y=b.width,G=b.itemMarginBottom||0,l=this.itemMarginTop,I=a.legendItem,k=!a.series,z=!k&&a.series.drawLegendSymbol?a.series:a,u=z.options,M=this.createCheckboxForItem&&u&&u.showCheckbox,u=g+m+w+(M?20:0),t=b.useHTML,P=a.options.className;I||(a.legendGroup=e.g("legend-item").addClass("highcharts-"+z.type+"-series highcharts-color-"+a.colorIndex+(P?" "+
P:"")+(k?" highcharts-series-"+a.index:"")).attr({zIndex:1}).add(this.scrollGroup),a.legendItem=I=e.text("",n?g+m:-m,this.baseline||0,t).css(r(a.visible?q:h)).attr({align:n?"left":"right",zIndex:2}).add(a.legendGroup),this.baseline||(g=q.fontSize,this.fontMetrics=e.fontMetrics(g,I),this.baseline=this.fontMetrics.f+3+l,I.attr("y",this.baseline)),this.symbolHeight=b.symbolHeight||this.fontMetrics.f,z.drawLegendSymbol(this,a),this.setItemEvents&&this.setItemEvents(a,I,t),M&&this.createCheckboxForItem(a));
this.colorizeItem(a,a.visible);q.width||I.css({width:(b.itemWidth||d.spacingBox.width)-u});this.setText(a);e=I.getBBox();q=a.checkboxOffset=b.itemWidth||a.legendItemWidth||e.width+u;this.itemHeight=e=Math.round(a.legendItemHeight||e.height||this.symbolHeight);f&&this.itemX-c+q>(y||d.spacingBox.width-2*c-b.x)&&(this.itemX=c,this.itemY+=l+this.lastLineHeight+G,this.lastLineHeight=0);this.maxItemWidth=Math.max(this.maxItemWidth,q);this.lastItemY=l+this.itemY+G;this.lastLineHeight=Math.max(e,this.lastLineHeight);
a._legendItemPos=[this.itemX,this.itemY];f?this.itemX+=q:(this.itemY+=l+e+G,this.lastLineHeight=e);this.offsetWidth=y||Math.max((f?this.itemX-c-w:q)+c,this.offsetWidth)},getAllItems:function(){var a=[];n(this.chart.series,function(d){var e=d&&d.options;d&&x(e.showInLegend,D(e.linkedTo)?!1:void 0,!0)&&(a=a.concat(d.legendItems||("point"===e.legendType?d.data:d)))});return a},adjustMargins:function(a,d){var e=this.chart,b=this.options,f=b.align.charAt(0)+b.verticalAlign.charAt(0)+b.layout.charAt(0);
b.floating||n([/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/],function(g,p){g.test(f)&&!D(a[p])&&(e[u[p]]=Math.max(e[u[p]],e.legend[(p+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][p]*b[p%2?"x":"y"]+x(b.margin,12)+d[p]))})},render:function(){var a=this,d=a.chart,f=d.renderer,b=a.group,g,h,H,q,u=a.box,c=a.options,w=a.padding;a.itemX=w;a.itemY=a.initialItemY;a.offsetWidth=0;a.lastItemY=0;b||(a.group=b=f.g("legend").attr({zIndex:7}).add(),a.contentGroup=f.g().attr({zIndex:1}).add(b),a.scrollGroup=
f.g().add(a.contentGroup));a.renderTitle();g=a.getAllItems();m(g,function(a,c){return(a.options&&a.options.legendIndex||0)-(c.options&&c.options.legendIndex||0)});c.reversed&&g.reverse();a.allItems=g;a.display=h=!!g.length;a.lastLineHeight=0;n(g,function(c){a.renderItem(c)});H=(c.width||a.offsetWidth)+w;q=a.lastItemY+a.lastLineHeight+a.titleHeight;q=a.handleOverflow(q);q+=w;u||(a.box=u=f.rect().addClass("highcharts-legend-box").attr({r:c.borderRadius}).add(b),u.isNew=!0);u.attr({stroke:c.borderColor,
"stroke-width":c.borderWidth||0,fill:c.backgroundColor||"none"}).shadow(c.shadow);0<H&&0<q&&(u[u.isNew?"attr":"animate"](u.crisp({x:0,y:0,width:H,height:q},u.strokeWidth())),u.isNew=!1);u[h?"show":"hide"]();a.legendWidth=H;a.legendHeight=q;n(g,function(c){a.positionItem(c)});h&&b.align(r(c,{width:H,height:q}),!0,"spacingBox");d.isResizing||this.positionCheckboxes()},handleOverflow:function(a){var d=this,e=this.chart,b=e.renderer,f=this.options,g=f.y,m=this.padding,e=e.spacingBox.height+("top"===f.verticalAlign?
-g:g)-m,g=f.maxHeight,q,h=this.clipRect,c=f.navigation,w=x(c.animation,!0),r=c.arrowSize||12,y=this.nav,G=this.pages,l,I=this.allItems,k=function(a){"number"===typeof a?h.attr({height:a}):h&&(d.clipRect=h.destroy(),d.contentGroup.clip());d.contentGroup.div&&(d.contentGroup.div.style.clip=a?"rect("+m+"px,9999px,"+(m+a)+"px,0)":"auto")};"horizontal"!==f.layout||"middle"===f.verticalAlign||f.floating||(e/=2);g&&(e=Math.min(e,g));G.length=0;a>e&&!1!==c.enabled?(this.clipHeight=q=Math.max(e-20-this.titleHeight-
m,0),this.currentPage=x(this.currentPage,1),this.fullHeight=a,n(I,function(a,c){var b=a._legendItemPos[1];a=Math.round(a.legendItem.getBBox().height);var d=G.length;if(!d||b-G[d-1]>q&&(l||b)!==G[d-1])G.push(l||b),d++;c===I.length-1&&b+a-G[d-1]>q&&G.push(b);b!==l&&(l=b)}),h||(h=d.clipRect=b.clipRect(0,m,9999,0),d.contentGroup.clip(h)),k(q),y||(this.nav=y=b.g().attr({zIndex:1}).add(this.group),this.up=b.symbol("triangle",0,0,r,r).on("click",function(){d.scroll(-1,w)}).add(y),this.pager=b.text("",15,
10).addClass("highcharts-legend-navigation").css(c.style).add(y),this.down=b.symbol("triangle-down",0,0,r,r).on("click",function(){d.scroll(1,w)}).add(y)),d.scroll(0),a=e):y&&(k(),this.nav=y.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return a},scroll:function(a,d){var e=this.pages,b=e.length;a=this.currentPage+a;var f=this.clipHeight,g=this.options.navigation,m=this.pager,q=this.padding;a>b&&(a=b);0<a&&(void 0!==d&&t(d,this.chart),this.nav.attr({translateX:q,translateY:f+this.padding+
7+this.titleHeight,visibility:"visible"}),this.up.attr({"class":1===a?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),m.attr({text:a+"/"+b}),this.down.attr({x:18+this.pager.getBBox().width,"class":a===b?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),this.up.attr({fill:1===a?g.inactiveColor:g.activeColor}).css({cursor:1===a?"default":"pointer"}),this.down.attr({fill:a===b?g.inactiveColor:g.activeColor}).css({cursor:a===b?"default":"pointer"}),d=-e[a-1]+this.initialItemY,
this.scrollGroup.animate({translateY:d}),this.currentPage=a,this.positionCheckboxes(d))}};a.LegendSymbolMixin={drawRectangle:function(a,d){var e=a.symbolHeight,b=a.options.squareSymbol;d.legendSymbol=this.chart.renderer.rect(b?(a.symbolWidth-e)/2:0,a.baseline-e+1,b?e:a.symbolWidth,e,x(a.options.symbolRadius,e/2)).addClass("highcharts-point").attr({zIndex:3}).add(d.legendGroup)},drawLineMarker:function(a){var d=this.options,e=d.marker,b=a.symbolWidth,f=a.symbolHeight,g=f/2,m=this.chart.renderer,q=
this.legendGroup;a=a.baseline-Math.round(.3*a.fontMetrics.b);var h;h={"stroke-width":d.lineWidth||0};d.dashStyle&&(h.dashstyle=d.dashStyle);this.legendLine=m.path(["M",0,a,"L",b,a]).addClass("highcharts-graph").attr(h).add(q);e&&!1!==e.enabled&&(d=Math.min(x(e.radius,g),g),0===this.symbol.indexOf("url")&&(e=r(e,{width:f,height:f}),d=0),this.legendSymbol=e=m.symbol(this.symbol,b/2-d,a-d,2*d,2*d,e).addClass("highcharts-point").add(q),e.isMarker=!0)}};(/Trident\/7\.0/.test(f.navigator.userAgent)||h)&&
g(a.Legend.prototype,"positionItem",function(a,d){var e=this,b=function(){d._legendItemPos&&a.call(e,d)};b();setTimeout(b)})})(L);(function(a){var E=a.addEvent,B=a.animate,F=a.animObject,D=a.attr,n=a.doc,h=a.Axis,u=a.createElement,r=a.defaultOptions,x=a.discardElement,t=a.charts,m=a.css,f=a.defined,g=a.each,e=a.extend,d=a.find,p=a.fireEvent,b=a.getStyle,A=a.grep,v=a.isNumber,H=a.isObject,q=a.isString,J=a.Legend,c=a.marginNames,w=a.merge,K=a.objectEach,y=a.Pointer,G=a.pick,l=a.pInt,I=a.removeEvent,
k=a.seriesTypes,z=a.splat,Q=a.svg,M=a.syncTimeout,N=a.win,P=a.Renderer,O=a.Chart=function(){this.getArgs.apply(this,arguments)};a.chart=function(a,c,b){return new O(a,c,b)};e(O.prototype,{callbacks:[],getArgs:function(){var a=[].slice.call(arguments);if(q(a[0])||a[0].nodeName)this.renderTo=a.shift();this.init(a[0],a[1])},init:function(c,b){var l,d,k=c.series,e=c.plotOptions||{};c.series=null;l=w(r,c);for(d in l.plotOptions)l.plotOptions[d].tooltip=e[d]&&w(e[d].tooltip)||void 0;l.tooltip.userOptions=
c.chart&&c.chart.forExport&&c.tooltip.userOptions||c.tooltip;l.series=c.series=k;this.userOptions=c;c=l.chart;d=c.events;this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.callback=b;this.isResizing=0;this.options=l;this.axes=[];this.series=[];this.hasCartesianSeries=c.showAxes;var f=this;f.index=t.length;t.push(f);a.chartCount++;d&&K(d,function(a,c){E(f,c,a)});f.xAxis=[];f.yAxis=[];f.pointCount=f.colorCounter=f.symbolCounter=0;f.firstRender()},initSeries:function(c){var b=this.options.chart;
(b=k[c.type||b.type||b.defaultSeriesType])||a.error(17,!0);b=new b;b.init(this,c);return b},orderSeries:function(a){var c=this.series;for(a=a||0;a<c.length;a++)c[a]&&(c[a].index=a,c[a].name=c[a].name||"Series "+(c[a].index+1))},isInsidePlot:function(a,c,b){var l=b?c:a;a=b?a:c;return 0<=l&&l<=this.plotWidth&&0<=a&&a<=this.plotHeight},redraw:function(c){var b=this.axes,l=this.series,d=this.pointer,k=this.legend,f=this.isDirtyLegend,y,m,G=this.hasCartesianSeries,q=this.isDirtyBox,z,h=this.renderer,w=
h.isHidden(),I=[];this.setResponsive&&this.setResponsive(!1);a.setAnimation(c,this);w&&this.temporaryDisplay();this.layOutTitles();for(c=l.length;c--;)if(z=l[c],z.options.stacking&&(y=!0,z.isDirty)){m=!0;break}if(m)for(c=l.length;c--;)z=l[c],z.options.stacking&&(z.isDirty=!0);g(l,function(a){a.isDirty&&"point"===a.options.legendType&&(a.updateTotals&&a.updateTotals(),f=!0);a.isDirtyData&&p(a,"updatedData")});f&&k.options.enabled&&(k.render(),this.isDirtyLegend=!1);y&&this.getStacks();G&&g(b,function(a){a.updateNames();
a.setScale()});this.getMargins();G&&(g(b,function(a){a.isDirty&&(q=!0)}),g(b,function(a){var c=a.min+","+a.max;a.extKey!==c&&(a.extKey=c,I.push(function(){p(a,"afterSetExtremes",e(a.eventArgs,a.getExtremes()));delete a.eventArgs}));(q||y)&&a.redraw()}));q&&this.drawChartBox();p(this,"predraw");g(l,function(a){(q||a.isDirty)&&a.visible&&a.redraw();a.isDirtyData=!1});d&&d.reset(!0);h.draw();p(this,"redraw");p(this,"render");w&&this.temporaryDisplay(!0);g(I,function(a){a.call()})},get:function(a){function c(c){return c.id===
a||c.options&&c.options.id===a}var b,l=this.series,k;b=d(this.axes,c)||d(this.series,c);for(k=0;!b&&k<l.length;k++)b=d(l[k].points||[],c);return b},getAxes:function(){var a=this,c=this.options,b=c.xAxis=z(c.xAxis||{}),c=c.yAxis=z(c.yAxis||{});g(b,function(a,c){a.index=c;a.isX=!0});g(c,function(a,c){a.index=c});b=b.concat(c);g(b,function(c){new h(a,c)})},getSelectedPoints:function(){var a=[];g(this.series,function(c){a=a.concat(A(c.data||[],function(a){return a.selected}))});return a},getSelectedSeries:function(){return A(this.series,
function(a){return a.selected})},setTitle:function(a,c,b){var l=this,d=l.options,k;k=d.title=w({style:{color:"#333333",fontSize:d.isStock?"16px":"18px"}},d.title,a);d=d.subtitle=w({style:{color:"#666666"}},d.subtitle,c);g([["title",a,k],["subtitle",c,d]],function(a,c){var b=a[0],d=l[b],k=a[1];a=a[2];d&&k&&(l[b]=d=d.destroy());a&&a.text&&!d&&(l[b]=l.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+b,zIndex:a.zIndex||4}).add(),l[b].update=function(a){l.setTitle(!c&&a,c&&
a)},l[b].css(a.style))});l.layOutTitles(b)},layOutTitles:function(a){var c=0,b,l=this.renderer,d=this.spacingBox;g(["title","subtitle"],function(a){var b=this[a],k=this.options[a];a="title"===a?-3:k.verticalAlign?0:c+2;var f;b&&(f=k.style.fontSize,f=l.fontMetrics(f,b).b,b.css({width:(k.width||d.width+k.widthAdjust)+"px"}).align(e({y:a+f},k),!1,"spacingBox"),k.floating||k.verticalAlign||(c=Math.ceil(c+b.getBBox(k.useHTML).height)))},this);b=this.titleOffset!==c;this.titleOffset=c;!this.isDirtyBox&&
b&&(this.isDirtyBox=b,this.hasRendered&&G(a,!0)&&this.isDirtyBox&&this.redraw())},getChartSize:function(){var c=this.options.chart,l=c.width,c=c.height,d=this.renderTo;f(l)||(this.containerWidth=b(d,"width"));f(c)||(this.containerHeight=b(d,"height"));this.chartWidth=Math.max(0,l||this.containerWidth||600);this.chartHeight=Math.max(0,a.relativeLength(c,this.chartWidth)||this.containerHeight||400)},temporaryDisplay:function(c){var l=this.renderTo;if(c)for(;l&&l.style;)l.hcOrigStyle&&(a.css(l,l.hcOrigStyle),
delete l.hcOrigStyle),l=l.parentNode;else for(;l&&l.style;)"none"===b(l,"display",!1)&&(l.hcOrigStyle={display:l.style.display,height:l.style.height,overflow:l.style.overflow},c={display:"block",overflow:"hidden"},l!==this.renderTo&&(c.height=0),a.css(l,c),l.style.setProperty&&l.style.setProperty("display","block","important")),l=l.parentNode},setClassName:function(a){this.container.className="highcharts-container "+(a||"")},getContainer:function(){var c,b=this.options,d=b.chart,k,f;c=this.renderTo;
var g=a.uniqueKey(),y;c||(this.renderTo=c=d.renderTo);q(c)&&(this.renderTo=c=n.getElementById(c));c||a.error(13,!0);k=l(D(c,"data-highcharts-chart"));v(k)&&t[k]&&t[k].hasRendered&&t[k].destroy();D(c,"data-highcharts-chart",this.index);c.innerHTML="";d.skipClone||c.offsetWidth||this.temporaryDisplay();this.getChartSize();k=this.chartWidth;f=this.chartHeight;y=e({position:"relative",overflow:"hidden",width:k+"px",height:f+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},
d.style);this.container=c=u("div",{id:g},y,c);this._cursor=c.style.cursor;this.renderer=new (a[d.renderer]||P)(c,k,f,null,d.forExport,b.exporting&&b.exporting.allowHTML);this.setClassName(d.className);this.renderer.setStyle(d.style);this.renderer.chartIndex=this.index},getMargins:function(a){var c=this.spacing,b=this.margin,l=this.titleOffset;this.resetMargins();l&&!f(b[0])&&(this.plotTop=Math.max(this.plotTop,l+this.options.title.margin+c[0]));this.legend.display&&this.legend.adjustMargins(b,c);
this.extraMargin&&(this[this.extraMargin.type]=(this[this.extraMargin.type]||0)+this.extraMargin.value);this.extraTopMargin&&(this.plotTop+=this.extraTopMargin);a||this.getAxisMargins()},getAxisMargins:function(){var a=this,b=a.axisOffset=[0,0,0,0],l=a.margin;a.hasCartesianSeries&&g(a.axes,function(a){a.visible&&a.getOffset()});g(c,function(c,d){f(l[d])||(a[c]+=b[d])});a.setChartSize()},reflow:function(a){var c=this,l=c.options.chart,d=c.renderTo,k=f(l.width),e=l.width||b(d,"width"),l=l.height||b(d,
"height"),d=a?a.target:N;if(!k&&!c.isPrinting&&e&&l&&(d===N||d===n)){if(e!==c.containerWidth||l!==c.containerHeight)clearTimeout(c.reflowTimeout),c.reflowTimeout=M(function(){c.container&&c.setSize(void 0,void 0,!1)},a?100:0);c.containerWidth=e;c.containerHeight=l}},initReflow:function(){var a=this,c;c=E(N,"resize",function(c){a.reflow(c)});E(a,"destroy",c)},setSize:function(c,b,l){var d=this,k=d.renderer;d.isResizing+=1;a.setAnimation(l,d);d.oldChartHeight=d.chartHeight;d.oldChartWidth=d.chartWidth;
void 0!==c&&(d.options.chart.width=c);void 0!==b&&(d.options.chart.height=b);d.getChartSize();c=k.globalAnimation;(c?B:m)(d.container,{width:d.chartWidth+"px",height:d.chartHeight+"px"},c);d.setChartSize(!0);k.setSize(d.chartWidth,d.chartHeight,l);g(d.axes,function(a){a.isDirty=!0;a.setScale()});d.isDirtyLegend=!0;d.isDirtyBox=!0;d.layOutTitles();d.getMargins();d.redraw(l);d.oldChartHeight=null;p(d,"resize");M(function(){d&&p(d,"endResize",null,function(){--d.isResizing})},F(c).duration)},setChartSize:function(a){function c(a){a=
y[a]||0;return Math.max(z||a,a)/2}var b=this.inverted,l=this.renderer,d=this.chartWidth,k=this.chartHeight,f=this.options.chart,e=this.spacing,y=this.clipOffset,m,p,G,q,z;this.plotLeft=m=Math.round(this.plotLeft);this.plotTop=p=Math.round(this.plotTop);this.plotWidth=G=Math.max(0,Math.round(d-m-this.marginRight));this.plotHeight=q=Math.max(0,Math.round(k-p-this.marginBottom));this.plotSizeX=b?q:G;this.plotSizeY=b?G:q;this.plotBorderWidth=f.plotBorderWidth||0;this.spacingBox=l.spacingBox={x:e[3],y:e[0],
width:d-e[3]-e[1],height:k-e[0]-e[2]};this.plotBox=l.plotBox={x:m,y:p,width:G,height:q};z=2*Math.floor(this.plotBorderWidth/2);b=Math.ceil(c(3));l=Math.ceil(c(0));this.clipBox={x:b,y:l,width:Math.floor(this.plotSizeX-c(1)-b),height:Math.max(0,Math.floor(this.plotSizeY-c(2)-l))};a||g(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()})},resetMargins:function(){var a=this,b=a.options.chart;g(["margin","spacing"],function(c){var l=b[c],d=H(l)?l:[l,l,l,l];g(["Top","Right","Bottom","Left"],function(l,
k){a[c][k]=G(b[c+l],d[k])})});g(c,function(c,b){a[c]=G(a.margin[b],a.spacing[b])});a.axisOffset=[0,0,0,0];a.clipOffset=[]},drawChartBox:function(){var a=this.options.chart,c=this.renderer,b=this.chartWidth,l=this.chartHeight,d=this.chartBackground,k=this.plotBackground,e=this.plotBorder,f,g=this.plotBGImage,y=a.backgroundColor,m=a.plotBackgroundColor,p=a.plotBackgroundImage,G,q=this.plotLeft,z=this.plotTop,h=this.plotWidth,w=this.plotHeight,I=this.plotBox,v=this.clipRect,n=this.clipBox,r="animate";
d||(this.chartBackground=d=c.rect().addClass("highcharts-background").add(),r="attr");f=a.borderWidth||0;G=f+(a.shadow?8:0);y={fill:y||"none"};if(f||d["stroke-width"])y.stroke=a.borderColor,y["stroke-width"]=f;d.attr(y).shadow(a.shadow);d[r]({x:G/2,y:G/2,width:b-G-f%2,height:l-G-f%2,r:a.borderRadius});r="animate";k||(r="attr",this.plotBackground=k=c.rect().addClass("highcharts-plot-background").add());k[r](I);k.attr({fill:m||"none"}).shadow(a.plotShadow);p&&(g?g.animate(I):this.plotBGImage=c.image(p,
q,z,h,w).add());v?v.animate({width:n.width,height:n.height}):this.clipRect=c.clipRect(n);r="animate";e||(r="attr",this.plotBorder=e=c.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());e.attr({stroke:a.plotBorderColor,"stroke-width":a.plotBorderWidth||0,fill:"none"});e[r](e.crisp({x:q,y:z,width:h,height:w},-e.strokeWidth()));this.isDirtyBox=!1},propFromSeries:function(){var a=this,c=a.options.chart,b,l=a.options.series,d,e;g(["inverted","angular","polar"],function(f){b=k[c.type||c.defaultSeriesType];
e=c[f]||b&&b.prototype[f];for(d=l&&l.length;!e&&d--;)(b=k[l[d].type])&&b.prototype[f]&&(e=!0);a[f]=e})},linkSeries:function(){var a=this,c=a.series;g(c,function(a){a.linkedSeries.length=0});g(c,function(c){var b=c.options.linkedTo;q(b)&&(b=":previous"===b?a.series[c.index-1]:a.get(b))&&b.linkedParent!==c&&(b.linkedSeries.push(c),c.linkedParent=b,c.visible=G(c.options.visible,b.options.visible,c.visible))})},renderSeries:function(){g(this.series,function(a){a.translate();a.render()})},renderLabels:function(){var a=
this,c=a.options.labels;c.items&&g(c.items,function(b){var d=e(c.style,b.style),k=l(d.left)+a.plotLeft,f=l(d.top)+a.plotTop+12;delete d.left;delete d.top;a.renderer.text(b.html,k,f).attr({zIndex:2}).css(d).add()})},render:function(){var a=this.axes,c=this.renderer,b=this.options,l,d,k;this.setTitle();this.legend=new J(this,b.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();b=this.plotWidth;l=this.plotHeight-=21;g(a,function(a){a.setScale()});this.getAxisMargins();d=
1.1<b/this.plotWidth;k=1.05<l/this.plotHeight;if(d||k)g(a,function(a){(a.horiz&&d||!a.horiz&&k)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries&&g(a,function(a){a.visible&&a.render()});this.seriesGroup||(this.seriesGroup=c.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.hasRendered=!0},addCredits:function(a){var c=this;a=w(!0,this.options.credits,a);a.enabled&&!this.credits&&
(this.credits=this.renderer.text(a.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){a.href&&(N.location.href=a.href)}).attr({align:a.position.align,zIndex:8}).css(a.style).add().align(a.position),this.credits.update=function(a){c.credits=c.credits.destroy();c.addCredits(a)})},destroy:function(){var c=this,b=c.axes,d=c.series,l=c.container,k,f=l&&l.parentNode;p(c,"destroy");c.renderer.forExport?a.erase(t,c):t[c.index]=void 0;a.chartCount--;c.renderTo.removeAttribute("data-highcharts-chart");
I(c);for(k=b.length;k--;)b[k]=b[k].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(k=d.length;k--;)d[k]=d[k].destroy();g("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "),function(a){var b=c[a];b&&b.destroy&&(c[a]=b.destroy())});l&&(l.innerHTML="",I(l),f&&x(l));K(c,function(a,b){delete c[b]})},isReadyToRender:function(){var a=this;return Q||N!=N.top||
"complete"===n.readyState?!0:(n.attachEvent("onreadystatechange",function(){n.detachEvent("onreadystatechange",a.firstRender);"complete"===n.readyState&&a.firstRender()}),!1)},firstRender:function(){var a=this,c=a.options;if(a.isReadyToRender()){a.getContainer();p(a,"init");a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();g(c.series||[],function(c){a.initSeries(c)});a.linkSeries();p(a,"beforeRender");y&&(a.pointer=new y(a,c));a.render();if(!a.renderer.imgCount&&a.onload)a.onload();
a.temporaryDisplay(!0)}},onload:function(){g([this.callback].concat(this.callbacks),function(a){a&&void 0!==this.index&&a.apply(this,[this])},this);p(this,"load");p(this,"render");f(this.index)&&!1!==this.options.chart.reflow&&this.initReflow();this.onload=null}})})(L);(function(a){var E,B=a.each,F=a.extend,D=a.erase,n=a.fireEvent,h=a.format,u=a.isArray,r=a.isNumber,x=a.pick,t=a.removeEvent;a.Point=E=function(){};a.Point.prototype={init:function(a,f,g){this.series=a;this.color=a.color;this.applyOptions(f,
g);a.options.colorByPoint?(f=a.options.colors||a.chart.options.colors,this.color=this.color||f[a.colorCounter],f=f.length,g=a.colorCounter,a.colorCounter++,a.colorCounter===f&&(a.colorCounter=0)):g=a.colorIndex;this.colorIndex=x(this.colorIndex,g);a.chart.pointCount++;return this},applyOptions:function(a,f){var g=this.series,e=g.options.pointValKey||g.pointValKey;a=E.prototype.optionsToObject.call(this,a);F(this,a);this.options=this.options?F(this.options,a):a;a.group&&delete this.group;e&&(this.y=
this[e]);this.isNull=x(this.isValid&&!this.isValid(),null===this.x||!r(this.y,!0));this.selected&&(this.state="select");"name"in this&&void 0===f&&g.xAxis&&g.xAxis.hasNames&&(this.x=g.xAxis.nameToX(this));void 0===this.x&&g&&(this.x=void 0===f?g.autoIncrement(this):f);return this},optionsToObject:function(a){var f={},g=this.series,e=g.options.keys,d=e||g.pointArrayMap||["y"],p=d.length,b=0,m=0;if(r(a)||null===a)f[d[0]]=a;else if(u(a))for(!e&&a.length>p&&(g=typeof a[0],"string"===g?f.name=a[0]:"number"===
g&&(f.x=a[0]),b++);m<p;)e&&void 0===a[b]||(f[d[m]]=a[b]),b++,m++;else"object"===typeof a&&(f=a,a.dataLabels&&(g._hasPointLabels=!0),a.marker&&(g._hasPointMarkers=!0));return f},getClassName:function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":"")+(void 0!==this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?
" "+this.zone.className.replace("highcharts-negative",""):"")},getZone:function(){var a=this.series,f=a.zones,a=a.zoneAxis||"y",g=0,e;for(e=f[g];this[a]>=e.value;)e=f[++g];e&&e.color&&!this.options.color&&(this.color=e.color);return e},destroy:function(){var a=this.series.chart,f=a.hoverPoints,g;a.pointCount--;f&&(this.setState(),D(f,this),f.length||(a.hoverPoints=null));if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)t(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);
for(g in this)this[g]=null},destroyElements:function(){for(var a=["graphic","dataLabel","dataLabelUpper","connector","shadowGroup"],f,g=6;g--;)f=a[g],this[f]&&(this[f]=this[f].destroy())},getLabelConfig:function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var f=this.series,g=f.tooltipOptions,e=x(g.valueDecimals,""),
d=g.valuePrefix||"",p=g.valueSuffix||"";B(f.pointArrayMap||["y"],function(b){b="{point."+b;if(d||p)a=a.replace(b+"}",d+b+"}"+p);a=a.replace(b+"}",b+":,."+e+"f}")});return h(a,{point:this,series:this.series})},firePointEvent:function(a,f,g){var e=this,d=this.series.options;(d.point.events[a]||e.options&&e.options.events&&e.options.events[a])&&this.importEvents();"click"===a&&d.allowPointSelect&&(g=function(a){e.select&&e.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});n(this,a,f,g)},visible:!0}})(L);
(function(a){var E=a.addEvent,B=a.animObject,F=a.arrayMax,D=a.arrayMin,n=a.correctFloat,h=a.Date,u=a.defaultOptions,r=a.defaultPlotOptions,x=a.defined,t=a.each,m=a.erase,f=a.extend,g=a.fireEvent,e=a.grep,d=a.isArray,p=a.isNumber,b=a.isString,A=a.merge,v=a.objectEach,H=a.pick,q=a.removeEvent,J=a.splat,c=a.SVGElement,w=a.syncTimeout,K=a.win;a.Series=a.seriesType("line",null,{lineWidth:2,allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},marker:{lineWidth:0,lineColor:"#ffffff",radius:4,
states:{hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return null===this.y?"":a.numberFormat(this.y,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0,padding:5},cropThreshold:300,pointRange:0,softThreshold:!0,states:{hover:{animation:{duration:50},lineWidthPlus:1,marker:{},
halo:{size:10,opacity:.25}},select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3,findNearestPointBy:"x"},{isCartesian:!0,pointClass:a.Point,sorted:!0,requireSorting:!0,directTouch:!1,axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],coll:"series",init:function(a,c){var b=this,d,k=a.series,e;b.chart=a;b.options=c=b.setOptions(c);b.linkedSeries=[];b.bindAxes();f(b,{name:c.name,state:"",visible:!1!==c.visible,selected:!0===c.selected});d=c.events;v(d,function(a,c){E(b,c,a)});if(d&&
d.click||c.point&&c.point.events&&c.point.events.click||c.allowPointSelect)a.runTrackerClick=!0;b.getColor();b.getSymbol();t(b.parallelArrays,function(a){b[a+"Data"]=[]});b.setData(c.data,!1);b.isCartesian&&(a.hasCartesianSeries=!0);k.length&&(e=k[k.length-1]);b._i=H(e&&e._i,-1)+1;a.orderSeries(this.insert(k))},insert:function(a){var c=this.options.index,b;if(p(c)){for(b=a.length;b--;)if(c>=H(a[b].options.index,a[b]._i)){a.splice(b+1,0,this);break}-1===b&&a.unshift(this);b+=1}else a.push(this);return H(b,
a.length-1)},bindAxes:function(){var c=this,b=c.options,d=c.chart,e;t(c.axisTypes||[],function(l){t(d[l],function(a){e=a.options;if(b[l]===e.index||void 0!==b[l]&&b[l]===e.id||void 0===b[l]&&0===e.index)c.insert(a.series),c[l]=a,a.isDirty=!0});c[l]||c.optionalAxis===l||a.error(18,!0)})},updateParallelArrays:function(a,c){var b=a.series,d=arguments,k=p(c)?function(d){var l="y"===d&&b.toYData?b.toYData(a):a[d];b[d+"Data"][c]=l}:function(a){Array.prototype[c].apply(b[a+"Data"],Array.prototype.slice.call(d,
2))};t(b.parallelArrays,k)},autoIncrement:function(){var a=this.options,c=this.xIncrement,b,d=a.pointIntervalUnit,c=H(c,a.pointStart,0);this.pointInterval=b=H(this.pointInterval,a.pointInterval,1);d&&(a=new h(c),"day"===d?a=+a[h.hcSetDate](a[h.hcGetDate]()+b):"month"===d?a=+a[h.hcSetMonth](a[h.hcGetMonth]()+b):"year"===d&&(a=+a[h.hcSetFullYear](a[h.hcGetFullYear]()+b)),b=a-c);this.xIncrement=c+b;return c},setOptions:function(a){var c=this.chart,b=c.options,d=b.plotOptions,k=(c.userOptions||{}).plotOptions||
{},e=d[this.type];this.userOptions=a;c=A(e,d.series,a);this.tooltipOptions=A(u.tooltip,u.plotOptions.series&&u.plotOptions.series.tooltip,u.plotOptions[this.type].tooltip,b.tooltip.userOptions,d.series&&d.series.tooltip,d[this.type].tooltip,a.tooltip);this.stickyTracking=H(a.stickyTracking,k[this.type]&&k[this.type].stickyTracking,k.series&&k.series.stickyTracking,this.tooltipOptions.shared&&!this.noSharedTooltip?!0:c.stickyTracking);null===e.marker&&delete c.marker;this.zoneAxis=c.zoneAxis;a=this.zones=
(c.zones||[]).slice();!c.negativeColor&&!c.negativeFillColor||c.zones||a.push({value:c[this.zoneAxis+"Threshold"]||c.threshold||0,className:"highcharts-negative",color:c.negativeColor,fillColor:c.negativeFillColor});a.length&&x(a[a.length-1].value)&&a.push({color:this.color,fillColor:this.fillColor});return c},getCyclic:function(a,c,b){var d,l=this.chart,e=this.userOptions,f=a+"Index",g=a+"Counter",y=b?b.length:H(l.options.chart[a+"Count"],l[a+"Count"]);c||(d=H(e[f],e["_"+f]),x(d)||(l.series.length||
(l[g]=0),e["_"+f]=d=l[g]%y,l[g]+=1),b&&(c=b[d]));void 0!==d&&(this[f]=d);this[a]=c},getColor:function(){this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||r[this.type].color,this.chart.options.colors)},getSymbol:function(){this.getCyclic("symbol",this.options.marker.symbol,this.chart.options.symbols)},drawLegendSymbol:a.LegendSymbolMixin.drawLineMarker,setData:function(c,e,l,f){var k=this,g=k.points,y=g&&g.length||0,q,m=k.options,h=k.chart,w=null,G=k.xAxis,
I=m.turboThreshold,v=this.xData,n=this.yData,r=(q=k.pointArrayMap)&&q.length;c=c||[];q=c.length;e=H(e,!0);if(!1!==f&&q&&y===q&&!k.cropped&&!k.hasGroupedData&&k.visible)t(c,function(a,c){g[c].update&&a!==m.data[c]&&g[c].update(a,!1,null,!1)});else{k.xIncrement=null;k.colorCounter=0;t(this.parallelArrays,function(a){k[a+"Data"].length=0});if(I&&q>I){for(l=0;null===w&&l<q;)w=c[l],l++;if(p(w))for(l=0;l<q;l++)v[l]=this.autoIncrement(),n[l]=c[l];else if(d(w))if(r)for(l=0;l<q;l++)w=c[l],v[l]=w[0],n[l]=w.slice(1,
r+1);else for(l=0;l<q;l++)w=c[l],v[l]=w[0],n[l]=w[1];else a.error(12)}else for(l=0;l<q;l++)void 0!==c[l]&&(w={series:k},k.pointClass.prototype.applyOptions.apply(w,[c[l]]),k.updateParallelArrays(w,l));b(n[0])&&a.error(14,!0);k.data=[];k.options.data=k.userOptions.data=c;for(l=y;l--;)g[l]&&g[l].destroy&&g[l].destroy();G&&(G.minRange=G.userMinRange);k.isDirty=h.isDirtyBox=!0;k.isDirtyData=!!g;l=!1}"point"===m.legendType&&(this.processData(),this.generatePoints());e&&h.redraw(l)},processData:function(c){var b=
this.xData,d=this.yData,e=b.length,k;k=0;var f,g,y=this.xAxis,p,q=this.options;p=q.cropThreshold;var m=this.getExtremesFromAll||q.getExtremesFromAll,w=this.isCartesian,q=y&&y.val2lin,h=y&&y.isLog,v,n;if(w&&!this.isDirty&&!y.isDirty&&!this.yAxis.isDirty&&!c)return!1;y&&(c=y.getExtremes(),v=c.min,n=c.max);if(w&&this.sorted&&!m&&(!p||e>p||this.forceCrop))if(b[e-1]<v||b[0]>n)b=[],d=[];else if(b[0]<v||b[e-1]>n)k=this.cropData(this.xData,this.yData,v,n),b=k.xData,d=k.yData,k=k.start,f=!0;for(p=b.length||
1;--p;)e=h?q(b[p])-q(b[p-1]):b[p]-b[p-1],0<e&&(void 0===g||e<g)?g=e:0>e&&this.requireSorting&&a.error(15);this.cropped=f;this.cropStart=k;this.processedXData=b;this.processedYData=d;this.closestPointRange=g},cropData:function(a,c,b,d){var l=a.length,e=0,f=l,g=H(this.cropShoulder,1),y;for(y=0;y<l;y++)if(a[y]>=b){e=Math.max(0,y-g);break}for(b=y;b<l;b++)if(a[b]>d){f=b+g;break}return{xData:a.slice(e,f),yData:c.slice(e,f),start:e,end:f}},generatePoints:function(){var a=this.options,c=a.data,b=this.data,
d,k=this.processedXData,e=this.processedYData,f=this.pointClass,g=k.length,p=this.cropStart||0,q,m=this.hasGroupedData,a=a.keys,w,h=[],v;b||m||(b=[],b.length=c.length,b=this.data=b);a&&m&&(this.options.keys=!1);for(v=0;v<g;v++)q=p+v,m?(w=(new f).init(this,[k[v]].concat(J(e[v]))),w.dataGroup=this.groupMap[v]):(w=b[q])||void 0===c[q]||(b[q]=w=(new f).init(this,c[q],k[v])),w&&(w.index=q,h[v]=w);this.options.keys=a;if(b&&(g!==(d=b.length)||m))for(v=0;v<d;v++)v!==p||m||(v+=g),b[v]&&(b[v].destroyElements(),
b[v].plotX=void 0);this.data=b;this.points=h},getExtremes:function(a){var c=this.yAxis,b=this.processedXData,e,k=[],f=0;e=this.xAxis.getExtremes();var g=e.min,y=e.max,q,m,w,h;a=a||this.stackedYData||this.processedYData||[];e=a.length;for(h=0;h<e;h++)if(m=b[h],w=a[h],q=(p(w,!0)||d(w))&&(!c.positiveValuesOnly||w.length||0<w),m=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||(b[h]||m)>=g&&(b[h]||m)<=y,q&&m)if(q=w.length)for(;q--;)null!==w[q]&&(k[f++]=w[q]);else k[f++]=w;this.dataMin=
D(k);this.dataMax=F(k)},translate:function(){this.processedXData||this.processData();this.generatePoints();var a=this.options,c=a.stacking,b=this.xAxis,d=b.categories,k=this.yAxis,e=this.points,f=e.length,g=!!this.modifyValue,q=a.pointPlacement,m="between"===q||p(q),w=a.threshold,h=a.startFromThreshold?w:0,v,r,K,A,u=Number.MAX_VALUE;"between"===q&&(q=.5);p(q)&&(q*=H(a.pointRange||b.pointRange));for(a=0;a<f;a++){var t=e[a],J=t.x,B=t.y;r=t.low;var D=c&&k.stacks[(this.negStacks&&B<(h?0:w)?"-":"")+this.stackKey],
E;k.positiveValuesOnly&&null!==B&&0>=B&&(t.isNull=!0);t.plotX=v=n(Math.min(Math.max(-1E5,b.translate(J,0,0,0,1,q,"flags"===this.type)),1E5));c&&this.visible&&!t.isNull&&D&&D[J]&&(A=this.getStackIndicator(A,J,this.index),E=D[J],B=E.points[A.key],r=B[0],B=B[1],r===h&&A.key===D[J].base&&(r=H(w,k.min)),k.positiveValuesOnly&&0>=r&&(r=null),t.total=t.stackTotal=E.total,t.percentage=E.total&&t.y/E.total*100,t.stackY=B,E.setOffset(this.pointXOffset||0,this.barW||0));t.yBottom=x(r)?k.translate(r,0,1,0,1):
null;g&&(B=this.modifyValue(B,t));t.plotY=r="number"===typeof B&&Infinity!==B?Math.min(Math.max(-1E5,k.translate(B,0,1,0,1)),1E5):void 0;t.isInside=void 0!==r&&0<=r&&r<=k.len&&0<=v&&v<=b.len;t.clientX=m?n(b.translate(J,0,0,0,1,q)):v;t.negative=t.y<(w||0);t.category=d&&void 0!==d[t.x]?d[t.x]:t.x;t.isNull||(void 0!==K&&(u=Math.min(u,Math.abs(v-K))),K=v);t.zone=this.zones.length&&t.getZone()}this.closestPointRangePx=u},getValidPoints:function(a,c){var b=this.chart;return e(a||this.points||[],function(a){return c&&
!b.isInsidePlot(a.plotX,a.plotY,b.inverted)?!1:!a.isNull})},setClip:function(a){var c=this.chart,b=this.options,d=c.renderer,k=c.inverted,e=this.clipBox,f=e||c.clipBox,g=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,f.height,b.xAxis,b.yAxis].join(),p=c[g],q=c[g+"m"];p||(a&&(f.width=0,c[g+"m"]=q=d.clipRect(-99,k?-c.plotLeft:-c.plotTop,99,k?c.chartWidth:c.chartHeight)),c[g]=p=d.clipRect(f),p.count={length:0});a&&!p.count[this.index]&&(p.count[this.index]=!0,p.count.length+=1);!1!==b.clip&&
(this.group.clip(a||e?p:c.clipRect),this.markerGroup.clip(q),this.sharedClipKey=g);a||(p.count[this.index]&&(delete p.count[this.index],--p.count.length),0===p.count.length&&g&&c[g]&&(e||(c[g]=c[g].destroy()),c[g+"m"]&&(c[g+"m"]=c[g+"m"].destroy())))},animate:function(a){var c=this.chart,b=B(this.options.animation),d;a?this.setClip(b):(d=this.sharedClipKey,(a=c[d])&&a.animate({width:c.plotSizeX},b),c[d+"m"]&&c[d+"m"].animate({width:c.plotSizeX+99},b),this.animate=null)},afterAnimate:function(){this.setClip();
g(this,"afterAnimate")},drawPoints:function(){var a=this.points,c=this.chart,b,d,k,e,f=this.options.marker,g,q,m,w,h=this[this.specialGroup]||this.markerGroup,v=H(f.enabled,this.xAxis.isRadial?!0:null,this.closestPointRangePx>=2*f.radius);if(!1!==f.enabled||this._hasPointMarkers)for(d=0;d<a.length;d++)k=a[d],b=k.plotY,e=k.graphic,g=k.marker||{},q=!!k.marker,m=v&&void 0===g.enabled||g.enabled,w=k.isInside,m&&p(b)&&null!==k.y?(b=H(g.symbol,this.symbol),k.hasImage=0===b.indexOf("url"),m=this.markerAttribs(k,
k.selected&&"select"),e?e[w?"show":"hide"](!0).animate(m):w&&(0<m.width||k.hasImage)&&(k.graphic=e=c.renderer.symbol(b,m.x,m.y,m.width,m.height,q?g:f).add(h)),e&&e.attr(this.pointAttribs(k,k.selected&&"select")),e&&e.addClass(k.getClassName(),!0)):e&&(k.graphic=e.destroy())},markerAttribs:function(a,c){var b=this.options.marker,d=a.marker||{},k=H(d.radius,b.radius);c&&(b=b.states[c],c=d.states&&d.states[c],k=H(c&&c.radius,b&&b.radius,k+(b&&b.radiusPlus||0)));a.hasImage&&(k=0);a={x:Math.floor(a.plotX)-
k,y:a.plotY-k};k&&(a.width=a.height=2*k);return a},pointAttribs:function(a,c){var b=this.options.marker,d=a&&a.options,k=d&&d.marker||{},e=this.color,f=d&&d.color,g=a&&a.color,d=H(k.lineWidth,b.lineWidth);a=a&&a.zone&&a.zone.color;e=f||a||g||e;a=k.fillColor||b.fillColor||e;e=k.lineColor||b.lineColor||e;c&&(b=b.states[c],c=k.states&&k.states[c]||{},d=H(c.lineWidth,b.lineWidth,d+H(c.lineWidthPlus,b.lineWidthPlus,0)),a=c.fillColor||b.fillColor||a,e=c.lineColor||b.lineColor||e);return{stroke:e,"stroke-width":d,
fill:a}},destroy:function(){var a=this,b=a.chart,d=/AppleWebKit\/533/.test(K.navigator.userAgent),e,k,f=a.data||[],p,w;g(a,"destroy");q(a);t(a.axisTypes||[],function(c){(w=a[c])&&w.series&&(m(w.series,a),w.isDirty=w.forceRedraw=!0)});a.legendItem&&a.chart.legend.destroyItem(a);for(k=f.length;k--;)(p=f[k])&&p.destroy&&p.destroy();a.points=null;clearTimeout(a.animationTimeout);v(a,function(a,b){a instanceof c&&!a.survive&&(e=d&&"group"===b?"hide":"destroy",a[e]())});b.hoverSeries===a&&(b.hoverSeries=
null);m(b.series,a);b.orderSeries();v(a,function(c,b){delete a[b]})},getGraphPath:function(a,c,b){var d=this,l=d.options,e=l.step,f,g=[],p=[],q;a=a||d.points;(f=a.reversed)&&a.reverse();(e={right:1,center:2}[e]||e&&3)&&f&&(e=4-e);!l.connectNulls||c||b||(a=this.getValidPoints(a));t(a,function(k,f){var m=k.plotX,w=k.plotY,h=a[f-1];(k.leftCliff||h&&h.rightCliff)&&!b&&(q=!0);k.isNull&&!x(c)&&0<f?q=!l.connectNulls:k.isNull&&!c?q=!0:(0===f||q?f=["M",k.plotX,k.plotY]:d.getPointSpline?f=d.getPointSpline(a,
k,f):e?(f=1===e?["L",h.plotX,w]:2===e?["L",(h.plotX+m)/2,h.plotY,"L",(h.plotX+m)/2,w]:["L",m,h.plotY],f.push("L",m,w)):f=["L",m,w],p.push(k.x),e&&p.push(k.x),g.push.apply(g,f),q=!1)});g.xMap=p;return d.graphPath=g},drawGraph:function(){var a=this,c=this.options,b=(this.gappedPath||this.getGraphPath).call(this),d=[["graph","highcharts-graph",c.lineColor||this.color,c.dashStyle]];t(this.zones,function(b,l){d.push(["zone-graph-"+l,"highcharts-graph highcharts-zone-graph-"+l+" "+(b.className||""),b.color||
a.color,b.dashStyle||c.dashStyle])});t(d,function(d,l){var k=d[0],e=a[k];e?(e.endX=b.xMap,e.animate({d:b})):b.length&&(a[k]=a.chart.renderer.path(b).addClass(d[1]).attr({zIndex:1}).add(a.group),e={stroke:d[2],"stroke-width":c.lineWidth,fill:a.fillGraph&&a.color||"none"},d[3]?e.dashstyle=d[3]:"square"!==c.linecap&&(e["stroke-linecap"]=e["stroke-linejoin"]="round"),e=a[k].attr(e).shadow(2>l&&c.shadow));e&&(e.startX=b.xMap,e.isArea=b.isArea)})},applyZones:function(){var a=this,c=this.chart,b=c.renderer,
d=this.zones,k,e,f=this.clips||[],g,p=this.graph,q=this.area,m=Math.max(c.chartWidth,c.chartHeight),w=this[(this.zoneAxis||"y")+"Axis"],h,v,n=c.inverted,r,K,A,u,J=!1;d.length&&(p||q)&&w&&void 0!==w.min&&(v=w.reversed,r=w.horiz,p&&p.hide(),q&&q.hide(),h=w.getExtremes(),t(d,function(d,l){k=v?r?c.plotWidth:0:r?0:w.toPixels(h.min);k=Math.min(Math.max(H(e,k),0),m);e=Math.min(Math.max(Math.round(w.toPixels(H(d.value,h.max),!0)),0),m);J&&(k=e=w.toPixels(h.max));K=Math.abs(k-e);A=Math.min(k,e);u=Math.max(k,
e);w.isXAxis?(g={x:n?u:A,y:0,width:K,height:m},r||(g.x=c.plotHeight-g.x)):(g={x:0,y:n?u:A,width:m,height:K},r&&(g.y=c.plotWidth-g.y));n&&b.isVML&&(g=w.isXAxis?{x:0,y:v?A:u,height:g.width,width:c.chartWidth}:{x:g.y-c.plotLeft-c.spacingBox.x,y:0,width:g.height,height:c.chartHeight});f[l]?f[l].animate(g):(f[l]=b.clipRect(g),p&&a["zone-graph-"+l].clip(f[l]),q&&a["zone-area-"+l].clip(f[l]));J=d.value>h.max}),this.clips=f)},invertGroups:function(a){function c(){t(["group","markerGroup"],function(c){b[c]&&
(d.renderer.isVML&&b[c].attr({width:b.yAxis.len,height:b.xAxis.len}),b[c].width=b.yAxis.len,b[c].height=b.xAxis.len,b[c].invert(a))})}var b=this,d=b.chart,k;b.xAxis&&(k=E(d,"resize",c),E(b,"destroy",k),c(a),b.invertGroups=c)},plotGroup:function(a,c,b,d,k){var l=this[a],e=!l;e&&(this[a]=l=this.chart.renderer.g().attr({zIndex:d||.1}).add(k));l.addClass("highcharts-"+c+" highcharts-series-"+this.index+" highcharts-"+this.type+"-series highcharts-color-"+this.colorIndex+" "+(this.options.className||""),
!0);l.attr({visibility:b})[e?"attr":"animate"](this.getPlotBox());return l},getPlotBox:function(){var a=this.chart,c=this.xAxis,b=this.yAxis;a.inverted&&(c=b,b=this.xAxis);return{translateX:c?c.left:a.plotLeft,translateY:b?b.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,c=a.chart,b,d=a.options,k=!!a.animate&&c.renderer.isSVG&&B(d.animation).duration,e=a.visible?"inherit":"hidden",f=d.zIndex,g=a.hasRendered,p=c.seriesGroup,q=c.inverted;b=a.plotGroup("group","series",e,f,p);a.markerGroup=
a.plotGroup("markerGroup","markers",e,f,p);k&&a.animate(!0);b.inverted=a.isCartesian?q:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.drawDataLabels&&a.drawDataLabels();a.visible&&a.drawPoints();a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(q);!1===d.clip||a.sharedClipKey||g||b.clip(c.clipRect);k&&a.animate();g||(a.animationTimeout=w(function(){a.afterAnimate()},k));a.isDirty=!1;a.hasRendered=!0},redraw:function(){var a=this.chart,c=this.isDirty||this.isDirtyData,
b=this.group,d=this.xAxis,k=this.yAxis;b&&(a.inverted&&b.attr({width:a.plotWidth,height:a.plotHeight}),b.animate({translateX:H(d&&d.left,a.plotLeft),translateY:H(k&&k.top,a.plotTop)}));this.translate();this.render();c&&delete this.kdTree},kdAxisArray:["clientX","plotY"],searchPoint:function(a,c){var b=this.xAxis,d=this.yAxis,k=this.chart.inverted;return this.searchKDTree({clientX:k?b.len-a.chartY+b.pos:a.chartX-b.pos,plotY:k?d.len-a.chartX+d.pos:a.chartY-d.pos},c)},buildKDTree:function(){function a(b,
d,l){var k,e;if(e=b&&b.length)return k=c.kdAxisArray[d%l],b.sort(function(a,c){return a[k]-c[k]}),e=Math.floor(e/2),{point:b[e],left:a(b.slice(0,e),d+1,l),right:a(b.slice(e+1),d+1,l)}}this.buildingKdTree=!0;var c=this,b=-1<c.options.findNearestPointBy.indexOf("y")?2:1;delete c.kdTree;w(function(){c.kdTree=a(c.getValidPoints(null,!c.directTouch),b,b);c.buildingKdTree=!1},c.options.kdNow?0:1)},searchKDTree:function(a,c){function b(a,c,l,g){var p=c.point,q=d.kdAxisArray[l%g],m,w,h=p;w=x(a[k])&&x(p[k])?
Math.pow(a[k]-p[k],2):null;m=x(a[e])&&x(p[e])?Math.pow(a[e]-p[e],2):null;m=(w||0)+(m||0);p.dist=x(m)?Math.sqrt(m):Number.MAX_VALUE;p.distX=x(w)?Math.sqrt(w):Number.MAX_VALUE;q=a[q]-p[q];m=0>q?"left":"right";w=0>q?"right":"left";c[m]&&(m=b(a,c[m],l+1,g),h=m[f]<h[f]?m:p);c[w]&&Math.sqrt(q*q)<h[f]&&(a=b(a,c[w],l+1,g),h=a[f]<h[f]?a:h);return h}var d=this,k=this.kdAxisArray[0],e=this.kdAxisArray[1],f=c?"distX":"dist";c=-1<d.options.findNearestPointBy.indexOf("y")?2:1;this.kdTree||this.buildingKdTree||
this.buildKDTree();if(this.kdTree)return b(a,this.kdTree,c,c)}})})(L);(function(a){function E(a,f,g,e,d){var p=a.chart.inverted;this.axis=a;this.isNegative=g;this.options=f;this.x=e;this.total=null;this.points={};this.stack=d;this.rightCliff=this.leftCliff=0;this.alignOptions={align:f.align||(p?g?"left":"right":"center"),verticalAlign:f.verticalAlign||(p?"middle":g?"bottom":"top"),y:t(f.y,p?4:g?14:-6),x:t(f.x,p?g?-6:6:0)};this.textAlign=f.textAlign||(p?g?"right":"left":"center")}var B=a.Axis,F=a.Chart,
D=a.correctFloat,n=a.defined,h=a.destroyObjectProperties,u=a.each,r=a.format,x=a.objectEach,t=a.pick;a=a.Series;E.prototype={destroy:function(){h(this,this.axis)},render:function(a){var f=this.options,g=f.format,g=g?r(g,this):f.formatter.call(this);this.label?this.label.attr({text:g,visibility:"hidden"}):this.label=this.axis.chart.renderer.text(g,null,null,f.useHTML).css(f.style).attr({align:this.textAlign,rotation:f.rotation,visibility:"hidden"}).add(a)},setOffset:function(a,f){var g=this.axis,e=
g.chart,d=e.inverted,p=g.reversed,p=this.isNegative&&!p||!this.isNegative&&p,b=g.translate(g.usePercentage?100:this.total,0,0,0,1),g=g.translate(0),g=Math.abs(b-g);a=e.xAxis[0].translate(this.x)+a;var m=e.plotHeight,d={x:d?p?b:b-g:a,y:d?m-a-f:p?m-b-g:m-b,width:d?g:f,height:d?f:g};if(f=this.label)f.align(this.alignOptions,null,d),d=f.alignAttr,f[!1===this.options.crop||e.isInsidePlot(d.x,d.y)?"show":"hide"](!0)}};F.prototype.getStacks=function(){var a=this;u(a.yAxis,function(a){a.stacks&&a.hasVisibleSeries&&
(a.oldStacks=a.stacks)});u(a.series,function(f){!f.options.stacking||!0!==f.visible&&!1!==a.options.chart.ignoreHiddenSeries||(f.stackKey=f.type+t(f.options.stack,""))})};B.prototype.buildStacks=function(){var a=this.series,f,g=t(this.options.reversedStacks,!0),e=a.length,d;if(!this.isXAxis){this.usePercentage=!1;for(d=e;d--;)a[g?d:e-d-1].setStackedPoints();for(d=e;d--;)f=a[g?d:e-d-1],f.setStackCliffs&&f.setStackCliffs();if(this.usePercentage)for(d=0;d<e;d++)a[d].setPercentStacks()}};B.prototype.renderStackTotals=
function(){var a=this.chart,f=a.renderer,g=this.stacks,e=this.stackTotalGroup;e||(this.stackTotalGroup=e=f.g("stack-labels").attr({visibility:"visible",zIndex:6}).add());e.translate(a.plotLeft,a.plotTop);x(g,function(a){x(a,function(a){a.render(e)})})};B.prototype.resetStacks=function(){var a=this,f=a.stacks;a.isXAxis||x(f,function(f){x(f,function(e,d){e.touched<a.stacksTouched?(e.destroy(),delete f[d]):(e.total=null,e.cum=null)})})};B.prototype.cleanStacks=function(){var a;this.isXAxis||(this.oldStacks&&
(a=this.stacks=this.oldStacks),x(a,function(a){x(a,function(a){a.cum=a.total})}))};a.prototype.setStackedPoints=function(){if(this.options.stacking&&(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var a=this.processedXData,f=this.processedYData,g=[],e=f.length,d=this.options,p=d.threshold,b=d.startFromThreshold?p:0,h=d.stack,d=d.stacking,v=this.stackKey,r="-"+v,q=this.negStacks,u=this.yAxis,c=u.stacks,w=u.oldStacks,K,y,G,l,I,k,z;u.stacksTouched+=1;for(I=0;I<e;I++)k=a[I],z=f[I],
K=this.getStackIndicator(K,k,this.index),l=K.key,G=(y=q&&z<(b?0:p))?r:v,c[G]||(c[G]={}),c[G][k]||(w[G]&&w[G][k]?(c[G][k]=w[G][k],c[G][k].total=null):c[G][k]=new E(u,u.options.stackLabels,y,k,h)),G=c[G][k],null!==z&&(G.points[l]=G.points[this.index]=[t(G.cum,b)],n(G.cum)||(G.base=l),G.touched=u.stacksTouched,0<K.index&&!1===this.singleStacks&&(G.points[l][0]=G.points[this.index+","+k+",0"][0])),"percent"===d?(y=y?v:r,q&&c[y]&&c[y][k]?(y=c[y][k],G.total=y.total=Math.max(y.total,G.total)+Math.abs(z)||
0):G.total=D(G.total+(Math.abs(z)||0))):G.total=D(G.total+(z||0)),G.cum=t(G.cum,b)+(z||0),null!==z&&(G.points[l].push(G.cum),g[I]=G.cum);"percent"===d&&(u.usePercentage=!0);this.stackedYData=g;u.oldStacks={}}};a.prototype.setPercentStacks=function(){var a=this,f=a.stackKey,g=a.yAxis.stacks,e=a.processedXData,d;u([f,"-"+f],function(f){for(var b=e.length,p,h;b--;)if(p=e[b],d=a.getStackIndicator(d,p,a.index,f),p=(h=g[f]&&g[f][p])&&h.points[d.key])h=h.total?100/h.total:0,p[0]=D(p[0]*h),p[1]=D(p[1]*h),
a.stackedYData[b]=p[1]})};a.prototype.getStackIndicator=function(a,f,g,e){!n(a)||a.x!==f||e&&a.key!==e?a={x:f,index:0,key:e}:a.index++;a.key=[g,f,a.index].join();return a}})(L);(function(a){var E=a.addEvent,B=a.animate,F=a.Axis,D=a.createElement,n=a.css,h=a.defined,u=a.each,r=a.erase,x=a.extend,t=a.fireEvent,m=a.inArray,f=a.isNumber,g=a.isObject,e=a.isArray,d=a.merge,p=a.objectEach,b=a.pick,A=a.Point,v=a.Series,H=a.seriesTypes,q=a.setAnimation,J=a.splat;x(a.Chart.prototype,{addSeries:function(a,d,
e){var c,f=this;a&&(d=b(d,!0),t(f,"addSeries",{options:a},function(){c=f.initSeries(a);f.isDirtyLegend=!0;f.linkSeries();d&&f.redraw(e)}));return c},addAxis:function(a,e,f,g){var c=e?"xAxis":"yAxis",l=this.options;a=d(a,{index:this[c].length,isX:e});new F(this,a);l[c]=J(l[c]||{});l[c].push(a);b(f,!0)&&this.redraw(g)},showLoading:function(a){var c=this,b=c.options,d=c.loadingDiv,e=b.loading,l=function(){d&&n(d,{left:c.plotLeft+"px",top:c.plotTop+"px",width:c.plotWidth+"px",height:c.plotHeight+"px"})};
d||(c.loadingDiv=d=D("div",{className:"highcharts-loading highcharts-loading-hidden"},null,c.container),c.loadingSpan=D("span",{className:"highcharts-loading-inner"},null,d),E(c,"redraw",l));d.className="highcharts-loading";c.loadingSpan.innerHTML=a||b.lang.loading;n(d,x(e.style,{zIndex:10}));n(c.loadingSpan,e.labelStyle);c.loadingShown||(n(d,{opacity:0,display:""}),B(d,{opacity:e.style.opacity||.5},{duration:e.showDuration||0}));c.loadingShown=!0;l()},hideLoading:function(){var a=this.options,b=
this.loadingDiv;b&&(b.className="highcharts-loading highcharts-loading-hidden",B(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){n(b,{display:"none"})}}));this.loadingShown=!1},propsRequireDirtyBox:"backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions tooltip".split(" "),
update:function(a,e){var c=this,g={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle"},q=a.chart,l,w;if(q){d(!0,c.options.chart,q);"className"in q&&c.setClassName(q.className);if("inverted"in q||"polar"in q)c.propFromSeries(),l=!0;"alignTicks"in q&&(l=!0);p(q,function(a,b){-1!==m("chart."+b,c.propsRequireUpdateSeries)&&(w=!0);-1!==m(b,c.propsRequireDirtyBox)&&(c.isDirtyBox=!0)});"style"in q&&c.renderer.setStyle(q.style)}a.colors&&(this.options.colors=a.colors);a.plotOptions&&d(!0,this.options.plotOptions,
a.plotOptions);p(a,function(a,b){if(c[b]&&"function"===typeof c[b].update)c[b].update(a,!1);else if("function"===typeof c[g[b]])c[g[b]](a);"chart"!==b&&-1!==m(b,c.propsRequireUpdateSeries)&&(w=!0)});u("xAxis yAxis zAxis series colorAxis pane".split(" "),function(b){a[b]&&u(J(a[b]),function(a,d){(d=h(a.id)&&c.get(a.id)||c[b][d])&&d.coll===b&&d.update(a,!1)})});l&&u(c.axes,function(a){a.update({},!1)});w&&u(c.series,function(a){a.update({},!1)});a.loading&&d(!0,c.options.loading,a.loading);l=q&&q.width;
q=q&&q.height;f(l)&&l!==c.chartWidth||f(q)&&q!==c.chartHeight?c.setSize(l,q):b(e,!0)&&c.redraw()},setSubtitle:function(a){this.setTitle(void 0,a)}});x(A.prototype,{update:function(a,d,e,f){function c(){l.applyOptions(a);null===l.y&&k&&(l.graphic=k.destroy());g(a,!0)&&(k&&k.element&&a&&a.marker&&a.marker.symbol&&(l.graphic=k.destroy()),a&&a.dataLabels&&l.dataLabel&&(l.dataLabel=l.dataLabel.destroy()));q=l.index;p.updateParallelArrays(l,q);w.data[q]=g(w.data[q],!0)||g(a,!0)?l.options:a;p.isDirty=p.isDirtyData=
!0;!p.fixedBox&&p.hasCartesianSeries&&(h.isDirtyBox=!0);"point"===w.legendType&&(h.isDirtyLegend=!0);d&&h.redraw(e)}var l=this,p=l.series,k=l.graphic,q,h=p.chart,w=p.options;d=b(d,!0);!1===f?c():l.firePointEvent("update",{options:a},c)},remove:function(a,b){this.series.removePoint(m(this,this.series.data),a,b)}});x(v.prototype,{addPoint:function(a,d,e,f){var c=this.options,l=this.data,g=this.chart,k=this.xAxis,k=k&&k.hasNames&&k.names,p=c.data,q,h,m=this.xData,w,v;d=b(d,!0);q={series:this};this.pointClass.prototype.applyOptions.apply(q,
[a]);v=q.x;w=m.length;if(this.requireSorting&&v<m[w-1])for(h=!0;w&&m[w-1]>v;)w--;this.updateParallelArrays(q,"splice",w,0,0);this.updateParallelArrays(q,w);k&&q.name&&(k[v]=q.name);p.splice(w,0,a);h&&(this.data.splice(w,0,null),this.processData());"point"===c.legendType&&this.generatePoints();e&&(l[0]&&l[0].remove?l[0].remove(!1):(l.shift(),this.updateParallelArrays(q,"shift"),p.shift()));this.isDirtyData=this.isDirty=!0;d&&g.redraw(f)},removePoint:function(a,d,e){var c=this,f=c.data,l=f[a],g=c.points,
k=c.chart,p=function(){g&&g.length===f.length&&g.splice(a,1);f.splice(a,1);c.options.data.splice(a,1);c.updateParallelArrays(l||{series:c},"splice",a,1);l&&l.destroy();c.isDirty=!0;c.isDirtyData=!0;d&&k.redraw()};q(e,k);d=b(d,!0);l?l.firePointEvent("remove",null,p):p()},remove:function(a,d,e){function c(){f.destroy();l.isDirtyLegend=l.isDirtyBox=!0;l.linkSeries();b(a,!0)&&l.redraw(d)}var f=this,l=f.chart;!1!==e?t(f,"remove",null,c):c()},update:function(a,e){var c=this,f=c.chart,g=c.userOptions,l=
c.oldType||c.type,p=a.type||g.type||f.options.chart.type,k=H[l].prototype,q=["group","markerGroup","dataLabelsGroup"],h;if(Object.keys&&"data"===Object.keys(a).toString())return this.setData(a.data,e);if(p&&p!==l||void 0!==a.zIndex)q.length=0;u(q,function(a){q[a]=c[a];delete c[a]});a=d(g,{animation:!1,index:c.index,pointStart:c.xData[0]},{data:c.options.data},a);c.remove(!1,null,!1);for(h in k)c[h]=void 0;x(c,H[p||l].prototype);u(q,function(a){c[a]=q[a]});c.init(f,a);c.oldType=l;f.linkSeries();b(e,
!0)&&f.redraw(!1)}});x(F.prototype,{update:function(a,e){var c=this.chart;a=c.options[this.coll][this.options.index]=d(this.userOptions,a);this.destroy(!0);this.init(c,x(a,{events:void 0}));c.isDirtyBox=!0;b(e,!0)&&c.redraw()},remove:function(a){for(var c=this.chart,d=this.coll,f=this.series,g=f.length;g--;)f[g]&&f[g].remove(!1);r(c.axes,this);r(c[d],this);e(c.options[d])?c.options[d].splice(this.options.index,1):delete c.options[d];u(c[d],function(a,c){a.options.index=c});this.destroy();c.isDirtyBox=
!0;b(a,!0)&&c.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}})})(L);(function(a){var E=a.color,B=a.each,F=a.map,D=a.pick,n=a.Series,h=a.seriesType;h("area","line",{softThreshold:!1,threshold:0},{singleStacks:!1,getStackPoints:function(){var h=[],n=[],x=this.xAxis,t=this.yAxis,m=t.stacks[this.stackKey],f={},g=this.points,e=this.index,d=t.series,p=d.length,b,A=D(t.options.reversedStacks,!0)?1:-1,v;if(this.options.stacking){for(v=
0;v<g.length;v++)f[g[v].x]=g[v];a.objectEach(m,function(a,b){null!==a.total&&n.push(b)});n.sort(function(a,b){return a-b});b=F(d,function(){return this.visible});B(n,function(a,d){var g=0,c,q;if(f[a]&&!f[a].isNull)h.push(f[a]),B([-1,1],function(g){var h=1===g?"rightNull":"leftNull",w=0,l=m[n[d+g]];if(l)for(v=e;0<=v&&v<p;)c=l.points[v],c||(v===e?f[a][h]=!0:b[v]&&(q=m[a].points[v])&&(w-=q[1]-q[0])),v+=A;f[a][1===g?"rightCliff":"leftCliff"]=w});else{for(v=e;0<=v&&v<p;){if(c=m[a].points[v]){g=c[1];break}v+=
A}g=t.translate(g,0,1,0,1);h.push({isNull:!0,plotX:x.translate(a,0,0,0,1),x:a,plotY:g,yBottom:g})}})}return h},getGraphPath:function(a){var h=n.prototype.getGraphPath,u=this.options,t=u.stacking,m=this.yAxis,f,g,e=[],d=[],p=this.index,b,A=m.stacks[this.stackKey],v=u.threshold,H=m.getThreshold(u.threshold),q,u=u.connectNulls||"percent"===t,J=function(c,f,g){var q=a[c];c=t&&A[q.x].points[p];var h=q[g+"Null"]||0;g=q[g+"Cliff"]||0;var l,w,q=!0;g||h?(l=(h?c[0]:c[1])+g,w=c[0]+g,q=!!h):!t&&a[f]&&a[f].isNull&&
(l=w=v);void 0!==l&&(d.push({plotX:b,plotY:null===l?H:m.getThreshold(l),isNull:q,isCliff:!0}),e.push({plotX:b,plotY:null===w?H:m.getThreshold(w),doCurve:!1}))};a=a||this.points;t&&(a=this.getStackPoints());for(f=0;f<a.length;f++)if(g=a[f].isNull,b=D(a[f].rectPlotX,a[f].plotX),q=D(a[f].yBottom,H),!g||u)u||J(f,f-1,"left"),g&&!t&&u||(d.push(a[f]),e.push({x:f,plotX:b,plotY:q})),u||J(f,f+1,"right");f=h.call(this,d,!0,!0);e.reversed=!0;g=h.call(this,e,!0,!0);g.length&&(g[0]="L");g=f.concat(g);h=h.call(this,
d,!1,u);g.xMap=f.xMap;this.areaPath=g;return h},drawGraph:function(){this.areaPath=[];n.prototype.drawGraph.apply(this);var a=this,h=this.areaPath,x=this.options,t=[["area","highcharts-area",this.color,x.fillColor]];B(this.zones,function(h,f){t.push(["zone-area-"+f,"highcharts-area highcharts-zone-area-"+f+" "+h.className,h.color||a.color,h.fillColor||x.fillColor])});B(t,function(m){var f=m[0],g=a[f];g?(g.endX=h.xMap,g.animate({d:h})):(g=a[f]=a.chart.renderer.path(h).addClass(m[1]).attr({fill:D(m[3],
E(m[2]).setOpacity(D(x.fillOpacity,.75)).get()),zIndex:0}).add(a.group),g.isArea=!0);g.startX=h.xMap;g.shiftUnit=x.step?2:1})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(L);(function(a){var E=a.pick;a=a.seriesType;a("spline","line",{},{getPointSpline:function(a,F,D){var n=F.plotX,h=F.plotY,u=a[D-1];D=a[D+1];var r,x,t,m;if(u&&!u.isNull&&!1!==u.doCurve&&!F.isCliff&&D&&!D.isNull&&!1!==D.doCurve&&!F.isCliff){a=u.plotY;t=D.plotX;D=D.plotY;var f=0;r=(1.5*n+u.plotX)/2.5;x=(1.5*h+a)/2.5;t=(1.5*
n+t)/2.5;m=(1.5*h+D)/2.5;t!==r&&(f=(m-x)*(t-n)/(t-r)+h-m);x+=f;m+=f;x>a&&x>h?(x=Math.max(a,h),m=2*h-x):x<a&&x<h&&(x=Math.min(a,h),m=2*h-x);m>D&&m>h?(m=Math.max(D,h),x=2*h-m):m<D&&m<h&&(m=Math.min(D,h),x=2*h-m);F.rightContX=t;F.rightContY=m}F=["C",E(u.rightContX,u.plotX),E(u.rightContY,u.plotY),E(r,n),E(x,h),n,h];u.rightContX=u.rightContY=null;return F}})})(L);(function(a){var E=a.seriesTypes.area.prototype,B=a.seriesType;B("areaspline","spline",a.defaultPlotOptions.area,{getStackPoints:E.getStackPoints,
getGraphPath:E.getGraphPath,setStackCliffs:E.setStackCliffs,drawGraph:E.drawGraph,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(L);(function(a){var E=a.animObject,B=a.color,F=a.each,D=a.extend,n=a.isNumber,h=a.merge,u=a.pick,r=a.Series,x=a.seriesType,t=a.svg;x("column","line",{borderRadius:0,crisp:!0,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1,shadow:!1},select:{color:"#cccccc",borderColor:"#000000",shadow:!1}},
dataLabels:{align:null,verticalAlign:null,y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){r.prototype.init.apply(this,arguments);var a=this,f=a.chart;f.hasRendered&&F(f.series,function(f){f.type===a.type&&(f.isDirty=!0)})},getColumnMetrics:function(){var a=this,f=a.options,g=a.xAxis,e=a.yAxis,d=g.reversed,p,b={},h=0;!1===f.grouping?
h=1:F(a.chart.series,function(d){var c=d.options,f=d.yAxis,g;d.type!==a.type||!d.visible&&a.chart.options.chart.ignoreHiddenSeries||e.len!==f.len||e.pos!==f.pos||(c.stacking?(p=d.stackKey,void 0===b[p]&&(b[p]=h++),g=b[p]):!1!==c.grouping&&(g=h++),d.columnIndex=g)});var v=Math.min(Math.abs(g.transA)*(g.ordinalSlope||f.pointRange||g.closestPointRange||g.tickInterval||1),g.len),n=v*f.groupPadding,q=(v-2*n)/(h||1),f=Math.min(f.maxPointWidth||g.len,u(f.pointWidth,q*(1-2*f.pointPadding)));a.columnMetrics=
{width:f,offset:(q-f)/2+(n+((a.columnIndex||0)+(d?1:0))*q-v/2)*(d?-1:1)};return a.columnMetrics},crispCol:function(a,f,g,e){var d=this.chart,p=this.borderWidth,b=-(p%2?.5:0),p=p%2?.5:1;d.inverted&&d.renderer.isVML&&(p+=1);this.options.crisp&&(g=Math.round(a+g)+b,a=Math.round(a)+b,g-=a);e=Math.round(f+e)+p;b=.5>=Math.abs(f)&&.5<e;f=Math.round(f)+p;e-=f;b&&e&&(--f,e+=1);return{x:a,y:f,width:g,height:e}},translate:function(){var a=this,f=a.chart,g=a.options,e=a.dense=2>a.closestPointRange*a.xAxis.transA,
e=a.borderWidth=u(g.borderWidth,e?0:1),d=a.yAxis,p=a.translatedThreshold=d.getThreshold(g.threshold),b=u(g.minPointLength,5),h=a.getColumnMetrics(),v=h.width,n=a.barW=Math.max(v,1+2*e),q=a.pointXOffset=h.offset;f.inverted&&(p-=.5);g.pointPadding&&(n=Math.ceil(n));r.prototype.translate.apply(a);F(a.points,function(e){var c=u(e.yBottom,p),g=999+Math.abs(c),g=Math.min(Math.max(-g,e.plotY),d.len+g),h=e.plotX+q,m=n,r=Math.min(g,c),l,I=Math.max(g,c)-r;Math.abs(I)<b&&b&&(I=b,l=!d.reversed&&!e.negative||
d.reversed&&e.negative,r=Math.abs(r-p)>b?c-b:p-(l?b:0));e.barX=h;e.pointWidth=v;e.tooltipPos=f.inverted?[d.len+d.pos-f.plotLeft-g,a.xAxis.len-h-m/2,I]:[h+m/2,g+d.pos-f.plotTop,I];e.shapeType="rect";e.shapeArgs=a.crispCol.apply(a,e.isNull?[h,p,m,0]:[h,r,m,I])})},getSymbol:a.noop,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},pointAttribs:function(a,f){var g=this.options,e,d=this.pointAttrToOptions||{};
e=d.stroke||"borderColor";var p=d["stroke-width"]||"borderWidth",b=a&&a.color||this.color,m=a[e]||g[e]||this.color||b,v=a[p]||g[p]||this[p]||0,d=g.dashStyle;a&&this.zones.length&&(b=a.getZone(),b=a.options.color||b&&b.color||this.color);f&&(a=h(g.states[f],a.options.states&&a.options.states[f]||{}),f=a.brightness,b=a.color||void 0!==f&&B(b).brighten(a.brightness).get()||b,m=a[e]||m,v=a[p]||v,d=a.dashStyle||d);e={fill:b,stroke:m,"stroke-width":v};g.borderRadius&&(e.r=g.borderRadius);d&&(e.dashstyle=
d);return e},drawPoints:function(){var a=this,f=this.chart,g=a.options,e=f.renderer,d=g.animationLimit||250,p;F(a.points,function(b){var m=b.graphic;if(n(b.plotY)&&null!==b.y){p=b.shapeArgs;if(m)m[f.pointCount<d?"animate":"attr"](h(p));else b.graphic=m=e[b.shapeType](p).add(b.group||a.group);m.attr(a.pointAttribs(b,b.selected&&"select")).shadow(g.shadow,null,g.stacking&&!g.borderRadius);m.addClass(b.getClassName(),!0)}else m&&(b.graphic=m.destroy())})},animate:function(a){var f=this,g=this.yAxis,
e=f.options,d=this.chart.inverted,p={};t&&(a?(p.scaleY=.001,a=Math.min(g.pos+g.len,Math.max(g.pos,g.toPixels(e.threshold))),d?p.translateX=a-g.len:p.translateY=a,f.group.attr(p)):(p[d?"translateX":"translateY"]=g.pos,f.group.animate(p,D(E(f.options.animation),{step:function(a,d){f.group.attr({scaleY:Math.max(.001,d.pos)})}})),f.animate=null))},remove:function(){var a=this,f=a.chart;f.hasRendered&&F(f.series,function(f){f.type===a.type&&(f.isDirty=!0)});r.prototype.remove.apply(a,arguments)}})})(L);
(function(a){a=a.seriesType;a("bar","column",null,{inverted:!0})})(L);(function(a){var E=a.Series;a=a.seriesType;a("scatter","line",{lineWidth:0,findNearestPointBy:"xy",marker:{enabled:!0},tooltip:{headerFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 0.85em"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e',pointFormat:"x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e"}},{sorted:!1,requireSorting:!1,noSharedTooltip:!0,
trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,drawGraph:function(){this.options.lineWidth&&E.prototype.drawGraph.call(this)}})})(L);(function(a){var E=a.pick,B=a.relativeLength;a.CenteredSeriesMixin={getCenter:function(){var a=this.options,D=this.chart,n=2*(a.slicedOffset||0),h=D.plotWidth-2*n,D=D.plotHeight-2*n,u=a.center,u=[E(u[0],"50%"),E(u[1],"50%"),a.size||"100%",a.innerSize||0],r=Math.min(h,D),x,t;for(x=0;4>x;++x)t=u[x],a=2>x||2===x&&/%$/.test(t),u[x]=B(t,[h,
D,r,u[2]][x])+(a?n:0);u[3]>u[2]&&(u[3]=u[2]);return u}}})(L);(function(a){var E=a.addEvent,B=a.defined,F=a.each,D=a.extend,n=a.inArray,h=a.noop,u=a.pick,r=a.Point,x=a.Series,t=a.seriesType,m=a.setAnimation;t("pie","line",{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,enabled:!0,formatter:function(){return this.point.isNull?void 0:this.point.name},x:0},ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},
borderColor:"#ffffff",borderWidth:1,states:{hover:{brightness:.1,shadow:!1}}},{isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttribs:a.seriesTypes.column.prototype.pointAttribs,animate:function(a){var f=this,e=f.points,d=f.startAngleRad;a||(F(e,function(a){var b=a.graphic,e=a.shapeArgs;b&&(b.attr({r:a.startR||f.center[3]/2,start:d,end:d}),b.animate({r:e.r,start:e.start,end:e.end},f.options.animation))}),f.animate=null)},
updateTotals:function(){var a,g=0,e=this.points,d=e.length,p,b=this.options.ignoreHiddenPoint;for(a=0;a<d;a++)p=e[a],g+=b&&!p.visible?0:p.isNull?0:p.y;this.total=g;for(a=0;a<d;a++)p=e[a],p.percentage=0<g&&(p.visible||!b)?p.y/g*100:0,p.total=g},generatePoints:function(){x.prototype.generatePoints.call(this);this.updateTotals()},translate:function(a){this.generatePoints();var f=0,e=this.options,d=e.slicedOffset,p=d+(e.borderWidth||0),b,h,v,m=e.startAngle||0,q=this.startAngleRad=Math.PI/180*(m-90),m=
(this.endAngleRad=Math.PI/180*(u(e.endAngle,m+360)-90))-q,n=this.points,c,w=e.dataLabels.distance,e=e.ignoreHiddenPoint,r,y=n.length,t;a||(this.center=a=this.getCenter());this.getX=function(c,b,d){v=Math.asin(Math.min((c-a[1])/(a[2]/2+d.labelDistance),1));return a[0]+(b?-1:1)*Math.cos(v)*(a[2]/2+d.labelDistance)};for(r=0;r<y;r++){t=n[r];t.labelDistance=u(t.options.dataLabels&&t.options.dataLabels.distance,w);this.maxLabelDistance=Math.max(this.maxLabelDistance||0,t.labelDistance);b=q+f*m;if(!e||t.visible)f+=
t.percentage/100;h=q+f*m;t.shapeType="arc";t.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:Math.round(1E3*b)/1E3,end:Math.round(1E3*h)/1E3};v=(h+b)/2;v>1.5*Math.PI?v-=2*Math.PI:v<-Math.PI/2&&(v+=2*Math.PI);t.slicedTranslation={translateX:Math.round(Math.cos(v)*d),translateY:Math.round(Math.sin(v)*d)};h=Math.cos(v)*a[2]/2;c=Math.sin(v)*a[2]/2;t.tooltipPos=[a[0]+.7*h,a[1]+.7*c];t.half=v<-Math.PI/2||v>Math.PI/2?1:0;t.angle=v;b=Math.min(p,t.labelDistance/5);t.labelPos=[a[0]+h+Math.cos(v)*t.labelDistance,
a[1]+c+Math.sin(v)*t.labelDistance,a[0]+h+Math.cos(v)*b,a[1]+c+Math.sin(v)*b,a[0]+h,a[1]+c,0>t.labelDistance?"center":t.half?"right":"left",v]}},drawGraph:null,drawPoints:function(){var a=this,g=a.chart.renderer,e,d,p,b,h=a.options.shadow;h&&!a.shadowGroup&&(a.shadowGroup=g.g("shadow").add(a.group));F(a.points,function(f){if(!f.isNull){d=f.graphic;b=f.shapeArgs;e=f.getTranslate();var m=f.shadowGroup;h&&!m&&(m=f.shadowGroup=g.g("shadow").add(a.shadowGroup));m&&m.attr(e);p=a.pointAttribs(f,f.selected&&
"select");d?d.setRadialReference(a.center).attr(p).animate(D(b,e)):(f.graphic=d=g[f.shapeType](b).setRadialReference(a.center).attr(e).add(a.group),f.visible||d.attr({visibility:"hidden"}),d.attr(p).attr({"stroke-linejoin":"round"}).shadow(h,m));d.addClass(f.getClassName())}})},searchPoint:h,sortByAngle:function(a,g){a.sort(function(a,d){return void 0!==a.angle&&(d.angle-a.angle)*g})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,getCenter:a.CenteredSeriesMixin.getCenter,getSymbol:h},{init:function(){r.prototype.init.apply(this,
arguments);var a=this,g;a.name=u(a.name,"Slice");g=function(e){a.slice("select"===e.type)};E(a,"select",g);E(a,"unselect",g);return a},isValid:function(){return a.isNumber(this.y,!0)&&0<=this.y},setVisible:function(a,g){var e=this,d=e.series,f=d.chart,b=d.options.ignoreHiddenPoint;g=u(g,b);a!==e.visible&&(e.visible=e.options.visible=a=void 0===a?!e.visible:a,d.options.data[n(e,d.data)]=e.options,F(["graphic","dataLabel","connector","shadowGroup"],function(b){if(e[b])e[b][a?"show":"hide"](!0)}),e.legendItem&&
f.legend.colorizeItem(e,a),a||"hover"!==e.state||e.setState(""),b&&(d.isDirty=!0),g&&f.redraw())},slice:function(a,g,e){var d=this.series;m(e,d.chart);u(g,!0);this.sliced=this.options.sliced=B(a)?a:!this.sliced;d.options.data[n(this,d.data)]=this.options;this.graphic.animate(this.getTranslate());this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())},getTranslate:function(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}},haloPath:function(a){var f=this.shapeArgs;return this.sliced||
!this.visible?[]:this.series.chart.renderer.symbols.arc(f.x,f.y,f.r+a,f.r+a,{innerR:this.shapeArgs.r,start:f.start,end:f.end})}})})(L);(function(a){var E=a.addEvent,B=a.arrayMax,F=a.defined,D=a.each,n=a.extend,h=a.format,u=a.map,r=a.merge,x=a.noop,t=a.pick,m=a.relativeLength,f=a.Series,g=a.seriesTypes,e=a.stableSort;a.distribute=function(a,f){function b(a,b){return a.target-b.target}var d,g=!0,p=a,q=[],h;h=0;for(d=a.length;d--;)h+=a[d].size;if(h>f){e(a,function(a,b){return(b.rank||0)-(a.rank||0)});
for(h=d=0;h<=f;)h+=a[d].size,d++;q=a.splice(d-1,a.length)}e(a,b);for(a=u(a,function(a){return{size:a.size,targets:[a.target]}});g;){for(d=a.length;d--;)g=a[d],h=(Math.min.apply(0,g.targets)+Math.max.apply(0,g.targets))/2,g.pos=Math.min(Math.max(0,h-g.size/2),f-g.size);d=a.length;for(g=!1;d--;)0<d&&a[d-1].pos+a[d-1].size>a[d].pos&&(a[d-1].size+=a[d].size,a[d-1].targets=a[d-1].targets.concat(a[d].targets),a[d-1].pos+a[d-1].size>f&&(a[d-1].pos=f-a[d-1].size),a.splice(d,1),g=!0)}d=0;D(a,function(a){var c=
0;D(a.targets,function(){p[d].pos=a.pos+c;c+=p[d].size;d++})});p.push.apply(p,q);e(p,b)};f.prototype.drawDataLabels=function(){var d=this,e=d.options,b=e.dataLabels,f=d.points,g,m,q=d.hasRendered||0,n,c,w=t(b.defer,!!e.animation),u=d.chart.renderer;if(b.enabled||d._hasPointLabels)d.dlProcessOptions&&d.dlProcessOptions(b),c=d.plotGroup("dataLabelsGroup","data-labels",w&&!q?"hidden":"visible",b.zIndex||6),w&&(c.attr({opacity:+q}),q||E(d,"afterAnimate",function(){d.visible&&c.show(!0);c[e.animation?
"animate":"attr"]({opacity:1},{duration:200})})),m=b,D(f,function(f){var q,l=f.dataLabel,p,k,w=f.connector,v=!l,y;g=f.dlOptions||f.options&&f.options.dataLabels;if(q=t(g&&g.enabled,m.enabled)&&null!==f.y)b=r(m,g),p=f.getLabelConfig(),n=b.format?h(b.format,p):b.formatter.call(p,b),y=b.style,p=b.rotation,y.color=t(b.color,y.color,d.color,"#000000"),"contrast"===y.color&&(f.contrastColor=u.getContrast(f.color||d.color),y.color=b.inside||0>t(f.labelDistance,b.distance)||e.stacking?f.contrastColor:"#000000"),
e.cursor&&(y.cursor=e.cursor),k={fill:b.backgroundColor,stroke:b.borderColor,"stroke-width":b.borderWidth,r:b.borderRadius||0,rotation:p,padding:b.padding,zIndex:1},a.objectEach(k,function(a,c){void 0===a&&delete k[c]});!l||q&&F(n)?q&&F(n)&&(l?k.text=n:(l=f.dataLabel=u[p?"text":"label"](n,0,-9999,b.shape,null,null,b.useHTML,null,"data-label"),l.addClass("highcharts-data-label-color-"+f.colorIndex+" "+(b.className||"")+(b.useHTML?"highcharts-tracker":""))),l.attr(k),l.css(y).shadow(b.shadow),l.added||
l.add(c),d.alignDataLabel(f,l,b,null,v)):(f.dataLabel=l=l.destroy(),w&&(f.connector=w.destroy()))})};f.prototype.alignDataLabel=function(a,e,b,f,g){var d=this.chart,q=d.inverted,h=t(a.plotX,-9999),c=t(a.plotY,-9999),p=e.getBBox(),m,v=b.rotation,r=b.align,l=this.visible&&(a.series.forceDL||d.isInsidePlot(h,Math.round(c),q)||f&&d.isInsidePlot(h,q?f.x+1:f.y+f.height-1,q)),I="justify"===t(b.overflow,"justify");if(l&&(m=b.style.fontSize,m=d.renderer.fontMetrics(m,e).b,f=n({x:q?d.plotWidth-c:h,y:Math.round(q?
d.plotHeight-h:c),width:0,height:0},f),n(b,{width:p.width,height:p.height}),v?(I=!1,h=d.renderer.rotCorr(m,v),h={x:f.x+b.x+f.width/2+h.x,y:f.y+b.y+{top:0,middle:.5,bottom:1}[b.verticalAlign]*f.height},e[g?"attr":"animate"](h).attr({align:r}),c=(v+720)%360,c=180<c&&360>c,"left"===r?h.y-=c?p.height:0:"center"===r?(h.x-=p.width/2,h.y-=p.height/2):"right"===r&&(h.x-=p.width,h.y-=c?0:p.height)):(e.align(b,null,f),h=e.alignAttr),I?a.isLabelJustified=this.justifyDataLabel(e,b,h,p,f,g):t(b.crop,!0)&&(l=d.isInsidePlot(h.x,
h.y)&&d.isInsidePlot(h.x+p.width,h.y+p.height)),b.shape&&!v))e[g?"attr":"animate"]({anchorX:q?d.plotWidth-a.plotY:a.plotX,anchorY:q?d.plotHeight-a.plotX:a.plotY});l||(e.attr({y:-9999}),e.placed=!1)};f.prototype.justifyDataLabel=function(a,e,b,f,g,h){var d=this.chart,p=e.align,c=e.verticalAlign,m,n,v=a.box?0:a.padding||0;m=b.x+v;0>m&&("right"===p?e.align="left":e.x=-m,n=!0);m=b.x+f.width-v;m>d.plotWidth&&("left"===p?e.align="right":e.x=d.plotWidth-m,n=!0);m=b.y+v;0>m&&("bottom"===c?e.verticalAlign=
"top":e.y=-m,n=!0);m=b.y+f.height-v;m>d.plotHeight&&("top"===c?e.verticalAlign="bottom":e.y=d.plotHeight-m,n=!0);n&&(a.placed=!h,a.align(e,null,g));return n};g.pie&&(g.pie.prototype.drawDataLabels=function(){var d=this,e=d.data,b,g=d.chart,h=d.options.dataLabels,m=t(h.connectorPadding,10),q=t(h.connectorWidth,1),n=g.plotWidth,c=g.plotHeight,w,r=d.center,y=r[2]/2,u=r[1],l,I,k,z,x=[[],[]],M,N,E,O,C=[0,0,0,0];d.visible&&(h.enabled||d._hasPointLabels)&&(D(e,function(a){a.dataLabel&&a.visible&&a.dataLabel.shortened&&
(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1)}),f.prototype.drawDataLabels.apply(d),D(e,function(a){a.dataLabel&&a.visible&&(x[a.half].push(a),a.dataLabel._pos=null)}),D(x,function(e,f){var q,p,w=e.length,v=[],t;if(w)for(d.sortByAngle(e,f-.5),0<d.maxLabelDistance&&(q=Math.max(0,u-y-d.maxLabelDistance),p=Math.min(u+y+d.maxLabelDistance,g.plotHeight),D(e,function(a){0<a.labelDistance&&a.dataLabel&&(a.top=Math.max(0,u-y-a.labelDistance),a.bottom=
Math.min(u+y+a.labelDistance,g.plotHeight),t=a.dataLabel.getBBox().height||21,a.positionsIndex=v.push({target:a.labelPos[1]-a.top+t/2,size:t,rank:a.y})-1)}),a.distribute(v,p+t-q)),O=0;O<w;O++)b=e[O],p=b.positionsIndex,k=b.labelPos,l=b.dataLabel,E=!1===b.visible?"hidden":"inherit",q=k[1],v&&F(v[p])?void 0===v[p].pos?E="hidden":(z=v[p].size,N=b.top+v[p].pos):N=q,delete b.positionIndex,M=h.justify?r[0]+(f?-1:1)*(y+b.labelDistance):d.getX(N<b.top+2||N>b.bottom-2?q:N,f,b),l._attr={visibility:E,align:k[6]},
l._pos={x:M+h.x+({left:m,right:-m}[k[6]]||0),y:N+h.y-10},k.x=M,k.y=N,I=l.getBBox().width,q=null,M-I<m?(q=Math.round(I-M+m),C[3]=Math.max(q,C[3])):M+I>n-m&&(q=Math.round(M+I-n+m),C[1]=Math.max(q,C[1])),0>N-z/2?C[0]=Math.max(Math.round(-N+z/2),C[0]):N+z/2>c&&(C[2]=Math.max(Math.round(N+z/2-c),C[2])),l.sideOverflow=q}),0===B(C)||this.verifyDataLabelOverflow(C))&&(this.placeDataLabels(),q&&D(this.points,function(a){var c;w=a.connector;if((l=a.dataLabel)&&l._pos&&a.visible&&0<a.labelDistance){E=l._attr.visibility;
if(c=!w)a.connector=w=g.renderer.path().addClass("highcharts-data-label-connector highcharts-color-"+a.colorIndex).add(d.dataLabelsGroup),w.attr({"stroke-width":q,stroke:h.connectorColor||a.color||"#666666"});w[c?"attr":"animate"]({d:d.connectorPath(a.labelPos)});w.attr("visibility",E)}else w&&(a.connector=w.destroy())}))},g.pie.prototype.connectorPath=function(a){var d=a.x,b=a.y;return t(this.options.dataLabels.softConnector,!0)?["M",d+("left"===a[6]?5:-5),b,"C",d,b,2*a[2]-a[4],2*a[3]-a[5],a[2],
a[3],"L",a[4],a[5]]:["M",d+("left"===a[6]?5:-5),b,"L",a[2],a[3],"L",a[4],a[5]]},g.pie.prototype.placeDataLabels=function(){D(this.points,function(a){var d=a.dataLabel;d&&a.visible&&((a=d._pos)?(d.sideOverflow&&(d._attr.width=d.getBBox().width-d.sideOverflow,d.css({width:d._attr.width+"px",textOverflow:"ellipsis"}),d.shortened=!0),d.attr(d._attr),d[d.moved?"animate":"attr"](a),d.moved=!0):d&&d.attr({y:-9999}))},this)},g.pie.prototype.alignDataLabel=x,g.pie.prototype.verifyDataLabelOverflow=function(a){var d=
this.center,b=this.options,e=b.center,f=b.minSize||80,g,h=null!==b.size;h||(null!==e[0]?g=Math.max(d[2]-Math.max(a[1],a[3]),f):(g=Math.max(d[2]-a[1]-a[3],f),d[0]+=(a[3]-a[1])/2),null!==e[1]?g=Math.max(Math.min(g,d[2]-Math.max(a[0],a[2])),f):(g=Math.max(Math.min(g,d[2]-a[0]-a[2]),f),d[1]+=(a[0]-a[2])/2),g<d[2]?(d[2]=g,d[3]=Math.min(m(b.innerSize||0,g),g),this.translate(d),this.drawDataLabels&&this.drawDataLabels()):h=!0);return h});g.column&&(g.column.prototype.alignDataLabel=function(a,e,b,g,h){var d=
this.chart.inverted,q=a.series,p=a.dlBox||a.shapeArgs,c=t(a.below,a.plotY>t(this.translatedThreshold,q.yAxis.len)),m=t(b.inside,!!this.options.stacking);p&&(g=r(p),0>g.y&&(g.height+=g.y,g.y=0),p=g.y+g.height-q.yAxis.len,0<p&&(g.height-=p),d&&(g={x:q.yAxis.len-g.y-g.height,y:q.xAxis.len-g.x-g.width,width:g.height,height:g.width}),m||(d?(g.x+=c?0:g.width,g.width=0):(g.y+=c?g.height:0,g.height=0)));b.align=t(b.align,!d||m?"center":c?"right":"left");b.verticalAlign=t(b.verticalAlign,d||m?"middle":c?"top":
"bottom");f.prototype.alignDataLabel.call(this,a,e,b,g,h);a.isLabelJustified&&a.contrastColor&&a.dataLabel.css({color:a.contrastColor})})})(L);(function(a){var E=a.Chart,B=a.each,F=a.pick,D=a.addEvent;E.prototype.callbacks.push(function(a){function h(){var h=[];B(a.series||[],function(a){var n=a.options.dataLabels,r=a.dataLabelCollections||["dataLabel"];(n.enabled||a._hasPointLabels)&&!n.allowOverlap&&a.visible&&B(r,function(m){B(a.points,function(a){a[m]&&(a[m].labelrank=F(a.labelrank,a.shapeArgs&&
a.shapeArgs.height),h.push(a[m]))})})});a.hideOverlappingLabels(h)}h();D(a,"redraw",h)});E.prototype.hideOverlappingLabels=function(a){var h=a.length,n,r,x,t,m,f,g,e,d,p=function(a,d,e,f,g,h,c,p){return!(g>a+e||g+c<a||h>d+f||h+p<d)};for(r=0;r<h;r++)if(n=a[r])n.oldOpacity=n.opacity,n.newOpacity=1;a.sort(function(a,d){return(d.labelrank||0)-(a.labelrank||0)});for(r=0;r<h;r++)for(x=a[r],n=r+1;n<h;++n)if(t=a[n],x&&t&&x!==t&&x.placed&&t.placed&&0!==x.newOpacity&&0!==t.newOpacity&&(m=x.alignAttr,f=t.alignAttr,
g=x.parentGroup,e=t.parentGroup,d=2*(x.box?0:x.padding),m=p(m.x+g.translateX,m.y+g.translateY,x.width-d,x.height-d,f.x+e.translateX,f.y+e.translateY,t.width-d,t.height-d)))(x.labelrank<t.labelrank?x:t).newOpacity=0;B(a,function(a){var b,d;a&&(d=a.newOpacity,a.oldOpacity!==d&&a.placed&&(d?a.show(!0):b=function(){a.hide()},a.alignAttr.opacity=d,a[a.isOld?"animate":"attr"](a.alignAttr,null,b)),a.isOld=!0)})}})(L);(function(a){var E=a.addEvent,B=a.Chart,F=a.createElement,D=a.css,n=a.defaultOptions,h=
a.defaultPlotOptions,u=a.each,r=a.extend,x=a.fireEvent,t=a.hasTouch,m=a.inArray,f=a.isObject,g=a.Legend,e=a.merge,d=a.pick,p=a.Point,b=a.Series,A=a.seriesTypes,v=a.svg,H;H=a.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart.pointer,c=function(a){var c=b.getPointFromEvent(a);void 0!==c&&(b.isDirectTouch=!0,c.onMouseOver(a))};u(a.points,function(a){a.graphic&&(a.graphic.element.point=a);a.dataLabel&&(a.dataLabel.div?a.dataLabel.div.point=a:a.dataLabel.element.point=a)});a._hasTracking||
(u(a.trackerGroups,function(d){if(a[d]){a[d].addClass("highcharts-tracker").on("mouseover",c).on("mouseout",function(a){b.onTrackerMouseOut(a)});if(t)a[d].on("touchstart",c);a.options.cursor&&a[d].css(D).css({cursor:a.options.cursor})}}),a._hasTracking=!0)},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:a.graphPath),e=d.length,f=a.chart,g=f.pointer,l=f.renderer,h=f.options.tooltip.snap,k=a.tracker,p,m=function(){if(f.hoverSeries!==a)a.onMouseOver()},n=
"rgba(192,192,192,"+(v?.0001:.002)+")";if(e&&!c)for(p=e+1;p--;)"M"===d[p]&&d.splice(p+1,0,d[p+1]-h,d[p+2],"L"),(p&&"M"===d[p]||p===e)&&d.splice(p,0,"L",d[p-2]+h,d[p-1]);k?k.attr({d:d}):a.graph&&(a.tracker=l.path(d).attr({"stroke-linejoin":"round",visibility:a.visible?"visible":"hidden",stroke:n,fill:c?n:"none","stroke-width":a.graph.strokeWidth()+(c?0:2*h),zIndex:2}).add(a.group),u([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",m).on("mouseout",function(a){g.onTrackerMouseOut(a)});
b.cursor&&a.css({cursor:b.cursor});if(t)a.on("touchstart",m)}))}};A.column&&(A.column.prototype.drawTracker=H.drawTrackerPoint);A.pie&&(A.pie.prototype.drawTracker=H.drawTrackerPoint);A.scatter&&(A.scatter.prototype.drawTracker=H.drawTrackerPoint);r(g.prototype,{setItemEvents:function(a,b,c){var d=this,f=d.chart.renderer.boxWrapper,g="highcharts-legend-"+(a.series?"point":"series")+"-active";(c?b:a.legendGroup).on("mouseover",function(){a.setState("hover");f.addClass(g);b.css(d.options.itemHoverStyle)}).on("mouseout",
function(){b.css(e(a.visible?d.itemStyle:d.itemHiddenStyle));f.removeClass(g);a.setState()}).on("click",function(c){var b=function(){a.setVisible&&a.setVisible()};c={browserEvent:c};a.firePointEvent?a.firePointEvent("legendItemClick",c,b):x(a,"legendItemClick",c,b)})},createCheckboxForItem:function(a){a.checkbox=F("input",{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);E(a.checkbox,"click",function(b){x(a.series||a,"checkboxClick",
{checked:b.target.checked,item:a},function(){a.select()})})}});n.legend.itemStyle.cursor="pointer";r(B.prototype,{showResetZoom:function(){var a=this,b=n.lang,c=a.options.chart.resetZoomButton,d=c.theme,e=d.states,f="chart"===c.relativeTo?null:"plotBox";this.resetZoomButton=a.renderer.button(b.resetZoom,null,null,function(){a.zoomOut()},d,e&&e.hover).attr({align:c.position.align,title:b.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(c.position,!1,f)},zoomOut:function(){var a=this;
x(a,"selection",{resetSelection:!0},function(){a.zoom()})},zoom:function(a){var b,c=this.pointer,e=!1,g;!a||a.resetSelection?u(this.axes,function(a){b=a.zoom()}):u(a.xAxis.concat(a.yAxis),function(a){var d=a.axis;c[d.isXAxis?"zoomX":"zoomY"]&&(b=d.zoom(a.min,a.max),d.displayBtn&&(e=!0))});g=this.resetZoomButton;e&&!g?this.showResetZoom():!e&&f(g)&&(this.resetZoomButton=g.destroy());b&&this.redraw(d(this.options.chart.animation,a&&a.animation,100>this.pointCount))},pan:function(a,b){var c=this,d=c.hoverPoints,
e;d&&u(d,function(a){a.setState()});u("xy"===b?[1,0]:[1],function(b){b=c[b?"xAxis":"yAxis"][0];var d=b.horiz,l=a[d?"chartX":"chartY"],d=d?"mouseDownX":"mouseDownY",f=c[d],k=(b.pointRange||0)/2,g=b.getExtremes(),h=b.toValue(f-l,!0)+k,k=b.toValue(f+b.len-l,!0)-k,p=k<h,f=p?k:h,h=p?h:k,k=Math.min(g.dataMin,b.toValue(b.toPixels(g.min)-b.minPixelPadding)),p=Math.max(g.dataMax,b.toValue(b.toPixels(g.max)+b.minPixelPadding)),q;q=k-f;0<q&&(h+=q,f=k);q=h-p;0<q&&(h=p,f-=q);b.series.length&&f!==g.min&&h!==g.max&&
(b.setExtremes(f,h,!1,!1,{trigger:"pan"}),e=!0);c[d]=l});e&&c.redraw(!1);D(c.container,{cursor:"move"})}});r(p.prototype,{select:function(a,b){var c=this,e=c.series,f=e.chart;a=d(a,!c.selected);c.firePointEvent(a?"select":"unselect",{accumulate:b},function(){c.selected=c.options.selected=a;e.options.data[m(c,e.data)]=c.options;c.setState(a&&"select");b||u(f.getSelectedPoints(),function(a){a.selected&&a!==c&&(a.selected=a.options.selected=!1,e.options.data[m(a,e.data)]=a.options,a.setState(""),a.firePointEvent("unselect"))})})},
onMouseOver:function(a){var b=this.series.chart,c=b.pointer;a=a?c.normalize(a):c.getChartCoordinatesFromPoint(this,b.inverted);c.runPointActions(a,this)},onMouseOut:function(){var a=this.series.chart;this.firePointEvent("mouseOut");u(a.hoverPoints||[],function(a){a.setState()});a.hoverPoints=a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var b=this,d=e(b.series.options.point,b.options).events;b.events=d;a.objectEach(d,function(a,d){E(b,d,a)});this.hasImportedEvents=!0}},setState:function(a,
b){var c=Math.floor(this.plotX),e=this.plotY,f=this.series,g=f.options.states[a]||{},p=h[f.type].marker&&f.options.marker,l=p&&!1===p.enabled,q=p&&p.states&&p.states[a]||{},k=!1===q.enabled,m=f.stateMarkerGraphic,n=this.marker||{},v=f.chart,t=f.halo,u,x=p&&f.markerAttribs;a=a||"";if(!(a===this.state&&!b||this.selected&&"select"!==a||!1===g.enabled||a&&(k||l&&!1===q.enabled)||a&&n.states&&n.states[a]&&!1===n.states[a].enabled)){x&&(u=f.markerAttribs(this,a));if(this.graphic)this.state&&this.graphic.removeClass("highcharts-point-"+
this.state),a&&this.graphic.addClass("highcharts-point-"+a),this.graphic.attr(f.pointAttribs(this,a)),u&&this.graphic.animate(u,d(v.options.chart.animation,q.animation,p.animation)),m&&m.hide();else{if(a&&q){p=n.symbol||f.symbol;m&&m.currentSymbol!==p&&(m=m.destroy());if(m)m[b?"animate":"attr"]({x:u.x,y:u.y});else p&&(f.stateMarkerGraphic=m=v.renderer.symbol(p,u.x,u.y,u.width,u.height).add(f.markerGroup),m.currentSymbol=p);m&&m.attr(f.pointAttribs(this,a))}m&&(m[a&&v.isInsidePlot(c,e,v.inverted)?
"show":"hide"](),m.element.point=this)}(c=g.halo)&&c.size?(t||(f.halo=t=v.renderer.path().add((this.graphic||m).parentGroup)),t[b?"animate":"attr"]({d:this.haloPath(c.size)}),t.attr({"class":"highcharts-halo highcharts-color-"+d(this.colorIndex,f.colorIndex)}),t.point=this,t.attr(r({fill:this.color||f.color,"fill-opacity":c.opacity,zIndex:-1},c.attributes))):t&&t.point&&t.point.haloPath&&t.animate({d:t.point.haloPath(0)});this.state=a}},haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-
a,this.plotY-a,2*a,2*a)}});r(b.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&x(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();this&&a.events.mouseOut&&x(this,"mouseOut");!c||this.stickyTracking||c.shared&&!this.noSharedTooltip||c.hide();this.setState()},setState:function(a){var b=this,
c=b.options,e=b.graph,f=c.states,g=c.lineWidth,c=0;a=a||"";if(b.state!==a&&(u([b.group,b.markerGroup,b.dataLabelsGroup],function(c){c&&(b.state&&c.removeClass("highcharts-series-"+b.state),a&&c.addClass("highcharts-series-"+a))}),b.state=a,!f[a]||!1!==f[a].enabled)&&(a&&(g=f[a].lineWidth||g+(f[a].lineWidthPlus||0)),e&&!e.dashstyle))for(g={"stroke-width":g},e.animate(g,d(b.chart.options.chart.animation,f[a]&&f[a].animation));b["zone-graph-"+c];)b["zone-graph-"+c].attr(g),c+=1},setVisible:function(a,
b){var c=this,d=c.chart,e=c.legendItem,f,g=d.options.chart.ignoreHiddenSeries,l=c.visible;f=(c.visible=a=c.options.visible=c.userOptions.visible=void 0===a?!l:a)?"show":"hide";u(["group","dataLabelsGroup","markerGroup","tracker","tt"],function(a){if(c[a])c[a][f]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&u(d.series,function(a){a.options.stacking&&a.visible&&(a.isDirty=!0)});u(c.linkedSeries,function(c){c.setVisible(a,
!1)});g&&(d.isDirtyBox=!0);!1!==b&&d.redraw();x(c,f)},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=void 0===a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);x(this,a?"select":"unselect")},drawTracker:H.drawTrackerGraph})})(L);(function(a){var E=a.Chart,B=a.each,F=a.inArray,D=a.isArray,n=a.isObject,h=a.pick,u=a.splat;E.prototype.setResponsive=function(h){var n=this.options.responsive,r=[],m=this.currentResponsive;n&&n.rules&&
B(n.rules,function(f){void 0===f._id&&(f._id=a.uniqueKey());this.matchResponsiveRule(f,r,h)},this);var f=a.merge.apply(0,a.map(r,function(f){return a.find(n.rules,function(a){return a._id===f}).chartOptions})),r=r.toString()||void 0;r!==(m&&m.ruleIds)&&(m&&this.update(m.undoOptions,h),r?(this.currentResponsive={ruleIds:r,mergedOptions:f,undoOptions:this.currentOptions(f)},this.update(f,h)):this.currentResponsive=void 0)};E.prototype.matchResponsiveRule=function(a,n){var r=a.condition;(r.callback||
function(){return this.chartWidth<=h(r.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=h(r.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=h(r.minWidth,0)&&this.chartHeight>=h(r.minHeight,0)}).call(this)&&n.push(a._id)};E.prototype.currentOptions=function(h){function r(h,f,g,e){var d;a.objectEach(h,function(a,b){if(!e&&-1<F(b,["series","xAxis","yAxis"]))for(h[b]=u(h[b]),g[b]=[],d=0;d<h[b].length;d++)f[b][d]&&(g[b][d]={},r(a[d],f[b][d],g[b][d],e+1));else n(a)?(g[b]=D(a)?[]:{},r(a,f[b]||{},g[b],e+1)):g[b]=
f[b]||null})}var t={};r(h,this.options,t,0);return t}})(L);(function(a){var E=a.addEvent,B=a.Axis,F=a.Chart,D=a.css,n=a.dateFormat,h=a.defined,u=a.each,r=a.extend,x=a.noop,t=a.timeUnits,m=a.wrap;m(a.Series.prototype,"init",function(a){var f;a.apply(this,Array.prototype.slice.call(arguments,1));(f=this.xAxis)&&f.options.ordinal&&E(this,"updatedData",function(){delete f.ordinalIndex})});m(B.prototype,"getTimeTicks",function(a,g,e,d,p,b,m,v){var f=0,q,r,c={},w,u,y,x=[],l=-Number.MAX_VALUE,I=this.options.tickPixelInterval;
if(!this.options.ordinal&&!this.options.breaks||!b||3>b.length||void 0===e)return a.call(this,g,e,d,p);u=b.length;for(q=0;q<u;q++){y=q&&b[q-1]>d;b[q]<e&&(f=q);if(q===u-1||b[q+1]-b[q]>5*m||y){if(b[q]>l){for(r=a.call(this,g,b[f],b[q],p);r.length&&r[0]<=l;)r.shift();r.length&&(l=r[r.length-1]);x=x.concat(r)}f=q+1}if(y)break}a=r.info;if(v&&a.unitRange<=t.hour){q=x.length-1;for(f=1;f<q;f++)n("%d",x[f])!==n("%d",x[f-1])&&(c[x[f]]="day",w=!0);w&&(c[x[0]]="day");a.higherRanks=c}x.info=a;if(v&&h(I)){v=a=x.length;
q=[];var k;for(w=[];v--;)f=this.translate(x[v]),k&&(w[v]=k-f),q[v]=k=f;w.sort();w=w[Math.floor(w.length/2)];w<.6*I&&(w=null);v=x[a-1]>d?a-1:a;for(k=void 0;v--;)f=q[v],d=Math.abs(k-f),k&&d<.8*I&&(null===w||d<.8*w)?(c[x[v]]&&!c[x[v+1]]?(d=v+1,k=f):d=v,x.splice(d,1)):k=f}return x});r(B.prototype,{beforeSetTickPositions:function(){var a,g=[],e=!1,d,h=this.getExtremes(),b=h.min,m=h.max,n,r=this.isXAxis&&!!this.options.breaks,h=this.options.ordinal,q=this.chart.options.chart.ignoreHiddenSeries;if(h||r){u(this.series,
function(b,c){if(!(q&&!1===b.visible||!1===b.takeOrdinalPosition&&!r)&&(g=g.concat(b.processedXData),a=g.length,g.sort(function(a,c){return a-c}),a))for(c=a-1;c--;)g[c]===g[c+1]&&g.splice(c,1)});a=g.length;if(2<a){d=g[1]-g[0];for(n=a-1;n--&&!e;)g[n+1]-g[n]!==d&&(e=!0);!this.options.keepOrdinalPadding&&(g[0]-b>d||m-g[g.length-1]>d)&&(e=!0)}e?(this.ordinalPositions=g,d=this.ordinal2lin(Math.max(b,g[0]),!0),n=Math.max(this.ordinal2lin(Math.min(m,g[g.length-1]),!0),1),this.ordinalSlope=m=(m-b)/(n-d),
this.ordinalOffset=b-d*m):this.ordinalPositions=this.ordinalSlope=this.ordinalOffset=void 0}this.isOrdinal=h&&e;this.groupIntervalFactor=null},val2lin:function(a,g){var e=this.ordinalPositions;if(e){var d=e.length,f,b;for(f=d;f--;)if(e[f]===a){b=f;break}for(f=d-1;f--;)if(a>e[f]||0===f){a=(a-e[f])/(e[f+1]-e[f]);b=f+a;break}g=g?b:this.ordinalSlope*(b||0)+this.ordinalOffset}else g=a;return g},lin2val:function(a,g){var e=this.ordinalPositions;if(e){var d=this.ordinalSlope,f=this.ordinalOffset,b=e.length-
1,h;if(g)0>a?a=e[0]:a>b?a=e[b]:(b=Math.floor(a),h=a-b);else for(;b--;)if(g=d*b+f,a>=g){d=d*(b+1)+f;h=(a-g)/(d-g);break}return void 0!==h&&void 0!==e[b]?e[b]+(h?h*(e[b+1]-e[b]):0):a}return a},getExtendedPositions:function(){var a=this.chart,g=this.series[0].currentDataGrouping,e=this.ordinalIndex,d=g?g.count+g.unitName:"raw",h=this.getExtremes(),b,m;e||(e=this.ordinalIndex={});e[d]||(b={series:[],chart:a,getExtremes:function(){return{min:h.dataMin,max:h.dataMax}},options:{ordinal:!0},val2lin:B.prototype.val2lin,
ordinal2lin:B.prototype.ordinal2lin},u(this.series,function(d){m={xAxis:b,xData:d.xData,chart:a,destroyGroupedData:x};m.options={dataGrouping:g?{enabled:!0,forced:!0,approximation:"open",units:[[g.unitName,[g.count]]]}:{enabled:!1}};d.processData.apply(m);b.series.push(m)}),this.beforeSetTickPositions.apply(b),e[d]=b.ordinalPositions);return e[d]},getGroupIntervalFactor:function(a,g,e){var d;e=e.processedXData;var f=e.length,b=[];d=this.groupIntervalFactor;if(!d){for(d=0;d<f-1;d++)b[d]=e[d+1]-e[d];
b.sort(function(a,b){return a-b});b=b[Math.floor(f/2)];a=Math.max(a,e[0]);g=Math.min(g,e[f-1]);this.groupIntervalFactor=d=f*b/(g-a)}return d},postProcessTickInterval:function(a){var f=this.ordinalSlope;return f?this.options.breaks?this.closestPointRange:a/(f/this.closestPointRange):a}});B.prototype.ordinal2lin=B.prototype.val2lin;m(F.prototype,"pan",function(a,g){var e=this.xAxis[0],d=g.chartX,f=!1;if(e.options.ordinal&&e.series.length){var b=this.mouseDownX,h=e.getExtremes(),m=h.dataMax,n=h.min,
q=h.max,r=this.hoverPoints,c=e.closestPointRange,b=(b-d)/(e.translationSlope*(e.ordinalSlope||c)),w={ordinalPositions:e.getExtendedPositions()},c=e.lin2val,t=e.val2lin,y;w.ordinalPositions?1<Math.abs(b)&&(r&&u(r,function(a){a.setState()}),0>b?(r=w,y=e.ordinalPositions?e:w):(r=e.ordinalPositions?e:w,y=w),w=y.ordinalPositions,m>w[w.length-1]&&w.push(m),this.fixedRange=q-n,b=e.toFixedRange(null,null,c.apply(r,[t.apply(r,[n,!0])+b,!0]),c.apply(y,[t.apply(y,[q,!0])+b,!0])),b.min>=Math.min(h.dataMin,n)&&
b.max<=Math.max(m,q)&&e.setExtremes(b.min,b.max,!0,!1,{trigger:"pan"}),this.mouseDownX=d,D(this.container,{cursor:"move"})):f=!0}else f=!0;f&&a.apply(this,Array.prototype.slice.call(arguments,1))})})(L);(function(a){function E(){return Array.prototype.slice.call(arguments,1)}function B(a){a.apply(this);this.drawBreaks(this.xAxis,["x"]);this.drawBreaks(this.yAxis,F(this.pointArrayMap,["y"]))}var F=a.pick,D=a.wrap,n=a.each,h=a.extend,u=a.isArray,r=a.fireEvent,x=a.Axis,t=a.Series;h(x.prototype,{isInBreak:function(a,
f){var g=a.repeat||Infinity,e=a.from,d=a.to-a.from;f=f>=e?(f-e)%g:g-(e-f)%g;return a.inclusive?f<=d:f<d&&0!==f},isInAnyBreak:function(a,f){var g=this.options.breaks,e=g&&g.length,d,h,b;if(e){for(;e--;)this.isInBreak(g[e],a)&&(d=!0,h||(h=F(g[e].showPoints,this.isXAxis?!1:!0)));b=d&&f?d&&!h:d}return b}});D(x.prototype,"setTickPositions",function(a){a.apply(this,Array.prototype.slice.call(arguments,1));if(this.options.breaks){var f=this.tickPositions,g=this.tickPositions.info,e=[],d;for(d=0;d<f.length;d++)this.isInAnyBreak(f[d])||
e.push(f[d]);this.tickPositions=e;this.tickPositions.info=g}});D(x.prototype,"init",function(a,f,g){var e=this;g.breaks&&g.breaks.length&&(g.ordinal=!1);a.call(this,f,g);a=this.options.breaks;e.isBroken=u(a)&&!!a.length;e.isBroken&&(e.val2lin=function(a){var d=a,b,f;for(f=0;f<e.breakArray.length;f++)if(b=e.breakArray[f],b.to<=a)d-=b.len;else if(b.from>=a)break;else if(e.isInBreak(b,a)){d-=a-b.from;break}return d},e.lin2val=function(a){var d,b;for(b=0;b<e.breakArray.length&&!(d=e.breakArray[b],d.from>=
a);b++)d.to<a?a+=d.len:e.isInBreak(d,a)&&(a+=d.len);return a},e.setExtremes=function(a,e,b,f,g){for(;this.isInAnyBreak(a);)a-=this.closestPointRange;for(;this.isInAnyBreak(e);)e-=this.closestPointRange;x.prototype.setExtremes.call(this,a,e,b,f,g)},e.setAxisTranslation=function(a){x.prototype.setAxisTranslation.call(this,a);a=e.options.breaks;var d=[],b=[],f=0,g,h,m=e.userMin||e.min,u=e.userMax||e.max,c=F(e.pointRangePadding,0),w,t;n(a,function(a){h=a.repeat||Infinity;e.isInBreak(a,m)&&(m+=a.to%h-
m%h);e.isInBreak(a,u)&&(u-=u%h-a.from%h)});n(a,function(a){w=a.from;for(h=a.repeat||Infinity;w-h>m;)w-=h;for(;w<m;)w+=h;for(t=w;t<u;t+=h)d.push({value:t,move:"in"}),d.push({value:t+(a.to-a.from),move:"out",size:a.breakSize})});d.sort(function(a,c){return a.value===c.value?("in"===a.move?0:1)-("in"===c.move?0:1):a.value-c.value});g=0;w=m;n(d,function(a){g+="in"===a.move?1:-1;1===g&&"in"===a.move&&(w=a.value);0===g&&(b.push({from:w,to:a.value,len:a.value-w-(a.size||0)}),f+=a.value-w-(a.size||0))});
e.breakArray=b;e.unitLength=u-m-f+c;r(e,"afterBreaks");e.options.staticScale?e.transA=e.options.staticScale:e.unitLength&&(e.transA*=(u-e.min+c)/e.unitLength);c&&(e.minPixelPadding=e.transA*e.minPointOffset);e.min=m;e.max=u})});D(t.prototype,"generatePoints",function(a){a.apply(this,E(arguments));var f=this.xAxis,g=this.yAxis,e=this.points,d,h=e.length,b=this.options.connectNulls,m;if(f&&g&&(f.options.breaks||g.options.breaks))for(;h--;)d=e[h],m=null===d.y&&!1===b,m||!f.isInAnyBreak(d.x,!0)&&!g.isInAnyBreak(d.y,
!0)||(e.splice(h,1),this.data[h]&&this.data[h].destroyElements())});a.Series.prototype.drawBreaks=function(a,f){var g=this,e=g.points,d,h,b,m;a&&n(f,function(f){d=a.breakArray||[];h=a.isXAxis?a.min:F(g.options.threshold,a.min);n(e,function(e){m=F(e["stack"+f.toUpperCase()],e[f]);n(d,function(d){b=!1;if(h<d.from&&m>d.to||h>d.from&&m<d.from)b="pointBreak";else if(h<d.from&&m>d.from&&m<d.to||h>d.from&&m>d.to&&m<d.from)b="pointInBreak";b&&r(a,b,{point:e,brk:d})})})})};a.Series.prototype.gappedPath=function(){var a=
this.options.gapSize,f=this.points.slice(),g=f.length-1;if(a&&0<g)for(;g--;)f[g+1].x-f[g].x>this.closestPointRange*a&&f.splice(g+1,0,{isNull:!0});return this.getGraphPath(f)};D(a.seriesTypes.column.prototype,"drawPoints",B);D(a.Series.prototype,"drawPoints",B)})(L);(function(a){var E=a.arrayMax,B=a.arrayMin,F=a.Axis,D=a.defaultPlotOptions,n=a.defined,h=a.each,u=a.extend,r=a.format,x=a.isNumber,t=a.merge,m=a.pick,f=a.Point,g=a.Tooltip,e=a.wrap,d=a.Series.prototype,p=d.processData,b=d.generatePoints,
A=d.destroy,v={approximation:"average",groupPixelWidth:2,dateTimeLabelFormats:{millisecond:["%A, %b %e, %H:%M:%S.%L","%A, %b %e, %H:%M:%S.%L","-%H:%M:%S.%L"],second:["%A, %b %e, %H:%M:%S","%A, %b %e, %H:%M:%S","-%H:%M:%S"],minute:["%A, %b %e, %H:%M","%A, %b %e, %H:%M","-%H:%M"],hour:["%A, %b %e, %H:%M","%A, %b %e, %H:%M","-%H:%M"],day:["%A, %b %e, %Y","%A, %b %e","-%A, %b %e, %Y"],week:["Week from %A, %b %e, %Y","%A, %b %e","-%A, %b %e, %Y"],month:["%B %Y","%B","-%B %Y"],year:["%Y","%Y","-%Y"]}},
H={line:{},spline:{},area:{},areaspline:{},column:{approximation:"sum",groupPixelWidth:10},arearange:{approximation:"range"},areasplinerange:{approximation:"range"},columnrange:{approximation:"range",groupPixelWidth:10},candlestick:{approximation:"ohlc",groupPixelWidth:10},ohlc:{approximation:"ohlc",groupPixelWidth:5}},q=a.defaultDataGroupingUnits=[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1]],["week",
[1]],["month",[1,3,6]],["year",null]],J={sum:function(a){var c=a.length,b;if(!c&&a.hasNulls)b=null;else if(c)for(b=0;c--;)b+=a[c];return b},average:function(a){var c=a.length;a=J.sum(a);x(a)&&c&&(a/=c);return a},averages:function(){var a=[];h(arguments,function(c){a.push(J.average(c))});return a},open:function(a){return a.length?a[0]:a.hasNulls?null:void 0},high:function(a){return a.length?E(a):a.hasNulls?null:void 0},low:function(a){return a.length?B(a):a.hasNulls?null:void 0},close:function(a){return a.length?
a[a.length-1]:a.hasNulls?null:void 0},ohlc:function(a,b,d,e){a=J.open(a);b=J.high(b);d=J.low(d);e=J.close(e);if(x(a)||x(b)||x(d)||x(e))return[a,b,d,e]},range:function(a,b){a=J.low(a);b=J.high(b);if(x(a)||x(b))return[a,b];if(null===a&&null===b)return null}};d.groupData=function(a,b,d,e){var c=this.data,f=this.options.data,g=[],k=[],p=[],m=a.length,n,q,r=!!b,w=[];e="function"===typeof e?e:J[e]||H[this.type]&&J[H[this.type].approximation]||J[v.approximation];var u=this.pointArrayMap,t=u&&u.length,y=
0;q=0;var K,A;t?h(u,function(){w.push([])}):w.push([]);K=t||1;for(A=0;A<=m&&!(a[A]>=d[0]);A++);for(A;A<=m;A++){for(;void 0!==d[y+1]&&a[A]>=d[y+1]||A===m;){n=d[y];this.dataGroupInfo={start:q,length:w[0].length};q=e.apply(this,w);void 0!==q&&(g.push(n),k.push(q),p.push(this.dataGroupInfo));q=A;for(n=0;n<K;n++)w[n].length=0,w[n].hasNulls=!1;y+=1;if(A===m)break}if(A===m)break;if(u){n=this.cropStart+A;var B=c&&c[n]||this.pointClass.prototype.applyOptions.apply({series:this},[f[n]]),D;for(n=0;n<t;n++)D=
B[u[n]],x(D)?w[n].push(D):null===D&&(w[n].hasNulls=!0)}else n=r?b[A]:null,x(n)?w[0].push(n):null===n&&(w[0].hasNulls=!0)}return[g,k,p]};d.processData=function(){var a=this.chart,b=this.options.dataGrouping,e=!1!==this.allowDG&&b&&m(b.enabled,a.options.isStock),f=this.visible||!a.options.chart.ignoreHiddenSeries,g;this.forceCrop=e;this.groupPixelWidth=null;this.hasProcessed=!0;if(!1!==p.apply(this,arguments)&&e){this.destroyGroupedData();var l=this.processedXData,h=this.processedYData,k=a.plotSizeX,
a=this.xAxis,v=a.options.ordinal,r=this.groupPixelWidth=a.getGroupPixelWidth&&a.getGroupPixelWidth();if(r){this.isDirty=g=!0;this.points=null;var u=a.getExtremes(),e=u.min,u=u.max,v=v&&a.getGroupIntervalFactor(e,u,this)||1,k=r*(u-e)/k*v,r=a.getTimeTicks(a.normalizeTimeTickInterval(k,b.units||q),Math.min(e,l[0]),Math.max(u,l[l.length-1]),a.options.startOfWeek,l,this.closestPointRange),l=d.groupData.apply(this,[l,h,r,b.approximation]),h=l[0],v=l[1];if(b.smoothed){b=h.length-1;for(h[b]=Math.min(h[b],
u);b--&&0<b;)h[b]+=k/2;h[0]=Math.max(h[0],e)}this.currentDataGrouping=r.info;this.closestPointRange=r.info.totalRange;this.groupMap=l[2];n(h[0])&&h[0]<a.dataMin&&f&&(a.min===a.dataMin&&(a.min=h[0]),a.dataMin=h[0]);this.processedXData=h;this.processedYData=v}else this.currentDataGrouping=this.groupMap=null;this.hasGroupedData=g}};d.destroyGroupedData=function(){var a=this.groupedData;h(a||[],function(c,b){c&&(a[b]=c.destroy?c.destroy():null)});this.groupedData=null};d.generatePoints=function(){b.apply(this);
this.destroyGroupedData();this.groupedData=this.hasGroupedData?this.points:null};e(f.prototype,"update",function(c){this.dataGroup?a.error(24):c.apply(this,[].slice.call(arguments,1))});e(g.prototype,"tooltipFooterHeaderFormatter",function(c,b,d){var e=b.series,f=e.tooltipOptions,l=e.options.dataGrouping,g=f.xDateFormat,k,h=e.xAxis,p=a.dateFormat;return h&&"datetime"===h.options.type&&l&&x(b.key)?(c=e.currentDataGrouping,l=l.dateTimeLabelFormats,c?(h=l[c.unitName],1===c.count?g=h[0]:(g=h[1],k=h[2])):
!g&&l&&(g=this.getXDateFormat(b,f,h)),g=p(g,b.key),k&&(g+=p(k,b.key+c.totalRange-1)),r(f[(d?"footer":"header")+"Format"],{point:u(b.point,{key:g}),series:e})):c.call(this,b,d)});d.destroy=function(){for(var a=this.groupedData||[],b=a.length;b--;)a[b]&&a[b].destroy();A.apply(this)};e(d,"setOptions",function(a,b){a=a.call(this,b);var c=this.type,d=this.chart.options.plotOptions,e=D[c].dataGrouping;H[c]&&(e||(e=t(v,H[c])),a.dataGrouping=t(e,d.series&&d.series.dataGrouping,d[c].dataGrouping,b.dataGrouping));
this.chart.options.isStock&&(this.requireSorting=!0);return a});e(F.prototype,"setScale",function(a){a.call(this);h(this.series,function(a){a.hasProcessed=!1})});F.prototype.getGroupPixelWidth=function(){var a=this.series,b=a.length,d,e=0,f=!1,l;for(d=b;d--;)(l=a[d].options.dataGrouping)&&(e=Math.max(e,l.groupPixelWidth));for(d=b;d--;)(l=a[d].options.dataGrouping)&&a[d].hasProcessed&&(b=(a[d].processedXData||a[d].data).length,a[d].groupPixelWidth||b>this.chart.plotSizeX/e||b&&l.forced)&&(f=!0);return f?
e:0};F.prototype.setDataGrouping=function(a,b){var c;b=m(b,!0);a||(a={forced:!1,units:null});if(this instanceof F)for(c=this.series.length;c--;)this.series[c].update({dataGrouping:a},!1);else h(this.chart.options.series,function(c){c.dataGrouping=a},!1);b&&this.chart.redraw()}})(L);(function(a){var E=a.each,B=a.Point,F=a.seriesType,D=a.seriesTypes;F("ohlc","column",{lineWidth:1,tooltip:{pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cb\x3e {series.name}\x3c/b\x3e\x3cbr/\x3eOpen: {point.open}\x3cbr/\x3eHigh: {point.high}\x3cbr/\x3eLow: {point.low}\x3cbr/\x3eClose: {point.close}\x3cbr/\x3e'},
threshold:null,states:{hover:{lineWidth:3}},stickyTracking:!0},{directTouch:!1,pointArrayMap:["open","high","low","close"],toYData:function(a){return[a.open,a.high,a.low,a.close]},pointValKey:"close",pointAttrToOptions:{stroke:"color","stroke-width":"lineWidth"},pointAttribs:function(a,h){h=D.column.prototype.pointAttribs.call(this,a,h);var n=this.options;delete h.fill;!a.options.color&&n.upColor&&a.open<a.close&&(h.stroke=n.upColor);return h},translate:function(){var a=this,h=a.yAxis,u=!!a.modifyValue,
r=["plotOpen","plotHigh","plotLow","plotClose","yBottom"];D.column.prototype.translate.apply(a);E(a.points,function(n){E([n.open,n.high,n.low,n.close,n.low],function(t,m){null!==t&&(u&&(t=a.modifyValue(t)),n[r[m]]=h.toPixels(t,!0))});n.tooltipPos[1]=n.plotHigh+h.pos-a.chart.plotTop})},drawPoints:function(){var a=this,h=a.chart;E(a.points,function(n){var r,u,t,m,f=n.graphic,g,e=!f;void 0!==n.plotY&&(f||(n.graphic=f=h.renderer.path().add(a.group)),f.attr(a.pointAttribs(n,n.selected&&"select")),u=f.strokeWidth()%
2/2,g=Math.round(n.plotX)-u,t=Math.round(n.shapeArgs.width/2),m=["M",g,Math.round(n.yBottom),"L",g,Math.round(n.plotHigh)],null!==n.open&&(r=Math.round(n.plotOpen)+u,m.push("M",g,r,"L",g-t,r)),null!==n.close&&(r=Math.round(n.plotClose)+u,m.push("M",g,r,"L",g+t,r)),f[e?"attr":"animate"]({d:m}).addClass(n.getClassName(),!0))})},animate:null},{getClassName:function(){return B.prototype.getClassName.call(this)+(this.open<this.close?" highcharts-point-up":" highcharts-point-down")}})})(L);(function(a){var E=
a.defaultPlotOptions,B=a.each,F=a.merge,D=a.seriesType,n=a.seriesTypes;D("candlestick","ohlc",F(E.column,{states:{hover:{lineWidth:2}},tooltip:E.ohlc.tooltip,threshold:null,lineColor:"#000000",lineWidth:1,upColor:"#ffffff",stickyTracking:!0}),{pointAttribs:function(a,u){var h=n.column.prototype.pointAttribs.call(this,a,u),x=this.options,t=a.open<a.close,m=x.lineColor||this.color;h["stroke-width"]=x.lineWidth;h.fill=a.options.color||(t?x.upColor||this.color:this.color);h.stroke=a.lineColor||(t?x.upLineColor||
m:m);u&&(a=x.states[u],h.fill=a.color||h.fill,h.stroke=a.lineColor||h.stroke,h["stroke-width"]=a.lineWidth||h["stroke-width"]);return h},drawPoints:function(){var a=this,n=a.chart;B(a.points,function(h){var r=h.graphic,t,m,f,g,e,d,p,b=!r;void 0!==h.plotY&&(r||(h.graphic=r=n.renderer.path().add(a.group)),r.attr(a.pointAttribs(h,h.selected&&"select")).shadow(a.options.shadow),e=r.strokeWidth()%2/2,d=Math.round(h.plotX)-e,t=h.plotOpen,m=h.plotClose,f=Math.min(t,m),t=Math.max(t,m),p=Math.round(h.shapeArgs.width/
2),m=Math.round(f)!==Math.round(h.plotHigh),g=t!==h.yBottom,f=Math.round(f)+e,t=Math.round(t)+e,e=[],e.push("M",d-p,t,"L",d-p,f,"L",d+p,f,"L",d+p,t,"Z","M",d,f,"L",d,m?Math.round(h.plotHigh):f,"M",d,t,"L",d,g?Math.round(h.yBottom):t),r[b?"attr":"animate"]({d:e}).addClass(h.getClassName(),!0))})}})})(L);(function(a){var E=a.addEvent,B=a.each,F=a.merge,D=a.noop,n=a.Renderer,h=a.seriesType,u=a.seriesTypes,r=a.TrackerMixin,x=a.VMLRenderer,t=a.SVGRenderer.prototype.symbols,m=a.stableSort;h("flags","column",
{pointRange:0,shape:"flag",stackDistance:12,textAlign:"center",tooltip:{pointFormat:"{point.text}\x3cbr/\x3e"},threshold:null,y:-30,fillColor:"#ffffff",lineWidth:1,states:{hover:{lineColor:"#000000",fillColor:"#ccd6eb"}},style:{fontSize:"11px",fontWeight:"bold"}},{sorted:!1,noSharedTooltip:!0,allowDG:!1,takeOrdinalPosition:!1,trackerGroups:["markerGroup"],forceCrop:!0,init:a.Series.prototype.init,pointAttribs:function(a,g){var e=this.options,d=a&&a.color||this.color,f=e.lineColor,b=a&&a.lineWidth;
a=a&&a.fillColor||e.fillColor;g&&(a=e.states[g].fillColor,f=e.states[g].lineColor,b=e.states[g].lineWidth);return{fill:a||d,stroke:f||d,"stroke-width":b||e.lineWidth||0}},translate:function(){u.column.prototype.translate.apply(this);var a=this.options,g=this.chart,e=this.points,d=e.length-1,h,b,n=a.onSeries;h=n&&g.get(n);var a=a.onKey||"y",n=h&&h.options.step,v=h&&h.points,r=v&&v.length,q=this.xAxis,t=this.yAxis,c=q.getExtremes(),w=0,x,y,G;if(h&&h.visible&&r)for(w=(h.pointXOffset||0)+(h.barW||0)/
2,h=h.currentDataGrouping,y=v[r-1].x+(h?h.totalRange:0),m(e,function(a,c){return a.x-c.x}),a="plot"+a[0].toUpperCase()+a.substr(1);r--&&e[d]&&!(h=e[d],x=v[r],x.x<=h.x&&void 0!==x[a]&&(h.x<=y&&(h.plotY=x[a],x.x<h.x&&!n&&(G=v[r+1])&&void 0!==G[a]&&(h.plotY+=(h.x-x.x)/(G.x-x.x)*(G[a]-x[a]))),d--,r++,0>d)););B(e,function(a,d){var f;void 0===a.plotY&&(a.x>=c.min&&a.x<=c.max?a.plotY=g.chartHeight-q.bottom-(q.opposite?q.height:0)+q.offset-t.top:a.shapeArgs={});a.plotX+=w;(b=e[d-1])&&b.plotX===a.plotX&&(void 0===
b.stackIndex&&(b.stackIndex=0),f=b.stackIndex+1);a.stackIndex=f})},drawPoints:function(){var f=this.points,g=this.chart,e=g.renderer,d,h,b=this.options,m=b.y,n,r,q,t,c,w,u,y=this.yAxis;for(r=f.length;r--;)q=f[r],u=q.plotX>this.xAxis.len,d=q.plotX,t=q.stackIndex,n=q.options.shape||b.shape,h=q.plotY,void 0!==h&&(h=q.plotY+m-(void 0!==t&&t*b.stackDistance)),c=t?void 0:q.plotX,w=t?void 0:q.plotY,t=q.graphic,void 0!==h&&0<=d&&!u?(t||(t=q.graphic=e.label("",null,null,n,null,null,b.useHTML).attr(this.pointAttribs(q)).css(F(b.style,
q.style)).attr({align:"flag"===n?"left":"center",width:b.width,height:b.height,"text-align":b.textAlign}).addClass("highcharts-point").add(this.markerGroup),q.graphic.div&&(q.graphic.div.point=q),t.shadow(b.shadow)),0<d&&(d-=t.strokeWidth()%2),t.attr({text:q.options.title||b.title||"A",x:d,y:h,anchorX:c,anchorY:w}),q.tooltipPos=g.inverted?[y.len+y.pos-g.plotLeft-h,this.xAxis.len-d]:[d,h+y.pos-g.plotTop]):t&&(q.graphic=t.destroy());b.useHTML&&a.wrap(this.markerGroup,"on",function(c){return a.SVGElement.prototype.on.apply(c.apply(this,
[].slice.call(arguments,1)),[].slice.call(arguments,1))})},drawTracker:function(){var a=this.points;r.drawTrackerPoint.apply(this);B(a,function(f){var e=f.graphic;e&&E(e.element,"mouseover",function(){0<f.stackIndex&&!f.raised&&(f._y=e.y,e.attr({y:f._y-8}),f.raised=!0);B(a,function(a){a!==f&&a.raised&&a.graphic&&(a.graphic.attr({y:a._y}),a.raised=!1)})})})},animate:D,buildKDTree:D,setClip:D});t.flag=function(a,g,e,d,h){return["M",h&&h.anchorX||a,h&&h.anchorY||g,"L",a,g+d,a,g,a+e,g,a+e,g+d,a,g+d,"Z"]};
B(["circle","square"],function(a){t[a+"pin"]=function(f,e,d,h,b){var g=b&&b.anchorX;b=b&&b.anchorY;"circle"===a&&h>d&&(f-=Math.round((h-d)/2),d=h);f=t[a](f,e,d,h);g&&b&&f.push("M",g,e>b?e:e+h,"L",g,b);return f}});n===x&&B(["flag","circlepin","squarepin"],function(a){x.prototype.symbols[a]=t[a]})})(L);(function(a){function E(a,b,d){this.init(a,b,d)}var B=a.addEvent,F=a.Axis,D=a.correctFloat,n=a.defaultOptions,h=a.defined,u=a.destroyObjectProperties,r=a.doc,x=a.each,t=a.fireEvent,m=a.hasTouch,f=a.isTouchDevice,
g=a.merge,e=a.pick,d=a.removeEvent,p=a.wrap,b,A={height:f?20:14,barBorderRadius:0,buttonBorderRadius:0,liveRedraw:a.svg&&!f,margin:10,minWidth:6,step:.2,zIndex:3,barBackgroundColor:"#cccccc",barBorderWidth:1,barBorderColor:"#cccccc",buttonArrowColor:"#333333",buttonBackgroundColor:"#e6e6e6",buttonBorderColor:"#cccccc",buttonBorderWidth:1,rifleColor:"#333333",trackBackgroundColor:"#f2f2f2",trackBorderColor:"#f2f2f2",trackBorderWidth:1};n.scrollbar=g(!0,A,n.scrollbar);a.swapXY=b=function(a,b){var d=
a.length,e;if(b)for(b=0;b<d;b+=3)e=a[b+1],a[b+1]=a[b+2],a[b+2]=e;return a};E.prototype={init:function(a,b,d){this.scrollbarButtons=[];this.renderer=a;this.userOptions=b;this.options=g(A,b);this.chart=d;this.size=e(this.options.size,this.options.height);b.enabled&&(this.render(),this.initEvents(),this.addEvents())},render:function(){var a=this.renderer,d=this.options,e=this.size,f;this.group=f=a.g("scrollbar").attr({zIndex:d.zIndex,translateY:-99999}).add();this.track=a.rect().addClass("highcharts-scrollbar-track").attr({x:0,
r:d.trackBorderRadius||0,height:e,width:e}).add(f);this.track.attr({fill:d.trackBackgroundColor,stroke:d.trackBorderColor,"stroke-width":d.trackBorderWidth});this.trackBorderWidth=this.track.strokeWidth();this.track.attr({y:-this.trackBorderWidth%2/2});this.scrollbarGroup=a.g().add(f);this.scrollbar=a.rect().addClass("highcharts-scrollbar-thumb").attr({height:e,width:e,r:d.barBorderRadius||0}).add(this.scrollbarGroup);this.scrollbarRifles=a.path(b(["M",-3,e/4,"L",-3,2*e/3,"M",0,e/4,"L",0,2*e/3,"M",
3,e/4,"L",3,2*e/3],d.vertical)).addClass("highcharts-scrollbar-rifles").add(this.scrollbarGroup);this.scrollbar.attr({fill:d.barBackgroundColor,stroke:d.barBorderColor,"stroke-width":d.barBorderWidth});this.scrollbarRifles.attr({stroke:d.rifleColor,"stroke-width":1});this.scrollbarStrokeWidth=this.scrollbar.strokeWidth();this.scrollbarGroup.translate(-this.scrollbarStrokeWidth%2/2,-this.scrollbarStrokeWidth%2/2);this.drawScrollbarButton(0);this.drawScrollbarButton(1)},position:function(a,b,d,e){var c=
this.options.vertical,f=0,g=this.rendered?"animate":"attr";this.x=a;this.y=b+this.trackBorderWidth;this.width=d;this.xOffset=this.height=e;this.yOffset=f;c?(this.width=this.yOffset=d=f=this.size,this.xOffset=b=0,this.barWidth=e-2*d,this.x=a+=this.options.margin):(this.height=this.xOffset=e=b=this.size,this.barWidth=d-2*e,this.y+=this.options.margin);this.group[g]({translateX:a,translateY:this.y});this.track[g]({width:d,height:e});this.scrollbarButtons[1][g]({translateX:c?0:d-b,translateY:c?e-f:0})},
drawScrollbarButton:function(a){var d=this.renderer,e=this.scrollbarButtons,f=this.options,c=this.size,g;g=d.g().add(this.group);e.push(g);g=d.rect().addClass("highcharts-scrollbar-button").add(g);g.attr({stroke:f.buttonBorderColor,"stroke-width":f.buttonBorderWidth,fill:f.buttonBackgroundColor});g.attr(g.crisp({x:-.5,y:-.5,width:c+1,height:c+1,r:f.buttonBorderRadius},g.strokeWidth()));g=d.path(b(["M",c/2+(a?-1:1),c/2-3,"L",c/2+(a?-1:1),c/2+3,"L",c/2+(a?2:-2),c/2],f.vertical)).addClass("highcharts-scrollbar-arrow").add(e[a]);
g.attr({fill:f.buttonArrowColor})},setRange:function(a,b){var d=this.options,e=d.vertical,c=d.minWidth,f=this.barWidth,g,m,n=this.rendered&&!this.hasDragged?"animate":"attr";h(f)&&(a=Math.max(a,0),g=Math.ceil(f*a),this.calculatedWidth=m=D(f*Math.min(b,1)-g),m<c&&(g=(f-c+m)*a,m=c),c=Math.floor(g+this.xOffset+this.yOffset),f=m/2-.5,this.from=a,this.to=b,e?(this.scrollbarGroup[n]({translateY:c}),this.scrollbar[n]({height:m}),this.scrollbarRifles[n]({translateY:f}),this.scrollbarTop=c,this.scrollbarLeft=
0):(this.scrollbarGroup[n]({translateX:c}),this.scrollbar[n]({width:m}),this.scrollbarRifles[n]({translateX:f}),this.scrollbarLeft=c,this.scrollbarTop=0),12>=m?this.scrollbarRifles.hide():this.scrollbarRifles.show(!0),!1===d.showFull&&(0>=a&&1<=b?this.group.hide():this.group.show()),this.rendered=!0)},initEvents:function(){var a=this;a.mouseMoveHandler=function(b){var d=a.chart.pointer.normalize(b),e=a.options.vertical?"chartY":"chartX",c=a.initPositions;!a.grabbedCenter||b.touches&&0===b.touches[0][e]||
(d=a.cursorToScrollbarPosition(d)[e],e=a[e],e=d-e,a.hasDragged=!0,a.updatePosition(c[0]+e,c[1]+e),a.hasDragged&&t(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMType:b.type,DOMEvent:b}))};a.mouseUpHandler=function(b){a.hasDragged&&t(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMType:b.type,DOMEvent:b});a.grabbedCenter=a.hasDragged=a.chartX=a.chartY=null};a.mouseDownHandler=function(b){b=a.chart.pointer.normalize(b);b=a.cursorToScrollbarPosition(b);a.chartX=b.chartX;a.chartY=b.chartY;
a.initPositions=[a.from,a.to];a.grabbedCenter=!0};a.buttonToMinClick=function(b){var d=D(a.to-a.from)*a.options.step;a.updatePosition(D(a.from-d),D(a.to-d));t(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMEvent:b})};a.buttonToMaxClick=function(b){var d=(a.to-a.from)*a.options.step;a.updatePosition(a.from+d,a.to+d);t(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMEvent:b})};a.trackClick=function(b){var d=a.chart.pointer.normalize(b),e=a.to-a.from,c=a.y+a.scrollbarTop,f=a.x+a.scrollbarLeft;
a.options.vertical&&d.chartY>c||!a.options.vertical&&d.chartX>f?a.updatePosition(a.from+e,a.to+e):a.updatePosition(a.from-e,a.to-e);t(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMEvent:b})}},cursorToScrollbarPosition:function(a){var b=this.options,b=b.minWidth>this.calculatedWidth?b.minWidth:0;return{chartX:(a.chartX-this.x-this.xOffset)/(this.barWidth-b),chartY:(a.chartY-this.y-this.yOffset)/(this.barWidth-b)}},updatePosition:function(a,b){1<b&&(a=D(1-D(b-a)),b=1);0>a&&(b=D(b-a),a=0);
this.from=a;this.to=b},update:function(a){this.destroy();this.init(this.chart.renderer,g(!0,this.options,a),this.chart)},addEvents:function(){var a=this.options.inverted?[1,0]:[0,1],b=this.scrollbarButtons,d=this.scrollbarGroup.element,e=this.mouseDownHandler,c=this.mouseMoveHandler,f=this.mouseUpHandler,a=[[b[a[0]].element,"click",this.buttonToMinClick],[b[a[1]].element,"click",this.buttonToMaxClick],[this.track.element,"click",this.trackClick],[d,"mousedown",e],[r,"mousemove",c],[r,"mouseup",f]];
m&&a.push([d,"touchstart",e],[r,"touchmove",c],[r,"touchend",f]);x(a,function(a){B.apply(null,a)});this._events=a},removeEvents:function(){x(this._events,function(a){d.apply(null,a)});this._events.length=0},destroy:function(){var a=this.chart.scroller;this.removeEvents();x(["track","scrollbarRifles","scrollbar","scrollbarGroup","group"],function(a){this[a]&&this[a].destroy&&(this[a]=this[a].destroy())},this);a&&this===a.scrollbar&&(a.scrollbar=null,u(a.scrollbarButtons))}};p(F.prototype,"init",function(a){var b=
this;a.apply(b,Array.prototype.slice.call(arguments,1));b.options.scrollbar&&b.options.scrollbar.enabled&&(b.options.scrollbar.vertical=!b.horiz,b.options.startOnTick=b.options.endOnTick=!1,b.scrollbar=new E(b.chart.renderer,b.options.scrollbar,b.chart),B(b.scrollbar,"changed",function(a){var d=Math.min(e(b.options.min,b.min),b.min,b.dataMin),c=Math.max(e(b.options.max,b.max),b.max,b.dataMax)-d,f;b.horiz&&!b.reversed||!b.horiz&&b.reversed?(f=d+c*this.to,d+=c*this.from):(f=d+c*(1-this.from),d+=c*(1-
this.to));b.setExtremes(d,f,!0,!1,a)}))});p(F.prototype,"render",function(a){var b=Math.min(e(this.options.min,this.min),this.min,this.dataMin),d=Math.max(e(this.options.max,this.max),this.max,this.dataMax),f=this.scrollbar,c=this.titleOffset||0;a.apply(this,Array.prototype.slice.call(arguments,1));if(f){this.horiz?(f.position(this.left,this.top+this.height+2+this.chart.scrollbarsOffsets[1]+(this.opposite?0:c+this.axisTitleMargin+this.offset),this.width,this.height),c=1):(f.position(this.left+this.width+
2+this.chart.scrollbarsOffsets[0]+(this.opposite?c+this.axisTitleMargin+this.offset:0),this.top,this.width,this.height),c=0);if(!this.opposite&&!this.horiz||this.opposite&&this.horiz)this.chart.scrollbarsOffsets[c]+=this.scrollbar.size+this.scrollbar.options.margin;isNaN(b)||isNaN(d)||!h(this.min)||!h(this.max)?f.setRange(0,0):(c=(this.min-b)/(d-b),b=(this.max-b)/(d-b),this.horiz&&!this.reversed||!this.horiz&&this.reversed?f.setRange(c,b):f.setRange(1-b,1-c))}});p(F.prototype,"getOffset",function(a){var b=
this.horiz?2:1,d=this.scrollbar;a.apply(this,Array.prototype.slice.call(arguments,1));d&&(this.chart.scrollbarsOffsets=[0,0],this.chart.axisOffset[b]+=d.size+d.options.margin)});p(F.prototype,"destroy",function(a){this.scrollbar&&(this.scrollbar=this.scrollbar.destroy());a.apply(this,Array.prototype.slice.call(arguments,1))});a.Scrollbar=E})(L);(function(a){function E(a){this.init(a)}var B=a.addEvent,F=a.Axis,D=a.Chart,n=a.color,h=a.defaultOptions,u=a.defined,r=a.destroyObjectProperties,x=a.doc,t=
a.each,m=a.erase,f=a.error,g=a.extend,e=a.grep,d=a.hasTouch,p=a.isNumber,b=a.isObject,A=a.merge,v=a.pick,H=a.removeEvent,q=a.Scrollbar,J=a.Series,c=a.seriesTypes,w=a.wrap,K=a.swapXY,y=[].concat(a.defaultDataGroupingUnits),G=function(a){var b=e(arguments,p);if(b.length)return Math[a].apply(0,b)};y[4]=["day",[1,2,3,4]];y[5]=["week",[1,2,3]];c=void 0===c.areaspline?"line":"areaspline";g(h,{navigator:{height:40,margin:25,maskInside:!0,handles:{backgroundColor:"#f2f2f2",borderColor:"#999999"},maskFill:n("#6685c2").setOpacity(.3).get(),
outlineColor:"#cccccc",outlineWidth:1,series:{type:c,color:"#335cad",fillOpacity:.05,lineWidth:1,compare:null,dataGrouping:{approximation:"average",enabled:!0,groupPixelWidth:2,smoothed:!0,units:y},dataLabels:{enabled:!1,zIndex:2},id:"highcharts-navigator-series",className:"highcharts-navigator-series",lineColor:null,marker:{enabled:!1},pointRange:0,shadow:!1,threshold:null},xAxis:{className:"highcharts-navigator-xaxis",tickLength:0,lineWidth:0,gridLineColor:"#e6e6e6",gridLineWidth:1,tickPixelInterval:200,
labels:{align:"left",style:{color:"#999999"},x:3,y:-4},crosshair:!1},yAxis:{className:"highcharts-navigator-yaxis",gridLineWidth:0,startOnTick:!1,endOnTick:!1,minPadding:.1,maxPadding:.1,labels:{enabled:!1},crosshair:!1,title:{text:null},tickLength:0,tickWidth:0}}});E.prototype={drawHandle:function(a,b,c,d){this.handles[b][d](c?{translateX:Math.round(this.left+this.height/2-8),translateY:Math.round(this.top+parseInt(a,10)+.5)}:{translateX:Math.round(this.left+parseInt(a,10)),translateY:Math.round(this.top+
this.height/2-8)})},getHandlePath:function(a){return K(["M",-4.5,.5,"L",3.5,.5,"L",3.5,15.5,"L",-4.5,15.5,"L",-4.5,.5,"M",-1.5,4,"L",-1.5,12,"M",.5,4,"L",.5,12],a)},drawOutline:function(a,b,c,d){var e=this.navigatorOptions.maskInside,f=this.outline.strokeWidth(),l=f/2,f=f%2/2,k=this.outlineHeight,g=this.scrollbarHeight,h=this.size,m=this.left-g,n=this.top;c?(m-=l,c=n+b+f,b=n+a+f,a=["M",m+k,n-g-f,"L",m+k,c,"L",m,c,"L",m,b,"L",m+k,b,"L",m+k,n+h+g].concat(e?["M",m+k,c-l,"L",m+k,b+l]:[])):(a+=m+g-f,b+=
m+g-f,n+=l,a=["M",m,n,"L",a,n,"L",a,n+k,"L",b,n+k,"L",b,n,"L",m+h+2*g,n].concat(e?["M",a-l,n,"L",b+l,n]:[]));this.outline[d]({d:a})},drawMasks:function(a,b,c,d){var e=this.left,f=this.top,l=this.height,k,g,h,m;c?(h=[e,e,e],m=[f,f+a,f+b],g=[l,l,l],k=[a,b-a,this.size-b]):(h=[e,e+a,e+b],m=[f,f,f],g=[a,b-a,this.size-b],k=[l,l,l]);t(this.shades,function(a,b){a[d]({x:h[b],y:m[b],width:g[b],height:k[b]})})},renderElements:function(){var a=this,b=a.navigatorOptions,c=b.maskInside,d=a.chart,e=d.inverted,f=
d.renderer,g;a.navigatorGroup=g=f.g("navigator").attr({zIndex:8,visibility:"hidden"}).add();var h={cursor:e?"ns-resize":"ew-resize"};t([!c,c,!c],function(c,d){a.shades[d]=f.rect().addClass("highcharts-navigator-mask"+(1===d?"-inside":"-outside")).attr({fill:c?b.maskFill:"rgba(0,0,0,0)"}).css(1===d&&h).add(g)});a.outline=f.path().addClass("highcharts-navigator-outline").attr({"stroke-width":b.outlineWidth,stroke:b.outlineColor}).add(g);t([0,1],function(c){a.handles[c]=f.path(a.getHandlePath(e)).attr({zIndex:7-
c}).addClass("highcharts-navigator-handle highcharts-navigator-handle-"+["left","right"][c]).add(g);var d=b.handles;a.handles[c].attr({fill:d.backgroundColor,stroke:d.borderColor,"stroke-width":1}).css(h)})},update:function(a){this.destroy();A(!0,this.chart.options.navigator,this.options,a);this.init(this.chart)},render:function(a,b,c,d){var e=this.chart,f,l,k=this.scrollbarHeight,g,h=this.xAxis;f=h.fake?e.xAxis[0]:h;var m=this.navigatorEnabled,n,q=this.rendered;l=e.inverted;var r=e.xAxis[0].minRange;
if(!this.hasDragged||u(c)){if(!p(a)||!p(b))if(q)c=0,d=h.width;else return;this.left=v(h.left,e.plotLeft+k+(l?e.plotWidth:0));this.size=n=g=v(h.len,(l?e.plotHeight:e.plotWidth)-2*k);e=l?k:g+2*k;c=v(c,h.toPixels(a,!0));d=v(d,h.toPixels(b,!0));p(c)&&Infinity!==Math.abs(c)||(c=0,d=e);a=h.toValue(c,!0);b=h.toValue(d,!0);if(Math.abs(b-a)<r)if(this.grabbedLeft)c=h.toPixels(b-r,!0);else if(this.grabbedRight)d=h.toPixels(a+r,!0);else return;this.zoomedMax=Math.min(Math.max(c,d,0),n);this.zoomedMin=Math.min(Math.max(this.fixedWidth?
this.zoomedMax-this.fixedWidth:Math.min(c,d),0),n);this.range=this.zoomedMax-this.zoomedMin;n=Math.round(this.zoomedMax);c=Math.round(this.zoomedMin);m&&(this.navigatorGroup.attr({visibility:"visible"}),q=q&&!this.hasDragged?"animate":"attr",this.drawMasks(c,n,l,q),this.drawOutline(c,n,l,q),this.drawHandle(c,0,l,q),this.drawHandle(n,1,l,q));this.scrollbar&&(l?(l=this.top-k,f=this.left-k+(m||!f.opposite?0:(f.titleOffset||0)+f.axisTitleMargin),k=g+2*k):(l=this.top+(m?this.height:-k),f=this.left-k),
this.scrollbar.position(f,l,e,k),this.scrollbar.setRange(this.zoomedMin/g,this.zoomedMax/g));this.rendered=!0}},addMouseEvents:function(){var a=this,b=a.chart,c=b.container,e=[],f,g;a.mouseMoveHandler=f=function(b){a.onMouseMove(b)};a.mouseUpHandler=g=function(b){a.onMouseUp(b)};e=a.getPartsEvents("mousedown");e.push(B(c,"mousemove",f),B(x,"mouseup",g));d&&(e.push(B(c,"touchmove",f),B(x,"touchend",g)),e.concat(a.getPartsEvents("touchstart")));a.eventsToUnbind=e;a.series&&a.series[0]&&e.push(B(a.series[0].xAxis,
"foundExtremes",function(){b.navigator.modifyNavigatorAxisExtremes()}))},getPartsEvents:function(a){var b=this,c=[];t(["shades","handles"],function(d){t(b[d],function(e,f){c.push(B(e.element,a,function(a){b[d+"Mousedown"](a,f)}))})});return c},shadesMousedown:function(a,b){a=this.chart.pointer.normalize(a);var c=this.chart,d=this.xAxis,e=this.zoomedMin,f=this.left,l=this.size,g=this.range,h=a.chartX,m;c.inverted&&(h=a.chartY,f=this.top);1===b?(this.grabbedCenter=h,this.fixedWidth=g,this.dragOffset=
h-e):(a=h-f-g/2,0===b?a=Math.max(0,a):2===b&&a+g>=l&&(a=l-g,m=this.getUnionExtremes().dataMax),a!==e&&(this.fixedWidth=g,b=d.toFixedRange(a,a+g,null,m),c.xAxis[0].setExtremes(Math.min(b.min,b.max),Math.max(b.min,b.max),!0,null,{trigger:"navigator"})))},handlesMousedown:function(a,b){this.chart.pointer.normalize(a);a=this.chart;var c=a.xAxis[0],d=a.inverted&&!c.reversed||!a.inverted&&c.reversed;0===b?(this.grabbedLeft=!0,this.otherHandlePos=this.zoomedMax,this.fixedExtreme=d?c.min:c.max):(this.grabbedRight=
!0,this.otherHandlePos=this.zoomedMin,this.fixedExtreme=d?c.max:c.min);a.fixedRange=null},onMouseMove:function(a){var b=this,c=b.chart,d=b.left,e=b.navigatorSize,f=b.range,l=b.dragOffset,g=c.inverted;a.touches&&0===a.touches[0].pageX||(a=c.pointer.normalize(a),c=a.chartX,g&&(d=b.top,c=a.chartY),b.grabbedLeft?(b.hasDragged=!0,b.render(0,0,c-d,b.otherHandlePos)):b.grabbedRight?(b.hasDragged=!0,b.render(0,0,b.otherHandlePos,c-d)):b.grabbedCenter&&(b.hasDragged=!0,c<l?c=l:c>e+l-f&&(c=e+l-f),b.render(0,
0,c-l,c-l+f)),b.hasDragged&&b.scrollbar&&b.scrollbar.options.liveRedraw&&(a.DOMType=a.type,setTimeout(function(){b.onMouseUp(a)},0)))},onMouseUp:function(a){var b=this.chart,c=this.xAxis,d=this.scrollbar,e,f,l=a.DOMEvent||a;(!this.hasDragged||d&&d.hasDragged)&&"scrollbar"!==a.trigger||(this.zoomedMin===this.otherHandlePos?e=this.fixedExtreme:this.zoomedMax===this.otherHandlePos&&(f=this.fixedExtreme),this.zoomedMax===this.size&&(f=this.getUnionExtremes().dataMax),c=c.toFixedRange(this.zoomedMin,this.zoomedMax,
e,f),u(c.min)&&b.xAxis[0].setExtremes(Math.min(c.min,c.max),Math.max(c.min,c.max),!0,this.hasDragged?!1:null,{trigger:"navigator",triggerOp:"navigator-drag",DOMEvent:l}));"mousemove"!==a.DOMType&&(this.grabbedLeft=this.grabbedRight=this.grabbedCenter=this.fixedWidth=this.fixedExtreme=this.otherHandlePos=this.hasDragged=this.dragOffset=null)},removeEvents:function(){this.eventsToUnbind&&(t(this.eventsToUnbind,function(a){a()}),this.eventsToUnbind=void 0);this.removeBaseSeriesEvents()},removeBaseSeriesEvents:function(){var a=
this.baseSeries||[];this.navigatorEnabled&&a[0]&&!1!==this.navigatorOptions.adaptToUpdatedData&&(t(a,function(a){H(a,"updatedData",this.updatedDataHandler)},this),a[0].xAxis&&H(a[0].xAxis,"foundExtremes",this.modifyBaseAxisExtremes))},init:function(a){var b=a.options,c=b.navigator,d=c.enabled,e=b.scrollbar,f=e.enabled,b=d?c.height:0,l=f?e.height:0;this.handles=[];this.shades=[];this.chart=a;this.setBaseSeries();this.height=b;this.scrollbarHeight=l;this.scrollbarEnabled=f;this.navigatorEnabled=d;this.navigatorOptions=
c;this.scrollbarOptions=e;this.outlineHeight=b+l;this.opposite=v(c.opposite,!d&&a.inverted);var g=this,e=g.baseSeries,f=a.xAxis.length,h=a.yAxis.length,m=e&&e[0]&&e[0].xAxis||a.xAxis[0];a.extraMargin={type:g.opposite?"plotTop":"marginBottom",value:(d||!a.inverted?g.outlineHeight:0)+c.margin};a.inverted&&(a.extraMargin.type=g.opposite?"marginRight":"plotLeft");a.isDirtyBox=!0;g.navigatorEnabled?(g.xAxis=new F(a,A({breaks:m.options.breaks,ordinal:m.options.ordinal},c.xAxis,{id:"navigator-x-axis",yAxis:"navigator-y-axis",
isX:!0,type:"datetime",index:f,offset:0,keepOrdinalPadding:!0,startOnTick:!1,endOnTick:!1,minPadding:0,maxPadding:0,zoomEnabled:!1},a.inverted?{offsets:[l,0,-l,0],width:b}:{offsets:[0,-l,0,l],height:b})),g.yAxis=new F(a,A(c.yAxis,{id:"navigator-y-axis",alignTicks:!1,offset:0,index:h,zoomEnabled:!1},a.inverted?{width:b}:{height:b})),e||c.series.data?g.addBaseSeries():0===a.series.length&&w(a,"redraw",function(b,c){0<a.series.length&&!g.series&&(g.setBaseSeries(),a.redraw=b);b.call(a,c)}),g.renderElements(),
g.addMouseEvents()):g.xAxis={translate:function(b,c){var d=a.xAxis[0],e=d.getExtremes(),f=d.len-2*l,k=G("min",d.options.min,e.dataMin),d=G("max",d.options.max,e.dataMax)-k;return c?b*d/f+k:f*(b-k)/d},toPixels:function(a){return this.translate(a)},toValue:function(a){return this.translate(a,!0)},toFixedRange:F.prototype.toFixedRange,fake:!0};a.options.scrollbar.enabled&&(a.scrollbar=g.scrollbar=new q(a.renderer,A(a.options.scrollbar,{margin:g.navigatorEnabled?0:10,vertical:a.inverted}),a),B(g.scrollbar,
"changed",function(b){var c=g.size,d=c*this.to,c=c*this.from;g.hasDragged=g.scrollbar.hasDragged;g.render(0,0,c,d);(a.options.scrollbar.liveRedraw||"mousemove"!==b.DOMType)&&setTimeout(function(){g.onMouseUp(b)})}));g.addBaseSeriesEvents();g.addChartEvents()},getUnionExtremes:function(a){var b=this.chart.xAxis[0],c=this.xAxis,d=c.options,e=b.options,f;a&&null===b.dataMin||(f={dataMin:v(d&&d.min,G("min",e.min,b.dataMin,c.dataMin,c.min)),dataMax:v(d&&d.max,G("max",e.max,b.dataMax,c.dataMax,c.max))});
return f},setBaseSeries:function(a){var b=this.chart,c;a=a||b.options&&b.options.navigator.baseSeries||0;this.series&&(this.removeBaseSeriesEvents(),t(this.series,function(a){a.destroy()}));c=this.baseSeries=[];t(b.series||[],function(b,d){(b.options.showInNavigator||(d===a||b.options.id===a)&&!1!==b.options.showInNavigator)&&c.push(b)});this.xAxis&&!this.xAxis.fake&&this.addBaseSeries()},addBaseSeries:function(){var a=this,b=a.chart,c=a.series=[],d=a.baseSeries,e,f,g=a.navigatorOptions.series,h,
m={enableMouseTracking:!1,index:null,group:"nav",padXAxis:!1,xAxis:"navigator-x-axis",yAxis:"navigator-y-axis",showInLegend:!1,stacking:!1,isInternal:!0,visible:!0};d?t(d,function(d,k){m.name="Navigator "+(k+1);e=d.options||{};h=e.navigatorOptions||{};f=A(e,m,g,h);k=h.data||g.data;a.hasNavigatorData=a.hasNavigatorData||!!k;f.data=k||e.data&&e.data.slice(0);d.navigatorSeries=b.initSeries(f);c.push(d.navigatorSeries)}):(f=A(g,m),f.data=g.data,a.hasNavigatorData=!!f.data,c.push(b.initSeries(f)));this.addBaseSeriesEvents()},
addBaseSeriesEvents:function(){var a=this,b=a.baseSeries||[];b[0]&&b[0].xAxis&&B(b[0].xAxis,"foundExtremes",this.modifyBaseAxisExtremes);!1!==this.navigatorOptions.adaptToUpdatedData&&t(b,function(b){b.xAxis&&B(b,"updatedData",this.updatedDataHandler);B(b,"remove",function(){this.navigatorSeries&&(m(a.series,this.navigatorSeries),this.navigatorSeries.remove(!1),delete this.navigatorSeries)})},this)},modifyNavigatorAxisExtremes:function(){var a=this.xAxis,b;a.getExtremes&&(!(b=this.getUnionExtremes(!0))||
b.dataMin===a.min&&b.dataMax===a.max||(a.min=b.dataMin,a.max=b.dataMax))},modifyBaseAxisExtremes:function(){var a=this.chart.navigator,b=this.getExtremes(),c=b.dataMin,d=b.dataMax,b=b.max-b.min,e=a.stickToMin,f=a.stickToMax,g,h,m=a.series&&a.series[0],n=!!this.setExtremes;this.eventArgs&&"rangeSelectorButton"===this.eventArgs.trigger||(e&&(h=c,g=h+b),f&&(g=d,e||(h=Math.max(g-b,m&&m.xData?m.xData[0]:-Number.MAX_VALUE))),n&&(e||f)&&p(h)&&(this.min=this.userMin=h,this.max=this.userMax=g));a.stickToMin=
a.stickToMax=null},updatedDataHandler:function(){var a=this.chart.navigator,b=this.navigatorSeries;a.stickToMin=p(this.xAxis.min)&&this.xAxis.min<=this.xData[0];a.stickToMax=Math.round(a.zoomedMax)>=Math.round(a.size);b&&!a.hasNavigatorData&&(b.options.pointStart=this.xData[0],b.setData(this.options.data,!1,null,!1))},addChartEvents:function(){B(this.chart,"redraw",function(){var a=this.navigator,b=a&&(a.baseSeries&&a.baseSeries[0]&&a.baseSeries[0].xAxis||a.scrollbar&&this.xAxis[0]);b&&a.render(b.min,
b.max)})},destroy:function(){this.removeEvents();this.xAxis&&(m(this.chart.xAxis,this.xAxis),m(this.chart.axes,this.xAxis));this.yAxis&&(m(this.chart.yAxis,this.yAxis),m(this.chart.axes,this.yAxis));t(this.series||[],function(a){a.destroy&&a.destroy()});t("series xAxis yAxis shades outline scrollbarTrack scrollbarRifles scrollbarGroup scrollbar navigatorGroup rendered".split(" "),function(a){this[a]&&this[a].destroy&&this[a].destroy();this[a]=null},this);t([this.handles],function(a){r(a)},this)}};
a.Navigator=E;w(F.prototype,"zoom",function(a,b,c){var d=this.chart,e=d.options,f=e.chart.zoomType,g=e.navigator,e=e.rangeSelector,k;this.isXAxis&&(g&&g.enabled||e&&e.enabled)&&("x"===f?d.resetZoomButton="blocked":"y"===f?k=!1:"xy"===f&&(d=this.previousZoom,u(b)?this.previousZoom=[this.min,this.max]:d&&(b=d[0],c=d[1],delete this.previousZoom)));return void 0!==k?k:a.call(this,b,c)});w(D.prototype,"init",function(a,b,c){B(this,"beforeRender",function(){var a=this.options;if(a.navigator.enabled||a.scrollbar.enabled)this.scroller=
this.navigator=new E(this)});a.call(this,b,c)});w(D.prototype,"setChartSize",function(a){var b=this.legend,c=this.navigator,d,e,f,g;a.apply(this,[].slice.call(arguments,1));c&&(e=b.options,f=c.xAxis,g=c.yAxis,d=c.scrollbarHeight,this.inverted?(c.left=c.opposite?this.chartWidth-d-c.height:this.spacing[3]+d,c.top=this.plotTop+d):(c.left=this.plotLeft+d,c.top=c.navigatorOptions.top||this.chartHeight-c.height-d-this.spacing[2]-("bottom"===e.verticalAlign&&e.enabled&&!e.floating?b.legendHeight+v(e.margin,
10):0)),f&&g&&(this.inverted?f.options.left=g.options.left=c.left:f.options.top=g.options.top=c.top,f.setAxisSize(),g.setAxisSize()))});w(J.prototype,"addPoint",function(a,c,d,e,g){var k=this.options.turboThreshold;k&&this.xData.length>k&&b(c,!0)&&this.chart.navigator&&f(20,!0);a.call(this,c,d,e,g)});w(D.prototype,"addSeries",function(a,b,c,d){a=a.call(this,b,!1,d);this.navigator&&this.navigator.setBaseSeries();v(c,!0)&&this.redraw();return a});w(J.prototype,"update",function(a,b,c){a.call(this,b,
!1);this.chart.navigator&&this.chart.navigator.setBaseSeries();v(c,!0)&&this.chart.redraw()});D.prototype.callbacks.push(function(a){var b=a.navigator;b&&(a=a.xAxis[0].getExtremes(),b.render(a.min,a.max))})})(L);(function(a){function E(a){this.init(a)}var B=a.addEvent,F=a.Axis,D=a.Chart,n=a.css,h=a.createElement,u=a.dateFormat,r=a.defaultOptions,x=r.global.useUTC,t=a.defined,m=a.destroyObjectProperties,f=a.discardElement,g=a.each,e=a.extend,d=a.fireEvent,p=a.Date,b=a.isNumber,A=a.merge,v=a.pick,H=
a.pInt,q=a.splat,J=a.wrap;e(r,{rangeSelector:{buttonTheme:{"stroke-width":0,width:28,height:18,padding:2,zIndex:7},height:35,inputPosition:{align:"right"},labelStyle:{color:"#666666"}}});r.lang=A(r.lang,{rangeSelectorZoom:"Zoom",rangeSelectorFrom:"From",rangeSelectorTo:"To"});E.prototype={clickButton:function(a,d){var c=this,e=c.chart,f=c.buttonOptions[a],h=e.xAxis[0],m=e.scroller&&e.scroller.getUnionExtremes()||h||{},k=m.dataMin,n=m.dataMax,p,r=h&&Math.round(Math.min(h.max,v(n,h.max))),t=f.type,
u,m=f._range,w,C,A,D=f.dataGrouping;if(null!==k&&null!==n){e.fixedRange=m;D&&(this.forcedDataGrouping=!0,F.prototype.setDataGrouping.call(h||{chart:this.chart},D,!1));if("month"===t||"year"===t)h?(t={range:f,max:r,dataMin:k,dataMax:n},p=h.minFromRange.call(t),b(t.newMax)&&(r=t.newMax)):m=f;else if(m)p=Math.max(r-m,k),r=Math.min(p+m,n);else if("ytd"===t)if(h)void 0===n&&(k=Number.MAX_VALUE,n=Number.MIN_VALUE,g(e.series,function(a){a=a.xData;k=Math.min(a[0],k);n=Math.max(a[a.length-1],n)}),d=!1),r=
c.getYTDExtremes(n,k,x),p=w=r.min,r=r.max;else{B(e,"beforeRender",function(){c.clickButton(a)});return}else"all"===t&&h&&(p=k,r=n);c.setSelected(a);h?h.setExtremes(p,r,v(d,1),null,{trigger:"rangeSelectorButton",rangeSelectorButton:f}):(u=q(e.options.xAxis)[0],A=u.range,u.range=m,C=u.min,u.min=w,B(e,"load",function(){u.range=A;u.min=C}))}},setSelected:function(a){this.selected=this.options.selected=a},defaultButtons:[{type:"month",count:1,text:"1m"},{type:"month",count:3,text:"3m"},{type:"month",count:6,
text:"6m"},{type:"ytd",text:"YTD"},{type:"year",count:1,text:"1y"},{type:"all",text:"All"}],init:function(a){var b=this,c=a.options.rangeSelector,e=c.buttons||[].concat(b.defaultButtons),f=c.selected,h=function(){var a=b.minInput,c=b.maxInput;a&&a.blur&&d(a,"blur");c&&c.blur&&d(c,"blur")};b.chart=a;b.options=c;b.buttons=[];a.extraTopMargin=c.height;b.buttonOptions=e;this.unMouseDown=B(a.container,"mousedown",h);this.unResize=B(a,"resize",h);g(e,b.computeButtonRange);void 0!==f&&e[f]&&this.clickButton(f,
!1);B(a,"load",function(){B(a.xAxis[0],"setExtremes",function(c){this.max-this.min!==a.fixedRange&&"rangeSelectorButton"!==c.trigger&&"updatedData"!==c.trigger&&b.forcedDataGrouping&&this.setDataGrouping(!1,!1)})})},updateButtonStates:function(){var a=this.chart,d=a.xAxis[0],e=Math.round(d.max-d.min),f=!d.hasVisibleSeries,a=a.scroller&&a.scroller.getUnionExtremes()||d,h=a.dataMin,l=a.dataMax,a=this.getYTDExtremes(l,h,x),m=a.min,k=a.max,n=this.selected,p=b(n),q=this.options.allButtonsEnabled,r=this.buttons;
g(this.buttonOptions,function(a,b){var c=a._range,g=a.type,t=a.count||1;a=r[b];var u=0;b=b===n;var w=c>l-h,v=c<d.minRange,x=!1,y=!1,c=c===e;("month"===g||"year"===g)&&e>=864E5*{month:28,year:365}[g]*t&&e<=864E5*{month:31,year:366}[g]*t?c=!0:"ytd"===g?(c=k-m===e,x=!b):"all"===g&&(c=d.max-d.min>=l-h,y=!b&&p&&c);g=!q&&(w||v||y||f);c=b&&c||c&&!p&&!x;g?u=3:c&&(p=!0,u=2);a.state!==u&&a.setState(u)})},computeButtonRange:function(a){var b=a.type,c=a.count||1,d={millisecond:1,second:1E3,minute:6E4,hour:36E5,
day:864E5,week:6048E5};if(d[b])a._range=d[b]*c;else if("month"===b||"year"===b)a._range=864E5*{month:30,year:365}[b]*c},setInputValue:function(a,b){var c=this.chart.options.rangeSelector,d=this[a+"Input"];t(b)&&(d.previousValue=d.HCTime,d.HCTime=b);d.value=u(c.inputEditDateFormat||"%Y-%m-%d",d.HCTime);this[a+"DateBox"].attr({text:u(c.inputDateFormat||"%b %e, %Y",d.HCTime)})},showInput:function(a){var b=this.inputGroup,c=this[a+"DateBox"];n(this[a+"Input"],{left:b.translateX+c.x+"px",top:b.translateY+
"px",width:c.width-2+"px",height:c.height-2+"px",border:"2px solid silver"})},hideInput:function(a){n(this[a+"Input"],{border:0,width:"1px",height:"1px"});this.setInputValue(a)},drawInput:function(a){function c(){var a=q.value,c=(m.inputDateParser||Date.parse)(a),e=f.xAxis[0],g=f.scroller&&f.scroller.xAxis?f.scroller.xAxis:e,k=g.dataMin,g=g.dataMax;c!==q.previousValue&&(q.previousValue=c,b(c)||(c=a.split("-"),c=Date.UTC(H(c[0]),H(c[1])-1,H(c[2]))),b(c)&&(x||(c+=6E4*(new Date).getTimezoneOffset()),
p?c>d.maxInput.HCTime?c=void 0:c<k&&(c=k):c<d.minInput.HCTime?c=void 0:c>g&&(c=g),void 0!==c&&e.setExtremes(p?c:e.min,p?e.max:c,void 0,void 0,{trigger:"rangeSelectorInput"})))}var d=this,f=d.chart,g=f.renderer.style||{},l=f.renderer,m=f.options.rangeSelector,k=d.div,p="min"===a,q,t,u=this.inputGroup;this[a+"Label"]=t=l.label(r.lang[p?"rangeSelectorFrom":"rangeSelectorTo"],this.inputGroup.offset).addClass("highcharts-range-label").attr({padding:2}).add(u);u.offset+=t.width+5;this[a+"DateBox"]=l=l.label("",
u.offset).addClass("highcharts-range-input").attr({padding:2,width:m.inputBoxWidth||90,height:m.inputBoxHeight||17,stroke:m.inputBoxBorderColor||"#cccccc","stroke-width":1,"text-align":"center"}).on("click",function(){d.showInput(a);d[a+"Input"].focus()}).add(u);u.offset+=l.width+(p?10:0);this[a+"Input"]=q=h("input",{name:a,className:"highcharts-range-selector",type:"text"},{top:f.plotTop+"px"},k);t.css(A(g,m.labelStyle));l.css(A({color:"#333333"},g,m.inputStyle));n(q,e({position:"absolute",border:0,
width:"1px",height:"1px",padding:0,textAlign:"center",fontSize:g.fontSize,fontFamily:g.fontFamily,left:"-9em"},m.inputStyle));q.onfocus=function(){d.showInput(a)};q.onblur=function(){d.hideInput(a)};q.onchange=c;q.onkeypress=function(a){13===a.keyCode&&c()}},getPosition:function(){var a=this.chart,b=a.options.rangeSelector,a=v((b.buttonPosition||{}).y,a.plotTop-a.axisOffset[0]-b.height);return{buttonTop:a,inputTop:a-10}},getYTDExtremes:function(a,b,d){var c=new p(a),e=c[p.hcGetFullYear]();d=d?p.UTC(e,
0,1):+new p(e,0,1);b=Math.max(b||0,d);c=c.getTime();return{max:Math.min(a||c,c),min:b}},render:function(a,b){var c=this,d=c.chart,f=d.renderer,l=d.container,m=d.options,k=m.exporting&&!1!==m.exporting.enabled&&m.navigation&&m.navigation.buttonOptions,n=m.rangeSelector,p=c.buttons,m=r.lang,q=c.div,q=c.inputGroup,u=n.buttonTheme,w=n.buttonPosition||{},x=n.inputEnabled,C=u&&u.states,A=d.plotLeft,B,D=this.getPosition(),E=c.group,F=c.rendered;!1!==n.enabled&&(F||(c.group=E=f.g("range-selector-buttons").add(),
c.zoomText=f.text(m.rangeSelectorZoom,v(w.x,A),15).css(n.labelStyle).add(E),B=v(w.x,A)+c.zoomText.getBBox().width+5,g(c.buttonOptions,function(a,b){p[b]=f.button(a.text,B,0,function(){c.clickButton(b);c.isActive=!0},u,C&&C.hover,C&&C.select,C&&C.disabled).attr({"text-align":"center"}).add(E);B+=p[b].width+v(n.buttonSpacing,5)}),!1!==x&&(c.div=q=h("div",null,{position:"relative",height:0,zIndex:1}),l.parentNode.insertBefore(q,l),c.inputGroup=q=f.g("input-group").add(),q.offset=0,c.drawInput("min"),
c.drawInput("max"))),c.updateButtonStates(),E[F?"animate":"attr"]({translateY:D.buttonTop}),!1!==x&&(q.align(e({y:D.inputTop,width:q.offset,x:k&&D.inputTop<(k.y||0)+k.height-d.spacing[0]?-40:0},n.inputPosition),!0,d.spacingBox),t(x)||(d=E.getBBox(),q[q.alignAttr.translateX<d.x+d.width+10?"hide":"show"]()),c.setInputValue("min",a),c.setInputValue("max",b)),c.rendered=!0)},update:function(a){var b=this.chart;A(!0,b.options.rangeSelector,a);this.destroy();this.init(b)},destroy:function(){var b=this,
d=b.minInput,e=b.maxInput;b.unMouseDown();b.unResize();m(b.buttons);d&&(d.onfocus=d.onblur=d.onchange=null);e&&(e.onfocus=e.onblur=e.onchange=null);a.objectEach(b,function(a,c){a&&"chart"!==c&&(a.destroy?a.destroy():a.nodeType&&f(this[c]));a!==E.prototype[c]&&(b[c]=null)},this)}};F.prototype.toFixedRange=function(a,d,e,f){var c=this.chart&&this.chart.fixedRange;a=v(e,this.translate(a,!0,!this.horiz));d=v(f,this.translate(d,!0,!this.horiz));e=c&&(d-a)/c;.7<e&&1.3>e&&(f?a=d-c:d=a+c);b(a)||(a=d=void 0);
return{min:a,max:d}};F.prototype.minFromRange=function(){var a=this.range,d={month:"Month",year:"FullYear"}[a.type],e,f=this.max,g,h,m=function(a,b){var c=new Date(a),e=c["get"+d]();c["set"+d](e+b);e===c["get"+d]()&&c.setDate(0);return c.getTime()-a};b(a)?(e=f-a,h=a):(e=f+m(f,-a.count),this.chart&&(this.chart.fixedRange=f-e));g=v(this.dataMin,Number.MIN_VALUE);b(e)||(e=g);e<=g&&(e=g,void 0===h&&(h=m(e,a.count)),this.newMax=Math.min(e+h,this.dataMax));b(f)||(e=void 0);return e};J(D.prototype,"init",
function(a,b,d){B(this,"init",function(){this.options.rangeSelector.enabled&&(this.rangeSelector=new E(this))});a.call(this,b,d)});D.prototype.callbacks.push(function(a){function c(){d=a.xAxis[0].getExtremes();b(d.min)&&e.render(d.min,d.max)}var d,e=a.rangeSelector,f,g;e&&(g=B(a.xAxis[0],"afterSetExtremes",function(a){e.render(a.min,a.max)}),f=B(a,"redraw",c),c());B(a,"destroy",function(){e&&(f(),g())})});a.RangeSelector=E})(L);(function(a){var E=a.arrayMax,B=a.arrayMin,F=a.Axis,D=a.Chart,n=a.defined,
h=a.each,u=a.extend,r=a.format,x=a.grep,t=a.inArray,m=a.isNumber,f=a.isString,g=a.map,e=a.merge,d=a.pick,p=a.Point,b=a.Renderer,A=a.Series,v=a.splat,H=a.SVGRenderer,q=a.VMLRenderer,J=a.wrap,c=A.prototype,w=c.init,K=c.processData,y=p.prototype.tooltipFormatter;a.StockChart=a.stockChart=function(b,c,h){var k=f(b)||b.nodeName,l=arguments[k?1:0],m=l.series,n=a.getOptions(),p,q=d(l.navigator&&l.navigator.enabled,n.navigator.enabled,!0),r=q?{startOnTick:!1,endOnTick:!1}:null,t={marker:{enabled:!1,radius:2}},
u={shadow:!1,borderWidth:0};l.xAxis=g(v(l.xAxis||{}),function(a){return e({minPadding:0,maxPadding:0,ordinal:!0,title:{text:null},labels:{overflow:"justify"},showLastLabel:!0},n.xAxis,a,{type:"datetime",categories:null},r)});l.yAxis=g(v(l.yAxis||{}),function(a){p=d(a.opposite,!0);return e({labels:{y:-2},opposite:p,showLastLabel:!1,title:{text:null}},n.yAxis,a)});l.series=null;l=e({chart:{panning:!0,pinchType:"x"},navigator:{enabled:q},scrollbar:{enabled:d(n.scrollbar.enabled,!0)},rangeSelector:{enabled:d(n.rangeSelector.enabled,
!0)},title:{text:null},tooltip:{shared:!0,crosshairs:!0},legend:{enabled:!1},plotOptions:{line:t,spline:t,area:t,areaspline:t,arearange:t,areasplinerange:t,column:u,columnrange:u,candlestick:u,ohlc:u}},l,{isStock:!0});l.series=m;return k?new D(b,l,h):new D(l,c)};J(F.prototype,"autoLabelAlign",function(a){var b=this.chart,c=this.options,b=b._labelPanes=b._labelPanes||{},d=this.options.labels;return this.chart.options.isStock&&"yAxis"===this.coll&&(c=c.top+","+c.height,!b[c]&&d.enabled)?(15===d.x&&
(d.x=0),void 0===d.align&&(d.align="right"),b[c]=this,"right"):a.call(this,[].slice.call(arguments,1))});J(F.prototype,"destroy",function(a){var b=this.chart,c=this.options&&this.options.top+","+this.options.height;c&&b._labelPanes&&b._labelPanes[c]===this&&delete b._labelPanes[c];return a.call(this,Array.prototype.slice.call(arguments,1))});J(F.prototype,"getPlotLinePath",function(b,c,e,k,p,q){var l=this,r=this.isLinked&&!this.series?this.linkedParent.series:this.series,u=l.chart,v=u.renderer,w=
l.left,x=l.top,z,y,A,B,G=[],D=[],E,I;if("xAxis"!==l.coll&&"yAxis"!==l.coll)return b.apply(this,[].slice.call(arguments,1));D=function(a){var b="xAxis"===a?"yAxis":"xAxis";a=l.options[b];return m(a)?[u[b][a]]:f(a)?[u.get(a)]:g(r,function(a){return a[b]})}(l.coll);h(l.isXAxis?u.yAxis:u.xAxis,function(a){if(n(a.options.id)?-1===a.options.id.indexOf("navigator"):1){var b=a.isXAxis?"yAxis":"xAxis",b=n(a.options[b])?u[b][a.options[b]]:u[b][0];l===b&&D.push(a)}});E=D.length?[]:[l.isXAxis?u.yAxis[0]:u.xAxis[0]];
h(D,function(b){-1!==t(b,E)||a.find(E,function(a){return a.pos===b.pos&&a.len&&b.len})||E.push(b)});I=d(q,l.translate(c,null,null,k));m(I)&&(l.horiz?h(E,function(a){var b;y=a.pos;B=y+a.len;z=A=Math.round(I+l.transB);if(z<w||z>w+l.width)p?z=A=Math.min(Math.max(w,z),w+l.width):b=!0;b||G.push("M",z,y,"L",A,B)}):h(E,function(a){var b;z=a.pos;A=z+a.len;y=B=Math.round(x+l.height-I);if(y<x||y>x+l.height)p?y=B=Math.min(Math.max(x,y),l.top+l.height):b=!0;b||G.push("M",z,y,"L",A,B)}));return 0<G.length?v.crispPolyLine(G,
e||1):null});F.prototype.getPlotBandPath=function(a,b){b=this.getPlotLinePath(b,null,null,!0);a=this.getPlotLinePath(a,null,null,!0);var c=[],d;if(a&&b)if(a.toString()===b.toString())c=a,c.flat=!0;else for(d=0;d<a.length;d+=6)c.push("M",a[d+1],a[d+2],"L",a[d+4],a[d+5],b[d+4],b[d+5],b[d+1],b[d+2],"z");else c=null;return c};H.prototype.crispPolyLine=function(a,b){var c;for(c=0;c<a.length;c+=6)a[c+1]===a[c+4]&&(a[c+1]=a[c+4]=Math.round(a[c+1])-b%2/2),a[c+2]===a[c+5]&&(a[c+2]=a[c+5]=Math.round(a[c+2])+
b%2/2);return a};b===q&&(q.prototype.crispPolyLine=H.prototype.crispPolyLine);J(F.prototype,"hideCrosshair",function(a,b){a.call(this,b);this.crossLabel&&(this.crossLabel=this.crossLabel.hide())});J(F.prototype,"drawCrosshair",function(a,b,c){var e,f;a.call(this,b,c);if(n(this.crosshair.label)&&this.crosshair.label.enabled&&this.cross){a=this.chart;var g=this.options.crosshair.label,h=this.horiz;e=this.opposite;f=this.left;var l=this.top,m=this.crossLabel,p,q=g.format,t="",v="inside"===this.options.tickPosition,
w=!1!==this.crosshair.snap,x=0;b||(b=this.cross&&this.cross.e);p=h?"center":e?"right"===this.labelAlign?"right":"left":"left"===this.labelAlign?"left":"center";m||(m=this.crossLabel=a.renderer.label(null,null,null,g.shape||"callout").addClass("highcharts-crosshair-label"+(this.series[0]&&" highcharts-color-"+this.series[0].colorIndex)).attr({align:g.align||p,padding:d(g.padding,8),r:d(g.borderRadius,3),zIndex:2}).add(this.labelGroup),m.attr({fill:g.backgroundColor||this.series[0]&&this.series[0].color||
"#666666",stroke:g.borderColor||"","stroke-width":g.borderWidth||0}).css(u({color:"#ffffff",fontWeight:"normal",fontSize:"11px",textAlign:"center"},g.style)));h?(p=w?c.plotX+f:b.chartX,l+=e?0:this.height):(p=e?this.width+f:0,l=w?c.plotY+l:b.chartY);q||g.formatter||(this.isDatetimeAxis&&(t="%b %d, %Y"),q="{value"+(t?":"+t:"")+"}");b=w?c[this.isXAxis?"x":"y"]:this.toValue(h?b.chartX:b.chartY);m.attr({text:q?r(q,{value:b}):g.formatter.call(this,b),x:p,y:l,visibility:"visible"});b=m.getBBox();if(h){if(v&&
!e||!v&&e)l=m.y-b.height}else l=m.y-b.height/2;h?(e=f-b.x,f=f+this.width-b.x):(e="left"===this.labelAlign?f:0,f="right"===this.labelAlign?f+this.width:a.chartWidth);m.translateX<e&&(x=e-m.translateX);m.translateX+b.width>=f&&(x=-(m.translateX+b.width-f));m.attr({x:p+x,y:l,anchorX:h?p:this.opposite?0:a.chartWidth,anchorY:h?this.opposite?a.chartHeight:0:l+b.height/2})}});c.init=function(){w.apply(this,arguments);this.setCompare(this.options.compare)};c.setCompare=function(a){this.modifyValue="value"===
a||"percent"===a?function(b,c){var d=this.compareValue;if(void 0!==b&&void 0!==d)return b="value"===a?b-d:b/d*100-(100===this.options.compareBase?0:100),c&&(c.change=b),b}:null;this.userOptions.compare=a;this.chart.hasRendered&&(this.isDirty=!0)};c.processData=function(){var a,b=-1,c,d,e,f;K.apply(this,arguments);if(this.xAxis&&this.processedYData)for(c=this.processedXData,d=this.processedYData,e=d.length,this.pointArrayMap&&(b=t("close",this.pointArrayMap),-1===b&&(b=t(this.pointValKey||"y",this.pointArrayMap))),
a=0;a<e-1;a++)if(f=d[a]&&-1<b?d[a][b]:d[a],m(f)&&c[a+1]>=this.xAxis.min&&0!==f){this.compareValue=f;break}};J(c,"getExtremes",function(a){var b;a.apply(this,[].slice.call(arguments,1));this.modifyValue&&(b=[this.modifyValue(this.dataMin),this.modifyValue(this.dataMax)],this.dataMin=B(b),this.dataMax=E(b))});F.prototype.setCompare=function(a,b){this.isXAxis||(h(this.series,function(b){b.setCompare(a)}),d(b,!0)&&this.chart.redraw())};p.prototype.tooltipFormatter=function(b){b=b.replace("{point.change}",
(0<this.change?"+":"")+a.numberFormat(this.change,d(this.series.tooltipOptions.changeDecimals,2)));return y.apply(this,[b])};J(A.prototype,"render",function(a){this.chart.is3d&&this.chart.is3d()||this.chart.polar||!this.xAxis||this.xAxis.isRadial||(!this.clipBox&&this.animate?(this.clipBox=e(this.chart.clipBox),this.clipBox.width=this.xAxis.len,this.clipBox.height=this.yAxis.len):this.chart[this.sharedClipKey]?this.chart[this.sharedClipKey].attr({width:this.xAxis.len,height:this.yAxis.len}):this.clipBox&&
(this.clipBox.width=this.xAxis.len,this.clipBox.height=this.yAxis.len));a.call(this)});J(D.prototype,"getSelectedPoints",function(a){var b=a.call(this);h(this.series,function(a){a.hasGroupedData&&(b=b.concat(x(a.points||[],function(a){return a.selected})))});return b});J(D.prototype,"update",function(a,b){"scrollbar"in b&&this.navigator&&(e(!0,this.options.scrollbar,b.scrollbar),this.navigator.update({},!1),delete b.scrollbar);return a.apply(this,Array.prototype.slice.call(arguments,1))})})(L);return L});


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
 Highcharts JS v5.0.12 (2017-05-24)
 Exporting module

 (c) 2010-2017 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(k){"object"===typeof module&&module.exports?module.exports=k:k(Highcharts)})(function(k){(function(f){var k=f.defaultOptions,p=f.doc,A=f.Chart,w=f.addEvent,I=f.removeEvent,E=f.fireEvent,t=f.createElement,B=f.discardElement,v=f.css,n=f.merge,C=f.pick,h=f.each,F=f.objectEach,u=f.extend,J=f.isTouchDevice,D=f.win,G=D.navigator.userAgent,K=f.Renderer.prototype.symbols;/Edge\/|Trident\/|MSIE /.test(G);/firefox/i.test(G);u(k.lang,{printChart:"Print chart",downloadPNG:"Download PNG image",downloadJPEG:"Download JPEG image",
downloadPDF:"Download PDF document",downloadSVG:"Download SVG vector image",contextButtonTitle:"Chart context menu"});k.navigation={buttonOptions:{theme:{},symbolSize:14,symbolX:12.5,symbolY:10.5,align:"right",buttonSpacing:3,height:22,verticalAlign:"top",width:24}};n(!0,k.navigation,{menuStyle:{border:"1px solid #999999",background:"#ffffff",padding:"5px 0"},menuItemStyle:{padding:"0.5em 1em",background:"none",color:"#333333",fontSize:J?"14px":"11px",transition:"background 250ms, color 250ms"},menuItemHoverStyle:{background:"#335cad",
color:"#ffffff"},buttonOptions:{symbolFill:"#666666",symbolStroke:"#666666",symbolStrokeWidth:3,theme:{fill:"#ffffff",stroke:"none",padding:5}}});k.exporting={type:"image/png",url:"https://export.highcharts.com/",printMaxWidth:780,scale:2,buttons:{contextButton:{className:"highcharts-contextbutton",menuClassName:"highcharts-contextmenu",symbol:"menu",_titleKey:"contextButtonTitle",menuItems:[{textKey:"printChart",onclick:function(){this.print()}},{separator:!0},{textKey:"downloadPNG",onclick:function(){this.exportChart()}},
{textKey:"downloadJPEG",onclick:function(){this.exportChart({type:"image/jpeg"})}},{textKey:"downloadPDF",onclick:function(){this.exportChart({type:"application/pdf"})}},{textKey:"downloadSVG",onclick:function(){this.exportChart({type:"image/svg+xml"})}}]}}};f.post=function(a,b,e){var c=t("form",n({method:"post",action:a,enctype:"multipart/form-data"},e),{display:"none"},p.body);F(b,function(a,b){t("input",{type:"hidden",name:b,value:a},null,c)});c.submit();B(c)};u(A.prototype,{sanitizeSVG:function(a,
b){if(b&&b.exporting&&b.exporting.allowHTML){var e=a.match(/<\/svg>(.*?$)/);e&&e[1]&&(e='\x3cforeignObject x\x3d"0" y\x3d"0" width\x3d"'+b.chart.width+'" height\x3d"'+b.chart.height+'"\x3e\x3cbody xmlns\x3d"http://www.w3.org/1999/xhtml"\x3e'+e[1]+"\x3c/body\x3e\x3c/foreignObject\x3e",a=a.replace("\x3c/svg\x3e",e+"\x3c/svg\x3e"))}a=a.replace(/zIndex="[^"]+"/g,"").replace(/isShadow="[^"]+"/g,"").replace(/symbolName="[^"]+"/g,"").replace(/jQuery[0-9]+="[^"]+"/g,"").replace(/url\(("|&quot;)(\S+)("|&quot;)\)/g,
"url($2)").replace(/url\([^#]+#/g,"url(#").replace(/<svg /,'\x3csvg xmlns:xlink\x3d"http://www.w3.org/1999/xlink" ').replace(/ (NS[0-9]+\:)?href=/g," xlink:href\x3d").replace(/\n/," ").replace(/<\/svg>.*?$/,"\x3c/svg\x3e").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g,'$1\x3d"rgb($2)" $1-opacity\x3d"$3"').replace(/&nbsp;/g,"\u00a0").replace(/&shy;/g,"\u00ad");return a=a.replace(/<IMG /g,"\x3cimage ").replace(/<(\/?)TITLE>/g,"\x3c$1title\x3e").replace(/height=([^" ]+)/g,
'height\x3d"$1"').replace(/width=([^" ]+)/g,'width\x3d"$1"').replace(/hc-svg-href="([^"]+)">/g,'xlink:href\x3d"$1"/\x3e').replace(/ id=([^" >]+)/g,' id\x3d"$1"').replace(/class=([^" >]+)/g,'class\x3d"$1"').replace(/ transform /g," ").replace(/:(path|rect)/g,"$1").replace(/style="([^"]+)"/g,function(a){return a.toLowerCase()})},getChartHTML:function(){return this.container.innerHTML},getSVG:function(a){var b,e,c,r,m,g=n(this.options,a);p.createElementNS||(p.createElementNS=function(a,b){return p.createElement(b)});
e=t("div",null,{position:"absolute",top:"-9999em",width:this.chartWidth+"px",height:this.chartHeight+"px"},p.body);c=this.renderTo.style.width;m=this.renderTo.style.height;c=g.exporting.sourceWidth||g.chart.width||/px$/.test(c)&&parseInt(c,10)||600;m=g.exporting.sourceHeight||g.chart.height||/px$/.test(m)&&parseInt(m,10)||400;u(g.chart,{animation:!1,renderTo:e,forExport:!0,renderer:"SVGRenderer",width:c,height:m});g.exporting.enabled=!1;delete g.data;g.series=[];h(this.series,function(a){r=n(a.userOptions,
{animation:!1,enableMouseTracking:!1,showCheckbox:!1,visible:a.visible});r.isInternal||g.series.push(r)});h(this.axes,function(a){a.userOptions.internalKey||(a.userOptions.internalKey=f.uniqueKey())});b=new f.Chart(g,this.callback);a&&h(["xAxis","yAxis","series"],function(c){var d={};a[c]&&(d[c]=a[c],b.update(d))});h(this.axes,function(a){var c=f.find(b.axes,function(b){return b.options.internalKey===a.userOptions.internalKey}),d=a.getExtremes(),e=d.userMin,d=d.userMax;!c||void 0===e&&void 0===d||
c.setExtremes(e,d,!0,!1)});c=b.getChartHTML();c=this.sanitizeSVG(c,g);g=null;b.destroy();B(e);return c},getSVGForExport:function(a,b){var e=this.options.exporting;return this.getSVG(n({chart:{borderRadius:0}},e.chartOptions,b,{exporting:{sourceWidth:a&&a.sourceWidth||e.sourceWidth,sourceHeight:a&&a.sourceHeight||e.sourceHeight}}))},exportChart:function(a,b){b=this.getSVGForExport(a,b);a=n(this.options.exporting,a);f.post(a.url,{filename:a.filename||"chart",type:a.type,width:a.width||0,scale:a.scale,
svg:b},a.formAttributes)},print:function(){var a=this,b=a.container,e=[],c=b.parentNode,f=p.body,m=f.childNodes,g=a.options.exporting.printMaxWidth,d,H;if(!a.isPrinting){a.isPrinting=!0;a.pointer.reset(null,0);E(a,"beforePrint");if(H=g&&a.chartWidth>g)d=[a.options.chart.width,void 0,!1],a.setSize(g,void 0,!1);h(m,function(a,b){1===a.nodeType&&(e[b]=a.style.display,a.style.display="none")});f.appendChild(b);D.focus();D.print();setTimeout(function(){c.appendChild(b);h(m,function(a,b){1===a.nodeType&&
(a.style.display=e[b])});a.isPrinting=!1;H&&a.setSize.apply(a,d);E(a,"afterPrint")},1E3)}},contextMenu:function(a,b,e,c,f,m,g){var d=this,r=d.options.navigation,k=d.chartWidth,q=d.chartHeight,n="cache-"+a,l=d[n],x=Math.max(f,m),y,z;l||(d[n]=l=t("div",{className:a},{position:"absolute",zIndex:1E3,padding:x+"px"},d.container),y=t("div",{className:"highcharts-menu"},null,l),v(y,u({MozBoxShadow:"3px 3px 10px #888",WebkitBoxShadow:"3px 3px 10px #888",boxShadow:"3px 3px 10px #888"},r.menuStyle)),z=function(){v(l,
{display:"none"});g&&g.setState(0);d.openMenu=!1},d.exportEvents.push(w(l,"mouseleave",function(){l.hideTimer=setTimeout(z,500)}),w(l,"mouseenter",function(){clearTimeout(l.hideTimer)}),w(p,"mouseup",function(b){d.pointer.inClass(b.target,a)||z()})),h(b,function(a){if(a){var b;a.separator?b=t("hr",null,null,y):(b=t("div",{className:"highcharts-menu-item",onclick:function(b){b&&b.stopPropagation();z();a.onclick&&a.onclick.apply(d,arguments)},innerHTML:a.text||d.options.lang[a.textKey]},null,y),b.onmouseover=
function(){v(this,r.menuItemHoverStyle)},b.onmouseout=function(){v(this,r.menuItemStyle)},v(b,u({cursor:"pointer"},r.menuItemStyle)));d.exportDivElements.push(b)}}),d.exportDivElements.push(y,l),d.exportMenuWidth=l.offsetWidth,d.exportMenuHeight=l.offsetHeight);b={display:"block"};e+d.exportMenuWidth>k?b.right=k-e-f-x+"px":b.left=e-x+"px";c+m+d.exportMenuHeight>q&&"top"!==g.alignOptions.verticalAlign?b.bottom=q-c-x+"px":b.top=c+m-x+"px";v(l,b);d.openMenu=!0},addButton:function(a){var b=this,e=b.renderer,
c=n(b.options.navigation.buttonOptions,a),f=c.onclick,m=c.menuItems,g,d,k=c.symbolSize||12;b.btnCount||(b.btnCount=0);b.exportDivElements||(b.exportDivElements=[],b.exportSVGElements=[]);if(!1!==c.enabled){var h=c.theme,q=h.states,p=q&&q.hover,q=q&&q.select,l;delete h.states;f?l=function(a){a.stopPropagation();f.call(b,a)}:m&&(l=function(){b.contextMenu(d.menuClassName,m,d.translateX,d.translateY,d.width,d.height,d);d.setState(2)});c.text&&c.symbol?h.paddingLeft=C(h.paddingLeft,25):c.text||u(h,{width:c.width,
height:c.height,padding:0});d=e.button(c.text,0,0,l,h,p,q).addClass(a.className).attr({"stroke-linecap":"round",title:b.options.lang[c._titleKey],zIndex:3});d.menuClassName=a.menuClassName||"highcharts-menu-"+b.btnCount++;c.symbol&&(g=e.symbol(c.symbol,c.symbolX-k/2,c.symbolY-k/2,k,k).addClass("highcharts-button-symbol").attr({zIndex:1}).add(d),g.attr({stroke:c.symbolStroke,fill:c.symbolFill,"stroke-width":c.symbolStrokeWidth||1}));d.add().align(u(c,{width:d.width,x:C(c.x,b.buttonOffset)}),!0,"spacingBox");
b.buttonOffset+=(d.width+c.buttonSpacing)*("right"===c.align?-1:1);b.exportSVGElements.push(d,g)}},destroyExport:function(a){var b=a?a.target:this;a=b.exportSVGElements;var e=b.exportDivElements,c=b.exportEvents,f;a&&(h(a,function(a,c){a&&(a.onclick=a.ontouchstart=null,f="cache-"+a.menuClassName,b[f]&&delete b[f],b.exportSVGElements[c]=a.destroy())}),a.length=0);e&&(h(e,function(a,c){clearTimeout(a.hideTimer);I(a,"mouseleave");b.exportDivElements[c]=a.onmouseout=a.onmouseover=a.ontouchstart=a.onclick=
null;B(a)}),e.length=0);c&&(h(c,function(a){a()}),c.length=0)}});K.menu=function(a,b,e,c){return["M",a,b+2.5,"L",a+e,b+2.5,"M",a,b+c/2+.5,"L",a+e,b+c/2+.5,"M",a,b+c-1.5,"L",a+e,b+c-1.5]};A.prototype.renderExporting=function(){var a=this,b=a.options.exporting,e=b.buttons,c=a.isDirtyExporting||!a.exportSVGElements;a.buttonOffset=0;a.isDirtyExporting&&a.destroyExport();c&&!1!==b.enabled&&(a.exportEvents=[],F(e,function(b){a.addButton(b)}),a.isDirtyExporting=!1);w(a,"destroy",a.destroyExport)};A.prototype.callbacks.push(function(a){a.renderExporting();
w(a,"redraw",a.renderExporting);h(["exporting","navigation"],function(b){a[b]={update:function(e,c){a.isDirtyExporting=!0;n(!0,a.options[b],e);C(c,!0)&&a.redraw()}}})})})(k)});


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  SerializeJSON jQuery plugin.
  https://github.com/marioizquierdo/jquery.serializeJSON
  version 2.8.1 (Dec, 2016)

  Copyright (c) 2012, 2017 Mario Izquierdo
  Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
  and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
*/
(function (factory) {
  if (true) { // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') { // Node/CommonJS
    var jQuery = require('jquery');
    module.exports = factory(jQuery);
  } else { // Browser globals (zepto supported)
    factory(window.jQuery || window.Zepto || window.$); // Zepto supported on browsers as well
  }

}(function ($) {
  "use strict";

  // jQuery('form').serializeJSON()
  $.fn.serializeJSON = function (options) {
    var f, $form, opts, formAsArray, serializedObject, name, value, parsedValue, _obj, nameWithNoType, type, keys, skipFalsy;
    f = $.serializeJSON;
    $form = this; // NOTE: the set of matched elements is most likely a form, but it could also be a group of inputs
    opts = f.setupOpts(options); // calculate values for options {parseNumbers, parseBoolens, parseNulls, ...} with defaults

    // Use native `serializeArray` function to get an array of {name, value} objects.
    formAsArray = $form.serializeArray();
    f.readCheckboxUncheckedValues(formAsArray, opts, $form); // add objects to the array from unchecked checkboxes if needed

    // Convert the formAsArray into a serializedObject with nested keys
    serializedObject = {};
    $.each(formAsArray, function (i, obj) {
      name  = obj.name; // original input name
      value = obj.value; // input value
      _obj = f.extractTypeAndNameWithNoType(name);
      nameWithNoType = _obj.nameWithNoType; // input name with no type (i.e. "foo:string" => "foo")
      type = _obj.type; // type defined from the input name in :type colon notation
      if (!type) type = f.attrFromInputWithName($form, name, 'data-value-type');
      f.validateType(name, type, opts); // make sure that the type is one of the valid types if defined

      if (type !== 'skip') { // ignore inputs with type 'skip'
        keys = f.splitInputNameIntoKeysArray(nameWithNoType);
        parsedValue = f.parseValue(value, name, type, opts); // convert to string, number, boolean, null or customType

        skipFalsy = !parsedValue && f.shouldSkipFalsy($form, name, nameWithNoType, type, opts); // ignore falsy inputs if specified
        if (!skipFalsy) {
          f.deepSet(serializedObject, keys, parsedValue, opts);
        }
      }
    });
    return serializedObject;
  };

  // Use $.serializeJSON as namespace for the auxiliar functions
  // and to define defaults
  $.serializeJSON = {

    defaultOptions: {
      checkboxUncheckedValue: undefined, // to include that value for unchecked checkboxes (instead of ignoring them)

      parseNumbers: false, // convert values like "1", "-2.33" to 1, -2.33
      parseBooleans: false, // convert "true", "false" to true, false
      parseNulls: false, // convert "null" to null
      parseAll: false, // all of the above
      parseWithFunction: null, // to use custom parser, a function like: function(val){ return parsed_val; }

      skipFalsyValuesForTypes: [], // skip serialization of falsy values for listed value types
      skipFalsyValuesForFields: [], // skip serialization of falsy values for listed field names

      customTypes: {}, // override defaultTypes
      defaultTypes: {
        "string":  function(str) { return String(str); },
        "number":  function(str) { return Number(str); },
        "boolean": function(str) { var falses = ["false", "null", "undefined", "", "0"]; return falses.indexOf(str) === -1; },
        "null":    function(str) { var falses = ["false", "null", "undefined", "", "0"]; return falses.indexOf(str) === -1 ? str : null; },
        "array":   function(str) { return JSON.parse(str); },
        "object":  function(str) { return JSON.parse(str); },
        "auto":    function(str) { return $.serializeJSON.parseValue(str, null, null, {parseNumbers: true, parseBooleans: true, parseNulls: true}); }, // try again with something like "parseAll"
        "skip":    null // skip is a special type that makes it easy to ignore elements
      },

      useIntKeysAsArrayIndex: false // name="foo[2]" value="v" => {foo: [null, null, "v"]}, instead of {foo: ["2": "v"]}
    },

    // Merge option defaults into the options
    setupOpts: function(options) {
      var opt, validOpts, defaultOptions, optWithDefault, parseAll, f;
      f = $.serializeJSON;

      if (options == null) { options = {}; }   // options ||= {}
      defaultOptions = f.defaultOptions || {}; // defaultOptions

      // Make sure that the user didn't misspell an option
      validOpts = ['checkboxUncheckedValue', 'parseNumbers', 'parseBooleans', 'parseNulls', 'parseAll', 'parseWithFunction', 'skipFalsyValuesForTypes', 'skipFalsyValuesForFields', 'customTypes', 'defaultTypes', 'useIntKeysAsArrayIndex']; // re-define because the user may override the defaultOptions
      for (opt in options) {
        if (validOpts.indexOf(opt) === -1) {
          throw new  Error("serializeJSON ERROR: invalid option '" + opt + "'. Please use one of " + validOpts.join(', '));
        }
      }

      // Helper to get the default value for this option if none is specified by the user
      optWithDefault = function(key) { return (options[key] !== false) && (options[key] !== '') && (options[key] || defaultOptions[key]); };

      // Return computed options (opts to be used in the rest of the script)
      parseAll = optWithDefault('parseAll');
      return {
        checkboxUncheckedValue:    optWithDefault('checkboxUncheckedValue'),

        parseNumbers:  parseAll || optWithDefault('parseNumbers'),
        parseBooleans: parseAll || optWithDefault('parseBooleans'),
        parseNulls:    parseAll || optWithDefault('parseNulls'),
        parseWithFunction:         optWithDefault('parseWithFunction'),

        skipFalsyValuesForTypes:   optWithDefault('skipFalsyValuesForTypes'),
        skipFalsyValuesForFields:  optWithDefault('skipFalsyValuesForFields'),
        typeFunctions: $.extend({}, optWithDefault('defaultTypes'), optWithDefault('customTypes')),

        useIntKeysAsArrayIndex: optWithDefault('useIntKeysAsArrayIndex')
      };
    },

    // Given a string, apply the type or the relevant "parse" options, to return the parsed value
    parseValue: function(valStr, inputName, type, opts) {
      var f, parsedVal;
      f = $.serializeJSON;
      parsedVal = valStr; // if no parsing is needed, the returned value will be the same

      if (opts.typeFunctions && type && opts.typeFunctions[type]) { // use a type if available
        parsedVal = opts.typeFunctions[type](valStr);
      } else if (opts.parseNumbers  && f.isNumeric(valStr)) { // auto: number
        parsedVal = Number(valStr);
      } else if (opts.parseBooleans && (valStr === "true" || valStr === "false")) { // auto: boolean
        parsedVal = (valStr === "true");
      } else if (opts.parseNulls    && valStr == "null") { // auto: null
        parsedVal = null;
      }
      if (opts.parseWithFunction && !type) { // custom parse function (apply after previous parsing options, but not if there's a specific type)
        parsedVal = opts.parseWithFunction(parsedVal, inputName);
      }

      return parsedVal;
    },

    isObject:          function(obj) { return obj === Object(obj); }, // is it an Object?
    isUndefined:       function(obj) { return obj === void 0; }, // safe check for undefined values
    isValidArrayIndex: function(val) { return /^[0-9]+$/.test(String(val)); }, // 1,2,3,4 ... are valid array indexes
    isNumeric:         function(obj) { return obj - parseFloat(obj) >= 0; }, // taken from jQuery.isNumeric implementation. Not using jQuery.isNumeric to support old jQuery and Zepto versions

    optionKeys: function(obj) { if (Object.keys) { return Object.keys(obj); } else { var key, keys = []; for(key in obj){ keys.push(key); } return keys;} }, // polyfill Object.keys to get option keys in IE<9


    // Fill the formAsArray object with values for the unchecked checkbox inputs,
    // using the same format as the jquery.serializeArray function.
    // The value of the unchecked values is determined from the opts.checkboxUncheckedValue
    // and/or the data-unchecked-value attribute of the inputs.
    readCheckboxUncheckedValues: function (formAsArray, opts, $form) {
      var selector, $uncheckedCheckboxes, $el, uncheckedValue, f, name;
      if (opts == null) { opts = {}; }
      f = $.serializeJSON;

      selector = 'input[type=checkbox][name]:not(:checked):not([disabled])';
      $uncheckedCheckboxes = $form.find(selector).add($form.filter(selector));
      $uncheckedCheckboxes.each(function (i, el) {
        // Check data attr first, then the option
        $el = $(el);
        uncheckedValue = $el.attr('data-unchecked-value');
        if (uncheckedValue == null) {
          uncheckedValue = opts.checkboxUncheckedValue;
        }

        // If there's an uncheckedValue, push it into the serialized formAsArray
        if (uncheckedValue != null) {
          if (el.name && el.name.indexOf("[][") !== -1) { // identify a non-supported
            throw new Error("serializeJSON ERROR: checkbox unchecked values are not supported on nested arrays of objects like '"+el.name+"'. See https://github.com/marioizquierdo/jquery.serializeJSON/issues/67");
          }
          formAsArray.push({name: el.name, value: uncheckedValue});
        }
      });
    },

    // Returns and object with properties {name_without_type, type} from a given name.
    // The type is null if none specified. Example:
    //   "foo"           =>  {nameWithNoType: "foo",      type:  null}
    //   "foo:boolean"   =>  {nameWithNoType: "foo",      type: "boolean"}
    //   "foo[bar]:null" =>  {nameWithNoType: "foo[bar]", type: "null"}
    extractTypeAndNameWithNoType: function(name) {
      var match;
      if (match = name.match(/(.*):([^:]+)$/)) {
        return {nameWithNoType: match[1], type: match[2]};
      } else {
        return {nameWithNoType: name, type: null};
      }
    },


    // Check if this input should be skipped when it has a falsy value,
    // depending on the options to skip values by name or type, and the data-skip-falsy attribute.
    shouldSkipFalsy: function($form, name, nameWithNoType, type, opts) {
      var f = $.serializeJSON;
      
      var skipFromDataAttr = f.attrFromInputWithName($form, name, 'data-skip-falsy');
      if (skipFromDataAttr != null) {
        return skipFromDataAttr !== 'false'; // any value is true, except if explicitly using 'false' 
      }

      var optForFields = opts.skipFalsyValuesForFields;
      if (optForFields && (optForFields.indexOf(nameWithNoType) !== -1 || optForFields.indexOf(name) !== -1)) {
        return true;
      }
      
      var optForTypes = opts.skipFalsyValuesForTypes;
      if (type == null) type = 'string'; // assume fields with no type are targeted as string
      if (optForTypes && optForTypes.indexOf(type) !== -1) {
        return true
      }

      return false;
    },

    // Finds the first input in $form with this name, and get the given attr from it.
    // Returns undefined if no input or no attribute was found.
    attrFromInputWithName: function($form, name, attrName) {
      var escapedName, selector, $input, attrValue;
      escapedName = name.replace(/(:|\.|\[|\]|\s)/g,'\\$1'); // every non-standard character need to be escaped by \\
      selector = '[name="' + escapedName + '"]';
      $input = $form.find(selector).add($form.filter(selector)); // NOTE: this returns only the first $input element if multiple are matched with the same name (i.e. an "array[]"). So, arrays with different element types specified through the data-value-type attr is not supported.
      return $input.attr(attrName);
    },

    // Raise an error if the type is not recognized.
    validateType: function(name, type, opts) {
      var validTypes, f;
      f = $.serializeJSON;
      validTypes = f.optionKeys(opts ? opts.typeFunctions : f.defaultOptions.defaultTypes);
      if (!type || validTypes.indexOf(type) !== -1) {
        return true;
      } else {
        throw new Error("serializeJSON ERROR: Invalid type " + type + " found in input name '" + name + "', please use one of " + validTypes.join(', '));
      }
    },


    // Split the input name in programatically readable keys.
    // Examples:
    // "foo"              => ['foo']
    // "[foo]"            => ['foo']
    // "foo[inn][bar]"    => ['foo', 'inn', 'bar']
    // "foo[inn[bar]]"    => ['foo', 'inn', 'bar']
    // "foo[inn][arr][0]" => ['foo', 'inn', 'arr', '0']
    // "arr[][val]"       => ['arr', '', 'val']
    splitInputNameIntoKeysArray: function(nameWithNoType) {
      var keys, f;
      f = $.serializeJSON;
      keys = nameWithNoType.split('['); // split string into array
      keys = $.map(keys, function (key) { return key.replace(/\]/g, ''); }); // remove closing brackets
      if (keys[0] === '') { keys.shift(); } // ensure no opening bracket ("[foo][inn]" should be same as "foo[inn]")
      return keys;
    },

    // Set a value in an object or array, using multiple keys to set in a nested object or array:
    //
    // deepSet(obj, ['foo'], v)               // obj['foo'] = v
    // deepSet(obj, ['foo', 'inn'], v)        // obj['foo']['inn'] = v // Create the inner obj['foo'] object, if needed
    // deepSet(obj, ['foo', 'inn', '123'], v) // obj['foo']['arr']['123'] = v //
    //
    // deepSet(obj, ['0'], v)                                   // obj['0'] = v
    // deepSet(arr, ['0'], v, {useIntKeysAsArrayIndex: true})   // arr[0] = v
    // deepSet(arr, [''], v)                                    // arr.push(v)
    // deepSet(obj, ['arr', ''], v)                             // obj['arr'].push(v)
    //
    // arr = [];
    // deepSet(arr, ['', v]          // arr => [v]
    // deepSet(arr, ['', 'foo'], v)  // arr => [v, {foo: v}]
    // deepSet(arr, ['', 'bar'], v)  // arr => [v, {foo: v, bar: v}]
    // deepSet(arr, ['', 'bar'], v)  // arr => [v, {foo: v, bar: v}, {bar: v}]
    //
    deepSet: function (o, keys, value, opts) {
      var key, nextKey, tail, lastIdx, lastVal, f;
      if (opts == null) { opts = {}; }
      f = $.serializeJSON;
      if (f.isUndefined(o)) { throw new Error("ArgumentError: param 'o' expected to be an object or array, found undefined"); }
      if (!keys || keys.length === 0) { throw new Error("ArgumentError: param 'keys' expected to be an array with least one element"); }

      key = keys[0];

      // Only one key, then it's not a deepSet, just assign the value.
      if (keys.length === 1) {
        if (key === '') {
          o.push(value); // '' is used to push values into the array (assume o is an array)
        } else {
          o[key] = value; // other keys can be used as object keys or array indexes
        }

      // With more keys is a deepSet. Apply recursively.
      } else {
        nextKey = keys[1];

        // '' is used to push values into the array,
        // with nextKey, set the value into the same object, in object[nextKey].
        // Covers the case of ['', 'foo'] and ['', 'var'] to push the object {foo, var}, and the case of nested arrays.
        if (key === '') {
          lastIdx = o.length - 1; // asume o is array
          lastVal = o[lastIdx];
          if (f.isObject(lastVal) && (f.isUndefined(lastVal[nextKey]) || keys.length > 2)) { // if nextKey is not present in the last object element, or there are more keys to deep set
            key = lastIdx; // then set the new value in the same object element
          } else {
            key = lastIdx + 1; // otherwise, point to set the next index in the array
          }
        }

        // '' is used to push values into the array "array[]"
        if (nextKey === '') {
          if (f.isUndefined(o[key]) || !$.isArray(o[key])) {
            o[key] = []; // define (or override) as array to push values
          }
        } else {
          if (opts.useIntKeysAsArrayIndex && f.isValidArrayIndex(nextKey)) { // if 1, 2, 3 ... then use an array, where nextKey is the index
            if (f.isUndefined(o[key]) || !$.isArray(o[key])) {
              o[key] = []; // define (or override) as array, to insert values using int keys as array indexes
            }
          } else { // for anything else, use an object, where nextKey is going to be the attribute name
            if (f.isUndefined(o[key]) || !f.isObject(o[key])) {
              o[key] = {}; // define (or override) as object, to set nested properties
            }
          }
        }

        // Recursively set the inner object
        tail = keys.slice(1);
        f.deepSet(o[key], tail, value, opts);
      }
    }

  };

}));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

console.log("Hello from app.js!");

__webpack_require__(1);

__webpack_require__(5);
var $ = __webpack_require__(0);

// Load Highcharts
var Highcharts = __webpack_require__(2);

// Alternatively, this is how to load Highstock or Highmaps
var Highcharts = __webpack_require__(3);
// var Highcharts = require('highcharts/highmaps');

// This is how a module is loaded. Pass in Highcharts as a parameter.
__webpack_require__(4)(Highcharts);

/**
 * Javascript for View WorkFlows Page
 */
// $(document).ready(function () {
//
//     //########################################################################
//     // Upload Image Code
//     //########################################################################
//
//     // Submit post on submit
//     $('#ajax-form').on('submit', function (event) {
//         event.preventDefault();
//         console.log("form submitted!");  // sanity check
//         create_post();
//     });
//
//     // AJAX for posting
//     function create_post() {
//         console.log("create post is working!") // sanity check
//         var form_data = $('#ajax-form').serializeJSON()
//         console.log(form_data);
//         $.ajax({
//             url: $('#ajax-form').attr('action'), // the endpoint
//             type: $('#ajax-form').attr('method'), // http method
//             data: form_data,
//
//             // handle a successful response
//             success: function (json) {
//
//                 var oneval = $(json).filter('#container').text();
//
//                 // var result = $(json).find('#container');
//                 // var data = $.parseHTML(json)
//
//                 // $("#container").html(json.);
//                 // var html = $(document).find('#container').innerHTML;
//                 console.log(oneval); // log the returned json to the console
//                 console.log("success"); // another sanity check
//             },
//
//             // handle a non-successful response
//             error: function(json) {
//                 $("#container").html("Something went wrong!");
//             }
//         });
//     }
//
//      // This function gets cookie with a given name
//     function getCookie(name) {
//         var cookieValue = null;
//         if (document.cookie && document.cookie != '') {
//             var cookies = document.cookie.split(';');
//             for (var i = 0; i < cookies.length; i++) {
//                 var cookie = $.trim(cookies[i]);
//                 // Does this cookie string begin with the name we want?
//                 if (cookie.substring(0, name.length + 1) == (name + '=')) {
//                     cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                     break;
//                 }
//             }
//         }
//         return cookieValue;
//     }
//     var csrftoken = getCookie('csrftoken');
//
//     /*
//     The functions below will create a header with csrftoken
//     */
//
//     function csrfSafeMethod(method) {
//         // these HTTP methods do not require CSRF protection
//         return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
//     }
//     function sameOrigin(url) {
//         // test that a given url is a same-origin URL
//         // url could be relative or scheme relative or absolute
//         var host = document.location.host; // host + port
//         var protocol = document.location.protocol;
//         var sr_origin = '//' + host;
//         var origin = protocol + sr_origin;
//         // Allow absolute or scheme relative URLs to same origin
//         return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
//             (url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
//             // or any other URL that isn't scheme relative or absolute i.e relative.
//             !(/^(\/\/|http:|https:).*/.test(url));
//     }
//
//     $.ajaxSetup({
//         beforeSend: function(xhr, settings) {
//             if (!csrfSafeMethod(settings.type) && sameOrigin(settings.url)) {
//                 // Send the token to same-origin, relative URLs only.
//                 // Send the token only if the method warrants CSRF protection
//                 // Using the CSRFToken value acquired earlier
//                 xhr.setRequestHeader("X-CSRFToken", csrftoken);
//             }
//         }
//     });
//
// });

var ajaxForm = document.getElementById("ajax-form");

if (ajaxForm) {
    ajaxForm.addEventListener('submit', e => {
        e.preventDefault();
        console.log("I just clicked!");
        processRequest();
    });
}

function processRequest() {

    let myHeaders = new Headers();
    myHeaders.append('X-CSRFToken', readCookie('csrftoken'));

    fetch(ajaxForm.getAttribute('action'), {
        method: 'post',
        headers: myHeaders,
        credentials: 'same-origin',
        body: new FormData(ajaxForm)
    })
        .then(response => response.text())
        .then(data => {
            console.log('Success!');
            processChart(data)
        })
        .catch(function (err) {
        });
}

function processChart(data) {
    console.log('Graph successfully entered!');
    data = JSON.parse(data);

    Highcharts.stockChart('container', {
        rangeSelector: {
            selected: 1
        },
        chart: {
            height: 600
        },
        title: {
            text: 'Closing Price'
        },
        plotOptions: {
            series: {
                turboThreshold: 0
            }
        },
        series: [
            {
                name: "Close",
                data: data["close"],
                tooltip: {
                    valueDecimals: 9
                }
            },
            {
                name: "SMA",
                data: data["sma"],
                tooltip: {
                    valueDecimals: 9
                }
            },
            {
                name: "SMA",
                data: data["ema"],
                tooltip: {
                    valueDecimals: 9
                }
            },
            {
                name: 'buys',
                data: data["buys"],
                lineWidth: null,
                marker: {
                    enabled: true,
                    radius: 4,
                    fillColor: '#00ff00',
                    symbol: 'circle',
                    lineColor: '#FFFFFF'
                },
                tooltip: {
                    valueDecimals: 9
                },
                states: {
                    hover: {
                        lineWidthPlus: 0
                    }
                }
            },
            {
                name: 'sells',
                data: data["sells"],
                lineWidth: null,
                marker: {
                    enabled: true,
                    radius: 4,
                    fillColor: '#ff0000',
                    symbol: 'circle',
                    lineColor: '#FFFFFF'
                },
                tooltip: {
                    valueDecimals: 9
                },
                states: {
                    hover: {
                        lineWidthPlus: 0
                    }
                }
            }
        ]
    });
}

function readCookie(name, c, C, i) {
    let cookies;

    if (cookies) {
        return cookies[name];
    }

    c = document.cookie.split('; ');
    cookies = {};

    for (let i = c.length - 1; i >= 0; i--) {
        C = c[i].split('=');
        cookies[C[0]] = C[1];
    }

    return cookies[name];
}


/***/ })
/******/ ]);