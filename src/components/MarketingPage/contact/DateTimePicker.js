import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";

function DateTimePickerComp({ setPhoneAppoinment }) {
  const [value, onChange] = useState(new Date());
  setPhoneAppoinment(value.toLocaleString());

  return (
    <div id="picker">
      <DateTimePicker onChange={onChange} value={value} />
    </div>
  );
}

export default DateTimePickerComp;
