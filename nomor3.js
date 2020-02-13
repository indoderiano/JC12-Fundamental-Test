
function cekkoin(koin){
    var sen=[25,10,5,1]
    var keping=0

    // to check what koin
    // var arr=[]

    sen.forEach((val)=>{
        var tambah=Math.floor(koin/val)
        keping+=tambah
        koin-=tambah*val
        // to check
        // for(var i=0;i<tambah;i++){
        //     arr.push(val)
        // }
    })
    // console.log(koin)

    // display what koin as change
    // console.log(arr)

    return keping
}

console.log(cekkoin(49))
console.log(cekkoin(31))
console.log(cekkoin(50))
console.log(cekkoin(24))