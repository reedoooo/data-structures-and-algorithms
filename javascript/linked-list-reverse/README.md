# Code Challenge 07: linked-list-kth

<!-- Description of the challenge -->

Write the kth from end function for a linked list

## Whiteboard Process

<!-- Embedded whiteboard image -->

![LinkedListKth](./linkedListKth.png)

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

Initialize three variables, previousNode, currentNode and nextNode.
Iterate over the linked list.
In each iteration, perform the following operations:
Store the next node in the nextNode.
Change the next of currentNode to previousNode.
Update previousNode and currentNode with currentNode and nextNode respectively.

## Solution

<!-- Show how to run your code, and examples of it in action -->

[Link to JS File](./linked-list-reverse.jpeg)
