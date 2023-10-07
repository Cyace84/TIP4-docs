# Locklift Config Setting

In this section we will learn how to use the TIP-4 contracts inside of our locklift project.

## Step 1: Add the External Contracts

We must specify for the compiler that we have some external contracts, in this case the Index, IndexBasis, TIP-4_1Collection, TIP4_1Nft, OwnableExternal and Account contracts are needed.

Account contract artifacts are also needed for deploying and using an account in the next section. Thus, we will include the path to these artifacts.

Add this line to locklift.config.ts/compiler

```typescript
    externalContracts: {
      "node_modules/@broxus/tip4/precompiled": ["Index", "IndexBasis"],
      "node_modules/@broxus/tip4/contracts/access": ["OwnableExternal", "OwnableInternal"],
      "node_modules/@broxus/contracts/contracts/wallets": ["Account"],
    },
```

## Step 3: Change the Compiler Version

replace the following line with the version of your compiler in the locklift.config.ts/compiler/version  file:

````typescript
version: "0.61.2",
````

## Step 3: Build the Artifacts

To generate the necessary artifacts for these three contracts, including .abi.json, .tvc, .code, and .base64 files, execute the following command in your shell.

::: warning
Please note that the `Index` and `INdexBasis` contracts are precompiled so **"DO NOT REBUILD `Index` AND `IndexBasis` CONTRACTS ARTIFACTS!"**
:::

````shell
npx locklift build
````

After completing the process there should be a folder named **_build_** with this structure:


<ImgContainer src= '/llBuildStructure.png' width="50%" altText="buildStructure" />

Please refer to the [Locklift documentation]( https://docs.locklift.io/) for more detailed information.

<script lang="ts" >
import { defineComponent, ref, onMounted } from "vue";
import ImgContainer from "../../.vitepress/theme/components/shared/BKDImgContainer.vue"

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