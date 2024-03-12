import FileSaver from "file-saver";
import TextInput from "./TextInput";
import { useState } from "react";
import Dropdown from "./DropDown";

const DownLoadForm = ({ canvasRef }) => {
  let dataUrl = null;
  const [fileName, setFileName] = useState("file");
  const [selectedFormat,setSelectedFormat]=useState('png');

  if (canvasRef.current !== null) {
    let canvas = canvasRef.current;
    dataUrl = canvas.toDataURL(`image/${selectedFormat}`);
  }

  const handleDownload = () => {
    if (dataUrl) {
      FileSaver.saveAs(dataUrl, `${fileName}.${selectedFormat}`);
    } else {
      console.error("No canvas data available for download.");
    }
  };
  const handleSelect = (opt)=>{
    setSelectedFormat(opt);
  }

  return (
    <div className="flex flex-col h-full justify-between">
      <div className="w-full h-full flex flex-col">
        <div>
          <label
            htmlFor=""
            className="px-3 pt-2 font-serif text-white font-medium text-lg"
          >
            FileName:
          </label>
          <TextInput
            handelChange={(e) => setFileName(e.target.value)}
            value={fileName}
          />
        </div>

        <Dropdown options={["png","jpeg", "svg"]} label={"select format:"} onSelect={handleSelect}/>
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
