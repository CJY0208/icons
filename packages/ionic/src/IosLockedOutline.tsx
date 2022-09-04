import React from 'react'

export default function IosLockedOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M360 224v-72c0-57.43-46.562-104-103.984-104C198.562 48 152 94.57 152 152v72H96v240h320V224h-56zm-192-72c0-48.523 39.484-88 88.016-88C304.531 64 344 103.477 344 152v72H168v-72zm232 296H112V240h288v208z" fill="currentColor"/><path d="M256 288c-17.673 0-32 14.327-32 32 0 14.91 10.198 27.439 24 30.992V384h16v-33.008c13.802-3.553 24-16.082 24-30.992 0-17.673-14.327-32-32-32zm0 48c-8.822 0-16-7.178-16-16s7.178-16 16-16 16 7.178 16 16-7.178 16-16 16z" fill="currentColor"/></svg>
  )
}