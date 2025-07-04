import "../../css/form.css";

export function numberInput(
  lable: string,
  nameInput: string,
  valueInput: string,
  onChangeInput: React.ChangeEventHandler<HTMLInputElement> | undefined
) {
  return (
    <>
      <div className="input-container">
        <input
          type="text"
          name={nameInput}
          id={nameInput}
          value={valueInput}
          onChange={onChangeInput}
          className={`input-field ${valueInput != "" ? "filled" : ""}`}
        />
        <label htmlFor={nameInput} className="input-label">
          {lable}
        </label>
      </div>
    </>
  );
}
