import { Interface, ethers } from "ethers";
import { requestFromEvmNode } from "./util";

export class RpcProvider {
  private rpcUrl: string;
  private provider: ethers.AbstractProvider;

  constructor(rpcUrl: string) {
    this.rpcUrl = rpcUrl;
    try {
      this.provider = new ethers.WebSocketProvider(rpcUrl);
    } catch (err) {
      this.provider = new ethers.JsonRpcProvider(rpcUrl);
    }
  }

  async accountExists(address: string): Promise<boolean> {
    const response = await requestFromEvmNode(this.rpcUrl, {
      method: "eth_getTransactionCount",
      params: [address, "latest"],
    });
    return parseInt(response.result, 16) > 0;
  }

  async getBalance(account: string): Promise<bigint> {
    return this.provider.getBalance(account, "latest");
  }

  async getBlockHash(): Promise<string | null | undefined> {
    const block = await this.provider.getBlock("latest");
    return block?.hash;
  }

  async getBlockHeight(): Promise<number> {
    return this.provider.getBlockNumber();
  }

  async gasPrice(): Promise<bigint | null> {
    const feeData = await this.provider.getFeeData();
    // depends on network (LEGACY vs EIP1559 Transaction type)
    return feeData.maxFeePerGas;
  }

  async getAbi(address: string): Promise<Interface | undefined> {
    const contract = await new ethers.EtherscanProvider().getContract(address);

    return contract?.interface;
  }
}
