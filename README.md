# Unhandled Exception in JavaScript Calculation Function

This repository demonstrates a common JavaScript error:  unhandled exceptions due to incomplete error handling.  The `calculate` function lacks comprehensive error handling for invalid operation types.

## Bug Description
The `calculate` function handles 'add' and 'subtract' operations correctly but doesn't gracefully handle other input. This can lead to unexpected behavior or program crashes.

## Bug Solution
The solution introduces a `try...catch` block to gracefully manage potential errors.  Now, if an invalid operation is specified, a more informative error message is returned instead of simply 'Invalid operation'.