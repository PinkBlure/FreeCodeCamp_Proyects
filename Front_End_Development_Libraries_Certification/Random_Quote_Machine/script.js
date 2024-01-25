function App() {
    return (
      <div className='card-body'>
        <blockquote>
          <p id='text' className='card-text'><i className='fas fa-quote-left'/>La cita va aquí</p>
          <cite id='author'>Nombre del Autor</cite>
        </blockquote>
        <div>
          <a id='tweet-quote' className='card-link' href='https://twitter.com/intent/tweet' target='_blank'>Twitter</a>
          <a id='tumbl-quote' className='card-link' href = '#' target='_blank'>Tumbl</a>
        </div>
        <button id='new-quote'>New quote</button>
      </div>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById('quote-box'));