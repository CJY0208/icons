import React from 'react'

export default function ArrowRedoCircle({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48S48 141.13 48 256zm96 66.67c5.45-61.45 34.14-117.09 122.87-117.09v-37.32a8.32 8.32 0 0 1 14-6L365.42 242a8.2 8.2 0 0 1 0 11.94L281 333.71a8.32 8.32 0 0 1-14-6v-37.29c-57.07 0-84.51 13.47-108.58 38.68c-5.49 5.65-15.07 1.32-14.42-6.43z" fill="currentColor"/></svg>
  )
}