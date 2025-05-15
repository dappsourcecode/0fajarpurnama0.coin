export async function connectWalletEVM() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const signerAddress = await signer.getAddress();
    const isConnected = true;

    // Fetch and display balance
    const balanceWei = await provider.getBalance(signerAddress);
    const balanceEth = ethers.utils.formatEther(balanceWei);
        
    return {provider, isConnected, signerAddress, balanceEth};
}