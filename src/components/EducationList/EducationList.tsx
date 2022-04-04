import { useTypedSelector } from "../../hooks/useTypedSelector";


const EducationList = () => {
    const data = useTypedSelector(state => state.education)
     return (
            <>
                {data.map(({isCertificated, title, date}) => {
                return (
                    <tr>
                        <td>
                            {date}
                            <div className={isCertificated ? "certificate-true" : "certificate-false"}>
                                {isCertificated ? "[certificated]" : "[completed]"}
                            </div>
                        </td>
                        <td>{title}</td>
                    </tr>
                );
            })}
            </>
    );
}

export default EducationList
