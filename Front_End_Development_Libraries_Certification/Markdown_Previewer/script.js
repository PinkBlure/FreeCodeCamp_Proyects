import { marked } from "https://esm.sh/marked"

marked.setOptions({
  breaks: true
})

const text = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![Cat Logo](https://svgsilh.com/svg_v2/2029245.svg)`

class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      content: text
    }
    this.textareaRef = React.createRef()
    this.toggleCollapse = this.toggleCollapse.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.updateTextareaHeight()
  }
  
  toggleCollapse() {
    this.setState({ collapsed: !this.state.collapsed })
  }
  
  handleChange(event) {
    const content = event.target.value
    this.setState({content})
    this.props.onContentChange(content)
    this.updateTextareaHeight()
  }
  
  updateTextareaHeight() {
    const textarea = this.textareaRef.current;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  render() {
    return (
      <div className='p-0 border-line'>
        <div className='card-header d-flex justify-content-between align-items-center rounded-0'>
          <span>
            <i className="bi bi-emoji-smile"></i>
            {' '}Editor
          </span>
          <button type="button" onClick={this.toggleCollapse}>
            <i className={this.state.collapsed ? "fas fa-window-maximize" : "fas fa-window-minimize"}></i>
          </button>
        </div>
        <div 
          id='editor-card-body' 
          className={`card-body ${this.state.collapsed ? 'collapse' : ''}`} 
          style={{ height: this.state.collapsed ? '0' : 'auto', overflow: 'hidden' }}>
          <textarea id='editor' className='w-100 p-4' value={this.state.content} onChange={this.handleChange} ref={this.textareaRef} style={{ height: 'auto', overflowY: 'hidden', resize: 'none' }}></textarea>
        </div>
      </div>
    );
  }
}


class Previewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      htmlContent: marked(props.content)
    };
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse() {
    this.setState({ collapsed: !this.state.collapsed });
  }
  
  componentDidUpdate(prevProps) {
    if(prevProps.content !== this.props.content) {
      const htmlContent = marked(this.props.content)
      this.setState({htmlContent})
    }
  }

  render() {
    return (
      <div className='p-0 border-line'>
        <div className='card-header d-flex justify-content-between align-items-center rounded-0'>
          <span>
            <i className="bi bi-emoji-smile-fill"></i>
            {' '}Previewer
          </span>
          <button type="button" onClick={this.toggleCollapse}>
            <i className={this.state.collapsed ? "fas fa-window-maximize" : "fas fa-window-minimize"}></i>
          </button>
        </div>
        <div 
          id='preview' 
          className={`card-body ${this.state.collapsed ? 'collapse' : ''} p-4`} 
          style={{ height: this.state.collapsed ? '0' : 'auto', overflow: 'hidden' }}
          dangerouslySetInnerHTML={{__html: this.state.htmlContent}}>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: text
    }
    
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(content) {
    this.setState({content})
  }
  
  render() {
    return (
      <div className='container mt-3'>
        <div className='row'>
          <div className='col-lg-6'>
            <Editor onContentChange={this.handleChange} />
          </div>
          <div className='col-lg-6 mt-lg-0 mt-3'>
            <Previewer content={this.state.content}/>
          </div>
        </div>
      </div>
    )
  }
  
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
