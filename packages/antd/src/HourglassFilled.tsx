import React from 'react'

export default function HourglassFilled({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" {...props} className={`kl-icon ${className}`}><path d="M742 318V184h86c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H196c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h86v134c0 81.5 42.4 153.2 106.4 194c-64 40.8-106.4 112.5-106.4 194v134h-86c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h632c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-86V706c0-81.5-42.4-153.2-106.4-194c64-40.8 106.4-112.5 106.4-194z" fill="currentColor"/></svg>
  )
}