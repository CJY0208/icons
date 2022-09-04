import React from 'react'

export default function IosSettingsStrong({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M32 376h283.35c6.186-14.112 20.281-24 36.65-24s30.465 9.888 36.65 24H480v32h-91.35c-6.186 14.112-20.281 24-36.65 24s-30.465-9.888-36.65-24H32" fill="currentColor"/><path d="M32 240h91.35c6.186-14.112 20.281-24 36.65-24s30.465 9.888 36.65 24H480v32H196.65c-6.186 14.112-20.281 24-36.65 24s-30.465-9.888-36.65-24H32" fill="currentColor"/><path d="M32 104h283.35c6.186-14.112 20.281-24 36.65-24s30.465 9.888 36.65 24H480v32h-91.35c-6.186 14.112-20.281 24-36.65 24s-30.465-9.888-36.65-24H32" fill="currentColor"/></svg>
  )
}