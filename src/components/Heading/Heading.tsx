import type  { HTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './Heading.module.scss'

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6
type IntrinsicHeading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type Props = {
  level: HeadingLevel
  children: ReactNode
  className?: string
} & HTMLAttributes<HTMLHeadingElement>

/* Component Heading
* Render logic :
* - Receives a "level" (1..6) to choose the correct semantic tag.
* - Builds the intrinsic tag name: "h1".."h6" from the level.
* - Merges per-level CSS Module class with optional "className" via clsx.
* - Forwards all native heading props via "...rest".
* - No state or effects; pure presentational component.

* View TSX :
* - Returns the computed <h{level}> element with the right class.
* - Renders "children" inside the heading tag.
*/
export default function Heading({ level, children, className, ...rest }: Props) {

  const Tag = (`h${level}` as IntrinsicHeading)
  
  return (
    <Tag className={clsx(styles[`h${level}`], className)} {...rest}>
      {children}
    </Tag>
  )
}