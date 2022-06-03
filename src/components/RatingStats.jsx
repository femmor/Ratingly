const RatingStats = ({ ratingItems }) => {
  // Calculate average rating
  let average =
    ratingItems.reduce((acc, curr) => acc + curr.rating, 0) /
    ratingItems.length;

  average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className="rating-stats">
      {ratingItems.length > 0 && (
        <>
          <div className="rating-stats-item">
            <div className="rating-stats-item-label">
              Average Rating{' '}
              <span
                style={{
                  color: '#E3DCC2',
                }}
              >
                {ratingItems.length > 0 ? average : 0}
              </span>
            </div>
          </div>
          <div className="rating-stats-item">
            <div className="rating-stats-item-label">
              <span
                style={{
                  color: '#E3DCC2',
                }}
              >
                {ratingItems.length}
              </span>{' '}
              Rating{ratingItems.length > 1 ? 's' : ''}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default RatingStats;
