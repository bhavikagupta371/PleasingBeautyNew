import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
// import Select from "react-select";
import './LocationBox.css'

// import { Cities } from '../../Cities';


const LocationBox = () => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();



  const options = [
    { value: " ", label: "Select a location...." },
    { value: "Babulaal Chauraha Banda", label: "Babulaal" },
    { value: "Kalu Kuwan Banda", label: "Kalu Kuwan" },
    { value: "Atarra Chungi", label: "Atarra Chungi" },
    { value: "Babulaal Chauraha Banda", label: "Babulaal" },
    { value: "Kalu Kuwan Banda", label: "Kalu Kuwan" },
    { value: "Atarra Chungi", label: "Atarra Chungi" },


  ];



  const handleChange = (value) => {
    setCity(value);
    navigate(`/${value}`);
  };

  // const customStyles = {
  //   option: (defaultStyles, state) => ({
  //     ...defaultStyles,
  //     color: state.isSelected ? "black" : "black",
  //     backgroundColor: state.isSelected ? "white" : "white",
  //   }),

  //   control: (defaultStyles) => ({
  //     ...defaultStyles,
  //     backgroundColor: "white",
  //     color: 'black',
  //     padding: "10px",
  //     boxShadow: "none",
  //   }),
  //   singleValue: (defaultStyles) => ({ ...defaultStyles, color: "black" }),
  // };

  return (
    <div className='location-box'>
      <h3>Select a location and find your nearest salon</h3>
      {/* <Select
        value={city}
        options={options} styles={customStyles}
        onChange={(event) =>handleChange(event.target.value)}
      /> */}

      {/* <form onSubmit={handleSubmit} >

        <input
          className='inputField'
          value={word}
          onChange={event => setWord(event.target.value)}
          type="text" placeholder='Enter a word' />
      </form> */}
        <div class="select">
            <select name="slct" id="slct"
             cursor={"pointer"}
             placeholder="Select City"
             value={city}
             width={"20em"}
             onChange={(e) => handleChange(e.target.value)}
             >
                {options.map((item, index) =>
          (
            <option
              key={index}
              style={{ cursor: "pointer" }}
              value={item.value}
            >
              {item.label}
            </option>
          )
          )}
            </select>
        </div>
    </div>

    
  )
}

export default LocationBox