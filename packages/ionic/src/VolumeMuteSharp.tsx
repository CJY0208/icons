import React from 'react'

export default function VolumeMuteSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32" d="M416 432L64 80"/><path d="M352 256c0-24.56-5.81-47.88-17.75-71.27L327 170.47L298.48 185l7.27 14.25C315.34 218.06 320 236.62 320 256a112.91 112.91 0 0 1-.63 11.74l27.32 27.32A148.8 148.8 0 0 0 352 256z" fill="currentColor"/><path d="M416 256c0-51.19-13.08-83.89-34.18-120.06l-8.06-13.82l-27.64 16.12l8.06 13.82C373.07 184.44 384 211.83 384 256c0 25.93-3.89 46.21-11 65.33l24.5 24.51C409.19 319.68 416 292.42 416 256z" fill="currentColor"/><path d="M480 256c0-74.26-20.19-121.11-50.51-168.61l-8.61-13.49l-27 17.22l8.61 13.49C429.82 147.38 448 189.5 448 256c0 48.76-9.4 84-24.82 115.55l23.7 23.7C470.16 351.39 480 309 480 256z" fill="currentColor"/><path d="M256 72l-73.6 58.78l73.6 73.59V72z" fill="currentColor"/><path d="M32 176.1v159.8h93.65L256 440V339.63L92.47 176.1H32z" fill="currentColor"/></svg>
  )
}