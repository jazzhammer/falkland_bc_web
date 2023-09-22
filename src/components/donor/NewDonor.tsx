import './NewDonor.css';
import '../../App.css';
import '../../Form.css'
import axios from 'axios';

import { Button, Checkbox, Form, Input, Radio } from 'antd';
import {useState} from 'react';
import {DonorFields, DonorType} from "../../entity/donor";
import {Country} from "../../entity/types";

function NewDonor(props: any) {

  let initialFormData: Partial<DonorFields> = {
    country: Country.CAN,
    type: DonorType.PERSON,
    name: null,
    last_name: null,
    first_name: null,
    phone_area_code: null,
    phone_number: null
  };

  const [formData, setFormData] = useState(initialFormData);

  const[country, setCountry] = useState(Country.CAN);


  const onFinish = (e: any) => {
    if (e.type == DonorType.PERSON) {
      axios.post('http://localhost:8000/donor_person', e).then((result) => {
        debugger;
        console.log(`created: ${result}`);
      });
    }
    else if(e.type == DonorType.ORGANIZATION) {

    }
    else {
      console.log(`unable to create donor for type: ${e.type}`);
    }
  }
  function onFinishFailed() {}
  function selectDonorType(e: any) {
    setFormData({
      ...formData,
      type: e.target.value
    });
  }
  function selectCountry(e: any) {
    setFormData({
      ...formData,
      country: e.target.value
    });
  }

  const setFormField = (name: string, value: string): void => {
    const next = {
      ...formData
    };
    next[name] = value;
    setFormData(next);
    console.log(`formData: ${JSON.stringify(formData)}`);
  }

  const canCreate = () => {
    // need
    //  lastname, firstname if person
    //  name if organization
    // areacode, phonenumber

    console.log(`formData.type: ${formData.type}`);
    console.log(`formData.country: ${formData.country}`);
    console.log(`formData.phone_area_code: ${formData.phone_area_code}`);
    console.log(`formData.phone_number: ${formData.phone_number}`);
    console.log(`formData.last_name: ${formData.last_name}`);
    console.log(`formData.first_name: ${formData.first_name}`);
    console.log(`formData.name: ${formData.name}`);

      return formData.type &&
          formData.country &&
          formData.phone_area_code &&
          formData.phone_number &&
          (
              formData.type === DonorType.PERSON ?
              formData.last_name &&
              formData.first_name :
              formData.name
          )

  }

  return (
    <div className="fbc-form bg-chia-900">
      <Form
        name="basic"
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={formData}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label={<label className={"text-algae-300"}>type</label>}
          name="type"
          rules={[{ required: true, message: '' }]}

        >
          <Radio.Group onChange={selectDonorType} value={formData.type} className="fbc-radio-row">
            <Radio value={DonorType.PERSON} className={"text-algae-300"}>person</Radio>
            <Radio value={DonorType.ORGANIZATION} className={"text-algae-300"}>organization</Radio>
          </Radio.Group>
        </Form.Item>

        {formData.type == DonorType.ORGANIZATION &&
          <Form.Item
            label={<label className={"text-algae-300"}>name</label>}
            name="name"
            rules={[{required: true, message: 'if donor is an organization, provide its name'}]}
          >
            <Input onChange={(e) => setFormField('name', e.target.value)}/>
          </Form.Item>
        }
        {formData.type == DonorType.PERSON &&
          <div>
            <Form.Item
              label={<label className={"text-algae-300"}>last name</label>}
              name="last_name"
              rules={[{required: true, message: 'if donor is a person, provide a last name'}]}
            >
              <Input placeholder="last name" onChange={(e) => setFormField('last_name', e.target.value)}/>
            </Form.Item>
            <Form.Item
              label={<label className={"text-algae-300"}>first name</label>}
              name="first_name"
              rules={[{required: true, message: 'if donor is a person, provide a first name'}]}
            >
              <Input placeholder="first name" onChange={(e) => setFormField('first_name', e.target.value)}/>
            </Form.Item>
          </div>
        }
        <Form.Item
          label={<label className={"text-algae-300"}>street</label>}
          name="street"
          rules={[{required: false, message: ''}]}
        >
          <Input placeholder="street address" onChange={(e) => setFormField('street', e.target.value)}/>
        </Form.Item>
        <Form.Item
          label={<label className={"text-algae-300"}>city</label>}
          name="city"
          rules={[{required: false, message: ''}]}
        >
          <Input placeholder="city" onChange={(e) => setFormField('city', e.target.value)}/>
        </Form.Item>
        <Form.Item
          label={<label className={"text-algae-300"}>province/state/region</label>}
          name="province_state"
          rules={[{required: false, message: ''}]}
        >
          <Input placeholder="province or state or region" onChange={(e) => setFormField('province_state', e.target.value)}/>
        </Form.Item>
        <Form.Item
          label={<label className={"text-algae-300"}>country</label>}
          name="country"
          rules={[{required: false, message: ''}]}
        >
          <Radio.Group onChange={selectCountry} value={country} className="fbc-radio-row">
            <Radio value={Country.CAN} className={"text-algae-300"}>canada</Radio>
            <Radio value={Country.USA} className={"text-algae-300"}>usa</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label={<label className={"text-algae-300"}>area code</label>}
          name="phone_area_code"
          rules={[{required: false, message: ''}]}
        >
          <Input onChange={(e) => setFormField('phone_area_code', e.target.value)}/>
        </Form.Item>
        <Form.Item
          label={<label className={"text-algae-300"}>phone number</label>}
          name="phone_number"
          rules={[{required: false, message: ''}]}
        >
          <Input onChange={(e) => setFormField('phone_number', e.target.value)}/>
        </Form.Item>
        {canCreate() &&
            <Form.Item wrapperCol={{offset: 12, span: 16}}>
              <Button type="primary" htmlType="submit" className={"bg-algae-700 hover:bg-algae-900 cursor-pointer active:bg-algae-300"}>
                create
              </Button>
            </Form.Item>
        }
      </Form>
    </div>
  );
}

export default NewDonor;
