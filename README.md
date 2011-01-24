# HTML5 FormData

Emulate *FormData* object for browsers wich support [FileAPI](http://www.w3.org/TR/FileAPI/) interface.

*formdata.js* doesn't overload original *FormData* object in browser like Safari 5.0+, Firefox 4.0+ or Chrome 6.0+.

## About FormData

FormData objects provide a way to easily construct a set of key/value pairs representing form fields and their values, which can then be easily sent using the XMLHttpRequest send() method.

[developer.mozilla.org/en/XMLHttpRequest/FormData](https://developer.mozilla.org/en/XMLHttpRequest/FormData)

## How to use it ?

Include *formdata.js*:

    <script type="text/javascript" src="formdata.js"></script>

And use xmlhttprequest with some bad adjustments.

    var data = new FormData();
    data.append('file', document.getElementById('file').files[0]);

    xhr.open('POST', '/', true);
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    // this is really bad
    if (data.fake) {
       xhr.setRequestHeader("Content-Type", "multipart/form-data; boundary="+ data.boundary);
       xhr.sendAsBinary(data.toString());
    } else {
       xhr.send(data);
    }

### With jquery.form.js

jquery.form.js have been patched and can use fake FormData. See [github.com/AF83/form](https://github.com/AF83/form).

## Tests

Point your favorite web browser in **tests.html**.

## License

MIT License

Copyright (c) 2010 François de Metz

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
