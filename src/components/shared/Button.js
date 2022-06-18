import { Link } from 'react-router-dom';
import PropType from 'prop-types';

const Button = ({ href, text, callBack }) => {
  if (href) {
    return (<Link to={href} className="btn btn__large">{text}</Link>);
  }
  return (
    <button type="button" className="btn btn__large" onClick={callBack}>{text}</button>
  );
};

export default Button;

Button.defaultProps = {
  href: '',
  callBack: () => {},
};

Button.propTypes = {
  href: PropType.string,
  text: PropType.string.isRequired,
  callBack: PropType.func,
};
