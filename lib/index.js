'use strict';

// MODULES //

var setReadOnly = require( 'utils-define-read-only-property' );


// CONSTANTS //

var constants = {};

// 1 / 2**(127-1)
setReadOnly( constants, 'VALUE', 1.1754943508222875e-38 );

// 1 / ( 2**(127-1) * 2**23 )
setReadOnly( constants, 'DENORMALIZED', 1.401298464324817e-45 );


// EXPORTS //

module.exports = constants;

