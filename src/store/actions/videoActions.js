const CHANGEVIDEO = 'CHANGEVIDEO';

const changeVideo = (inputValue) => ({
  type: CHANGEVIDEO,
  payload: inputValue,
});

export { changeVideo, CHANGEVIDEO };
