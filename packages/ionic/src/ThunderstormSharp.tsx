import React from 'react'

export default function ThunderstormSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M405.84 136.9a151.25 151.25 0 0 0-47.6-81.9a153 153 0 0 0-241.81 51.86C60.5 110.16 16 156.65 16 213.33C16 272.15 63.91 320 122.8 320h72.31L176 416h48v80l112-144h-43.51l8-32h103.84a91.56 91.56 0 0 0 1.51-183.1z" fill="currentColor"/><path d="M74.53 407.177l38.32-76.622l28.62 14.313l-38.32 76.623z" fill="currentColor"/><path d="M98.52 471.189l30.318-60.622l28.62 14.313l-30.317 60.622z" fill="currentColor"/><path d="M354.541 407.189l38.32-76.623l28.62 14.314l-38.32 76.622z" fill="currentColor"/><path d="M378.542 471.2l30.317-60.622l28.62 14.314l-30.317 60.621z" fill="currentColor"/></svg>
  )
}