<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="google-site-verification" content="TCYDjPGs4mjTQmvE4JIqweCYrrjbfu549UuGoTykXSg" />
  <meta name="title" content="Arun vignesh S - Portfolio | Web Developer | Software Engineer ">
  <meta name="description" content="Explore the portfolio of Nashib Thapa Magar, a innovative, skilled web developer and software engineer specializing in innovative web applications, software solutions, and user-friendly designs. Let's build something great together!">
  <title>Nashib Thapa Magar Portfolio</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="styles.css">
<script>
/* styles.css */
body {
  font-family: 'Roboto', sans-serif;
}
a{
  text-decoration: unset;
  color: #10b981;
}
a:hover{
  color:#b2e05b;
}
.timeline-item {
  position: relative;
  padding-left: 2rem;
}

.timeline-item::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.75rem;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: #10b981; /* Tailwind green-500 */
}

.timeline-item::after {
  content: "";
  position: absolute;
  left: 0.25rem;
  top: 0.75rem;
  width: 0;
  height: calc(100% - 1.5rem);
  border-left: 2px dashed #10b981; /* Tailwind green-500 */
}

.timeline-item:last-child::after {
  display: none;
}

.social-link {
  display: inline-block;
  background-color: #10b981; /* Tailwind green-500 */
  padding: 0.5rem;
  border-radius: 50%;
  transition: transform 0.2s ease-in-out;
}

.social-link:hover {
  transform: scale(1.1);
}

.contact-chip {
  display: inline-flex;
  align-items: center;
  background-color: #10b981; /* Tailwind green-500 */
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  transition: transform 0.2s ease-in-out;
}

.contact-chip:hover {
  transform: scale(1.1);
}

img {
  filter: grayscale(100%) brightness(50%) contrast(120%);
  mix-blend-mode: luminosity;
}

/* Mobile Navigation */
.hamburger-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;
}

.hamburger-menu span {
  display: block;
  width: 100%;
  height: 3px;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
}

.hamburger-menu.open span:first-child {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger-menu.open span:nth-child(2) {
  opacity: 0;
}

.hamburger-menu.open span:last-child {
  transform: rotate(-45deg) translate(5px, -5px);
}

#mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
}

#mobile-menu.open {
  transform: translateX(0);
}

#mobile-menu a {
  font-size: 1.5rem;
  margin: 1rem 0;
  color: #fff;
  text-decoration: none;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .md\:hidden {
    display: none;
  }

  .md\:flex {
    display: flex;
  }

  .md\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  /* Projects Section */
  #projects .grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  

}
 /* Add spacing on mobile screens */
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }


  /* Add this to your styles.css file */
.glassmorphism-card {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.25);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 38px;
  filter: drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125));
  display: flex;
  align-items: center;
  justify-content: space-between;
}



.gif-container {
  margin-left: 25px;
  margin-bottom: 30px;
  background-image: url("vectorImg/project(10).png") no-repeat fixed center;
  max-width: 200px;
  max-height: 200px;
}

.course-gif {
  max-width: 200px;
  max-height: 200px;
}

.languages_used{
  margin:5px;
  padding:5px;
  color:grey;
  border:1px solid grey;
  border-radius:5px;
  display:inline-block;
  font-size: 12px;
}

@media (min-width: 768px) {
  .glassmorphism-card {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .gif-container {
    margin-bottom: 0;
    margin-left: 30px;
  }

  .card-content {
    text-align: left;
  }
}

@media (orientation: landscape) {
 .hide-in-large{
  display:none;
 }
 .hide-in-small{
  display: block;
 }
 .card-content {
  max-width: 700px;
 }
}

@media (orientation: portrait) {
 .hide-in-large{
  display:block;
 }
 .hide-in-small{
  display: none;
 } 
}

  @media (min-width: 992px) and (max-width: 1199px) {
   .descripton-width{
    max-width: 700px;
    width:700px;
    }
  }

[data-toggle="tooltip" ]{
  cursor:pointer;
}

.hero-section {
  position: relative;
 /* width: 100%;
  height: 100vh;*/
  overflow: hidden;
}

.hero-section video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display:inline-block;
}

.hero-text {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 20px;
}

