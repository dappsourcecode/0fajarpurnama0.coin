const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
  manifestUrl: 'https://0fajarpurnama0.github.io/assets/json/ton_connect_manifest.json', // or local path
  buttonRootId: 'connect',
});

let wallet = null;

tonConnectUI.onStatusChange((walletInfo) => {
  wallet = walletInfo;
  console.log('Connected wallet:', wallet);
});

const { Cell, Address, toNano } = window.ton;

async function fetchJettonCode() {
  // these URLs host the precompiled BOCs for the standard Jetton contracts
  const ROOT_URL   = 'https://ton-blockchain.github.io/ton-token-contracts/jetton-minter/v1.0/jetton_root.boc';
  const WALLET_URL = 'https://ton-blockchain.github.io/ton-token-contracts/jetton-minter/v1.0/jetton_wallet.boc';

  // fetch as ArrayBuffer → wrap in Uint8Array → parse
  const [rootBuf, walletBuf] = await Promise.all([
    fetch(ROOT_URL).then(r => r.arrayBuffer()),
    fetch(WALLET_URL).then(r => r.arrayBuffer())
  ]);

  const rootCell   = Cell.fromBoc(new Uint8Array(rootBuf))[0];
  const walletCell = Cell.fromBoc(new Uint8Array(walletBuf))[0];
  return { root: rootCell, wallet: walletCell };
}

async function deployJetton() {
  // Example metadata
  const metadata = {
    name: "MyToken",
    symbol: "MTK",
    description: "Test Jetton",
    decimals: "6",
    image: "https://0fajarpurnama0.github.io/assets/images/icon/0fp0exp-logo-circle.png",
  };

  // Encode metadata to a Cell
  const contentCell = new Cell();
  const offChainUri = "data:application/json," + encodeURIComponent(JSON.stringify(metadata));
  const uriBytes = new TextEncoder().encode(offChainUri);
  contentCell.bits.writeUint(0x01, 8); // offchain content prefix
  contentCell.bits.writeBuffer(Buffer.from(uriBytes));

  // Supply, admin address, content cell
  const totalSupply = toNano("1000000"); // 1M MTK
  const admin = Address.parse(wallet.account.address); // from TonConnect
  const jettonCode = await fetchJettonCode(); // must fetch root + wallet code

  const init = createJettonInit(jettonCode.root, jettonCode.wallet, {
    owner: admin,
    content: contentCell,
    totalSupply,
  });

  // Send deploy transaction
  const payload = init.body;
  await tonConnectUI.sendTransaction({
    validUntil: Math.floor(Date.now() / 1000) + 600,
    messages: [{
      address: init.address.toString(),
      amount: toNano("0.3").toString(), // enough to deploy
      payload: payload.toBoc().toString("base64"),
    }],
  });

  alert("Jetton deployment sent!");
}
