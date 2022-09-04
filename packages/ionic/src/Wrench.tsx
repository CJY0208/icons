import React from 'react'

export default function Wrench({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M461.9 114.9l-56.5 56.7-55.1-10-9.9-55.1 56.5-56.7c-12.7-12.7-30.8-18.5-44.2-17.8-13.5.7-42.3 8.3-64.6 32-21.6 22.8-44.3 65.3-24.2 112.5 2.4 5.7 5.1 13.2-2.9 21.2-8.1 8-215 202.8-215 202.8-19.4 16.7-18 47.6-.1 65.6 18.2 17.9 48.9 19 65.6-.3 0 0 193.2-205.8 202.7-215.1 8.5-8.3 16.1-5.5 21.2-2.9 35.6 18.4 86.3 2.4 112.6-23.9 26.3-26.3 31.1-51.7 31.9-64.7.8-12.9-3.7-30-18-44.3zM91.3 443.2c-6.3 6.2-16.5 6.2-22.7 0-6.2-6.3-6.2-16.5 0-22.7 6.3-6.2 16.5-6.2 22.7 0 6.2 6.3 6.2 16.5 0 22.7z" fill="currentColor"/></svg>
  )
}