import './CreateEmpty.css';
import '../../App.css';
import '../../Form.css'
import { Button, Form, Input, Radio } from 'antd';
import { useState } from 'react';
import { InventoryItem } from '../../entity/inventory-item';
import InventoryItemService from "../../service/inventory-item-service";

// @ts-ignore
function CreateEmpty({ onCreateInventoryItem }) {

  const onFinish = (e: any) => {
    InventoryItemService.createInstance({
      name
    }).then((response: any) => {
      const created: InventoryItem = response.data;
      onCreateInventoryItem(created);
    });
  }

  function onFinishFailed() {}

  const [name, setName] = useState('');

  return (
    <div className={"flex flex-col text-white"}>
      <div className={"w-full bg-green-600 pl-2 font-bold"}>new inventory item</div>
      <div className="fbc-form flex flex-row">
        <div className={"w-full"}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 32 }}
            style={{ maxWidth: 600 }}
            autoComplete="off"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className={"w-full"}
          >
            <Form.Item wrapperCol={{ offset: 0, span: 16 }} className={"w-fit"}>
              <div className={"flex flex-col w-fit"}>
                <div className={"flex flex-row ml-3 w-fit"}>
                  <div className={"w-12 text-white mr-2"}>name</div>
                  <div><input   onChange={(e) => setName(e.target.value)}
                                type={"text"}
                                className={"w-48 pl-2"}
                                placeholder={"you may change this later"}
                  /></div>
                </div>
                <div className={"mt-3 flex flex-row content-end w-full"}>
                  <div className={"w-full"}></div>
                  <Button type="primary" htmlType="submit" className={"border-white bg-blue-500 ml-3"}>
                    create empty item
                  </Button>
                </div>
              </div>
            </Form.Item>
          </Form>
        </div>
        <div className="form-header">
          <div className={"ml-3 border-2 p-3 border-white rounded-lg"}>
            the description of an item entered into inventory starts out empty, except for the creation timestamp assigned
            to it by this inventory system, and a name.  <br/><br/>
            once created, an inventory item's properties may be provided and saved over time.  this accommodates the
            sometimes prolonged discovery process required to fully characterize an inventory item.  for example, if the
            item is a book, it may take time for an ISBN to be created and assigned to it.<br/><br/>
            characteristics of an inventory item fall into the following categories:<br/>
            <div className={"m-3 p-3"}>
              <ul>
                <li>workflow</li>
                <li>source/donor</li>
                <li>description & identification</li>
                <li>manufacturer</li>
                <li>book</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateEmpty;
