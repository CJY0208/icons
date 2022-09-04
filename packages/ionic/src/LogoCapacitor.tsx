import React from 'react'

export default function LogoCapacitor({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M480 101.09L372.37 208.72l106.86 107.06l-69.3 69.3l-283.22-283.23L196 32.54l107.07 106.88L410.67 32z" fill="currentColor"/><path d="M32.55 196l69.3-69.31l283.22 283.24l-69.3 69.3l-107-106.87L101.08 480L32 410.67l107.42-107.61z" fill="currentColor"/></svg>
  )
}