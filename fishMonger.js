const { fishBoat } = require("./fishingBoat.js")



const mongerPurchase = () => {
    const fishBoatInventory = fishBoat();
    const purchaseArray = []
    for (const fishObject of fishBoatInventory) {
        if (fishObject.price <= 7.5 && fishObject.amount >= 10 ){
            fishObject.amount = 10
            purchaseArray.push(fishObject)
        }
    }
    return purchaseArray;
}

const mongerInventory = (dailyPriceLimit) => {
    const chefArray = []
    const mongerPurchaseArray = mongerPurchase()
    for (const fishObject of mongerPurchaseArray) {
        if(fishObject.price <= dailyPriceLimit) {
            fishObject.amount = Math.floor(fishObject.amount / 2)
            chefArray.push(fishObject)
        }

    }
    return chefArray;
}



module.exports = { mongerInventory }