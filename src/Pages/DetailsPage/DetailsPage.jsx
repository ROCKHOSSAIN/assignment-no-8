import { useLoaderData, useParams } from 'react-router-dom';
import Detail from '../Detail/Detail';

const DetailsPage = () => {
    const { id } = useParams();
    const details = useLoaderData();

    const showDetail = details.find(detail => detail.id == id);
    console.log(showDetail);
    return (
        <div>


            <Detail detail={showDetail}></Detail>


        </div>
    );
};

export default DetailsPage;