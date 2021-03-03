// InteractiveIranMap.js
import React from "react";
import IranMap from "./IranMap";

const InteractiveIranMap = ({
  onChange,
  selectedArea
}) => {
  const [state, setState] = React.useState({
    selectedArea: "tehran"
  });

  const selectAreaHandler = area => {
    let id = area.id.slice(1, 3);

    if (id < 32) {
      setState(prevState => ({ ...prevState,
        selectedArea: area.name
      }));
    } else {
      return;
    }
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(IranMap, {
    onClick: selectAreaHandler,
    selectedArea: selectedArea,
    useTestData: true,
    onChange: onChange
  }));
};

export default InteractiveIranMap;