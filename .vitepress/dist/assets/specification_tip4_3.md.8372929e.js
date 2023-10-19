import{_ as a,c as e,o as s,V as n}from"./chunks/framework.af8f98c2.js";const u=JSON.parse('{"title":"TIP-4_3 ( Non-Fungible Token on-chain indexes)","description":"","frontmatter":{},"headers":[],"relativePath":"specification/tip4_3.md","filePath":"src/pages/specification/tip4_3.md"}'),o={name:"specification/tip4_3.md"},t=n(`<h1 id="tip-4-3-non-fungible-token-on-chain-indexes" tabindex="-1">TIP-4_3 ( Non-Fungible Token on-chain indexes) <a class="header-anchor" href="#tip-4-3-non-fungible-token-on-chain-indexes" aria-label="Permalink to &quot;TIP-4_3 ( Non-Fungible Token on-chain indexes)&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>Using the <code>Index</code> contract code hash, you can find all your NFTs with one simple dApp query to the desired network graphql endpoint. This makes blockchain application less dependent on different off-chain parsers and indexers</p><p>On-chain Indexes solves easy and fast searching any data in blockchain. This document shows standard for basic query.</p><h2 id="contract-specification" tabindex="-1">Contract Specification <a class="header-anchor" href="#contract-specification" aria-label="Permalink to &quot;Contract Specification&quot;">​</a></h2><p>The third part of the standard contains following contracts to perform the the on-chain indexing:</p><ul><li><a href="https://github.com/broxus/tip4/tree/master/contracts/TIP4_3/TIP4_3Collection.tsol" target="_blank" rel="noreferrer"><code>TIP-4_3Collection</code></a></li><li><a href="https://github.com/broxus/tip4/tree/master/contracts/TIP4_3/TIP4_3NFT.tsol" target="_blank" rel="noreferrer"><code>TIP-4_3NFT</code></a></li><li><a href="https://github.com/broxus/tip4/tree/master/contracts/TIP4_3/IndexBasis.tsol" target="_blank" rel="noreferrer"><code>IndexBasis</code></a></li><li><a href="https://github.com/broxus/tip4/tree/master/contracts/TIP4_3/Index.tsol" target="_blank" rel="noreferrer"><code>Index</code></a></li></ul><h3 id="tip-4-3collection" tabindex="-1">TIP-4_3Collection <a class="header-anchor" href="#tip-4-3collection" aria-label="Permalink to &quot;TIP-4_3Collection&quot;">​</a></h3><p>Beside the previously described functionalities of the TIP-4Collection contract, This contract will handle the storing the <code>Index</code> and <code>indexBasis</code> contracts basic information such as code and code hash and building their initial data required for deployment although, it will not handle deploying them both, it only handles the process of deploying and destructing the <code>indexBasis</code> contract.</p><h3 id="tip4-3nft" tabindex="-1">TIP4_3NFT <a class="header-anchor" href="#tip4-3nft" aria-label="Permalink to &quot;TIP4_3NFT&quot;">​</a></h3><p>TIP-4_3NFT contract is also containing the added functionalities to the <code>TIP-4_3Collection</code> but also handles the deploying, fetching and deleting the <code>Index</code> contract.</p><h3 id="index" tabindex="-1">Index <a class="header-anchor" href="#index" aria-label="Permalink to &quot;Index&quot;">​</a></h3><p>The <code>Index</code> contracts are deployed by the NFT contract, with two <code>Index</code> contracts deployed per each NFT contract. Each <code>Index</code> contract will have a specific code hash based on its associated collection and owner.</p><p>The <code>Index</code> contracts code hashes are generated from its salted code with the following salting params:</p><ul><li>The word &quot;nft&quot;</li><li>The owner address of the nft</li><li>The collection address associated with the nft contract</li></ul><p>In one of the <code>Index</code> contracts, the <code>zero address</code> is passed as the collection address, while the other one utilizes the actual <code>collection address</code>.</p><p>Utilizing one of the <code>Index</code> contracts code hash we are able to find all of the nft by the owner and we can find only the nfts associated with a specific collection when using the other one.</p><h3 id="indexbasis" tabindex="-1">IndexBasis <a class="header-anchor" href="#indexbasis" aria-label="Permalink to &quot;IndexBasis&quot;">​</a></h3><p>contract, that helps to find all collections by the <strong>code hash</strong> of which. The index basis contract also has a specific code hash based on the word <code>&quot;nft&quot;</code>, using this unique property we will be able to find all of the nft collection contracts.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Please refer to the <a href="https://github.com/tonlabs/TON-Solidity-Compiler/blob/master/API.md" target="_blank" rel="noreferrer">TON solidity compiler API</a> to understand what is salting in the TVM.</p></div><h2 id="query-example" tabindex="-1">Query Example <a class="header-anchor" href="#query-example" aria-label="Permalink to &quot;Query Example&quot;">​</a></h2><div class="language-graphql"><button title="Copy Code" class="copy"></button><span class="lang">graphql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">query</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  accounts(</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#BABED8;font-style:italic;">filter</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> {</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#C3E88D;">code_hash</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> {</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#C3E88D;">eq</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">207dc560c5956de1a2c1479356f8f3ee70a59767db2bf4788b1d61ad42cdad82</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#BABED8;">      }</span></span>
<span class="line"><span style="color:#BABED8;">    }</span></span>
<span class="line"><span style="color:#BABED8;">  )</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    id</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>Part of response example</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">accounts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0:000001b0422f6a7069786fa9a27aa7bb8042f58e1df01dfebc51dcb2baa5eeae</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0:00022772794253c1bf8cb4fa59d6161d574033c13d881f3eea14675b911e61b0</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,24),l=[t];function c(p,i,r,d,h,D){return s(),e("div",null,l)}const f=a(o,[["render",c]]);export{u as __pageData,f as default};
