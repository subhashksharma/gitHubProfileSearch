
const http = new GitHub;


const inputText = document.getElementById('searchUser');
inputText.addEventListener('keydown', (e) => {
    console.log('Event Is listing in App.js' + e.target.value);
    const data = http.getUser('http://api.icndb.com/jokes/random');
    data.then(data => {
        console.log('datat ' + data);
    })
    
} );

// function loadProfile(e) {
//     console.log('listening');
//     console.log('Event Is listing in App.js' + e.target.value);
// }
