import { hitungNilai } from "./calc.js";


try {
    /**
     * @typedef {Object} NilaiHasil
     * @property {number} max - Nilai tertinggi dari array.
     * @property {number} min - Nilai terendah dari array.
     * @property {number} average - Nilai rata-rata dari array.
     */

    /**
     * Array of numeric values to be calculated.
     * @type {number[]}
     */
    const nilai = [80, 70, 60, 50, 40];
    /**
     * Value calculation results.
     * @type {NilaiHasil}
     */
    const hasil = hitungNilai(nilai);
    console.log(`Nilai Max: ${hasil.max}`);
    console.log(`Nilai Min: ${hasil.min}`);
    console.log(`Nilai Average: ${hasil.average}`)
} catch (error) {
    console.error(error.message);
    return;
}




