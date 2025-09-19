import { Link } from 'react-router-dom'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import type { To } from 'react-router-dom'
import clsx from 'clsx'
import styles from './Button.module.scss'

//Typage
type Variant = 'primary' | 'secondary'

type Props = Omit<ComponentPropsWithoutRef<typeof Link>, 'to' | 'className'> & {
  to: To
  variant?: Variant
  className?: string
  icon?: ReactNode;
}

/**
 * ButtonLink — a React Router <Link> styled like a button.
 * Use it for navigation (not for actions).
 * Props: `to` (destination), optional `variant` ('primary' | 'secondary'), and `children`.
 * Shares the same visual styles as <Button>.
 */
export function ButtonLink({ to, variant = 'primary', className, children, icon, ...rest }: Props) {
  return (
    <Link to={to} className={clsx(styles.btn, styles[variant], icon && styles.hasIcon, className)} {...rest}>

      <span className={styles.btnText}>
        {children}
      </span>
      
      {icon && (
        <span className={styles.btnIcon} aria-hidden="true">
          {icon}
        </span>
      )}
      
    </Link>
  )
}

/**
 * PrimaryButtonLink — shortcut for a primary-styled ButtonLink.
 * You don’t need to pass `variant`. Just provide `to` and `children`.
 */
export function PrimaryButtonLink(props: Omit<Props, 'variant'>) {
  return <ButtonLink variant="primary" {...props} />
}

/**
 * SecondaryButtonLink — shortcut for a secondary-styled ButtonLink.
 * You don’t need to pass `variant`. Just provide `to` and `children`.
 */
export function SecondaryButtonLink(props: Omit<Props, 'variant'>) {
  return <ButtonLink variant="secondary" {...props} />
}