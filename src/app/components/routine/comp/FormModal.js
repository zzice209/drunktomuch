import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import warn from "./warn";

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <div>
      <label>{label}</label>
      <input {...input} placeholder={label} type={type} />
    </div>
    <div>
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const renderSelect = ({
  input,
  label,
  value,
  meta: { touched, error, warning },
}) => (
  <div>
    <label>
      <input {...input} placeholder={label} type="radio" value={value} />
      {value}
    </label>
  </div>
);

const FormModal = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
      />
      <Field name="email" type="email" component={renderField} label="Email" />
      <Field name="age" type="number" component={renderField} label="Age" />
      <div>
        <label>Sex</label>
        <Field
          name="sex"
          type="radio"
          value="male"
          component={renderSelect}
        ></Field>
      </div>

      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "syncValidation", // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  warn, // <--- warning function given to redux-form
})(FormModal);
