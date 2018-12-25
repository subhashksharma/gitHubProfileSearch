class GitHub {

    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json()).then(data => resolve(data)).catch(err => reject(err));
        });
    }

   async getUser(url) {

    const datafetch = await fetch(url);

    const res = await datafetch.json();

    return {
        res : res
    }
   }

}