import React, { useState } from 'react';
import styles from './styles.module.css';
import stars from './images/stars.png';
import astronaut from './images/cartoon-icon-rock-planet-with-moving-stones-orbit-around-galaxy-theme-icon-game-using_273625-40.avif';
export default function Level() {
  const [selected, setSelected] = useState(false);
  const select = (e: any) => {
    setSelected(old => !old);
  };
  return (
    <div
      className={`h-48 w-auto relative ${selected ? '' : styles.grayScale}`}
      onClick={select}
    >
      <img className='absolute -top-0' src={stars} alt='stars' width={128} />
      <img
        src={astronaut}
        alt='astronaut'
        width={256}
        className='rounded-3xl border-4 border-blue-700'
      />
    </div>
  );
}
