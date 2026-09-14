let harga = 12000;
let jumlah = 3;

let total = harga * jumlah;
let diskon = total * 5/100;
let ppn = 11/100;
let hargadiskon = total - diskon;
let bayar = hargadiskon + (hargadiskon * ppn);

console.log(bayar)