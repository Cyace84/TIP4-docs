::: warning
THe following section is under maintenance !!
:::

# TIP-4_4 (Non-Fungible Token On-chain storage)
Requires: [TIP-4.1](./tip4_1.md)\
Requires: [TIP-6.1](./tip6.md)

## Abstract
Using the Storage contract, you can store NFT-related bytes in blockchain.
As an use case we can point to off-chain storage of digital assets that each nft might represent such music, videos and images among other digital assets can now be saved on the blockchain.

## Motivation
Fault tolerance. If off-chain services are unavailable, the user will view NFT-related bytes, because it is stored on-chain.

## Contract Specification
* `TIP4_4Collection`
* `TIP4_4Nft`
* `Storage`

### TIP4_4Collection

The collection of this part of the standard will store the storage code and coed hash and helps us to retrieve the the address of a storage contract based on its relevant contract besides the previously described functionalities for collection contract.

### TIP4_4Nft

The only change that `TIP4_4Nft` has than other nft contracts from previous parts is it deploys the storage contract and stores its address.

### Storage

contract that store token byte content. Storage is independent. Storage doesn’t store `NFT` address because `NFT` contract address can be changed by burning and redeployment from another collection.


* `nft` (`address`) - token contract address
* `collection` (`address`) - collection token contract address
* `mimeType` (`string`) - [MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) are defined and standardized in IETF's [RFC 6838](https://datatracker.ietf.org/doc/html/rfc6838)
 `content` (`mapping(uint32 => bytes)`) - byte content. Maximum content size is `2 147 483 647 chunks * chunk size`. Max size of data is limited by external message payload size. Maximum size external message payload size is `16KB` at 2022-03-18 Maximum content size is `2 147 483 647 * 16KB = 34TB` at 2022-03-18.
 `contentEncoding` (`string`) - Was it compressed by any algorithm. If it was compressed with [zstd](https://github.com/tonlabs/ever-sdk/blob/master/docs/reference/types-and-methods/mod_utils.md#compress_zstd) contentEncoding need to be `zstd`, all other need to be like [http content encoding](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding)

## Visualization
### Legend

<br/>
<ImgContainer src= '/img/legend1.svg' width="70%" altText="deployAccountOutput"/>

<br/>
<ImgContainer src= '/img/legend2.svg' width="70%" altText="deployAccountOutput"/>

### `NFT` minting with `Storage`

<br/>
<ImgContainer src= '/img/storage1.svg' width="70%" altText="deployAccountOutput"/>

### `Storage` filling

<br/>
<ImgContainer src= '/img/storage2.svg' width="70%" altText="deployAccountOutput"/>

### `Storage` with `Index`

How to interaction [on-chain indexes](./tip4_3.md) and `Storage` contracts

<br/>
<ImgContainer src= '/img/storage3.svg' width="70%" altText="deployAccountOutput"/>

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