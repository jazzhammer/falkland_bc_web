import '../../App.css';
import '../../Form.css'
import { Button, Form, Input, Radio } from 'antd';

function SearchSelectDonor(props: any) {

  const onFinish = (e: any) => {

  }
  const onFinishFailed = (e: any) => {

  }

  return (
    <div className="fbc-form">
      <Form
        name="basic"
        labelCol={{ span: 0 }}
        wrapperCol={{ span: 32 }}
        style={{ maxWidth: 600 }}
        initialValues={{}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="search_for"
          rules={[{ required: false, message: '' }]}
        >
          <Input placeholder="search term"/>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
          <Button type="primary" htmlType="submit">
            search donors
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default SearchSelectDonor;
