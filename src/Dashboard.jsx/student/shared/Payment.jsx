import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../Components/CheckoutForm";
import useSelectedClasses from "../../../hook/useSelectedClasses";
import useTitle from "../../../hook/useHook";



const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    useTitle("Payment")
    const {selectedClasses} = useSelectedClasses()
    const total = selectedClasses.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <h2 className="text-3xl"> Payment</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm selectedClasses={selectedClasses} price={price}/>
            </Elements>
        </div>
    );
};

export default Payment;