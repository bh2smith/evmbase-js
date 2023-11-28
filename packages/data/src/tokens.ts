import { apiGet } from "./api";
import { API_URL } from "./constants";
import { Nft } from "./types";

export async function tokensByOwner(
  ownerAddress: string,
  // TODO - support networks (should be part of API url)
  // network?: Network,
): Promise<Nft[]> {
  const requestUrl = `${API_URL}/tokens/owner/${ownerAddress}`;
  return apiGet<Nft[]>(requestUrl);
}

export async function tokensByMinter(
  minterAddress: string,
  // TODO - support networks (should be part of API url)
  // network?: Network,
): Promise<Nft[]> {
  const requestUrl = `${API_URL}/tokens/minter/${minterAddress}`;
  return apiGet<Nft[]>(requestUrl);
}

export async function ownedTokensByProject(
  ownerAddress: string,
  contractAddress: string,
): Promise<Nft[]> {
  const requestUrl = `${API_URL}/tokens/${contractAddress}/owner/${ownerAddress}`;
  return apiGet<Nft[]>(requestUrl);
}
