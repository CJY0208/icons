import React from 'react'

export default function Hypnotize({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`c-icon ${className}`}><g fill="currentColor"><path d="M7.949 7.998l.006-.003l.003.009l-.01-.006zm.025-.028v-.03l.018.01l-.018.02zm0 .015l.04-.022l.01.006v.04l-.029.016l-.021-.012v-.028zm.049.057v-.014l-.008.01l.008.004zm-.05-.008h.006l-.006.004v-.004z"/><path fillRule="evenodd" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM4.965 1.69a6.972 6.972 0 0 1 3.861-.642c.722.767 1.177 1.887 1.177 3.135c0 1.656-.802 3.088-1.965 3.766c1.263.24 2.655-.815 3.406-2.742c.38-.975.537-2.023.492-2.996a7.027 7.027 0 0 1 2.488 3.003c-.303 1.01-1.046 1.966-2.128 2.59c-1.44.832-3.09.85-4.26.173l.008.021l.012-.006l-.01.01c.42 1.218 2.032 1.9 4.08 1.586a7.415 7.415 0 0 0 2.856-1.081a6.963 6.963 0 0 1-1.358 3.662c-1.03.248-2.235.084-3.322-.544c-1.433-.827-2.272-2.236-2.279-3.58l-.012-.003c-.845.972-.63 2.71.666 4.327a7.415 7.415 0 0 0 2.37 1.935a6.972 6.972 0 0 1-3.86.65c-.727-.767-1.186-1.892-1.186-3.146c0-1.658.804-3.091 1.969-3.768l-.002-.007c-1.266-.25-2.666.805-3.42 2.74a7.415 7.415 0 0 0-.49 3.012a7.026 7.026 0 0 1-2.49-3.018C1.87 9.757 2.613 8.8 3.696 8.174c1.438-.83 3.084-.85 4.253-.176l.005-.006C7.538 6.77 5.924 6.085 3.872 6.4c-1.04.16-2.03.55-2.853 1.08a6.962 6.962 0 0 1 1.372-3.667l-.002.003c1.025-.243 2.224-.078 3.306.547c1.43.826 2.269 2.23 2.28 3.573L8 7.941c.837-.974.62-2.706-.673-4.319a7.415 7.415 0 0 0-2.362-1.931z"/></g></svg>
  )
}