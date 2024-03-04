import { createContext, useState } from "react";

export const canvasContext = createContext(null);

const CanvasContextProvider = (props) => {
  const [brushColor, setBrushColor] = useState("#000000");
  const contextValue = { brushColor, setBrushColor };
  return (
    <canvasContext.Provider value={contextValue}>
      {props.children}
    </canvasContext.Provider>
  );
};
export default CanvasContextProvider;
