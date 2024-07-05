function FormCheckbox({name,labelText}) {
  return (
    <div className="form-control">
      <label className="cursor-pointer label flex gap-2">
        <span className="text-lg font-mono">{labelText}</span>
        <input
          name={name}
          type="checkbox"
          className="checkbox checkbox-success"
        />
      </label>
    </div>
  );
}
export default FormCheckbox;
