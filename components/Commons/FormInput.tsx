import type { NextPage } from "next";
import { useState } from "react";
import styles from "../../styles/Commons/FormInput.module.scss";

type FormInputP = {
  name: string;
  type: string;
  placeholder: string;
  errorMessage: string;
  label: string;
  pattern?: string;
  required: boolean;
  values: {};
  setValues: any;
};

const FormInput: NextPage<FormInputP> = (props) => {
  const { label, errorMessage, setValues, values, name, ...inputProps } = props;
  const [blur, setBlur] = useState(false);

  return (
    <div className={styles.FormInput}>
      <label>{label}</label>
      <input
        className={blur ? styles.blur : ""}
        {...inputProps}
        onChange={(e) => setValues({ ...values, [name]: e.target.value })}
        onBlur={() => setBlur(true)}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
