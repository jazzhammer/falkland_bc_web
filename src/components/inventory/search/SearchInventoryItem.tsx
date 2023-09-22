import { Button, Form, Input, Radio } from 'antd';
import { useState } from 'react';
import ListInventoryItem from '../list/ListInventoryItem';

import { InventoryItem } from '../../../entity/inventory-item';

function SearchInventoryItem(props: any) {

  enum InventoryStatus {
    NEW = 1,
    VALID = 2,
    AVAILABLE = 3,
    UNAVAILABLE = 4,
    RETIRED = 5
  }

  const [editable] = props;

  const { TextArea } = Input;

  const [donorSearchTerm, setDonorSearchTerm] = useState('');
  const [editableInventoryItem, setEditableInventoryItem] = useState();

  const [inventoryStatus, setInventoryStatus] = useState(InventoryStatus.NEW);
  const selectInventoryStatus = (e: any) => {
    setInventoryStatus(e.target.value);
  }

  const onFinish = (e: any) => {
    console.log(e);
  }
  function onFinishFailed() {}



  const changeDonorSearchTerm = (e: any) => {
    setDonorSearchTerm(e.target.value);
  }

  return (
    <div className="fbc-form">
      <div className="form-header">
        <div className="fbc-form-title">
          search inventory item
        </div>
        <Form
          name="searchInventoryItem"
          labelCol={{span: 8}}
          wrapperCol={{span: 32}}
          style={{maxWidth: 600}}
          autoComplete="off"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        ></Form>
      </div>

      <ListInventoryItem/>

    </div>
  );
}

export default SearchInventoryItem;
