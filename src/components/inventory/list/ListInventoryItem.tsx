import './EditInventoryItem.css';
import '../../App.css';
import '../../Form.css'
import { Button, Form, Input, Radio } from 'antd';
import { useState, useEffect } from 'react';
import { InventoryItem } from '../../../entity/InventoryItem';
import InventoryItemService from '../../../entity/InventoryItem';

function ListInventoryItem(props: any) {

  const [inventoryItems, setInventoryItems] = useState([]);

  useEffect(()=>{
    fetchInventoryItems();
  },[]);

  const fetchInventoryItems = async () => {

    const items: InventoryItem[] = await InventoryItemService.getMatching();
    // @ts-ignore
    setInventoryItems(items);
    console.log(`items: ${items.length}`)
  }

  return (
    <div className="fbc-form">
      <div className="form-header">
        <div className="fbc-form-title">
          list
        </div>
      </div>

    </div>
  );
}

export default ListInventoryItem;
