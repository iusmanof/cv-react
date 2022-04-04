export enum EdcucationActionTypes {
    FETCH_EDUCATION = 'FETCH_EDUCATION',
}

export interface IEducationState {
    date: string;
    isCertificated: boolean;
    title: string;
}
 
interface FetchEdcucationAction {
   type: EdcucationActionTypes.FETCH_EDUCATION,
   payload: Array<IEducationState>,
}

export type EducationAction = FetchEdcucationAction ;
