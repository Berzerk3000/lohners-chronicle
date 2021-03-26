import "../styles/index.scss";
import Head from "./Head";
import Journal from "./Journal";

const App = () => {
  return (
    <>
      <div className="wrap">
      <main>
        <Head />
        <Journal />
      </main>
      </div>
    </>
  );
};

export default App