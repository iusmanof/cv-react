import React, {FC, useState} from "react";
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
        isFrontEnd: true,
        isBackEnd: false,
        title: "cv react",
        imageLink:
            "https://user-images.githubusercontent.com/74846667/159911557-1ab2e807-6c16-49ed-8ac7-0f29dc9cb181.PNG",
        projectLink: "https://github.com/iusmanof/cv-react/tree/react-cv"
    },
    {
        isFrontEnd: true,
        isBackEnd: false,
        title: "burger",
        imageLink:
            "https://user-images.githubusercontent.com/74846667/160389919-51054b38-4965-44bf-b134-2ba5668c3a5e.PNG",
        projectLink: "https://github.com/iusmanof/burger/blob/main/README.MD"
    },
    {
        isFrontEnd: false,
        isBackEnd: true,
        title: "api node nest",
        imageLink:
            "https://user-images.githubusercontent.com/74846667/149664973-83408730-2a26-49f2-aca1-c17fde5f21e5.png",
        projectLink: "https://github.com/iusmanof/nodejs2021Q4-service"
    }
];

const itemProject = ({imageLink, title, projectLink}: IProject) => {
    return (
        <li className="portfolio__project">
            <img src={imageLink} alt="cv" />
            <span>{title}</span>
            <h4>
                <a href={projectLink}>github: {title}</a>
            </h4>
        </li>
    );
};

const allProjects = projects.map((project) => {
    if (project.isFrontEnd || project.isBackEnd) {
        return itemProject(project);
    }
});

const frontendProjects = projects.map((project) => {
    if (project.isFrontEnd) {
        return itemProject(project);
    }
});

const backendProjects = projects.map((project) => {
    if (project.isBackEnd) {
        return itemProject(project);
    }
});

const Portfolio: FC<IProps> = () => {
    const props = useSpring({
        from: {opacity: 0, transform: "translate3d(0,100%,0)"},
        to: {opacity: 1, transform: "translate3d(0%,0,0)"}
    });
    const [all, setAllProject] = useState(true);
    const [frontend, setFrontEnd] = useState(false);
    const [backend, setBackEnd] = useState(false);

    return (
        <animated.div style={props}>
            <div className="portfolio scroll-content">
                <h2 className="portfolio__header category__header">Portfolio</h2>

                <nav className="portfolio__category">
                    <ul>
                        <li
                            className={all ? "portfolio__category-active" : ""}
                            onClick={() => {
                                setAllProject(true);
                                setFrontEnd(false);
                                setBackEnd(false);
                            }}
                        >
                            All
                        </li>
                        <li
                            className={frontend ? "portfolio__category-active" : ""}
                            onClick={() => {
                                setAllProject(false);
                                setFrontEnd(true);
                                setBackEnd(false);
                            }}
                        >
                            Front-end
                        </li>
                        <li
                            className={backend ? "portfolio__category-active" : ""}
                            onClick={() => {
                                setAllProject(false);
                                setFrontEnd(false);
                                setBackEnd(true);
                            }}
                        >
                            Back-end
                        </li>
                    </ul>
                </nav>

                <ul className="portfolio__projects">
                    {all && allProjects}
                    {frontend && <>{frontendProjects}</>}
                    {backend && <>{backendProjects}</>}
                </ul>
            </div>
        </animated.div>
    );
};

export default Portfolio;
