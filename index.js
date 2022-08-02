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