import React from 'react'

export default function SendFill({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`kl-icon ${className}`}><g fill="currentColor"><path fillRule="evenodd" d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26l.001.002l4.995 3.178l3.178 4.995l.002.002l.26.41a.5.5 0 0 0 .886-.083l6-15zm-1.833 1.89l.471-1.178l-1.178.471L5.93 9.363l.338.215a.5.5 0 0 1 .154.154l.215.338l7.494-7.494z"/></g></svg>
  )
}