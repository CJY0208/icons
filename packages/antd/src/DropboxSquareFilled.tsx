import React from 'react'

export default function DropboxSquareFilled({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" {...props} className={`kl-icon ${className}`}><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM663.2 659.5L512.6 750l-151-90.5v-33.1l45.4 29.4l105.6-87.7l105.6 87.7l45.1-29.4v33.1zm-45.6-22.4l-105.3-87.7L407 637.1l-151-99.2l104.5-82.4L256 371.2L407 274l105.3 87.7L617.6 274L768 372.1l-104.2 83.5L768 539l-150.4 98.1zM512.3 361.7l-151.8 93.8l151.8 93.9l151.5-93.9zm151.5 93.8z" fill="currentColor"/></svg>
  )
}