import React from 'react'

export default function NotificationsOffSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M41.37 64l22.628-22.628L470.627 448l-22.628 22.627z" fill="currentColor"/><path d="M256 480a80.09 80.09 0 0 0 73.3-48H182.7a80.09 80.09 0 0 0 73.3 48z" fill="currentColor"/><path d="M112 227.47V288l-48 64v48h268.12L115.87 183.75a236.75 236.75 0 0 0-3.87 43.72z" fill="currentColor"/><path d="M448 352l-48-64v-60.53C400 157 372.64 95.61 304 80l-8-48h-80l-8 48a117.45 117.45 0 0 0-41.95 18.17l282 282z" fill="currentColor"/></svg>
  )
}