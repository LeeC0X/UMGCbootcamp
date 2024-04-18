import React, { useState } from 'react';

const NewMadLibForm = ({addItem}) => {
  const INITIAL_STATE = {
    name: '',
    qty: ''
  }
  const [formData, setFormData] = useState(INITIAL_STATE)

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }

  const handleSubmit =(e) => {
    e.preventDefault();
    addItem({...formData});
    setFormData(INITIAL_STATE);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <div>
          <input
            id="noun"
            type="text"
            name="noun"
            placeholder="noun"
            value={formData.noun}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            id="noun2"
            type="text"
            name="noun2"
            placeholder="noun2"
            value={formData.noun2}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            id="adjective"
            type="text"
            name="adjective"
            placeholder="adjective"
            value={formData.adjective}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            id="color"
            type="text"
            name="color"
            placeholder="color"
            value={formData.color}
            onChange={handleChange}
          />
        </div>
        <br />
        <button>Get Story</button>
        <hr className="w3-margin" />
      </form>
    </div>
  )
}

export default NewMadLibForm;
