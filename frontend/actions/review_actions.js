export const CREATE_REVIEW = "CREATE_REVIEW";
export const REQUEST_REVIEWS = "REQUEST_REVIEWS";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const DESTROY_REVIEW = "DESTROY_REVIEW";

export const createReview = (review) => ({
  type: CREATE_REVIEW,
  review
});

export const destroyReview = (reviewId) => ({
  type: DESTROY_REVIEW,
  reviewId
});
