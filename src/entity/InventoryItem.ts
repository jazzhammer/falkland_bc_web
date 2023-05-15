import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE;
const baseUrl = 'inventory_item/';

const InventoryItemService =  {

  createInstance: (): Promise<string> => {
    const url = `${API_BASE}${baseUrl}`;
    return axios.post(url, {});
  }
}


export default InventoryItemService;
