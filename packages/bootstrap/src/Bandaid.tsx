import React from 'react'

export default function Bandaid({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`c-icon ${className}`}><g fill="currentColor"><path d="M14.121 1.879a3 3 0 0 0-4.242 0L8.733 3.026l4.261 4.26l1.127-1.165a3 3 0 0 0 0-4.242zM12.293 8L8.027 3.734L3.738 8.031L8 12.293L12.293 8zm-5.006 4.994L3.03 8.737L1.879 9.88a3 3 0 0 0 4.241 4.24l.006-.006l1.16-1.121zM2.679 7.676l6.492-6.504a4 4 0 0 1 5.66 5.653l-1.477 1.529l-5.006 5.006l-1.523 1.472a4 4 0 0 1-5.653-5.66l.001-.002l1.505-1.492l.001-.002z"/><path d="M5.56 7.646a.5.5 0 1 1-.706.708a.5.5 0 0 1 .707-.708zm1.415-1.414a.5.5 0 1 1-.707.707a.5.5 0 0 1 .707-.707zM8.39 4.818a.5.5 0 1 1-.708.707a.5.5 0 0 1 .707-.707zm0 5.657a.5.5 0 1 1-.708.707a.5.5 0 0 1 .707-.707zM9.803 9.06a.5.5 0 1 1-.707.708a.5.5 0 0 1 .707-.707zm1.414-1.414a.5.5 0 1 1-.706.708a.5.5 0 0 1 .707-.708zM6.975 9.06a.5.5 0 1 1-.707.708a.5.5 0 0 1 .707-.707zM8.39 7.646a.5.5 0 1 1-.708.708a.5.5 0 0 1 .707-.708zm1.413-1.414a.5.5 0 1 1-.707.707a.5.5 0 0 1 .707-.707z"/></g></svg>
  )
}