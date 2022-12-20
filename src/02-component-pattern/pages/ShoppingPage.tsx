import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import "../styles/custom-styles.css";
import styles from "../styles/styles.module.css";
import { products } from "../data/products";

const product = products[0];

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <ProductCard
                product={product}
                className="bg-dark text-white"
                key={product.id}
                initialValues={{ count: 4, maxCount: 10 }}
            >
                {({ reset, count, increaseBy, isMaxCountReached }) => (
                    <>
                        <ProductImage className="custom-image" />
                        <ProductTitle className="text-bold" />
                        <ProductButtons className="custom-buttons" />

                        <button onClick={reset}>Reset</button>
                        <button onClick={() => increaseBy(-2)}> -2 </button>
                        {/* ocultar al llegar a isMaxCount */}
                        <button className={`${isMaxCountReached && styles.none}`} onClick={() => increaseBy(+2)}>
                            {" "}
                            +2{" "}
                        </button>
                        <span>{count}</span>
                    </>
                )}
            </ProductCard>
        </div>
    );
};
