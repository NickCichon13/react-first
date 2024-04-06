const App = () => {
<div>
    <tweet
        name = "joe"
        username = "joeslick"
        tweet = "Happy Friday!"
        date = {new Date().toDateString}
    />
    <tweet
        name = "mark"
        username = "markman"
        tweet = "How about this weather?"
        date = {new Date().toDateString}
    />
    <tweet
        name = "sam"
        username = "samjam"
        tweet = "I love react!"
        date = {new Date().toDateString}
    />
</div>
}

ReactDOM.render(<App/>,
  document.getElementById("root"));