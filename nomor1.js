
const Faktorial=(n)=>{
    var output=n
    for(var i=1;i<n;i++){
        output*=i
    }
    return output
}

console.log(Faktorial(5))
console.log(Faktorial(4))
console.log(Faktorial(10))