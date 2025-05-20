import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import './SkeletonCard.css'

function SkeletonCard({ count = 1 }) {
  return (
        <Skeleton height={400} count={count} />
  );
}

export default SkeletonCard;
