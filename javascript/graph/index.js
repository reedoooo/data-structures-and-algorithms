const { Stack, Queue } = require('../linkedList/reading-and-queue/index.js');

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

  // addVertex(value) {
  //   const newVertex = new Vertex(value);
  //   this.adjacencyList.set(newVertex, []);
  //   return newVertex;
  // }

  addVertex(value) {
    const newVertex = new Vertex(value);

    // Check if the vertex is already present
    if (!this.adjacencyList.has(newVertex)) {
      this.adjacencyList.set(newVertex, []);
    }

    return newVertex; // Return the vertex object added to the adjacency list
  }

  addEdge(startVertex, endVertex, weight = 0) {
    if (!this.adjacencyList.has(startVertex)) {
      throw new Error('startVertex argument is not in adjacencyList');
    } else if (!this.adjacencyList.has(endVertex)) {
      throw new Error('endVertex argument is not in adjacencyList');
    }

    const edgeToStart = new Edge(startVertex, weight);
    const edgeToEnd = new Edge(endVertex, weight);

    this.adjacencyList.get(startVertex).push(edgeToEnd);
    this.adjacencyList.get(endVertex).push(edgeToStart);
  }

  getEdge(startVertex, endVertex) {
    if (
      !this.adjacencyList.has(startVertex) ||
      !this.adjacencyList.has(endVertex)
    ) {
      return null;
    }

    const edges = this.adjacencyList.get(startVertex);
    for (let i = 0; i < edges.length; i++) {
      if (edges[i].vertex === endVertex) {
        return edges[i];
      }
    }

    return null;
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

  breadthFirst(startVertex) {
    const queue = new Queue();
    const visited = new Set();

    queue.enqueue(startVertex);

    while (!queue.isEmpty()) {
      const dqVertex = queue.dequeue().value;

      if (!visited.has(dqVertex)) {
        visited.add(dqVertex);
        const dqNeighbors = this.getNeighbors(dqVertex);

        if (dqNeighbors.length > 0) {
          dqNeighbors.forEach((neighbor) => {
            if (!visited.has(neighbor.vertex)) {
              queue.enqueue(neighbor.vertex);
            }
          });
        }
      }
    }
    return Array.from(visited).map((vertex) => vertex.value);
  }

  depthFirst(startVertex) {
    const stack = new Stack();
    const visited = new Set();

    stack.push(startVertex);

    while (!stack.isEmpty()) {
      const popped = stack.pop().value;

      if (!visited.has(popped)) {
        visited.add(popped);
        const neighbors = this.getNeighbors(popped);

        if (neighbors.length) {
          neighbors.forEach((neighbor) => {
            if (!visited.has(neighbor.vertex)) {
              stack.push(neighbor.vertex);
            }
          });
        }
      }
    }
    return Array.from(visited).map((vertex) => vertex.value);
  }
}

module.exports = {
  Vertex,
  Edge,
  Graph,
};
