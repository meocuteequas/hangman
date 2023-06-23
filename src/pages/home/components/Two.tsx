import Lottie from 'lottie-react';
import { useRef, useState } from 'react';

import animatedChicky from '../animated/chicky.json';
import animatedFramer from '../animated/framer.json';
import background from '../images/background-2.jpg';
import { TypeAnimation } from 'react-type-animation';

export default function Two() {
  const [play, setPlayAnimation] = useState(false);
  const test = useRef<HTMLSpanElement>(null as any)
  const pause = () => {
    console.log(test.current)
    // e.target.style.animationPlayState = 'paused';
  }
  return (
    <div className='content relative z-0'>
      <img
      onClick={pause}
        className='w-100 h-100 object-cover'
        src={background}
        alt='background'
      />
      <div className='absolute top-[150px] left-2/4 -translate-x-2/4 p-8'>
        <div className='relative p-4 bg-green-100' onClick={pause}>
          <span
            onClick={() => setPlayAnimation(true)}
            className='2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl block cursor-pointer w-[1323px]'
          >
            One sunny morning, the aroma of freshly scattered grains filled the
            air, signaling breakfast time. The farmer had left a bountiful feast
            of corn, seeds, and worms for the chickens near the old oak tree.
            Excitedly, Clucky, Pecky, and Feathers fluttered their wings and
            hurried towards the feast.
          </span>
          {play && (
            <TypeAnimation
              ref={test}
              
              sequence={[
                'One sunny morning, the aroma of freshly scattered grains filled the air, signaling breakfast time. The farmer had left a bountiful feast of corn, seeds, and worms for the chickens near the old oak tree. Excitedly, Clucky, Pecky, and Feathers fluttered their wings and hurried towards the feast.',
                200,
                () => setPlayAnimation(false),
              ]}
              cursor={false}
              speed={50}
              className={
                '2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl absolute left-4 top-4 '
              }
              style={{
                width: '1323px',
                display: 'block',
                whiteSpace: 'pre-line',
                textShadow:
                  '-1px -1px 0 #000,  1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
              }}
            />
          )}
        </div>
      </div>
      <Lottie
        className='cursor-pointer absolute left-[497px] top-[360px] w-[600px] h-[600px]'
        animationData={animatedFramer}
      />
      <Lottie
        className='cursor-pointer absolute left-[670px] top-[650px] w-[256px] h-[256px]'
        animationData={animatedChicky}
      />
      <Lottie
        className='cursor-pointer absolute top-[660px] right-[880px] w-[256px] h-[256px]'
        animationData={animatedChicky}
      />
      <Lottie
        className='cursor-pointer absolute -scale-x-100 top-[750px] right-[650px] w-[256px] h-[256px]'
        animationData={animatedChicky}
      />
    </div>
  );
}
