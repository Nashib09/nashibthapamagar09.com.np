<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3D Portfolio</title>
    <style>
* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', sans-serif; }

body { overflow: hidden;
}

.container {
margin-bottom:10px;
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory; /* Vertical snap-scroll */
    scroll-behavior: smooth;
}

.slide {
    height: 100vh;
    width: 140%;
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-snap-align: start;
    padding: 80px 20px;
}

.navbar {
    position: fixed;
    top: 0; width:90%;
    display: flex; justify-content: space-between;
    padding: 20px 10%; background: rgba(255, 255, 255, 0.9);
    z-index: 1000;
}

.nav-links { display: flex; list-style: none;}
.nav-links li { margin-left: 50px;
}
.nav-links a {
    text-decoration: none; color: #333; font-weight: 600;
    transition: 0.3s; position: relative;
}

.nav-links a::after { /* Hover underline effect */
    content: ''; position: absolute; width: 0; height: 2px;
    bottom: -5px; left: 0; background: #007bff; transition: 0.3s;
}

.nav-links a:hover::after { width: 100%; }
.nav-links a:hover { color: #007bff; }

.profile-circle {
margin-top:5px;
    width: 250px; height: 250px;
    border-radius: 50%;
    position: relative;
    padding: 10px;
    background: linear-gradient(145deg, #007bff, #00d4ff);
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff; /* 3D Shadow */
    display: flex; justify-content: center; align-items: center;
    transition: transform 0.5s ease;
}

.profile-circle:hover {
    transform: perspective(1000px) rotateY(15deg) rotateX(10deg);
}

.profile-circle img {
    width: 100%; height: 100%;
    border-radius: 50%; object-fit: cover; border: 5px solid white;
}
.slide {
    display: flex;
    flex-direction: column; /* This forces children to stack on new lines */
    justify-content: center;
    align-items: center;
}
.about {
    display: flex;
    flex-direction: column; /* This forces children to stack on new lines */
    justify-content: center;
    align-items: center;
}
</style>
</head>
<body>

    <nav class="navbar">
        <div class="logo"><b>PORTFOLIO</b></div>
        <br>
        <ul class="nav-links">
            <li><a href="#home"><b>Home</b></a></li>
            <li><a href="#portfolio"><b>Portfolio</b></a></li>
            <li><a href="#about"><b>About</b></a></li>
            <li><a href="#contact"><b>Contact</b></a></li>
        </ul>
    </nav>

    <main class="container">
        <section id="home" class="slide">
            <div class="hero-content">
                <div class="profile-container">
                    <div class="profile-circle">
                        <img src="nashib.jpg" alt="Profile">
                    </div>
                </div>
                <div class="description">
                    <h1>Hi, I'm Nashib Thapa Magar</h1>
                    <p>Software Developer, 
                    <br>Full Stack Developer & Designer.</p>
                </div>
            </div>
        </section>
 <section id="portfolio" class="slide">
    <div class="content-wrapper">
        <h2>Portfolio</h2>
        <p>Here are some of my recent works:</p>
    </div>
</section>

         <section id="about" class="slide">
    <div class="content-wrapper">
        <h2>About Me</h2>
        <p>I am a passionate Full Stack Developer with experience 
        <br>in building dynamic and responsive web applications.<br>
         I enjoy turning complex problems into simple, beautiful, 
        <br>and intuitive designs. When I'm not coding, you'll find 
        <br>me exploring new technologies or working on personal projects.</p>
    </div>
</section>
        <section id="contact" class="slide">
    <div class="content-wrapper">
        <h2>Get In Touch</h2>
        <p>Gmail: nashibthapamagar@gmail.com<br>
        Contact No: +977 9816189157</p>
        <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Instagram</a></li>

        </ul>
    </div>
</section>

    </main>

    <script>
        const sections = document.querySelectorAll(".slide");
const navLi = document.querySelectorAll(".nav-links li a");

const container = document.querySelector(".container");

container.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (container.scrollTop >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href").includes(current)) {
      a.classList.add("active");
    }
  });
});

    </script>
</body>
</html>
