'use client';

import * as d3 from "d3";
import { useEffect, useRef } from "react";

export default function DonutChart() {

  useEffect(() => {
    d3.select('h1')
        .style('color', 'red')
        .style('font-size', '2rem')
        .style('font-weight', 'bold');
    d3.select('p').style('color', 'blue');
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>D3.js Donut Chart</h1>
      <p>selection and manipulation</p>
    </div>
  );
}
