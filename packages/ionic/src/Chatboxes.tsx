import React from 'react'

export default function Chatboxes({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M294.1 365.5c-2.6-1.8-7.2-4.5-17.5-4.5H160.5c-34.7 0-64.5-26.1-64.5-59.2V201h-1.8C67.9 201 48 221.5 48 246.5v128.9c0 25 21.4 40.6 47.7 40.6H112v48l53.1-45c1.9-1.4 5.3-3 13.2-3h89.8c23 0 47.4-11.4 51.9-32l-25.9-18.5z" fill="currentColor"/><path d="M401 48H183.7C149 48 128 74.8 128 107.8V276c0 33.1 28 60 62.7 60h101.1c10.4 0 15 2.3 17.5 4.2L384 400v-64h17c34.8 0 63-26.9 63-59.9V107.8c0-33-28.2-59.8-63-59.8z" fill="currentColor"/></svg>
  )
}