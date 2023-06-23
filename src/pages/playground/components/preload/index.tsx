import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import { animated, useSpring, useTransition } from '@react-spring/web';
import useMeasure from 'react-use-measure';
import background from './space-background-with-planet-landscape_107791-6146.avif';
export default function Preload() {
  const [items, set] = useState<string[]>([]);
  const [active, toggle] = useState(false);

  const [bind, { width }] = useMeasure();

  const ref = useRef<ReturnType<typeof setTimeout>[]>([]);

  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: '#8fa5b6',
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#28d79f' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [
      { color: '#c23369' },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: '#28b4d7' },
  });

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(
      setTimeout(() => set(['Apples', 'Oranges', 'Kiwis']), 2000)
    );
    ref.current.push(setTimeout(() => set(['Apples', 'Kiwis']), 5000));
    ref.current.push(
      setTimeout(() => set(['Apples', 'Bananas', 'Kiwis']), 8000)
    );
  }, []);

  useEffect(() => {
    reset();
    setTimeout(() => toggle(true), 3000);
    return () => ref.current.forEach(clearTimeout);
  }, []);

  const props = useSpring({ width: active ? width : 0 });
  const emerge = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 3000,
  });
  return (
    <div
      className='flex flex-col w-full h-screen items-center justify-center font-meocuteequas'
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
      }}
    >
      <div className={styles.main}>
        {transitions(({ innerHeight, ...rest }, item) => (
          <animated.div
            className={styles.transitionsItem}
            style={rest}
            onClick={reset}
          >
            <animated.div style={{ overflow: 'hidden', height: innerHeight }}>
              {item}
            </animated.div>
          </animated.div>
        ))}
      </div>

      <animated.div
        ref={bind}
        className={`${styles.loading} mt-10`}
        style={emerge}
      >
        <animated.div className={styles.fill} style={props} />
        <animated.div
          className={`${styles.content} text-2xl font-semibold font-meocuteequas`}
        >
          {props.width.to((x) => (x / 4).toFixed(0))}
        </animated.div>
      </animated.div>
    </div>
  );
}
