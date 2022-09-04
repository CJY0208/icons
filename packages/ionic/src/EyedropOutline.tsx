import React from 'react'

export default function EyedropOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M262.51 204.22L70 396.69C57.56 409.15 48 464 48 464s54.38-9.09 67.31-22L307.8 249.51" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><rect x="211.72" y="172.19" width="192.15" height="64.05" rx="32.03" ry="32.03" transform="rotate(45 307.788 204.2)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M289.91 141s20.57 8.57 37.22-8.08l54.67-70.63c18.5-19.41 49.26-18.69 67.94 0h0c18.68 18.68 19.34 48.81 0 67.93l-70.68 54.67c-15.65 15.65-8.08 37.22-8.08 37.22" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M115.31 442s-26.48 17.34-44.56-.73s-.75-44.58-.75-44.58" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
  )
}