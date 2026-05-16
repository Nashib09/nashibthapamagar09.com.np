<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="google-site-verification" content="TCYDjPGs4mjTQmvE4JIqweCYrrjbfu549UuGoTykXSg" />
  <meta name="title" content="Nashib Thapa Magar - Portfolio | Web Developer | Software Engineer ">
  <meta name="description" content="Explore the portfolio of Nashib Thapa Magar, a innovative, skilled web developer and software engineer specializing in innovative web applications, software solutions, and user-friendly designs. Let's build something great together!">
  <title>Nashib Thapa Magar Portfolio</title>
<style>
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
</style>
</head>
<body class="bg-dark text-light">
  <!-- Header -->
  <header class="py-3">
    <nav class="container d-flex align-items-center justify-content-between">
      <span class="fs-2 fw-bold hide-in-small">Nashib Thapa Magar</span>
      <span class="fs-2 fw-bold hide-in-large">NTM</span>
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
  </section>

  <!-- Projects Section -->
  <section id="projects" class="container py-5">
    <h2 class="fs-1 fw-bold mb-4">Featured Projects</h2>
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
      <a target="_blank" href="https://github.com/Nashib09/Weather-App-using-React.js.git" class="btn btn-success">View Project</a>
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
      <a target="_blank" href="https://github.com/Nashib09/MERN-STACK-Contact-Management-System.git" class="btn btn-success">View Project</a>
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
        <span class="languages_used">Next.js| FPDF</span>
        <span class="languages_used">Mongo DB</span>
      </p>
      <a target="_blank" href="https://github.com/Nashib09/s-management-system-.git" class="btn btn-success">View Project</a>
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


    
  <!--
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
          <button id="viewCertBtn" class="cert-btn">View Certificate</button>

<!-- The Modal (Hidden by default) -->
<div id="certModal" class="modal">
  <span class="close-btn">&times;</span>
  <div class="modal-content-wrapper">
    <img src="IMG_2619.jpg" class="modal-content" alt="Course 1 Certificate">
  </div>
</div>
          <div class="p-4">
            <h3 class="h5 mb-2">Node.js MERN STACK</h3>
            <p class="text-muted mb-4">Aug 2025</p>
            <div class="d-flex justify-content-end">
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="bg-dark rounded shadow overflow-hidden">
          <button id="viewCertBtn" class="cert-btn">View Certificate</button>

<!-- The Modal (Hidden by default) -->
<div id="certModal" class="modal">
  <span class="close-btn">&times;</span>
  <div class="modal-content-wrapper">
    <img src="IMG_18215.jpg" class="modal-content" alt="Course 1 Certificate">
  </div>
</div>
          <div class="p-4">
            <h3 class="h5 mb-2">AI Powered FullStack</h3>
            <p class="text-muted mb-4">Jan 2026</p>
            </div>
          </div>
        </div>
      </div>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <!-- Additional courses cards here -->
      <div class="col">
        <div class="bg-dark rounded shadow overflow-hidden">
          <img src="I"  class="img-fluid h-auto" alt="course 1" style="max-width: 200px; max-height: 150px; object-fit: contain;">
          <div class="p-4">
            <h3 class="h5 mb-2">Microsoft Office- Beginner</h3>
            <p class="text-muted mb-4">2012</p>
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
    <div class="d-flex"><h2 class="fs-1 fw-bold mb-4 col-6">Internship</h2><span class="col-6 text-end">
      <button id="viewCertBtn" class="cert-btn">View Certificate</button>

<!-- The Modal (Hidden by default) -->
<div id="certModal" class="modal">
  <span class="close-btn">&times;</span>
  <div class="modal-content-wrapper">
    <img src="IMG_2105.jpg" class="modal-content" alt="Course 1 Certificate">
  </div>
</div></span></div>
    <p class="text-muted">Virtual internship on System integration role and technical support [December 2025 - February-2026]</p>

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
          <h3 class="fs-5 fw-semibold">Bachelor of Information Technology (BIT)</h3>
          <p class="text-muted">Gandaki University (2022 - 2026)</p>
        </div>
      </div>

      <div class="relative mb-4">
        <div class="position-absolute rounded-circle bg-success" style="width: 12px; height: 12px; left: -22px; top: 6px;"></div>
        <div class="ms-4">
          <h3 class="fs-5 fw-semibold">Higher Secondary School (12th Grade)</h3>
          <p class="text-muted">Kathmandu Model Higher Secondary School (2012 - 2014)</p>
        </div>
      </div>

      <div class="relative mb-4">
        <div class="position-absolute rounded-circle bg-success" style="width: 12px; height: 12px; left: -22px; top: 6px;"></div>
        <div class="ms-4">
          <h3 class="fs-5 fw-semibold">Secondary School (10th Grade)</h3>
          <p class="text-muted">Bright Future Higher Secondary School (2011 - 2012)</p>
          <p class="text-muted">Percentage: 75%</p>
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
  <a href="tel:+9779842266372" target="_blank" class="contact-chip btn btn-outline-success" data-contact-type="call">
    <svg class="me-2 text-white" fill="#ffffff" viewBox="0 0 24 24" width="24" height="24">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
    Call
  </a>
</div>
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

<!-- Social Media Links -->
<section class="container py-4 d-flex justify-content-center">
  <div class="d-flex">
    <!-- Social Media Links -->
    <a href="https://github.com/Nashib09" target="_blank" rel="noopener noreferrer" class="social-link me-3">
      <svg class="text-light" fill="#ffffff" viewBox="0 0 24 24" width="24" height="24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    </a>
<!--     <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer" class="social-link me-3">
      <svg class="text-light" fill="#ffffff" viewBox="0 0 24 24" width="24" height="24">
        <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.103-6.102 2.103-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
      </svg>
    </a> -->
    <a href="https://www.linkedin.com/in/nashib-thapa-magar-78b830375/5" target="_blank" rel="noopener noreferrer" class="social-link">
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
  <p class="text-muted">&copy; 2026 Portfolio. All rights reserved.</p>
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
<script src="script.js"></script>
</body>
</html>
