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
        resolve();
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve) => {
        user.lastActivity = new Date().getTime();
        console.log(`Last activity done at: ${user.lastActivity}`);
        resolve();
    });
} 

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
//getPosts();

// createPost({title: "post 3", body: "This is post 3"}).then(() => {
//     getPosts();
//     updateLastUserActivityTime();
// });

const makePosts = async () => {
    const post3 = createPost({title: "post 3", body: "This is post 3"});
    
    await post3;
    getPosts();
    updateLastUserActivityTime();

    const post4 = createPost({title: "post 4", body: "This is post 4"});
    await post4;
    getPosts();
    
    await updateLastUserActivityTime();
    await deletePost();

    deletePost();
}

makePosts();