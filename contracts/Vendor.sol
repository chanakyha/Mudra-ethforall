// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./Converter.sol";
import "./Mudra.sol";

contract Vendor is Ownable {
    Converter internal converter;
    Mudra internal mudra;

    constructor(address converterAddress, address mudraAddress) {
        converter = Converter(converterAddress);
        mudra = Mudra(mudraAddress);
    }

    function mint() public payable {
        mudra.mint(msg.sender, converter.getConversionRate(msg.value));
    }

    // buyback ?

    // withdraw matic
    function withdraw() public {
        (bool sent, ) = owner().call{value: (address(this).balance)}("");
        require(sent, "withdraw: failed");
    }

    receive() external payable {
        mint();
    }

    fallback() external payable {
        mint();
    }
}
