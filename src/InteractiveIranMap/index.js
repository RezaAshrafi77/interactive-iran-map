// InteractiveIranMap.js
import React from "react";
import IranMap from "./IranMap";
const InteractiveIranMap = () => {
  const [state, setState] = React.useState({ selectedArea: "tehran" });
  const selectAreaHandler = (area) => {
    let id = area.id.slice(1, 3);
    if (id < 32) {
      setState((prevState) => ({ ...prevState, selectedArea: area.name }));
    } else {
      return;
    }
  };
  return (
    <div>
      <IranMap
        onClick={selectAreaHandler}
        selectedArea={state.selectedArea}
        useTestData={true}
      />
    </div>
  );
};
export default InteractiveIranMap;
