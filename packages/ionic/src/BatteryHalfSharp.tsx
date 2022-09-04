import React from 'react'

export default function BatteryHalfSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M17 384h432V128H17zm32-224h368v192H49z" fill="currentColor"/><path d="M70.69 182.92H256v146.16H70.69z" fill="currentColor"/><path d="M465 202.67h32v106.67h-32z" fill="currentColor"/></svg>
  )
}