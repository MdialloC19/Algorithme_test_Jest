/**
 * Checks for duplicate identifiers within a DOM tree structure.
 * @param {HTMLElement} root - The root node of the DOM tree to be checked.
 * @param {Set} [idSet=new Set()] - A set containing encountered identifiers (optional).
 * @returns {boolean} Returns true if there are duplicate identifiers, otherwise false.
 */
function hasDuplicateIds(root, idSet = new Set()) {
    if (!root) return false;
    if (idSet.has(root.id)) return true;
    root.id && idSet.add(root.id);

    if (root.hasChildNodes()) {
        for (let child of root.children) {
            const result = hasDuplicateIds(child, idSet);
            if (result) return true;
        }
    }
    return false;
}

module.exports = hasDuplicateIds;
