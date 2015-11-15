import React from 'react';
import ImageContainer from './utils/ImageContainer';

class View extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
      height: 0,
      loading: false,
    };

    this._element = null;
  }

  componentDidMount () {
    this.bind(this.refs.viewContainer);
  }

  onScroll = () => {
    this.setState({
      y: this._element.scrollTop,
      x: this._element.scrollLeft
    });
  }

  onTouchStart = () => {
    this.setState({
      height: this._element.scrollHeight
    });
  }


  bind (element) {
    this._element = element;

    this._element.addEventListener('scroll', this.onScroll);
    this._element.addEventListener('touchstart', this.onTouchStart);
    this._element.addEventListener('mousedown', this.onTouchStart);
  }

  componentWillUnmount () {
    this._element.removeEventListener('scroll', this.onScroll);
    this._element.removeEventListener('touchstart', this.onTouchStart);
    this._element.removeEventListener('mousedown', this.onTouchStart);
  }

  render () {
    let viewClassNames = 'view';
    let classNames = (this.props.className ? this.props.className + ' ' : '') + 'view-content';
    if (this.state.loading) {
      viewClassNames += ' view-loading';
    }

    return (
      <div ref="viewContainer" className={viewClassNames}>
        {(()=>{
          if (this.props.image) {
            return (<ImageContainer className="view-background" src={this.props.image}></ImageContainer>);
          }
        })()}
        <div className={classNames}>
          { this.props.children }
        </div>
      </div>
    )
  }
}


export default View;
