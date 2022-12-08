// SPDX-Licience-Identifier: MIT

pragma solidity ^0.8.0;

contract SimpleStorage {
    uint public name;

    function getname() public view returns (uint) {
        return name;
    }

    function setName(uint _name) public {
        name = _name;
    }
}
