class VideoDetails {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: this.target.value })}
        />
      </div>
    );
  }
}
