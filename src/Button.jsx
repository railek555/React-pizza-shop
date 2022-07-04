import React from 'react';
import classNames from 'classnames';



//class Button extends React.Component {

//componentDidMount() {
//    console.log('Компонент отобразился')
//}

//   render() { 
// 1.. return <button className={`button ${this.props.outline ? 'button--outline' : ''} `}>{this.props.children}</button>
// 2.. return <button className={classNames('button', {
//    'button--outline': this.props.outline,
// })}></button>
// }
// }

function Button(props) {
    return (
        <button className={classNames('button', {
            'button--outline': props.outline,
        })}>
            {props.children}
        </button>

    );
}
export default Button;