
let A = [ 1, 2, 3, 5 ];
let B = [ 6, 7, 8, 9 ];
    
function mergeTwo(A, B)
{
    // Get sizes of vectors
    let m = A.length;
    let n = B.length;
 
    // Vector for storing Result
    let D = [];
 
    let i = 0, j = 0;
    while (i < m && j < n) {
 
        if (A[i] <= B[j])
            D.push(A[i++]);
        else
            D.push(B[j++]);
    }
 
    // B has exhausted
    while (i < m)
        D.push(A[i++]);
 
    // A has exhausted
    while (j < n)
        D.push(B[j++]);
 
    return D;
}

const result = mergeTwo(A, B)
console.log(result);
