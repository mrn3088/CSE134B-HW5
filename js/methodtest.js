export function renderJSON(json) {
    const output = document.getElementById("output");
    output.innerHTML = "<pre>" + JSON.stringify(json, null, 2) + "</pre>";
};

export function getDate() {
    return new Date().toLocaleString();
};

export function form2JSON() {
    const theForm = {
        id: document.getElementById("id").value,
        article_name: document.getElementById("article_name").value,
        article_body: document.getElementById("article_body").value,
        date: getDate()
    };
    return JSON.stringify(theForm);
};