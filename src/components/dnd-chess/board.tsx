import {Knight} from "./knight";
import {Square} from "./square";
import {renderSquare} from "./util";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
export default function Board({knightPosition, moveKnight}: {
  knightPosition: [number, number],
  moveKnight: (x: number, y: number) => void
}) {
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition, moveKnight))
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={"h-screen"}
           style={{
             height: '100%',
             display: 'flex',
             flexWrap: 'wrap'
           }}
      >
        {squares}
      </div>
    </DndProvider>
  )
}