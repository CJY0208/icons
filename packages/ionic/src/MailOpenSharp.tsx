import React from 'react'

export default function MailOpenSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M471.05 168.36L263.24 65.69a16.37 16.37 0 0 0-14.48 0L41 168.36a16 16 0 0 0-9 14.31V432a16.09 16.09 0 0 0 16.19 16h415.62A16.09 16.09 0 0 0 480 432V182.67a16 16 0 0 0-8.95-14.31zM256 97.89l173 85.44l-175.7 86.78l-173-85.44z" fill="currentColor"/></svg>
  )
}