let dataBolean = (10>7); //? True, karena 10 lebih besar dari 7
console.log(dataBolean)

let dataBoolean = 10<=10;
console.log(dataBoolean);

let data1 = 3=="3"; //? True, karena nilai integer dan string sama
console.log(data1); //! Hindari praktik ini di kode modern! (Lose Equality)

let data2 = 4==="4"; //! Strict Equality
console.log(data2)

let data3 = 5!=="5" //! Strict Inquality
console.log(data3)