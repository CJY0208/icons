import React from 'react'

export default function IdCardSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M408 16H104a24 24 0 0 0-24 24v432a24 24 0 0 0 24 24h304a24 24 0 0 0 24-24V40a24 24 0 0 0-24-24zm-61.1 296.77a43 43 0 1 1-40.71-40.71a43 43 0 0 1 40.71 40.71zM192 64h128v32H192zm192 384H224v-24.6c0-32.72 53.27-49.21 80-49.21s80 16.49 80 49.21z" fill="currentColor"/></svg>
  )
}