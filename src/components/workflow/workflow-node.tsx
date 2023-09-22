import {useDrag} from "react-dnd";
import {Knight} from "../dnd-chess/knight";

export function WorkflowNode({isDragging, text}: {
  isDragging: boolean,
  text?: string
}) {
  // const[{opacity}, dragRef] = useDrag(
  //   () => ({
  //     type: 'workflownode',
  //     item: {'asdfasdf'},
  //     collect: (monitor) => {opacity: monitor.isDragging() ? 0.5 : 1}
  //   }),
  //   []
  // );

  return (
    <div>
    </div>
  );
}