import React from 'react'

export default function Plus({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M448 224H288V64h-64v160H64v64h160v160h64V288h160z" fill="currentColor"/></svg>
  )
}