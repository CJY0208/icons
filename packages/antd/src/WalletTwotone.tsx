import React from 'react'

export default function WalletTwotone({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" {...props} className={`kl-icon ${className}`}><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 464H528V448h312v128zm0-192H496c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h344v200H184V184h656v200z" fillOpacity=".8" fill="currentColor"/><path d="M528 576h312V448H528v128zm92-104c22.1 0 40 17.9 40 40s-17.9 40-40 40s-40-17.9-40-40s17.9-40 40-40z" fillOpacity=".1" fill="currentColor"/><path d="M580 512a40 40 0 1 0 80 0a40 40 0 1 0-80 0z" fillOpacity=".8" fill="currentColor"/><path d="M184 840h656V640H496c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32h344V184H184v656z" fillOpacity=".1" fill="currentColor"/></svg>
  )
}