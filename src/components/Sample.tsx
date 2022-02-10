import React from 'react'

interface SampleProps {
    as: "h1" | "h2" |"h3" |"h4"|"h5" |"h6"
    children?: React.ReactNode
}

export const Sample = ({as, children, ...props}:SampleProps) => {
  return React.createElement(as, {...props}, children)
}
