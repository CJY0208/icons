import React from 'react'

export default function DocumentLockOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M288 304v-18c0-16.63-14.26-30-32-30s-32 13.37-32 30v18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M304 416h-96a32 32 0 0 1-32-32v-48a32 32 0 0 1 32-32h96a32 32 0 0 1 32 32v48a32 32 0 0 1-32 32z" fill="currentColor"/><path d="M416 221.25V416a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V96a48 48 0 0 1 48-48h98.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><path d="M256 50.88V176a32 32 0 0 0 32 32h125.12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
  )
}