import { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import DownLoadForm from "./DownLoadForm";
import { canvasContext } from "../Context";
import ColorPicker from "./ColorPicker";

const Canvas = ({ backgroundColor }) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const { brushColor, setBrushColor } = useContext(canvasContext);

  useEffect(() => {
    const canvas = canvasRef.current;
    //doubling the pixel density to support retina displays
    canvas.width = 500;
    canvas.height = 500;

    const context = canvas.getContext("2d");

    // context.scale(2, 2);
    // Set background color
    if (backgroundColor) {
      context.fillStyle = backgroundColor;
      context.fillRect(0, 0, canvas.width, canvas.height);
    }
    context.lineCap = "round";
    // context.strokeStyle = brushColor;
    context.lineWidth = 5;
    contextRef.current = context;
  }, []);
  useEffect(() => {
    contextRef.current.strokeStyle = brushColor;
    console.log("first");
  }, [brushColor]);
  const getMousePos = (canvas, evt) => {
    console.log(canvas);
    let rect = canvas.getBoundingClientRect();
    let scaleX = canvas.width / rect.width;
    let scaleY = canvas.height / rect.height;

    return {
      x: (evt.clientX - rect.left) * scaleX,
      y: (evt.clientY - rect.top) * scaleY,
    };
  };
  const startDrawing = ({ nativeEvent }) => {
    console.log(nativeEvent);
    const { x, y } = getMousePos(canvasRef.current, nativeEvent);
    contextRef.current.beginPath();
    contextRef.current.moveTo(x, y);
    setIsDrawing(true);
  };
  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };
  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { x, y } = getMousePos(canvasRef.current, nativeEvent);
    contextRef.current.lineTo(x, y);
    contextRef.current.stroke();
  };
  return (
    <>
      <div className=" h-fit w-full gap-2 flex justify-center max-md:flex-col   ">
        <div className="bg-Outerspace basis-1/4">
          <DownLoadForm canvasRef={canvasRef} />
        </div>
        <div className="bg-Outerspace flex justify-center items-center basis-3/4">
          <ColorPicker color={brushColor} setColor={setBrushColor} />
          <canvas
            className="bg-white"
            onMouseDown={startDrawing}
            onMouseUp={finishDrawing}
            onMouseMove={draw}
            ref={canvasRef}
          />
        </div>
      </div>
    </>
  );
};

export default Canvas;
