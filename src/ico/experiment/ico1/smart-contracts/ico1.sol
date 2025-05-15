// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract fpexpico1 is ReentrancyGuard {
    IERC20 public token;
    uint256 public rate;
    address payable public wallet;
    uint256 public weiRaised;
    uint256 public tokenSold;

    event BuyTokens(address indexed buyer, uint256 amount, uint256 tokens);

    constructor() {
        token = IERC20(0x99a828fe0C1D68D9aeBBB8651CDBDbac65dc6207);
        rate = 400000;
        wallet = payable(0x6632EcF5D906bC8E148a425854F20652884BdC3C);
    }

    function buyTokens() public payable nonReentrant {
        require(msg.value > 0, "No Asset sent");

        uint256 tokens = msg.value * rate;
        require(tokens <= token.balanceOf(address(this)), "Insufficient tokens in contract");

        weiRaised += msg.value;
        tokenSold += tokens;

        require(token.transfer(msg.sender, tokens), "Token transfer failed");
        wallet.transfer(msg.value);

        emit BuyTokens(msg.sender, msg.value, tokens);
    }
}