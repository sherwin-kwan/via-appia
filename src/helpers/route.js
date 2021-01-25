const findRoute = (movements) => {
  let points = [];
  const southFirst = [];
  // Convention: "1A" means the starting point of movement 1, "4B" = ending point of movement 4
  movements.forEach(movement => {
    points.push({
      location: movement.startLocation,
      lat: movement.startLat,
      long: movement.startLong,
      code: [String(movement.id) + "A"]
    });
    points.push({
      location: movement.endLocation,
      lat: movement.endLat,
      long: movement.endLong,
      code: [String(movement.id) + "B"]
    });
    if (movement.endLat > movement.startLat || movement.endLat === movement.startLat && movement.endLong > movement.startLong) {
      southFirst.push(String(movement.id) + "B") ;
    }
  });
  points = points.sort((a, b) => b.long - a.long).sort((a, b) => b.lat - a.lat);
  let moveToEnd = [];
  for (const code of southFirst) {
    const indexToMove = points.findIndex(point => point.code[0] === code);
    moveToEnd.push(points.splice(indexToMove, 1)[0]);
  };
  moveToEnd = moveToEnd.sort((a, b) => a.long - b.long).sort((a, b) => a.lat - b.lat);
  points = points.concat(moveToEnd);
  // If the same point occurs in multiple movements, combine them into one point
  for (let i = points.length - 1; i > 0; i--) {
    if (points[i].lat === points[i-1].lat && points[i].long === points[i-1].long) {
      points[i-1].code.push(points[i].code[0]);
      points.splice(i, 1);
    }
  }
  // Add a "num" variable to display in the table
  for (let i = 0; i < points.length; i++) {
    points[i] = {...points[i], num: i + 1};
  };
  console.log('points are: ', points);
  return points;
};

export default findRoute;