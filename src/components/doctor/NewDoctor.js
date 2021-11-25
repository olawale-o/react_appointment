import React from 'react';

const NewDoctor = () => (
  <div className="doctor__new">
    <div className="doctor__form">
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
    </div>
  </div>
);

export default NewDoctor;
