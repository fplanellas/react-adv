import { useState, useEffect, useRef } from 'react';
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const useProduct = ( {onChange, product, value = 0, initialValues}: useProductArgs ) => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value);   
    
    const val = initialValues?.count || value;
    //console.log(val)
    //const isMounted = useRef(false)

    const increaseBy = (value: number) => {

        let newValue = Math.max(counter + value, 0);

        if (initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues?.maxCount)
        }
       
        setCounter(newValue);

         
        
        onChange && onChange({ count: newValue, product});
    };

    const reset = () => {
        setCounter(val)
    }

    useEffect(() => {
       //if (!isMounted.current) return;
        setCounter(val);
    }, [val]);

    //  useEffect(() => {
    //     isMounted.current = true;
    // }, []);
    

    return {
        counter,
        increaseBy,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        reset
    };

}