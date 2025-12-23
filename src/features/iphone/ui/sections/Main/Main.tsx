import clsx from "clsx";
import { FlexWrapper } from "../../../../../common/components/Wrapper/FlexWrapper";
import mainImage from "../../../../../common/assets/images/iphone14ProMain.svg";
import { Button } from "../../../../../common/components/Button/Button";
import styles from "./Main.module.css";

export const Main = () => {
  return (
    <div className={clsx("container", styles.container)}>
      <FlexWrapper className={styles.mainWrapper}>
        <h1>IPHONE 14 PRO</h1>
        <img src={mainImage} alt="" width="937px" height="657px" className={styles.mainImage} />
        <Button title="Выбрать" type="primary" className={styles.button} />
      </FlexWrapper>
    </div>
  );
};
