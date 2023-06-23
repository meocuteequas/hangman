import {
  animated,
  useChain,
  useSpring,
  useSpringRef,
  useTransition,
} from '@react-spring/web';
import { Dispatch, SetStateAction, useRef, useState } from 'react';
import { ReactComponent as Arrow } from './icons/right.svg';

import stage1 from './images/1843.jpg';
import stage2 from './images/3573.jpg';
import background from './images/realistic-futuristic-cyber-monday-background_52683-73300.avif';
import Level from './Level';
import Game from '../game';

const levels = [
  {
    name: 'Rare Wind',
    height: 200,
  },
  {
    name: 'Rare Wind',
    height: 200,
  },
  {
    name: 'Rare Wind',
    height: 200,
  },
  {
    name: 'Rare Wind',
    height: 200,
  },
];
type Props = {
  exit: Dispatch<SetStateAction<boolean>>;
};
export default function Stage({ exit }: Props) {
  const [open, toggle] = useState(true);

  const transApi = useSpringRef();
  const transition = useTransition(open ? levels : [], {
    ref: transApi,
    trail: 200 / levels.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });
  useChain([transApi], [0]);
  return (
    <div
      className='w-full h-screen p-5 flex items-center justify-center cursor-pointer relative'
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
      }}
    >
      <button
        className='absolute top-16 left-16 font-meocuteequas bg-yellow-300 py-4 px-8 text-3xl hover:scale-95'
        onClick={() => exit(true)}
      >
        Exit
      </button>
      {open && (
        <div className='flex gap-8 items-center mt-96 animate-pulse'>
          <span
            className='text-4xl font-semibold text-green-400 font-meocuteequas'
            style={{ whiteSpace: 'nowrap' }}
            onClick={() => toggle(true)}
          >
            Select stage
          </span>
          <Arrow style={{ width: 32, height: 32 }} />
        </div>
      )}

      {open === false && <Game world='meocuteequas'/>}
      <div className='levels absolute top-60'>
        <div className='flex gap-16'>
          {transition((style) => (
            <animated.div style={style} onClick={() => toggle(false)}>
              <Level />
            </animated.div>
          ))}
        </div>
      </div>
    </div>
  );
}
