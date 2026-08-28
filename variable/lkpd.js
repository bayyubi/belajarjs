//var a = 5; //! Kode Program 1
//var a = 15;
//console.log(a);

//let b = 5; //! Kode Program 2
//let b = 15;
//console.log(b);

//for (var i = 0; i < 3; i++) { //! Kode Program 3
//  setTimeout(function () {
//    console.log('var i =', i);
//  }, 100);
//}
// 
//for (let j = 0; j < 3; j++) {
//  setTimeout(function () {    
//    console.log('let j =', j);
//  }, 100);
//}

//let nama = "Ubay"; //! Praktik Menulis Kode 1
//let kelas = "XII RPL";
//console.log("Nama Saya " + nama + " kelas " + kelas);

//function hitungLuasPersegi(sisi) //! Praktik Menulis Kode 2
//{
//    let luas = sisi * sisi;
//    console.log("Luas persegi adalah " + luas)
//    return luas;
//}
//hitungLuasPersegi(5)

//if(true){ //! Praktik Menulis Kode 3
//    let pesan = "secret";
//    console.log("pesan didalam: ", pesan);
//}
//console.log("pesan diluar", pesan);

const dataSiswa = [
    {nama: "bayu", nilai: [75, 80, 85]},
    {nama: "ubi", nilai: [90, 95, 100]}
];

for(let i = 0; i < dataSiswa.length; i++) {
    let TotalNilai = 0;
    let nilaiSiswa = dataSiswa[i].nilai;

    for (let j = 0; j < nilaiSiswa.length; j++) {
        TotalNilai += nilaiSiswa[j];
    }
    let rataRata = TotalNilai/nilaiSiswa.length;
    console.log(`Rata - rata nilai ${dataSiswa[i].nama} adalah: ${rataRata}`);
}