const { Graph } = require('../index'); // Assuming you have a 'graph' module.
const { businessTrip } = require('./index'); // Assuming businessTrip is in its own module.

describe('businessTrip function', () => {
  let graph;
  let A, B, C; // Added these variables to store Vertex objects
  beforeEach(() => {
    graph = new Graph();
    A = graph.addVertex('A');
    B = graph.addVertex('B');
    C = graph.addVertex('C');
    graph.addEdge(A, B, 100);
    graph.addEdge(B, C, 200);
  });

  it('should return the correct total cost for a valid trip', () => {
    expect(businessTrip(graph, [A, B, C])).toEqual(300); // passing Vertex objects
  });

  it('should return null for an impossible trip', () => {
    expect(businessTrip(graph, ['A', 'C'])).toEqual(null);
  });

  it('should return 0 for a trip with no cities', () => {
    expect(businessTrip(graph, [])).toEqual(0);
  });

  it('should return 0 for a trip with one city', () => {
    expect(businessTrip(graph, ['A'])).toEqual(0);
  });

  it('should throw error when graph is null', () => {
    expect(() => {
      businessTrip(null, ['A', 'B']);
    }).toThrow('Graph is null or not defined');
  });

  it('should throw error when city array is null', () => {
    expect(() => {
      businessTrip(graph, null);
    }).toThrow('City array is null or not defined');
  });
});
