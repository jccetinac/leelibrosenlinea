import { useDispatch, useSelector } from 'react-redux';
import { showSettings, setSize } from '../store/actions/videoActions';

const SettingsHook = () => {
  const dispatch = useDispatch();
  const settingsShow = useSelector((state) => state.settings);
  const size = useSelector((state) => state.size);

  const incressSizeFont = () => {
    dispatch(setSize(Math.min(200, size + 10)));
  };
  const decressSizeFont = () => {
    dispatch(setSize(Math.min(200, size - 10)));
  };

  const switchShowSettings = () => {
    dispatch(showSettings(!settingsShow));
  };

  return {
    incressSizeFont,
    decressSizeFont,
    size,
    switchShowSettings,
    showSettings,
  };
};

export default SettingsHook;
