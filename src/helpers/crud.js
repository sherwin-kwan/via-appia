import axios from 'axios';

const crudHelpers = () => {

  const getMovementData = async () => {
    try {
      const rawData = await axios.get("/movements");
      const { data } = rawData;
      // Grab initial list of movements
      console.log(data);
      return data;
    } catch (err) {
      console.log("Error: ", err.message);
    }
  };

  const editFunction = async (obj) => {
    if (obj.id) {
      try {
        await axios.post(`/movements/${obj.id}`, obj);
      } catch (err) {
        console.log('Error: ', err.message);
      }
    } else {
      console.log('Error: No ID provided for editing');
    }
  };
  
  const deleteFunction = async (id) => {
    if (id) {
      try {
        await axios.delete(`/movements/${id}`);
      } catch (err) {
        console.log('Error: ', err.message);
      }
    } else {
      console.log('Error: No ID provided for deleting');
    }
  };  
  
  const submitMovementForm = async (event, mode, data, movements) => {
    event.preventDefault();
    const validationResult = validateData(data, movements);
    if (typeof validationResult === 'string') throw new Error(validationResult);
    if (mode === "CREATE") {
      const message = await axios.post(`/movements`, validationResult);
      return message.data === "Done";
    } else {
      const message = await axios.post(`/movements/${validationResult.id}`, validationResult);
      return message.data === "Done";
    }
  };

  const validateData = (data, movements) => {
    // Check if start lat/long and end lat/long are NOT exactly duplicated
    // Check that start lat/long, end lat/long, and freight are filled in
    // Check that lats and longs are numeric
    // verify that lat is between -90 and 90
    // verify that long is between -180 and 180
    const required = ['startLat', 'startLong', 'endLat', 'endLong', 'freight'];
    for (const field of required) {
      console.log(field, data[field]);
      if (data[field] === "" || data[field] === undefined) {
        return 'Start and end points and freight are required fields. Please ensure they are filled in';
      }
    };
    const numeric = ['startLat', 'startLong', 'endLat', 'endLong'];
    for (const field of numeric) {
      const numerify = Number(data[field]);
      if (isNaN(numerify)) {
        return 'Latitude and longitude fields must be numeric';
      };
      data[field] = numerify;
    };
    if (data.startLat < -90 || data.startLat > 90 || data.endLat < -90 || data.endLat > 90) {
      return 'Latitudes must be between -90 and 90 degrees';
    };
    if (data.startLong < -180 || data.startLong > 180 || data.endLong < -180 || data.endLong > 180) {
      return 'Longitudes must be between -180 and 180 degrees';
    };
    const otherMovements = movements.filter(movement => movement.id !== data.id);
    for (const movement of otherMovements) {
      if (movement.startLat == data.startLat && movement.startLong == data.startLong && 
         movement.endLat == data.endLat && movement.endLong == data.endLong) {
        return `You have entered identical start/end coordinates to existing movement ${movement.id}. 
        Please add freight to that movement instead of creating a new movement.`;
      }    
    };
    return data;
  };

  return { deleteFunction, editFunction, getMovementData, submitMovementForm };

};

export default crudHelpers;