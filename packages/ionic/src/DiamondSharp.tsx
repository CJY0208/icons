import React from 'react'

export default function DiamondSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M396.31 32H264l84.19 112.26L396.31 32z" fill="currentColor"/><path d="M115.69 32l48.12 112.26L248 32H115.69z" fill="currentColor"/><path d="M256 74.67L192 160h128l-64-85.33z" fill="currentColor"/><path d="M422.95 51.06L376.26 160H488L422.95 51.06z" fill="currentColor"/><path d="M89.05 51.06L23 160h112.74L89.05 51.06z" fill="currentColor"/><path d="M146.68 192H24l222.8 288h.53L146.68 192z" fill="currentColor"/><path d="M365.32 192L264.67 480h.53L488 192H365.32z" fill="currentColor"/><path d="M329.39 192H182.61L256 400l73.39-208z" fill="currentColor"/></svg>
  )
}