(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"dom-shortener":2}],2:[function(require,module,exports){
const DOC = document;

/**
 * @param {string} id 
 * @returns the element with the id specified
 */
function getById(id) {
    return DOC.getElementById(id);
}

/**
 * @param {string} className 
 * @returns the elements with the className specified
 */
function getByClass(className) {
    return DOC.getElementsByClassName(className);
}

module.exports = {
    DOC,

    getById,
    getByClass
};
},{}]},{},[1]);
