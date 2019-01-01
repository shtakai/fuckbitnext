class Prices extends React.Component {
  state = {
    currency: 'USD'
  }

  render() {
    let list = this.extracted(this.state.currency)

    return (
      <div>
        <ul className="list-group">
          {list}
        </ul>
        <br/>
        <select name="" onChange={e => this.setState({currency: e.target.value})} id="" className="form-control">
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>

        </select>
      </div>
    )
  }

  extracted(currency) {
    return <li className="list-group-item">
      Fuckcoin rate for {this.props.bpi[currency].description} : <span
      className="badge badge-primary">{this.props.bpi[currency].code}</span>
      <strong>{this.props.bpi[currency].rate}</strong>
    </li>
  }
}

export default Prices
