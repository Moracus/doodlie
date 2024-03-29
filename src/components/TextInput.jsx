const TextInput = ({ placeholder, name, value, handelChange, onClick }) => {
  return (
    <div className="flex  flex-col gap-1 px-2 py-2">
      <div
        className="rounded-lg border-2 border-solid border-white bg-transparent text-slate-800 outline-none p-1
      flex items-center gap-3 focus-within:border-blue-500 transition duration-300"
      >
        <input
          className="w-full text-sm outline-none  bg-transparent text-white focus:outline-none"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(e) => handelChange(e)}
          onClick={onClick}
        />
      </div>
    </div>
  );
};
export default TextInput;
