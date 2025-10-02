import styles from './TwoColumnSection.module.scss'
import clsx from 'clsx'
import type { ReactNode } from 'react'

type Props ={
    left: ReactNode
    right: ReactNode
    className?:string
    reverse?:boolean
}


/* Component TwoColumnSection
* Render logic:
* - Uses clsx to combine base styles with "reverse" when reverse=true.
* - Layout is built with CSS Grid using two named areas: left and right.
* - When "reverse" is true, grid-template-areas are swapped.
* - On mobile (max-width: 768px), grid switches to a single column (stacked).
* - In reverse mode on mobile, stacking order is also inverted (right above left).

* View TSX:
* - <section> root with "section" class and optional "reverse".
* - Inside, <div className="container"> as a grid wrapper with:
*   -> <div className="left"> rendering props.left.
*   -> <div className="right"> rendering props.right.
*/
export default function TwoColumnSection({left, right, className, reverse=false}:Props) {

    return (
        <section className={clsx(styles.section, reverse && styles.reverse, className)}>
            <div className={styles.container}>

                <div className={styles.left}>
                    {left}
                </div>

                <div className={styles.right}>
                    {right}
                </div>

            </div>
        </section> 
    )
}