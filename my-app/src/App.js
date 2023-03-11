import "./App.css";

let name = "Devesh";
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div className="container">
        <h1> Hello {name} </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          amet eaque sequi unde odio officiis aliquam voluptatibus maiores
          labore. Sequi molestiae architecto aspernatur modi enim, porro totam
          eius velit quae!
        </p>
      </div>
    </>
  );
}

export default App;
