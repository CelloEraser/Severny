export function f(strings, x = 0, func = () => {}, func2 = () => {}) {
    const operator = strings[1].replace(/\s/gi, "");
  
    if (operator == "|>") {
      return func(x);
    }
    if (operator == ">>" {
        return func(func2);
    }
}
