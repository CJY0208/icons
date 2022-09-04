import React from 'react'

export default function MdFastforward({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M480 256L262.4 110v292L480 256zM32 110v292l217.6-146L32 110z" fill="currentColor"/></svg>
  )
}