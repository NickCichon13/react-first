const person = (props) => {
    let reply;
    if(props.age < 18 || props.name.length > 8 ){
        reply = "You need to be 18 years or older kid!"
    } else if(props.age > 18){
        reply = "go vote!"
    } else {
        reply = (props.name).pop(2)
    }

    return (
        <div>
            <p>
                <b>OtherPerson:</b>How old are you?
            </p>
            <p>
                <b>Person:</b> ia am {props.age} years old!
            </p>
            <p>
                <b>Otherperson:</b> {reply}
            </p>
            <ul>
                <li>{props.hobbies}</li>
                <li>{props.hobbies}</li>
                <li>{props.hobbies}</li>
            </ul>
        </div>
    )

}