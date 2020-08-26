
export class Modal extends React.Component {
    state = {
        isShown: true
    }
    closeModal = () => {
        this.setState({ isShown: false })
    }
    render() {
        console.log('rendering modal');
        const { isShown } = this.state
        const { children } = this.props
        return (
            <div className={ `modal-wrapper ${isShown ? '' : 'hide'}` } onClick={ this.closeModal } >
                <div className="modal-content" onClick={ (ev) => ev.stopPropagation() }>
                    <button onClick={ this.closeModal }>X</button>
                    { children }
                </div>
            </div >
        )
    }
}
