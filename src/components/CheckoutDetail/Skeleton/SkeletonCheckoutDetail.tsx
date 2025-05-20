import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import './SkeletonCheckoutDetail.css'

function SkeletonCheckoutDetail ({count = 1}) {
    return (
        <Skeleton height={200} count={count} />
    )
}

export default SkeletonCheckoutDetail;