'use strict';

function businessTrip(graph, cityArray) {
  // Throw error if graph or city array is null
  if (graph === null) {
    throw new Error('Graph is null or not defined');
  }
  if (cityArray === null) {
    throw new Error('City array is null or not defined');
  }

  let totalCost = 0;
  for(let i = 0; i < cityArray.length - 1; i++) {
    let edge = graph.getEdge(cityArray[i], cityArray[i + 1]);
    if(edge === null) {
      return null;
    } else {
      totalCost += edge.weight;
    }
  }
  return totalCost;
}

module.exports = {businessTrip};
