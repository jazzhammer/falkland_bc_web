import {Knight} from './knight';
import {Square} from "./square";
import {Dispatch, SetStateAction} from "react";
import BoardSquare from "./board-square";

// export function renderSquare(i: number, [knightX, knightY]: [number, number], moveKnight: (x: number, y: number) => void) {
//   const x = i % 8
//   const y = Math.floor(i / 8)
//   const isKnightHere = x === knightX && y === knightY
//   const black = (x + y) % 2 === 1
//   const piece = isKnightHere ? <Knight  children={null}/> : null
//   const onSquareClick = (toX: number, toY: number) => {
//     moveKnight(toX, toY)
//   }
//
//   return (
//     <div key={i} className={"w-1/8 h-1/8"} onClick={() => onSquareClick(x, y)}>
//       <Square isBlack={black} text={''}>{piece}</Square>
//     </div>
//   )
// }
export function renderPiece(x: number, y: number, [knightX, knightY]: [number, number]) {
  if (x === knightX && y === knightY) {
    return <Knight  children={null}/>
  }
}

export function renderSquare(i: number, knightPosition: [number, number], moveKnight: (x: number, y: number) =>void) {
  const x = i % 8
  const y = Math.floor(i / 8)
  return (
    <div key={i} className={"w-48 h-48"}>
      <BoardSquare x={x} y={y} moveKnight={moveKnight}>
        {renderPiece(x, y, knightPosition)}
      </BoardSquare>
    </div>
  )
}

export function observeKnightPosition(receiver: Dispatch<SetStateAction<[number, number]>>) {
  const randPos = () => Math.floor(Math.random() * 8)
  setInterval(() => receiver([randPos(), randPos()]), 2000)
}

export function canMoveKnight(knightPosition: [number, number], toX: number, toY: number) {
  const dx = toX - knightPosition[0];
  const dy = toY - knightPosition[1];

  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  )
}

export const ItemTypes = {
  KNIGHT: 'knight'
}

