import clsx from "clsx";
import { FlexWrapper } from "../../../../../common/components/Wrapper/FlexWrapper";
import iphoneImg from '../../../../../common/assets/images/AppleiPhone14ProMax_1.svg'
import styles from './New.module.css'

export const New = () => {
    return (
        <div className={clsx('container', styles.container)}>
            <h2 className={styles.h2}>ЧТО НОВОГО</h2>  
            <FlexWrapper className={styles.newWrapper}>
                <FlexWrapper className={styles.textWrapper}>
                    <p>Все модели оснащены однокристальной системой A16 Bionic, 48-мегапиксельной основной камерой и экранами ProMotion с защитой Ceramic Shield и частотным диапазоном 1 — 120 Гц, а также ускоренной памятью LPDDR5. Дизайн линейки обновлен, на фронтальной панели смартфонов два выреза. </p>
                    <p>Все iPhone 14 в США будут продаваться без лотка для SIM-карт: производитель заявляет, что улучшенная технология eSIM позволит перенести старые электронные сим-карты на новые смартфоны.</p>
                    <p>Обновлены фронтальная камера (она снабжена автофокусом и быстрее распознает пользователя в условиях недостаточной освещенности) и сенсор основной камеры.</p>
                    <p className={styles.pBold}>iPhone 14 Pro вышел в новом дизайне — без фирменной «челки». Также в ассортименте появился новый цвет. В смартфоне, в отличие от «обычных» 14-х айфонов, установлен процессор A16 Bionic, который может за секунду производить 4 трлн операций с фото.
                    </p>
                </FlexWrapper>
                <div className={styles.imgWrapper}>
                    <img className={styles.img} src={iphoneImg} alt="iphone-14-pro-purple" width={'350px'} height={'370px'}/>
                </div>
            </FlexWrapper>          
        </div>
    );
};