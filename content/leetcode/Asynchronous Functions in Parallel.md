---
title: "Asynchronous Functions in Parallel"
problemUrl: "https://leetcode.com/problems/execute-asynchronous-functions-in-parallel"
description: ""
tags:
  - JavaScript
  - Function
  - Asynchronous
---
### Problem Statement

Given an array of asynchronous functions `functions`, return a new promise `promise`. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.

The `promise` resolves when:
- All the promises returned from `functions` were resolved successfully in parallel.
- The resolved value of `promise` should be an array of all the resolved values of promises in the same order as they were in the `functions`.
- The `promise` should resolve when all the asynchronous functions in the array have completed execution in parallel.

The `promise` rejects when:
- Any of the promises returned from `functions` were rejected.
- The `promise` should also reject with the reason of the first rejection.

Please solve it without using the built-in `Promise.all` function.

#### Example 

- **Input**:
  - `functions = [ () => new Promise(resolve => setTimeout(() => resolve(5), 200)) ]`
- **Output**: `{"t": 200, "resolved": [5]}`


---
## My Solution

#### JavaScript


```javascript
Coming Soon
```
