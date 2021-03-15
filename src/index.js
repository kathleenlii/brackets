module.exports = function check(str, bracketsConfig) {
    const objectBrackets = bracketsConfig.reduce(
        (acc, [firstValue, secondValue]) => ({
            ...acc,
            [firstValue]: secondValue,
        }),
        {}
    );

    const stack = [];
    str.split('').forEach(element => {
      if(stack[stack.length - 1]) {
        const closeTag = objectBrackets[stack[stack.length - 1]];

        if(element == closeTag) {
          stack.pop();
        } else {
          stack.push(element)
        }
      } else {
        stack.push(element)
      }
    });

    return !stack.length
};
