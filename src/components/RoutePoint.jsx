import React from 'react';
import PropTypes from "prop-types";

const RoutePoint = (props) => {
  const { num, location, lat, long, code, distance, cumulDistance } = props.point;
  const pickUp = code.filter(c => c.includes("A")).map(c => c.slice(0, c.length - 1));
  const dropOff = code.filter(c => c.includes("B")).map(c => c.slice(0, c.length - 1));

  const {setActiveMovement, setDetailsScreenShow, setMode } = props.detailsHook;

  const linkToMovement = (id) => {
    const myMovement = props.movements.find(movement => movement.id === Number(id));
    if (myMovement) {
      setActiveMovement(myMovement)
      setDetailsScreenShow(true);
      setMode("VIEW");
      props.setPage("MOVEMENT");
    } else {

    }
  };

  const linkText = (numbers) => {
    if (numbers.length) {
      let text = numbers.map((number, ind) => {
        return (ind === 0) ? (<a onClick={() => linkToMovement(number)}>{number}</a>) :
          (<>, <a onClick={() => linkToMovement(number)}>{number}</a></>);
      });
      return text;
    } else {
      return "N/A";
    }
  };

  return (
    <tr>
      <td>{num}</td>
      <td>{location}</td>
      <td>{lat}</td>
      <td>{long}</td>
      <td>{linkText(pickUp)}</td>
      <td>{linkText(dropOff)}</td>
      <td>{distance}</td>
      <td>{cumulDistance}</td>
    </tr>
  );
};

RoutePoint.propTypes = {
  point: PropTypes.object,
  movements: PropTypes.array,
  detailsHook: PropTypes.object,
  setPage: PropTypes.func
};

export default RoutePoint;