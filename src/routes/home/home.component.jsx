import Directory from "../../components/directory/directory.component";

const categories = require("../../test_data/categories.json");

const Home = () => {
  return <Directory categories={categories} />;
};

export default Home;
