import "./Homepage.css";
import girl from "./girl1.jpg";
function Home() {
  return (
    <div id="maindiv">
      <h1>
        {" "}
        I'm <span class="text-warning">Shaik Rahebar</span>
      </h1>
      <h1 class="text-primary">Full Stack Developer</h1>
      <br></br>
      <img
        class="rounded-circle shadow"
        style={{ width: "35%", height: "270px" }}
        src={girl}
        alt="girl"
      />
      <center>
        <br></br>
        <p style={{ width: "80%" }}>
          I am a highly motivated and dedicated individual. Responsibility and
          organization are qualities that define my work ethic. I excel in both
          team collaboration and working independently. When faced with
          challenges, I adopt a creative problem-solving approach. I am eagerly
          anticipating the opportunity to gain valuable work experience.
        </p>
      </center>
      <br></br>
      <hr></hr>
    </div>
  );
}
export default Home;
