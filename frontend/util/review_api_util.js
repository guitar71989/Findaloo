export const createReview = (review, success, error) => $.ajax({
  url: 'api/reviews/',
  method: 'POST',
  data: {review},
  success,
  error
});

export const destroyReview = function(reviewId, success){
  $.ajax({
    method: 'DELETE',
    url: `api/reviews/${reviewId}`,
    success,
    error: () => console.log('error')
  });
};
