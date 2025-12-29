import clsx from "clsx";
import styles from './Feedback.module.css'
import { FlexWrapper } from "../../../../../common/components/Wrapper/FlexWrapper";
import { Button } from "../../../../../common/components/Button/Button";
import iphoneSecondary from '../../../../../common/assets/images/iPhone14Secondary.svg'

export const Feedback = () => {
    return (
        <div className={clsx('container')}>
            <FlexWrapper>                
                <div className={styles.feedbackLeft}>  
                        <h2 className={styles.h2}>ХОЧЕШЬ IPHONE 14 PRO?</h2>
                        <input placeholder="Ваше имя"/>
                        <input placeholder="Номер телефона"/>
                        <span className={clsx('fontSecondaryStyle', styles.spanColor)}>В ближайшее время наш менеджер свяжется с Вами</span>
                        <Button title="ЗАКАЗАТЬ" type="secondary"/>                 
                </div> 
                <div className={styles.imgContainer}>
                    <img className={styles.img} src={iphoneSecondary} alt='iphone-14-pro-max'/>   
                </div>       
            </FlexWrapper>            
        </div>
    );
};