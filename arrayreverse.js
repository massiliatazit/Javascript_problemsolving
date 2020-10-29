/* sample input 
4
1 4 3 2
*/

/* sample output
2 3 4 1
*/


function arrayrever(n){

    arr=[1,4,3,2]
    reverarray=[];
    for (i=1;i<=arr.length;i++){
        reverarray.push(arr[n-i])


    }
    console.log(reverarray) ;
}

arrayrever(4)