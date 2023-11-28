/**
 * Standard format for an Eth Node Response
 */
export type EvmResponse = {
  jsonrpc: string;
  id: number;
  result: string;
};

export const requestFromEvmNode = async (
  rpcUrl: string,
  body: Record<string, unknown>,
): Promise<EvmResponse> => {
  // add constant fields to body for convenience.
  body.jsonrpc = "2.0";
  body.id = 1;

  const response = await fetch(rpcUrl, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    return (await response.json()) as EvmResponse;
  }
  throw new Error(
    `request failed with ${response.status}: ${response.statusText}`,
  );
};

export async function callViewMethod<T>(
  rpcUrl: string,
  to: string,
  data: string,
): Promise<T> {
  const json_response = await requestFromEvmNode(rpcUrl, {
    method: "eth_call",
    params: [
      {
        from: "0x0000000000000000000000000000000000000000",
        data,
        to,
      },
      "latest",
    ],
  });
  if (json_response.result === undefined) {
    throw new Error(
      `Malformed respose ${json_response} - expected result field`,
    );
  }

  if (typeof json_response.result !== "string") {
    throw new Error(
      `Unexpected type for result. Expected string, got ${typeof json_response.result}`,
    );
  }

  // All responses are always hex.
  return json_response.result as T;
}
