import React from 'react'

export default function AndroidSunny({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M256 160c25.499 0 49.567 10.025 67.771 28.229S352 230.501 352 256s-10.025 49.567-28.229 67.771S281.499 352 256 352s-49.567-10.025-67.771-28.229S160 281.499 160 256s10.025-49.567 28.229-67.771S230.501 160 256 160m21.333-128h-42.666v64h42.666V32zm129.063 43.729L368 114.135 397.864 144l38.406-38.396-29.874-29.875zm-300.792 0l-29.875 29.875L114.136 144 144 114.135l-38.396-38.406zM256 128c-70.396 0-128 57.604-128 128s57.604 128 128 128 128-57.604 128-128-57.604-128-128-128zm224 106.666h-64v42.668h64v-42.668zm-384 0H32v42.668h64v-42.668zM397.864 368L368 397.865l38.396 38.406 29.875-29.875L397.864 368zm-283.728 0L75.73 406.396l29.875 29.875L144 397.865 114.136 368zm163.197 48h-42.666v64h42.666v-64z" fill="currentColor"/></svg>
  )
}