#myVideo {
  filter:grayscale(50%) hue-rotate(0deg) saturate(50%);
}
</script>
</head>
<body class="bg-dark text-light">
  <!-- Header -->
  <header class="py-3">
    <nav class="container d-flex align-items-center justify-content-between">
      <span class="fs-2 fw-bold hide-in-small">ArunVignesh</span>
      <span class="fs-2 fw-bold hide-in-large">Av</span>
      <div class="hide-in-small">
        <a href="#projects" class="mx-4 text-decoration-none hover-green">Projects</a>
        <a href="#experience" class="mx-4 text-decoration-none hover-green">Experience</a>
        <a href="#certificates" class="mx-4 text-decoration-none hover-green">Certificates</a>
        <a href="#skills" class="mx-4 text-decoration-none hover-green">Skills</a>
        <a href="#contact" class="mx-4 text-decoration-none hover-green">Contact</a>
      </div>
    </nav>
  </header>

  <!-- Hero Section -->
  <section class="container hero-section py-5 text-center ">

  <!-- The HTML5 video element that will create the background video on the header -->
  <video autoplay muted loop id="myVideo">
    <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4">
  </video>

    <div class="hero-text">
    <h1 class="fs-1 fw-bold mb-4">Welcome To My Portfolio</h1>
    <p class="lead mb-4">Enthusiastic Full stack developer skilled in JavaScript, Java, PHP, Mysql and modern frameworks.</p>
    <a target = "_blank" href="https://drive.google.com/file/d/15Euef2BECg9ySndrmeU78hjCulLcA5hW/view?usp=drivesdk" class="btn btn-success">View Resume</a>
  </div>
  </section>

  <!-- Projects Section -->
  <section id="projects" class="container py-5">
    <h2 class="fs-1 fw-bold mb-4">Featured Projects</h2>

    <div class="glassmorphism-card d-flex flex-column-reverse flex-md-row align-items-center my-3">
    <div class="card-content text-start">
      <h3 class="text-success mb-3">Advanced Real Time Surveillence using Machine Language</h3>
      <p class="text-muted mb-3 descripton-width">
         This AI vvision Application is a cutting edge,real time computer vision system that integrates multipe AI models to perform advanced analysis on live video streams directly in web browsers. It's designed to showcase the power of browers.It's designed to showcase the power of browser based AI and provide real time analysis for various use cases.
      </p>
      <p class="pb-3">
        <span class="languages_used">HTML 5</span>
        <span class="languages_used">CSS 3</span>
        <span class="languages_used">Tailwind CSS</span>
        <span class="languages_used">Javascript</span>
        <span class="languages_used">Face-Api Js</span>
      </p>
      <a target="_blank" href="https://github.com/Nashib09" class="btn btn-success">View Project</a>
      <a target="_blank" href="Advanced-real-time-sureillance/" class="btn btn-success px-3">View Website</a>
    </div>
    <div class="gif-container pb-4">
      <a target="_blank" href="#">
      <img src="" alt="Course GIF" class="course-gif">
      </a>
    </div>
  </div>

      
  <div class="glassmorphism-card d-flex flex-column-reverse flex-md-row align-items-center my-3">
    <div class="card-content text-start">
      <h3 class="text-success mb-3">Weather APP</h3>
      <p class="text-muted mb-3 descripton-width">
         A Dedicated site for Weather Forecasting. 
      </p>
      <p class="pb-3">
        <span class="languages_used">HTML 5</span>
        <span class="languages_used">CSS 3</span>
        <span class="languages_used">Tailwind CSS</span>
        <span class="languages_used">Javascript</span>
        <span class="languages_used">React.js</span>
      </p>
      <a target="_blank" https://github.com/Nashib09/Weather-App-using-React.js.git" class="btn btn-success">View Project</a>
    </div>
    <div class="gif-container pb-4">
      <a target="_blank" href="project_images/report.gif">
      <img src="project_images/report.gif" alt="Course GIF" class="course-gif">
      </a>
    </div>
  </div>
  <div class="glassmorphism-card d-flex flex-column-reverse flex-md-row align-items-center my-3">
    <div class="card-content text-start">
      <h3 class="text-success mb-3">Contact Management System</h3>
      <p class="text-muted mb-4">
        A centralized website for contact management system.
      </p>
      <p class="pb-3">
        <span class="languages_used">Mongo DB</span>
        <span class="languages_used">Express JS</span>
        <span class="languages_used">React.js7</span>
        <span class="languages_used">Node.js</span>
      </p>
      <a target="_blank" https://github.com/Nashib09/MERN-STACK-Contact-Management-System.git" class="btn btn-success">View Project</a>
    </div>
    <div class="gif-container pb-3">
      <a target="_blank" href="project_images/attendance.gif">
      <img src="project_images/attendance.gif" alt="Course GIF" class="course-gif">
      </a>
    </div>
  </div>

 <div class="glassmorphism-card d-flex flex-column-reverse flex-md-row align-items-center my-3"> 
    <div class="card-content text-start">
      <h3 class="text-success mb-3">Student Management System</h3>
      <p class="text-muted mb-4 descripton-width">
        View Student Portal anytime with downloadable pdf.
      </p>
      <p class="pb-3">
        <span class="languages_used">HTML 5</span>
        <span class="languages_used">CSS 3</span>
        <span class="languages_used">Javascript</span>
        <span class="languages_used">PHP 7 | FPDF</span>
        <span class="languages_used">Mysql 8</span>
      </p>
      <a target="_blank" href="https://github.com/Nashib09/s-management-system-.git" class="btn btn-success">View Project</a>
    </div>
    <div class="gif-container pb-4">
      <a target="_blank" href="project_images/marks.gif">
      <img src="project_images/marks.gif" alt="Course GIF" class="course-gif">
      </a>
    </div>
  </div>

      <!-- </div> -->
    
    <div id="additional-projects" class="pt-4 d-none">

      <div class="glassmorphism-card d-flex flex-column-reverse flex-md-row align-items-center my-3">
        <div class="card-content text-start">
           <h3 class="text-success mb-3">My Portfolio</h3>
            <p class="text-muted mb-3">
             The website is well-structured and follows a consistent layout , mobile responsive and  modern design. It features distinct sections dedicated to showcasing the projects, work experience, skills, certifications etc.
            </p>
            <p class="pb-3">
              <span class="languages_used">HTML 5</span>
        <span class="languages_used">CSS 3</span>
        <span class="languages_used">Bootstrap 5</span>
        <span class="languages_used">Javascript</span>
            </p>
            <a target="_blank" href="https://github.com/Nashib09/nashibthapamagar09.com.np.git" class="btn btn-success">View Project</a>
        </div>
        <div class="gif-container pb-4">
          <a target="_blank" href="project_images/portfolio.gif">
          <img src="project_images/portfolio.gif" alt="Course GIF" class="course-gif">
          </a>
        </div>
      </div>

      <div class="glassmorphism-card d-flex flex-column-reverse flex-md-row align-items-center my-3">
        <div class="card-content text-start">
           <h3 class="text-success mb-3">Event management</h3>
            <p class="text-muted mb-3">
              A centralized site for teachers to store their events like , paper presentation ,course, journal, patent etc and view other teachers works.
            </p>
            <p>
            <span class="languages_used">HTML 5</span>
        <span class="languages_used">CSS 3</span>
        <span class="languages_used">Bootstrap 5</span>
        <span class="languages_used">Materialize css</span>
        <span class="languages_used">Javascript</span>
        <span class="languages_used">Jquery</span>
        <span class="languages_used">PHP 7</span>
        <span class="languages_used">Mysql 8</span>
      </p>
            <a target="_blank" href="https://github.com/Arun8072/EventManagement" class="btn btn-success">View Project</a>
            <!-- <a target="_blank" href="#" class="btn btn-success  px-3">View Website</a> -->
        </div>
        <div class="gif-container pb-4">
          <img src="vectorImg/project(10).png" alt="Course GIF" class="course-gif">
        </div>
      </div>

      <div class="glassmorphism-card d-flex flex-column-reverse flex-md-row align-items-center my-3">
        <div class="card-content text-start">
           <h3 class="text-success mb-3">Equilibrium Slides</h3>
            <p class="text-muted mb-3">
              Present your power point presentation in schools or collages with remote control in your hands by mobile.
            </p>
            <p>
            <span class="languages_used">HTML 5</span>
        <span class="languages_used">CSS 3</span>
        <span class="languages_used">Bootstrap 5</span>
        <span class="languages_used">Javascript</span>
        <span class="languages_used">Jquery</span>
        <span class="languages_used">PHP 7</span>
      </p>
            <a target="_blank" href="https://github.com/Arun8072/equilibriumSlides" class="btn btn-success">View Project</a>
            <!-- <a target="_blank" href="#" class="btn btn-success  px-3">View Website</a> -->
        </div>
        <div class="gif-container pb-4">
          <img src="vectorImg/project(10).png" alt="Course GIF" class="course-gif">
        </div>
      </div>

      <div class="glassmorphism-card d-flex flex-column-reverse flex-md-row align-items-center my-3">
        <div class="card-content text-start">
           <h3 class="text-success mb-3">Sweet heart</h3>
            <p class="text-muted mb-3">
            Make a quiz for friends to check how well they know you! Create quiz questions about yourself. You can write your own questions and answers and generate the link and share to the friends and get their answers in view page.
            </p>
            <p>
            <span class="languages_used">HTML 5</span>
        <span class="languages_used">CSS 3</span>
        <span class="languages_used">Bootstrap 5</span>
        <span class="languages_used">Javascript</span>
        <span class="languages_used">Jquery</span>
        <span class="languages_used">PHP 7</span>
        <span class="languages_used">Mysql 8</span>
      </p>
            <a target="_blank" href="https://github.com/Arun8072/SweetHeart" class="btn btn-success">View Project</a>
            <!-- <a target="_blank" href="#" class="btn btn-success  px-3">View Website</a> -->
        </div>
        <div class="gif-container pb-4">
          <img src="vectorImg/project(10).png" alt="Course GIF" class="course-gif">
        </div>
      </div>

    </div>

    <div id="all-projects" class="pt-4 d-none">

      <div class="glassmorphism-card d-flex flex-column-reverse flex-md-row align-items-center my-3">
        <div class="card-content text-start">
           <h3 class="text-success mb-3">Fuel Delivery Service</h3>
            <p class="text-muted mb-3">
            This project is a web based fuel delivery service application that allows customers to order petrol or diesal in critical situation for thier vehicles and have it delivered to their location which is delivered from the nearest petrol bunk of the company.
            </p>
            <p>
            <span class="languages_used">HTML 5</span>
        <span class="languages_used">CSS 3</span>
        <span class="languages_used">Tailwind CSS</span>
        <span class="languages_used">Javascript</span>
        <span class="languages_used">PHP 7</span>
      </p>
            <a target="_blank" href="https://github.com/Arun8072/Fuel-delivery" class="btn btn-success">View Project</a>
            <a target="_blank" href="https://arun8072.github.io/Fuel-delivery" class="btn btn-success  px-3">View Website</a>
        </div>
        <div class="gif-container pb-4">
          <img src=" " alt="Course GIF" class="course-gif">
        </div>
      </div>

      <div class="glassmorphism-card d-flex flex-column-reverse flex-md-row align-items-center my-3">
        <div class="card-content text-start">
           <h3 class="text-success mb-3">Bike kart</h3>
            <p class="text-muted mb-3">
            A simple shopping website for bike only. 
            </p>
            <p>
            <span class="languages_used">HTML 5</span>
        <span class="languages_used">CSS 3</span>
        <span class="languages_used">Bootstrap 5</span>
        <span class="languages_used">Javascript</span>
        <span class="languages_used">Jquery</span>
        <span class="languages_used">PHP 7</span>
        <span class="languages_used">Mysql 8</span>
      </p>
            <a target="_blank" href="https://github.com/Arun8072/BikeKart" class="btn btn-success">View Project</a>
            <!-- <a target="_blank" href="#" class="btn btn-success  px-3">View Website</a> -->
        </div>
        <div class="gif-container pb-4">
          <img src="vectorImg/project(10).png" alt="Course GIF" class="course-gif">
        </div>
      </div>
  <!--
      <div class="glassmorphism-card d-flex flex-column-reverse flex-md-row align-items-center my-3">
        <div class="card-content text-start">
           <h3 class="text-success mb-3">Coursera automatation</h3>
            <p class="text-muted mb-3">
              Automating video, quiz and article of the course at their best and complete 70% -90% within short time and less effort
            </p>
            
            <p><span class="languages_used">Javascript</span></p>
        
            <a target="_blank" href="https://github.com/Arun8072/courseraAutomation" class="btn btn-success">View Project</a>
            <a target="_blank" href="#" class="btn btn-success  px-3">View Website</a>
        </div>
        <div class="gif-container pb-4">
          <img src="vectorImg/project(10).png" alt="Course GIF" class="course-gif">
        </div>
      </div>

      <div class="glassmorphism-card d-flex flex-column-reverse flex-md-row align-items-center my-3">
        <div class="card-content text-start">
           <h3 class="text-success mb-3">Hack the udemy</h3>
            <p class="text-muted mb-3">
               Complete the 100% course and get the certificate within one minute.
            </p>

            <p><span class="languages_used">Javascript</span></p>

            <a target="_blank" href="https://github.com/Arun8072/HackTheUdemy" class="btn btn-success">View Project</a>
            <a target="_blank" href="#" class="btn btn-success  px-3">View Website</a>
        </div>
        <div class="gif-container pb-4">
          <img src="vectorImg/project(10).png" alt="Course GIF" class="course-gif">
        </div>
      </div>
    -->
