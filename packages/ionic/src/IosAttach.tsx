import React from 'react'

export default function IosAttach({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M355.9 161.1c-8.6 0-15.6 7-15.6 15.6v194.4c0 20.3-8 40.4-22 55.1-13.9 14.6-35.2 23.7-55.5 23.7h-13.6c-19.6 0-39.5-8.9-54.8-24.6-15.2-15.5-23.9-35.6-23.9-55.2V119.3c0-14.9 6.2-28.9 17.3-39.5 11.1-10.5 25.7-16.3 41-16.3 15.1 0 29.3 5.8 39.8 16.2 10.5 10.5 16.4 24.6 16.4 39.6v234.2c0 17.1-13.6 32.2-29 32.2-13.6 0-28.2-12.9-28.2-32.2V219.9c0-8.6-7-15.6-15.6-15.6s-15.6 7-15.6 15.6v133.6c0 35.5 25.5 62.3 59.4 62.3 16.5 0 31.7-6.1 42.7-17.3 11.3-11.4 17.5-27.4 17.5-45V119.3c0-23.4-9.1-45.4-25.7-61.8C274 41 252 32 228.5 32s-45.5 9-62.2 25.5c-16.7 16.5-25.9 38.4-25.9 61.9v250.8c0 28.7 12.2 57.9 32.6 78 20.9 20.6 47.9 31.9 76.1 31.9h13.6c27.6 0 55.3-11.7 75.9-32.1 10.2-10.1 18.2-21.7 23.9-34.6 5.9-13.5 8.9-27.7 8.9-42.1V176.7c.1-8.6-6.9-15.6-15.5-15.6z" fill="currentColor"/></svg>
  )
}