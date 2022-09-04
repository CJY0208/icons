import React from 'react'

export default function NotificationOff({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props} className={`c-icon ${className}`}><g fill="none"><path d="M19 10c0-3.224-2.18-5.94-5.146-6.752a2 2 0 0 0-3.708 0a6.956 6.956 0 0 0-1.587.655l1.492 1.491A5 5 0 0 1 17 10v2.343l2 2V10zM3.175 17.434L5 14.697V10c0-1.05.231-2.046.646-2.94L3.293 4.707a1 1 0 1 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414L17.586 19h-2.121a3.5 3.5 0 0 1-6.93 0H4.013a.994.994 0 0 1-.633-.215a.999.999 0 0 1-.205-1.35zM5.87 17h9.717l-8.39-8.39A5.002 5.002 0 0 0 7 10v5a1 1 0 0 1-.168.555L5.87 17zm4.716 2a1.5 1.5 0 0 0 2.83 0h-2.83z" fill="currentColor"/></g></svg>
  )
}