<!--
      <div class="glassmorphism-card d-flex flex-column-reverse flex-md-row align-items-center my-3">
        <div class="card-content text-start">
           <h3 class="text-success mb-3">project title</h3>
            <p class="text-muted mb-4">
            project description
            </p>
            <a target="_blank" href="#" class="btn btn-success">view project</a>
            <a target="_blank" href="#" class="btn btn-success">View Website</a>
        </div>
        <div class="gif-container pb-4">
          <img src="vectorImg/project(10).png" alt="Course GIF" class="course-gif">
        </div>
      </div>
-->      
    </div>
    <div class="text-center mt-4">
      <button id="showMore-projects" class="btn btn-success">Show More</button>
    </div>

  </section>

  

  <!-- Work Experience Section -->
<section id="experience" class="container py-5">
  <h2 class="fs-1 fw-bold mb-4">Work Experience</h2>
  <div class="relative">
    <div class="border-start border-success border-2 mx-4">
      <div class="relative mb-4">
        <div class="position-absolute rounded-circle bg-success" style="width: 12px; height: 12px; left: -22px; top: 6px;"></div>

        <div class="ms-4">
          <div class="d-flex"><h3 class="fs-5 fw-semibold col-8">Assembly Operateor | India Yamaha Motors Private Limited </h3><span class="col-4 text-end"> <!-- target="_blank" -->
            <a  href="#will_upload" class="text-muted">[ View Certificate ]</a></span></div>
          <p class="text-muted right">Emp ID: ZH966 | From January 2025 </p>
          <p class="text-muted">Engaged as a Assembly Operator at India's Premier Bike Company.</p>
        </div>

        <div class="ms-4">
          <div class="d-flex"><h3 class="fs-5 fw-semibold col-8">Quality Control Trainee | Steel Strips Wheels Private Limited </h3><span class="col-4 text-end"> <!-- target="_blank" -->
            <a  href="#will_upload" class="text-muted" >[ View Certificate ]</a></span></div>
          <p class="text-muted right">Emp ID: 10207738 | From Augest 2023 To October 2024 | 1.2 Year Experience</p>
          <p class="text-muted">Engaged as a Quality Control Trainee at India's premier wheel manufacturer. Experienced in Car Plant PDI and presently focused on the EV line PDI as in-process quality</p>
          <p class="text-muted"><span data-toggle="tooltip" data-placement="left" title="SI inspector | Firewall Inspection | Runout Inspection">Executed comprehensive wheel inspections</span>, <span data-toggle="tooltip" data-placement="left" title="Bore Dial | Micrometer | Vernier caliper | Roughness tester | Height guage | Hub guage | Snap guage | Pin guage | Thread plug guage">mastered gauge and instrument handling techniques</span>, and <span data-toggle="tooltip" data-placement="left" title="Daily inspection report | Safe launch report"> critical documentation </span>and coordinated with cross-functional teams to streamline production processes. Monitored and evaluated product quality.</p>
          <p class="text-muted">Actively contributed to the continuous improvement of product quality, aligning with industry standards, and enhancing client-centric outcomes to drive excellence</p>
        </div>

      </div>

      
    </div>
  </div>
