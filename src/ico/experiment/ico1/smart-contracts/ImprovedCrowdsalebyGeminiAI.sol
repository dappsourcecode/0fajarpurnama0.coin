// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

// Use the latest stable version of OpenZeppelin libraries
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
//import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol"; // For overflow protection

contract fpexpico0 is ERC20, ReentrancyGuard {

    // Address of the pre-minted token contract
    ERC20 public token;

    // Token price (how much token for every 1 ETH)
    uint256 public rate;

    // Address to receive ETH contributions
    address payable public wallet;

    // Crowdsale start and end timestamps (optional)
    uint256 public openingTime;
    uint256 public closingTime;

    // Keep track of total contributions
    uint256 public weiRaised;

    constructor(
        string memory name,
        string memory symbol,
        ERC20 _token, // Address of the pre-minted token contract
        uint256 _rate,
        address payable _wallet,
        uint256 _openingTime,
        uint256 _closingTime
    ) ERC20(name, symbol) {
        token = _token;
        rate = _rate;
        wallet = _wallet;
        openingTime = _openingTime;
        closingTime = _closingTime;
    }

    // Function to allow investors to contribute ETH (needs further review)
    function buyTokens() public payable nonReentrant {
        // Check if crowdsale is open (optional)
        require(isOpen(), "Crowdsale is not open");

        uint256 amount = msg.value;

        // Use SafeMath for division with overflow check
        //uint256 tokens = SafeMath.div(amount, pricePerToken);

        uint256 tokens = SafeMath.mul(amount, rate);

        //uint256 tokens = amount;

        // Ensure enough tokens are available and prevent overflow
        //require(tokens <= token.balanceOf(address(this)), "Insufficient tokens for sale");

        weiRaised += amount;

        // Transfer tokens to contributor from the pre-minted token contract
        token.transfer(msg.sender, tokens);

        // Send ETH to wallet using safeTransferETH
        //Address.safeTransferETH(wallet, amount);

        // Send ETH to wallet using default
        wallet.transfer(amount);

        // Emit an event to track contributions
        emit BuyTokens(msg.sender, amount, tokens);
    }

    // Function to check if the crowdsale is open (optional)
    function isOpen() public view returns (bool) {
        if (openingTime == 0 && closingTime == 0) {
            return true;
        } else {
            return block.timestamp >= openingTime && block.timestamp <= closingTime;
        }
    }

    // Events for tracking contributions (optional)
    event BuyTokens(address indexed buyer, uint256 amount, uint256 tokens);
}