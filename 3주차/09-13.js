// 전달받은 인수가 Falsy 값이면 true, Truthy 값이면 false를 반환합니다.
function isFalsy(v){
    return !v;
}

function isTruthy(v){
    return !!v;
}

isFalsy(false);
isFalsy(undefined);
isFalsy(null);
isFalsy(0);
isFalsy(NaN);
isFalsy('');

// 모두 true를 반환합니다.
isTruthy(true);
isTruthy('0');