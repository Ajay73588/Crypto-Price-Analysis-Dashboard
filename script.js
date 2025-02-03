// Sample crypto data
const cryptocurrencies = [
    {
        name: "Bitcoin",
        symbol: "BTC",
        price: "$29,000",
        image: "https://cryptologos.cc/logos/bitcoin-btc-logo.png"
    },
    {
        name: "Ethereum",
        symbol: "ETH",
        price: "$1,800",
        image: "https://cryptologos.cc/logos/ethereum-eth-logo.png"
    },
    {
        name: "Binance Coin",
        symbol: "BNB",
        price: "$300",
        image: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png"
    },
    {
        name: "Cardano",
        symbol: "ADA",
        price: "$0.30",
        image: "https://cryptologos.cc/logos/cardano-ada-logo.png"
    },
    {
        name: "Solana",
        symbol: "SOL",
        price: "$25",
        image: "https://cryptologos.cc/logos/solana-sol-logo.png"
    },
    {
        name: "Ripple",
        symbol: "XRP",
        price: "$0.50",
        image: "https://cryptologos.cc/logos/xrp-xrp-logo.png"
    }
];

// Function to display cryptocurrencies
function displayCryptos() {
    const cryptoList = document.querySelector('.crypto-list');
    cryptoList.innerHTML = ''; // Clear existing cards

    cryptocurrencies.forEach(crypto => {
        const cryptoCard = document.createElement('div');
        cryptoCard.classList.add('crypto-card');

        cryptoCard.innerHTML = `
            <img src="${crypto.image}" alt="${crypto.name}">
            <h3>${crypto.name} (${crypto.symbol})</h3>
            <p>${crypto.price}</p>
        `;

        cryptoList.appendChild(cryptoCard);
    });
}

// Display cryptocurrencies when the page loads
window.onload = displayCryptos;