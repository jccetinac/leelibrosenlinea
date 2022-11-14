import { useDispatch, useSelector } from 'react-redux';
import { showSettings, setSize } from '../store/actions/videoActions';

const SettingsHook = () => {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);
  const size = useSelector((state) => state.size);

  const incressSizeFont = () => {
    dispatch(setSize(Math.min(200, size + 10)));
  };
  const decressSizeFont = () => {
    dispatch(setSize(Math.min(200, size - 10)));
  };

  const switchShowSettings = () => {
    dispatch(showSettings(!settings));
  };

  return {
    incressSizeFont,
    decressSizeFont,
    size,
    switchShowSettings,
    settings,
  };
};

export default SettingsHook;
