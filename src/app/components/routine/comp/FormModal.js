import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import warn from "./warn";

const renderField = ({
  input,
  label,
  value,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <div>
      <label>{label}</label>
      <input {...input} placeholder={label} type={type} value={value} />
    </div>
    <div>
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

// const renderSelect = ({
//   input,
//   value,
//   type,
//   meta: { touched, error, warning },
// }) => (
//   <label>
//     <input {...input} type={type} value={value} />
//     {value}
//   </label>
// );

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
      {/* <Field name="sex" type="radio" value="male" component={renderSelect} />
      ABC
      <Field name="sex" type="radio" value="female" component={renderSelect} />
      ABCD */}
      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field name="sex" component="input" type="radio" value="male" />{" "}
            Male
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="female" />{" "}
            Female
          </label>
        </div>
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
  form: "simple", // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  warn, // <--- warning function given to redux-form
})(FormModal);
