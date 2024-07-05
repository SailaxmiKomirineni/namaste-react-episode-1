
function Customer(props){
    const {DryFruits, quantity, ...rest} = props;
    return (
        <div>
            <h3>DryFruits = {DryFruits}</h3>
            <h3>{quantity}</h3>
            <h3>{JSON.stringify(rest.veg)}</h3>
            <h3>{JSON.stringify(rest.fruits)}</h3>
        </div>
    )    
}

function Shopkeeper(){
    let DryFruits = ['Cashewnuts, ', 'Almonds, ', 'walnuts, ', 'pumpkin seeds,'];
    let quantity = 15;
    let veg = ['tomatos ', 'chillies']
    let fruits = ['orange ', 'apple ', 'dragon'];

    return(
        <div>
            <h1>Father</h1>
            <Customer DryFruits={DryFruits} quantity={quantity} veg={veg} fruits={fruits}/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Shopkeeper/>);