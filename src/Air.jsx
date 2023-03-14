import Footer from "./Footer";
import './main.css'

const Air = ({ name, age, address }) => {
  return (
    <div>
      <h1 className="h1">
        My name is {name}
      </h1>
      <Footer />
    </div>
  );
}

export default Air;
