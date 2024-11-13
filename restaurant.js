const { mongerInventory } = require("./fishMonger.js")

const fishMenu = (dailyPriceLimit) => {
    const chefPurchasesArray = mongerInventory(dailyPriceLimit);
   
   
     
  for (const fishObj of chefPurchasesArray) {
      itemHTML += `\n\t<h2>${fishObj.species}</h2>
      <section class="menu__item">${fishObj.species} Soup</section>
      <section class="menu__item">${fishObj.species} Sandwich</section>
      <section class="menu__item">Grilled ${fishObj.species}</section>`
  }

        const menuHTML = `<h1>Menu</h1>\n<article class="menu">\n${itemHTML}\n</article>`
        
        return menuHTML;
    }
    

    

module.exports = { fishMenu }

