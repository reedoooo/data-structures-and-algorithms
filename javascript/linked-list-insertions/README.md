# Code Challenge 06: linked-list-insertions

<!-- Description of the challenge -->

Extend a Linked List to allow various insertion methods.

## Whiteboard Process

<!-- Embedded whiteboard image -->

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

I first created the Node and LinkedList classes. In the LinkedList class, I created methods for append, insert_before, insert_after, and delete. In these methods, I used a while loop to iterate through the nodes until I found the right spot to insert or delete nodes. For insert_before and delete, I had to keep track of the previous node in case we needed to update its next reference.

## Solution

<!-- Show how to run your code, and examples of it in action -->


[Link to JS File](./index.js)
