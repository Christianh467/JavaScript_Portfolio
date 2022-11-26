function solution(A) {
    for(let i = 0; i < A.length; i){
        let single = A[i];
        let pairIndex = A.slice(i + 1).findIndex(value => value === single)

        if(pairIndex >= 0){
            A.splice(pairIndex + i + 1, 1);
            A.splice(i, 1);
        }
        else{
            i++
        }
    }
    return parseInt(A);
}
