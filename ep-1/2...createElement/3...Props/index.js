
function Child(props){
    const {assets, bb} = props;
    return (
        <div>
            <h3>{assets}</h3>
            <h3>{bb}</h3>
        </div>
    )    
}

function Father(){
    let assets = '100 acr';
    let bb = '100 crores';
    return(
        <div>
            <h1>Father</h1>
            <Child assets={assets} bb={bb}/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Father/>);