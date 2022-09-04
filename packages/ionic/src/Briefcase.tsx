import React from 'react'

export default function Briefcase({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M336 80H176a16 16 0 0 0-16 16v16h192V96a16 16 0 0 0-16-16z" fill="none"/><path d="M496 176a64.07 64.07 0 0 0-64-64h-48V96a48.05 48.05 0 0 0-48-48H176a48.05 48.05 0 0 0-48 48v16H80a64.07 64.07 0 0 0-64 64v48h480zm-144-64H160V96a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16z" fill="currentColor"/><path d="M336 264a24 24 0 0 1-24 24H200a24 24 0 0 1-24-24v-4a4 4 0 0 0-4-4H16v144a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64V256H340a4 4 0 0 0-4 4z" fill="currentColor"/></svg>
  )
}