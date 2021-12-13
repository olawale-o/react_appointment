import React from 'react';
import { useSelector } from 'react-redux';
import PropType from 'prop-types';
import authSelector from '../../redux/auth/auth_selector';

const DoctorItemCard = ({ doctor }) => {
  // const dispatch = useDispatch();
  const { user } = useSelector(authSelector);
  const onDelete = (id) => {
    console.log(id);
  };
  return (
    <>
      <div className="appointment__item">
        <div className="appointment__info">
          <img
            src={`http://localhost:3000${doctor.picture}`}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
            alt="appointment"
          />
          <span className="fs-3">{doctor.fullname}</span>
        </div>
        <div className="appointment__city">
          <span className="fs-3">{doctor.city}</span>
        </div>
        <div className="appointment__specialty">
          <span className="fs-3">{doctor.specialty}</span>
        </div>
        <span className="fs-6">
          <button onClick={() => onDelete(doctor.id)} type="button" disabled={doctor.user_id === user.id}>
            <i className="bx bx-trash-alt" />
          </button>
        </span>
      </div>
      <div className="divider" />
    </>
  );
};

export default DoctorItemCard;

DoctorItemCard.propTypes = {
  doctor: PropType.shape({
    id: PropType.number,
    fullname: PropType.string,
    specialty: PropType.string,
    city: PropType.string,
    picture: PropType.string,
    user_id: PropType.number,
  }).isRequired,
};
