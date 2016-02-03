'use strict';

// MODULES //

var tape = require( 'tape' );
var pow = require( 'math-power' );
var constants = require( './../lib' );


// TESTS //

tape( 'the main export is an object', function test( t ) {
	t.equal( typeof constants, 'object', 'main export is an object' );
	t.end();
});

tape( 'the object contains the smallest normal value', function test( t ) {
	t.equal( constants.VALUE, pow(2, -126), 'equals 2**-126' );
	t.end();
});

tape( 'the object contains the smallest denormalized value', function test( t ) {
	t.equal( constants.DENORMALIZED, pow(2,-126)*pow(2,-23), 'equals 2**-126 * 2**-23' );
	t.end();
});
