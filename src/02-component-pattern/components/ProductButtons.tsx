import { useContext, useCallback } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

interface Props {
    className?: string;
    style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
    const { counter, increaseBy, maxCount } = useContext(ProductContext);

    const isMaxReached = useCallback(() => !!maxCount && counter === maxCount, [counter, maxCount]);

    //TODO: isMaxReached = useCallback, dependencias[ count, maxCount ]
    //true si el count === maxCount
    //false si no lo es ------ ${ styles.disabled }

    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
                -
            </button>
            <div className={styles.countLabel}> {counter} </div>
            <button
                className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
                onClick={() => increaseBy(+1)}
            >
                +
            </button>
        </div>
    );
};
