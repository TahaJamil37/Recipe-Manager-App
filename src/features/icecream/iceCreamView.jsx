


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './icecreamSlice';

const IceCreamView = () => {
    const numberOfIceCreams = useSelector(state => state.icecream.numOfIcecreams);
    const dispatch = useDispatch();

    const orderIceCream = () => {
        dispatch(ordered());
    };

    const restockIceCream = () => {
        dispatch(restocked(5));
    };

    return (
        <div>
            <h1>Ice Cream View</h1>
            <p>Number of Ice Creams: {numberOfIceCreams}</p>
            <button onClick={orderIceCream}>Order Ice Cream</button>
            <button onClick={restockIceCream}>Restock</button>
        </div>
    );
};

export default IceCreamView;