</section>

<!-- Skills Section -->
  <section id="skills" class="container py-5">
    <h2 class="fs-1 fw-bold mb-4">Skills</h2>
    <div class="row">
      <div class=" ">
        <h3 class="fs-4 fw-semibold mb-4">Soft Skills</h3>
        <ul class="list text-muted pb-4">
          <li class="list-item bg-dark text-light py-1" data-toggle="tooltip" data-placement="left" title="Continous Learning">Proactively seek knowledge and updates to enhance my skills and stay ahead in the industry.</li>  <!-- continoes learning -->
          <li class="list-item bg-dark text-light py-1" data-toggle="tooltip" data-placement="left" title="Time management">Optimizes productivity and meets deadlines with efficient time allocation.</li> <!--time management-->
          <li class="list-item bg-dark text-light py-1" data-toggle="tooltip" data-placement="left" title="Solution Orieted">Effectively resolves complex issues with creative solutions.</li> <!-- problem solving | solution orieted-->
          <li class="list-item bg-dark text-light py-1" data-toggle="tooltip" data-placement="left" title="Analytical Thinking">Systematically analyze data and situations to identify patterns, connections, and innovative solutions.</li> <!-- Analytical thinking --> 
          <li class="list-item bg-dark text-light py-1" data-toggle="tooltip" data-placement="left" title="Precision Focused">Meticulously review and refine my work to ensure accuracy, precision, and high-quality output.</li> <!-- attention to details | precision focused --> 
          <li class="list-item bg-dark text-light py-1" data-toggle="tooltip" data-placement="left" title="Adaptability">Flexibly adjust to changing circumstances, priorities, and deadlines, ensuring seamless transitions and minimal disruption.</li> <!-- adaptability --> 
          <li class="list-item bg-dark text-light py-1" data-toggle="tooltip" data-placement="left" title="Quick Learner">Quickly learn to use new tools and technologies.</li> <!-- quick learner --> 
          <li class="list-item bg-dark text-light py-1" data-toggle="tooltip" data-placement="left" title="Communication">Effectively convey ideas, thoughts, and information through clear, concise, and engaging verbal and written interactions.</li> <!-- communication --> 
          <li class="list-item bg-dark text-light py-1" data-toggle="tooltip" data-placement="left" title="Hard Working">Consistently exceed my job reponsiblities.</li> <!-- hard working --> 
          <li class="list-item bg-dark text-light py-1" data-toggle="tooltip" data-placement="left" title="Team Work">Collaborates seamlessly with diverse teams to achieve shared goals.</li> <!-- team work -->
          <li class="list-item bg-dark text-light py-1" data-toggle="tooltip" data-placement="left" title="Empathy">Understands and respects diverse perspectives and needs.</li> <!--empathy -->
          <li class="list-item bg-dark text-light py-1" data-toggle="tooltip" data-placement="left" title="Self Driven"> Exhibits high personal and standards completes projects without external prompting.</li> <!-- self Driven -->
        </ul>
      </div>
      <div class=" ">
        <h3 class="fs-4 fw-semibold mb-4">Technical Skills</h3>
        <ul class="list-unstyled text-muted">
          <li class="text-light py-1 ms-5">Web Development: HTML 5, CSS 3 [ Bootstrap 5, Tailwind css ], JavaScript [ Jquery, Ajax ,JSON ],PHP</li>
          <li class="text-light py-1 ms-5">Programming Languages: Bacic C, Basic Python, Core Java 8, Advanced Java [ JDBC, JPA, Hibernate, Spring Boot 4]</li>
          <li class="text-light py-1 ms-5">Relational Databases: Maria DB ,MySQL 8</li>
          <li class="text-light py-1 ms-5">Version Control System: Git and Github</li>
          <li class="text-light py-1 ms-5">IDE: VS code,Eclipse, Sublime Text</li>
          <li class="text-light py-1 ms-5">Concepts: Software Development Life Cycle, Waterfall and Agile Methodologies</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Certificates Section -->
  <section id="certificates" class="container py-5">
    <h2 class="fs-1 fw-bold mb-4">Courses and Certificates</h2>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

      <div class="col">
        <div class="bg-dark rounded shadow overflow-hidden">
          <img src="certificates/accenture forage.jpg" alt="course 1" class="img-fluid h-auto">
          <div class="p-4">
            <h3 class="h5 mb-2">Software Engineering Job Simulation</h3>
            <p class="text-muted mb-4">Nov 2024</p>
            <div class="d-flex justify-content-end">
              <a target="_blank" href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/xhih9yFWsf6AYfngd/HNpZwZcuYwona2d8Y_xhih9yFWsf6AYfngd_Cr3tp6GTqx2EjAL6P_1732534184030_completion_certificate.pdf" class="text-success ">View certificate</a>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="bg-dark rounded shadow overflow-hidden">
          <img src="certificates/software engineer intern.jpg" alt="course 1" class="img-fluid h-auto">
          <div class="p-4">
            <h3 class="h5 mb-2">Sotware Engineer Intern</h3>
            <p class="text-muted mb-4">Nov 2024</p>
            <div class="d-flex justify-content-end">
              <a target="_blank" href="https://www.hackerrank.com/certificates/902386b0b3f6" class="text-success ">View certificate</a>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="bg-dark rounded shadow overflow-hidden">
          <img src="certificates/sql intermediate.jpg" alt="course 1" class="img-fluid h-auto">
          <div class="p-4">
            <h3 class="h5 mb-2">Sql (Intermediate)</h3>
            <p class="text-muted mb-4">Nov 2024</p>
            <div class="d-flex justify-content-end">
              <a target="_blank" href="https://www.hackerrank.com/certificates/5de0bbffd183" class="text-success ">View certificate</a>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="bg-dark rounded shadow overflow-hidden">
          <img src="certificates/sql basics.jpg" alt="course 1" class="img-fluid h-auto">
          <div class="p-4">
            <h3 class="h5 mb-2">Sql (Basics)</h3>
            <p class="text-muted mb-4">Nov 2024</p>
            <div class="d-flex justify-content-end">
              <a target="_blank" href="https://www.hackerrank.com/certificates/dabb1e3bc32b" class="text-success ">View certificate</a>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="bg-dark rounded shadow overflow-hidden">
          <img src="certificates/course (1).jpg" alt="course 1" class="img-fluid h-auto">
          <div class="p-4">
            <h3 class="h5 mb-2">Git</h3>
            <p class="text-muted mb-4">May 2024</p>
            <div class="d-flex justify-content-end">
              <a target="_blank" href="https://simpli-web.app.link/e/dZg3MvFHnJb" class="text-success ">View certificate</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="bg-dark rounded shadow overflow-hidden">
          <img src="certificates/course (2).jpg" alt="course 1" class="img-fluid h-auto">
          <div class="p-4">
            <h3 class="h5 mb-2">Software Development Lifecycle</h3>
            <p class="text-muted mb-4">March 2024</p>
            <div class="d-flex justify-content-end">
              <a target="_blank" href="https://olympus.mygreatlearning.com/courses/104946/certificate" class="text-success ">View certificate</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="bg-dark rounded shadow overflow-hidden">
          <img src="certificates/course (3).jpg" alt="course 1" class="img-fluid h-auto">
          <div class="p-4">
            <h3 class="h5 mb-2">TCS iON - Young Professional</h3>
            <p class="text-muted mb-4">May 2023</p>
            <div class="d-flex justify-content-end">
              <a target="_blank" href="https://drive.google.com/file/d/1F1Ke3nPOL_EnDirK3ulXOrgb0oFoqeqI/view?usp=drivesdk" class="text-success ">View certificate</a>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="bg-dark rounded shadow overflow-hidden">
          <img src="certificates/MongoDB Infosys.jpg" alt="course 1" class="img-fluid h-auto">
          <div class="p-4">
            <h3 class="h5 mb-2">MongoDB</h3>
            <p class="text-muted mb-4">Nov 2024</p>
            <div class="d-flex justify-content-end">
              <a target="_blank" href="https://drive.google.com/file/d/17XfGhW1d-CcmSr-zEeuCw85rnqV9dz0b/view?usp=drive_link" class="text-success ">View certificate</a>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="bg-dark rounded shadow overflow-hidden">
          <img src="certificates/course (4).jpg" alt="course 1" class="img-fluid h-auto">
          <div class="p-4">
            <h3 class="h5 mb-2">Effective Leadership</h3>
            <p class="text-muted mb-4">Jun 2023</p>
            <div class="d-flex justify-content-end">
              <a target="_blank" href="https://drive.google.com/file/d/1Ep-0jDfJEmMsnqq3034IkdDhdO7Z21re/view?usp=drivesdk" class="text-success ">View certificate</a>
            </div>
          </div>
        </div>
      </div>
      

    </div>
    <div id ="additional-courses"class="pt-4 d-none">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <!-- Additional courses cards here -->

        <div class="col">
        <div class="bg-dark rounded shadow overflow-hidden">
          <img src="certificates/course (5).jpg" alt="course 1" class="img-fluid h-auto">
          <div class="p-4">
            <h3 class="h5 mb-2">Communication Skills</h3>
            <p class="text-muted mb-4">Apr 2023</p>
            <div class="d-flex justify-content-end">
              <a target="_blank" href="https://drive.google.com/file/d/1Eo401l49GkqScFyO6sguLYTuPNYoJv-V/view?usp=drivesdk" class="text-success ">View certificate</a>
            </div>
          </div>
        </div>
      </div>

        <div class="col">
        <div class="bg-dark rounded shadow overflow-hidden">
          <img src="certificates/course (6).jpg" alt="course 1" class="img-fluid h-auto">
          <div class="p-4">
            <h3 class="h5 mb-2">Multithreading in Java</h3>
            <p class="text-muted mb-4">Jun 2023</p>
            <div class="d-flex justify-content-end">
              <a target="_blank" href="https://drive.google.com/file/d/1GLM4bujadBsZo0alemmjgw3ZhYEMSofk/view?usp=drivesdk" class="text-success ">View certificate</a>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="bg-dark rounded shadow overflow-hidden">
          <img src="certificates/course (7).jpg" alt="course 1" class="img-fluid h-auto">
          <div class="p-4">
            <h3 class="h5 mb-2">Network Application in Java</h3>
            <p class="text-muted mb-4">Jun 2023</p>
            <div class="d-flex justify-content-end">
              <a target="_blank" href="https://drive.google.com/file/d/1G5EcFxgME9vNfyiLQ58g-Xy3MfD6sPtX/view?usp=drivesdk" class="text-success ">View certificate</a>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="bg-dark rounded shadow overflow-hidden">
          <img src="certificates/course (8).jpg" alt="course 1" class="img-fluid h-auto">
          <div class="p-4">
            <h3 class="h5 mb-2">Microsoft Excel - Beginner</h3>
            <p class="text-muted mb-4">Jun 2023</p>
            <div class="d-flex justify-content-end">
              <a target="_blank" href="https://drive.google.com/file/d/1EsvXiHNJsNHNnv-wGSn_p8MPsKNUgKFY/view?usp=drivesdk" class="text-success ">View certificate</a>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="bg-dark rounded shadow overflow-hidden">
          <img src="certificates/course (10).jpg" alt="course 1" class="img-fluid h-auto">
          <div class="p-4">
            <h3 class="h5 mb-2">Web Scraping With Python</h3>
            <p class="text-muted mb-4">Apr 2023</p>
            <div class="d-flex justify-content-end">
              <a target="_blank" href="https://drive.google.com/file/d/1F0uEPyGHQoW74tiA6slxceIdlUjPHSYB/view?usp=drivesdk" class="text-success ">View certificate</a>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="bg-dark rounded shadow overflow-hidden">
          <img src="certificates/course (11).jpg" alt="course 1" class="img-fluid h-auto">
          <div class="p-4">
            <h3 class="h5 mb-2">Visual Basic for Excel </h3>
            <p class="text-muted mb-4">Jun 2023</p>
            <div class="d-flex justify-content-end">
              <a target="_blank" href="https://drive.google.com/file/d/1EuH0Zsg14uFGxvFIOqnjHePqQfmecI2L/view?usp=drivesdk" class="text-success ">View certificate</a>
            </div>
          </div>
        </div>
      </div>

      
      
    </div>

    <div id="all-courses" class="pt-4 d-none">
     <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

      <div class="col">
        <div class="bg-dark rounded shadow overflow-hidden">
          <img src="certificates/course (9).jpg" alt="course 1" class="img-fluid h-auto">
          <div class="p-4">
            <h3 class="h5 mb-2">Selenium for Beginners</h3>
            <p class="text-muted mb-4">Jul 2023</p>
            <div class="d-flex justify-content-end">
              <a target="_blank" href="https://codered.eccouncil.org/certificate/00c22e25-16a6-4a96-a34d-3c4013ca24bb?logged=false" class="text-success ">View certificate</a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col">
        <div class="bg-dark rounded shadow overflow-hidden">
          <img src="certificates/course (12).jpg" alt="course 1" class="img-fluid h-auto">
          <div class="p-4">
            <h3 class="h5 mb-2">Inventory Management in Excel </h3>
            <p class="text-muted mb-4">Jun 2023</p>
            <div class="d-flex justify-content-end">
              <a target="_blank" href="https://drive.google.com/file/d/1Frcwr70AmfVqj0gWR1Kh7npd3a_li-_K/view?usp=drivesdk" class="text-success ">View certificate</a>
            </div>
          </div>
        </div>
      </div>

      </div>
     </div>
    </div>

    <div class="text-center mt-4">
      <button id="showMore-course" class="btn btn-success">Show More</button>
    </div>
  </section>

  <!-- Internship Section -->
  <section id="internship" class="container py-5">
    <div class="d-flex"><h2 class="fs-1 fw-bold mb-4 col-6">Internship</h2><span class="col-6 text-end"><a target="_blank" href="https://drive.google.com/file/d/1DX0BqnRDE3koOjxxyN7R4oSei4esceIy/view?usp=drive_link">[ View Certificate ]</a></span></div>
    <p class="text-muted">Virtual internship on Main Flow Technologies [September 2024 - November-2024]</p>
    <div class="d-flex"><h2 class="fs-1 fw-bold mb-4 col-6">Implant Training</h2><span class="col-6 text-end">
      <!-- target="_blank" -->
      <a  href="https://drive.google.com/file/d/15KOtiF9vRWygwV3NBH1DVkfMOCNYdW8y/view?usp=drive_link">[ View Certificate ]</a></span></div>
    <p class="text-muted">Completed a one-day implant training in Python programming at Odugaa Tech in 2018.</p>
  </section>

  <!-- About Section -->
  <section id="about" class="container py-5 bg-dark">
    <h2 class="fs-1 fw-bold mb-4">About Me</h2>
    <p class="mb-4 text-muted">Dedicated to crafting innovative solutions with proficiency in web development. Eager to excel as an Associate in software development, leveraging diverse programming skills and a passion for continuous learning.</p>
  </section>

 <!-- Interests Section -->
