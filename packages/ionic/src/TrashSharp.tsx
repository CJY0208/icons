import React from 'react'

export default function TrashSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M296 64h-80a7.91 7.91 0 0 0-8 8v24h96V72a7.91 7.91 0 0 0-8-8z" fill="none"/><path d="M292 64h-72a4 4 0 0 0-4 4v28h80V68a4 4 0 0 0-4-4z" fill="none"/><path d="M447.55 96H336V48a16 16 0 0 0-16-16H192a16 16 0 0 0-16 16v48H64.45L64 136h33l20.09 314A32 32 0 0 0 149 480h214a32 32 0 0 0 31.93-29.95L415 136h33zM176 416l-9-256h33l9 256zm96 0h-32V160h32zm24-320h-80V68a4 4 0 0 1 4-4h72a4 4 0 0 1 4 4zm40 320h-33l9-256h33z" fill="currentColor"/></svg>
  )
}