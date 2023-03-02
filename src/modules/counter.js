//1.액션타입
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
//2.액션생성함수 ---> 액션을 리턴
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

//thunk 함수사용
export const increaseAsync = () => dispatch => {
    setTimeout(()=>{
        dispatch(increase())
    }, 1000)
}
export const decreaseAsync = () => dispatch => {
    setTimeout(()=>{
        dispatch(decrease())
    }, 1000)
}

//* 초기값 (상태는 객체가 아니라 그냥 숫자나 문자여도 상관이 없다)
const initialState = 0;

//3.리듀서
export default function counter(state=initialState, action){
    switch(action.type){
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        default:
            return state;
    }
}