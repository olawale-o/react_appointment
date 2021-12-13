import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import style from './auth.module.css';
import { register } from '../../redux/auth/auth_async_actions';
import authSelector from '../../redux/auth/auth_selector';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, user } = useSelector(authSelector);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const credentials = {
      user: {
        email,
        password,
        password_confirmation: passwordConfirmation,
        name,
      },
    };
    dispatch(register(credentials));
  };
  return (
    <div className={style.loginContainer}>
      <div className={style.form}>
        <form onSubmit={handleFormSubmit}>
          <h3>Book an appointment</h3>
          <div className={style.field}>
            <input
              type="text"
              placeholder="Full name"
              className={style.input}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={style.field}>
            <input
              type="text"
              placeholder="Email"
              className={style.input}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={style.field}>
            <input
              type="password"
              placeholder="Password"
              className={style.input}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={style.field}>
            <input
              type="password"
              placeholder="Confirm Password"
              className={style.input}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              required
            />
          </div>
          <div className="actions">
            {isLoading
              ? <div className="form__submission-indicator" />
              : <input type="submit" value="Create" className="btn authBtn" />}
          </div>
          <Link to="/login" className={style.link}>Already have an account?</Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
