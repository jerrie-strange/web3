from builtins import print
from solcx import compile_standard
with open("./SimpleStorage.sol", "r") as file:
    simple_storage_file = file.read()
# compile our solidity


compiled_sol = compile_standard(
    {
        "language": "solidity",
        "sources": {"SimpleSttorage.sol": {"content": simple_storage_file}},
        "settings": {
            "outputSelection": {"*": {"*": ["abi", "metadata", "evm.bytecode", "evm.sourceMap"]
                                      }
                                }
        },
    },
    solc_version="0.8.0",
)
print(compiled_sol)
