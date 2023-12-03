import { useContext, useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import axios from "axios";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const animatedComponents = makeAnimated();
const tags = [
  { value: "News", label: "News" },
  { value: "BreakingNews", label: "BreakingNews" },
  { value: "WorldNews", label: "WorldNews" },
  { value: "LocalNews", label: "LocalNews" },
  { value: "Politics", label: "Politics" },
  { value: "Economy", label: "Economy" },
  { value: "Technology", label: "Technology" },
  { value: "Science", label: "Science" },
  { value: "Health", label: "Health" },
  { value: "Business", label: "Business" },
  { value: "Sports", label: "Sports" },
  { value: "Education", label: "Education" },
  { value: "Culture", label: "Culture" },
  { value: "Travel", label: "Travel" },
  { value: "Food", label: "Food" },
  { value: "Fashion", label: "Fashion" },
  { value: "LifeStyle", label: "LifeStyle" },
];
const imgKey = import.meta.env.VITE_IMG_KEY;

const AddArticles = () => {
  const [selectedTags, setSelectedTags] = useState(null);
  const [publishers, setPublishers] = useState(null);
  const [selectedPublisher, setSelectedPublisher] = useState(null);
  const tagsValue = [];
  const publishersOption = [];
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const handleAddArticle = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const photo = form.photo.files[0];
    const description = form.description.value;
    const selectedTagValues = selectedTags?.map((tag) => tag.value);
    const selectedPublisherValue = selectedPublisher?.value;
    console.log(
      title,
      selectedPublisherValue,
      selectedTagValues,
      photo,
      description
    );
    axios
      .post(
        `https://api.imgbb.com/1/upload?key=${imgKey}`,
        { image: photo },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          axiosSecure
            .post("/articles", {
              title,
              publisher: selectedPublisherValue,
              tags: selectedTagValues,
              photo: res?.data?.data?.display_url,
              description,
              author_name: user?.displayName,
              author_email: user?.email,
              author_photo: user?.photoURL,
            })
            .then((res) => {
              console.log(res.data);
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Article submitted for approval",
                showConfirmButton: false,
                timer: 1500,
              });
              form.reset();
            });
        }
      });
  };
  publishers?.forEach((publisher) =>
    publishersOption.push({ value: publisher, label: publisher })
  );
  useEffect(() => {
    selectedTags?.forEach((tag) => tagsValue.push(tag.value));
    axiosSecure.get("/publishers").then((res) => {
      setPublishers(res.data?.map((publisher) => publisher.name));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTags]);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center bg-gradient-to-b from-[#746C2E] to-[#746c2eaf] text-transparent bg-clip-text py-5">
        Add Articles
      </h1>
      <form
        onSubmit={handleAddArticle}
        className="mx-20 border px-16 py-12 space-y-4"
      >
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <label htmlFor="title" className="block text-lg font-medium">
              Title
            </label>
            <input
              type="text"
              name="title"
              className="border py-1.5 px-3 rounded w-full"
              placeholder="Title of the article"
              required
            />
          </div>
          <div>
            <label htmlFor="title" className="block text-lg font-medium">
              Publisher
            </label>
            <Select
              closeMenuOnSelect={true}
              components={animatedComponents}
              //   defaultValue={[colourOptions[4], colourOptions[5]]}
              options={publishersOption}
              onChange={setSelectedPublisher}
              required
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <label htmlFor="title" className="block text-lg font-medium">
              Tags
            </label>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              //   defaultValue={[colourOptions[4], colourOptions[5]]}
              isMulti
              options={tags}
              name="tags"
              onChange={setSelectedTags}
              required
            />
          </div>
          <div>
            <label htmlFor="title" className="block text-lg font-medium">
              Image
            </label>
            <input
              type="file"
              name="photo"
              className="border py-1.5 px-3 rounded w-full"
              accept=".jpg, .png, .jpeg"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="description"></label>
          <textarea
            name="description"
            id=""
            cols="30"
            rows="10"
            className="border h-24 w-full py-2 px-4"
            placeholder="Description of the Article..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#746C2E] py-1.5 px-3 text-lg font-semibold text-white rounded block mx-auto"
        >
          Add Article
        </button>
      </form>
    </div>
  );
};

export default AddArticles;
