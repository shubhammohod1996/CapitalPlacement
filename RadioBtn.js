import React from 'react';

export default function RadioBtn() {
  return (
    <div className="radio form-check">
      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
      <label className="form-check-label" htmlFor="exampleRadios1">
        Option 1
      </label>
    </div>
  );
}
