const loremIpsum = require('lorem-ipsum');
const Post = require('./data.js');

const generateTitle = function () {
    let title = loremIpsum({
        units: 'words',
        count: 3
    })
    return title;
}

const generateLead = function () {
    let lead = loremIpsum({
        units: 'sentences',
        count: 2
    })
    return lead;
}

const generateBlog = function (number) {
    let blogs = [];
    for (let i = 0; i < number; i++) {
        let post = new Post(generateTitle(), generateLead());
        blogs.push(post);
    }

    return blogs;
}

module.exports = generateBlog;