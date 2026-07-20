export default function Select({
  value,
  onChange,
  options,
}) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="
        bg-slate-800
        border
        border-slate-700
        rounded-xl
        px-4
        py-3
        outline-none
        focus:border-green-500
      "
    >
      {options.map((option) => (
        <option
          key={option}
          value={option}
          className="bg-slate-800"
        >
          {option}
        </option>
      ))}
    </select>
  );
}