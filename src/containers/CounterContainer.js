import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { decreaseAsync, increaseAsync } from '../modules/counter';

const CounterContainer = () => {
    //상태값 받아오기
    const number = useSelector(state=>state.counter);
    const dispatch = useDispatch();
    const onIncrease = () => {
        dispatch(increaseAsync());
    }
    const onDecrease = () => {
        dispatch(decreaseAsync());
    }
    return (
        <div>
            <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
        </div>
    );
};


export default CounterContainer;