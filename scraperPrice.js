const puppeteer = require('puppeteer');

async function scrapeTokenPrice() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://photon-sol.tinyastro.io/en/lp/HXV4KNFCBzajRN8A4JFfxot732VQKaX911FibFZQbe4H?handle=9707797f6c574204d3011');

    // Usa el selector correcto para obtener el precio
    const priceSelector = 'div.p-show__widget__td__value'; // Ajusta esto al selector correcto
    const price = await page.$eval(priceSelector, el => el.textContent.trim());

    console.log(`Precio del token: ${price}`);

    await browser.close();
}

// Ejecuta la función
scrapeTokenPrice();
