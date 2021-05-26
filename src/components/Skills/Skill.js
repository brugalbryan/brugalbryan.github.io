import classes from './Skills.module.css'
import PageHeader from './../PageHeader/PageHeader'
import tomwillfixit from './../../img/tomwillfixit.jpg'

const listTitleStyle = {fontWeight: 900, color: '#9B1FE8', marginBottom: '4px'}


const FrontendSkills = 
<ul>
    <li style = {listTitleStyle}>Front End</li>
    <li>React JS - HTML - CSS</li>
    <li>Bootstrap - redux </li>
</ul>

const backendSkills = 
<ul>
    <li style = {listTitleStyle}>Back End</li>
    <li>Java - SQL</li>
</ul>

const DataScienceSkill = 
<ul>
    <li style = {listTitleStyle}>Data Sciences</li>
    <li>Python - Pandas -Tensorflow</li>
</ul>

const buildtoolSkills = 
<ul>
    <li style = {listTitleStyle}>Build tools</li>
    <li>Python - JavaScript - Java</li>
</ul>

const MobileSkills = 
<ul>
    <li style = {listTitleStyle}>Mobile Development</li>
    <li>XML - Java - API</li>
</ul>

const otherSkills = 
<ul>
    <li style = {listTitleStyle}>Other</li>
    <li>Git - XMl - Json</li>
</ul>


const totalskills = [FrontendSkills, backendSkills, DataScienceSkill, buildtoolSkills, MobileSkills, otherSkills]

const Skills= () => {
    return ( 
        <div className={classes.Skills}>
            {/* <h1>Skills</h1> */}
            <PageHeader title = {'What about the Skills?'} />
            <p>
            I am a lifelong learner who enjoys discovering new things. I've worked with and like the programming 
            languages, toolkits, frameworks, and libraries listed below. I have more control over some of them 
            than others.
            </p>
            <div className={classes.Container}>
                <img className={classes.Me} src={tomwillfixit} alt = "fix it" />
                {totalskills.map(skills =>{
                    return(
                        <div className={classes.List}>
                            {skills}
                            </div>
                    )
                })}
            </div>
        </div>
     );
  };
  
  export default Skills;