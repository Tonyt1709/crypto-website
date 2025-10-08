document.addEventListener('DOMContentLoaded', () => {
    const coinList = document.getElementById('coin-list');

    // Sample cryptocurrency data (replace with API call for real-time data)
    const cryptocurrencies = [
        {
            name: 'Bitcoin',
            symbol: 'BTC',
            description: 'The first and most well-known cryptocurrency, created in 2009 by Satoshi Nakamoto.',
            logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'
        },
        {
            name: 'Ethereum',
            symbol: 'ETH',
            description: 'A decentralized platform for smart contracts, launched in 2015 by Vitalik Buterin.',
            logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png'
        },
        {
            name: 'Solana',
            symbol: 'SOL',
            description: 'A high-performance blockchain for scalable decentralized applications.',
            logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png'
        }
    ];

    // Dynamically create coin cards
    cryptocurrencies.forEach(coin => {
        const coinCard = document.createElement('div');
        coinCard.classList.add('coin-card');
        coinCard.innerHTML = `
            <img src="${coin.logo}" alt="${coin.name} logo">
            <h3>${coin.name} (${coin.symbol})</h3>
            <p>${coin.description}</p>
        `;
        coinList.appendChild(coinCard);
    });

    // Handle form submission (basic example)
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Form submitted! (This is a placeholder action.)');
        contactForm.reset();
    });
});
