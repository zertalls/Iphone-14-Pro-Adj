import clsx from 'clsx'
import appleLogo from '../../../../common/assets/icons/appleLogo.svg'
import styles from './Navbar.module.css'
    
export const Navbar = () => {
    return (
        <div className={clsx('container', styles.container)}>         
            <nav className={styles.navWrapper}>
                <ul className={styles.ulWrapper}>
                    <li>Что нового</li>
                    <li>Цвет</li>
                    <li>Заказать</li>
                </ul>
                {/* <img src={appleLogo} alt="apple-logo" className='' width='39px' height='48px'/> */}
                <span>+38 050-456-56-56</span>
            </nav> 
        </div>
        
    );
};