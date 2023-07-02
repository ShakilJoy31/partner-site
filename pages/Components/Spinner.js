const Spinner = ({size}) => {
    console.log(size);
    return (
        <div className='flex justify-center my-4'>
            <div className={`${size=='little' ? ComponentStyle.littleSpinner : ''} ${size=='medium' ? ComponentStyle.mediumSpinner : ''} ${size == 'big' ? ComponentStyle.bigSpinner : ''}`}></div>
        </div>
    );
};

export default Spinner;