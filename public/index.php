
<!DOCTYPE html>
<html lang="en">
    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Michael Truong, a freelance full stack developer and designer">
        <meta name="keywords" content="Michael Truong, Web Designer, Web Developer, UI Designer, UX Designer, Game Designer, PHP Developer, Full Stack Developer, San Antonio">
        <meta name="author" content="Michael Truong">
        <title>Michael Truong - Web Designer and Developer</title>
        <link rel="shortcut icon" href="/img/favicon.png">
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Taviraj" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Raleway:300" rel="stylesheet">
        <link rel="stylesheet" href="/css/portfolio-new.css">

    </head>
    <body>

        <div class="container">
            <div class="banner">
                <div class="bannerContainer">
                    <div class="nameMobile">Michael Truong</div>
                    <div id="bannerTextMobile">Designer <span class="slash">/</span> Developer</div>
                    <div class="bannerSeperater">|</div>
                    <div class="bannerText bannerRight" id="designer">Designer</div>
                    <div class="bannerText bannerRight" id="developer">Developer</div>
                    <div class="bannerText bannerLeft" id="uiux">UI / UX</div>
                    <div class="bannerText bannerLeft" id="game">Game</div>
                    <div class="bannerText bannerLeft" id="web">Website</div>
                    <div class="bannerText bannerLeft" id="php">PHP</div>
                    <div class="bannerText bannerLeft" id="fullStack">Full Stack</div>
                </div>
            </div>
            <div class="hline"></div>
            <div class="vline"></div>
            <div class="navBarMobile">
                <div class="linksM" id="goAboutM">About</div>
                <div class="linksM" id="goPortfolioM">Portfolio</div>
                <div class="linksM" id="goContactM">Contact</div>
            </div>
            <div class="navBar">
                <div class="links" id="goAbout">About</div>
                <div class="links" id="goPortfolio">Portfolio</div>
                <div class="links" id="goBlog">Blog</div>
                <div class="links" id="goContact">Contact</div>
            </div>
            <div class="name"><h1 class="nameHeader">Michael Truong</h1></div>
            <div id="aboutBanner">ABOUT ME</div>
            <div class="about">
                <div class="aboutContent">
                    Beauty that compliments functionality and functionality that amplifies beauty; 
                    that is the end goal of all my work. As a creative and a developer I am
                    able to see projects in multiple zooms and angles which allows me to approach 
                    problems in multiple perspectives and offer superior solutions.
                    <br>
                    <br>
                    I have been in love with creating things since a very young age when I started 
                    messing around with game mods and map editors. Out of this love for game design
                    my passion for functionality and beauty evolved and was not long before I made my
                    first steps into the digital world of design and development.
                </div>
                <div class="externalLinks">
                    <div class="external" id="git"><a href="https://github.com/michaeldtruong" target="_blank"><img src="/img/git_icon.png" class="externalImage"></a></div>
                    <div class="external" id="linkedin"><a href="https://www.linkedin.com/in/mdtruong" target="_blank"><img src="/img/linkedin_icon.png" class="externalImage"></a></div>
                    <div class="external" id="dribble"><img src="/img/dribble_icon.png" class="externalImage"></div>
                </div>
            </div>
            <div class="aboutPicture"><img src="/img/mike.jpg" class="myPic"></div>
            <div id="portfolioBanner">PORTFOLIO</div>
            <div class="portfolio">
                <div class="projects" id="project1">
                    <div class="portContent"><h4>Memory Wars</h4>Game Design/Development, Object Oriented Programming, HTML5, CSS3, Javascript, jQuery.</div>
                    <div class="portImage"><a href="/memory-wars.html" target="_blank"><img src="/img/memorywars.png" class="projectPictures"></a></div>
                </div>
                <div class="projects" id="project2">
                    <div class="portContent"><h4>Weather Map</h4>UI/UX Design, API, HTML5, CSS3, Javascript, jQuery.</div>
                    <div class="portImage"><a href="/weather_map.html" target="_blank"><img src="/img/weathermap.png" class="projectPictures"></a></div>
                </div>
                <div class="projects" id="project3">
                    <div class="portContent"><h4>Alien Artifact</h4>UI/UX Design, Photoshop, HTML5, CSS3, Javascript.</div>
                    <div class="portImage"><a href="/calculator.html" target="_blank"><img src="/img/artifact.png" class="projectPictures"></a></div>
                </div>
                <div class="projects" id="project4">
                    <div class="portContent"><h4>4U2Do</h4>HTML5, CSS3, Javascript.</div>
                    <div class="portImage"><a href="/todolist2.html" target="_blank"><img src="/img/todo.png" class="projectPictures"></a></div>
                </div>
                <div class="projects" id="project5">
                    <div class="portContent"><h4>Knotted Fates</h4>Game Design/Development, Level Design, Parallax Mapping, Photoshop</div>
                    <div class="portImage"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/bRubZ8F9Yp4" frameborder="0" allowfullscreen></iframe></div>
                </div>
            </div>
            <div class="blog"></div>
            <div id="contactBanner">CONTACT</div>
            <div class="contactContent">
                Are you interested in working together? Have any questions, comments, or just need a friend to say hi? 
                You are very welcome to contact me. Then we can create something amazing and later take over the world.
            </div>
            <iframe name="frame" style="display:none;"></iframe>
            <div class="contactForm">
                <div class='afterSubmit'>Got it. I will get back to you soon.</div>
                <form method="POST" action="https://formspree.io/michael.d.truong@icloud.com" target="frame" id="contactMe">
                    <input type="text" id="formname" name="name" class="formtext" placeholder=" Your Name*" required="true">
                    <input type="email" id="formemail" name="email" class="formtext" placeholder=" Your Email*" required="true">
                    <textarea type="text" id="formmessage" name="message" class="formtextarea" placeholder=" Your Message*" required="true"></textarea>
                    <button type="submit" id="formsubmit">SEND</button>
                </form>
            </div>
    	</div>
    	
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
        <script src="/js/portfolio.js"></script>

    </body>
</html>