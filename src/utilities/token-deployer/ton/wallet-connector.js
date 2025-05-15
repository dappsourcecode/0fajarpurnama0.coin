// Import TON libraries (ensure these are available in your environment)
const TON_CONNECT_UI = window.TON_CONNECT_UI;

// Constants
const jettonMinterCodeBOC = "te6ccgECDQEAApwAART/APSkE/S88sgLAQIBYgIDAgLMBAUCA3pgCwwC8dkGOASS+B8ADoaYGAuNhJL4HwfSB9IBj9ABi465D9ABj9ABgBaY/pn/aiaH0AfSBqahhACqk4XUcZmpqbGyiaY4L5cCSBfSB9AGoYEGhAMGuQ/QAYEogaKCF4BQpQKBnkKAJ9ASxni2ZmZPaqcEEIPe7L7yk4XXGBQGBwCTtfBQiAbgqEAmqCgHkKAJ9ASxniwDni2ZkkWRlgIl6AHoAZYBkkHyAODpkZYFlA+X/5Og7wAxkZYKsZ4soAn0BCeW1iWZmZLj9gEBwDY3NwH6APpA+ChUEgZwVCATVBQDyFAE+gJYzxYBzxbMySLIywES9AD0AMsAyfkAcHTIywLKB8v/ydBQBscF8uBKoQNFRchQBPoCWM8WzMzJ7VQB+kAwINcLAcMAkVvjDQgBpoIQLHa5c1JwuuMCNTc3I8ADjhozUDXHBfLgSQP6QDBZyFAE+gJYzxbMzMntVOA1AsAEjhhRJMcF8uBJ1DBDAMhQBPoCWM8WzMzJ7VTgXwWED/LwCQA+ghDVMnbbcIAQyMsFUAPPFiL6AhLLassfyz/JgEL7AAH+Nl8DggiYloAVoBW88uBLAvpA0wAwlcghzxbJkW3ighDRc1QAcIAYyMsFUAXPFiT6AhTLahPLHxTLPyP6RDBwuo4z+ChEA3BUIBNUFAPIUAT6AljPFgHPFszJIsjLARL0APQAywDJ+QBwdMjLAsoHy//J0M8WlmwicAHLAeL0AAoACsmAQPsAAH2tvPaiaH0AfSBqahg2GPwUALgqEAmqCgHkKAJ9ASxniwDni2ZkkWRlgIl6AHoAZYBk/IA4OmRlgWUD5f/k6EAAH68W9qJofQB9IGpqGD+qkEA=";
const jettonWalletCodeBOC = "te6ccgECEQEAAyMAART/APSkE/S88sgLAQIBYgIDAgLMBAUAG6D2BdqJofQB9IH0gahhAgHUBgcCASAICQDDCDHAJJfBOAB0NMDAXGwlRNfA/AM4PpA+kAx+gAxcdch+gAx+gAwc6m0AALTH4IQD4p+pVIgupUxNFnwCeCCEBeNRRlSILqWMUREA/AK4DWCEFlfB7y6k1nwC+BfBIQP8vCAAET6RDBwuvLhTYAIBIAoLAIPUAQa5D2omh9AH0gfSBqGAJpj8EIC8aijKkQXUEIPe7L7wndCVj5cWLpn5j9ABgJ0CgR5CgCfQEsZ4sA54tmZPaqQB8VA9M/+gD6QCHwAe1E0PoA+kD6QNQwUTahUirHBfLiwSjC//LiwlQ0QnBUIBNUFAPIUAT6AljPFgHPFszJIsjLARL0APQAywDJIPkAcHTIywLKB8v/ydAE+kD0BDH6ACDXScIA8uLEd4AYyMsFUAjPFnD6AhfLaxPMgMAgEgDQ4AnoIQF41FGcjLHxnLP1AH+gIizxZQBs8WJfoCUAPPFslQBcwjkXKRceJQCKgToIIJycOAoBS88uLFBMmAQPsAECPIUAT6AljPFgHPFszJ7VQC9ztRND6APpA+kDUMAjTP/oAUVGgBfpA+kBTW8cFVHNtcFQgE1QUA8hQBPoCWM8WAc8WzMkiyMsBEvQA9ADLAMn5AHB0yMsCygfL/8nQUA3HBRyx8uLDCvoAUaihggiYloBmtgihggiYloCgGKEnlxBJEDg3XwTjDSXXCwGAPEADXO1E0PoA+kD6QNQwB9M/+gD6QDBRUaFSSccF8uLBJ8L/8uLCBYIJMS0AoBa88uLDghB73ZfeyMsfFcs/UAP6AiLPFgHPFslxgBjIywUkzxZw+gLLaszJgED7AEATyFAE+gJYzxYBzxbMye1UgAHBSeaAYoYIQc2LQnMjLH1Iwyz9Y+gJQB88WUAfPFslxgBDIywUkzxZQBvoCFctqFMzJcfsAECQQIwB8wwAjwgCwjiGCENUydttwgBDIywVQCM8WUAT6AhbLahLLHxLLP8ly+wCTNWwh4gPIUAT6AljPFgHPFszJ7VQ=";
const adminAddress = 'UQBF0k8bkfbOaz4hBgP2v0C_lp2I4zifUTEc0Hi5-rhduybX'; // Replace with your actual admin address

