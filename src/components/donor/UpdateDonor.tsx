import './NewDonor.css';
import '../../App.css';
import '../../Form.css'

import { Button, Checkbox, Form, Input, Radio } from 'antd';
import {useState} from 'react';

function NewDonor(props: any) {

  enum DonorType {
    PERSON = 1,
    ORGANIZATION = 2
  }

  enum Country {
    CAN = 1,
    USA = 2
  }

  const[donorType, setDonorType] = useState(DonorType.PERSON);
  const[country, setCountry] = useState(Country.CAN);

  const onFinish = (e: any) => {
    console.log(e);
  }
  function onFinishFailed() {}
  function selectDonorType(e: any) {
    setDonorType(e.target.value)
  }
  function selectCountry(e: any) {
    setCountry(e.target.value)
  }
  return (
    <div className="fbc-form">
      <div className="form-header">
        <div className="fbc-form-title">
            new donor
        </div>
      </div>
      <Form
        name="basic"
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ country: Country.CAN, type: DonorType.PERSON }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label={<label style={{color: "white"}}>type</label>}
          name="type"
          rules={[{ required: true, message: '' }]}

        >
          <Radio.Group onChange={selectDonorType} value={donorType} className="fbc-radio-row">
            <Radio value={DonorType.PERSON} style={{color: "white"}}>person</Radio>
            <Radio value={DonorType.ORGANIZATION} style={{color: "white"}}>organization</Radio>
          </Radio.Group>
        </Form.Item>

        {donorType == DonorType.ORGANIZATION &&
          <Form.Item
            label={<label style={{color: "white"}}>name</label>}
            name="name"
            rules={[{required: true, message: 'if donor is an organization, provide its name'}]}
          >
            <Input/>
          </Form.Item>
        }
        {donorType == DonorType.PERSON &&
          <div>
            <Form.Item
              label={<label style={{color: "white"}}>last name</label>}
              name="last_name"
              rules={[{required: true, message: 'if donor is a person, provide a last name'}]}
            >
              <Input placeholder="last name"/>
            </Form.Item>
            <Form.Item
              label={<label style={{color: "white"}}>first name</label>}
              name="first_name"
              rules={[{required: true, message: 'if donor is a person, provide a first name'}]}
            >
              <Input placeholder="first name"/>
            </Form.Item>
          </div>
        }
        <Form.Item
          label={<label style={{color: "white"}}>street</label>}
          name="street"
          rules={[{required: false, message: ''}]}
        >
          <Input placeholder="street address"/>
        </Form.Item>
        <Form.Item
          label={<label style={{color: "white"}}>city</label>}
          name="city"
          rules={[{required: false, message: ''}]}
        >
          <Input placeholder="city"/>
        </Form.Item>
        <Form.Item
          label={<label style={{color: "white"}}>province/state/region</label>}
          name="province_state"
          rules={[{required: false, message: ''}]}
        >
          <Input placeholder="province or state or region"/>
        </Form.Item>
        <Form.Item
          label={<label style={{color: "white"}}>country</label>}
          name="country"
          rules={[{required: false, message: ''}]}
        >
          <Radio.Group onChange={selectCountry} value={country} className="fbc-radio-row">
            <Radio value={Country.CAN} style={{color: "white"}}>canada</Radio>
            <Radio value={Country.USA} style={{color: "white"}}>usa</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label={<label style={{color: "white"}}>area code</label>}
          name="phone_area_code"
          rules={[{required: false, message: ''}]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label={<label style={{color: "white"}}>phone number</label>}
          name="phone_number"
          rules={[{required: false, message: ''}]}
        >
          <Input/>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 12, span: 16 }}>
          <Button type="primary" htmlType="submit">
            create
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default NewDonor;
