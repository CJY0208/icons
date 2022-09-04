import React from 'react'

export default function ColorFilterOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><circle cx="256" cy="184" r="120" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><circle cx="344" cy="328" r="120" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><circle cx="168" cy="328" r="120" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/></svg>
  )
}