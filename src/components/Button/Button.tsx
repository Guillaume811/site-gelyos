import type { ButtonHTMLAttributes } from 'react'
import s from './Button.module.scss'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export default function Button(props: Props) {
  const { className, ...rest } = props
  return <button className={[s.btn, className].filter(Boolean).join(' ')} {...rest} />
}