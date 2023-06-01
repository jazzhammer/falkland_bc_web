import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE;
const baseUrl = 'inventory_item/';

const InventoryItemService =  {

  createInstance: (): Promise<InventoryItem> => {
    const url = `${API_BASE}${baseUrl}`;
    return axios.post(url, {});
  },

  getMatching: (): Promise<InventoryItem[]> => {
    const url = `${API_BASE}${baseUrl}`;
    return axios.get(url, {});
  }

}

export interface InventoryItem {
  inventory_item_id: string;
  inventory_status_id: string;
  created_at: string;
  user_key_create: string;
  date_received: string;
  date_registered: string;
  date_entered: string;
  disposal_terms: string;
  address_community: string;
  donor_person_id: string;
  donor_organization_id: string;
  donated_at: string;
  title: string;
  description: string;
  part_of: string;
  description_level: string;
  biography: string;
  url: string;
  accession_id: string;
  notes: string;
  scope_and_content: string;
  related_material: string;
  name_access: string;
  subject_access: string;
  gmd: string;
  gmd_start: string;
  gmd_end: string;
  date_range_start: string;
  date_range_end: string;
  registered_at: string;
  manufacturer: string;
  manufactured_from: string;
  manufactured_through: string;
  manufactured_in: string;
  manufacture_technique: string;
  physical_description: string;
  physical_condition: string;
  inscription: string;
  length: string;
  width: string;
  height: string;
  title_page_title: string;
  spine_title: string;
  edition: string;
  numbered_pages: string;
  is_hardcover: string;
  cover_color: string;
  record_type: string;
  subject_names: string;
  summary: string;

}
export default InventoryItemService;

