const incrementQty = (qty) => limitQty(qty) + 1;
const decrementQty = (qty) => limitQty(qty) - 1;

function recalculateSubtotal(price, qty) {
    return price * qty;
}

function diskon(qty, price, code) {
    if (code != null) {
        if (code == "50off") {
            return recalculateSubtotal(qty, price) - (recalculateSubtotal(qty, price) * 50 / 100);
        } else {
            return recalculateSubtotal(qty, price);
        }
    } else {
        return recalculateSubtotal(qty, price);
    }
}

const limitQty = (qty) => {
    if (parseInt(qty) <= 1) {
        return parseInt(1);
    } 
    else {
        return parseInt(qty);
    }
}

module.exports = { 
    incrementQty, 
    decrementQty,
    recalculateSubtotal,
    diskon,
    limitQty
};
