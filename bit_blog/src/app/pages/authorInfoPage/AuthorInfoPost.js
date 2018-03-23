import React from 'react';

const AuthorInfoPost = () => {
    return (
        <div className='container'>

            <div className='row'>
                <div className='col-4'>
                    <a href="#/authors">All authors</a>
                </div>
                <div className='col-8'>
                    <h1>Single Author</h1>
                </div>
                <div className='col-4'>
                    <img />
                </div>
                <div className='col-8'>

                    <h1>Name Surname </h1>
                    <p>username : my_cool_username</p>
                    <p>email : my_cool@email.com</p>
                    <p>phone : 1247328</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-7'>
                    <h1>Address </h1>
                    <p>street: Bla Bla Str</p>
                    <p>city : Gvdbfod</p>
                    <p>zipcode : 1247328</p>

                </div>
                <div className='col-5'>
                    <p>a</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-7'>
                    <h1>Company </h1>
                    <p>name: Giudfi</p>
                    <p>slogan: 77043</p>
                </div>
            </div>

        </div >
    )
}

export default AuthorInfoPost