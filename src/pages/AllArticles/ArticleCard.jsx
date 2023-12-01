import belt from "../../assets/belt-brown.jpg";

const ArticleCard = () => {
    return (
        <div>
        <div className="w-ful relative">
          <img src={belt} alt="" className="w-full rounded-md" />
          <div className="absolute left-0 bottom-0 w-full h-full flex items-end bg-gradient-to-t from-black via-black/30 to-transparent">
            <h2 className=" text-white px-2 ml-3 mb-3 border-l-4 border-[#746c2e] font-medium">
              Title Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
          </div>
        </div>
        <div className="bg-slate-50 p-3 space-y-3 border">
          <p className="bg-gray-300 w-fit px-2 py-1 font-semibold rounded my-2 text-xs">Publisher</p>
          <p>
            Description Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Numquam laudantium voluptatibus laborum, quia eveniet veritatis
            consequuntur minima porro molestias nemo odit eaque? Magni assumenda
            molestiae rerum delectus voluptatum, voluptates quibusdam.
          </p>
          <button className="bg-[#746C2E] px-3 py-1 text-white font-medium rounded">Details</button>
        </div>
      </div>
    );
};

export default ArticleCard;