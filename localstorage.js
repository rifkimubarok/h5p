const getItem = (KEY) => {
  if (KEY == undefined || KEY == "") return "";
  const value = window.localStorage.getItem(KEY);
  return JSON.parse(value);
};

const setItem = (KEY, VALUE) => {
  if (typeof VALUE == "object") VALUE = JSON.stringify(VALUE);
  window.localStorage.setItem(KEY, VALUE);
};
