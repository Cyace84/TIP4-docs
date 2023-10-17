import{_ as t,c as e,o,V as c}from"./chunks/framework.af8f98c2.js";const u=JSON.parse('{"title":"Collection","description":"","frontmatter":{},"headers":[],"relativePath":"specification/collection.md","filePath":"src/pages/specification/collection.md"}'),i={name:"specification/collection.md"},l=c('<h1 id="collection" tabindex="-1">Collection <a class="header-anchor" href="#collection" aria-label="Permalink to &quot;Collection&quot;">​</a></h1><p>The <code>Collection</code> contract differs from the TIP-4_nCollection contract. In simple terms, the <code>Collection</code> contract is implemented to consolidate the functionalities provided by the TIP-4_nCollection contracts into a single contract. On the other hand, the TIP-4_nCollection contracts are responsible for providing the specific logic for each part of the standard.</p><p>For example, when it comes to minting NFTs, the <a href="https://github.com/broxus/tip4/blob/master/contracts/TIP4_1/TIP4_1Collection.tsol" target="_blank" rel="noreferrer">TIP-4_1 collection</a> contract provides the functionality to prepare the initial values required for minting and deploying the NFTs. However, it is the <code>Collection</code> contract that fetches this data and deploys the NFT contract.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li><p>Please note that <code>Broxus</code> provides two implementations for the Collection contract:</p><ul><li><a href="https://github.com/broxus/tip4/blob/master/contracts/Collection.tsol" target="_blank" rel="noreferrer"><code>Collection</code></a></li><li><a href="https://github.com/broxus/tip4/blob/master/contracts/CollectionWithRoyalty.tsol" target="_blank" rel="noreferrer"><code>CollectionWithRoyalty</code></a></li></ul></li></ul><p>In this documentation, we will be utilizing the <code>CollectionWithRoyalty</code> contract as it supports the royalty functionality. However, individual users have the flexibility to choose either version based on their preferred approach.</p><ul><li>Please refer to the <a href="./..//usageAndDeployment/deployingCollection.html"><code>Deploying Collection</code></a> section to find out how to deploy and use the <code>CollectionWithRoyalty</code> contract.</li></ul></div>',4),n=[l];function a(r,s,d,h,p,f){return o(),e("div",null,n)}const m=t(i,[["render",a]]);export{u as __pageData,m as default};