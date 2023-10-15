# Burning Nfts

<div class="deployToken">

This section involves the tutorial on burning the non-fungible tokens. This operations is performed by draining all of the gas tokens in  he nft contract, this way the nft contract won;t have the enough gas tokens to pay for the storage fees that the TVM based blockchains receives for storing the data.

The total supply amount in the collection contract is updated after the nft is destroyed by a callback function that calls the relevant function on the collection contract that reduces the total supply by one.

::: tip
As we saud earlier the index contracts will get destroyed when the nft contracts get burnt.
Please notice that this operation is not handled by the nft or the collection contract or even by the user.
The index contracts will get freezed after sometimes when the their balance gets negative because of the storage fees and gets deleted after sometime.
:::

## Step 1: Write burning Script

<span  :class="LLdis"  >

The code sample below uses the locklift tool and the previously written script and burns the nfts.

Add the following lines of code to the [previously written script](./transferringNft.md#step-1-write-transfer-script) on minting the nft's section.

::: info
Before we start to write our scripts we need to make sure that there is a file named `04-burn-nft.ts` in the `script` folder in the project root.
:::

</span>

<span :class="EIPdis"  >

Utilize the code sample below to burn the nfts using the `everscale-inpage-provider` tool.

add the following lines of code to the [previously written script](./transferringNft.md#step-1-write-transfer-script) on deploying the base collection contract section.

</span>

<div @click="codeBlockSwitchHandler" >

::: code-group

```` typescript [locklift]
 // Burning nfts
  await nftContract.methods
    .burn({
      sendGasTo: account.address,
      callbackPayload: "",
      callbackTo: zeroAddress,
    })
    .send({ from: account.address, amount: locklift.utils.toNano(2), bounce: true });

  // fetching the account again and see if we get the "account not found" error

  console.log("burnt nft info: ", await nftContract.methods.getInfo({ answerId: 0 }).call()); // Account not found

````

````typescript [everscale-inpage-provider]
    const burnRes: Transaction = await nftContract.methods
      .burn({
        sendGasTo: providerAddress,
        callbackTo: zeroAddress,
        callbackPayload: "",
      })
      .send({
        from: providerAddress,
        amount: String(2 * 10 ** 9),
        bounce: true,
      });
````

:::

</div>


<div class="action">

## Step 2: Burn an NFT

<div :class="llAction">

Use this command to find the nfts using indexing:

```shell
npx locklift run -s ./scripts/05-burn-nft.ts -n local
```
<ImgContainer src= '/burningNft.png' width="100%" altText="deployTip3Output" />

Congratulations, you have successfully burnt an TIP4 Nft  🎉

</div>

<div :class="eipAction" >


<p style="margin-bottom: 0;">Nft Address</p>

<input ref="actionNftAddress" type="text" class="action Ain" />

<button @click="_burnNft" class="deployTokenBut" > Burn Nft </button>

<p id="output-p" :class="EIPdis"><loading :text="loadingText"/></p>

</div>

</div>

</div>

<script lang="ts" >

import { defineComponent, ref, onMounted } from "vue";
import {toast} from "/src/helpers/toast";
import ImgContainer from "../../.vitepress/theme/components/shared/BKDImgContainer.vue"
import loading from "../../.vitepress/theme/components/shared/BKDLoading.vue"
import { burnNft } from "../../scripts/burnNft";

export default defineComponent({
  name: "deployToken",
      components :{
    ImgContainer,
    loading
  },
  data(){
    return{
        LLdis: "cbShow",
        EIPdis: "cbHide",
        llAction: "llAction cbShow",
        eipAction: "eipAction cbHide",
        collMeta: "cbHide",
        nftMeta: "cbHide",
        loadingText: " ",
        loadingText2: " "
        }
  },
  setup() {



async function _burnNft(){
        this.loadingText = ""
        if (
            this.$refs.actionNftAddress.value == ''

        ){
            toast("Nft address field is required !", 0)
            this.loadingText = "Failed"
            return
        }
        let  deployTokenRes = await burnNft(
            this.$refs.actionNftAddress.value,
        )

        // Rendering the output
        deployTokenRes = !deployTokenRes ? "Failed" :  deployTokenRes;
        this.loadingText = deployTokenRes;
  }

  async function codeBlockSwitchHandler(e){
     if(e.target.innerHTML.includes("everscale-inpage-provider")){
        this.LLdis = "cbHide"
        this.EIPdis = "cbShow"
        this.llAction = "llAction cbHide"
        this.eipAction = "eipAction cbShow"
     }else if(e.target.innerHTML.includes("locklift")){
        this.EIPdis = "cbHide"
        this.LLdis = "cbShow"
        this.llAction = "llAction cbShow"
        this.eipAction = "eipAction cbHide"

     }
  }
return {
        _burnNft,
        codeBlockSwitchHandler
    };
  }

});

</script>


<style>

textarea{
 width:100%;
 height: 400px;
}

.action{
    display:inline-block;
}

.actionInName{
    font-size: .9rem;
}

.deployTokenBut, .Ain, details
{
  background-color: var(--vp-c-bg-mute);
  transition: background-color 0.1s;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  font-weight: 600;
  cursor : pointer;
}

details{
    padding : 0 10px 0 10px;
}
.Ain{
    padding-left : 10px;
    margin : 0;
}
.deployTokenBut{
    cursor:pointer;
    padding: 5px 12px;
    display: flex;
    transition: all ease .3s;
}

.deployTokenBut:hover{
      border: 1px solid var(--light-color-ts-class);
}

#output-p{
    /* height: 30px; */
    padding: 2px 10px;
    border-radius: 8px;
    border: 1px solid var(--vp-c-divider);
    }

.cbShow{
    display: block;
}
.cbHide{
    display: none;
}

.eipAction{
    font-weight: 600;
}

* {box-sizing: border-box;}

.container {
  display: flex;
  position: relative;
  margin-bottom: 12px;
  font-size: .9rem;
}

.container .checkboxInput {
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;

}

.checkmark {
  cursor: pointer;
  position: relative;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: var(--vp-c-bg-mute);
  border: 1px solid var(--vp-c-divider);
  border-radius : 8px;
  margin-left: 10px;
}

.container input:checked ~ .checkmark {
  background-color: var(--light-color-ts-class);
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

</style>