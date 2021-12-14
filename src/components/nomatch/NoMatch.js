import React from 'react';
import { useLocation } from 'react-router-dom';
import style from './NoMatch.module.css';

const NoMatch = () => {
  const location = useLocation();
  return (
    <div className={style.notFound}>
      No match for
      <code>
        {location.pathname}
      </code>
    </div>
  );
};

export default NoMatch;
