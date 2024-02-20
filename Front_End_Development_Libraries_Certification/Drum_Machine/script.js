const sound = {
    heater_1: {
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    heater_2: {
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    heater_3: {
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    heater_4: {
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    clap: {
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    open_hh: {
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    kick_n_hat: {
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    kick: {
      src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    closed_hh: {
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  }
  
  class DrumPad extends React.Component {
    constructor(props) {
      super(props)
      this.audioRef = React.createRef()
    }
    
    handleClick = () => {
      this.audioRef.current.play()
    }
    
    componentDidMount() {
      document.addEventListener('keydown', this.handleKeyPress);
    }
  
    componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyPress);
    }
    
    handleKeyPress = (event) => {
      if (event.key.toUpperCase() === this.props.text.toUpperCase()) {
        this.audioRef.current.play();
      }
    }
    
    render() {
      return (
        <button className='drum-pad' id={this.props.sound} onClick={this.handleClick}>
          {this.props.text}
          <audio ref={this.audioRef} src={sound[this.props.sound].src} className='clip' id={this.props.text}></audio>
        </button>
      )
    }
  }
  
  class Drum extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <div id='drum-machine'>
          <section>
            <DrumPad sound='heater_1' text='Q'/>
            <DrumPad sound='heater_2' text='W'/>
            <DrumPad sound='heater_3' text='E'/>
            <DrumPad sound='heater_4' text='A'/>
            <DrumPad sound='clap' text='S'/>
            <DrumPad sound='open_hh' text='D'/>
            <DrumPad sound='kick_n_hat' text='Z'/>
            <DrumPad sound='kick' text='X'/>
            <DrumPad sound='closed_hh' text='C'/>
          </section>
          <section id='display'></section>
        </div>
      )
    }
  }
  
  ReactDOM.render(
    <Drum />,
    document.getElementById('root')
  )