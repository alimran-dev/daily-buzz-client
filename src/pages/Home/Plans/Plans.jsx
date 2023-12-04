import { useNavigate } from "react-router-dom";

const Plans = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="text-4xl font-bold text-center bg-gradient-to-b from-[#746C2E] to-[#746c2eaf] text-transparent bg-clip-text py-5">
        Subscriptions
      </h2>
      <div className="flex flex-wrap justify-around items-center gap-3">
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
            <button
              onClick={() => navigate("/subscription")}
              disabled
              className="bg-[#746C2E] text-white py-1 px-5 font-medium rounded block mx-auto mt-4 disabled:bg-opacity-50"
            >
              Purchase
            </button>
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
            <button
              onClick={() => navigate("/subscription")}
              className="bg-[#746C2E] text-white py-1 px-5 font-medium rounded block mx-auto mt-4"
            >
              Purchase
            </button>
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
            <button
              onClick={() => navigate("/subscription")}
              className="bg-[#746C2E] text-white py-1 px-5 font-medium rounded block mx-auto mt-4"
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
