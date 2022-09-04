import React from 'react'

export default function KeySharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M218.1 167.2c0 13 0 25.6 4.1 37.4c-43.1 50.6-167.5 194.5-167.5 194.5l2.9 36.3s34.8 33 40 28c15.4-15 24.8-25.2 24.8-25.2l7.24-43.35l47.11-3.47l3.78-46.8l49.63-.95l.49-50.09l52.69 2.1l9-18.84c15.5 6.7 29.6 9.4 47.7 9.4c68.5 0 124-53.4 124-119.2S408.5 48 340 48s-121.9 53.4-121.9 119.2zM406.85 144A38.85 38.85 0 1 1 368 105.15A38.81 38.81 0 0 1 406.85 144z" fill="currentColor"/></svg>
  )
}