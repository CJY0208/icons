import React from 'react'

export default function LogoChrome({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M188.8 255.93a67.2 67.2 0 1 0 67.2-67.18a67.38 67.38 0 0 0-67.2 67.18z" fill="currentColor"/><path d="M476.75 217.79v.05a206.63 206.63 0 0 0-7-28.84h-.11a202.16 202.16 0 0 1 7.07 29a203.5 203.5 0 0 0-7.07-29h-155.4c19.05 17 31.36 40.17 31.36 67.05a86.55 86.55 0 0 1-12.31 44.73L231 478.45a2.44 2.44 0 0 1 0 .27v.28v-.26a224 224 0 0 0 25 1.26c6.84 0 13.61-.39 20.3-1a222.91 222.91 0 0 0 29.78-4.74C405.68 451.52 480 362.4 480 255.94a225.25 225.25 0 0 0-3.25-38.15z" fill="currentColor"/><path d="M256 345.5c-33.6 0-61.6-17.91-77.29-44.79L76 123.05l-.14-.24A224 224 0 0 0 207.4 474.55v-.05l77.69-134.6a84.13 84.13 0 0 1-29.09 5.6z" fill="currentColor"/><path d="M91.29 104.57l77.35 133.25A89.19 89.19 0 0 1 256 166h205.17a246.51 246.51 0 0 0-25.78-43.94l.12.08A245.26 245.26 0 0 1 461.17 166h.17a245.91 245.91 0 0 0-25.66-44a2.63 2.63 0 0 1-.35-.26a223.93 223.93 0 0 0-344.19-17.4l.14.24z" fill="currentColor"/></svg>
  )
}