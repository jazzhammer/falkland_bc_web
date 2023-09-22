import {Country} from "./types";

export enum DonorType {
  PERSON = 1,
  ORGANIZATION = 2
}

export interface DonorFields {
  [key: string]: string | null | undefined | DonorType | Country;
  street: string;
  city: string;
  province_state: string;
  country: string | null | Country;
  phone_area_code?: string | null;
  phone_number?: string | null;
  created_at: string;
  user_key_create: string;
  donor_person_id: string;
  last_name: string | null;
  first_name: string | null;
  type?: DonorType; //  required fe, not be because we need to create either type:person or type:organization
  name?: string | null;
}

export interface Donor {
  model: string;
  pk: string;
  fields: DonorFields
}

