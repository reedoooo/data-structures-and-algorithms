# Code Challenge: Graph + BreadthFirst

Implement a directed graph data structure using an adjacency list representation. The graph should have the following methods:

## Overview

[Overview]()

## `addVertex`

Arguments: `value`
Returns: The added vertex
Adds a vertex to the graph.

## `addEdge`

Arguments: Two vertices to be connected by the edge (`startVertex` and `endVertex`) and an optional weight.
Returns: Nothing
Adds a new edge between two vertices in the graph.
If specified, assigns a weight to the edge.
Both vertices should already be present in the graph.

## `getVertices`

Arguments: None
Returns: A collection (set, list, or similar) of all the vertices in the graph.
Returns an empty collection if there are no vertices.

## `getNeighbors`

Arguments: `vertex`
Returns: A collection of edges connected to the given vertex.
Includes the weight of each connection in the returned collection.
Returns an empty collection if there are no edges or the vertex does not exist.

## `size`

Arguments: None
Returns: The total number of vertices in the graph.
Returns 0 if there are no vertices.

## `breadthFirst`

Arguments: None
Returns: All the nodes visited in breadth-first order.

## Whiteboard Process

### `addEdge`

![UML addEdge](./)

### `addVertex`

![UML addVertex](./)

### `breadthFirst`

![UML breadthFirst](./)

### `depthFirst`

![UML depthFirst](./)

## Approach and Efficiency

### `addEdge()`

- **Approach:**
  The method checks if the `startVertex` and `endVertex` arguments exist in the adjacency list. If either of them does not exist, an error is thrown. Otherwise, a new `Edge` object is created with the `endVertex` and `weight` (if provided). The new edge is added to the array of edges for the `startVertex` in the adjacency list.

- **Efficiency:**
  - Time: O(1) - The `get()` method of the `Map` data structure performs a constant-time lookup.
  - Space: O(1) - Each edge creation adds a single `Edge` object to the array.

### `addVertex()`

- **Approach:**
  The method creates a new `Vertex` object with the given `value`. The vertex is then added to the `adjacencyList` as a key with an empty array as the value.

- **Efficiency:**
  - Time: O(1) - The `set()` method of the `Map` data structure performs a constant-time insertion.
  - Space: O(1) - Each vertex addition returns a single `Vertex` object.

### `breadthFirst()`

- **Approach:**
  The method starts the breadth-first traversal from the first vertex in the `adjacencyList`. It uses a queue to enqueue vertices and a visited array to keep track of visited vertices. The traversal continues until the queue is empty. Each dequeued vertex is checked for unvisited neighbors, and if found, they are enqueued and marked as visited.

- **Efficiency:**
  - Time: O(n) - The time complexity depends on the number of vertices and edges in the graph.
  - Space: O(1) - The visited vertices are stored in an array.

### `depthFirst()`

- **Approach:**
  The method starts the depth-first traversal from the given `vertex`. It uses a stack to push vertices and a visited array to keep track of visited vertices. The traversal continues until the stack is empty. Each popped vertex is checked for unvisited neighbors, and if found, they are pushed into the stack and marked as visited.

- **Efficiency:**
  - Time: O(n) - The time complexity depends on the number of vertices and edges in the graph.
  - Space: O(n) - The visited vertices are stored in an array.

## Solution

```javascript
class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(value) {
    const newVertex = new Vertex(value);
    this.adjacencyList.set(newVertex, []);
    return newVertex;
  }

  addEdge(startVertex, endVertex, weight = 0) {
    if (!this.adjacencyList.has(startVertex)) {
      console.error("startVertex argument is not in adjacencyList");
    } else if (!this.adjacencyList.has(endVertex)) {
      console.error("endVertex argument is not in adjacencyList");
    }
    const newEdge = new Edge(endVertex, weight);
    this.adjacencyList.get(startVertex).push(newEdge);
  }

  getVertices() {
    return [...this.adjacencyList.keys()];
  }

  getNeighbors(vertex) {
    return this.adjacencyList.get(vertex) || [];
  }

  size() {
    return this.adjacencyList.size;
  }

  breadthFirst() {
    const vertices = this.getVertices();
    if (vertices.length === 0) {
      console.error(
        "Graph has no vertices. Cannot execute breadth-first traversal"
      );
      return [];
    }
    const queue = new Queue();
    const visited = [];
    queue.enqueue(vertices[0]);

    while (!queue.isEmpty()) {
      const dqVertex = queue.dequeue().value;
      const dqNeighbors = this.getNeighbors(dqVertex);

      if (dqNeighbors.length > 0) {
        dqNeighbors.forEach((neighbor) => {
          if (!visited.includes(neighbor.vertex)) {
            visited.push(neighbor.vertex);
            queue.enqueue(neighbor.vertex);
          }
        });
      }
    }

    return visited;
  }

  depthFirst(vertex) {
    const stack = new Stack();
    const visited = [];

    stack.push(vertex);

    while (!stack.isEmpty()) {
      const popped = stack.pop();
      const neighbors = this.getNeighbors(popped.value);

      if (neighbors.length) {
        neighbors.forEach((neighbor) => {
          if (!visited.includes(neighbor.vertex.value)) {
            visited.push(neighbor.vertex.value);
            stack.push(neighbor.vertex);
          }
        });
      }
    }

    return visited;
  }
}
```
