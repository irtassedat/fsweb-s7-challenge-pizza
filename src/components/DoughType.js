import React, { useState } from "react";

const DoughType = ({doughType}) => {
  const [value, setValue] = useState("default");
  const handleChange = (e) => {
    setValue(e.target.value)
    doughType(e.target.value)
  };

  return (
    <>
      <div className="doughTypes" onChange={null}>
        <h4><span style={{ fontWeight: "bold" }}>Hamur Seç</span> <span style={{ color: "red" }}>*</span></h4>
        <select onChange={e => {handleChange(e)}} defaultValue="default" name="doughch" id="doughch">
          <option disabled={true} value="default" hidden style={{ fontWeight: "bold" }}>Hamur Kalınlığı</option>
          <option value="ince">İnce Hamur</option>
          <option value="normal">Normal Hamur</option>
          <option value="kalın">Kalın hamur</option>
        </select>
      </div>
    </>
  );
  
};
export default DoughType;