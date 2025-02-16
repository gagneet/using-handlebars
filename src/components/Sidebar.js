import React from 'react';
import { Button } from 'antd';

const Sidebar = ({ showDrawer }) => (
  <div>
    <Button type="primary" onClick={showDrawer}>New Page</Button>
    {/* Add more sidebar content here */}
  </div>
);

export default Sidebar;
