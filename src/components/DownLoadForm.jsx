import FileSaver from "file-saver";

const DownLoadForm = ({ canvasRef }) => {
  let dataUrl = null;

  if (canvasRef.current !== null) {
    let canvas = canvasRef.current;
    dataUrl = canvas.toDataURL("image/png");
  }

  const handleDownload = () => {
    if (dataUrl) {
      FileSaver.saveAs(dataUrl, "file.png");
    } else {
      console.error("No canvas data available for download.");
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-end">
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
