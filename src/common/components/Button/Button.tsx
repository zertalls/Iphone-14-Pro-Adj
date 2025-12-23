import clsx from "clsx";
import styles from './Button.module.css'

type Props = {
    title: string
    type: 'primary' | 'secondary'
    className?: string    
};

export const Button = ({title, type, className}: Props) => {
    const combinedStyles = clsx(styles.default,
        type === 'primary' ? styles.primary : styles.secondary,
        className,
    )
    return (
        <button className={combinedStyles}>{title}</button>
    );
};