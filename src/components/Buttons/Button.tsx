import { memo, forwardRef } from 'react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './Button.module.scss'

// Typage 
type Variant = 'primary' | 'secondary'

type OwnProps = {
  variant?: Variant
  children?: ReactNode
}

type Props = ButtonHTMLAttributes<HTMLButtonElement> & OwnProps

/** 
 * Base button component.
 * Choose the style with `variant` ('primary' | 'secondary').
 * Text/content comes from `children`.
 * Pass any native <button> props (onClick, disabled, type, aria-*).
 * Uses forwardRef + memo; default type="button".
 */
export const Button = memo(
  forwardRef<HTMLButtonElement, Props>(function Button(
    { variant = 'primary', children, className, type = 'button', ...rest },
    ref
  ) {
    return (
      <button
        ref={ref}
        type={type}  // évite les submit accidentels si utilisé dans un <form>
        className={clsx(
          styles.btn,
          styles[variant],
          className
        )}
        {...rest}
      >
        {children}
      </button>
    )
  })
)

/**
 * PrimaryButton — shortcut for a primary-styled button.
 * You don’t need to pass `variant`.
 * Accepts all native <button> props and a ref.
 */

export const PrimaryButton = memo(
  forwardRef<HTMLButtonElement, Omit<Props, 'variant'>>(function PrimaryButton(props, ref) {
    return <Button ref={ref} variant="primary" {...props} />
  })
)

/**
 * SecondaryButton — shortcut for a secondary-styled button.
 * You don’t need to pass `variant`.
 * Accepts all native <button> props and a ref.
 */
export const SecondaryButton = memo(
  forwardRef<HTMLButtonElement, Omit<Props, 'variant'>>(function SecondaryButton(props, ref) {
    return <Button ref={ref} variant="secondary" {...props} />
  })
)