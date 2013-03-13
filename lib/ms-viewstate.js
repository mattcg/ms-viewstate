/**
 * @overview
 * @author Matthew Caruana Galizia <m@m.cg>
 * @license Creative Commons Attribution 3.0 Unported (CC BY 3.0)
 * @copyright Copyright (c) 2013, Matthew Caruana Galizia
 * @preserve
 */

'use strict';

/*jshint node:true */

var VS_CAPTURE = /(<input[^>]+id=\"__VIEWSTATE\"\svalue=\")([^\"]+)(\"[^>]+>)/;
var EV_CAPTURE = /(<input[^>]+id=\"__EVENTVALIDATION\"\svalue=\")([^\"]+)(\"[^>]+>)/;

function extract(html, captureRegexp) {
	var result;

	result = captureRegexp.exec(html);
	if (!result || typeof result[2] !== 'string') {
		return null;
	}

	return result[2];
}

function replace(html, replacement, captureRegexp) {
	return html.replace(captureRegexp, '$1' + replacement + '$3');
}

exports.extractVs = function(html) {
	return extract(html, VS_CAPTURE);
};

exports.extractEv = function(html) {
	return extract(html, EV_CAPTURE);
};

exports.replaceVs = function(html, replacement) {
	return replace(html, replacement, VS_CAPTURE);
};

exports.replaceEv = function(html, replacement) {
	return replace(html, replacement, EV_CAPTURE);
};

exports.scrub = function(html, optionalScrub) {
	if (!optionalScrub) {
		optionalScrub = '[scrubbed]';
	}

	return replace(replace(html, optionalScrub, VS_CAPTURE), optionalScrub, EV_CAPTURE);
};