<section id="interests" class="container py-5">
  <h2 class="fs-1 fw-bold mb-4 ">Interests</h2>
  <div class="row">
    <div class="col-md-6">
      <h3 class="fs-4 fw-semibold mb-4">Technical</h3>
      <ul class="list-unstyled text-muted">
        <li>Artificial Intelligence</li>
        <li>App Development</li>
        <li>Automation</li>
        <li>Freelance</li>
      </ul>
    </div>
    <div class="col-md-6">
      <h3 class="fs-4 fw-semibold mb-4">Non-Technical</h3>
      <ul class="list-unstyled text-muted">
        <li>Video editing</li>
      </ul>
    </div>
  </div>
</section>

<!-- Education Section -->
<section id="education" class="container py-5"> 
  <h2 class="fs-1 fw-bold mb-4">Education</h2>
  <div class="relative">
    <div class="border-start border-success border-2 mx-4">
      <!-- Education Timeline Items -->
      <div class="relative mb-4">
        <div class="position-absolute rounded-circle bg-success" style="width: 12px; height: 12px; left: -22px; top: 6px;"></div>
        <div class="ms-4">
          <h3 class="fs-5 fw-semibold">Bachelor of Engineering in Computer Science (B.E CSE)</h3>
          <p class="text-muted">AVS Engineering College, affiliated with Anna University (2017 - 2021)</p>
          <p class="text-muted">CGPA: 7.35/10.0</p>
        </div>
      </div>

      <div class="relative mb-4">
        <div class="position-absolute rounded-circle bg-success" style="width: 12px; height: 12px; left: -22px; top: 6px;"></div>
        <div class="ms-4">
          <h3 class="fs-5 fw-semibold">Higher Secondary School (12th Grade)</h3>
          <p class="text-muted">Jay Matriculation Higher Secondary School (2014 - 2016)</p>
          <p class="text-muted">Percentage: 78.16%</p>
        </div>
      </div>

      <div class="relative mb-4">
        <div class="position-absolute rounded-circle bg-success" style="width: 12px; height: 12px; left: -22px; top: 6px;"></div>
        <div class="ms-4">
          <h3 class="fs-5 fw-semibold">Secondary School (10th Grade)</h3>
          <p class="text-muted">Jay Matriculation Higher Secondary School (2013 - 2014)</p>
          <p class="text-muted">Percentage: 79.80%</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Contact Chips -->
