
const LoremItem = (props) => {
    return (
        <li className="col s8 offset-s2 card-panel light-green darken-3">
        
            <h5>{props.value.title}</h5>
            <p>{props.value.body}</p>
        </li>
    )
}

const LoremList = (props) => {
    return (
        <ul>
             {props.lists.map((item)=><LoremItem key ={item.id} value ={item}/>)}
        </ul>
    )

    
}

const App = (props) => {
    return (
        <div>
            <h3 className="col s12 card-panel deep-purple lighten-2 center-align" >Posts</h3>
            <LoremList lists = {props.posts}/>
        </div>
    )
}


const rootElement = document.getElementById('root');
ReactDOM.render(<App posts={postsData}/>, rootElement );