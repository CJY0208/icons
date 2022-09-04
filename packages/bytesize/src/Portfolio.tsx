import React from 'react'

export default function Portfolio({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`c-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M29 17v11H3V17M2 8h28v8s-6 4-14 4s-14-4-14-4V8zm14 14v-4m4-10s0-4-4-4s-4 4-4 4"/></g></svg>
  )
}