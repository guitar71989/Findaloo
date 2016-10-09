export const fetchLoos = function(filters, success){
  $.ajax({
    method: 'GET',
    url: 'api/loos/',
    data: filters,
    success,
    error: () => console.log('error')
  });
};

export const fetchLoo = function(id, success){
  $.ajax({
    method: 'GET',
    url: `api/loos/${id}`,
    success,
    error: () => console.log('error')
  });
};
