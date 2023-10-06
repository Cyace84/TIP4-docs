# Collection
The collection contract differs from the TIP-4_nCollection contract. In simple terms, the collection contract is implemented to consolidate the functionalities provided by the TIP-4_nCollection contracts into a single contract. On the other hand, the TIP-4_nCollection contracts are responsible for providing the specific logic for each part of the standard.

For example, when it comes to minting NFTs, the [TIP-4_1 collection](https://github.com/itgoldio/everscale-tip/blob/main/contracts/TIP4_1/TIP4_1Collection.sol) contract provides the functionality to prepare the initial values required for minting and deploying the NFTs. However, it is the collection contract that fetches this data and deploys the NFT contract.

::: tip
Please refer to the "How to Use Library" section for more detailed instructions. You can find it at [ how to use library ](https://github.com/itgoldio/everscale-tip#how-to-use-library).
:::