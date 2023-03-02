const myLogger = store => next => action => {
    //액션 출력하기
    console.log(action);
    //다음 미들웨어 (또는 리듀서) 에게 액션을 전달
    const result = next(action);
    //업데이트 이후의 상태를 출력
    console.log(store.getState());
    //여기에서 반환하는 result 값은 dispatch(action)의 결과물
    return result;
}

export default myLogger;