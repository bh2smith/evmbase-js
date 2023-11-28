import { tokensByOwner, tokensByMinter } from "../src/tokens";
import { Nft } from "../src/types";

describe("token queries", () => {
  test.skip("tokensByOwner", async () => {
    const tokens: Nft[] = await tokensByOwner(
      "0x7B0A39E892599D9EEBA61D2E7DD4B36F747A1A09",
    );
    expect(tokens).toEqual([
      {
        contract_address: "0xf17a4b19eb11fdef2e0e4c6f7a0861abbce363ef",
        token_id: "1003",
        token_uri: "ipfs://QmUaKPWVJcPcAh3oM4aExtYCmbyFXQDUabGkYky7pnW6z7/1003",
        owner: "0x7b0a39e892599d9eeba61d2e7dd4b36f747a1a09",
        last_update_block: 15001343,
        last_update_log_index: 548,
        last_transfer_block: 15001343,
        last_transfer_tx: 248,
        mint_block: 15001343,
        mint_tx: 248,
        burn_block: null,
        burn_tx: null,
        minter: "0x7b0a39e892599d9eeba61d2e7dd4b36f747a1a09",
        approved: null,
        json: null,
      },
      {
        contract_address: "0xf17a4b19eb11fdef2e0e4c6f7a0861abbce363ef",
        token_id: "1102",
        token_uri: "ipfs://QmUaKPWVJcPcAh3oM4aExtYCmbyFXQDUabGkYky7pnW6z7/1102",
        owner: "0x7b0a39e892599d9eeba61d2e7dd4b36f747a1a09",
        last_update_block: 15001399,
        last_update_log_index: 168,
        last_transfer_block: 15001399,
        last_transfer_tx: 67,
        mint_block: 15001353,
        mint_tx: 198,
        burn_block: null,
        burn_tx: null,
        minter: "0xa8e09417c47b1fbb6a7c6b105041b4b69d039c76",
        approved: null,
        json: null,
      },
      {
        contract_address: "0x8dfaacc97f729a6986cde9344b35405a3b97f637",
        token_id: "3082",
        token_uri:
          "ipfs://QmZQQP87i5vyt4WL7yDwnAo4FsNj8a4HNQfHizrgbVM5vu/3082.json",
        owner: "0x7b0a39e892599d9eeba61d2e7dd4b36f747a1a09",
        last_update_block: 15001340,
        last_update_log_index: 376,
        last_transfer_block: 15001340,
        last_transfer_tx: 153,
        mint_block: 15001340,
        mint_tx: 153,
        burn_block: null,
        burn_tx: null,
        minter: "0x7b0a39e892599d9eeba61d2e7dd4b36f747a1a09",
        approved: null,
        json: null,
      },
    ]);
  });
  test.skip("tokensByMinter", async () => {
    const tokens: Nft[] = await tokensByMinter(
      "0x7B0A39E892599D9EEBA61D2E7DD4B36F747A1A09",
    );
    console.log("Minter", tokens);
    expect(tokens).toEqual([
      {
        contract_address: "0xf17a4b19eb11fdef2e0e4c6f7a0861abbce363ef",
        token_id: "1003",
        token_uri: "ipfs://QmUaKPWVJcPcAh3oM4aExtYCmbyFXQDUabGkYky7pnW6z7/1003",
        owner: "0x7b0a39e892599d9eeba61d2e7dd4b36f747a1a09",
        last_update_block: 15001343,
        last_update_log_index: 548,
        last_transfer_block: 15001343,
        last_transfer_tx: 248,
        mint_block: 15001343,
        mint_tx: 248,
        burn_block: null,
        burn_tx: null,
        minter: "0x7b0a39e892599d9eeba61d2e7dd4b36f747a1a09",
        approved: null,
        json: null,
      },
      {
        contract_address: "0x8dfaacc97f729a6986cde9344b35405a3b97f637",
        token_id: "3082",
        token_uri:
          "ipfs://QmZQQP87i5vyt4WL7yDwnAo4FsNj8a4HNQfHizrgbVM5vu/3082.json",
        owner: "0x7b0a39e892599d9eeba61d2e7dd4b36f747a1a09",
        last_update_block: 15001340,
        last_update_log_index: 376,
        last_transfer_block: 15001340,
        last_transfer_tx: 153,
        mint_block: 15001340,
        mint_tx: 153,
        burn_block: null,
        burn_tx: null,
        minter: "0x7b0a39e892599d9eeba61d2e7dd4b36f747a1a09",
        approved: null,
        json: null,
      },
    ]);
  });
});