// Initialize TON Connect UI
const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
    manifestUrl: 'https://0fajarpurnama0.github.io/assets/json/ton_connect_manifest.json',
    buttonRootId: 'ton-connect',
});

// DOM Elements
const deployButton = document.getElementById('deploy-button');
const statusDiv = document.getElementById('status');
const networkInfoDiv = document.getElementById('networkInfo');
const tokenNameInput = document.getElementById('tokenName');
const tokenSymbolInput = document.getElementById('tokenSymbol');
const initialSupplyInput = document.getElementById('initialSupply');
const recipientAddressInput = document.getElementById('recipientAddress');
const feePercentageRadio = document.getElementById('feePercentage');
const feeFixedRadio = document.getElementById('feeFixed');
const youReceiveDiv = document.getElementById('youReceiveValue');
const iReceiveDiv = document.getElementById('iReceiveValue');
const discountDiv = document.getElementById('0FP0EXP_balance');

// Constants
const DECIMALS = 9;
const DEPLOYMENT_FEE = '50000000'; // 0.05 TON in nanoton
const MINT_FEE = '10000000'; // 0.01 TON in nanoton
const FIXED_FEE = '10000000'; // 0.01 TON in nanoton
const PERCENTAGE_FEE = 10; // 10%

// Update fee display dynamically
function updateFeeDisplay() {
    const supply = parseFloat(initialSupplyInput.value) || 0;
    const symbol = tokenSymbolInput.value || 'TOK';
    if (feePercentageRadio.checked) {
        const feeAmount = (supply * PERCENTAGE_FEE) / 100;
        youReceiveDiv.textContent = `You Receive: ${supply - feeAmount} ${symbol}`;
        iReceiveDiv.textContent = `Admin Receives: ${feeAmount} ${symbol}`;
    } else if (feeFixedRadio.checked) {
        youReceiveDiv.textContent = `You Receive: ${supply} ${symbol}`;
        iReceiveDiv.textContent = `Admin Receives: 0.01 TON`;
    } else {
        youReceiveDiv.textContent = 'Select a fee option';
        iReceiveDiv.textContent = '';
    }
}

// Placeholder for 0FP0EXP balance check
async function check0FP0EXPBalance(address) {
    // TODO: Implement balance check with TON API if needed
    discountDiv.textContent = 'N/A (Balance check not implemented)';
    return 0; // Placeholder return
}

// Validate user inputs
function validateInputs() {
    const tokenName = tokenNameInput.value.trim();
    const tokenSymbol = tokenSymbolInput.value.trim();
    const initialSupply = parseFloat(initialSupplyInput.value);
    const recipientAddress = recipientAddressInput.value.trim();

    if (!tokenName) {
        statusDiv.textContent = 'Error: Token name is required.';
        return false;
    }
    if (!tokenSymbol) {
        statusDiv.textContent = 'Error: Token symbol is required.';
        return false;
    }
    if (isNaN(initialSupply) || initialSupply <= 0) {
        statusDiv.textContent = 'Error: Initial supply must be a positive number.';
        return false;
    }
    if (!recipientAddress) {
        statusDiv.textContent = 'Error: Recipient address is required.';
        return false;
    }
    try {
        console.log(recipientAddress);
        window.ton.Address.parse(recipientAddress);
        console.log('Parsed address:', recipientAddress);
    } catch (e) {
        statusDiv.textContent = 'Error: Invalid recipient address.';
        return false;
    }
    return true;
}

// Handle wallet connection status
tonConnectUI.onStatusChange(async (status) => {
    const isConnected = tonConnectUI.connected;
    if (isConnected) {
        const address = tonConnectUI.account.address;
        recipientAddressInput.value = address;
        deployButton.disabled = false;
        statusDiv.textContent = `Connected to wallet: ${address.slice(0, 6)}...${address.slice(-4)}`;
        networkInfoDiv.textContent = 'Network: Testnet'; // Adjust if mainnet is used
        await check0FP0EXPBalance(address);
        updateFeeDisplay();
    } else {
        deployButton.disabled = true;
        statusDiv.textContent = 'Please connect your wallet to start.';
        networkInfoDiv.textContent = 'Network: Not connected';
        recipientAddressInput.value = '';
    }
});

// Add input listeners for real-time updates
initialSupplyInput.addEventListener('input', updateFeeDisplay);
tokenSymbolInput.addEventListener('input', updateFeeDisplay);
feePercentageRadio.addEventListener('change', updateFeeDisplay);
feeFixedRadio.addEventListener('change', updateFeeDisplay);

