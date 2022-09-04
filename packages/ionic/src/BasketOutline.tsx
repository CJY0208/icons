import React from 'react'

export default function BasketOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M68.4 192A20.38 20.38 0 0 0 48 212.2a17.87 17.87 0 0 0 .8 5.5L100.5 400a40.46 40.46 0 0 0 39.1 29.5h232.8a40.88 40.88 0 0 0 39.3-29.5l51.7-182.3l.6-5.5a20.38 20.38 0 0 0-20.4-20.2H68.4zm193.32 160.07A42.07 42.07 0 1 1 304 310a42.27 42.27 0 0 1-42.28 42.07z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" d="M160 192l96-128l96 128"/></svg>
  )
}