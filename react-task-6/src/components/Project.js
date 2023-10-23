import { Power, Screwdriver, Tree } from "react-bootstrap-icons";
import { Linkedin, Instagram, Github, Twitter } from "react-bootstrap-icons";
import "./Projectspage.css";
function Project() {
  return (
    <div id="Projects">
      <h2 class="text-primary text-center mt-5">Projects</h2>
      <div class="row mx-5 mt-5">
        <div class=" col-md-4  col-sm-12">
          <div class="card px-5 mb-5 bg-light">
            <div class="card-img mt-2">
              <Power size={75} />
            </div>
            <div class="card-body">
              <h3 className="card-title">Accident Rate Prediction</h3>
              <br></br>
              <br></br>
              <p className="card-text">
                In this project I have used a Support Vector Machine, a Machine
                Learning model,to predict accident rates in an area.This project
                flow consists of cleaning the dataset,training the model on
                train dataset and applying the model on test dataset to get
                predictions.
              </p>
            </div>
          </div>
        </div>
        <div class=" col-md-4 col-sm-12">
          <div class="card px-5 mb-5 bg-light">
            <div class="card-img mt-2 fa-solid fa-leaf">
              <Tree size={75} />
            </div>
            <div class="card-body">
              <h3 className="card-title"> Bird Species Classification. </h3>
              <br></br>
              <br></br>
              <p className="card-text">
                In this project I have developed a CNN-based model that can
                accurately identify the species of a bird depicted in an input
                image. This involves training the model on a dataset of bird
                images with labeled species, enabling it to learn patterns and
                features specific to different bird species.
              </p>
            </div>
          </div>
        </div>
        <div class=" col-md-4 col-sm-12">
          <div class="card px-5 mb-5 bg-light">
            <div class="card-img mt-2">
              <Screwdriver size={75} />
            </div>
            <div class="card-body">
              <h3 className="card-title">Car Showroom Management.</h3>
              <br></br>
              <br></br>
              <p className="card-text">
                In this project we developed a website for a car showroom for
                comprehensive software solution that optimizes the entire
                lifecycle of car sales and dealership operations.I have worked
                in building the frontend part of this website(using
                HTML,CSS,Javascript,Bootstrap, React.js)
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 class="text-primary text-center mt-5">Contact</h2>
      <br></br>
      <center>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Linkedin size={35} color="black" className="rounded mx-4" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Instagram size={35} color="black" className="rounded mx-4" />
        </a>
        <a
          href="https://github.com/RahebarShaik"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={35} color="black" className="rounded mx-4" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Twitter size={35} color="black" className="rounded mx-4" />
        </a>
      </center>
      <br></br>
      <p class="text-center">@2023</p>
    </div>
  );
}
export default Project;
