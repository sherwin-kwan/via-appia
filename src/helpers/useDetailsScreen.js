import { useState } from 'react';

const useDetailsScreen = (data, show) => {
  
  const [mode, setMode] = useState("VIEW");
  const [activeMovement, setActiveMovement] = useState({});
  const [detailsScreenShow, setDetailsScreenShow] = useState(false);

  return { mode, setMode, activeMovement, setActiveMovement, detailsScreenShow, setDetailsScreenShow };
};

export default useDetailsScreen;