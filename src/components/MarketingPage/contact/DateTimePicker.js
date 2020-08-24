import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";

function DateTimePickerComp() {
  const [value, onChange] = useState(new Date());

  return (
    <div id="picker">
      <DateTimePicker onChange={onChange} value={value} />
    </div>
  );
}

export default DateTimePickerComp;
