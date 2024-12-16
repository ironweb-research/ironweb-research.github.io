"use client"

import * as React from "react"; 
import { useState } from "react";

// Define a generalized interface for all icon components
interface IconProps {
    width?: number;
    height?: number;
    fillColour?: string;
    strokeColour?: string;
}
  
export const DayTimeIcon = () => (
  <svg viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round">
    <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" className="stroke-yellow-300"></path>
    <path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" className="stroke-yellow-200"></path>
  </svg>
)

export const DarkModeIcon: React.FC<IconProps> = ({ width = 1, strokeColour = "white" }) => {
  const [hoverOn, setHovered] = React.useState(false);

  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <defs>
        <radialGradient 
          id="fadeGradient" cx="140%" cy="10%" r="160%" fx="0" fy="0%"
          >
          <stop
            offset="20%"
            style={{ stopColor: "black", stopOpacity: 1, }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "white", stopOpacity: 1, }}
          />
        </radialGradient>
      </defs>
      <circle cx="14" cy="14" r="9"  fill={hoverOn ? "#D9F99D" : strokeColour} />
      <circle cx="16" cy="12" r="8" fill="url(#fadeGradient)" />

      <g strokeWidth={width} strokeLinecap="round" stroke={hoverOn ? "#D9F99D" : strokeColour}>
          {/* star 1 */}
          <line x1="3" y1="1" x2="3" y2="5" />
          <line x1="1" y1="3" x2="5" y2="3" />
          {/* star 2 */}
          <line x1="14" y1="14" x2="14" y2="10" />
          <line x1="12" y1="12" x2="16" y2="12" />
          {/* star 3 */}
          <line x1="20" y1="4" x2="20" y2="8" />
          <line x1="18" y1="6" x2="22" y2="6" />
        </g>
    </svg>
  )
}


export default {
  DayTimeIcon,
  DarkModeIcon,
};