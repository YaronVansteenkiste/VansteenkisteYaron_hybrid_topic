// gebruikte bronnen:
// https://d3js.org/getting-started
// https://www.youtube.com/watch?v=C4t6qfHZ6Tw
'use client';
import * as d3 from "d3";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const dataset = [1, 2, 3, 4, 5];

    d3.select("body")
      .selectAll("p")
      .data(dataset)
      .enter()
      .append("p")
      .text(function(d) {return d;})
  }, []);

  return (
    <div>
      <h1>D3js demo</h1>
    </div>
  );
}
