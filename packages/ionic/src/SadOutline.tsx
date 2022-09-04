import React from 'react'

export default function SadOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><circle cx="184" cy="232" r="24" fill="currentColor"/><path d="M256 288c45.42 0 83.62 29.53 95.71 69.83a8 8 0 0 1-7.87 10.17H168.15a8 8 0 0 1-7.82-10.17C172.32 317.53 210.53 288 256 288z" fill="currentColor"/><circle cx="328" cy="232" r="24" fill="currentColor"/><circle cx="256" cy="256" r="208" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/></svg>
  )
}