import React from 'react'

export default function IosPie({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M276 68.1v219c0 3.7-2.5 6.8-6 7.7L81.1 343.4c-2.3.6-3.6 3.1-2.7 5.4C109.1 426 184.9 480.6 273.2 480c114.6-.7 206.8-93.5 206.8-208 0-112.1-88.6-203.5-199.8-207.8-2.3-.1-4.2 1.7-4.2 3.9z" fill="currentColor"/><path d="M32 239.3s.2 48.8 15.2 81.1c.8 1.8 2.8 2.7 4.6 2.2l193.8-49.7c3.5-.9 6.4-4.6 6.4-8.2V36c0-2.2-1.8-4-4-4C91 33.9 32 149 32 239.3z" fill="currentColor"/></svg>
  )
}