// Deploy Jetton contract
deployButton.addEventListener('click', async () => {
    if (!validateInputs()) return;

    try {
        statusDiv.textContent = 'Preparing deployment...';

        // Parse BOC to Cells
        const minterCodeCell = ton.Cell.fromBase64(jettonMinterCodeBOC);
        const walletCodeCell = ton.Cell.fromBase64(jettonWalletCodeBOC);

        // Construct metadata with Buffer keys
        const metadata = ton.Dictionary.empty(ton.Dictionary.Keys.Buffer(32), ton.Dictionary.Values.Cell());
        const keys = ['name', 'symbol', 'decimals'];
        const values = [
            ton.beginCell().storeStringTail(tokenNameInput.value).endCell(),
            ton.beginCell().storeStringTail(tokenSymbolInput.value).endCell(),
            ton.beginCell().storeUint(DECIMALS, 8).endCell(),
        ];
        keys.forEach((key, index) => {
            metadata.set(Buffer.from(key, 'utf-8'), values[index]);
        });
        const contentCell = ton.beginCell().storeDict(metadata).endCell();

        // Construct initial data
        const adminAddr = ton.Address.parse(recipientAddressInput.value);
        const dataCell = ton.beginCell()
            .storeCoins(0) // Initial total_supply
            .storeAddress(adminAddr)
            .storeRef(contentCell)
            .storeRef(walletCodeCell)
            .endCell();

        // Calculate minter address
        const minterAddress = ton.contractAddress(0, { code: minterCodeCell, data: dataCell });

        // Deploy minter contract
        const deployTx = {
            validUntil: Math.floor(Date.now() / 1000) + 60,
            messages: [{
                address: minterAddress.toString(),
                amount: DEPLOYMENT_FEE,
                stateInit: {
                    code: minterCodeCell.toBoc().toString('base64'),
                    data: dataCell.toBoc().toString('base64'),
                },
                payload: '',
            }],
        };
        statusDiv.textContent = 'Deploying minter contract...';
        await tonConnectUI.sendTransaction(deployTx);

        // Calculate mint amounts
        const initialSupply = parseFloat(initialSupplyInput.value);
        const totalAmount = BigInt(Math.floor(initialSupply * 10 ** DECIMALS));
        let userAmount = totalAmount;
        let feeAmount = BigInt(0);
        let fixedFeeMessage = null;

        if (feePercentageRadio.checked) {
            feeAmount = (totalAmount * BigInt(PERCENTAGE_FEE)) / BigInt(100);
            userAmount = totalAmount - feeAmount;
        } else if (feeFixedRadio.checked) {
            fixedFeeMessage = {
                address: adminAddress,
                amount: FIXED_FEE,
                payload: '',
            };
        }

        // Construct mint payload
        const masterMsg = ton.beginCell()
            .storeUint(0xf8a7ea5, 32) // transfer opcode
            .storeUint(0, 64) // query_id
            .storeCoins(userAmount)
            .storeAddress(adminAddr)
            .storeAddress(adminAddr)
            .storeCoins(0) // custom_payload
            .storeCoins(ton.toNano('0.05')) // forward_ton_amount
            .storeUint(0, 1) // forward_payload
            .endCell();

        const mintPayload = ton.beginCell()
            .storeUint(0x18, 32) // mint opcode (verify if correct)
            .storeUint(0, 64) // query_id
            .storeCoins(userAmount)
            .storeAddress(adminAddr)
            .storeRef(masterMsg)
            .endCell();

        // Construct mint transaction
        const mintMessages = [{
            address: minterAddress.toString(),
            amount: MINT_FEE,
            payload: mintPayload.toBoc().toString('base64'),
        }];

        if (feePercentageRadio.checked && feeAmount > 0) {
            const feeMasterMsg = ton.beginCell()
                .storeUint(0xf8a7ea5, 32)
                .storeUint(0, 64)
                .storeCoins(feeAmount)
                .storeAddress(ton.Address.parse(adminAddress))
                .storeAddress(ton.Address.parse(adminAddress))
                .storeCoins(0)
                .storeCoins(ton.toNano('0.05'))
                .storeUint(0, 1)
                .endCell();

            const feeMintPayload = ton.beginCell()
                .storeUint(0x18, 32)
                .storeUint(0, 64)
                .storeCoins(feeAmount)
                .storeAddress(ton.Address.parse(adminAddress))
                .storeRef(feeMasterMsg)
                .endCell();

            mintMessages.push({
                address: minterAddress.toString(),
                amount: MINT_FEE,
                payload: feeMintPayload.toBoc().toString('base64'),
            });
        }

        if (fixedFeeMessage) {
            mintMessages.push(fixedFeeMessage);
        }

        const mintTx = {
            validUntil: Math.floor(Date.now() / 1000) + 60,
            messages: mintMessages,
        };

        statusDiv.textContent = 'Minting initial supply...';
        await tonConnectUI.sendTransaction(mintTx);

        statusDiv.textContent = `Jetton deployed successfully! Minter address: ${minterAddress.toString()}`;
    } catch (error) {
        console.error(error);
        statusDiv.textContent = `Error: ${error.message || 'Deployment failed. Please try again.'}`;
    }
});