function Card(props){
    return(
        <div className="card">
            <h2>{props.cardName}</h2>
            <p>{props.description}</p>
            <button className="btn">Button</button>
        </div>
    );
}

export default Card;