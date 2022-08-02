let ds = require('dom-shortener');

// Native document method
ds.DOC.write('<h1>DOM SHORTENER DEMO</h1>');

// DOM shortened methods
let helloEl = ds.getById('hello');
let helloWorldEls = ds.getByClass('hello-world');

// Can be manipulated just fine
helloEl.innerHTML = 'Hello Shortened';
for (let helloWorldEl of helloWorldEls) {
    helloWorldEl.style.backgroundColor = 'red';
}