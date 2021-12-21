import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDoctors } from '../../redux/doctors/doctor_async_action';
import { selectDoctors, selectLoading } from '../../redux/doctors/doctor_selector';
import CarouselSlider from '../shared/CarouselSlider';

const List = () => {
  const dispatch = useDispatch();
  const allDoctorIds = useSelector(selectDoctors);
  const loading = useSelector(selectLoading);
  useEffect(() => {
    dispatch(getDoctors());
  }, []);

  return (
    <div className="doctor__list" style={{ overflowX: 'hidden', paddingTop: '6rem' }}>
      {loading
        ? <div className="loading__indicator" />
        : (
          <>
            <div className="home__header">
              <h1 className="heading1">OUR RECENT DOCTORS</h1>
              <h5 className="heading5">Pick a Doctor for an Appointment!</h5>
            </div>
            <CarouselSlider doctors={allDoctorIds} />
          </>
        )}
    </div>
  );
};

export default List;
