import clsx from "clsx";
import styles from './Footer.module.css';
import appleLogo from '../../../../common/assets/icons/appleLogo.svg'

export const Footer = () => {
    return (
        <div className={clsx('container', styles.container)}>
            <footer className={styles.footerWrapper}>
                <span className={clsx('fontSecondaryStyle', styles.spanColor)}>Политика конфиденциальности</span>  
                <img src={appleLogo} alt='apple-logo' width='70px' height='70px'/>          
                <span>+38 050-456-56-56</span> 
            </footer>           
        </div>
    );
};