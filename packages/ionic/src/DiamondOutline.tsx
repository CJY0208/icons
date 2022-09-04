import React from 'react'

export default function DiamondOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M35.42 188.21l207.75 269.46a16.17 16.17 0 0 0 25.66 0l207.75-269.46a16.52 16.52 0 0 0 .95-18.75L407.06 55.71A16.22 16.22 0 0 0 393.27 48H118.73a16.22 16.22 0 0 0-13.79 7.71L34.47 169.46a16.52 16.52 0 0 0 .95 18.75z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M48 176h416"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M400 64l-48 112l-96-128"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M112 64l48 112l96-128"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 448l-96-272"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 448l96-272"/></svg>
  )
}