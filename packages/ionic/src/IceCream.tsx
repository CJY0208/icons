import React from 'react'

export default function IceCream({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M183 352c-21.84-.52-39-18.9-39-40.74v-34.07a8 8 0 0 0-6-7.74c-33.75-8.85-58-39.71-58-77.45a80.14 80.14 0 0 1 66.27-78.82a8 8 0 0 0 6.62-6.83a104 104 0 0 1 206.22 0a8 8 0 0 0 6.62 6.83A80 80 0 0 1 352 272a74.33 74.33 0 0 1-47.45-17.41a7.93 7.93 0 0 0-9.92-.14A62.89 62.89 0 0 1 256 268a80.47 80.47 0 0 1-21.8-3.18a8 8 0 0 0-10.2 7.69V312a40 40 0 0 1-41 40z" fill="currentColor"/><path d="M263.39 299.7a8 8 0 0 0-7.39 7.91V312a72.11 72.11 0 0 1-50.69 68.76a8 8 0 0 0-4.91 10.78l40.91 94.8A16 16 0 0 0 256 496a16 16 0 0 0 14.69-9.7l73.78-172.15a8 8 0 0 0-6.2-11.07a106.31 106.31 0 0 1-35.9-11.59a8 8 0 0 0-7.13-.2a95 95 0 0 1-31.85 8.41z" fill="currentColor"/></svg>
  )
}