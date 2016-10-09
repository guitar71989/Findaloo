export const REQUEST_LOOS = "REQUEST_LOOS";
export const RECEIVE_LOOS = "RECEIVE_LOOS";

export const REQUEST_LOO = "REQUEST_LOO";
export const RECEIVE_LOO = "RECEIVE_LOO";


export const requestLoos = () => ({
  type: REQUEST_LOOS
});

export const requestLoo = (id) => ({
  type: REQUEST_LOO,
  id
});

export const receiveLoos = (loos) => ({
  type: RECEIVE_LOOS,
  loos
});

export const receiveLoo = (loo) => ({
  type: RECEIVE_LOO,
  loo
});
