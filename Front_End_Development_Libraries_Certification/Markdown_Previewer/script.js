class Editor extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        collapsed: false
      }
      this.toggleCollapse = this.toggleCollapse.bind(this);
    }
  
    toggleCollapse() {
      this.setState({ collapsed: !this.state.collapsed });
    }
  
    render() {
      return (
        <div className='col card'>
          <div className='card-header'>
            Text Editor
            <button className="btn btn-primary" type="button" onClick={this.toggleCollapse}>
              <i className={this.state.collapsed ? "fas fa-window-maximize" : "fas fa-window-minimize"}></i>
            </button>
          </div>
          <div id='editor-card-body' className={this.state.collapsed ? 'card-body collapse' : 'card-body'}>
            <textarea id='editor'></textarea>
          </div>
        </div>
      );
    }
  }
  
  class Previewer extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <div className='col card'>
          <div className='card-header'>Text Editor</div>
          <div className='card-body'>Esto es un editor</div>
        </div>
      )
    }
  }
  
  ReactDOM.render(
    <div class='row'>
      <Editor />
      <Previewer />
    </div>,
    document.getElementById('root')
  )