import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addDoctor } from '../../redux/doctors/doctor_async_action';

<<<<<<< HEAD
const NewDoctor = () => (
  <div className="doctor__new">
    <div className="form">
      <form>
        <h1 className="heading1 mb-2" style={{ color: '#fff' }}>ADD A NEW DOCTOR</h1>
        <div className="field">
          <input type="text" placeholder="Doctor's Name" className="input" required />
        </div>
        <div className="field">
          <select required>
            <option>Select a city</option>
            <option value="1">Lagos</option>
            <option value="2">Toronto</option>
          </select>
        </div>
        <div className="field">
          <input type="text" placeholder="Specialization" className="input" required />
        </div>
        <div className="field">
          <textarea placeholder="Description" rows="5" cols="35" className="textarea" required />
        </div>
        <div className="field">
          <input type="file" className="input" required />
        </div>
        <div className="action">
          <input type="submit" value="Add Doctor" className="btn addBtn" />
        </div>
      </form>
=======
const NewDoctor = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [fullname, setFullName] = useState('');
  const [city, setCity] = useState();
  const [specialty, setSpecialty] = useState('');
  const [picture, setPicture] = useState();
  const [description, setDescription] = useState('');
  const callback = (id) => {
    navigate(`/doctor/${id}`, { replace: true });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(description);
    const formData = new FormData();
    formData.append('doctor[fullname]', fullname);
    formData.append('doctor[city]', city);
    formData.append('doctor[specialty]', specialty);
    formData.append('doctor[picture]', picture);
    dispatch(addDoctor(formData, callback));
  };

  return (
    <div className="doctor__new">
      <div className="doctor__form">
        <form onSubmit={handleSubmit}>
          <h1 className="heading1 mb-2" style={{ color: '#fff' }}>ADD A NEW DOCTOR</h1>
          <div className="field">
            <input
              type="text"
              placeholder="Doctor's Name"
              className="input"
              required
              onChange={(e) => setFullName(e.target.value)}
              value={fullname}
            />
          </div>
          <div className="field">
            <select required onChange={(e) => setCity(e.target.value)} value={city}>
              <option>Select a city</option>
              <option value="lagos">Lagos</option>
              <option value="toronto">Toronto</option>
            </select>
          </div>
          <div className="field">
            <input
              type="text"
              placeholder="Specialization"
              className="input"
              required
              onChange={(e) => setSpecialty(e.target.value)}
              value={specialty}
            />
          </div>
          <div className="field">
            <textarea
              placeholder="Description"
              rows="5"
              cols="35"
              className="textarea"
              required
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div className="field">
            <input
              type="file"
              className="input"
              required
              onChange={(e) => setPicture(e.target.files[0])}
            />
          </div>
          <div className="action">
            <input type="submit" value="Add Doctor" className="btn addBtn" />
          </div>
        </form>
      </div>
>>>>>>> develop
    </div>
  );
};

export default NewDoctor;
