import React, {FC} from "react";
import "./About.scss";

interface IProps {}

/**
 * @author
 * @function @About
 **/

const About: FC<IProps> = () => {
    return (
        <div className="about">
            <h2 className="about__header">About me</h2>
            <p className="about__content">
                <p>
                    My name is Igor Usmanov I’m from Belarus. I grew up and live in Minsk I’m 30
                    years old. I love playing sports, swimming in the pool and learning chess I
                    enjoy studying and lately I have been deeply immersed in programming and I study
                    application development from start to finish.
                </p>
                <p>
                    Specifically, I like creating something out of nothing. There is an idea and you
                    build it from the ground up. When you start, there is just a blank text editor
                    like a blank sheet of paper. When you’re done, there’s a working program in the
                    end. I like research. Programming tends to involve much googling and reading
                    through documentation.
                </p>
            </p>
            <h2 className="about__header">Skills</h2>
            <p className="about__skills">
                <ul>
                    <li>
                        I know the basics of the web direction and use
                        <b> HTML</b>,<b> CSS</b>,<b> SASS(SCSS)</b>,<b> BEM</b>
                    </li>

                    <li>
                        I am constantly updating my knowledge in JavaScript:
                        <b> ES5, ES6+</b>,<b> Patterns & OOP & SOLID</b>,<b> Websockets</b>
                    </li>

                    <li>
                        I have experience in developing using popular frontend frameworks(
                        <b> React</b>,<b> Readux toolkit</b>,<b> Flux</b>)
                    </li>

                    <li>
                        I created <b> RESTful API</b> and have experience in developing using
                        popular backend frameworks (<b> Node</b>,<b> Express</b>,<b> Nest.js</b>)
                    </li>

                    <li>
                        I used DB (<b>PostgreSQL</b>,<b> MongoDB</b>) in my projects with{" "}
                        <b> Typeorm</b>
                    </li>

                    <li>
                        Initial experience writing automated tests (<b>Jest</b>,<b> Enzyme</b>,
                        <b> React Testing Library</b>
                        <b> Mocha</b>)
                    </li>

                    <li>
                        I also use tools like:
                        <b> git</b>,<b> webpack</b>,<b> TypeScript</b>
                    </li>

                    <li>
                        I have little experience in creating / editing containers, as well as their
                        assembly / disassembly (<b> Docker</b>)
                    </li>

                    <li>
                        I check the code with
                        <b> Eslint</b>,<b> Eslint with Airbnb</b>,<b> Prettier</b>
                    </li>

                    <li>
                        I have some experience of joint development with the <b> team</b>
                    </li>

                    <li>
                        For logging on api I'm use <b> Winston</b>
                    </li>
                </ul>
            </p>
        </div>
    );
};
export default About;
