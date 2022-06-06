import {IEducationState, EducationAction, EdcucationActionTypes} from "../../types/educationType";

const initialState: Array<IEducationState> = [
    {
        date: "2009 - 2014",
        isCertificated: true,
        title: "Higher education: Belarusian State University of Informatics and  Radioelectronics - Telecommunications Enginee"
    },
    {
        date: "2014 - 2017",
        isCertificated: true,
        title: "Course: IT Step - Programming Engineer"
    },
    {
        date: "2021",
        isCertificated: true,
        title: "Course: EPAM RS School - JS/Front-end 2021Q1"
    },
    {
        date: "2021",
        isCertificated: false,
        title: "Course: EPAM RS School - React 2021Q3"
    },
    {
        date: "2021",
        isCertificated: true,
        title: "Course: EPAM RS School - NodeJS 2021Q4"
    }
];

export const educationReducer = (
    state = initialState,
    action: EducationAction
): Array<IEducationState> => {
    switch (action.type) {
        case EdcucationActionTypes.FETCH_EDUCATION:
            return action.payload;
        default:
            return state;
    }
};
