const tweet = (props) =>{
    return (
        <ul>
            <li>name:{props.name}</li>
            <li>Username:{props.username}</li>
            <li>Tweet:{props.tweet}</li>
            <li>date:{props.date}</li>
        </ul>
    );
}