//SPDX-License-Identifier: MIT

pragma solidity ^0.7.6;

import "hardhat/console.sol";

contract Faucet {
    receive() external payable {}
    address public creator = 0x0ED6Cec17F860fb54E21D154b49DAEFd9Ca04106;

    function withdraw (address payable recepient) public {
        require(msg.sender == creator);
        recepient.transfer(100000000000000000);
    }
}
