import React from "react";
import { Field, reduxForm } from "redux-form";
import FormField from "../FormField";
import { required } from "../../utils/validators";

import styles from "./index.module.scss";

function LoginForm({ error, handleSubmit, errorMessage, captchaUrl }) {
  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.item}>
        <Field
          placeholder="Email"
          name="email"
          type="email"
          component={FormField}
          validate={[required]}
        />
      </div>

      <div className={styles.item}>
        <Field
          placeholder="Password"
          name="password"
          type="password"
          component={FormField}
          validate={[required]}
        />
      </div>

      <label className={styles.item}>
        <Field
          type="checkbox"
          name="rememberMe"
          placeholder=""
          component="input"
        />
        <span>Remember me</span>
      </label>

      <p className={styles.error}>
        {error} <br /> {errorMessage}
      </p>

      {captchaUrl ? (
        <div>
          <p>Captcha</p>
          <img alt="captcha" src={captchaUrl} />
          <div className={styles.item}>
            <Field
              type="text"
              name="captcha"
              component={FormField}
              validate={[required]}
            />
          </div>
        </div>
      ) : null}

      <div className={styles.item}>
        <button type="submit">Login</button>
      </div>
    </form>
  );
}

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

export default LoginReduxForm;
