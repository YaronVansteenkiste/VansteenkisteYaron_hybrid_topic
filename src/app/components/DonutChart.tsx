'use client';

import * as d3 from "d3";
import { useEffect, useRef } from "react";

export default function DonutChart() {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const data: { framework: string; value: number }[] = [
        { framework: "Spring i/o", value: 90 },
        { framework: "NodeJS", value: 90 },
        { framework: "React", value: 90 },
        { framework: "Next.js", value: 90 }
      ];
    useEffect(() => {
        const svg = d3.select(svgRef.current)
          .attr("width", 500)
          .attr("height", 500);
      
        const width = 500;
        const height = 500;
        const radius = Math.min(width, height) / 3;
      
        const pie = d3.pie<{ framework: string; value: number }>().value(d => d.value);
        const arc = d3.arc<d3.PieArcDatum<{ framework: string; value: number }>>()
          .innerRadius(0)
          .outerRadius(radius);
      
        const g = svg.append("g")
          .attr("transform", `translate(${width / 2}, ${height / 2})`);
      
        const arcs = g.selectAll(".arc")
          .data(pie(data))
          .enter()
          .append("g")
          .attr("class", "arc");
      
        arcs.append("path")
          .attr("d", arc)
          .attr("fill", "steelblue");
      }, []);
      

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
    <h1>D3.js Donut Chart</h1>
    <svg ref={svgRef}></svg>
  </div>
  );
}
