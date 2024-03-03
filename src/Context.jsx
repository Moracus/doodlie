import { createContext, useState } from "react";

export const canvasContext = createContext(null);

const CanvasContextProvider = (props) => {
  const [canvasBackgroundColor, setCanvasBackgroundColor] = useState("#ffffff");
  const contextValue = { canvasBackgroundColor, setCanvasBackgroundColor };
  return (
    <canvasContext.Provider value={contextValue}>
      {props.children}
    </canvasContext.Provider>
  );
};
export default CanvasContextProvider;
