import React from 'react'

export default function SocialReddit({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M480.5 251c0-27.7-22.2-50.2-49.5-50.2-13 0-24.7 5-33.6 13.3-32.4-22.8-76.1-37.8-124.9-40.6l21.9-73.2 67.1 13.5c2.3 22.7 21.2 40.4 44.3 40.4h.4c24.6 0 44.5-20.2 44.5-45.1S430.7 64 406.1 64h-.2-.1c-17.2 0-32 9.8-39.5 24.3l-89.7-18-30.8 103-2.5.1c-50.3 2.2-95.5 17.4-128.7 40.7-8.8-8.3-20.6-13.3-33.6-13.3-27.3 0-49.5 22.5-49.5 50.2 0 19.6 11 36.5 27.1 44.8-.8 4.9-1.2 9.8-1.2 14.8.1 75.8 89 137.4 198.6 137.4s198.5-61.6 198.5-137.5c0-5-.4-9.9-1.1-14.8 16.1-8.3 27.1-25.2 27.1-44.7zM65.8 271.1c-6.6-4.5-10.9-12.1-10.9-20.8 0-13.8 11.1-25.1 24.7-25.1 5.6 0 10.8 1.9 15 5.1-13.5 11.9-23.5 25.7-28.8 40.8zm323.5-162c0-9.2 7.4-16.8 16.5-16.8s16.5 7.5 16.5 16.8c0 9.2-7.4 16.8-16.5 16.8s-16.5-7.5-16.5-16.8zM158.5 288.4c0-17.6 14.2-31.8 31.8-31.8s31.8 14.2 31.8 31.8-14.2 31.8-31.8 31.8-31.8-14.2-31.8-31.8zM256 400c-47.6-.2-76-28.5-77.2-29.7l12.6-12.4c.2.2 23.7 24.2 64.6 24.4 40.3-.2 64.2-24.2 64.5-24.4l12.6 12.4c-1.2 1.2-29.5 29.5-77.1 29.7zm66.3-79.8c-17.6 0-31.8-14.2-31.8-31.8s14.2-31.8 31.8-31.8 31.8 14.2 31.8 31.8-14.3 31.8-31.8 31.8zm124.1-48.7c-5.4-15.3-15.6-29.4-29.3-41.4 4.2-3.3 9.5-5.2 15.2-5.2 13.9 0 25.1 11.4 25.1 25.5.1 8.8-4.3 16.5-11 21.1z" fill="currentColor"/></svg>
  )
}