export async function apiGet<T>(apiUrl: string): Promise<T> {
  const response = await fetch(apiUrl, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    return (await response.json()) as T;
  }
  throw new Error(
    `request failed with ${response.status}: ${response.statusText}`,
  );
}

export async function apiPost(
  apiUrl: string,
  params: Record<string, unknown>,
): Promise<JSON> {
  const response = await fetch(apiUrl, {
    method: "GET",
    body: JSON.stringify(params),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    return response.json();
  }
  throw new Error(
    `request failed with ${response.status}: ${response.statusText}`,
  );
}
