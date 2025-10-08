document.addEventListener('DOMContentLoaded', () => {
    const coinList = document.getElementById('coin-list');

    // Function to fetch and display coin data
    async function fetchCoins() {
        coinList.innerHTML = '<p>Loading cryptocurrency data...</p>'; // Loading state
        try {
            const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h');
            if (!response.ok) {
                throw new Error(`API request failed: ${response.status}`);
            }
            const data = await response.json();

            // Clear loading message
            coinList.innerHTML = '';
            // Create coin cards
            data.forEach(coin => {
                const coinCard = document.createElement('div');
                coinCard.classList.add('coin-card');
                coinCard.innerHTML = `
                    <img src="${coin.image}" alt="${coin.name} logo">
                    <h3>${coin.name} (${coin.symbol.toUpperCase()})</h3>
                    <p>Price: $${coin.current_price.toLocaleString()}</p>
                    <p>24h Change: ${coin.price_change_percentage_24h.toFixed(2)}%</p>
                `;
                coinList.appendChild(coinCard);
            });
        } catch (error) {
            console.error('Error fetching CoinGecko API:', error);
            coinList.innerHTML = '<p>Unable to load coin data. Please try again later.</p>';
        }
    }

    // Call the fetch function
    fetchCoins();

    // Handle form submission (unchanged)
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Form submitted! (This is a placeholder action.)');
        contactForm.reset();
    });
});
