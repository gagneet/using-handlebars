import React from 'react';
import { Table } from 'antd';

const DataTable = ({ tableData, showDrawer }) => (
  <Table dataSource={tableData} columns={[
    { title: 'Column1', dataIndex: 'col1', key: 'col1' },
    { title: 'Column2', dataIndex: 'col2', key: 'col2', render: () => <a href="https://adhere.live" onClick={showDrawer}>Open Drawer</a> },
    { title: 'Column3', dataIndex: 'col3', key: 'col3' },
    { title: 'Column4', dataIndex: 'col4', key: 'col4' },
    { title: 'Column5', dataIndex: 'col5', key: 'col5' }
  ]} />
);

export default DataTable;
