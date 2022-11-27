const posts = [{title: "post 1", body: "This is post 1", createdAt: new Date().getTime()},
{title: "post 2", body: "This is post 2", createdAt: new Date().getTime()}];

const user = {};

let interval_id = 0;

function getPosts() {
    clearInterval(interval_id);
    interval_id = setInterval(() => {
        setTimeout(() => { 
            let output = "";
            posts.forEach((post) => {
                const millis = (new Date() - post.createdAt);
                const seconds = Math.floor(millis/1000);
                output += `<li>${post.title} created ${seconds} seconds ago</li>`;
            });
            document.body.innerHTML = output;
        }, 0);
    }, 1000);
    
}

function createPost (post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({...post, createdAt:new Date().getTime()});
        }, 1000);
        const error = false;

        if(!error) {
            resolve();
        } else {
            reject("Something went wrong");
        }
    });
}
//create post 3 and set resolve and reject outcomes
createPost({title: "post 3", body: "This is post 3"}).then(() => {
    getPosts();
    updateLastUserActivityTime();
})
.catch((err) => console.log(err));

function deletePost() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.pop();
            if(posts.length !== 0){
                resolve();
            }else{
                reject("Empty array (catch block)");
            }
        }, 2000);
        
    });
}

// deletePost().then(() => {
//     deletePost().then(() => {
//         deletePost().catch((err) => console.log(err));
//     })
// });

//create post 4 and call delete after 1 second
createPost({title: "post 4", body: "This is post 4"}).then(() => {
    setTimeout(() => {
        //deletePost()
    }, 1000);
})

function updateLastUserActivityTime() {
    return new Promise((resolve) => {
        user.lastActivity = new Date().getTime();
        console.log(`Last activity done at: ${user.lastActivity}`);
        resolve();
    });
} 

Promise.all([createPost(), updateLastUserActivityTime()]).then(() => {
    console.log(posts);
    console.log(user.lastActivity)
})

deletePost().then(() => console.log(posts));

