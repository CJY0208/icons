import React from 'react'

export default function KeyOutlined({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" {...props} className={`c-icon ${className}`}><path d="M608 112c-167.9 0-304 136.1-304 304c0 70.3 23.9 135 63.9 186.5l-41.1 41.1l-62.3-62.3a8.15 8.15 0 0 0-11.4 0l-39.8 39.8a8.15 8.15 0 0 0 0 11.4l62.3 62.3l-44.9 44.9l-62.3-62.3a8.15 8.15 0 0 0-11.4 0l-39.8 39.8a8.15 8.15 0 0 0 0 11.4l62.3 62.3l-65.3 65.3a8.03 8.03 0 0 0 0 11.3l42.3 42.3c3.1 3.1 8.2 3.1 11.3 0l253.6-253.6A304.06 304.06 0 0 0 608 720c167.9 0 304-136.1 304-304S775.9 112 608 112zm161.2 465.2C726.2 620.3 668.9 644 608 644c-60.9 0-118.2-23.7-161.2-66.8c-43.1-43-66.8-100.3-66.8-161.2c0-60.9 23.7-118.2 66.8-161.2c43-43.1 100.3-66.8 161.2-66.8c60.9 0 118.2 23.7 161.2 66.8c43.1 43 66.8 100.3 66.8 161.2c0 60.9-23.7 118.2-66.8 161.2z" fill="currentColor"/></svg>
  )
}