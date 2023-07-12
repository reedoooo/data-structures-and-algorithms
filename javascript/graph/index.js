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

  addVertex(value) {
    const newVertex = new Vertex(value);
    this.adjacencyList.set(newVertex, []);
    return newVertex;
  }

  addEdge(startVertex, endVertex, weight = 0) {
    if (!this.adjacencyList.has(startVertex)) {
      throw new Error('startVertex argument is not in adjacencyList');
    } else if (!this.adjacencyList.has(endVertex)) {
      throw new Error('endVertex argument is not in adjacencyList');
    }
    const newEdge = new Edge(endVertex, weight);
    this.adjacencyList.get(startVertex).push(newEdge);
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

  breadthFirst() {
    const vertices = this.getVertices();
    if (vertices.length === 0) {
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
    if (!this.adjacencyList.has(vertex)) {
      return [];
    }

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

module.exports = {
  Vertex,
  Edge,
  Graph,
};
