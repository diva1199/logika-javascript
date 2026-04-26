/**
 * Fungsi untuk menentukan pembagian kasir
 * @param {number} n - Jumlah kasir
 * @param {number[]} pelanggan - Array pelanggan
 * @returns {number[]} - Array index kasir yang melayani
 */
function solusiAntrianKasir(n, pelanggan) {
    let antrianKasir = new Array(n).fill(0);
    let hasil = [];

    for (let i = 0; i < pelanggan.length; i++) {
        let minAntrian = Math.min(...antrianKasir);
        let indexKasirTerpilih = antrianKasir.indexOf(minAntrian);
        
        hasil.push(indexKasirTerpilih);
        
        antrianKasir[indexKasirTerpilih]++;
    }

    return hasil;
}

// Contoh Penggunaan
const n = 3;
const pelanggan = [1, 2, 3, 4, 5];
const output = solusiAntrianKasir(n, pelanggan);

console.log("Input Kasir:", n);
console.log("Input Pelanggan:", pelanggan);
console.log("Output Index Kasir:", output); 
