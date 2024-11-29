var wand = document.getElementsByClassName("fa-wand-sparkles");
var trash = document.getElementsByClassName("fa-trash-o");
var pin = document.getElementsByClassName("pinned")
document.querySelector('.get-spell').addEventListener('click', () => {
  // First fetch request (GET) to get data from the API
  fetch("https://hp-api.onrender.com/api/spells")
    .then(response => response.json())
    .then(data => {
      // Pick a random spell from the fetched data
      window.location.reload(true); 
      const randomNumber = Math.round(Math.random() * 77);
      const randomSpell = data[randomNumber];

      // Log the random spell data
      console.log(randomSpell);
      console.log(randomSpell.name);
      console.log(randomSpell.description)

      // Update the DOM with the spell name and description
      

      // Now, send this data to the server via a POST request
      const postData = {
        name: randomSpell.name,
        description: randomSpell.description
      };
      

      // Second fetch request (POST) to send data to the server
      fetch("savespells", {
        method: 'POST',           // Specify POST method
        headers: {
          'Content-Type': 'application/json',  // Sending JSON data
        },
        body: JSON.stringify(postData)         // Send the random spell data as JSON
      })
        .then(response => response.json())  // Parse the JSON response from the server
        .then(postResult => {
          // Log the response from the server
          console.log('Server Response:', postResult);
          
        })
        .catch(err => {
          console.log(`Error posting data to the server: ${err}`);
        });
    })
    .catch(err => {
      console.log(`Error fetching data from the API: ${err}`);
    });
});


Array.from(wand).forEach(function(element) {
  element.addEventListener('click', function(){
    console.log('Wand Working')
    const postData = {
      name: element.closest('li').querySelector('.spellName').innerText,
      description: element.closest('li').querySelector('.spellDescription').innerText
    };

    fetch('wand', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(postData)
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        
        const postData = {
          name: element.closest('li').querySelector('.spellName').innerText,
          description: element.closest('li').querySelector('.spellDescription').innerText
        };
        
        fetch('savespells', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(postData)
        }).then(function (response) {
          window.location.reload()
        })
      });
});

Array.from(pin).forEach(function(thumbtack) {
  thumbtack.addEventListener('click', function(event){
    console.log('Thumbtack working!')
    const postData = {
      name: thumbtack.closest('li').querySelector('.spellName').innerText,
      description: thumbtack.closest('li').querySelector('.spellDescription').innerText,
      pinned: thumbtack.classList.contains('fa-thumbtack')
      
    };
    
    fetch('thumbtack', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    }).then(function (response) {
      window.location.reload()
    })
  });
});