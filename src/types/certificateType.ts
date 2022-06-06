export enum CertificateActionTypes {
    FETCH_CERTIFICATE = "FETCH_CERTIFICATE"
}

export interface ICertificateState {
    imageUrl: string;
    certificatePDF: string;
    title: string;
}

interface FetchCertificateAction {
    type: CertificateActionTypes.FETCH_CERTIFICATE;
    payload: Array<ICertificateState>;
}

export type CertificateAction = FetchCertificateAction;
