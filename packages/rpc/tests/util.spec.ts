import { callViewMethod } from "../src/util";
import { ethers } from "ethers";

describe("rpc utils()", () => {
  test("requestFromEvmNode", () => {
    // Test function1
  });

  test("callViewMethod", async () => {
    // balanceOf
    const result = await callViewMethod<string>(
      "https://rpc.ankr.com/eth",
      "0x6810e776880c02933d47db1b9fc05908e5386b96",
      "0x70a08231000000000000000000000000eC83f750adfe0e52A8b0DbA6eeB6be5Ba0beE535",
    );
    const balanceWei = BigInt(result).toString();
    const balance = ethers.formatUnits(balanceWei, 18);
    expect(parseFloat(balance)).toBeGreaterThan(1);
  });
});
