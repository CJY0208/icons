import React from 'react'

export default function TennisballOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><circle cx="256" cy="256" r="208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M461.43 271.44c-5.09.37-8.24.56-13.43.56c-114.88 0-208-93.12-208-208c0-5.37.2-8.69.6-14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M49.65 240.56S58.84 240 64 240c114.88 0 208 93.12 208 208c0 5.38-.61 14-.61 14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
  )
}