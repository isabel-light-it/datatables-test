import React from "react";

interface Props {
  label: string;
  onChange: (e:any) => void;
  columnKey:string
}
const Checkbox = ({ label, onChange,columnKey }: Props) => {
  return (
    <label>
      <input type="checkbox" data-id={columnKey} onChange={(e)=>onChange(e)} />
      {label}
    </label>
  );
};

export default Checkbox;
