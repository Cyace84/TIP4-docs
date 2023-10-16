import{_ as e,c as t,o,V as c}from"./chunks/framework.af8f98c2.js";const f=JSON.parse('{"title":"Base Collection","description":"","frontmatter":{},"headers":[],"relativePath":"specification/baseCollection.md","filePath":"src/pages/specification/baseCollection.md"}'),a={name:"specification/baseCollection.md"},i=c('<h1 id="base-collection" tabindex="-1">Base Collection <a class="header-anchor" href="#base-collection" aria-label="Permalink to &quot;Base Collection&quot;">​</a></h1><p>The <code>BaseCollection</code> contract differs from the TIP-4_nCollection contract. In simple terms, the <code>BaseCollection</code> contract is implemented to consolidate the functionalities provided by the TIP-4_nCollection contracts into a single contract. On the other hand, the TIP-4_nCollection contracts are responsible for providing the specific logic for each part of the standard.</p><p>For example, when it comes to minting NFTs, the <a href="https://github.com/itgoldio/everscale-tip/blob/main/contracts/TIP4_1/TIP4_1Collection.sol" target="_blank" rel="noreferrer">TIP-4_1 collection</a> contract provides the functionality to prepare the initial values required for minting and deploying the NFTs. However, it is the <code>BaseCollection</code> contract that fetches this data and deploys the NFT contract.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li><p>Notice that the <code>BaseCollection</code> contract is written by the user and not provided by the standard !!</p></li><li><p>Please refer to the <a href="/src/pages/usageAndDeployment/deployingCollection.html#collection-contract"><code>BaseCollection Contract Implementation</code></a> to find out how its implemented and its usage.</p></li></ul></div>',4),n=[i];function l(s,r,d,p,h,_){return o(),t("div",null,n)}const u=e(a,[["render",l]]);export{f as __pageData,u as default};