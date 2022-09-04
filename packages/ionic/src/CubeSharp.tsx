import React from 'react'

export default function CubeSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M48 170v196.92L240 480V284L48 170z" fill="currentColor"/><path d="M272 480l192-113.08V170L272 284zm176-122.36z" fill="currentColor"/><path d="M448 144L256 32L64 144l192 112l192-112z" fill="currentColor"/></svg>
  )
}