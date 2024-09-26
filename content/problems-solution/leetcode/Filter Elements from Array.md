---
title: "Filter Elements from Array"
problemUrl: "https://leetcode.com/problems/filter-elements-from-array"
tags:
  - Javascript
  - Array
---

### Problem Statement

Given an integer array `arr` and a filtering function `fn`, return a filtered array `filteredArr`.

The `fn` function takes one or two arguments:
- `arr[i]` - a number from the array `arr`
- `i` - the index of `arr[i]`

`filteredArr` should only contain the elements from the array for which the expression `fn(arr[i], i)` evaluates to a truthy value. A truthy value is a value where `Boolean(value)` returns `true`.

Please solve it without using the built-in `Array.filter` method.

#### Example 

- **Input**: `arr = [0,10,20,30]`, `fn = function greaterThan10(n) { return n > 10; }`
- **Output**: `[20,30]`
- **Explanation**: 
```javascript
  const newArray = filter(arr, fn); // [20, 30]
```
---

## My Solution

#### Javascript

```javascript
var filter = function(arr, fn) {
    return arr.filter(fn)
};
```
