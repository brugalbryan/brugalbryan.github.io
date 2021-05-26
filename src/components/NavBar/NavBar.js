import classes from './NavBar.module.css'

const NavBar= () => {
    return ( 
        <div className={classes.NavBar}>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/#about">About Me</a>
                    </li>
                    <li>
                        <a href="/#Skills">Skills</a>
                    </li>
                    <li>
                        <a href="/#Contact">Contact Me</a>
                    </li>
                </ul>
            </nav>
        </div>
     );
  };
  
  export default NavBar;