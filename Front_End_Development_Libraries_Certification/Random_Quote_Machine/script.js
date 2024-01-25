class Quote extends React.Component {
    
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className='card-body'>
        
        <blockquote className='text-end'>
          <p id='text' className='card-text text-center fs-2'>{/* <i className='fas fa-quote-left'/> */}Loading . . .</p>
          <cite id='author'></cite>
        </blockquote>
        
        <div>
          <a id='tweet-quote' className='card-link' href='https://twitter.com/intent/tweet' target='_blank'><i className='fab fa-twitter'/></a>
          <a id='tumbl-quote' className='card-link' href = '#' target='_blank'><i className='fab fa-tumblr'/></a>
        </div>
        
        <button id='new-quote' style={{ fontSize: '0.8rem' }} onClick={updateQuote}>New quote</button>
        
      </div>
    )
  }
}

// Fetch a random quote from the Quotable API
async function updateQuote() {

  const response = await fetch("https://api.quotable.io/random")
  const data = await response.json()
  
  if (response.ok) {
    console.log(data.content)
    console.log(data.author)
  } else {
    console.log("An error occured")
  }
}

ReactDOM.render(<Quote />, document.getElementById('quote-box'))
