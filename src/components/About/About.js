import classes from './About.module.css'
import PageHeader from './../PageHeader/PageHeader'
import artstation from './../../img/artstation.jpg';

const About= () => {
    return ( 
        <div className={classes.AboutMe}>
            {/* <h1>About</h1> */}
            <PageHeader title = {'About Me'} />
            <div className={classes.Container}>
                <div className={classes.Text}>
                    <h2>Hello I'm Bryan Brugal a Sofware Developer </h2>
                    <p>Based in United States, New York. When I'm not coding, I'm usually 
                            trading stocks, watching a film, ice skating, exercising, playing or watching basketball, reading 
                            about all things tech and finance.
                        </p>
            
                        <p>Currently I'm a junior student at Lehman College doing a 
                            bachelor's degree in computer science.</p>
                                 
                        <p>I enjoy working with code, and trying new technologies. This year, I'm looking to further 
                            my knowledge in web development learning Html, Css, Node.js, React, Redux, JQuery, Bootstrap, 
                            JavaScript, and Django. 
                        </p>
                        
                        <p>I’m interested in new and exciting projects and opportunities so feel free to get in touch!</p>
                                
                </div>
                <div className={classes.Photo}>
                    <img className={classes.Me} src={artstation} alt="me"></img>
                </div>
            </div>
        </div>
     );
  };
  
  export default About;