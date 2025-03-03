// gebruikte bronnen:
// https://d3js.org/getting-started
// https://www.youtube.com/watch?v=C4t6qfHZ6Tw
'use client';
import * as d3 from "d3";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const dataset = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const svgWidth = 500;
    const svgHeight = 300;
    const barPadding = 5;
    const barWidth = svgWidth / dataset.length;


    const svg = d3.select('svg')
      .attr('width', svgWidth)
      .attr('height', svgHeight);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(dataset) ?? 0])
      .range([0, svgHeight]);

    const barChart = svg.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('y', d => svgHeight - yScale(d))
      .attr('height', d => yScale(d))
      .attr('fill', 'lightblue')
      .attr('width', barWidth - barPadding)
      .attr('transform', (d, i) => {
        const translate = [barWidth * i, 0];
        return `translate(${translate})`;
      }
      );


    const text = svg.selectAll('text')
      .data(dataset)
      .enter()
      .append('text')
      .text(d => d)
      .attr('y', (d, i) => svgHeight - d - 2)
      .attr('x', (d, i) => barWidth * i)
      .attr('fill', '#A64C38');

  }, []);

  return (
    <div>
      <h1>D3js demo</h1>
      <svg className="bg-dark"></svg>
    </div>
  );
}
