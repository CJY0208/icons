import React from 'react'

export default function FolderOpen({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`c-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4 28h24l2-16H14l-4-4H2zm24-16V4H4v4"/></g></svg>
  )
}