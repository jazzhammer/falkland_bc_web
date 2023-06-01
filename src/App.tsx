import './App.css';
import { useState, useContext } from 'react';
import React from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import {
  UserOutlined,
  TableOutlined
} from '@ant-design/icons';
import EditInventoryItem from './components/inventory/EditInventoryItem';
import CreateEmpty from './components/inventory/CreateEmpty';
import Welcome from './components/Welcome';
import NewDonor from './components/donor/NewDonor';
import { InventoryItem } from './entity/InventoryItem';
import { notification } from 'antd';
import type { NotificationPlacement } from 'antd/es/notification/interface';
import SearchInventoryItem from './components/inventory/search/SearchInventoryItem';

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

    return (
      <RootContext.Provider value={rootContextValue}>
        <div className="App-header">
          <b>falkland bc</b>
        </div>
        <div className="App-header-by-line">
          <i>history, community, and forum</i>
        </div>
        <div className="App-content">
          <div className="App-left">
            <Menu
              onClick={onMenuSelection}
              style={{ width: 256 }}
              defaultSelectedKeys={['0']}
              defaultOpenKeys={[]}
              mode="inline"
              items={items}
            />
          </div>
          <div className="App-middle">
            {menuKey == 0 && <Welcome></Welcome>}
            {menuKey == MenuItemNames.EmptyInventoryItem && <CreateEmpty onCreateInventoryItem={onCreateInventoryItem}></CreateEmpty>}
            {menuKey == MenuItemNames.EditInventoryItem && <EditInventoryItem onEditInventoryItem={onEditInventoryItem} editable={inventoryItem}></EditInventoryItem>}
            {menuKey == MenuItemNames.SearchInventoryItems && <SearchInventoryItem>search InventoryItems</SearchInventoryItem>}
            {menuKey == MenuItemNames.NewDonor && <NewDonor></NewDonor>}
            {menuKey == MenuItemNames.SearchDonors && <div>search Donors</div>}
            {menuKey == MenuItemNames.NewLocation && <div>new Location</div>}
            {menuKey == MenuItemNames.SearchLocations && <div>search Locations</div>}
            {menuKey == MenuItemNames.NewStatus && <div>new Status</div>}
            {menuKey == MenuItemNames.SearchStatuss && <div>search Statuses</div>}
            {menuKey == MenuItemNames.NewUser && <div>new User</div>}
            {menuKey == MenuItemNames.SearchUsers && <div>search Users</div>}
          </div>
          <div className="App-right">
            {/*right*/}
          </div>
        </div>
        <div className="App-footer"></div>
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
