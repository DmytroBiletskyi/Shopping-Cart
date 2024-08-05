const SET_CURRENCY = 'SET_CURRENCY';

export const setCurrency = (currency: string) => ({
  type: SET_CURRENCY,
  payload: currency,
});

const initialCurrencyState = 'USD';

const currencyReducer = (state: string = initialCurrencyState, action: any): string => {
  switch (action.type) {
    case SET_CURRENCY:
      return action.payload;
    default:
      return state;
  }
};

export default currencyReducer;