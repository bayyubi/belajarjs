let dataString = "data string";
console.log(dataString);

//? Escaping String
let data1 = 'Ubay \tberkata "Apa Kabar dunia?"';
console.log(data1);
let data2 = "Bayu berkata \"Tidak baik-baik saja\"";
console.log(data2);
let data3 = "Ubay berjalan-jalan di tepi pantai, \nkereeen";
console.log(data3);
let data4 = 'Saya ingin masuk SMK\n"Pilihan sekolah SMKN 8"';
console.log(data4);

//? Literal String
let namaDepan = "Ubay";
let namaBelakang = "Rafi";
let umur = 7;
let namaLengkap = umur + " " + namaDepan + " " + namaBelakang;
let biodata = `nama: ${namaDepan}, umur: ${umur}`;
console.log(namaLengkap);
console.log(biodata);