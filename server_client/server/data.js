class Post{
    constructor(title, lead){
        this.id = Math.random();
        this.title  = title;
        this.lead = lead;
    }
}

module.exports = Post;

