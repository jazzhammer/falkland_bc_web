import './NewInventoryItem.css';
import '../../App.css';
import '../../Form.css'
import { Button, Form, Input, Radio } from 'antd';
import { useState } from 'react';

function NewInventoryItem(props: any) {

  const { TextArea } = Input;
  const [donorSearchTerm, setDonorSearchTerm] = useState('');
  enum InventoryStatus {
    NEW = 1,
    VALID = 2,
    AVAILABLE = 3,
    UNAVAILABLE = 4,
    RETIRED = 5
  }
  const [inventoryStatus, setInventoryStatus] = useState(InventoryStatus.NEW);
  const selectInventoryStatus = (e: any) => {
    setInventoryStatus(e.target.value);
  }

  const onFinish = (e: any) => {
    console.log(e);
  }
  function onFinishFailed() {}

  const searchDonor = () => {
    console.log(`search donor with ${donorSearchTerm}`);
  }

  const changeDonorSearchTerm = (e: any) => {
    setDonorSearchTerm(e.target.value);
  }

  return (
    <div className="fbc-form">
      <div className="form-header">
        <div className="fbc-form-title">
          new inventory item
        </div>
      </div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 32 }}
        style={{ maxWidth: 600 }}
        initialValues={{inventory_status_id: InventoryStatus.NEW}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label={<label style={{color: "white"}}>donor</label>}
          name="donor_search_term"
          rules={[{ required: false, message: '' }]}
        >
          <Input placeholder="search term" value={donorSearchTerm} onChange={changeDonorSearchTerm}/>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" onClick={ searchDonor }>
            search donors
          </Button>
        </Form.Item>
        <Form.Item
          label={<label style={{color: "white"}}>name</label>}
          name="name"
          rules={[{ required: true, message: '' }]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          label={<label style={{color: "white"}}>description</label>}
          name="description"
          rules={[{required: false, message: ''}]}
        >
          <TextArea/>
        </Form.Item>

        <Form.Item
          label={<label style={{color: "white"}}>description_level</label>}
          name="description_level"
          rules={[{required: false, message: ''}]}
        >
          <TextArea/>
        </Form.Item>

        <Form.Item
          label={<label style={{color: "white"}}>part_of</label>}
          name="part_of"
          rules={[{required: false, message: ''}]}
        >
          <TextArea/>
        </Form.Item>

        <Form.Item
          label={<label style={{color: "white"}}>disposable_terms</label>}
          name="disposable_terms"
          rules={[{required: false, message: ''}]}
        >
          <TextArea/>
        </Form.Item>

        <Form.Item
          label={<label style={{color: "white"}}>gmd</label>}
          name="gmd"
          rules={[{required: false, message: ''}]}
        >
          <TextArea/>
        </Form.Item>

        <Form.Item
          label={<label style={{color: "white"}}>gmd_start</label>}
          name="gmd_start"
          rules={[{required: false, message: ''}]}
        >
          (ymd_start)
        </Form.Item>

        <Form.Item
          label={<label style={{color: "white"}}>gmd_end</label>}
          name="gmd_start"
          rules={[{required: false, message: ''}]}
        >
          (ymd_end)
        </Form.Item>

        <Form.Item
          label={<label style={{color: "white"}}>date_range</label>}
          name="date_range"
          rules={[{required: false, message: ''}]}
        >
          (date_range)
        </Form.Item>

        <Form.Item
          label={<label style={{color: "white"}}>url</label>}
          name="last_name"
          rules={[{required: false, message: ''}]}
        >
          <Input placeholder="last name"/>
        </Form.Item>
        <Form.Item
          label={<label style={{color: "white"}}>inventory status</label>}
          name="inventory_status_id"
          rules={[{required: true, message: ''}]}
        >
          <Radio.Group onChange={selectInventoryStatus} value={inventoryStatus} className="fbc-radio-col">
            <Radio value={InventoryStatus.NEW} style={{color: "white"}}>new</Radio>
            <Radio value={InventoryStatus.VALID} style={{color: "white"}}>valid</Radio>
            <Radio value={InventoryStatus.AVAILABLE} style={{color: "white"}}>available</Radio>
            <Radio value={InventoryStatus.UNAVAILABLE} style={{color: "white"}}>unavailable</Radio>
            <Radio value={InventoryStatus.RETIRED} style={{color: "white"}}>retired</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            create inventory item
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default NewInventoryItem;
