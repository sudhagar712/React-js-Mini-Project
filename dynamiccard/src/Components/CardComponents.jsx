import React from 'react'

const CardComponents = ({ name, occupation,  image, age , description, experience, onButtonClick}) => {
    return (
        <>
            <div className="card-component col-lg-4 col-md-6 mt-4 mb-4">
                <div onClick={()=> onButtonClick} className="card " style={{ width: '23rem', height: '40rem' }}>
                    <img src={image} className="card-img-top" style={{ height: '300px' }} />
                    <div className="card-body">
                        <div className="card-title">
                            <h2>Name: {name}</h2>
                        </div>
                        <div className="card-title">
                            <h4>Occupation:  {occupation}</h4>
                        </div>
                        <p>Age:{age}</p>
                        <p>Description:{description}</p>
                        <p className='fw-bold fs-3'>Experience: {experience}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardComponents
