import styles from './FlexWrapper.module.css'
import clsx from 'clsx';

type Props = {
    children: React.ReactNode 
    className?: string
};
export const FlexWrapper = ({children, className}: Props) => {
    const combinedStyles = clsx(styles.default, className)
    return (
        <div className={combinedStyles}>{children}</div>
    );
};