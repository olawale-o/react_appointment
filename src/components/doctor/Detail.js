import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getDoctor, onDoctorToBook } from '../../redux/doctors/doctor_async_action';
import { selectLoading, selectDoctorById } from '../../redux/doctors/doctor_selector';
import BASE_URI from '../../constants/url';
import './Detail.css';
import Button from '../shared/Button';

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const doctor = useSelector(selectDoctorById(id));

  useEffect(() => {
    if (!doctor) {
      dispatch(getDoctor(id));
    }
  }, [doctor, id]);

  const setDoctorAndNavigate = () => {
    dispatch(onDoctorToBook(id));
    navigate('/appointment');
  };

  if (!doctor) return null;

  return (
    <div className="Details" style={{ paddingTop: '6rem' }}>
      {loading
        ? <div className="loadding__indicator" />
        : (
          <div className="details__container">
            <Link to="/" className="back__btn" data-testid="arrow-back">
              <i className="bx bx-arrow-back" />
            </Link>
            <div className="large__picture">
              <img src={`${BASE_URI}${doctor.picture}`} alt="doctor" />
            </div>
            <div className="details__info">
              <h2 className="detail__info-name">{`Dr. ${doctor.fullname}`}</h2>
              <div className="specialty__div">
                <p className="speciality__banner">Specialty</p>
                <h6 className="specialty__title">{doctor.specialty}</h6>
              </div>
              <div className="city__div">
                <p className="city__banner">City</p>
                <h6 className="city__title">{doctor.city}</h6>
              </div>
              <div className="fee__container">
                <span className="fee">$10 </span>
                per hour
              </div>
              <div className="note">
                <p className="note__description">
                  All of our doctors have an hourly rate of $10 according to the
                  regulations imposed by our platform. To read more about it,
                  please contact our staff.
                </p>
              </div>
              <div className="btn__container">
                <Button
                  text="Book an appointment"
                  callBack={setDoctorAndNavigate}
                />
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default Detail;
