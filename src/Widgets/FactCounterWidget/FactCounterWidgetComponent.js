import * as React from 'react';
import * as Scrivito from 'scrivito';
import AnimateOnReveal from "../../Components/AnimateOnReveal";
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder';

class FactCounterComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
    this.widget = this.props.widget;

  }

  pause () {

  }

  tick() {
    if(this.state.seconds <  this.val ) {
    this.setState(prevState => ({

      seconds: prevState.seconds + 1

    }));
  }
  }

  componentWillMount() {
    this.speed =  this.widget.get('speed');
    setInterval(() => this.pause(), 10000);


    this.interval =  setInterval(() => this.tick(), parseInt(this.speed));
    this.val =  this.widget.get('value');

  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    if (!this.speed.length) {
      return (
        <InPlaceEditingPlaceholder center={ true }>
          Add content in widget properties.
        </InPlaceEditingPlaceholder>
      );
    }


    return (

   <FactContent
      widget={ this.widget }
      sec = {this.state.seconds}
    />

    );
  }

}



  const FactContent = Scrivito.connect(({ widget, sec}) => {
  const key = widget.get('key');
  let value = sec;
  const postfix = widget.get('postfix');

  return (
    <AnimateOnReveal animation={widget.get("animation")}>
    <div className="fact">

        <span className="value">{ value }  { postfix }</span>
        <span className="key"> { key }</span>

    </div>
    </AnimateOnReveal>
  );
});

Scrivito.provideComponent('FactCounterWidget', FactCounterComponent);