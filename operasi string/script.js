//! charAt
let kata = "ABCDEF";
console.log(kata.charAt(0)); //? A
console.log(kata.charAt(1)); //? B
console.log(kata.charAt(2)); //? C
console.log(kata.charAt(3)); //? D
console.log(kata.charAt(4)); //? E
console.log(kata.charAt(5)); //? F
console.log(kata.charAt(6)); //? Undefined

//! IndexOf
let namaLengkap = "Bayu Yuba";
console.log(namaLengkap.indexOf("B")); //? 0
console.log(namaLengkap.indexOf("y")); //? 3
console.log(namaLengkap.indexOf("u")); //? 2
console.log(namaLengkap.indexOf("a")); //? 7

//! Concat

let namaDepan = "Bayu";
let namaBelakang = "Yuba";
console.log(namaDepan.concat(" ", namaBelakang)); //? Bayu Yuba

//! Substring

let kata1 = "Belajar JavaScript";
console.log(kata1.substring(5, 12)); //? ar Java

//! Slice
let kata2 = "Bayu Belajar JavaScript";
console.log(kata2.slice(5, 12)); //? Belajar

//! Replace

let nama = "Budi Yuba";
console.log(nama.replace("Budi", "Bayu")); //? Bayu Yuba