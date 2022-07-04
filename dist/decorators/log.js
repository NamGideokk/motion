"use strict";
function Log(_, name, descriptor) {
    const newDescriptor = Object.assign(Object.assign({}, descriptor), { value: function (...args) {
            console.log(`Calling ${name} with arguments`);
            console.dir(args);
            const result = descriptor.value.apply(this, args);
            console.log(`Result:`);
            console.dir(result);
            return result;
        } });
    return newDescriptor;
}
class Calculator {
    add(x, y) {
        return x + y;
    }
}
const calculator = new Calculator();
calculator.add(10, 5);
