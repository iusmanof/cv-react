import { useTypedSelector } from '../../hooks/useTypedSelector'

const CertificateList = () => {
   const data = useTypedSelector(state => state.certificate)
  return (
      <>
        {data.map(({imageUrl, certificatePDF, title}) => {
            return (
                <li>
                    <img src={imageUrl} alt="nodejs-certificate" />
                    <span>{title}</span>
                    <h4>
                        <a href={certificatePDF} download>
                            Download {title} (PDF)
                        </a>
                    </h4>
                </li>
            );
        })}
    </>
  )
}

export default CertificateList
