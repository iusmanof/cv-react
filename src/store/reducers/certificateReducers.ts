import { CertificateAction, CertificateActionTypes } from './../../types/certificateType';

import ccna_certificate from "../../images/certificate/ccna/ccna.jpg";
import ccna_certificate_pdf from "../../images/certificate/ccna/ccna.pdf";
import itessential_certificate from "../../images/certificate/it-essential/it-essential.jpg";
import itessential_certificate_pdf from "../../images/certificate/it-essential/it-essential.pdf";
import js_certificate from "../../images/certificate/js-fronend2021q1/js-fronend2021q1-1.jpg";
import js_certificate_pdf from "../../images/certificate/js-fronend2021q1/js-fronend2021q1.pdf";
import nodejs_certificate from "../../images/certificate/nodejs2021q4/nodejs2021q4-1.jpg";
import nodejs_certificate_pdf from "../../images/certificate/nodejs2021q4/nodejs2021q4.pdf";
import { ICertificateState } from "../../types/certificateType";

const initialState: Array<ICertificateState> = [
     {
        imageUrl: ccna_certificate,
        certificatePDF: ccna_certificate_pdf,
        title: "CCNA"
    },
    {
        imageUrl: itessential_certificate,
        certificatePDF: js_certificate_pdf,
        title: "IT Essential"
    },
    {
        imageUrl: js_certificate,
        certificatePDF: itessential_certificate_pdf,
        title: "JS/Front-end"
    },
    {
        imageUrl: nodejs_certificate,
        certificatePDF: nodejs_certificate_pdf,
        title: "Nodejs"
    }
]

export const certificateReducer = (state = initialState, action: CertificateAction): Array<ICertificateState> => {
    switch(action.type) {
        case CertificateActionTypes.FETCH_CERTIFICATE:
            return action.payload
        default: 
            return state;
    }

}