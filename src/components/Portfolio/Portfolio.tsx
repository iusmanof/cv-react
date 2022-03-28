import React, {FC} from "react";
import "./Portfolio.scss";
import {useSpring, animated} from "react-spring";
import IProject from "../../intefaces/IProjects";

interface IProps {}

/**
 * @author
 * @function @Portfolio
 **/

const projects: IProject[] = [
    {
        title: "cv react",
        imageLink:
            "https://user-images.githubusercontent.com/74846667/159911557-1ab2e807-6c16-49ed-8ac7-0f29dc9cb181.PNG",
        projectLink: "https://github.com/iusmanof/cv-react/tree/react-cv"
    },
     {
        title: "burger",
        imageLink:
            "https://user-images.githubusercontent.com/74846667/160389919-51054b38-4965-44bf-b134-2ba5668c3a5e.PNG",
        projectLink: "https://github.com/iusmanof/burger/blob/main/README.MD"
    },
       {
        title: "api node nest ...",
        imageLink:
            "https://user-images.githubusercontent.com/74846667/149664973-83408730-2a26-49f2-aca1-c17fde5f21e5.png",
        projectLink: "https://github.com/iusmanof/nodejs2021Q4-service"
    }
];

const projectsHTML = projects.map((project) => {
    return (
        <li className="portfolio__project">
            <img src={project.imageLink} alt="cv" />
            <span>{project.title}</span>
            <h4>
                <a href={project.projectLink}>github link</a>
            </h4>
        </li>
    );
});

const Portfolio: FC<IProps> = () => {
    const props = useSpring({
        from: {opacity: 0, transform: "translate3d(0,100%,0)"},
        to: {opacity: 1, transform: "translate3d(0%,0,0)"}
    });

    return (
        <animated.div style={props}>
            <div className="portfolio scroll-content">
                <h2 className="portfolio__header category__header">Portfolio</h2>

                <nav className="portfolio__category">
                    <ul>
                        <li>All</li>
                        <li>Front-end</li>
                        <li>Back-end</li>
                    </ul>
                </nav>

                <ul className="portfolio__projects">
                     {projectsHTML}
                </ul>
               
            </div>
        </animated.div>
    );
};

export default Portfolio;
