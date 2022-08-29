const loadCommentDetails = ()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => loadComment(data))
};


const  loadComment=(comments) => {
    
    
    const commentContainer = document.getElementById('comment-container')
    // console.log(comments)

    comments.slice(0,20).forEach((comment) => {
        // console.log(comment)
        const commentDiv = document.createElement('div')
        commentDiv.classList.add('commentStyle')
        commentDiv.innerHTML = `
        <h2 class="text-info">My comments: ${comment.body}</h2>
        <h3>My name: ${comment.name} </h3>
        <h5 class="fw-bold"> My Id: ${comment.id}</h5>
        <h2 class="text-md"> Connect me:${comment.body} </h2>
        <h5 class="fw-bold"> ${comment.email}</h5>
        <button class="text-info" onclick="clicked(${comment.postId})">Details</button>
        
        
        `

        
            
        commentContainer.appendChild(commentDiv)
    
    })


    
}
// added id for clicked function that will dynamically change when click details button

const clicked = (postId) => {
    // console.log('get post id',postId)
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
    // console.log(url)

    fetch(url)
        .then(res => res.json())
        .then(data => displayComment(data));
}

// creat new div dynamically and add commentdata on it
const displayComment = (data) => {
    console.log(data)
    const commentContainer1 = document.getElementById('comment-container1')
    // commentContainer1 = ''
    const newComment = document.createElement('div');
    newComment.classList.add('card-body')
    newComment.innerHTML = `
                <h5 class="card-title"> ${data.body}</h5>
                <p class="card-text">${data.userId}</p>
                <p class="btn btn-primary">Go :${data.title}</p>
                <p class="btn btn-primary">ID :${data.id}</p>
    
    `
    commentContainer1.appendChild(newComment);
}





loadCommentDetails();