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
    
    const svg = d3.select('svg')
      .attr('width', svgWidth)
      .attr('height', svgHeight)
      .attr('class', 'bg-dark');

      const xScale = d3.scaleLinear()
        .domain([0, d3.max(dataset) ?? 0])
        .range([0, svgWidth]);

      const yScale = d3.scaleLinear()
        .domain([0, d3.max(dataset) ?? 0])
        .range([svgHeight, 0]);

      const xAxis = d3.axisBottom(xScale);
      const yAxis = d3.axisLeft(yScale);

      svg.append('g')
        .attr('transform', 'translate(50, 10)')
        .call(yAxis);

      const xAxisTranslate = svgHeight - 20;

      svg.append('g')
        .attr('transform', `translate(50, ${xAxisTranslate})`)
        .call(xAxis);
  }, []);

  return (
    <div>
      <h1>D3js demo</h1>
      <svg className="bg-dark"></svg>
    </div>
  );
}
