import React from 'react';
import { Line } from 'react-chartjs-2';

const Header = ({ data }) => (
  <div>
    <Line data={data} />
  </div>
);

export default Header;
