import React from 'react'

export type BasicIconProps = React.SVGProps<SVGSVGElement>
export interface IconType extends React.FC<BasicIconProps> {
  default?: React.FC<BasicIconProps>
}
export interface IconProps extends Omit<BasicIconProps, 'type'> {
  type: IconType
}

export default function Icon({ type, ...props }: IconProps) {
  const IconComponent = type?.default ?? type

  return IconComponent ? <IconComponent {...props} /> : null
}
