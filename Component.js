function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}
export function $(item) {
    const node = document.createElement(item);
    return node;
}
export function _(item, where)
{
    insertAfter(item, where);
    return item;
}
