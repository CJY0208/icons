import React from 'react'

export default function ChatboxWorking({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M124.3 400H277c14.4 0 14.4.1 21.3 5.2S384 464 384 464v-64h3.7c42.2 0 76.3-31.8 76.3-71.4V119.7c0-39.6-34.2-71.7-76.3-71.7H124.3C82.2 48 48 80.1 48 119.7v208.9c0 39.6 34.2 71.4 76.3 71.4zm227.8-208c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32z" fill="currentColor"/></svg>
  )
}