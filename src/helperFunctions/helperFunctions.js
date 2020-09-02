export const filterValues = (array) => {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    let obj = array[i];
    for (let key in obj) {
      if (obj[key] > 0) {
        result = key;
      }
    }
  }
  return result;
};
