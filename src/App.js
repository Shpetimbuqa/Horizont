import React from "react";
import background from "./image/horizont.jpeg";
import Header from "./components/Header";


function App() {
  return (
    <section>
      <div
        className="image"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <Header />
       
      </div>
    </section>
  );
}

export default App;
