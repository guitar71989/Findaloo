export const createReview = (review, success, error) => $.ajax({
  url: 'api/reviews/',
  method: 'POST',
  data: {review},
  success,
  error
});

export const destroyReview = function(id, success){
  $.ajax({
    method: 'DELETE',
    url: `api/reviews/${id}`,
    success,
    error: () => console.log('error')
  });
};
