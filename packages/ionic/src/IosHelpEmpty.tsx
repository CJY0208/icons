import React from 'react'

export default function IosHelpEmpty({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M260.3 366c-9.4 0-17-7.5-17-16.9 0-9.3 7.6-16.8 17-16.8s17 7.5 17 16.8c0 9.4-7.6 16.9-17 16.9zm33.8-115.3c-22.8 22.5-22.2 27.4-23.3 53.3h-19c1.1-28.5 7.5-43.7 30.1-64.5 11-10.3 19.4-22.7 19.4-38.1 0-23.6-19.4-39.9-42.6-39.9-32.4 0-48.5 16.4-47.9 46.4H192c.3-42 24.4-62.1 67.6-62.1 33 0 60.4 20.4 60.4 54.6 0 21.9-10.7 36.2-25.9 50.3z" fill="currentColor"/></svg>
  )
}