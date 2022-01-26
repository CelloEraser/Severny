export function htmlattributes(item, attrs, values) {
    if(typeof(values) == "undefined" && attrs.length === 1)
    {
        return item.getAttribute(attrs[0]);
    }
    else
    {
        for (let i = 0; i < attrs.length; i++)
        {
            item.setAttribute(attrs[i], values[i]);
        }
    }
}
