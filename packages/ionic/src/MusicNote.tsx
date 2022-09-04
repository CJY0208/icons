import React from 'react'

export default function MusicNote({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M426 32.1c-2.2 0-5.1.6-5.1.6L203.3 65.9C189.5 69.6 177 83 176 97.5V384h-61v-.1c-28 0-51.1 20-51.1 48s23.1 48 51.3 48h36.2c15.3 0 28.9-6.9 38.3-17.5.1-.1.3-.1.4-.2.6-.6 1-1.5 1.5-2.1 1.3-1.6 2.4-3.2 3.4-5 9.6-14.1 13-32.8 13-41.1V182l208-38v192h-60.5c-28.3 0-51.2 19.9-51.2 48s22.9 48 51.2 48h37.2c18.2 0 34.1-6 43.2-21h.2c9-12 12-30.2 12-54.9V53.3c-.1-11.7-10-21.2-22.1-21.2z" fill="currentColor"/></svg>
  )
}