import classes from "./Home.module.css";
import nicepic from './../../img/nicepic.png';
import maxresdefault from './../../img/maxresdefault.jpg'

const Home= () => {
    return ( 
        <div className={classes.Home}>
            {/* <h1>Home</h1> */}
            <div className={classes.Container}>
                <h1 className={classes.Hello}>Hello, World!</h1>
                <h1>Welcome to my website</h1>
            </div>
            <img className={classes.Maxresdefault} src={maxresdefault} alt="nicepic"></img>
            <img className={classes.Nicepic} src={nicepic} alt="nicepic"></img>

        </div>
     );
  };
  
  export default Home;