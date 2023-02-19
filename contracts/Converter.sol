// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract Converter {
    AggregatorV3Interface internal priceFeed;

    constructor() {
        priceFeed = AggregatorV3Interface(
            0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada
        );
    }

    //  MATIC/USD
    function getLatestPrice() public view returns (uint256) {
        // prettier-ignore
        (, int price, , ,) = priceFeed.latestRoundData();
        return uint256(price) * 10 ** (18 - getDecimals());
    }

    //  MATIC/USD
    function getDecimals() public view returns (uint8) {
        return priceFeed.decimals();
    }

    function getConversionRate(
        uint256 amountInMatic
    ) public view returns (uint256) {
        return (amountInMatic * getLatestPrice()) / (10 ** 18);
    }
}
