import React from 'react';

const New = () => (
  <div className="booking__new">
    <div className="form">
      <form>
        <h1 className="heading1 mb-2" style={{ color: '#fff' }}>BOOK AN APPOINTMENT</h1>
        <div className="field">
          <select required>
            <option>Select a doctor</option>
            <option value="1">Dr Sola</option>
            <option value="2">Dr Supo</option>
          </select>
        </div>
        <div className="field">
          <select required>
            <option>Select a city</option>
            <option value="1">Lagos</option>
            <option value="2">Toronto</option>
          </select>
        </div>
        <div className="field">
          <input type="datetime-local" className="input" required />
        </div>
        <div className="action">
          <input type="submit" value="Book" className="btn addBtn" />
        </div>
      </form>
    </div>
  </div>
);

export default New;
