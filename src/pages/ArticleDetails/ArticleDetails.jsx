import belt from "../../assets/belt-brown.jpg";
import { useParams } from "react-router-dom";

const ArticleDetails = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="my-9">
      <h1 className="text-4xl font-semibold border-l-[6px] border-[#746C2E] pl-3 py-3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </h1>
      <div className="w-3/4 h-96 mx-auto">
        <img src={belt} alt="" className="w-full h-full" />
      </div>
      <div className="flex gap-3">
        <span className="bg-gray-100 px-3 py-1 w-fit font-medium text-sm rounded my-2">
          Publisher
        </span>
        <span className="bg-gray-100 px-3 py-1 w-fit font-medium text-sm rounded my-2">
          Total Views: 100
        </span>
      </div>
      <div>
        <p className="font-medium">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
          tempore dolor quibusdam sapiente consequatur. Ducimus architecto vitae
          maiores porro possimus culpa animi officiis nisi autem, rerum aut modi
          illum exercitationem, nesciunt quod voluptatem mollitia quidem quo! Ad
          recusandae at, culpa fugiat sequi id beatae natus laudantium excepturi
          vel et velit commodi quisquam minus nobis, reiciendis nostrum vitae
          exercitationem eligendi.
          <br /> <br /> Odio laboriosam dicta a! Quis aperiam, eaque beatae,
          maiores autem dicta quas dolor ad ipsa, enim officia modi debitis
          exercitationem iusto dolore nesciunt doloribus tempore fugiat? Hic
          reiciendis magnam aliquam doloremque repudiandae inventore maiores
          ducimus rem est molestias libero ea asperiores quasi, facere, dolores
          odio voluptas! Sit quia non ab dolor corporis, nobis fugiat adipisci
          eum! Voluptates eaque nam commodi vitae iste ipsa, impedit officiis
          sint, voluptatum amet, praesentium eius. <br /> <br /> Tempora,
          accusantium iure quam cumque deserunt adipisci. Iure quam aliquid
          saepe beatae officia unde voluptates error nulla soluta nisi quod
          nostrum maxime, rem reprehenderit hic placeat laudantium molestias
          nobis? Debitis, voluptate error alias eum autem atque neque? Quod
          quasi vel assumenda! Facilis sint nemo totam sequi reprehenderit,
          nostrum fuga, quos rem aut ipsam, necessitatibus excepturi asperiores
          deserunt commodi ullam id porro minus. Aut, nesciunt? Eos similique
          debitis, ipsa ipsum, molestiae libero illum magnam consectetur commodi
          quam consequatur dolorem laborum, minima autem unde eaque optio
          facilis? Tempora sint labore explicabo natus earum obcaecati velit
          maiores pariatur, commodi quisquam alias enim, delectus recusandae?
          Alias in nihil error magnam pariatur veritatis maxime, modi suscipit
          ipsa provident aliquid harum ab saepe nobis adipisci natus ducimus
          velit, fugit ullam. Nihil ex necessitatibus ipsa saepe corrupti fuga
          totam distinctio unde eaque blanditiis laudantium, voluptatum optio a.
          Quos, id a porro reprehenderit cupiditate vitae enim adipisci aut
          asperiores magni voluptates itaque hic voluptatibus? Molestias sunt
          doloribus ad repellat error, tempore officia blanditiis aspernatur non
          deleniti autem aliquid deserunt sit. Molestiae quod ullam quis, maxime
          obcaecati, ducimus itaque sint voluptatem, dolore exercitationem
          voluptates saepe quo quia aperiam aliquid vero eius necessitatibus ad
          laudantium! Ab, provident. <br />
          <br /> Doloremque assumenda alias molestiae vel id dolor autem ut cum
          libero cupiditate. Adipisci ipsa ut maiores expedita eveniet, quo
          facere aspernatur exercitationem qui necessitatibus accusantium
          ducimus nihil aliquam ullam, molestias illum animi voluptates amet
          voluptate! Quos, nostrum voluptatibus repellat voluptatum magni
          fugiat, magnam voluptas ipsam porro odio doloribus eligendi enim
          laborum minima. Quasi, neque exercitationem. Quibusdam iste
          repudiandae voluptatem officia quasi consequatur velit labore
          corrupti, necessitatibus consequuntur blanditiis. Odit reiciendis quas
          ut eligendi alias qui atque culpa maiores eveniet nesciunt deleniti
          corporis perferendis pariatur ullam dolore, sequi aliquid doloremque
          veniam et temporibus? Tempora, ullam esse, mollitia eaque nemo maxime
          aperiam vero iure aspernatur deleniti suscipit error perspiciatis quia
          labore architecto molestias, voluptates atque voluptatibus pariatur.
          Deserunt, vel atque unde deleniti optio iste minima temporibus quia
          adipisci nihil consectetur accusamus illo dolor. Deleniti nemo tempore
          architecto aspernatur mollitia, assumenda amet consequuntur quibusdam,
          perferendis magni fugit nihil obcaecati quo suscipit atque quidem
          corporis doloremque maiores ipsa asperiores quaerat ut consequatur!
          Repudiandae veniam nihil nam asperiores at totam saepe, ratione in
          quos sed blanditiis, nisi vel exercitationem.
        </p>
      </div>
    </div>
  );
};

export default ArticleDetails;
