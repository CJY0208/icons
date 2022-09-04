import React from 'react'

export default function DatabaseOutlined({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" {...props} className={`c-icon ${className}`}><path d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-600 72h560v208H232V136zm560 480H232V408h560v208zm0 272H232V680h560v208zM304 240a40 40 0 1 0 80 0a40 40 0 1 0-80 0zm0 272a40 40 0 1 0 80 0a40 40 0 1 0-80 0zm0 272a40 40 0 1 0 80 0a40 40 0 1 0-80 0z" fill="currentColor"/></svg>
  )
}