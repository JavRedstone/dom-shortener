# DOM Shortener `v0.2.2`

## What is it?

A package to help simplify the DOM's `document` and some of its methods.

## Installation

Using [npm](https://www.npmjs.com/), go to your terminal and type:

```bash
$ npm install dom-shortener
```

And that's it!

## Usage

### index.html

```html
<!DOCTYPE html>
<html>
    <head>
        <!-- DO NOT PLACE SCRIPT HERE (DOM ELEMENTS NOT LOADED) -->
    </head>
    <body>
        <div id="hello">Hello</div>

        <div class="hello-world">Hello World 1</div>
        <div class="hello-world">Hello World 2</div>
        <div class="hello-world">Hello World 3</div>
        <div class="hello-world">Hello World 4</div>
        <div class="hello-world">Hello World 5</div>

        <!-- PLACE IT HERE INSTEAD -->
        <script src="bundle.js"></script>
    </body>
</html>
```

### index.js

```js
let DOC = require('dom-shortener');

// Native document method
DOC.write('<h1>DOM SHORTENER DEMO</h1>');

// DOM shortened methods
let helloEl = DOC.getById('hello');
let helloWorldEls = DOC.getByClass('hello-world');

// Can be manipulated just fine
helloEl.innerHTML = 'Hello Shortened';
for (let helloWorldEl of helloWorldEls) {
    helloWorldEl.style.backgroundColor = 'red';
}
```

After you're done, bundle for the browser with [browserify](https://browserify.org/).
**Note that index.html has a script with the source being the bundled file.**

### End Result

<img src="https://raw.githubusercontent.com/JavRedstone/dom-shortener/main/result.png">

## Suggestions

**Please fill out this [form](https://docs.google.com/forms/d/e/1FAIpQLSfR1ZBUBdHXGkOmdZyKpPlqXWkiU29XeKR-aeK9cUq1wucpZg/viewform) if you have any suggestions since I am actively updating this package in real time**

If you liked this package, you can **star** my [Github Repository](https://github.com/JavRedstone/dom-shortener) if you wish. If you found any bugs, please report them [here](https://github.com/JavRedstone/dom-shortener/issues), and I will fix them as fast as I can.

## License

MIT License

Copyright (c) 2022 JavRedstone

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.