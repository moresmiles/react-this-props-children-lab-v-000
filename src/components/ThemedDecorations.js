// Code ThemedDecoration Component Here
import React from 'react';

export default class ThemedDecorations extends React.Component {
  render(){
    const childrenWithClass = React.Children.map(this.props.children, child => {
    return (
      <div className={this.props.theme}>{child}</div>
      );
    });

    return (
      <div className="theme">
        {childrenWithClass}
      </div>
    );
  }
}
