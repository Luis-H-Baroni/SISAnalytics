export const validateBlankValue = (obj) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (typeof value === 'string' && value.trim() === '') {
        return true;
      }
    }
  }
  return false;
}