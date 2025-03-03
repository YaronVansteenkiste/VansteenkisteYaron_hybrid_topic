// gebruikte bronnen:
// https://d3js.org/getting-started
// https://www.youtube.com/watch?v=C4t6qfHZ6Tw
'use client';
import * as d3 from "d3";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const data = [
      {"platform": "Android", "percentage": 40.11},
      {"platform": "Windows", "percentage": 36.69},
      {"platform": "iOS", "percentage": 13.06}
    ];

    const svgWidth = 500;
    const svgHeight = 300;
    const radius = Math.min(svgWidth, svgHeight) / 2;

    const svg = d3.select('svg')
      .attr('width', svgWidth)
      .attr('height', svgHeight);

    const g = svg.append('g')
      .attr('transform', `translate(${radius}, ${radius})`);

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const pie = d3.pie<{ platform: string; percentage: number }>().value(d => d.percentage);

    const path = d3.arc()
      .outerRadius(radius)
      .innerRadius(0);

    const arc = g.selectAll().data(pie(data)).enter(); 

    arc.append('path')
      .attr('d', d => path(d as any))
      .attr('fill', d => color(d.data.platform));

    const label = d3.arc()
      .outerRadius(radius)
      .innerRadius(0);

    arc.append('text')
      .attr('transform', d => `translate(${label.centroid(d as any)})`)
      .text(d => d.data.platform)
      .style('text-anchor', 'middle');
  
  }, []);

  return (
    <div>
      <h1>D3js demo</h1>
      <svg className="bg-dark"></svg>
    </div>
  );
}
