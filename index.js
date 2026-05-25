import { hitungNilai } from "./calc.js";
try {
    const nilai = [80, 70, 60, 50, 40];
    hitungNilai(nilai);
    const hasil = hitungNilai(nilai);
    console.log(`Nilai Max: ${hasil.max}`);
    console.log(`Nilai Min: ${hasil.min}`);
    console.log(`Nilai Average: ${hasil.average}`)
} catch (error) {
    console.error(error.message);
    return;
}




