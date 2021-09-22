//throw
let x = 1 ;
if(x < 0) throw new Error('X must be positive NOT negative value');
console.log(x);

//try/catch/finally
try{
    //statement disini digunakan untuk menjalankan perintah
    myfunction();
}catch(error){
    console.log('Terjadi Kesalahan, ' + error.message);
    console.log(error.name);
}//finally {
//console.log('Process Done');
    //optional , bisa dipakai atau tidak
//}

