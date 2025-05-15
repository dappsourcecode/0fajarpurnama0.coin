let account;
async function connect() {
	try {
		const accounts = await ethereum.request({
			method: 'eth_requestAccounts'
		});
		account = accounts[0];

		if (ethereum.isConnected()) {
			document.getElementById("connect").innerHTML = account;
			document.getElementById("purchase_interface").style.display = "block";
			get_chain_id();
			getnativebalance(account);
		}
	} catch (error) {
		document.getElementById("status").innerHTML = error + "<br> Please install EVM wallet and accept connection request";
	}
}

ethereum.on('accountsChanged', connect);

ethereum.on("chainChanged", get_chain_id);

async function get_chain_id() {
	try {
		let chainId = await ethereum.request({
			method: "eth_chainId"
		});
		chain_ids.forEach(element => {
			if (chainId == element.chainId) {
				document.getElementById("showChainID").innerHTML = `<img style="max-height:1.5em; cursor: pointer;" src="` + element.iconUrls[0] + `" alt=""/> change chain?`;
				document.getElementById("currency_name").innerHTML = element.nativeCurrency.symbol;
			}
		});
		getnativebalance(account);
		ico_smart_contract_interface(chainId);	
	} catch (error) {
		document.getElementById("status").innerHTML = error;
		
	}
}

async function getnativebalance(_account) {
	try {
		const account = _account;
		let balance = await ethereum.request({
			method: 'eth_getBalance',
			params: [account, "latest"]
		});
		document.getElementById("native-balance").innerHTML = parseInt(balance, 16) / Math.pow(10, 18);	
	} catch (error) {
		document.getElementById("status").innerHTML = error;
		
	}
}

function chainid_menu() {
	if (getComputedStyle(document.getElementById("chainid_menu")).display != "none") {
		document.getElementById("chainid_menu").style.display = "none";
	} else {
		document.getElementById("chainid_menu").style.display = "block";
	}
}

for (let index = 0; index < chain_ids.length; index++) {
	document.getElementById("chainids_list").innerHTML += `
    <div style="cursor: pointer;" onclick="changenetwork(` + index + `); chainid_menu()">
    <img src="` + chain_ids[index].iconUrls[0] + `" alt="` + chain_ids[index].chainName + `" onerror="this.onerror=null;this.src='` + chain_ids[index].iconUrls[1] + `';"/>
    </div>
`;
}

async function changenetwork(index) {
	try {
		await ethereum.request({
			method: 'wallet_switchEthereumChain',
			params: [{
				chainId: chain_ids[index].chainId
			}],
		});
		get_chain_id();
	} catch (switchError) {
		// This error code indicates that the chain has not been added to MetaMask.
		if (switchError.code === 4902) {
			try {
				await ethereum.request({
					method: 'wallet_addEthereumChain',
					params: [chain_ids[index]],
				});
				get_chain_id();
			} catch (addError) {
				// handle "add" error
				document.getElementById("status").innerHTML = addError;
			}
		}
		// handle other "switch" errors
		document.getElementById("status").innerHTML = switchError;
	}
}