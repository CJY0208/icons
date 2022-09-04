import React from 'react'

export default function LibrarySharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M84 480H28a12 12 0 0 1-12-12V92a12 12 0 0 1 12-12h56a12 12 0 0 1 12 12v376a12 12 0 0 1-12 12z" fill="currentColor"/><path d="M240 208v-52a12 12 0 0 0-12-12H124a12 12 0 0 0-12 12v52z" fill="currentColor"/><path d="M112 416v52a12 12 0 0 0 12 12h104a12 12 0 0 0 12-12v-52z" fill="currentColor"/><path d="M112 240h128v144H112z" fill="currentColor"/><path d="M340 480h-72a12 12 0 0 1-12-12V44a12 12 0 0 1 12-12h72a12 12 0 0 1 12 12v424a12 12 0 0 1-12 12z" fill="currentColor"/><path d="M369 100.7l30 367.83a12 12 0 0 0 13.45 10.92l72.16-9a12 12 0 0 0 10.47-12.9L465 91.21a12 12 0 0 0-13.2-10.94l-72.13 7.51A12 12 0 0 0 369 100.7z" fill="currentColor"/></svg>
  )
}