{/* JQuery */}
const getRandomColor = () => {
  
  const colors = [
    '#0d6efd', '#6610f2', '#6f42c1', '#d63384', '#dc3545', '#fd7e14', '#ffc107',
    '#198754', '#20c997', '#0dcaf0'
  ];
  
  const colorIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[colorIndex];
  
  $('p, cite').fadeOut(600, function () {
    $('#tweet-quote, #tumblr-quote, #github, .bg-color, #new-quote').css('background-color', randomColor)
    $('p, cite').css('color', randomColor)
    $(this).fadeIn(700);
  });
}

$(document).ready(function () {
  $('#new-quote').click(function () {
    getRandomColor();
    setTimeout(function() {
      updateQuote(store.dispatch);
    }, 400);
  });
});

{/* Redux */}
const { Provider } = ReactRedux;

const updateQuoteData = data => ({
  type: 'UPDATE',
  data: data
})

const initialState = {
  color: '#f4f4f4',
  quote: 'Hit the "New quote" button to get a new quote!',
  author: 'Creator of this random Quote Machine'
}

const updateQuoteReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE':
      return {
        ...state,
        color: action.data.color,
        quote: action.data.quote,
        author: action.data.author
      }
    default:
      return state
  }
}

const store = Redux.createStore(updateQuoteReducer)

{/* React */}
class Quote extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='card-body'>
    <blockquote className='text-end'>
      <p id='text' className='card-text text-center fs-2'><i id='quote_icon' className='fas fa-quote-left'/> {this.props.quote}</p>
      <cite id='author'>- {this.props.author}</cite>
    </blockquote>
    <div className='d-flex flex-row justify-content-between align-items-end'>
      <div className='d-flex justify-content-between mt-3 align-items-center'>
        <a id='tweet-quote' className='col-md-4 d-flex justify-content-center align-items-center' target='_blank' href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${encodeURIComponent(this.props.quote + '" - ' + this.props.author)}`}>
          <i className='fab fa-twitter' />
        </a>
        <a id='github' className='col-md-4 d-flex justify-content-center align-items-center' href='https://github.com/PinkBlure?tab=overview&from=2024-01-01&to=2024-01-26' target='_blank'>
          <i className='fab fa-github'></i>
        </a>
      </div>
      <button id='new-quote' className='col-md-4'>
        New quote
      </button>
    </div>
  </div>
    )
  }
}

{/* Fetch a random quote from the Quotable API */}
async function updateQuote(dispatch) {
  try {
    const response = await fetch("https://api.quotable.io/random")
    if (!response.ok) {
      throw new Error(`Error fetching quote. Status code: ${response.status}`);
    }
    
    const data = await response.json()
    
    dispatch(updateQuoteData({
      color: '#f4f4f4',
      quote: data.content,
      author: data.author
    }))
    
  } catch (error) {
    console.error("An error occurred during the quote update:", error);
  }
}

const mapStateToProps = state => ({
  color: state.color,
  quote: state.quote,
  author: state.author
})

const mapDispatchToProps = {
  updateQuoteData
}

const ConnectedQuote = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Quote)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedQuote />
  </Provider>,
  document.getElementById('quote-box')
)

