import { CSSProperties, useEffect, useRef, useState } from 'react';
import { Stage, Layer, Line } from 'react-konva';

import One from './components/One';
import Two from './components/Two';
import {
  AnimatedProps,
  animated,
  useSpringRef,
  useTransition,
} from '@react-spring/web';
import { styled } from '@mui/material';

export type Tool = 'pen' | 'eraser' | 'none';

const pages: ((
  props: AnimatedProps<{ style: CSSProperties }>
) => React.ReactElement)[] = [
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <One />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...styled }}>
      <Two />
    </animated.div>
  ),
];

export default function Home() {
  const sketchboard = useRef<any>();
  const isDrawing = useRef(false);

  const [lines, setLines] = useState<any>([]);
  const [tool, setTool] = useState<Tool>('none');

  useEffect(() => {
    const div = sketchboard.current;
    tool === 'pen'
      ? div.classList.remove('hidden')
      : div.classList.add('hidden');
  }, [tool]);

  const handleMouseDown = (e: any) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool, points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e: any) => {
    if (isDrawing.current === false) return;

    const stage = e.target.getStage();
    const point = stage.getPointerPosition();

    let lastLine = lines[lines.length - 1];
    lastLine.points = lastLine.points.concat([point.x, point.y]);
    lines.splice(lines.length - 1, 1, lastLine);

    setLines(lines.concat());
  };

  const handleMouseUp = () => (isDrawing.current = false);

  const transRef = useSpringRef();
  const [index, set] = useState(0);

  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });

  useEffect(() => {
    transRef.start();
  }, [index]);

  return (
    <>
      <div className='h-screen overflow-hidden'>
        <div className='tools absolute z-20'>
          <select value={tool} onChange={(e: any) => setTool(e.target.value)}>
            <option value='none'>None</option>
            <option value='pen'>Pen</option>
          </select>
          <button onClick={() => set(state => (state + 1) % 2)}>Click me</button>
        </div>

        {transitions((style, i) => {
          const Page = pages[i];
          return <Page style={style} />;
        })}

        <div className='hidden fixed z-10 top-0 left-0' ref={sketchboard}>
          <Stage
            width={window.innerWidth}
            height={window.innerHeight}
            onMouseDown={handleMouseDown}
            onMousemove={handleMouseMove}
            onMouseup={handleMouseUp}
          >
            <Layer>
              {lines.map((line: any, i: number) => (
                <Line
                  key={i}
                  points={line.points}
                  stroke='#df4b26'
                  strokeWidth={5}
                  tension={0.5}
                  lineCap='round'
                  lineJoin='round'
                  globalCompositeOperation={'source-over'}
                />
              ))}
            </Layer>
          </Stage>
        </div>
      </div>
    </>
  );
}
