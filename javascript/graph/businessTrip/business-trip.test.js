const Graph = require('../index');  // Assuming you have a 'graph' module.
const { businessTrip } = require('./businessTrip'); // Assuming businessTrip is in its own module.

describe('businessTrip function', () => {
  let graph;
  beforeEach(() => {
    graph = new Graph();
    const A = graph.addVertex('A');
    const B = graph.addVertex('B');
    const C = graph.addVertex('C');
    graph.addEdge(A, B, 100);
    graph.addEdge(B, C, 200);
  });

  it('should return the correct total cost for a valid trip', () => {
    expect(businessTrip(graph, ['A', 'B', 'C'])).toEqual(300);
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

  it('should handle null graph gracefully', () => {
    expect(() => {
      businessTrip(null, ['A', 'B']);
    }).toThrow('Graph is null or not defined');
  });

  it('should handle null city array gracefully', () => {
    expect(() => {
      businessTrip(graph, null);
    }).toThrow('City array is null or not defined');
  });
});
