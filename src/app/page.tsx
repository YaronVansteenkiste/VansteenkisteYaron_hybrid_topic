'use client';
import * as d3 from "d3";
import { useEffect, useRef } from "react";

export default function Home() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    interface DataPoint {
      date: Date;
      value: number;
    }

    const data: DataPoint[] = [
      { date: new Date(2023, 0, 1), value: 30 },
      { date: new Date(2023, 1, 1), value: 50 },
      { date: new Date(2023, 2, 1), value: 80 },
      { date: new Date(2023, 3, 1), value: 65 },
      { date: new Date(2023, 4, 1), value: 95 },
    ];

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    d3.select(chartRef.current).select("svg").remove();

    const svg = d3.select(chartRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3.scaleTime()
      .domain(d3.extent(data, d => d.date) as [Date, Date])
      .range([0, width]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value) ?? 0])
      .range([height, 0]);

    svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append("g")
      .call(d3.axisLeft(y));

    const line = d3.line<DataPoint>()
      .x(d => x(d.date)!)
      .y(d => y(d.value)!);

    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", line);
  }, []);

  return (
    <div>
      <h1>D3.js Demo</h1>
      <div ref={chartRef}></div>
    </div>
  );
}
