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
  
  const submitMovementForm = async (event, mode, data) => {
    event.preventDefault();
    if (mode === "CREATE") {
      const message = await axios.post(`/movements`, {data});
      return message.data === "Done";
    } else {
      const message = await axios.post(`/movements/${data.id}`, {data});
      return message.data === "Done";
    }
  };

  return { deleteFunction, editFunction, getMovementData, submitMovementForm };

};

export default crudHelpers;