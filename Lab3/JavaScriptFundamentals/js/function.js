function checkAge(age){
    if( age > 18){
        return true;
    }
    return confirm('Did Parents allow you?');
}

function checkAge2(age){

    return (age > 18) ? true : confirm('Did Parents allow you?');
}

function min(a,b){
    return (a > b) ? b : a;
}

function pow(x,n){
    let res = x;
    for (let i = 0; i < n; i++){
        res *= x;
    }
    return res;
}
