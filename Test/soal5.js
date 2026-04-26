class NodeKaryawan {
    constructor(id) {
        this.id = id;
        this.bawahan = []; 
    }

    tambahBawahan(node) {
        this.bawahan.push(node);
    }
}

/**
 * Fungsi untuk mencari Lowest Common Ancestor (LCA)
 * @param {NodeKaryawan} root - Node akar pohon
 * @param {number} a - ID Karyawan A
 * @param {number} b - ID Karyawan B
 * @returns {NodeKaryawan|null} - Node LCA
 */
function cariLCA(root, a, b) {
    if (!root || root.id === a || root.id === b) {
        return root;
    }

    let hasilBawahan = [];

    for (let nodeAnak of root.bawahan) {
        let res = cariLCA(nodeAnak, a, b);
        if (res) {
            hasilBawahan.push(res);
        }
    }

    if (hasilBawahan.length >= 2) {
        return root;
    }

    return hasilBawahan.length === 1 ? hasilBawahan[0] : null;
}

// --- SETUP DATA ---
const karyawan1 = new NodeKaryawan(1);
const karyawan2 = new NodeKaryawan(2);
const karyawan3 = new NodeKaryawan(3);
const karyawan4 = new NodeKaryawan(4);
const karyawan5 = new NodeKaryawan(5);

karyawan1.tambahBawahan(karyawan2);
karyawan1.tambahBawahan(karyawan3);
karyawan2.tambahBawahan(karyawan4);
karyawan2.tambahBawahan(karyawan5);

// --- TEST CASE ---
const A = 4, B = 5;
const lca = cariLCA(karyawan1, A, B);

console.log(`Mencari LCA dari ${A} dan ${B}...`);
console.log(`Output: ${lca ? lca.id : "Tidak ditemukan"}`); 

const A2 = 4, B2 = 3;
const lca2 = cariLCA(karyawan1, A2, B2);
console.log(`Mencari LCA dari ${A2} dan ${B2}...`);
console.log(`Output: ${lca2 ? lca2.id : "Tidak ditemukan"}`); 