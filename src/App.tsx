import { useState } from 'react';
import IntroScreen from './game/ui/IntroScreen';
import GameScreen from './game/ui/GameScreen';
import './index.css';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="app-container">
      {!isPlaying ? (
        <IntroScreen onStart={() => setIsPlaying(true)} />
      ) : (
        <GameScreen onBack={() => setIsPlaying(false)} />
      )}
    </div>
  );
}

export default App;
