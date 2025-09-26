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

export default function Heading({ level, children, className, ...rest }: Props) {

  const Tag = (`h${level}` as IntrinsicHeading)
  
  return (
    <Tag className={clsx(styles[`h${level}`], className)} {...rest}>
      {children}
    </Tag>
  )
}