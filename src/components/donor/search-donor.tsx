import {Donor} from "../../entity/donor";
import {ChangeEvent, useState} from "react";
import DonorService from "../../service/donor-service";

export default function SearchDonor({onFoundDonors}: {
  onFoundDonors: (founds: Donor[]) => void
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const onKeyCodeSearch = (code: any) => {
    if (code === 'Enter') {
      DonorService.search(searchTerm).then((founds) => {
        onFoundDonors(founds);
      })
    }
  }
  return (
    <div className={"flex flex-row"}>
      <input  type={"text"}
              placeholder={"search term"}
              className={"w-48 pl-2 text-black"}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyUp={(e) => onKeyCodeSearch(e.code)}
      />
    </div>
  );
}