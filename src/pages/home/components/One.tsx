import Lottie from 'lottie-react';
import { useState } from 'react';

import animatedChicky from '../animated/chicky.json';
import background from '../images/background.jpg';
import { TypeAnimation } from 'react-type-animation';

export default function One() {
  const [play, setPlayAnimation] = useState(false);

  return (
    <div className='content relative z-0'>
      <img
        className='w-100 h-100 object-cover'
        src={background}
        alt='background'
      />
      <div className='absolute top-[150px] left-2/4 -translate-x-2/4 p-8'>
        <div className='relative p-4 bg-green-100'>
          <span
            onClick={() => setPlayAnimation(true)}
            className='2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl block cursor-pointer w-[830px]'
          >
            Once upon a time, in a serene farm nestled amidst rolling hills,
            there were three chickens named Clucky, Pecky, and Feathers.
            <br />
            They were the best of friends and spent their days exploring the
            farm together.
          </span>
          {play && (
            <TypeAnimation
              sequence={[
                'Once upon a time, in a serene farm nestled amidst rolling hills, there were three chickens named Clucky, Pecky, and Feathers.\nThey were the best of friends and spent their days exploring the farm together.',
                200,
                () => setPlayAnimation(false),
              ]}
              cursor={false}
              speed={50}
              className={
                '2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl absolute left-4 top-4 '
              }
              style={{
                width: '830px',
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
        className='cursor-pointer absolute top-[400px] w-[512px] h-[512px]'
        animationData={animatedChicky}
      />
      <Lottie
        className='cursor-pointer absolute -scale-x-100 top-[600px] right-[300px] w-[256px] h-[256px]'
        animationData={animatedChicky}
      />
      <Lottie
        className='cursor-pointer absolute -scale-x-100 top-[550px] right-[650px] w-[256px] h-[256px]'
        animationData={animatedChicky}
      />
    </div>
  );
}
