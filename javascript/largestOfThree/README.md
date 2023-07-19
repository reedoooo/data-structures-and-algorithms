# Coding Challenge 02: Max Product of Three Numbers

## Problem Domain

The goal is to write a function to identify the largest possible product that can be obtained by multiplying three numbers from an array of integers. The array can contain both positive and negative integers.

## Visual

Consider an array of integers: `[18, 3, 42, 17, 9, 27]`

The three numbers that yield the maximum product are `42`, `27`, and `18`. The product of these numbers is `20412`.

## Approach and Efficiency

- **Approach:**

  - Traverse the list, keeping track of the three largest numbers and two smallest numbers (to handle negative numbers) identified.
  - Store these numbers in respective arrays or variables.
  - At the end of the traversal, calculate the maximum product that can be obtained either by multiplying the three largest numbers or by multiplying the two smallest numbers and the largest number. This is to handle the case where two large negative numbers and one large positive number yield a larger product than the product of three positive numbers.

- **Efficiency:**

  - The time complexity of this approach is O(n) since a single pass is made through the array. The space complexity is O(1) as a constant amount of space is used to store the largest and smallest numbers.

## Code

[Link to Code](./maxProduct.js)

## Test

Jest tests are provided for the maxProduct function, including tests for various edge cases and normal inputs. The tests ensure that the function correctly calculates the maximum product of three numbers in an array, handles negative numbers, and behaves appropriately with different array sizes.

## UML

[Link to UML](./maxProduct.jpeg)
