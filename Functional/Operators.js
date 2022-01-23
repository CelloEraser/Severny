export function f(string, value = 0, func = () => {})
{
    const stringarray = string.split(" ");
    const operator = stringarray[1];
    if(operator == "|>")
    {
        return func(value);
    }
}
