import React from 'react'

export default function MdBarcode({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M88 128h48v256H88z" fill="currentColor"/><path d="M232 128h48v256h-48z" fill="currentColor"/><path d="M160 144h48v224h-48z" fill="currentColor"/><path d="M304 144h48v224h-48z" fill="currentColor"/><path d="M376 128h48v256h-48z" fill="currentColor"/><path d="M104 104V56H16v400h88v-48H64V104z" fill="currentColor"/><path d="M408 56v48h40v304h-40v48h88V56z" fill="currentColor"/></svg>
  )
}