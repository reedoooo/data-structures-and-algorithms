// Test section
const { Graph, Vertex, Edge } = require('./index');

const { Stack, Queue } = require('../linkedList/reading-and-queue/index.js');

describe('Stack', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  test('pushes and pops elements correctly', () => {
    stack.push('test');
    expect(stack.pop().value).toEqual('test');
  });

  test('peeks at the top element', () => {
    stack.push('test');
    expect(stack.peek().value).toEqual('test');
  });

  test('checks if stack is empty', () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push('test');
    expect(stack.isEmpty()).toBe(false);
  });
});

describe('Queue', () => {
  let queue;
  beforeEach(() => {
    queue = new Queue();
  });

  test('enqueues and dequeues elements correctly', () => {
    queue.enqueue('test');
    expect(queue.dequeue().value).toEqual('test');
  });

  test('peeks at the front element', () => {
    queue.enqueue('test');
    expect(queue.peek().value).toEqual('test');
  });

  test('checks if queue is empty', () => {
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue('test');
    expect(queue.isEmpty()).toBe(false);
  });
});

describe('Vertex', () => {
  it('should create a new vertex correctly', () => {
    const vertex = new Vertex(1);
    expect(vertex.value).toBe(1);
  });
});

describe('Edge', () => {
  it('should create a new edge correctly', () => {
    const vertexA = new Vertex(1);
    const edge = new Edge(vertexA, 2);
    expect(edge.vertex).toBe(vertexA);
    expect(edge.weight).toBe(2);
  });
});

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  it('should add a new vertex correctly', () => {
    const vertex = graph.addVertex(1);
    expect(vertex.value).toBe(1);
    expect(graph.size()).toBe(1);
  });

  it('should add a new edge correctly', () => {
    const vertexA = graph.addVertex(1);
    const vertexB = graph.addVertex(2);
    graph.addEdge(vertexA, vertexB, 5);
    const edge = graph.getEdge(vertexA, vertexB);
    expect(edge.vertex).toBe(vertexB);
    expect(edge.weight).toBe(5);
  });

  it('should get all vertices correctly', () => {
    const vertexA = graph.addVertex(1);
    const vertexB = graph.addVertex(2);
    expect(graph.getVertices()).toEqual([vertexA, vertexB]);
  });

  it('should get neighbors of a vertex correctly', () => {
    const vertexA = graph.addVertex(1);
    const vertexB = graph.addVertex(2);
    graph.addEdge(vertexA, vertexB, 5);
    const neighbors = graph.getNeighbors(vertexA);
    expect(neighbors).toEqual([new Edge(vertexB, 5)]);
  });

  it('should perform breadth-first traversal correctly', () => {
    const graph = new Graph();
    const vertexA = graph.addVertex('A');
    const vertexB = graph.addVertex('B');
    const vertexC = graph.addVertex('C');
    graph.addEdge(vertexA, vertexB);
    graph.addEdge(vertexA, vertexC);
    const result = graph.breadthFirst(vertexA);
    expect(result).toEqual(['A', 'B', 'C']);
  });

  it('should perform depth-first traversal correctly', () => {
    // Add vertices to graph and save the returned vertex objects
    const vertexA = graph.addVertex('A');
    const vertexB = graph.addVertex('B');
    const vertexC = graph.addVertex('C');

    // Now, add edges using the vertex objects returned from the addVertex method
    graph.addEdge(vertexA, vertexB);
    graph.addEdge(vertexA, vertexC);

    // Perform your tests here
    const result = graph.depthFirst(vertexA);

    expect(result.includes('A')).toBe(true);
    expect(result.includes('B')).toBe(true);
    expect(result.includes('C')).toBe(true);
    expect(result.length).toBe(3);
  });




});
