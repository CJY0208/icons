import React from 'react'

export default function SwapVerticalSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32" d="M464 208L352 96L240 208"/><path fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32" d="M352 113.13V416"/><path fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32" d="M48 304l112 112l112-112"/><path fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32" d="M160 398V96"/></svg>
  )
}