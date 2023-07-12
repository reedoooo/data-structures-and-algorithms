const { Graph, Vertex } = require('./index');

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  test('returns nodes visited in breadth-first order', () => {
    let vertex1 = graph.addVertex('1');
    let vertex2 = graph.addVertex('2');
    let vertex3 = graph.addVertex('3');
    let vertex4 = graph.addVertex('4');

    graph.addEdge(vertex1, vertex2);
    graph.addEdge(vertex1, vertex3);
    graph.addEdge(vertex2, vertex4);

    // expect(graph.breadthFirst()).toEqual([vertex1, vertex2, vertex3, vertex4]);
    expect(graph.breadthFirst().map((v) => v.value)).toEqual([
      '1',
      '2',
      '3',
      '4',
    ]);
  });

  test('returns nodes visited in depth-first order', () => {
    let vertex1 = graph.addVertex('1');
    let vertex2 = graph.addVertex('2');
    let vertex3 = graph.addVertex('3');
    let vertex4 = graph.addVertex('4');

    graph.addEdge(vertex1, vertex2);
    graph.addEdge(vertex1, vertex3);
    graph.addEdge(vertex2, vertex4);

    // expect(graph.depthFirst(vertex1)).toEqual([
    //   vertex1,
    //   vertex2,
    //   vertex4,
    //   vertex3,
    // ]);
    expect(graph.depthFirst(vertex1).map((v) => v.value)).toEqual([
      '1',
      '2',
      '4',
      '3',
    ]);
  });

  test('returns empty array when no vertices in the graph for breadth-first', () => {
    const bfsResult = graph.breadthFirst().map((vertex) => vertex.value);
    expect(bfsResult).toEqual([]);
  });

  test('returns empty array when depth-first called with no vertices', () => {
    const dfsResult = graph
      .depthFirst(new Vertex('1'))
      .map((vertex) => vertex.value);
    expect(dfsResult).toEqual([]);
  });
});

// const { Graph, Vertex } = require('.');

// describe('Graph', () => {
//   let graph;

//   beforeEach(() => {
//     graph = new Graph();
//   });

//   describe('addVertex', () => {
//     it('should add a vertex to the graph', () => {
//       const vertex = graph.addVertex('A');
//       expect(vertex).toBeInstanceOf(Vertex);
//       expect(graph.size()).toBe(1);
//     });
//   });

//   describe('addEdge', () => {
//     it('should add an edge between two vertices in the graph', () => {
//       const vertexA = graph.addVertex('A');
//       const vertexB = graph.addVertex('B');
//       graph.addEdge(vertexA, vertexB);
//       expect(graph.getNeighbors(vertexA)).toHaveLength(1);
//       expect(graph.getNeighbors(vertexA)[0].vertex).toBe(vertexB);
//     });
//   });

//   describe('getVertices', () => {
//     it('should return all vertices in the graph', () => {
//       const vertexA = graph.addVertex('A');
//       const vertexB = graph.addVertex('B');
//       const vertices = graph.getVertices();
//       expect(vertices).toContain(vertexA);
//       expect(vertices).toContain(vertexB);
//     });

//     it('should return an empty collection if there are no vertices', () => {
//       const vertices = graph.getVertices();
//       expect(vertices).toHaveLength(0);
//     });
//   });

//   describe('getNeighbors', () => {
//     it('should return the edges connected to the given vertex', () => {
//       const vertexA = graph.addVertex('A');
//       const vertexB = graph.addVertex('B');
//       graph.addEdge(vertexA, vertexB, 5);
//       const neighbors = graph.getNeighbors(vertexA);
//       expect(neighbors).toHaveLength(1);
//       expect(neighbors[0].vertex).toBe(vertexB);
//       expect(neighbors[0].weight).toBe(5);
//     });

//     it('should return an empty collection if there are no edges or the vertex does not exist', () => {
//       const vertex = new Vertex('A');
//       const neighbors = graph.getNeighbors(vertex);
//       expect(neighbors).toHaveLength(0);
//     });
//   });

//   describe('size', () => {
//     it('should return the total number of vertices in the graph', () => {
//       graph.addVertex('A');
//       graph.addVertex('B');
//       expect(graph.size()).toBe(2);
//     });

//     it('should return 0 if there are no vertices', () => {
//       expect(graph.size()).toBe(0);
//     });
//   });

//   describe('breadthFirst', () => {
//     it('should return all nodes visited in breadth-first order', () => {
//       const vertexA = graph.addVertex('A');
//       const vertexB = graph.addVertex('B');
//       const vertexC = graph.addVertex('C');
//       const vertexD = graph.addVertex('D');
//       const vertexE = graph.addVertex('E');
//       graph.addEdge(vertexA, vertexB);
//       graph.addEdge(vertexA, vertexC);
//       graph.addEdge(vertexB, vertexD);
//       graph.addEdge(vertexC, vertexE);
//       const visited = graph.breadthFirst();
//       expect(visited).toEqual([vertexA, vertexB, vertexC, vertexD, vertexE]);
//     });

//     it('should handle a graph with no vertices', () => {
//       const visited = graph.breadthFirst();
//       expect(visited).toEqual([]);
//     });
//   });

//   describe('depthFirst', () => {
//     it('should return all nodes visited in depth-first order', () => {
//       const vertexA = graph.addVertex('A');
//       const vertexB = graph.addVertex('B');
//       const vertexC = graph.addVertex('C');
//       const vertexD = graph.addVertex('D');
//       const vertexE = graph.addVertex('E');
//       graph.addEdge(vertexA, vertexB);
//       graph.addEdge(vertexA, vertexC);
//       graph.addEdge(vertexB, vertexD);
//       graph.addEdge(vertexC, vertexE);
//       const visited = graph.depthFirst(vertexA);
//       expect(visited).toEqual([vertexA, vertexB, vertexD, vertexC, vertexE]);
//     });

//     it('should handle a graph with no vertices', () => {
//       const visited = graph.depthFirst(new Vertex('A'));
//       expect(visited).toEqual([]);
//     });
//   });
// });
