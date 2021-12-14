import { useSelector } from 'react-redux';
import doctorSelector from '../../redux/doctors/doctor_selector';
import DoctorList from '../shared/DoctorList';

const AllDoctors = () => {
  const { doctors, loading } = useSelector(doctorSelector);
  return (
    <div className="Appointments" style={{ background: 'whitesmoke', minHeight: '700px', paddingTop: '10rem' }}>
      <div className="table__container">
        {loading && <div className="loading__indicator" />}
        { doctors.length > 0
          && (
            <>
              <h1 className="heading1">My Doctors</h1>
              <DoctorList doctors={doctors} />
            </>
          )}
        { doctors.length === 0 && (<div style={{ fontSize: '3rem', textAlign: 'center' }}>You dont have doctors</div>) }
      </div>
    </div>
  );
};

export default AllDoctors;
