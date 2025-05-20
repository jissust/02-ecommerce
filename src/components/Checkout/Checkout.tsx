import CheckoutDetail from "../CheckoutDetail/CheckoutDetail";
import CheckoutSummary from "../CheckoutSummary/CheckoutSummary";

function Checkout() {
  return (
    <div className="container mx-auto pb-[50px] px-[30px] py-[90px]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="col-span-3">
          <CheckoutDetail />
        </div>
        <div className="col-span-3 md:col-span-1 border p-4 rounded-lg shadow-md">
          <CheckoutSummary />          
        </div>
      </div>
    </div>
  );
}

export default Checkout;
