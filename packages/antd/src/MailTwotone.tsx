import React from 'react'

export default function MailTwotone({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" {...props} className={`kl-icon ${className}`}><path d="M477.5 536.3L135.9 270.7l-27.5-21.4l27.6 21.5V792h752V270.8L546.2 536.3a55.99 55.99 0 0 1-68.7 0z" fillOpacity=".15" fill="currentColor"/><path d="M876.3 198.8l39.3 50.5l-27.6 21.5l27.7-21.5l-39.3-50.5z" fillOpacity=".15" fill="currentColor"/><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-94.5 72.1L512 482L190.5 232.1h643zm54.5 38.7V792H136V270.8l-27.6-21.5l27.5 21.4l341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5l-39.3-50.5h.1l39.3 50.5l-27.7 21.5z" fill="currentColor"/></svg>
  )
}