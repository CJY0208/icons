import React from 'react'

export default function MegaphoneOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M407.94 52.22S321.3 160 240 160H80a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h160c81.3 0 167.94 108.23 167.94 108.23c6.06 8 24.06 2.52 24.06-9.83V62c0-12.31-17-18.82-24.06-9.78z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M64 256s-16-6-16-32s16-32 16-32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M448 246s16-4.33 16-22s-16-22-16-22" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 160v128"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M112 160v128"/><path d="M144 288v168a8 8 0 0 0 8 8h53a16 16 0 0 0 15.29-20.73C211.91 416.39 192 386.08 192 336h16a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16h-16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
  )
}