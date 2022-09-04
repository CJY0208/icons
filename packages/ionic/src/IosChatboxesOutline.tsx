import React from 'react'

export default function IosChatboxesOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M64 64h256v96h16V48H48v224h112v-16H64z" fill="currentColor"/><path d="M176 176v224h162.6l64 64H416v-64h48V176H176zm272 208h-48v54.6L345 384H192V192h256v192z" fill="currentColor"/></svg>
  )
}