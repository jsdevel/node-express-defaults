# express-defaults [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url]
> Middleware for setting default values in requests.

Currently the middleware supports `params` and `query`.  `body` is considered to be somewhat complicated
at this time; however, PRs are welcomed.

## Example
```javascript
var expressDefaults = require('express-defaults');
var express = require('express');
var app = express();

app.get('/hello', expressDefaults({params: {world: 'John'}, query: {space: 'Bob'}}),
    function(req, res) {

  /*
    req.params.world will be set to 'John' if not given in the request.
    req.query.space will be set to 'Bob' if not given in the request.
  */

});

## LICENSE
``````
The MIT License (MIT)

Copyright (c) 2015 Joseph Spencer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
``````

[downloads-image]: http://img.shields.io/npm/dm/express-defaults.svg
[npm-url]: https://npmjs.org/package/express-defaults
[npm-image]: http://img.shields.io/npm/v/express-defaults.svg

[travis-url]: https://travis-ci.org/jsdevel/node-express-defaults
[travis-image]: http://img.shields.io/travis/jsdevel/node-express-defaults.svg

[coveralls-url]: https://coveralls.io/r/jsdevel/node-express-defaults
[coveralls-image]: http://img.shields.io/coveralls/jsdevel/node-express-defaults/master.svg
