import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import doctorSelector from '../../redux/doctors/doctor_selector';
import './Detail.css';

const Detail = () => {
  const { id } = useParams();
  const { doctors } = useSelector(doctorSelector);
  const doctor = doctors.find((doctor) => doctor.id === +id);
  return (
    <div className="Details" style={{ paddingTop: '6rem' }}>
      <div className="details__container">
        <Link to="/" className="back__btn">
          <i className="bx bx-arrow-back" />
        </Link>
        <div className="large__picture">
          <img src={`http://localhost:3000${doctor.picture}`} alt="doctor" />
        </div>
        <div className="details__info">
          <h2 className="detail__info-name">{`Dr. ${doctor.fullname}`}</h2>
          <div className="specialty">
            <p className="speciality__banner">Specialty</p>
            <h6 className="specialty__title">{doctor.specialty}</h6>
          </div>
          <div className="city">
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
              regulations imposed by our platform. To read more about it, please contact our staff.
            </p>
          </div>
          <div className="btn__container">
            <Link to="/appointment" className="btn btn__large">Book an appointment</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
