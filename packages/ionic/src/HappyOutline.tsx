import React from 'react'

export default function HappyOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><circle cx="184" cy="232" r="24" fill="currentColor"/><path d="M256.05 384c-45.42 0-83.62-29.53-95.71-69.83a8 8 0 0 1 7.82-10.17h175.69a8 8 0 0 1 7.82 10.17c-11.99 40.3-50.2 69.83-95.62 69.83z" fill="currentColor"/><circle cx="328" cy="232" r="24" fill="currentColor"/><circle cx="256" cy="256" r="208" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/></svg>
  )
}