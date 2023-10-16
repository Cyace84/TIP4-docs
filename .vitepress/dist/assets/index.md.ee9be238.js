import{_ as e,c as t,o as a,V as n}from"./chunks/framework.af8f98c2.js";const u=JSON.parse('{"title":"Introduction","description":"","frontmatter":{},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),i={name:"index.md"},o=n('<h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h1><p>This documentation describes the concept of implementing distributed non-fungible tokens (NFTs) on the TVM (Ton Virtual Machine) based blockchains. The standard aims to provide a professional and standardized API for NFTs within smart contracts.</p><h2 id="abstract" tabindex="-1">Abstract <a class="header-anchor" href="#abstract" aria-label="Permalink to &quot;Abstract&quot;">​</a></h2><p>This standard defines the implementation of NFTs within smart contracts, with a specific focus on the storage and management of NFT collections. Each NFT is deployed in its own smart contract and linked to the NFT collection contract.</p><p>Non-fungible tokens, also known as NFTs, are unique cryptographic tokens that exist on a blockchain and cannot be duplicated. Unlike fungible tokens, NFTs have distinct properties and cannot be exchanged on a one-to-one basis.</p><p>The TIP-4 standard provides more useful and practical functionalities compared to the ERC-721 standard on Ethereum or other NFT standards. TIP-4 was designed to align with the distributed system design of the mentioned blockchains and offers lower gas fees.</p><p>In addition to the expected functionalities of an NFT standard, such as minting and burning of NFTs, transferring NFTs between accounts, and selling NFTs, TIP-4 offers other functionalities including:</p><ul><li><a href="/docs/specifications/43.html">On-Chain Indexing</a></li><li><a href="/docs/specifications/44.html">On-chain Storage</a></li><li><a href="/docs/specifications/45.html">Upgradeability</a></li></ul><h2 id="motivation" tabindex="-1">Motivation <a class="header-anchor" href="#motivation" aria-label="Permalink to &quot;Motivation&quot;">​</a></h2><p>The proposed standard differs significantly from Ethereum&#39;s ERC721 and other NFT standards with a single registry due to the unique characteristics of these blockchains. As TVM imposes storage fees, TIP-4 takes a distributed approach, ensuring separate storage for each NFT contract.</p><h2 id="implementations-and-references" tabindex="-1">Implementations and References <a class="header-anchor" href="#implementations-and-references" aria-label="Permalink to &quot;Implementations and References&quot;">​</a></h2><ul><li><a href="https://github.com/broxus/tip4" target="_blank" rel="noreferrer">TIP-4 Implementation</a></li><li><a href="https://github.com/itgoldio/everscale-tip" target="_blank" rel="noreferrer">TIP-4 itgold Implementation</a></li><li><a href="https://github.com/grandbazar-io/everscale-tip4.6-contracts" target="_blank" rel="noreferrer">TIP-4 grandbazar.io Implementation</a></li><li><a href="https://eips.ethereum.org/EIPS/eip-721" target="_blank" rel="noreferrer">Ethereum EIP-721</a></li><li><a href="https://docs.metaplex.com/token-metadata/specification" target="_blank" rel="noreferrer">Solana v1.2.0</a></li><li><a href="https://github.com/ton-blockchain/TIPs/issues/62" target="_blank" rel="noreferrer">TON NFT</a>, <a href="https://github.com/ton-blockchain/TIPs/issues/64" target="_blank" rel="noreferrer">TON DATA</a></li><li><a href="https://gitlab.com/tezos/tzip/-/blob/master/proposals/tzip-12/tzip-12.md" target="_blank" rel="noreferrer">Tezos TZIP12</a></li></ul>',12),r=[o];function s(c,l,d,h,p,f){return a(),t("div",null,r)}const b=e(i,[["render",s]]);export{u as __pageData,b as default};
