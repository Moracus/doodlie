import FileSaver from "file-saver";
import TextInput from "./TextInput";
import { useState } from "react";
import Dropdown from "./DropDown";

const DownLoadForm = ({ canvasRef }) => {
  let dataUrl = null;
  const [fileName, setFileName] = useState("file");

  if (canvasRef.current !== null) {
    let canvas = canvasRef.current;
    dataUrl = canvas.toDataURL("image/png");
  }

  const handleDownload = () => {
    if (dataUrl) {
      FileSaver.saveAs(dataUrl, `${fileName}.png`);
    } else {
      console.error("No canvas data available for download.");
    }
  };

  return (
    <div className="flex flex-col h-full justify-between">
      <div className="w-full h-full flex flex-col">
        <TextInput
          label={"Filename:"}
          handelChange={(e) => setFileName(e.target.value)}
          value={fileName}
        />
        <Dropdown options={["png", "jpeg", "svg"]} label={"select format"}/>
      </div>
      <button
        className="text-Anti-flashwhite border-solid border-Seasalt border-2 p-1 rounded-md"
        onClick={handleDownload}
      >
        Download
      </button>
    </div>
  );
};

export default DownLoadForm;
