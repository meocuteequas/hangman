import React, { useEffect, useState } from 'react';
import Preload from './components/preload';
import Stage from './components/stage';
import Game from './components/game';


export default function Playground() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => setLoading(false), 4000);
  }, []);
  return (
    <>
      {loading ? <Preload /> : <Stage exit={setLoading}/>}
    </>
  );
}
