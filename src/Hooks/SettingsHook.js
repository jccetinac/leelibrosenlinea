import { useDispatch, useSelector } from 'react-redux';
import {
  showSettings,
  setSize,
  setModeColor,
} from '../store/actions/videoActions';

const SettingsHook = () => {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);
  const size = useSelector((state) => state.size);
  const modeColor = useSelector((state) => state.modeColor);

  const incressSizeFont = () => {
    dispatch(setSize(Math.min(200, size + 10)));
  };
  const decressSizeFont = () => {
    dispatch(setSize(Math.min(200, size - 10)));
  };

  const switchShowSettings = () => {
    dispatch(showSettings(!settings));
  };

  const switchModeColor = (val) => {
    dispatch(setModeColor(val));
  };

  return {
    incressSizeFont,
    decressSizeFont,
    size,
    switchShowSettings,
    settings,
    modeColor,
    switchModeColor,
  };
};

export default SettingsHook;
