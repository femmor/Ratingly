import { useContext } from 'react';
import RatingContext from '../context/RatingContext';
import RatingItem from './RatingItem';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from './shared/Loader';

const RatingList = () => {
  // Get the ratingItems from the context
  const { ratingItems, isLoading } = useContext(RatingContext);

  // Check to see o=if there are any ratings
  if (!isLoading && (!ratingItems || ratingItems.length === 0)) {
    return <div className="no-rating">No Ratings Yet!</div>;
  }

  // Return loader if there are no ratings
  return isLoading ? (
    <Loader color="white" type="spin" />
  ) : (
    <div className="rating-list">
      <AnimatePresence initial={false}>
        {ratingItems.map(ratingItem => (
          <motion.div
            key={ratingItem.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <RatingItem key={ratingItem.id} ratingItem={ratingItem} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
export default RatingList;
