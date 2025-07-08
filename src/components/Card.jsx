function Card(props){
    return(
        <div className="text-left bg-green-500 p-6 rounded-lg shadow-md">
            <h2>{props.cardName}</h2>
            <p>{props.description}</p>
            <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">BUTTON</button>
        </div>
    );
}

export default Card;