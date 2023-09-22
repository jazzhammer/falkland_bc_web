import axios from "axios";
import {InventoryItem} from "../entity/inventory-item";

const API_BASE = process.env.REACT_APP_API_BASE;
const baseUrl = 'inventory_item/';

const InventoryItemService =  {

  createInstance: (props: any): Promise<InventoryItem> => {
    const url = `${API_BASE}${baseUrl}`;
    return axios.post(url, props);
  },

  getMatching: (): Promise<InventoryItem[]> => {
    const url = `${API_BASE}${baseUrl}`;
    return axios.get(url, {});
  }

}

export default InventoryItemService;
