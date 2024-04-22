import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/music-bg.gif'
import settingImg from '../assets/features1.jpg'
import categoryImg from '../assets/features2.jpg'
import historyImg from '../assets/features3.webp'
import { Card } from 'react-bootstrap'


function Landing(){
    return (
        <>
        <div className="landingsection container">
            <div className="row align-items-center my-5">
                <div className="col-lg-5">
                    <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
                    <p className='mt-3' style={{textAlign:'justify'}}> Media Player App will allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage thier watch history as well. What are you waiting for, let starts exploring our site!!!</p>
                    <Link to={'/home'} className='btn btn-info mt3'>Get Started</Link>
                </div>
                <div className="col"></div>
                <div className="col-lg-6">
                    <img className='ms-5' src={landingImg} alt="landing page" />
                </div>
            </div> 
            {/* features */}
            <div className="Features my-5">
                <h3 className='text-center'>Features</h3>
                <div className="row mt-5">
                    <div className="col-lg-4">
                    <Card className='p-2' style={{ width: '22rem',height:'400px' }}>
                        <Card.Img variant="top" style={{height:'250px'}} className='img-fluid' src={settingImg} />
                        <Card.Body>
                        <Card.Title>Managing Videos</Card.Title>
                        <Card.Text>
                            Users can upload, view and remove the videos
                        </Card.Text>
                        </Card.Body>
                    </Card>

                    </div>
                    <div className="col-lg-4">
                    <Card className='p-2' style={{ width: '22rem',height:'400px' }}>
                        <Card.Img variant="top" style={{height:'250px'}} className='img-fluid' src={categoryImg} />
                        <Card.Body>
                        <Card.Title>Categories Videos</Card.Title>
                        <Card.Text>
                            Users can categories the videos by drag and drop feature
                        </Card.Text>
                        </Card.Body>
                    </Card>

                    </div>
                    <div className="col-lg-4">
                    <Card className='p-2' style={{ width: '20rem',height:'400px' }}>
                        <Card.Img variant="top" style={{height:'250px'}} className='img-fluid' src={historyImg} />
                        <Card.Body>
                        <Card.Title>Managing History</Card.Title>
                        <Card.Text>
                            Users can manage the watch history of all videos
                        </Card.Text>
                        </Card.Body>
                    </Card>

                    </div>
                </div>

            </div>
            {/* footer */}
            <div className="my-5 row border rounded p-5">
                <div className="col-lg-5">
                    <h3 className='text-warning'>Simple, Fast and Powerful</h3>
                    <p style={{textAlign:'justify'}}>
                        <span className='fs-5'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis delectus dignissimos aliquid eveniet iure expedita esse aut incidunt eaque doloribus 
                    </p>
                    <p style={{textAlign:'justify'}}>
                        <span className='fs-5'>Categorise Videos</span>: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis delectus dignissimos aliquid eveniet iure expedita esse aut incidunt eaque doloribus 
                    </p>
                    <p style={{textAlign:'justify'}}>
                        <span className='fs-5'>Managing History</span>: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis delectus dignissimos aliquid eveniet iure expedita esse aut incidunt eaque doloribus 
                    </p>
                </div>
                <div className="col"></div>
                <div className="col-lg-6">
                <iframe width="100%" height="387" src="https://www.youtube.com/embed/L0yEMl8PXnw" title="AAVESHAM Official Teaser | Jithu Madhavan | Fahadh Faasil | Sushin Shyam" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

        </div>
        </>
    )
}

export default Landing