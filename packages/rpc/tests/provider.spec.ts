import { RpcProvider } from "../src/provider";

const PROVIDER = new RpcProvider("https://rpc.ankr.com/eth");

describe("RpcProvider class", () => {
  test("account", async () => {
    expect(
      await PROVIDER.accountExists(
        "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
      ),
    ).toBe(true);
    expect(
      await PROVIDER.accountExists(
        "0x0000000000000000000000000000000000000000",
      ),
    ).toBe(false);
  });
  test("balance", async () => {
    expect(
      await PROVIDER.getBalance("0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"),
    ).toBeGreaterThan(0);
  });

  test("blockHash", async () => {
    expect(PROVIDER.getBlockHash()).resolves.not.toThrow();
  });

  test("blockHeight", async () => {
    expect(await PROVIDER.getBlockHeight()).toBeGreaterThan(18e6);
  });

  test("gasPrice", async () => {
    expect(await PROVIDER.gasPrice()).toBeGreaterThan(0);
  });

  test("getAbi", async () => {
    const wethInterface = await PROVIDER.getAbi(
      "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    );
    // console.log(wethInterface?.formatJson());
    expect(wethInterface).not.toBe(undefined);
  });
});
