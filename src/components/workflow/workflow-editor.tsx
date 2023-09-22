import {WorkflowNode} from "./workflow-node";
import {Square} from "../dnd-chess/square";
import React, {useState} from "react";
import Board from "../dnd-chess/board";
import MapMenu from "../history/map-menu";
import DonorView from "../donor/donor-view";

export function WorkflowEditor() {
  const initialKnightPosition: [number, number] = [4, 4];
  const [knightPosition, setKnightPosition] = useState(initialKnightPosition);
  const [selectedMenuItem, setSelectedMenuItem] = useState('');
  const onMoveKnight = (x: number, y: number) => {
    // if (canMoveKnight(knightPosition, x, y)) {
      setKnightPosition([x, y]);
    // }
  }

  const onSelectedMenuItem = (selection: string) => {
    setSelectedMenuItem(selection);
  }

  return (
    <div className={"flex flex-col w-full"}>
      <div className={"w-full bg-algae-400 font-bold pl-1 text-white"}>historical museum: artifacts and services</div>
      <div className={"w-full p-2 content-center"}>
          <MapMenu onSelectMenuItem={onSelectedMenuItem}></MapMenu>
        </div>
      <div className={"flex flex-col w-fullh-screen"}>
        {selectedMenuItem === 'donor' && <DonorView></DonorView>}
      </div>
    </div>
  );
}