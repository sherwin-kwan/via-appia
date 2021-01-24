const findRoute = (movements) => {
  const points = [];
  const southFirst = [];
  movements.forEach(movement => {
    points.push({
      lat: movement.startLat,
      long: movement.startLong,
      code: String(movement.id) + "A"
    });
    points.push({
      lat: movement.endLat,
      long: movement.endLong,
      code: String(movement.id) + "B"
    });
    if (movement.endLat > movement.startLat) {
      southFirst.push(String(movement.id) + "B") ;
    }
  });
  points = points.sort((a, b) => a.lat > b.lat).sort((a, b) => a.long > b.long);
  const moveToEnd = [];
  for (const code of southFirst) {
    const indexToMove = points.findIndex(point => point.code === code);
    moveToEnd.push(points.splice(indexToMove, 1));
  };
  moveToEnd = moveToEnd.sort((a, b) => a.lat < b.lat).sort((a, b) => a.long < b.long);;
  points = points.concat(moveToEnd);
  for (let i = 0; i < points.length; i++) {
    points[i] = {...points[i], num: i + 1};
  };
};

export default findRoute;