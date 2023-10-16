# TIP-4_1 (Non-Fungible Token)

Requires: [TIP-6.1](.tip6.md)

## Overview

The following standard allows for implementing a standard API for NFTs within smart contracts. General information about NFT collection is stored in the NFT collection contract. Each NFT deployed in separate smart contracts and links to NFT collection contract.

This standard provides basic functionality to create, track transfer and destroy NFTs.

## Motivation

TIP-4_1 can be utilized by Dapps, marketplaces, wallets, and other platforms to retrieve and execute essential information and actions.

---
## Contract Specification

The `TIP-4_1` contains two contracts:

- [ `TIP-4_2Collection` ](https://github.com/broxus/tip4/blob/master/contracts/TIP4_1/TIP4_1Collection.tsol)
- [ `TIP-4_2NFT` ](https://github.com/broxus/tip4/blob/master/contracts/TIP4_1/TIP4_1Nft.tsol)


### TIP-4_1Collection

The contract represents shared information about NFT collection such as `totalSupply` and `supportedInterfaces` and logic for creation of NFTs.

### TIP-4_1NFT

The contract represents information about current NFT such as:

- `current owner`
- `current manager`
- `ID`
- `associated collection`

Two roles are responsible for the control logic of the NFT contract:

- `owner logic`
- `manager logic`

The owner’s address is the address that owns this NFT. The owner can see NFT in wallets, marketplaces, apps. The owner can use the NFT for authorization, for proof in games etc.

Manager address is the address that controls this NFT. Manager can burn NFT, can change the owner or change the manager (transfer the manager role).

Owner address and manager address can be same usually. When an NFT is put up for sale, it means that the manager's address is the address of the smart contract with the sell logic. It's same for farming logic or custom logic for use NFT.


## Visualization

### Legend

<br/>
<ImgContainer src= '/img/legend1.svg' width="100%" altText="deployAccountOutput"/>

### `Collection` deployment

<br/>
<ImgContainer src= '/img/collection.svg' width="100%" altText="deployAccountOutput"/>

### Minting

<br/>
<ImgContainer src= '/img/mint.svg' width="100%" altText="deployAccountOutput"/>

### Burning

<br/>
<ImgContainer src= '/img/burn.svg' width="100%" altText="deployAccountOutput"/>

### Change owner

<br/>
<ImgContainer src= '/img/changeOwner.svg' width="100%" altText="deployAccountOutput"/>

### Change manager

<br/>
<ImgContainer src= '/img/changeManager.svg' width="100%" altText="deployAccountOutput"/>

### Example how to use NFT. Put on sell using changeManager()

<br/>
<ImgContainer src= '/img/sell.svg' width="100%" altText="deployAccountOutput"/>

### Example how to use NFT. Buy using changeOwner()

<br/>
<ImgContainer src= '/img/buy.svg' width="100%" altText="deployAccountOutput"/>

### Example how to use NFT. Put on sell by TIP-3.1 tokens

<br/>
<ImgContainer src= '/img/tip3sell.svg' width="100%" altText="deployAccountOutput"/>


### Example how to use NFT. Buy for TIP-3.1 tokens

<br/>
<ImgContainer src= '/img/tip3buy.svg' width="100%" altText="deployAccountOutput"/>

<script lang="ts" >
import { defineComponent, ref, onMounted } from "vue";
import ImgContainer from "../../../.vitepress/theme/components/shared/BKDImgContainer.vue"

export default defineComponent({
  name: "Diagrams",
  components :{
    ImgContainer
  },
  setup() {
    return {
    };
  },
});

</script>