import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import style from './auth.module.css';
import { login } from '../../redux/auth/auth_async_actions';
import authSelector from '../../redux/auth/auth_selector';
import { sliderImages } from '../../constants';

let imageInterval = null;
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, user } = useSelector(authSelector);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [counter, setCounter] = useState(0);
  const [currentImage, setCurrentImage] = useState(sliderImages[counter]);
  useEffect(() => {
    if (user) {
      navigate('/', { replace: true });
    }
  }, [user]);

  useEffect(() => {
    imageInterval = setInterval(() => {
      setCounter(counter === sliderImages.length - 1 ? 0 : counter + 1);
      setCurrentImage(sliderImages[counter]);
    }, 5000);
    return () => {
      clearInterval(imageInterval);
    };
  }, [counter]);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const credentials = {
      user: { email, password },
    };
    dispatch(login(credentials));
  };
  return (
    <div
      className={style.loginContainer}
      style={{
        backgroundImage: `url(${currentImage.image})`,
      }}
    >
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
