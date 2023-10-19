import{_ as e,c as o,o as t,V as a}from"./chunks/framework.af8f98c2.js";const f=JSON.parse('{"title":"TIP-4_1 (Non-Fungible Token)","description":"","frontmatter":{},"headers":[],"relativePath":"specification/tip4_1.md","filePath":"src/pages/specification/tip4_1.md"}'),r={name:"specification/tip4_1.md"},i=a('<h1 id="tip-4-1-non-fungible-token" tabindex="-1">TIP-4_1 (Non-Fungible Token) <a class="header-anchor" href="#tip-4-1-non-fungible-token" aria-label="Permalink to &quot;TIP-4_1 (Non-Fungible Token)&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>The following standard allows for implementing a standard API for NFTs within smart contracts. General information about NFT collection is stored in the NFT collection contract. Each NFT deployed in separate smart contracts and links to NFT collection contract.</p><p>This standard provides basic functionality to create, track transfer and destroy NFTs.</p><hr><h2 id="contract-specification" tabindex="-1">Contract Specification <a class="header-anchor" href="#contract-specification" aria-label="Permalink to &quot;Contract Specification&quot;">​</a></h2><p>The <code>TIP-4_1</code> contains two contracts:</p><ul><li><a href="https://github.com/broxus/tip4/blob/master/contracts/TIP4_1/TIP4_1Collection.tsol" target="_blank" rel="noreferrer"><code>TIP-4_2Collection</code></a></li><li><a href="https://github.com/broxus/tip4/blob/master/contracts/TIP4_1/TIP4_1Nft.tsol" target="_blank" rel="noreferrer"><code>TIP-4_2NFT</code></a></li></ul><h3 id="tip-4-1collection" tabindex="-1">TIP-4_1Collection <a class="header-anchor" href="#tip-4-1collection" aria-label="Permalink to &quot;TIP-4_1Collection&quot;">​</a></h3><p>The contract represents shared information about NFT collection such as <code>totalSupply</code> and <code>supportedInterfaces</code> and logic for creation of NFTs.</p><h3 id="tip-4-1nft" tabindex="-1">TIP-4_1NFT <a class="header-anchor" href="#tip-4-1nft" aria-label="Permalink to &quot;TIP-4_1NFT&quot;">​</a></h3><p>The contract represents information about current NFT such as:</p><ul><li><code>current owner</code></li><li><code>current manager</code></li><li><code>ID</code></li><li><code>associated collection</code></li></ul><p>Two roles are responsible for the control logic of the NFT contract:</p><ul><li><code>owner logic</code></li><li><code>manager logic</code></li></ul><p>The owner&#39;s address is where the NFT is held and can be used for authorization and proof in games etc. The manager&#39;s address controls the NFT and can change ownership or burn it. The manager&#39;s address is typically the smart contract address for selling or farming logic.</p>',16),n=[i];function c(l,s,d,h,p,T){return t(),o("div",null,n)}const u=e(r,[["render",c]]);export{f as __pageData,u as default};
