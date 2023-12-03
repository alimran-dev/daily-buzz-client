import { useNavigate } from "react-router-dom";
import banner from "../../assets/subscription-banner.jpg";

const Subscription = () => {
  const navigate = useNavigate();
  const handleSubscription = (e) => {
    e.preventDefault();
    const form = e.target;
    const plan = form.plan.value;
    navigate("/payment", { state: plan });
  };
  return (
    <div className="my-10">
      <div className="w-full h-[550px] relative rounded-md">
        <img src={banner} alt="" className="w-full h-full rounded-md" />
        <div className="absolute inset-0 w-full h-full bg-black bg-opacity-60 rounded-md flex items-center justify-center">
          <div className="space-y-5">
            <h2 className="text-5xl text-white font-semibold text-center w-2/3 mx-auto">
              Stay Informed, Stay Ahead: Unlock Premium News Access Today!
            </h2>
            <p className="text-white font-medium px-16 text-center">
              Empower your day with exclusive insights! Subscribe now to unlock
              premium news access—dive into in-depth analyses, breaking stories,
              and a seamless, ad-free reading experience. Stay ahead of the
              curve and join a community passionate about quality journalism.
              Your subscription, your advantage. Subscribe now and elevate your
              news journey!
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-bold text-center bg-gradient-to-b from-[#746C2E] to-[#746c2eaf] text-transparent bg-clip-text py-5">
          Subscriptions
        </h2>
        <div className="flex justify-around gap-3">
          <div className="border w-80 p-8">
            <div>
              <h3 className="flex justify-between text-3xl font-bold">
                Free <span>0$</span>
              </h3>
              <p className="text-2xl text-center font-semibold">Lifetime</p>
              <p className="text-lg font-semibold">Features:</p>
              <ul className="list-disc list-inside">
                <li>No Premium Articles</li>
                <li>Lifetime Free Articles</li>
                <li>No exclusive news alert</li>
              </ul>
            </div>
          </div>
          <div className="border w-80 p-8">
            <div>
              <h3 className="flex justify-between text-3xl font-bold">
                Platinum <span>10$</span>
              </h3>
              <p className="text-2xl text-center font-semibold">1 Month</p>
              <p className="text-lg font-semibold">Features:</p>
              <ul className="list-disc list-inside">
                <li>Premium Articles</li>
                <li>Lifetime Free Articles</li>
                <li>Any exclusive news alert</li>
              </ul>
            </div>
          </div>
          <div className="border w-80 p-8">
            <div>
              <h3 className="flex justify-between text-3xl font-bold">
                Diamond <span>80$</span>
              </h3>
              <p className="text-2xl text-center font-semibold">1 Year</p>
              <p className="text-lg font-semibold">Features:</p>
              <ul className="list-disc list-inside">
                <li>Premium Articles</li>
                <li>Lifetime Free Articles</li>
                <li>Any exclusive news alert</li>
              </ul>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubscription}>
          <h3 className="text-3xl font-bold text-center bg-gradient-to-b from-[#746C2E] to-[#746c2eaf] text-transparent bg-clip-text py-5">
            Choose Your Plan
          </h3>
          <select name="plan" className="border px-5 py-2 block mx-auto">
            <option value="1">1$ for 1 minute [for assignment]</option>
            <option value="10">10$ for 1 month</option>
            <option value="80">80$ for 1 year</option>
          </select>
          <button
            type="submit"
            className="bg-[#746C2E] py-1.5 px-3 text-white font-medium rounded block mx-auto mt-5"
          >
            Purchase
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscription;
