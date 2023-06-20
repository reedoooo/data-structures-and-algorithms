function businessTrip(graph, cityArray) {
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

module.exports = businessTrip;
