import Skeleton from "react-loading-skeleton";

function SkeletonProductDetailInfo() {
  return (
    <div>
      <Skeleton height={20} width={100} />
      <Skeleton height={50} />
      <Skeleton height={20} width={100} />
      <Skeleton height={200} />
      <Skeleton height={20} width={100} />
      <Skeleton height={50} width={200} />
    </div>
  );
}
export default SkeletonProductDetailInfo;
