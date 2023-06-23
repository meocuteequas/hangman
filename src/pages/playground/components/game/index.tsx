import { animated, useSpring, useTransition } from '@react-spring/web';
import { useEffect, useState } from 'react';
type Props = {
  world: string;
};
export default function Gamr({ world }: Props) {
  const word = world.toUpperCase();
  const alphabets = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  const [correctGuesses, setCorrectGuesses] = useState<string[]>([]);
  const [timeUp, setTimeUp] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimeUp(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  const maskedWord = word
    .split('')
    .map((letter) => (correctGuesses.includes(letter) ? letter : '_'))
    .join(' ');

  const congratulations = useSpring({
    from: { opacity: 0, x: -100 },
    to: { opacity: 1, x: 0 },
    delay: 800,
    config: { duration: 500 },
  });

  const continuee = () => {
    setTimeUp(false)
    setCorrectGuesses([])
  }

  return (
    <>
      {timeUp ? (
        <animated.div
        className='w-full h-2/5 bg-green-100 p-16 fixed flex gap-8 flex-col items-center'
        style={congratulations}
      >
        <p className='w-full text-6xl font-meocuteequas text-center mb-8'>
          Congratulation!, You lost :(
        </p>
        <button className='font-meocuteequas bg-yellow-300 py-4 px-8 text-3xl hover:scale-95'
        onClick={continuee}>
          Continue
        </button>
      </animated.div>
      ) : (
        !maskedWord.includes('_') && (
          <animated.div
            className='w-full h-2/5 bg-green-100 p-16 fixed flex gap-8 flex-col items-center'
            style={congratulations}
          >
            <p className='w-full text-6xl font-meocuteequas text-center mb-8'>
              Congratulation!, You won
            </p>
            <button className='font-meocuteequas bg-yellow-300 py-4 px-8 text-3xl hover:scale-95'
            onClick={continuee}>
              Continue
            </button>
          </animated.div>
        )
      )}

      <div className='w-3/4 text-center font-meocuteequas'>
        <p className='text-6xl text-white font-semibold mb-8'>
          What is the highest mountain in the world?
        </p>
        <p className='text-4xl text-white font-semibold mb-40'>{maskedWord}</p>
        {alphabets.map((alphabet, index) => (
          <button
            key={index}
            className='text-white text-4xl m-4 p-4 border-4 border-blue-700 font-semibold rounded-3xl'
            onClick={() => {
              if (word.includes(alphabet)) {
                setCorrectGuesses([...correctGuesses, alphabet]);
              }
            }}
          >
            {alphabet}
          </button>
        ))}
      </div>
    </>
  );
}
