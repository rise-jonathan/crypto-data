const apiUrl = "https://api.coinpaprika.com/v1";

// COIN LIST
export const getCoinList = async (currency) => {
  const params = new URLSearchParams({
    quotes: currency,
  });

  const response = await fetch(`${apiUrl}/tickers?${params}`);

  return await response.json();
};

// GLOBAL
export const getGlobalData = async () => {
  const response = await fetch(`${apiUrl}/global`);

  return await response.json();
};

// COIN BY ID
export const getCoinById = async (id, currency) => {
  const params = new URLSearchParams({
    quotes: currency,
  });
  const response = await fetch(`${apiUrl}/tickers/${id}?${params}`);

  return await response.json();
};

// HISTORICAL DATA
export const getHistoricalData = async ({ id, currency, start, interval }) => {
  const params = new URLSearchParams({
    quotes: currency,
    start,
    interval,
  });

  const response = await fetch(`${apiUrl}/tickers/${id}/historical?${params}`);

  const data = await response.json();

  if (response.status !== 200 && "error" in data) {
    throw new Error(data.error);
  }

  return data;
};

// SEARCH
export const getSearch = async (q) => {
  const params = new URLSearchParams({
    q,
  });

  const response = await fetch(`${apiUrl}/search/?${params}`);

  return await response.json();
};

// CURRENCIES EXCHANGE
export const getConverter = async ({
  base_currency_id,
  quote_currency_id,
  amount,
}) => {
  const params = new URLSearchParams({
    base_currency_id,
    quote_currency_id,
    amount,
  });

  const response = await fetch(`${apiUrl}/price-converter?${params}`);

  return await response.json();
};
