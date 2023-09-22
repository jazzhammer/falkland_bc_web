import {Donor} from "../entity/donor";

const API_BASE = process.env.REACT_APP_API_BASE;
const baseUrl = 'history/donor_person';

const DonorService = {
  search: (searchTerm: string): Promise<Donor[]> => {
    const url = `${API_BASE}${baseUrl}?searchTerm=${searchTerm}`;
    // console.log(url);
    return fetch(url, {
      method: 'GET'
    }).then(response => response.json().then(
      (json_string: string) => {
        return JSON.parse(json_string);
      }
    ));
  }
}
export default DonorService;