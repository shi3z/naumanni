import React from 'react'
import PropTypes from 'prop-types'

import {UIDialog} from 'src/models'
import CloseDialogUseCase from 'src/usecases/CloseDialogUseCase'


/**
 * カラムのベースクラス
 */
export default class Dialog extends React.Component {
  static contextTypes = {
    app: PropTypes.any,
    context: PropTypes.any,
  }

  static propTypes = {
    dialog: PropTypes.instanceOf(UIDialog).isRequired,
    visible: PropTypes.bool,
  }
  static defaultProps = {
    visible: true,
  }

  constructor(...args) {
    super(...args)
  }

  /**
   * @override
   */
  componentDidMount() {

  }

  /**
   * @override
   */
  render() {
    const dialogClassName = ['dialog']

    if(this.props.visible)
      dialogClassName.push('is-visible')

    return (
      <div className={dialogClassName.join(' ')}>
        <header className="dialog-header">
          {this.renderHeader()}
        </header>
        <div className="dialog-body">
          {this.renderBody()}
        </div>
        <footer className="dialog-footer">
          {this.renderFooter()}
        </footer>
      </div>
    )
  }

  renderHeader() {
    return null
  }

  renderBody() {
    return null
  }

  renderFooter() {
    return null
  }

  close() {
    const {context} = this.context
    context.useCase(new CloseDialogUseCase()).execute(this.props.dialog)
  }

  get app() {
    return this.context.app
  }
}
