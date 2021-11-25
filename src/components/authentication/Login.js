import React from 'react';
import style from './login.module.css';

const Login = () => (
  <div className={style.loginContainer}>
    <div className={style.form}>
      <form>
        <h3>Book an appointment</h3>
        <div className={style.field}>
          <input type="text" placeholder="Username" className={style.input} required />
        </div>
        <div className="actions">
          <input type="submit" value="Login" className="btn loginBtn" />
        </div>
      </form>
    </div>
  </div>
);

export default Login;
