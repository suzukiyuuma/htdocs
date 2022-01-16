$(document).on('click', '#posts5', function(){

    fetch('http://localhost:8880/api/posts5',
    {
        method: 'GET',
        cache: 'no-cache'
    })
    .then(response => response.text())
    .then(data => {
      console.log(data);
    });
})