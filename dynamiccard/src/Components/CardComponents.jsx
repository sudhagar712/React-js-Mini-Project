import React from 'react'



const CardComponents = ({ name, occupation,  image, age , description, experience, onButtonClick ,  index, activeIndex}) => {
    return (
        <>
            <div className="card-component col-lg-4 col-md-6 mt-4 mb-4">
                <div onClick={onButtonClick}  className={`card overflow-hidden ${activeIndex === index ? "active" : ""}`}  style={{ width: '23rem', height: '38rem', cursor:'pointer' }}>
                    <img src={image} className="card-img-top" style={{ height: '300px' }} />
                    <div className="card-body">
                        <div className="card-title">
                            <h4>{name}</h4>
                        </div>
                        <div className="card-title">
                            <h6>{occupation}</h6>
                        </div>
                        <p>Age:{age}</p>
                        <p>Description: {description}</p>
                        <p className='fw-bold '>{experience}</p>

                        <div className=" text-center">
                            <button className='btn btn-primary'>LearnMore</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardComponents
