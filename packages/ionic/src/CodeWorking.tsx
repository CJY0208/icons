import React from 'react'

export default function CodeWorking({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><circle cx="256" cy="256" r="26" stroke="currentColor" strokeMiterlimit="10" strokeWidth="10" fill="currentColor"/><circle cx="346" cy="256" r="26" stroke="currentColor" strokeMiterlimit="10" strokeWidth="10" fill="currentColor"/><circle cx="166" cy="256" r="26" stroke="currentColor" strokeMiterlimit="10" strokeWidth="10" fill="currentColor"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="42" d="M160 368L32 256l128-112"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="42" d="M352 368l128-112l-128-112"/></svg>
  )
}