import { useState, useEffect } from "react";

export async function fetchGamePrice(mainnet: boolean) {
  const rpcUrl = mainnet
    ? process.env.NEXT_PUBLIC_MAINNET_RPC_URL!
    : process.env.NEXT_PUBLIC_TESTNET_RPC_URL!;
  const gameAddress = mainnet
    ? process.env.NEXT_PUBLIC_MAINNET_GAME_ADDRESS!
    : process.env.NEXT_PUBLIC_TESTNET_GAME_ADDRESS!;
  const response = await fetch(rpcUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "starknet_call",
      params: [
        {
          contract_address: gameAddress,
          entry_point_selector:
            "0x010000299e2cd5f73c263e8330ad9bd7df4b1f9a902a1bdeed5c0055b821571c", // token_uri
          calldata: [],
        },
        "pending",
      ],
      id: 0,
    }),
  });

  const data = await response.json();

  if (response.ok) {
    console.log("Cost to play fetched successfully");
  } else {
    console.error("Error in response:", data);
  }

  return data.result[0];
}

export const MainnetGamePrice = () => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchGamePrice(true);
      console.log(result);
      setPrice((Number(result) / 10 ** 18).toFixed(2));
    };

    if (price === null) {
      fetchData();
    }
  }, []);

  return (
    <span style={{ fontWeight: "bold" }}>
      {price ? `${price} LORDS` : "Loading..."}
    </span>
  );
};

export const TestnetGamePrice = () => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchGamePrice(false);
      setPrice((Number(result) / 10 ** 18).toFixed(2));
    };

    if (price === null) {
      fetchData();
    }
  }, []);

  return (
    <span style={{ fontWeight: "bold" }}>
      {price ? `${price} LORDS` : "Loading..."}
    </span>
  );
};
