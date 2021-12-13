import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropType from 'prop-types';
import authSelector from '../../redux/auth/auth_selector';

const PublicRoute = ({ children }) => {
  const { user } = useSelector(authSelector);

  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  if (user) return <Navigate to={from} />;
  return children;
};

export default PublicRoute;

PublicRoute.propTypes = {
  children: PropType.node.isRequired,
};
