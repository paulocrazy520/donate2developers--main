import fetch from "isomorphic-unfetch";

async function getUsdPrice(address) {
    const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/ethereum/contract/${address}`
    );
    const data = await response.json();
    return data.market_data.current_price.usd;
}

export default getUsdPrice;