import React from 'react'

export default function DashOutlined({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" {...props} className={`kl-icon ${className}`}><path d="M112 476h160v72H112zm320 0h160v72H432zm320 0h160v72H752z" fill="currentColor"/></svg>
  )
}