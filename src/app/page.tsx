// gebruikte bronnen:
// https://d3js.org/getting-started
// https://www.youtube.com/watch?v=C4t6qfHZ6Tw
'use client';
import * as d3 from "d3";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    d3.select("h1").style("color", "red")
      .attr('class', 'heading')
      .text('Updated h1 tag');


    d3.select('body').append('p').text('First paragraph');
    d3.select('body').append('p').text('Second paragraph');
    d3.select('body').append('p').text('Third paragraph');

    d3.selectAll('p').style('color', 'blue');
  }, []);

  return (
    <div>
      <h1>D3js demo</h1>
    </div>
  );
}
