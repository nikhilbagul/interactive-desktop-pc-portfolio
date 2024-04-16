import './App.css';
import LockScreen from './components/pages/LockScreen';
import DesktopScreen from './components/pages/DesktopScreen';
import { useState } from 'react';

function App() {

  const [ showDesktopScreen, setDesktopScreenState ] = useState(false);
  const toggleDesktopScreen = () =>
  {
      setDesktopScreenState(!showDesktopScreen);  
  }

  const [ showLockScreen, setLockScreenState ] = useState(true);
  

  return (
    <div className="App">      
        { 
        showLockScreen && 
        !showDesktopScreen && 
        <LockScreen loadDesktopScreen = { toggleDesktopScreen } /> 
        }

        { showDesktopScreen && <DesktopScreen/> }
    </div>
  );
}

export default App;