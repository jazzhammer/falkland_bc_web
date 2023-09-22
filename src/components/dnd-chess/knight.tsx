import {ItemTypes} from "./util";
import {useDrag} from "react-dnd";

export function Knight({children}: {
  children: Element | null
}) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))
  return (
    <div className={"border-2 border-black w-6 h-6 p-0 text-sm text-center bg-white"}
         ref={drag}
         style={{
           opacity: isDragging ? 0.5 : 1,
           fontSize: 25,
           fontWeight: 'bold',
           cursor: 'move',
         }}>
      <span>K</span>
    </div>
  );
}