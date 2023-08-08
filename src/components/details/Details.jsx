import React from 'react';
import Nav from '../fixedContent/Nav';
import Foot from '../fixedContent/Foot';
import { useLoaderData } from 'react-router-dom';
import RecipieCard from '../recipieCard/RecipieCard';

const Details = () => {
  const chefDeatils = useLoaderData()
  console.log(chefDeatils);

  return (
    <div className=''>
      <div className="container-fluid banner bg-dark bg-gradient">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 p-5">
            <img src={chefDeatils.img} alt="Chef Image" className="img-fluid shadow-lg bg-body" style={{ width: "350px", height: "350px"}} />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 bg-dark">
            <h1 className="display-4 text-light">{chefDeatils.name}</h1>
            <h3 className="text-light mb-4">Chef with {chefDeatils.experience} of experience</h3>
            <p className="text-light">{chefDeatils.short_bio}</p>
            <p className="text-light">Likes : {chefDeatils.likes}</p>
            <p className="text-light">Toal Recipies: {chefDeatils.recipes}</p>
          </div>
        </div>
      </div>

      <div className="row">
      {
            chefDeatils.recipes_list.map(rl=><RecipieCard
            key={rl.name}
            rl={rl}>
            
            
            </RecipieCard>)
            }
      </div>
      {/* {chefDeatils.name}
            {chefDeatils.image}
            {chefDeatils.experience}
            {chefDeatils.recipies}
            {chefDeatils.likes}
            {chefDeatils.short_bio}
            {
            chefDeatils.recipes_list.map(rl=><RecipieCard
            key={rl.name}>
            
            
            </RecipieCard>)
            } */}




    </div>
  );
};

export default Details;