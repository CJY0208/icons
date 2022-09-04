import React from 'react'

export default function CheckboxSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M48 48v416h416V48zm170 312.38l-80.6-89.57l23.79-21.41l56 62.22L350 153.46L374.54 174z" fill="currentColor"/></svg>
  )
}