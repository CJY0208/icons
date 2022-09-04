import React from 'react'

export default function CircleHelp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props} className={`c-icon ${className}`}><g fill="none"><path d="M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12z" fill="currentColor"/><path d="M12 14a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1zm-1.5 2.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0z" fill="currentColor"/><path d="M12.39 7.811c-.957-.045-1.76.49-1.904 1.353a1 1 0 0 1-1.972-.328c.356-2.136 2.303-3.102 3.971-3.022c.854.04 1.733.347 2.409.979C15.587 7.44 16 8.368 16 9.5c0 1.291-.508 2.249-1.383 2.832c-.803.535-1.788.668-2.617.668a1 1 0 1 1 0-2c.67 0 1.186-.117 1.508-.332c.25-.167.492-.46.492-1.168c0-.618-.212-1.003-.472-1.246c-.277-.259-.68-.42-1.138-.443z" fill="currentColor"/></g></svg>
  )
}