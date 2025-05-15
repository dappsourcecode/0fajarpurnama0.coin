let ico_rate;
let available_tokens;
let provider;
let signer;
let tokenabi;
let icoabi;
let token_contract_address;
let ico_contract_address;
let token_erc20;
let ico_erc20;

async function ico_smart_contract_interface(chainId) {
	provider = new ethers.providers.Web3Provider(window.ethereum);
	await provider.send("eth_requestAccounts", []);
	signer = provider.getSigner();

	switch (chainId) {
        case "0x1":
			try {
				ico_smart_contract_interface_initialization(token_contract_address_evm_1, tokenabi_evm_1, ico_contract_address_ethereum_1, icoabi_evm_1);
			} catch (error) {
				document.getElementById("status").innerHTML = error;
			}
			break;
		case "0xa86a":
			try {
				ico_smart_contract_interface_initialization(token_contract_address_evm_1, tokenabi_evm_1, ico_contract_address_avax_c_chain_1, icoabi_evm_1);
			} catch (error) {
				document.getElementById("status").innerHTML = error;
			}
			break;
        case "0x89":
			try {
				ico_smart_contract_interface_initialization(token_contract_address_evm_1, tokenabi_evm_1, ico_contract_address_polygon_1, icoabi_evm_1);
			} catch (error) {
				document.getElementById("status").innerHTML = error;
			}
            break;
		case "0xa4b1":
			try {
				ico_smart_contract_interface_initialization(token_contract_address_evm_1, tokenabi_evm_1, ico_contract_address_arbitrum_1, icoabi_evm_1);
			} catch (error) {
				document.getElementById("status").innerHTML = error;
			}
			break;
		case "0x38":
			try {
				ico_smart_contract_interface_initialization(token_contract_address_evm_1, tokenabi_evm_1, ico_contract_address_bsc_1, icoabi_evm_1);
			} catch (error) {
				document.getElementById("status").innerHTML = error;
			}
			break;
		case "0x9b75":
			try {
				ico_smart_contract_interface_initialization(token_contract_address_evm_1, tokenabi_evm_1, ico_contract_address_nrg_evm_1, icoabi_old_evm_1);
			} catch (error) {
				document.getElementById("status").innerHTML = error;
			}
		case "0x6c":
			try {
				ico_smart_contract_interface_initialization(token_contract_address_evm_1, tokenabi_evm_1, ico_contract_address_tt_1, icoabi_old_evm_1);
			} catch (error) {
				document.getElementById("status").innerHTML = error;
			}
			break;
		default:
			document.getElementById("buy").innerHTML = "Unavailable";
			document.getElementById("showChainID").innerHTML = "See Available ChainIDs";
			break;
	}
}

async function ico_smart_contract_interface_initialization(_token_contract_address, _tokenabi, _ico_contract_address, _icoabi) {
    token_contract_address = _token_contract_address;
    tokenabi = _tokenabi;
    ico_contract_address = _ico_contract_address;
    icoabi = _icoabi;

    document.getElementById("token_contract_address").innerHTML = token_contract_address;
    document.getElementById("ico_contract_address").innerHTML = ico_contract_address;

	try {
		token_erc20 = new ethers.Contract(token_contract_address, tokenabi, provider);
		document.getElementById("buy").innerHTML = "Getting available tokens in smart contract.";

		available_tokens = await token_erc20.balanceOf(ico_contract_address) / Math.pow(10, 18);
		document.getElementById("available_tokens").innerHTML = available_tokens;

		ico_erc20 = new ethers.Contract(ico_contract_address, icoabi, provider);

		document.getElementById("buy").innerHTML = "getting rate ...";
		try {
			const _ico_rate = await ico_erc20.rate();
			ico_rate = _ico_rate.toString();
			document.getElementById("purchase_amount").removeAttribute("disabled");
			document.getElementById("get_amount").removeAttribute("disabled");
	
			document.getElementById("buy").innerHTML = "buy";
		} catch (error) {
			document.getElementById("status").innerHTML = error + "<br> setting ico rate manually but you can still check the rate directly on the smart contract and buy ";
		} finally {
			ico_rate = 400000;
			document.getElementById("purchase_amount").removeAttribute("disabled");
			document.getElementById("get_amount").removeAttribute("disabled");
	
			document.getElementById("buy").innerHTML = "buy";
		}
	} catch (error) {
		document.getElementById("status").innerHTML = error;
	}
}

async function buy() {
	const purchaseAmountInETH = document.getElementById("purchase_amount").value;

	const amount = ethers.utils.parseEther(purchaseAmountInETH);

	try {
		/*const isOpen = await ico_erc20.isOpen(); // Check if ICO is open
		//console.log(isOpen);
		if (!isOpen) {
			throw new Error("ICO is not open for purchase");
		}*/

		const ico_buy = new ethers.Contract(ico_contract_address, icoabi, signer);
		await ico_buy.buyTokens({
			value: amount
		});
		// Handle successful purchase (e.g., display a confirmation message)
        document.getElementById("status").innerHTML = "done";
	} catch (error) {
		//console.log(error);
        document.getElementById("status").innerHTML = error;
		// Handle purchase errors (e.g., display an error message to the user)
	}
}