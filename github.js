class GitHub {

    const url = http.getUser('https://api.github.com/user/');


    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json()).then(data => resolve(data)).catch(err => reject(err));
        });
    }

   async getUser(url, username) {

    const datafetch = await fetch(url +username);

    const res = await datafetch.json();

    return {
        res : res
    }
   }

}