import React from 'react';
import SearchForm from './SearchForm';

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen" Style="background-image: url(https://img.freepik.com/free-photo/hand-giving-key-real-estate-agent_53876-129015.jpg?w=996&t=st=1689664112~exp=1689664712~hmac=18e9ad4d178286906193d44bd03fd56012b26ec0395b34925d87cf8f2c901fed);">
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="w-full ">
                        <h1 class="mb-5 text-3xl font-bold">Please Rent your home</h1>
                        {/* <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                        {/* <button class="btn btn-primary">Get Started</button> */}
                    <SearchForm></SearchForm>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;