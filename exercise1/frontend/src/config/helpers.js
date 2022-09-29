export const capitalizeFirstLetter = (string) => (
  string.charAt(0).toUpperCase() + string.slice(1)
);

export const getUserInit = () => ({
  name: '',
  email: '',
  phone: '',
  age: 15
});

export const scrollTopDomElemById = (domElemId) => {
  const myDiv = document.getElementById(domElemId);
  myDiv.scrollTop = 0;
}