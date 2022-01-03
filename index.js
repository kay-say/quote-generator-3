// function Quote(props){
//     return(
//         <div className="quote">
            
//         </div>
//     )
// }

function Header(props){
    return(
        <div className="header">
            <div className="quote">{props.quote}</div>
            <div className="author">{props.author}</div>
        </div>
    )
}

function Footer(props){
    return(
        <div className="footer">
            <div className="social-media">
                <i className="flex fab fa-twitter"></i>
                <i className="flex fab fa-tumblr"></i>
                <i className="flex fab fa-facebook"></i>
            </div>
            <button className="btn" onClick={props.fetchQuote}>Next quote</button>
        </div>
    )
}

function App(){
    function fetchQuote(){
        var options = {
          method: 'POST',
          url: 'https://motivational-quotes1.p.rapidapi.com/motivation',
          headers: {
            'content-type': 'application/json',
            'x-rapidapi-host': 'motivational-quotes1.p.rapidapi.com',
            'x-rapidapi-key': '65748579a8msh0f80d7db17667f8p165c7djsn7967c9cd96d6'
          },
          data: {key1: 'value', key2: 'value'}
        };
        
        axios.request(options).then(function (response) {
            const quote=response.data.split("-")[0]
            const author=response.data.split("-")[1]
            setQuote(quote)
            setAuthor(author)
        }).catch(function (error) {
            console.error(error);
        })
    }
    React.useEffect(()=>{
        fetchQuote()
    },[])
    const [quote, setQuote] = React.useState("")
    const [author, setAuthor] = React.useState("")
    return(
        <div className="app">
            <Header quote={quote} author={author} />
            <Footer fetchQuote={fetchQuote} />
        </div>
    )
}

ReactDOM.render(<App />,document.getElementById("root"))