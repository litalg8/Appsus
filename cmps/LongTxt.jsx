

export class LongTxt extends React.Component {

    state = {
        isLongTxtShown: false,
        numCharToShow: 20
    }
    onClick = () => {
        // this.setState({ isLongTxtShown: !this.state.isLongTxtShown })
    }
    render() {
        const { txt } = this.props;
        const isLong = this.state.isLongTxtShown;
        const className = txt.length > this.state.numCharToShow ? 'long-txt' : '';
        return (
            <p className={`${className} ${this.props.className?this.props.className:''}`} onClick={this.onClick}>
                {(isLong || txt.length <= this.state.numCharToShow) ? txt : txt.substr(0, this.state.numCharToShow) + '...'}
            </p>
        )
    }
}