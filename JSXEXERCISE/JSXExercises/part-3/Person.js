const Person =(props)=>{
    let text = props.age >=18 ? "Please go vote!":"You must be 18";
    let hobbies =props.hobbies.map(h=><li>{h}</li>);
    return <div>
        <p>Information about this person:</p>
        <ul>
            <li>Name:{props.name}</li>
            <li>Age:{props.age}</li>
        </ul>
        <ul>
            hobbies:{hobbies}
        </ul>
        <h3>{text}</h3>
       
    </div>
}