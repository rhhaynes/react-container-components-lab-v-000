class MovieReviews extends React.Component {
  render() {
    return (
      <div className="review-list">
        this.props.reviews.map( review => <div className="review">review</div> ).join('')
      </div>
    );
  }
}
