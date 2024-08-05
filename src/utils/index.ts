const exchangeRates: { [key: string]: number } = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.75,
  };
  
  export const convertPrice = (price: number, currency: keyof typeof exchangeRates) => {
    return parseFloat((price * exchangeRates[currency]).toFixed(2));
  };