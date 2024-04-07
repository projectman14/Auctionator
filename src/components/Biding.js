import React from 'react'
import { ProjectCard } from './ProjectCard'
import projImg1 from "../assets/img/image1.jpg";
import { Navbar } from 'react-bootstrap';
const Biding = ({title , imgUrl}) => {
    return (
        <div className='Biding-outer'>
            <div className='Biding'>
                <div className='Biding-1'>
                    <div className='Biding-container-outer'>
                        <div className='Biding-container-inner'>
                            <img src={imgUrl} className='Assest-image' />
                        </div>
                    </div>
                    <p className='infos1'>Asset Owner - Lakshya</p>
                    <p className='infos2'>Asset Owner Address - mantra1u.....vg0</p>
                </div>
                <div className='Biding-2'>
                    <div className='headings'>
                        <p className='Asset-Name'>Asset Name</p>
                        <div className='tags'>
                            <p className='tag1'>Current Bid</p>
                            <p className='tag2'>Base Bid</p>
                        </div>
                    </div>
                    <div className='bid-values'>
                        <p className='Asset-heading'>{title}</p>
                        <p className='current-bid'>1.248 OM</p>
                        <p className='base-price'>0.5 OM</p>
                    </div>
                    <p className='Time'>Time Left - 15hr</p>
                    <p className='Description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    <div class="input-group mb-3 input-class">
                        <span class="input-group-text">$</span>
                        <input type="number" class="form-control input-values" aria-label="Amount (to the nearest dollar)" placeholder='Bid Amount' />
                    </div>
                    <button type="button" class="btn btn-warning">Submit Bid</button>
                </div>
            </div>
        </div>
    )
}

export default Biding
