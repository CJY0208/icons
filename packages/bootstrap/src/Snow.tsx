import React from 'react'

export default function Snow({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`c-icon ${className}`}><g fill="currentColor"><path d="M8 16a.5.5 0 0 1-.5-.5v-1.293l-.646.647a.5.5 0 0 1-.707-.708L7.5 12.793V8.866l-3.4 1.963l-.496 1.85a.5.5 0 1 1-.966-.26l.237-.882l-1.12.646a.5.5 0 0 1-.5-.866l1.12-.646l-.884-.237a.5.5 0 1 1 .26-.966l1.848.495L7 8L3.6 6.037l-1.85.495a.5.5 0 0 1-.258-.966l.883-.237l-1.12-.646a.5.5 0 1 1 .5-.866l1.12.646l-.237-.883a.5.5 0 1 1 .966-.258l.495 1.849L7.5 7.134V3.207L6.147 1.854a.5.5 0 1 1 .707-.708l.646.647V.5a.5.5 0 1 1 1 0v1.293l.647-.647a.5.5 0 1 1 .707.708L8.5 3.207v3.927l3.4-1.963l.496-1.85a.5.5 0 1 1 .966.26l-.236.882l1.12-.646a.5.5 0 0 1 .5.866l-1.12.646l.883.237a.5.5 0 1 1-.26.966l-1.848-.495L9 8l3.4 1.963l1.849-.495a.5.5 0 0 1 .259.966l-.883.237l1.12.646a.5.5 0 0 1-.5.866l-1.12-.646l.236.883a.5.5 0 1 1-.966.258l-.495-1.849l-3.4-1.963v3.927l1.353 1.353a.5.5 0 0 1-.707.708l-.647-.647V15.5a.5.5 0 0 1-.5.5z"/></g></svg>
  )
}