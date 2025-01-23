

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './cakeSlice';

const CakeView = () => {
    const numberOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();

    const handleOrderCake = () => {
        dispatch(ordered());
    };

    const handleRestockCake = () => {
        dispatch(restocked(4));
    };

    return (
        <div>
            <h1>Number of Cakes: {numberOfCakes}</h1>
            <button onClick={handleOrderCake}>Order Cake</button>
            <button onClick={handleRestockCake}>Restock</button>
        </div>
    );
};

export default CakeView;
