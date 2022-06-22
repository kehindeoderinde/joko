import React from 'react';
import FeaturedImage from 'assets/images/FeaturedImage.svg';
import './Featured.scss';
import Button from 'components/Button';

const Featured : React.FC = ()=> {
    return (
        <div className="featured">
            <div className="featured_header">
                <p className="featured_title">
                    <span className="featured_title">featured</span>
                    <span className="featured_title--alt">featured</span>
                    <span className="featured_title--alt">featured</span>
                    <span className="featured_title--alt">artist</span>
                    <span className="featured_title--alt">artist</span>
                    <span className="featured_title">artist</span>
                    <span className="featured_title--alt">arti</span>
                </p>
            </div>
            <div className="featured_content">
                <img src={FeaturedImage} alt="FeaturedImage" className="featured_content--img" />
                <div className="featured_content--info">
                    <p className="featured_content--info--title">Caliph</p>
                    <p className="featured_content--info--subtitle">When chasing a dream from Nigeria, one needs a surplus of that secret sauce called belief. Young Nigerians in the music space have always forced the issue of their recognition as new viral sensation.</p>
                    <Button placeholder="watch episode"/>
                </div>
            </div>
        </div>
    )
}

export default Featured