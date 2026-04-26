/**
 * Fungsi untuk menghitung jumlah ruangan rapat minimum
 * @param {number[][]} rapat - Array berisi [waktu_mulai, waktu_selesai]
 * @returns {number} - Jumlah ruangan minimum yang dibutuhkan
 */
function hitungRuanganRapat(rapat) {
    if (rapat.length === 0) return 0;

    const waktuMulai = rapat.map(r => r[0]).sort((a, b) => a - b);
    const waktuSelesai = rapat.map(r => r[1]).sort((a, b) => a - b);

    let jumlahRuangan = 0;
    let pointerSelesai = 0;

    for (let i = 0; i < waktuMulai.length; i++) {
        if (waktuMulai[i] < waktuSelesai[pointerSelesai]) {
            jumlahRuangan++;
        } else {
            pointerSelesai++;
        }
    }

    return jumlahRuangan;
}

// Test Case
const rapat = [[0, 30], [5, 10], [15, 20]];
const hasil = hitungRuanganRapat(rapat);

console.log("Input Rapat:", JSON.stringify(rapat));
console.log("Output Minimum Ruangan:", hasil); 

// Test Case 2
const rapat2 = [[0, 10], [10, 20]];
console.log("Input Rapat 2:", JSON.stringify(rapat2));
console.log("Output Minimum Ruangan 2:", hitungRuanganRapat(rapat2));