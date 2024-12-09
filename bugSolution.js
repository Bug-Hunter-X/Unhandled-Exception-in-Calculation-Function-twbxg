function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function calculate(operation, a, b) {
  try {
    if (operation === 'add') {
      return add(a, b);
    } else if (operation === 'subtract') {
      return subtract(a, b);
    } else {
      throw new Error('Invalid operation'); // Throw an error for better handling
    }
  } catch (error) {
    return `Error: ${error.message}`; // Catch and report the error
  }
}

console.log(calculate('add', 5, 3)); // Output: 8
console.log(calculate('subtract', 5, 3)); // Output: 2
console.log(calculate('multiply', 5, 3)); // Output: Error: Invalid operation