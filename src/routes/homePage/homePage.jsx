import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

export default function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            Find & Get Your Dream Place Get At EstateReal.
          </h1>
          <p>
            Discover elegant homes nestled in lush green surroundings. Our
            timeless architecture blends seamlessly with modern comforts,
            creating your dream sanctuary. Unlock the door to serenity today.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="homePage image" />
      </div>
    </div>
  );
}
