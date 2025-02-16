import logo from './logo.svg';
import './App.css';
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Charts from './components/Charts';
import DataTable from './components/DataTable';
import DrawerContent from './components/DrawerContent';
import { Button } from 'antd';

function App() {
  const [visible, setVisible] = React.useState(false);
  const data = {}; // Data for charts
  const tableData = []; // Data for table

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Button type="primary">Primary Button</Button>
      <div>
        <Sidebar showDrawer={showDrawer} />
        <Header data={data} />
        <Charts data={data} />
        <DataTable tableData={tableData} showDrawer={showDrawer} />
        <DrawerContent visible={visible} onClose={onClose} />
      </div>
    </div>
  );
}

export default App;
