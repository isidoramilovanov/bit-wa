
const ListItem = (props) => {
    return (
        <li>{props.value}</li>
    )
}

const ShoppingList = (props) => {
    return (
        <ul>
            {props.items.map((item,i)=><ListItem key ={i} value ={item}/>)}
        </ul>
    )
}

const App = (props) => {
    return(
        <div>
            <h1>This is our shopping list!</h1>
            <ShoppingList items = {props.lists}/>
        </div>
    )
}



const rootElement = document.getElementById('root');
ReactDOM.render(<App lists={['bread', 'milk', 'eggs', 'cream', 'chocolate']}/>, rootElement );