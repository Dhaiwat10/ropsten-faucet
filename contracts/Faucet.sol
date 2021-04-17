//SPDX-License-Identifier: MIT

pragma solidity ^0.7.6;

import "hardhat/console.sol";

contract Faucet {
    receive() external payable {}

    function withdraw (address payable recepient) public {
        recepient.transfer(100000000000000000);
    }
}
