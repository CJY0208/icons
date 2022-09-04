import React from 'react'

export default function Strava({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`c-icon ${className}`}><g fill="currentColor"><path d="M6.731 0L2 9.125h2.788L6.73 5.497l1.93 3.628h2.766L6.731 0zm4.694 9.125l-1.372 2.756L8.66 9.125H6.547L10.053 16l3.484-6.875h-2.112z"/></g></svg>
  )
}