function FormInput({labelText, type, name,status}) {
    return (
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="text-lg font-mono">{labelText}</span>
          </div>
          <input
            type={type}
            name={name}
            placeholder="Type here"
            className={`input input-bordered ${status} w-full max-w-xs `}          />
        </label>
    );
  }
  
  export default FormInput;
  