# TIP-4_Royalty

Requires: [TIP-6.1](./6.md)

## Overview
This standard enables NFT marketplaces and owners of NFT collections to retrieve royalty data for desired collections and associated NFTs. It adapts the Ethereum EIP-2981 standard to the TVM (Ton Virtual Machine) based blockchains.

NFT marketplaces should consider implementing this feature into their platforms to retrieve royalty amounts and pay the NFT creators right from each sell on the specific nft. While this feature is optional, many NFT marketplaces voluntarily provide it to attract artists and NFT creators.

It also Enables all NFT marketplaces to unify on a single royalty payment standard will benefit the entire NFT ecosystem.

# Royalty
Royalty is an percentage deducted from the total sale price paid to the original creator of an NFT each time the NFT is sold to another person. The creator sets the royalty amount in the NFT contract.

In the Tip-4 standard, the royalty amount can be specified separately for each NFT. For example, NFT number 1 can have a royalty with a certain percentage, while other NFTs may have different royalty amounts.

::: warning
Notice that the any nft contract that supports the TIP4 standard may set the royalty amount inside of the collection contract or the nft contract but the nft marketplace should perform on the royalty set into each nft being sold independently.
:::

Royalty provides a passive income source for NFT creators and encourages other creators to utilize this feature alongside the promotional power of the NFT marketplace platform.

It is important to note that the creator will not receive any royalty amount from the first **sale**. However, starting from the second sale and subsequent sales, the creator will receive a royalty amount based on the unit of currency in which the NFT is sold.

::: tip
For precise specifications, you can refer to the Venom Foundation documentation on NFT royalty (VEP-2981) at the following link:\
https://docs.venom.foundation/standards/VEP/vep-2981
:::

# Motivation

This standard is intended for NFT marketplaces that wish to support ongoing funding for artists and other NFT creators. The payment of royalties should be voluntary, as transfer mechanisms do not always imply a sale has occurred.

NFT marketplaces can utilize royalties to allocate a percentage of sales on their platform to the creators of the NFT collections. This helps protect the rights of NFT collection creators.

---

## Contract Specification

The `TIP-4_1` contains two contracts:

- [ `TIP-4RoyaltyCollection` ](https://github.com/broxus/tip4/blob/master/contracts/TIP4_1/TIP4_1Collection.tsol)
- [ `TIP-4RoyaltyNFT` ](https://github.com/broxus/tip4/blob/master/contracts/TIP4_1/TIP4_1Nft.tsol)



### TIP-4RoyaltyCollection
This contract has no more added functionality or state variable than previous implementation of the collection contract. see[TIP4_3Collection](./43.md#contract-specification) implementation

### TIP-4RoyaltyNft
This contract accept the royalty parameters in its constructor and is able to calculate and save the royalty information of the nft in its state.


