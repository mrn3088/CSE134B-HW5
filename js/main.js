import { theEditMode, showDialog, cancelDialog, submitPost, displayPosts } from "./blog.js";
const theAddButton = document.getElementById('add-btn');
theAddButton.addEventListener('click', () => {
    theEditMode = -1;
    showDialog();
});
const theCancelButton = document.getElementById('cancel-btn');
theCancelButton.addEventListener('click', cancelDialog);
const thePostButton = document.getElementById('post-btn');
thePostButton.addEventListener('click', submitPost);
displayPosts();