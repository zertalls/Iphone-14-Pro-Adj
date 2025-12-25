import clsx from 'clsx';
import styles from './Colors.module.css'
import { FlexWrapper } from '../../../../../common/components/Wrapper/FlexWrapper';
import iphoneBlack from '../../../../../common/assets/images/iPhone14Black.svg'
import iphoneGold from '../../../../../common/assets/images/iPhone14Gold.svg'
import iphonePurple from '../../../../../common/assets/images/iPhone14Purple.svg'
import iphoneSilver from '../../../../../common/assets/images/iPhone14Silver.svg'

export const Colors = () => {
    return (
        <div className={clsx('container', styles.container)}>
            <h2 className={styles.h2}>ВЫБЕРИ СВОЙ ЦВЕТ</h2>
            <FlexWrapper className={styles.colorsWrapper}>
                <div className={styles.divWrapper}>
                    <img className={clsx(styles.img)} src={iphoneSilver} alt='iphone-silver' width='' height=''/>
                    <span className={clsx('fontMainStyle', styles.spanMargin)}>Silver</span>
                    <span className={'fontSecondaryStyle'}>Серебристый</span>                 
                </div>
                <div className={styles.divWrapper}>
                    <img className={clsx(styles.img)} src={iphonePurple} alt='iphone-deep-purple' width='' height=''/>
                    <span className={clsx('fontMainStyle', styles.spanMargin)}>Deep purple</span>
                    <span className={'fontSecondaryStyle'}>Темно фиолетовый</span>                 
                </div>
                <div className={styles.divWrapper}>
                    <img className={clsx(styles.img)} src={iphoneGold} alt='iphone-gold' width='' height=''/>
                    <span className={clsx('fontMainStyle', styles.spanMargin)}>Gold</span>
                    <span className={'fontSecondaryStyle'}>Золотой</span>                 
                </div>
                <div className={styles.divWrapper}>
                    <img className={clsx(styles.img)} src={iphoneBlack} alt='iphone-space-black' width='' height=''/>
                    <span className={clsx('fontMainStyle', styles.spanMargin)}>Space Black</span>
                    <span className={'fontSecondaryStyle'}>Космический черный</span>  
                </div>
            </FlexWrapper>          
        </div>
    );
};