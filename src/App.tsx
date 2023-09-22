import './App.css';
import { useState, useContext } from 'react';
import React from 'react';
import type { MenuProps } from 'antd';
import {
  UserOutlined,
  TableOutlined
} from '@ant-design/icons';
import { InventoryItem } from './entity/inventory-item';
import { notification } from 'antd';
import type { NotificationPlacement } from 'antd/es/notification/interface';
import {BannerMenu} from "./components/banner/banner-menu";
import {HistoryHome} from "./components/history/history-home";
import {CommunityHome} from "./components/community/community-home";
import {FormDocumentsHome} from "./components/form-documents/form-documents";

interface RootContextValue {
  inventoryItem: InventoryItem | null
}

const initialRootContextValue: RootContextValue = {
  inventoryItem: null
};

let rootContextValue = initialRootContextValue;
export const RootContext = React.createContext(rootContextValue);

function App() {

  const [api, contextHolder] = notification.useNotification();
  const [menuKey, setMenuKey] = useState(0);
  const [inventoryItem, setInventoryItem] = useState();
  const bottom: NotificationPlacement = 'bottom';
  type MenuItem = Required<MenuProps>['items'][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  enum MenuItemNames {
    EmptyInventoryItem = 11,
    EditInventoryItem = 1,
    SearchInventoryItems = 2,
    NewDonor = 3,
    SearchDonors = 4,
    NewLocation = 5,
    SearchLocations = 6,
    NewStatus = 7,
    SearchStatuss = 8,
    NewUser = 9,
    SearchUsers = 10
  }

  const items: MenuProps['items'] = [
    getItem('inventory', 'sub1', <TableOutlined />, [
      getItem('Items', 'g1', null, [
        getItem('empty', MenuItemNames.EmptyInventoryItem),
        getItem('search', MenuItemNames.SearchInventoryItems)
      ], 'group'),
      getItem('donors', 'g2', null, [
        getItem('new', MenuItemNames.NewDonor),
        getItem('search', MenuItemNames.SearchDonors)
      ], 'group'),
      getItem('locations', 'g3', null, [
        getItem('new', MenuItemNames.NewLocation),
        getItem('search', MenuItemNames.SearchLocations)
      ], 'group'),
      getItem('statuses', 'g4', null, [
        getItem('new', MenuItemNames.NewStatus),
        getItem('search', MenuItemNames.SearchStatuss)
      ], 'group'),
    ]),

    getItem('users', 'sub2', <UserOutlined />, [
      getItem('new', MenuItemNames.NewUser),
      getItem('search', MenuItemNames.SearchUsers),
      // getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),
    { type: 'divider' },

    // getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    //   getItem('Option 9', '9'),
    //   getItem('Option 10', '10'),
    //   getItem('Option 11', '11'),
    //   getItem('Option 12', '12'),
    // ]),
    //
    // getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
  ];

  function onMenuSelection(e: any) {
    setMenuKey(e.key);
    console.log(`menu: ${e.key}`);
  }

  const onCreateInventoryItem = (created: InventoryItem) => {

  }

  const onEditInventoryItem = (updated: InventoryItem) => {

  }

  const openNotification = (message: string, description: string) => {
    api.info({
      message,
      description,
      placement: bottom
    });

  };

  function RootDisplay() {
    const rootContextValue = useContext(RootContext);
    const [selectedMenuItem, setSelectedMenuItem] = useState('');
    const highlighted = 'border-t-2 border-l-2 border-r-2 border-black bg-algae-400';
    const regular = 'border-b-2 border-b-black bg-algae-600';
    const onSelectedMenuItem = (selection: string) => {
      setSelectedMenuItem(selection);
    }
    return (
      <RootContext.Provider value={rootContextValue}>
        <BannerMenu onSelectMenuItem={onSelectedMenuItem}/>
        <div className={"h-screen w-full p-2"}>
          {selectedMenuItem === 'history' && <HistoryHome/>}
          {selectedMenuItem === 'community' && <CommunityHome/>}
          {selectedMenuItem === 'forms & documents' && <FormDocumentsHome/>}
        </div>
      </RootContext.Provider>
    );

  }

  return (
      <div>
        <RootDisplay/>
      </div>
  );
}

export default App;
