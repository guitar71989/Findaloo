export const CREATE_REVIEW = "CREATE_REVIEW";
export const REQUEST_REVIEWS = "REQUEST_REVIEWS";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";

export const createReview = (review) => ({
  type: CREATE_REVIEW,
  review
});
