const DOC = document;

/**
 * @param {number} id 
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

export default {
    DOC,

    getById,
    getByClass
};