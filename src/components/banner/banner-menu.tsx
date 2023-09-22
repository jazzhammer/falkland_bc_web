import React, {useState} from "react";

export function BannerMenu({onSelectMenuItem}: {
  onSelectMenuItem: (arg: string) => void
}) {
  const [selectedMenuItem, setSelectedMenuItem] = useState('');

  const highlighted = 'border-t-2 border-l-2 border-r-2 border-black bg-algae-400';
  const regular = 'border-b-2 border-b-black bg-algae-600';

  const onSelectedMenuItem = (selection: string) => {
    onSelectMenuItem(selection);
    setSelectedMenuItem(selection);
  }
  return (
    <div className={"flex flex-row pt-1"}>
      <div className="text-xl font-bold text-right pl-2 pt-2 pr-3 border-b-2 border-b-black">
        falkland bc
      </div>
      <div className={"w-full flex flex-row pt-1"}>
        <div className={`form-header flex flex-row w-1/3  cursor-pointer hover:text-sand-700 ${selectedMenuItem==='history' ? highlighted : regular}`}
             onClick={() => onSelectedMenuItem('history')}
        >
          <div className={"flex flex-col w-full"}>
            <div className={`font-bold text-center pt-4`}>
              history
            </div>
          </div>
        </div>
        <div className={`form-header flex flex-row w-1/3  cursor-pointer hover:text-sand-700 ${selectedMenuItem==='community' ? highlighted : regular}`}
             onClick={() => onSelectedMenuItem('community')}
        >
          <div className={"flex flex-col w-full pb-2"}>
            <div className={"font-bold text-center pt-4"}>community</div>
          </div>
        </div>
        <div className={`form-header bg-algae-600 flex flex-row w-1/3  cursor-pointer hover:text-sand-700 ${selectedMenuItem==='forms & documents' ? highlighted : regular}`}
             onClick={() => onSelectedMenuItem('forms & documents')}
        >
          <div className={"flex flex-col w-full pl-2 pr-2 pb-2 ml-1 mr-1"}>
            <div className={"font-bold text-center pt-4"}>forms & documents</div>
          </div>
        </div>
      </div>
    </div>
  );
}