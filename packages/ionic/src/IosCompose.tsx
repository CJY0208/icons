import React from 'react'

export default function IosCompose({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M256 320h-64v-64l128-128H64v304h320V192z" fill="currentColor"/><path d="M387.927 91.74L208 271.651V304h32.216l180.045-179.984z" fill="currentColor"/><path d="M444.213 80.312l-12.465-12.466C429.084 65.467 425.556 64 421.746 64a14.758 14.758 0 0 0-9.929 3.85L399.666 80l.08.08 11.293 11.293 21.02 21.02 12.15-12.15c2.383-2.625 3.791-6.117 3.791-9.929 0-3.81-1.408-7.339-3.787-10.002z" fill="currentColor"/></svg>
  )
}