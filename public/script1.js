

document.getElementById('postButton').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const postContent = document.getElementById('postContent').value;
    const activeCategory = document.querySelector('.category.active').textContent;

    if (username && postContent && activeCategory) {
        addPost(username, postContent, activeCategory);
        clearForm();
    } else {
        alert("Please enter all name, post content, and also select a category!");
    }
});

function addPost(username, content, category) {
    const postsContainer = document.getElementById('postsContainer');

    const existingPosts = Array.from(postsContainer.getElementsByClassName('post'));
    const postExists = existingPosts.some(post=>post.textContent.includes(content) && post.textContent.includes(username));
    if(!postExists){
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML=`<strong>${username}</strong>
        <p>${content}</p>`;
        postsContainer.appendChild(postElement);

        savePostToStorage(username, content, category);
    }
    
}

function clearForm() {
    document.getElementById('username').value = '';
    document.getElementById('postContent').value = '';
}

const categories = document.querySelectorAll('.category');
categories.forEach(category => {
    category.addEventListener('click', function() {
        categories.forEach(cat => cat.classList.remove('active'));
        category.classList.add('active');

        const categoryTitle = document.getElementById('categoryTitle');
        categoryTitle.textContent = ` ${category.textContent}`;

        document.getElementById('postsContainer').innerHTML = '';  
        loadPostsFromStorage(); 
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const defaultCategory = document.querySelector('.category');
    defaultCategory.classList.add('active');
    document.getElementById('categoryTitle').textContent = `${defaultCategory.textContent}`;
    clearPostsFromStorage();
    loadPostsFromStorage();
});


function loadPostsFromStorage() {
    const activeCategory = document.querySelector('.category.active').textContent;

    if(activeCategory.trim().toLowerCase()==='general'){
        return;
    }
   
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];

    savedPosts.forEach(post => {
        if (post.category === activeCategory) {
            addPost(post.username, post.content, post.category);
        }
    });
}

function savePostToStorage(username, content, category) {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const updatedPosts = savedPosts.filter(post=> !(post.username === username && post.content === content && post.category === category));
    updatedPosts.push({username, content, category});
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
}

function clearPostsFromStorage(){
    localStorage.removeItem('posts');
}

// Add an event listener for the "Enter" key on the post content textarea
document.getElementById('postContent').addEventListener('keyup', function(event) {
    if (event.key === 'Enter' && !event.shiftKey) {  // Check if "Enter" is pressed without "Shift"
        event.preventDefault();  // Prevent the default behavior of adding a new line
        document.getElementById('postButton').click();  // Trigger the post button click
    }
});

// Add similar event listener for the username input if needed
document.getElementById('username').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('postContent').focus();  // Move focus to the post content textarea
    }
});
