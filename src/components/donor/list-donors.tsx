import {Donor} from "../../entity/donor";

export default function ListDonors({donors}: {
  donors: Donor[]
}) {
  let donorsList;
  if (donors) {
    donorsList = donors.map((donor) => {
        return (
          <div className={"flex flex-row"} key={donor.pk}>
            <div className={"align-middle border-2 border-gray-300 bg-white w-48 font-bold text-center"}>{donor.fields.last_name}</div>
            <div className={"align-middle border-2 border-gray-300 bg-white w-48 font-bold text-center"}>{donor.fields.first_name}</div>
            <div className={"align-middle border-2 border-gray-300 bg-white w-12 font-bold text-center"}>{donor.fields.phone_area_code}</div>
            <div className={"align-middle border-2 border-gray-300 bg-white w-32 font-bold text-center"}>{donor.fields.phone_number}</div>
            <div className={"align-middle border-2 border-gray-300 bg-white w-48 font-bold text-center"}>{donor.fields.street}</div>
            <div className={"align-middle border-2 border-gray-300 bg-white w-48 font-bold text-center"}>{donor.fields.city}</div>
            <div className={"align-middle border-2 border-gray-300 bg-white w-16 font-bold text-center"}>{donor.fields.province_state}</div>
            <div className={"align-middle border-2 border-gray-300 bg-white w-24 font-bold text-center"}>{donor.fields.country}</div>
          </div>
        );
    });
  }
  return (
    <div className={"flex flex-col"}>
      <div className={"flex flex-row"}>
        <div className={"align-middle border-2 border-gray-300 bg-gray-200 w-48 font-bold text-center"}>last</div>
        <div className={"align-middle border-2 border-gray-300 bg-gray-200 w-48 font-bold text-center"}>first</div>
        <div className={"align-middle border-2 border-gray-300 bg-gray-200 w-12 font-bold text-center"}>area</div>
        <div className={"align-middle border-2 border-gray-300 bg-gray-200 w-32 font-bold text-center"}>phone</div>
        <div className={"align-middle border-2 border-gray-300 bg-gray-200 w-48 font-bold text-center"}>street</div>
        <div className={"align-middle border-2 border-gray-300 bg-gray-200 w-48 font-bold text-center"}>city</div>
        <div className={"align-middle border-2 border-gray-300 bg-gray-200 w-16 font-bold text-center"}>prov<br/>state</div>
        <div className={"align-middle border-2 border-gray-300 bg-gray-200 w-24 font-bold text-center"}>country</div>
      </div>
      {
        donorsList
      }
    </div>
  );
}