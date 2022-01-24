import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropType from 'prop-types';
import authSelector from '../../redux/auth/auth_selector';
import { selectDoctorById } from '../../redux/doctors/doctor_selector';
import { deleteDoctor } from '../../redux/doctors/doctor_async_action';
import BASE_URI from '../../constants/url';

const DoctorItemCard = ({ doctorId }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(authSelector);
  const onDelete = (id) => {
    dispatch(deleteDoctor(id));
  };
  const doctor = useSelector(selectDoctorById(String(doctorId)));
  return (
    <>
      <div className="table__row">
        <div className="info">
          <img
            src={`${BASE_URI}${doctor.picture}`}
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
        <div className="city">
          <span className="fs-3 bold xs">City: </span>
          <span className="fs-3">{doctor.city}</span>
        </div>
        <div className="specialty">
          <span className="fs-3 bold xs">Specialty: </span>
          <span className="fs-3">{doctor.specialty}</span>
        </div>
        <span className="fs-6">
          <button
            onClick={() => onDelete(doctor.id)}
            type="button"
            disabled={doctor.user_id !== user.id}
            className="btn"
          >
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
  doctorId: PropType.number.isRequired,
};
