// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract fpexpico0 is ERC20, ReentrancyGuard {
    ERC20 public token;
    uint256 public rate;
    address payable public wallet;
    uint256 public openingTime;
    uint256 public closingTime;
    uint256 public weiRaised;
    uint256 public tokenSold;

    constructor(
        string memory name,
        string memory symbol,
        ERC20 _token,
        uint256 _rate,
        address payable _wallet,
        uint256 _openingTime,
        uint256 _closingTime
    ) ERC20(name, symbol) {
        require(_rate > 0, "Rate should be greater than 0");
        require(_wallet != address(0), "Wallet is the zero address");
        require(_openingTime < _closingTime, "Opening time must be before closing time");

        token = _token;
        rate = _rate;
        wallet = _wallet;
        openingTime = _openingTime;
        closingTime = _closingTime;
    }

    function buyTokens() public payable nonReentrant {
        require(isOpen(), "Crowdsale is not open");
        uint256 tokens = SafeMath.mul(msg.value, rate);
        require(tokens <= token.balanceOf(address(this)), "Insufficient tokens for sale");

        weiRaised += msg.value;
        tokenSold += tokens;
        token.transfer(msg.sender, tokens);
        wallet.transfer(msg.value);

        emit BuyTokens(msg.sender, msg.value, tokens);
    }

    function isOpen() public view returns (bool) {
        return block.timestamp >= openingTime && block.timestamp <= closingTime;
    }

    event BuyTokens(address indexed buyer, uint256 amount, uint256 tokens);
}