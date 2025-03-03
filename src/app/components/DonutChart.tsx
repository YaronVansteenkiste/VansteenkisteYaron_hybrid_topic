'use client';

import * as d3 from "d3";
import { useEffect, useRef } from "react";

export default function DonutChart() {

    useEffect(() => {
        const data: { framework: string; value: number }[] = [
          { framework: "Spring i/o", value: 90 },
          { framework: "NodeJS", value: 90 },
          { framework: "React", value: 90 },
          { framework: "Next.js", value: 90 }
        ];

        d3.select('body')
        .selectAll('p')
        .data(data)
        .enter()
        .append('p')
        .text(d => `${d.framework}: ${d.value}`);

      }, []);

  return (
    <div>
      <h1>D3.js Donut Chart</h1>
      <svg></svg>
    </div>
  );
}
