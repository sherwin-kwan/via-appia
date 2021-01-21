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

  return { deleteFunction, editFunction, getMovementData };

};

export default crudHelpers;