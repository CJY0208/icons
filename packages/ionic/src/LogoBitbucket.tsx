import React from 'react'

export default function LogoBitbucket({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M483.13 32.23a19.65 19.65 0 0 0-2.54-.23h-449C23 31.88 16.12 38.88 16 47.75a11.44 11.44 0 0 0 .23 2.8l65.3 411.25a22.52 22.52 0 0 0 7 12.95A20 20 0 0 0 102 480h313.18a15.45 15.45 0 0 0 15.34-13.42l38.88-247.91H325.19l-18.46 112H205.21l-25.73-148h295.58l20.76-132c1.27-8.75-4.38-17.04-12.69-18.44z" fill="currentColor"/></svg>
  )
}