import React from 'react'

export default function HdmiFill({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`kl-icon ${className}`}><g fill="currentColor"><path d="M1 5a1 1 0 0 0-1 1v3.293c0 .39.317.707.707.707c.188 0 .368.075.5.207l.5.5a1 1 0 0 0 .707.293h11.172a1 1 0 0 0 .707-.293l.5-.5a.707.707 0 0 1 .5-.207c.39 0 .707-.317.707-.707V6a1 1 0 0 0-1-1H1zm1.5 2h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1z"/></g></svg>
  )
}