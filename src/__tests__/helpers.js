/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

const {
    incrementQty,
    decrementQty,
    recalculateSubtotal,
    diskon
} = require('../helpers.js')

test('Qty 1 jika ditambah 1 hasilnya 2', () =>{
    expect(incrementQty(1)).toBe(2);
});


test('Qty 1 jika ditambah "1" hasilnya 2', () =>{
    expect(incrementQty("1")).toBe(2);
});

test('Subtotal dari 25000 dan qty 2 adalah 50000', () => {
    expect(recalculateSubtotal(25000,2)).toBe(50000);
});

test("kode diskon 50 off, 50000 * 1 * 50/100 hasilnya 25000", () => {
    expect(diskon(1, 50000, "50off")).toBe(25000);
});

