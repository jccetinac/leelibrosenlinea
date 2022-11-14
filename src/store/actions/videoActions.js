const CHANGENAME = 'CHANGENAME';

const changeName = (inputValue) => ({
  type: CHANGENAME,
  payload: inputValue,
});

export { changeName, CHANGENAME };
