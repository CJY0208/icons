import React from 'react'

export default function BowlingBallOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><circle cx="256" cy="256" r="208" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><circle cx="288" cy="200" r="24" fill="currentColor"/><circle cx="296" cy="128" r="24" fill="currentColor"/><circle cx="360" cy="168" r="24" fill="currentColor"/></svg>
  )
}