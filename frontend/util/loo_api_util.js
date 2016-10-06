export const fetchLoos = function(success){
  $.ajax({
    method: 'GET',
    url: 'api/loos/',
    success,
    error: () => console.log('error')
  });
};
