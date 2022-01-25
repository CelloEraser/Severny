export function htmlattributes(item, attrs, values) {
    for (let i = 0; i < attrs.length; i++)
    {
        item.setAttribute(attrs[i], values[i]);
    }
}
