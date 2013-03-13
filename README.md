# ms-viewstate #

Utility functions for working with VIEWSTATE and EVENTVALIDATION hashes in ASP.NET-generated HTML markup. See [Understanding ASP.NET View State](http://msdn.microsoft.com/en-us/library/ms972976.aspx) for why Microsoft uses these.

## Usage ##

### `extractVs(html)` ###

Extract VIEWSTATE hash from markup. Returns `null` if no hash is found.

### `extractEv(html)` ###

Extract EVENTVALIDATION hash from markup. Returns `null` if no hash is found.

### `replaceVs(html, replacement)` ###

Replace VIEWSTATE hash in markup. Returns unmodified input if no hash is found.

### `replaceEv(html, replacement)` ###

Replace EVENTVALIDATION hash in markup. Returns unmodified input if no hash is found.

### `scrub(html, optionalScrub)` ###

Scrub VIEWSTATE and EVENTVALIDATION hashes in markup with the default `[scrubbed]` or optional second parameter if given.

## License ##

[Creative Commons Attribution 3.0 Unported (CC BY 3.0)](http://creativecommons.org/licenses/by/3.0/legalcode).
