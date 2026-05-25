const { describe, it } = require('node:test');
const assert = require('assert');
const { hitungNilai } = require('./calc.js');

describe('hitungNilai', () => {
    it('should return max, min, and average of the array', () => {
        const nilai = [80, 70, 60, 50, 40];
        assert.equal(typeof hitungNilai(nilai), "object");
    });
    it('should return max, min, and average of the array', () => {
        const nilai = [];
        assert.throws(() => hitungNilai(nilai), { message: "Array tidak boleh kosong" });
    });
    it('should return max, min, and average of the array', () => {
        const nilai = [1, "a", 3, 4, 5];
        assert.throws(() => hitungNilai(nilai), { message: "Semua elemen array harus berupa angka" });
    });
    it('should return max, min, and average of the array', () => {
        const nilai = [80, 70, 60, 50, 40];
        let max = nilai[0];
        assert.equal(hitungNilai(nilai).max, max);
    });
    it('should error when parameter is not an array', () => {
        assert.throws(() => hitungNilai({ a: 1, b: 2, c: 3 }),
            { message: "Input harus berupa array" }
        );
    });
});