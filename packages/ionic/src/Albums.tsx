import React from 'react'

export default function Albums({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M368 96H144a16 16 0 0 1 0-32h224a16 16 0 0 1 0 32z" fill="currentColor"/><path d="M400 144H112a16 16 0 0 1 0-32h288a16 16 0 0 1 0 32z" fill="currentColor"/><path d="M419.13 448H92.87A44.92 44.92 0 0 1 48 403.13V204.87A44.92 44.92 0 0 1 92.87 160h326.26A44.92 44.92 0 0 1 464 204.87v198.26A44.92 44.92 0 0 1 419.13 448z" fill="currentColor"/></svg>
  )
}