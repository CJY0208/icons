import React from 'react'

export default function IosDownloadOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M288 144v16h112v272H112V160h112v-16H96v304h320V144z" fill="currentColor"/><path d="M193.1 252.3l-11.6 11.6 74.5 74.5 74.5-74.5-11.6-11.6-54.7 54.7V64h-16.4v243z" fill="currentColor"/></svg>
  )
}