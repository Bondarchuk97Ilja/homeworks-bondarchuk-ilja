const url = 'https://jsonplaceholder.typicode.com';

class CustomHttp {
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.addEventListener('load', () => {
            const resp = JSON.parse(xhr.responseText)
            callback(resp);
        });
    }
    post(url, data, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-type', 'application/json')
        xhr.send(data);
        xhr.addEventListener('load', () => {
            const resp = JSON.parse(xhr.responseText)
            callback(resp);
        });
    }
}



const http = new CustomHttp();

http.get('http.get(${url}/users', (response) => {
    console.log('TODOS --- ', response);
});

const data = {
    body: 'Some body',
    userId: 1,
    title: 'Some title'
};