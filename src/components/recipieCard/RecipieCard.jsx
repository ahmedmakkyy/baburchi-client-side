import React from 'react';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';

const RecipieCard = ({ rl }) => {
  const [click, setClick] = useState(false)


  const notify = () => {
    toast.success('Added Successfully!', {
      style: {
        padding: '16px',
        color: 'white',
        background: 'black'
      },
      iconTheme: {
        primary: 'green',
        secondary: '#FFFAEE',
      },
    });
    setClick(true)
  }

  console.log(rl);
  return (



    <div className="col-md-6">
      <div className="card shadow-lg border-0 my-3">
        <img src={rl.imgr} className="card-img-top rounded-top" alt="Recipe Image" />
        <div className="card-body">
          <h5 className="card-title text-uppercase mb-4">{rl.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Ingredients:</h6>
          {
            rl.ingredients.map(item => `${item}, `)
          }


          <h6 className="card-subtitle mt-4 mb-2 text-muted">Cooking Method:</h6>
          <p className="card-text">{rl.cooking_method} </p>
          <p className="card-text">Rating: {rl.rating}/5</p>

          <span className="btn btn-primary" style={{
            backgroundColor: click ? 'black' : '',
            color: click ? 'white' : '',
            border: click ? 'none' : '',
          }} onClick={notify}>Mark as favourite</span>
          <Toaster
            position="bottom-center"
            reverseOrder={true}
          />
        </div>
      </div>
    </div>



  );
};

export default RecipieCard;