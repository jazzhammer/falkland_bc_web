import '../EditInventoryItem.css';
import '../../../App.css';
import '../../../Form.css'
import { Button, Form, Input, Radio } from 'antd';
import { useState } from 'react';

function EditManufacture(props: any) {

  const { TextArea } = Input;

  const onFinish = (e: any) => {
    console.log(e);
  }
  function onFinishFailed() {}


  return (
    <div className="fbc-form">
      <div className="form-header">
        <div className="fbc-form-title">
          workflow
        </div>
      </div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 32 }}
        style={{ maxWidth: 600 }}
        initialValues={{}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >


        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            apply
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default EditManufacture;
