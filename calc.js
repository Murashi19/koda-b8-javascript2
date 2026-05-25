
/**
 * Calculate the maximum, minimum, and average values ​​of an array
 * @param {number[]} nilai - Array of numeric values to be calculated
 * @returns {Object}  - An object containing the maximum, minimum, and average values
 * @throws {Error} - If the input is not an array, the array is empty, or the array elements are not numbers
 */

function hitungNilai(nilai) {
    // Validasi apakah array
    if (!Array.isArray(nilai)) {
        throw new Error("Input harus berupa array");
    }
    // Validasi apakah array kosong
    if (nilai.length === 0) {
        throw new Error("Array tidak boleh kosong");
    }
    let max = nilai[0];
    let min = nilai[0];
    let total = 0;
    for (let i = 0; i < nilai.length; i++) {
        // Validasi array harus berisi angka
        if (typeof nilai[i] !== "number") {
            throw new Error("Semua elemen array harus berupa angka");
        }
        if (nilai[i] > max) {
            max = nilai[i];
        }
        if (nilai[i] < min) {
            min = nilai[i];
        }
        total += nilai[i];
    }
    const average = total / nilai.length;

    return { max, min, average };
}
module.exports = { hitungNilai };