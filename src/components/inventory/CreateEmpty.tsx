import './CreateEmpty.css';
import '../../App.css';
import '../../Form.css'
import { Button, Form, Input, Radio } from 'antd';
import { useState } from 'react';
import InventoryItemService from '../../entity/InventoryItem';

function CreateEmpty(props: any) {

  const onFinish = (e: any) => {
    InventoryItemService.createInstance().then((created: any) => {
      console.log(`created ${JSON.stringify(created)}`);
    });
  }

  function onFinishFailed() {}

  return (
    <div className="fbc-form">
      <div className="form-header">
        <div className="fbc-form-title">
          new inventory item
        </div>
        <div className="fbc-form-explanation">
          creating an empty inventory item provides a container, initially labeled with a creation timestamp.
          once created, this container may be filled with details to fully describe it, in the following categories:
          <ul>workflow</ul>
          <ul>source/donor</ul>
          <ul>description & identification</ul>
          <ul>manufacturer</ul>
          <ul>book</ul>
        </div>
      </div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 32 }}
        style={{ maxWidth: 600 }}
        autoComplete="off"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
          <Button type="primary" htmlType="submit">
            create empty inventory item
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default CreateEmpty;
