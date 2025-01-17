// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract BTC is ERC20, ERC20Burnable {
    constructor() ERC20("Bitcoin", "BTC") {
        _mint(msg.sender, 1_000_000_000_000 * 10**8 );
    }

    function decimals() public view virtual override returns (uint8) {
        return 8;
    }
}