import React from 'react';
import { Drawer } from 'antd';

const DrawerContent = ({ visible, onClose }) => (
  <Drawer title="Details" placement="right" onClose={onClose} visible={visible}>
    {/* Add drawer content here */}
  </Drawer>
);

export default DrawerContent;
