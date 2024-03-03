
const ColorPicker = ({color,setColor}) => {

  return (
    <div className="inline-block relative">
      <input
        type="color"
        className="absolute inset-0 w-full h-full opacity-0 "
        onChange={(e) => setColor(e.target.value)}
        defaultValue="#ffffff"
      />
      <div className="w-10 h-10 rounded-full border border-gray-300" style={{ backgroundColor: color }}>
      </div>
    </div>
  );
};

export default ColorPicker;
