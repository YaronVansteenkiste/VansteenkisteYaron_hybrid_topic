// gebruikte bronnen:
// https://d3js.org/getting-started
// https://www.youtube.com/watch?v=C4t6qfHZ6Tw
'use client';
import * as d3 from "d3";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

    const svgWidth = 500;
    const svgHeight = 300;
    const barPadding = 5;
    const barWidth = svgWidth / dataset.length;


    const svg = d3.select('svg')
      .attr('width', svgWidth)
      .attr('height', svgHeight);

    const barChart = svg.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('y', d => svgHeight - d)
      .attr('height', d => d)
      .attr('fill', 'lightblue') 
      .attr('width', barWidth - barPadding)
      .attr('transform', (d, i) => {
        const translate = [barWidth * i, 0];
        return `translate(${translate})`;
      }
      );
  }, []);

  return (
    <div>
      <h1>D3js demo</h1>
      <svg className="bg-dark"></svg>
    </div>
  );
}
