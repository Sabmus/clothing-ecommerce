import Directory from "./components/directory/directory.component";

const categories = require("./test_data/categories.json");

const App = () => {
  return <Directory categories={categories} />;
};

export default App;
