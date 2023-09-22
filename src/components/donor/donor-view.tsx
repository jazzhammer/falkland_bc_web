import SearchSelectDonor from "./SearchSelectDonor";
import SearchDonor from "./search-donor";
import {Donor} from "../../entity/donor";
import {useState} from "react";
import ListDonors from "./list-donors";

export default function DonorView() {
  const initialDonors :Donor[] = [];
  const [donors, setDonors] = useState(initialDonors);
  const onFoundDonors = (founds: Donor[]) => {
    setDonors(founds);
  }
  return (
    <div className={"flex flex-col w-full"}>
      <div className={"flex flex-row w-full border-2 border-green-700 pl-1 font-bold text-white bg-algae-400"}>
        <div className={""}>donors</div>
        <div className={"pl-2"}>
          <SearchDonor onFoundDonors={onFoundDonors}></SearchDonor>
        </div>
          {
            donors && donors.length > 0 && <div className={"pl-2"}>found: {donors.length}</div>
          }
        <div className={"ml-2 mr-2 bg-[]"}>new</div>
      </div>
      <div className={"pl-2"}>
        <ListDonors donors={donors}></ListDonors>
      </div>
    </div>
  );
}