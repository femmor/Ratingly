import RatingItem from './RatingItem';
import { motion, AnimatePresence } from 'framer-motion';

const RatingList = ({ ratingItems, deleteRating }) => {
  // Check to see o=if there are any ratings
  if (!ratingItems || ratingItems.length === 0) {
    return <p>No Ratings Yet!</p>;
  }

  return (
    <div className="rating-list">
      <AnimatePresence initial={false}>
        {ratingItems.map(ratingItem => (
          <motion.div
            key={ratingItem.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <RatingItem
              key={ratingItem.id}
              ratingItem={ratingItem}
              handleDelete={deleteRating}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
export default RatingList;
