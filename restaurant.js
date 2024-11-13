const { mongerInventory } = require("./fishMonger.js")

const fishMenu = (dailyPriceLimit) => {
    const chefPurchasesArray = mongerInventory(dailyPriceLimit);
   

    let itemHTML = chefPurchasesArray.map((fishObj) => 
        `\n\t<h2>${fishObj.species}</h2>
        <section class="menu__item">${fishObj.species} Soup</section>
        <section class="menu__item">${fishObj.species} Sandwich</section>
        <section class="menu__item">Grilled ${fishObj.species}</section>` 
    ).join('')
        
       

        const menuHTML = `<h1>Menu</h1>\n<article class="menu">\n${itemHTML}\n</article>`
        
        return menuHTML;
    }
    

    

module.exports = { fishMenu }

