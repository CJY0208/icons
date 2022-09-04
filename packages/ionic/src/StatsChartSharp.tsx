import React from 'react'

export default function StatsChartSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M128 496H48V304h80z" fill="currentColor"/><path d="M352 496h-80V208h80z" fill="currentColor"/><path d="M464 496h-80V96h80z" fill="currentColor"/><path d="M240 496h-80V16h80z" fill="currentColor"/></svg>
  )
}