// wallet-connector.js
//import TonWeb from 'tonweb'; // If using a module bundler

const tonweb = new TonWeb(new TonWeb.HttpProvider('https://toncenter.com/api/v2/jsonRPC', 'YOUR_API_KEY')); // Replace with your API key or a different provider

let currentAddress;

async function connectWallet() {
    if (window.tonhub) {
        try {
            const wallet = await window.tonhub.send('ton_requestAccounts');
            currentAddress = wallet.address;
            console.log('Connected wallet address:', currentAddress);
            document.getElementById('recipientAddress').value = currentAddress;
            document.getElementById('connectButton').textContent = 'Wallet Connected';
            return currentAddress;
        } catch (e) {
            console.error('Wallet connection failed:', e);
            alert('Failed to connect wallet.');
            return null;
        }
    } else {
        alert('TON wallet not found. Please install a TON wallet (e.g., Tonkeeper).');
        return null;
    }
}

export { connectWallet, currentAddress };