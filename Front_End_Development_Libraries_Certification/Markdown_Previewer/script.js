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
      <div className='col p-0 border'>
        <div className='card-header d-flex justify-content-between align-items-center'>
          <span>Text Editor</span>
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


// class Previewer extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <div className='col card'>
//         <div className='card-header'>Text Editor</div>
//         <div className='card-body'>Esto es un editor</div>
//       </div>
//     )
//   }
// }

ReactDOM.render(
  <div class='row'>
    <Editor />
  </div>,
  document.getElementById('root')
)