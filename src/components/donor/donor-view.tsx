import SearchSelectDonor from "./SearchSelectDonor";
import SearchDonor from "./search-donor";
import {Donor} from "../../entity/donor";
import {useState} from "react";
import ListDonors from "./list-donors";
import NewDonor from "./NewDonor";

export default function DonorView() {

  const [donors, setDonors] = useState<Donor[] | null>();
  const [donor, setDonor] = useState<Donor | null>();
  const [mode, setMode] = useState<string>('searchDonors');

  const onFoundDonors = (founds: Donor[]) => {
    setDonors(founds);
    setMode('searchDonors')
  }

  const newDonor = () => {
    setDonor(null);
    setDonors(null);
    setMode('newDonor')
  }
  return (
    <div className={"flex flex-col w-full"}>
      <div className={"flex flex-row w-full border-2 border-green-700 pl-1 pt-1 pb-1 font-bold text-white bg-algae-400"}>
        <div className={""}>donors</div>
        <div className={"pl-2"}>
          <SearchDonor onFoundDonors={onFoundDonors}></SearchDonor>
        </div>
        {
          !donor && donors && donors.length > 0 && <div className={"pl-2"}>found: {donors.length}</div>
        }
        {
          donor && <div>details for donor {donor.fields.last_name?.toUpperCase()} </div>
        }
        <div onClick={newDonor} className={"ml-2 mr-2  pl-1 pr-1 bg-algae-700 hover:bg-algae-900 cursor-pointer active:bg-algae-300"}>new donor</div>
        {
          mode && mode === "newDonor" && <div>creating donor...</div>
        }
      </div>
      {
        donors && donors.length > 0 &&
        <div className={"pl-2 mt-2"}>
          <ListDonors donors={donors}></ListDonors>
        </div>
      }
      {
        mode === 'newDonor' && <NewDonor></NewDonor>
      }
    </div>
  );
}