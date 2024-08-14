---
title: "To Be Or Not To Be"
problemUrl: "https://leetcode.com/problems/to-be-or-not-to-be"
tags:
  - JavaScript
  - Closures
---
### Problem Statement

Write a function `expect` that helps developers test their code. It should take in any value `val` and return an object with the following two functions.

- `toBe(val)` accepts another value and returns `true` if the two values `===` each other. If they are not equal, it should throw an error `"Not Equal"`.
- `notToBe(val)` accepts another value and returns `true` if the two values `!==` each other. If they are equal, it should throw an error `"Equal"`.

#### Example 1

- **Input**: `func = () => expect(5).toBe(5)`
- **Output**: `{"value": true}`
- **Explanation**: `5 === 5` so this expression returns `true`.


--- 

## [My Solution](https://leetcode.com/problems/to-be-or-not-to-be/submissions/1352717269){:target="_blank"}

#### JavaScript

```javascript
/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
return{
    toBe: function(newVal){
        if(newVal !== val){
            throw new Error("Not Equal")
        }else return true
    },
    notToBe: function(newVal){
        if(newVal === val){
            throw new Error("Equal")
        }else return true
    }
}
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
```