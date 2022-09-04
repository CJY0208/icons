import React from 'react'

export default function LogoYahoo({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M410.32 37.13c-13.56 0-27-.93-39.12-5.13L256 218.67L140.8 32c-12.12 4.2-24.84 5.13-38.4 5.13c-13.32 0-26.52-1.05-38.4-5.13l153.6 248.15V480c12-4.08 25-5.13 38.4-5.13s26.4 1.05 38.4 5.13V280.5L448 32c-11.88 4-24.36 5.13-37.68 5.13z" fill="currentColor"/></svg>
  )
}