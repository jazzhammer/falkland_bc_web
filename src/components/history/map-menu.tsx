import "./history.css";

export default function MapMenu({onSelectMenuItem}: {
    onSelectMenuItem: (selection: string) => void
}) {
    const onSelectedMenuItem = (selection: string) => {
        onSelectMenuItem(selection);
    }
  return (
    <div className={"content-centers"}>
        <div className={"map-menu-layout"}>
      {/*sequence station: donor*/}
      <div  style={{position:'absolute', top:10, left:140}}
            className={"border-2 border-green-800 pr-1 pl-1 hover:bg-green-200 cursor-pointer"}
            onClick={() => onSelectedMenuItem('donor')}
      >donor</div>
      <div style={{position:'absolute', top:36, left:167}}
           className={"border-l-2 border-green-800 h-48"}
      >&nbsp;</div>

      {/*sequence station: isbn*/}
      <div style={{position:'absolute', top:10, left:319}}
           className={"border-2 border-green-800 pr-1 pl-1"}
      >isbn</div>
      <div style={{position:'absolute', top:36, left:340}}
           className={"border-l-2 border-green-800 h-48"}
      >&nbsp;</div>

      {/*sequence station: museum*/}
      <div style={{position:'absolute', top:10, left:453}}
           className={"border-2 border-green-800 pr-1 pl-1"}
      >museum</div>
      <div style={{position:'absolute', top:36, left:490}}
           className={"border-l-2 border-green-800 h-48"}
      >&nbsp;</div>

      {/*sequence station: location*/}
      <div style={{position:'absolute', top:10, left:618}}
           className={"border-2 border-green-800 pr-1 pl-1"}
      >location</div>
      <div style={{position:'absolute', top:36, left:653}}
           className={"border-l-2 border-green-800 h-48"}
      >&nbsp;</div>

      <div style={{position:'absolute', top:82, left:201, borderRadius:24}}
           className={"border-4 border-green-800 pr-1 pl-1 h-10 pt-1 bg-green-200"}
      >new</div>
      <div style={{position:'absolute', top:60, left:114}}
           className={"border-2 border-orange-800 pr-1 pl-1 bg-white"}
      >book artifact</div>

      <div style={{position:'absolute', top:73, left:218}}
           className={"border-t-4 border-blue-800 w-32"}
      >&nbsp;</div>

      <div style={{position:'absolute', top:82, left:526, borderRadius:24}}
           className={"border-4 border-green-800 pr-1 pl-1 h-10 pt-1 bg-green-200"}
      >WH</div>

      <div style={{position:'absolute', top:73, left:368}}
           className={"border-t-4 border-blue-800 w-32"}
      >&nbsp;</div>

      <div style={{position:'absolute', top:73, left:500}}
           className={"border-t-4 border-blue-800 w-32"}
      >&nbsp;</div>
      <div style={{position:'absolute', top:82, left:685, borderRadius:24}}
           className={"border-4 border-green-800 pr-1 pl-1 h-10 pt-1 bg-green-200 w-9 text-center"}
      >D</div>
      <div style={{position:'absolute', top:60, left:598}}
           className={"border-2 border-orange-800 pr-1 pl-1 bg-white"}
      >book artifact</div>


      <div style={{position:'absolute', top:60, left:439}}
           className={"border-2 border-orange-800 pr-1 pl-1 bg-white"}
      >book artifact</div>

      <div style={{position:'absolute', top:82, left:371, borderRadius:24, width:42}}
           className={"border-4 border-green-800 pr-1 pl-1 h-10 pt-1 bg-green-200 text-center"}
      >id</div>
      <div style={{position:'absolute', top:60, left:285}}
           className={"border-2 border-orange-800 pr-1 pl-1 bg-white"}
      >book artifact</div>

      <div style={{position:'absolute', top:153, left:200}}
           className={"border-t-4 border-blue-800 w-64"}
      >&nbsp;</div>
      <div style={{position:'absolute', top:162, left:218, borderRadius:24}}
           className={"border-4 border-green-800 pr-1 pl-1 h-10 pt-1 bg-green-200"}
      >new</div>
      <div style={{position:'absolute', top:140, left:96}}
           className={"border-2 border-orange-800 pr-1 pl-1 bg-white"}
      >non-book artifact</div>

      <div style={{position:'absolute', top:154, left:550}}
           className={"border-t-4 border-blue-800 w-32"}
      >&nbsp;</div>
      <div style={{position:'absolute', top:162, left:540, borderRadius:24}}
           className={"border-4 border-green-800 pr-1 pl-1 h-10 pt-1 bg-green-200"}
      >WH</div>
      <div style={{position:'absolute', top:140, left:418}}
           className={"border-2 border-orange-800 pr-1 pl-1 bg-white"}
      >non-book artifact</div>

      <div style={{position:'absolute', top:162, left:705, borderRadius:24}}
           className={"border-4 border-green-800 pr-1 pl-1 h-10 pt-1 bg-green-200 w-9 text-center"}
      >D</div>
      <div style={{position:'absolute', top:140, left:584}}
           className={"border-2 border-orange-800 pr-1 pl-1 bg-white"}
      >non-book artifact</div>


    </div>
    </div>
  );
}