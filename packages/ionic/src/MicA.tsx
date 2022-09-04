import React from 'react'

export default function MicA({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M112.1 238.1l-.1 13.6c.1 65.6 46 120.6 108.1 136.2 1.3.1 2.6.5 3.8.9 5.9 2 10.1 6.9 12.1 12.8v58.7c0 10.9 8.9 19.7 20 19.7h.1c11.1 0 19.9-8.8 19.9-19.7v-58.8c2-5.9 6.1-10.7 12-12.7 1.2-.4 2.5-.8 3.9-.9C354 372.3 400 317.3 400 251.7v-13.6c0-10.4-8.9-18.9-19.5-18.9s-19.5 8.4-19.5 18.9v13.6c0 28.5-11.5 54.1-30.6 72.8-19.2 18.6-45.3 30.2-74.5 30.2-29.2 0-55.1-11.5-74.2-30.2S151 280.1 151 251.7v-13.6c0-10.4-8.8-18.9-19.5-18.9-10.6 0-19.4 8.5-19.4 18.9z" fill="currentColor"/><path d="M179 107.7v143.8c0 41.8 34.7 75.7 77.5 75.7s77.5-33.9 77.5-75.7V107.7c0-41.8-34.7-75.7-77.5-75.7S179 65.9 179 107.7z" fill="currentColor"/></svg>
  )
}