import React from 'react'

export default function IosWineglass({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M264 308.988c0-21.975 20.458-38.674 40.247-54.824 7.907-6.453 15.37-12.547 21.519-18.962C352.313 207.505 352 183.458 352 164.144V160c0-44.25-30.816-124.558-32.02-128H192c-1.203 3.442-32 83.5-32 128v4.144c0 19.273-.323 43.361 26.225 71.059 6.148 6.415 13.617 12.509 21.523 18.962 19.789 16.15 40.252 32.85 40.252 54.824V464h-72v16h160v-16h-72V308.988zM202.729 48H309.251c5.359 15.99 19.509 62.712 24.836 96H177.894c5.327-33.288 19.476-80.01 24.835-96z" fill="currentColor"/></svg>
  )
}