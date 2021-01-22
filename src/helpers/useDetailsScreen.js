import { useState } from 'react';

const useDetailsScreen = (data, show) => {
  
  const [showDetails, setShowDetails] = useState(show);
  const [movement, setMovement] = useState({});

  // Need to 

  const getMovement = function(id) {
    return data.find(movement => movement.id === id);
  };

  return { showDetails, setShowDetails, movement, setMovement };
};

export default useDetailsScreen;