import React from "react";
import Select from 'react-select';

const Picker = (props) => {
  return (<div style={{alignItems:"center", marginLeft:500, marginRight:500, marginTop:30}}>
    <Select
    value={props.selectedValue}
    options={props.data}
    onChange={props.handleChange}
    placeholder="Sort By"
    />
    </div>
  );
};
export default Picker;
