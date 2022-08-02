/**
 * @author JavRedstone
 */

/**
 * @param {string} id 
 * @returns a reference to the first object with the specified value of the ID attribute.
 */
Document.prototype.getById = function(id) {
    return this.getElementById(id);
}

/**
 * @param {string} className 
 * @returns a HTMLCollection of the elements in the object on which the method was invoked (a document or an element) that have all the classes given by classNames. The classNames argument is interpreted as a space-separated list of classes.
 */
Document.prototype.getByClass = function(classNames) {
    return this.getElementsByClassName(classNames);
}

/**
 * @param {string} elementName 
 * @returns A collection of objects based on the value of the NAME or ID attribute.
 */
Document.prototype.getByName = function(elementName) {
    return this.getElementsByName(elementName);
}

/**
 * @param {string} qualifiedName 
 * @returns a collection of objects based on the specified element name.
 */
Document.prototype.getByTag = function(qualifiedName) {
    return this.getElementsByTagName(qualifiedName);
}

/**
 * @param {string} nameSpaceURI 
 * @param {string} localName 
 * @returns 
 */
Document.prototype.getByTagNS = function(nameSpaceURI, localName) {
    return this.getElementsByTagNameNS(nameSpaceURI, localName);
}

module.exports = document;