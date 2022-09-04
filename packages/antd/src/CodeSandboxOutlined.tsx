import React from 'react'

export default function CodeSandboxOutlined({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" {...props} className={`c-icon ${className}`}><path d="M709.6 210l.4-.2h.2L512 96L313.9 209.8h-.2l.7.3L151.5 304v416L512 928l360.5-208V304l-162.9-94zM482.7 843.6L339.6 761V621.4L210 547.8V372.9l272.7 157.3v313.4zM238.2 321.5l134.7-77.8l138.9 79.7l139.1-79.9l135.2 78l-273.9 158l-274-158zM814 548.3l-128.8 73.1v139.1l-143.9 83V530.4L814 373.1v175.2z" fill="currentColor"/></svg>
  )
}