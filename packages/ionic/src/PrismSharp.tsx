import React from 'react'

export default function PrismSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M256 16L16 352l240 144l240-144zm-20 96.82v324.53L73.73 340z" fill="currentColor"/></svg>
  )
}