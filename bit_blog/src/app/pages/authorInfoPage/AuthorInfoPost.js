import React from 'react';

const AuthorInfoPost = () => {
    return (
        <div className='container'>

            <div className='row'>
                <div className='col-4'>
                    <a href="#/authors">All authors</a>
                </div>
                {/* <div className='col-8'>
                    <h1>Single Author</h1>
                </div> */}
                </div>

                <div className='row' id='name'>
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

            <div className='row' id='address'>
                <div className='col-6'>
                    <h1>Address </h1>
                    <p>street: Bla Bla Str</p>
                    <p>city : Gvdbfod</p>
                    <p>zipcode : 1247328</p>

                </div>
                <div className='col-5' >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2798908793!2d-74.2598680909357!3d40.697670067719045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z0IrRg9GY0L7RgNC6LCDQodGY0LXQtNC40ZrQtdC90LUg0JTRgNC20LDQstC1!5e0!3m2!1ssr!2srs!4v1521888601001" width="350" height="200" frameborder="0" style={{border:0}} allowfullscreen></iframe>
                </div>
            </div>

            <div className='row' id='company'>
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