import './EditInventoryItem.css';
import '../../App.css';
import '../../Form.css'
import { Button, Form, Input, Radio } from 'antd';
import { useState, useContext } from 'react';
import EditSourceDonor from './edit/SourceDonor';
import EditWorkflow from './edit/Workflow';
import EditManufacture from './edit/Manufacture';
import EditDescriptionId from './edit/DescriptionId';
import EditBook from './edit/Book';

import { InventoryItem } from '../../entity/inventory-item';
import { RootContext } from '../../App';

function EditInventoryItem(props: any) {
  enum ItemFieldSection {
    SOURCE_DONOR = 1,
    WORKFLOW = 2,
    DESCRIPTION_ID = 3,
    MANUFACTURE = 4,
    BOOK = 5
  }

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
  const [itemFieldSection, setItemFieldSection] = useState(ItemFieldSection.SOURCE_DONOR);
  const rootContextValue = useContext(RootContext);

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
          edit inventory item {rootContextValue.inventoryItem ? rootContextValue.inventoryItem.inventory_item_id : 'none selected' }
        </div>
      </div>
      <div className="fbc-option-tabs">
        <div className="fbc-option-tab" onClick={(event)=>setItemFieldSection(ItemFieldSection.SOURCE_DONOR)}>source/donork</div>
        <div className="fbc-option-tab" onClick={(event)=>setItemFieldSection(ItemFieldSection.WORKFLOW)}>workflow</div>
        <div className="fbc-option-tab" onClick={(event)=>setItemFieldSection(ItemFieldSection.DESCRIPTION_ID)}>description &amp; id</div>
        <div className="fbc-option-tab" onClick={(event)=>setItemFieldSection(ItemFieldSection.MANUFACTURE)}>manufacture</div>
        <div className="fbc-option-tab" onClick={(event)=>setItemFieldSection(ItemFieldSection.BOOK)}>book</div>
      </div>
      <div className="fbc-edit-option">
        {ItemFieldSection.SOURCE_DONOR && <EditSourceDonor editable={editable}/>}
        {ItemFieldSection.WORKFLOW && <EditWorkflow editable={editable}/>}
        {ItemFieldSection.DESCRIPTION_ID && <EditDescriptionId editable={editable}/>}
        {ItemFieldSection.MANUFACTURE && <EditManufacture editable={editable}/>}
        {ItemFieldSection.BOOK && <EditBook editable={editable}/>}
      </div>
    </div>
  );
}

export default EditInventoryItem;
