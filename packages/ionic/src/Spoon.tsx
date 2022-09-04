import React from 'react'

export default function Spoon({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M320 160c0-64-26.5-128-64-128s-64 64-64 128c.9 25 15.7 54.3 36.6 64.3.5.2.9.4 1.4.6h.1c3.4 1.9 9.8 5.5 9.8 9.7 0 0-16 198.7-16 210.1s5 20.5 10.5 26 13.1 9.2 21.3 9.2h.4c8.2 0 15.8-3.7 21.4-9.2 5.5-5.5 10.3-12.9 10.3-26s-16-210.1-16-210.1c0-4.2 6.4-7.9 9.8-9.8l1.7-.9C304.9 214 320 186 320 160" fill="currentColor"/></svg>
  )
}