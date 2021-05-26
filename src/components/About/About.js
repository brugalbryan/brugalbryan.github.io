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
                    <h2>Hello I'm Bryan Brugal</h2>
                    <p>
                        I am a sofware developer based in New York.
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                    </p>
                </div>
                <div className={classes.Photo}>
                    <img className={classes.Me} src={artstation} alt="me"></img>
                </div>
            </div>
        </div>
     );
  };
  
  export default About;