import React from 'react'

export default function EuroCircleFilled({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" {...props} className={`c-icon ${className}`}><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm63.5 375.8c4.4 0 8 3.6 8 8V475c0 4.4-3.6 8-8 8h-136c-.3 4.4-.3 9.1-.3 13.8v36h136.2c4.4 0 8 3.6 8 8V568c0 4.4-3.6 8-8 8H444.9c15.3 62 61.3 98.6 129.8 98.6c19.9 0 37.1-1.2 51.8-4.1c4.9-1 9.5 2.8 9.5 7.8v42.8c0 3.8-2.7 7-6.4 7.8c-15.9 3.4-34.3 5.1-55.3 5.1c-109.8 0-183-58.8-200.2-158H344c-4.4 0-8-3.6-8-8v-27.2c0-4.4 3.6-8 8-8h26.1v-36.9c0-4.4 0-8.8.3-12.8H344c-4.4 0-8-3.6-8-8v-27.2c0-4.4 3.6-8 8-8h31.7c19.7-94.2 92-149.9 198.6-149.9c20.9 0 39.4 1.9 55.3 5.4c3.7.8 6.3 4 6.3 7.8V346h.1c0 5.1-4.6 8.8-9.6 7.8c-14.7-2.9-31.8-4.4-51.7-4.4c-65.4 0-110.4 33.5-127.6 90.4h128.4z" fill="currentColor"/></svg>
  )
}