<section id="contact" class="container py-4">
  <h2 class="fs-2 fw-bold mb-4">Contact Me</h2>
  <div class="d-flex flex-wrap">
    <div class="p-2">
      <a href="https://wa.me/918072610437/?text=Hi Arun vignesh, I hope you are doing well! I came across your portfolio recently and was really impressed by your work. Your projects caught my eye. Would you be open to chatting sometime? Let me know what works for you. Looking forward to connecting!" class="contact-chip btn btn-outline-success"  target="_blank" data-contact-type="whatsapp">
        <svg class="me-2" fill="#ffffff" height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 308 308" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_468_"> <path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"></path> <path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"></path> </g> </g></svg>
        WhatsApp
      </a>
    </div>
    <div class="p-2">
      <a href=mailto:“arunvignesh399@gmail.com?cc=”spectaculararun@gmail.com?subject=Invitation%20to%20Discuss”?body=Dear%20Arun%20vignesh%2C%0A%0AI%20trust%20this%20email%20finds%20you%20well.%20I%20recently%20had%20the%20opportunity%20to%20review%20your%20portfolio%20and%20I%20must%20say%2C%20I%20was%20thoroughly%20impressed%20by%20the%20caliber%20of%20your%20work.%20%0A%0AWould%20you%20be%20available%20for%20a%20brief%20discussion%20at%20your%20earliest%20convenience%3F%20I%20believe%20there%20could%20be%20valuable%20insights%20to%20be%20shared.%0A%0APlease%20let%20me%20know%20your%20availability%2Cand%20I%20will%20ensure%20your%20schedule%20accordingly.%20I%20look%20forward%20to%20the%20possibility%20of%20connecting%20and%20discussing%20further.%0A%0AWarm%20regards%2C%0A%0A%5BYour%20Name%5D%0A%5BYour%20Position%2FTitle%5D%0A%5BYour%20Company%2FOrganization%5D%0A%5BYour%20Contact%20Information%5D class="contact-chip btn btn-outline-success" target="_blank" data-contact-type="email">
        <svg class="me-2 text-white" fill="#ffffff" viewBox="0 0 24 24" width="24" height="24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
        Email
      </a>
    </div>
    <div class="p-2">
      <a href="https://www.google.com/maps/place/12.874702,+79.987930/@12.8746884,79.9879409,21z/data=!4m4!3m3!8m2!3d12.8747021!4d79.9879298" target="_blank" class="contact-chip btn btn-outline-success" data-contact-type="location">
        <svg class="me-2 text-white" fill="#ffffff" viewBox="0 0 24 24" width="24" height="24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
        Location
      </a>
    </div>
    <div class="p-2">
  <a href="tel:+918072610437" target="_blank" class="contact-chip btn btn-outline-success" data-contact-type="call">
    <svg class="me-2 text-white" fill="#ffffff" viewBox="0 0 24 24" width="24" height="24">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
    Call
  </a>
