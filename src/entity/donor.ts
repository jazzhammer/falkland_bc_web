export interface Donor {
  model: string;
  pk: string;
  fields: {
    street: string;
    city: string;
    province_state: string;
    country: string;
    phone_area_code: string;
    phone_number: string;
    created_at: string;
    user_key_create: string;
    donor_person_id: string;
    last_name: string;
    first_name: string;
  }
}