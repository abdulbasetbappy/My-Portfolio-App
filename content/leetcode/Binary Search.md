---
title: "Binary Search"
problemUrl: "https://leetcode.com/problems/binary-search/"
tags:
  - TypeScript
  - Javascript
  - Binary Search
---

### Problem Statement

Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`.

You must write an algorithm with `O(log n)` runtime complexity.

#### Example 

- **Input**:
  - `nums = [-1, 0, 3, 5, 9, 12]`
  - `target = 9`
- **Output**: `4`
- **Explanation**: `9` exists in `nums` and its index is `4`.


---
## My Solution

#### JavaScript / TypeScript

```typescript
const search = (nums: number[], target: number): number => {
  let left = 0,
    right = nums.length - 1,
    midpoint = -1;

  while (left <= right) {
    midpoint = Math.ceil((left + right) / 2);

    if (target < nums[midpoint]) {
      right = midpoint - 1;
    } else if (target > nums[midpoint]) {
      left = midpoint + 1;
    } else {
      return midpoint;
    }
  }

  return -1;
};
```