</div>
</section>

<!-- Feedback Section -->
<section id="feedback" class="container py-5">
  <h2 class="fs-1 fw-bold mb-4">Feedback</h2>
  <form>
    <div class="mb-3">
      <label for="name" class="form-label">Name</label>
      <input type="text" id="name" class="form-control bg-dark text-light" required>
    </div>
    <div class="mb-3">
      <label for="message" class="form-label">Message</label>
      <textarea id="message" class="form-control bg-dark text-light" rows="5" required></textarea>
    </div>
    <button type="submit" class="btn btn-success">Send Message</button>
  </form>
</section>

<!-- Social Media Links -->
<section class="container py-4 d-flex justify-content-center">
  <div class="d-flex">
    <!-- Social Media Links -->
    <a href="https://github.com/Arun8072" target="_blank" rel="noopener noreferrer" class="social-link me-3">
      <svg class="text-light" fill="#ffffff" viewBox="0 0 24 24" width="24" height="24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    </a>
<!--     <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer" class="social-link me-3">
      <svg class="text-light" fill="#ffffff" viewBox="0 0 24 24" width="24" height="24">
        <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.103-6.102 2.103-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
      </svg>
    </a> -->
    <a href="https://www.linkedin.com/in/arun-vignesh-108498275" target="_blank" rel="noopener noreferrer" class="social-link">
      <svg class="text-light" fill="#ffffff" viewBox="0 0 24 24" width="24" height="24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    </a>
  </div>
</section>

<!-- Footer -->
<footer class="bg-dark py-3 text-center">
  <div style="text-align: center;">
    <h2>Visitor Count</h2>
    <!-- visitor count from: https://www.freecounterstat.com/  -->
    <img src="https://counter6.optistats.ovh/private/freecounterstat.php?c=1hj21sf4w466myh3squ4qtj4zhd23te7" 
         border="0" 
         title="Page Counter" 
         alt="Page Counter">
  </div>
  <p class="text-muted">&copy; 2024 Portfolio. All rights reserved.</p>
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
<script src="script.js"></script>
</body>
</html>
