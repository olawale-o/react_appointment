import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import style from './auth.module.css';
import { login } from '../../redux/auth/auth_async_actions';
import authSelector from '../../redux/auth/auth_selector';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, user } = useSelector(authSelector);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    if (user) {
      navigate('/', { replace: true });
    }
  }, [user]);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const credentials = {
      user: { email, password },
    };
    dispatch(login(credentials));
  };
  return (
    <div className={style.loginContainer}>
      <div className={style.form}>
        <form onSubmit={handleFormSubmit}>
          <h3>Book an appointment</h3>
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
          <div className="actions">
            {isLoading
              ? <div className="form__submission-indicator" />
              : <input type="submit" value="Login" className="btn authBtn" />}
          </div>
          <Link to="/register" className={style.link}>
            Don
            {'\''}
            t have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
