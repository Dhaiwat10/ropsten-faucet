//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Faucet {
    receive() external payable {}
    address public owner;

    constructor(address _owner) {
        owner = _owner;
    }

    function withdraw (address payable recepient) public {
        require(msg.sender == owner);
        recepient.transfer(0.005 ether);
    }
}
