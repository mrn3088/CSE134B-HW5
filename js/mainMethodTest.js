import { renderJSON, getDate, form2JSON, displayMethod } from "./methodtest.js";
const url = 'https://httpbin.org/';

document.getElementById("date").value = getDate();
const thePostBtn = document.querySelector('#postBtn');
const theGetBtn = document.querySelector('#getBtn');
const thePutBtn = document.querySelector('#putBtn');
const theDelBtn = document.querySelector('#deleteBtn');
const theClearBtn = document.querySelector('#clearBtn');
const theOpt = document.querySelector("#xhr");


thePostBtn.addEventListener('click', () => {
    if (theOpt.checked) {
        const theXhr = new XMLHttpRequest();
        theXhr.open('POST', `${url}post`);
        theXhr.onreadystatechange = function () {
            if (theXhr.readyState === 4 && theXhr.status === 200) {
                renderJSON(JSON.parse(theXhr.responseText));
                displayMethod(true);
            }
        };
        theXhr.setRequestHeader('Content-Type', 'application/json');
        theXhr.send(form2JSON());
    } else {
        fetch(`${url}post`, {
            method: 'POST',
            body: form2JSON(),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(json => {
                renderJSON(json);
                displayMethod(false);
            })
            .catch(error => console.error(error));;
    }

});

theGetBtn.addEventListener('click', () => {
    if (theOpt.checked) {
        const theXhr = new XMLHttpRequest();
        theXhr.open('GET', `${url}get`);
        theXhr.onreadystatechange = function () {
            if (theXhr.readyState === 4 && theXhr.status === 200) {
                renderJSON(JSON.parse(theXhr.responseText));
                displayMethod(true);
            }
        };
        theXhr.send();
    } else {
        fetch(`${url}get`)
            .then(response => response.json())
            .then(json => {
                renderJSON(json);
                displayMethod(false);
            })
            .catch(error => console.error(error));;
    }
});

thePutBtn.addEventListener('click', () => {
    if (theOpt.checked) {
        const theXhr = new XMLHttpRequest();
        theXhr.open('PUT', `${url}put`);
        theXhr.onreadystatechange = function () {
            if (theXhr.readyState === 4 && theXhr.status === 200) {
                renderJSON(JSON.parse(theXhr.responseText));
                displayMethod(true);

            }
        };
        theXhr.setRequestHeader('Content-Type', 'application/json');
        theXhr.send(form2JSON());
    } else {
        fetch(`${url}put`, {
            method: 'PUT',
            body: form2JSON(),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(json => {
                renderJSON(json);
                displayMethod(false);
            })
            .catch(error => console.error(error));;
    }
});

theDelBtn.addEventListener('click', () => {
    if (theOpt.checked) {
        const theXhr = new XMLHttpRequest();
        theXhr.open('DELETE', `${url}delete`);
        theXhr.onreadystatechange = function () {
            if (theXhr.readyState === 4 && theXhr.status === 200) {
                renderJSON(JSON.parse(theXhr.responseText));
                displayMethod(true);

            }
        };
        theXhr.setRequestHeader('Content-Type', 'application/json');
        theXhr.send(form2JSON());
    } else {
        fetch(`${url}delete`, {
            method: 'DELETE',
            body: form2JSON(),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(json => {
                renderJSON(json);
                displayMethod(false);
            })
            .catch(error => console.error(error));;
    }
});

theClearBtn.addEventListener('click', () => {
    const output = document.getElementById("output");
    output.innerHTML = "";
    const outputHeader = document.getElementById("output-h");
    outputHeader.innerHTML = "Output";
});