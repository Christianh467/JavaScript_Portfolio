function solution(A, K) {
    let targetIndex = A.length - K;
    let newArray = A.slice(targetIndex);
    let restOfArray = A.slice(0, targetIndex);

    newArray.push(...restOfArray);

    return newArray;
   }

//A is your array
//K is N shifts to the right
