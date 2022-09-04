import React from 'react'

export default function IosOpen({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M227.8 300.2c-5.1-5.1-5.1-13.3 0-18.4l133.7-133.7c-5.3-2.6-11.2-4.1-17.5-4.1H88c-22 0-40 18-40 40v224c0 22 18 40 40 40h256c22 0 40-18 40-40V184c0-6.3-1.5-12.2-4.1-17.5L246.2 300.2c-5.1 5.1-13.3 5.1-18.4 0z" fill="currentColor"/><path d="M459.5 68.5C457 66 453 64 449 64h-97c-7.2-.1-13.1 5.7-13.1 12.9-.1 7.2 5.7 13.1 12.9 13.1l67.3.5-57.6 57.6c8 3.9 14.5 10.4 18.4 18.4l57.6-57.6.5 67.3c.1 7.2 5.9 13 13.1 12.9 7.2-.1 13-5.9 12.9-13.1V78c0-3.5-2-7-4.5-9.5z" fill="currentColor"/></svg>
  )
}