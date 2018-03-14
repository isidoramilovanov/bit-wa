const divBlog = function (blogs) {
    let mainHeading = $(`<h1 class = "#c62828 red darken-3 "> Blog </h1>`);

    $('body').append(mainHeading);
    
    blogs.forEach(element => {
        let div = $(`<div class= 'card-panel cyan darken-3'>
        <h4>${element.title}</h4> 
        <p>${element.title}</p>
        </div>`)
        
        $(div).css({
                'color': 'white',
                'width': '80%',
                'margin': '10px auto'
            });
            let title = $('<h4>');
            
            $('body').append(div);
        });
        let style = $(`<style>
        h1{
            color: white;
            text-align: center;
            padding: 10px 0;
        }
        </style>`)
    
        $('head').append(style);
}

export default divBlog;