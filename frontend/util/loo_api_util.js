export const fetchLoos = function(filters, success){
  $.ajax({
    method: 'GET',
    url: 'api/loos/',
    data: filters,
    success,
    error: () => console.log('error')
  });
};
