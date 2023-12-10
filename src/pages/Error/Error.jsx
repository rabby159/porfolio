import { Link } from 'react-router-dom';
import errorPage from '../../assets/images/errorPage.jpg'

const Error = () => {
    return (
        <>
        <div className='flex justify-center'>
            <img className='w-[70vh]' src={errorPage} alt="" />
        </div>
        <div className='flex justify-center'>
            <Link to='/'>
            <button className='btn btn-outline'>Go Home</button>
            </Link>
        </div>
        </>
    );
};

export default Error;