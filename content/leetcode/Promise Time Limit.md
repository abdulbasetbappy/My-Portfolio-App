---
title: "Promise Time Limit"
problemUrl: "https://leetcode.com/problems/promise-time-limit"
tags:
  - Javascript
  - Promise
  - Time
---

### Problem Statement

Given an asynchronous function `fn` and a time `t` in milliseconds, return a new time-limited version of the input function. `fn` takes arguments provided to the time-limited function.

The time-limited function should follow these rules:

- If the `fn` completes within the time limit of `t` milliseconds, the time-limited function should resolve with the result.
- If the execution of the `fn` exceeds the time limit, the time-limited function should reject with the string `"Time Limit Exceeded"`.

#### Example 

- **Input**:
  - `fn = async (n) => { await new Promise(res => setTimeout(res, 100)); return n * n; }`
  - `inputs = [5]`
  - `t = 50`
- **Output**: `{"rejected":"Time Limit Exceeded","time":50}`

---
## My Solution

#### JavaScript

```javascript
    Coming soon
```
