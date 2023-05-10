function loadPosts () {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}

loadPosts();

function displayPost (data) {
    const postsContainer = document.getElementById('posts-container');
    for (const post of data) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        postDiv.innerHTML = `
            <h4>User-${post.userId}</h4>
            <h5>Title: ${post.title}</h5>
            <p>User- ${post.body}</p>
        `;
        postsContainer.appendChild(postDiv);
    }
}