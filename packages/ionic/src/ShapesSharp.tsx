import React from 'react'

export default function ShapesSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M363.27 336H4.73L184 16z" fill="currentColor"/><path d="M336 160a160.54 160.54 0 0 0-32.55 3.36l87.75 157L417.81 368H183.36C203.8 432.85 264.49 480 336 480c88.22 0 160-71.78 160-160s-71.78-160-160-160z" fill="currentColor"/></svg>
  )
}