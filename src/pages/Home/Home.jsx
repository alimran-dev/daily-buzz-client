import AllPublisher from "./AllPublisher/AllPublisher";
import Plans from "./Plans/Plans";
import PopularArticles from "./PopularArticles/PopularArticles";
import Statistics from "./Statistics/Statistics";

const Home = () => {
  return (
    <div>
          <PopularArticles />
          <Plans />
          <AllPublisher />
          <Statistics />
    </div>
  );
};

export default Home;
