class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse() {
    this.setState({ collapsed: !this.state.collapsed });
  }

  render() {
    return (
      <div className='p-0 border'>
        <div className='card-header d-flex justify-content-between align-items-center'>
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
          <textarea id='editor' className='w-100'></textarea>
        </div>
      </div>
    );
  }
}


class Previewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse() {
    this.setState({ collapsed: !this.state.collapsed });
  }

  render() {
    return (
      <div className='p-0 border'>
        <div className='card-header d-flex justify-content-between align-items-center'>
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
          className={`card-body ${this.state.collapsed ? 'collapse' : ''}`} 
          style={{ height: this.state.collapsed ? '0' : 'auto', overflow: 'hidden' }}>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <div className='row mt-3 mx-3'>
    <div className='col-6'>
      <Editor />
    </div>
    <div className='col-6'>
      <Previewer />
    </div>
  </div>,
  document.getElementById('root')
)
