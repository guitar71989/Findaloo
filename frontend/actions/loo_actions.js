export const REQUEST_LOOS = "REQUEST_LOOS";
export const RECEIVE_LOOS = "RECEIVE_LOOS";

export const requestLoos = () => ({
  type: REQUEST_LOOS
});

export const receiveLoos = (loos) => ({
  type: RECEIVE_LOOS,
  loos
});
