import React from 'react'

export default function MdFlask({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M436.9 354.4L336 192V96h32V48H144v48h32v96L76.1 354.4C67.7 370.3 63.6 385.8 64 400c1.1 36.5 28.7 64 65.1 64H385c36.3 0 62.1-27.6 63-64 .3-14.2-2.6-29.7-11.1-45.6zM155.1 304l29.5-48h143.1l29.8 48H155.1z" fill="currentColor"/></svg>
  )
}