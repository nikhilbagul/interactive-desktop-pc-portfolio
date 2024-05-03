import './App.css';
import LockScreen from './components/pages/LockScreen';
import DesktopScreen from './components/pages/DesktopScreen';
import { useState } from 'react';

function App() {

  const [ isLockScreenActive, setLockScreenState ] = useState(true);
  const [ isDesktopScreenActive, setDesktopScreenState ] = useState(false);
  const loadDesktopScreen = () =>
  {
      setDesktopScreenState(true);
      setLockScreenState(false);  
  }

  const loadLockScreen = () =>
  {
      setDesktopScreenState(false);
      setLockScreenState(true);  
  }

  return (
    <div className="App">

        { isLockScreenActive && !isDesktopScreenActive && <LockScreen loadDesktopScreen = { loadDesktopScreen } /> }

        { !isLockScreenActive && isDesktopScreenActive && <DesktopScreen loadLockScreen = { loadLockScreen } /> }

    </div>
  );
}

export default App;