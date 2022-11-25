const posts = [{title: "post 1", body: "This is post 1", createdAt: Date.now()},
{title: "post 2", body: "This is post 2", createdAt: Date.now()}];

let intervalId =  0;

function getPosts() {
    clearInterval(intervalId);
    intervalId = setInterval(() => { //keeps calling getposts every second
        setTimeout(() => { 
            let output = "";
            posts.forEach((post) => {
                const millis = (new Date() - post.createdAt);
                const seconds = Math.floor(millis/1000);
                output += `<li>${post.title} created ${seconds} seconds ago</li>`;
            });
            document.body.innerHTML = output;
        }, 1000);
    }, 1000);
    
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push({...post, createdAt: new Date().getTime()});
        
    }, 2000);
}

createPost({title: "post 3", body: "This is post 3"}, getPosts);

function create4thPost(post, callback) {
    setTimeout(() => {
        posts.push({...post, createdAt: new Date().getTime()});
        callback();
    }, 3000);
}
create4thPost({title: "post 4", body: "This is post 4"}, getPosts);