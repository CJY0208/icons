import React from 'react'

export default function DatabaseTwotone({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" {...props} className={`kl-icon ${className}`}><path d="M232 616h560V408H232v208zm112-144c22.1 0 40 17.9 40 40s-17.9 40-40 40s-40-17.9-40-40s17.9-40 40-40zM232 888h560V680H232v208zm112-144c22.1 0 40 17.9 40 40s-17.9 40-40 40s-40-17.9-40-40s17.9-40 40-40zM232 344h560V136H232v208zm112-144c22.1 0 40 17.9 40 40s-17.9 40-40 40s-40-17.9-40-40s17.9-40 40-40z" fillOpacity=".15" fill="currentColor"/><path d="M304 512a40 40 0 1 0 80 0a40 40 0 1 0-80 0zm0 272a40 40 0 1 0 80 0a40 40 0 1 0-80 0zm0-544a40 40 0 1 0 80 0a40 40 0 1 0-80 0z" fill="currentColor"/><path d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-40 824H232V680h560v208zm0-272H232V408h560v208zm0-272H232V136h560v208z" fill="currentColor"/></svg>
  )
}