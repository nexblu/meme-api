class MemeRandom {
    constructor() {
        this.python = `import requests

url = 'http://127.0.0.1:8000/api/v1/meme/random'
params = {'amount': 1}
headers = {'Accept': 'application/json'}

response = requests.get(url, params=params, headers=headers)

if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print(f"Error: {response.status_code}")
    print(response.text)`;

        this.js = `const url = 'http://127.0.0.1:8000/api/v1/meme/random?amount=1';
const headers = { 'Accept': 'application/json' };

fetch(url, { method: 'GET', headers })
        .then(response => response.json())
        .then(data => {
            console.log('Result:', data);
        })
        .catch(error => console.error(error));`

        this.curl = `curl -X 'GET' \
'http://127.0.0.1:8000/api/v1/meme/random?amount=1' \
-H 'accept: application/json'`
    }
}

class MemeType {
    constructor() {
        this.python = `import requests

url = 'http://127.0.0.1:8000/api/v1/meme/type'
params = {'category': 'programming'}
headers = {'accept': 'application/json'}

response = requests.get(url, params=params, headers=headers)

if response.status_code == 200:
    json_data = response.json()
    print(json_data)
else:
    print(f'Error: {response.status_code}, {response.text}')`;

        this.js = `const url = 'http://127.0.0.1:8000/api/v1/meme/type?category=programming';
const headers = { 'Accept': 'application/json' };

fetch(url, { method: 'GET', headers })
    .then(response => response.json())
    .then(data => {
        console.log('Result:', data);
    })
    .catch(error => console.error(error));`

        this.curl = `curl -X 'GET' \
'http://127.0.0.1:8000/api/v1/meme/type?category=programming' \
-H 'accept: application/json'`
    }
}

class JokeRandom {
    constructor() {
        this.python = `import requests

url = 'http://127.0.0.1:8000/api/v1/jokes/random'
params = {'amount': 1}
headers = {'Accept': 'application/json'}

response = requests.get(url, params=params, headers=headers)

if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print(f"Error: {response.status_code}")
    print(response.text)`;

        this.js = `const url = 'http://127.0.0.1:8000/api/v1/jokes/random?amount=1';
const headers = { 'Accept': 'application/json' };

fetch(url, { method: 'GET', headers })
        .then(response => response.json())
        .then(data => {
            console.log('Result:', data);
        })
        .catch(error => console.error(error));`

        this.curl = `curl -X 'GET' \
'http://127.0.0.1:8000/api/v1/jokes/random?amount=1' \
-H 'accept: application/json'`
    }
}

class JokeType {
    constructor() {
        this.python = `import requests

url = 'http://127.0.0.1:8000/api/v1/jokes/type'
params = {'amount': 1}
headers = {'Accept': 'application/json'}

response = requests.get(url, params=params, headers=headers)

if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print(f"Error: {response.status_code}")
    print(response.text)`;

        this.js = `const url = 'http://127.0.0.1:8000/api/v1/jokes/random?amount=1';
const headers = { 'Accept': 'application/json' };

fetch(url, { method: 'GET', headers })
        .then(response => response.json())
        .then(data => {
            console.log('Result:', data);
        })
        .catch(error => console.error(error));`

        this.curl = `curl -X 'GET' \
'http://127.0.0.1:8000/api/v1/jokes/random?amount=1' \
-H 'accept: application/json'`
    }
}

export { MemeRandom, MemeType, JokeRandom, JokeType }