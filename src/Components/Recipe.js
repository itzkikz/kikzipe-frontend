import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getRecipe } from '../Services/ApiCalls';
import { ReactComponent as Time } from '../assets/img/time.svg';
import { ReactComponent as Person } from '../assets/img/serves.svg';
import { ReactComponent as Kitchen } from '../assets/img/kitchen.svg';
import './styles.min.css';


const Recipe = ({ location, match }) => {
  const [info, setInfo] = useState({
    serves: '', preparation_time: '', cooking_time: '', utensils: [],
  });
  const [ingredients, setIngredients] = useState([]);
  const [methods, setMethods] = useState([]);

  const { selectedCategory } = location.state;
  const { categoryId } = match.params;
  const [error, setError] = useState(false);


  useEffect(() => {
    const loadRecipe = () => {
      getRecipe(categoryId).then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          const {
            serves, preparation_time, cooking_time, utensils, ingredients, methods,
          } = data;
          setInfo({
            serves, preparation_time, cooking_time, utensils,
          });
          setIngredients(ingredients);
          setMethods(methods);
        }
      }).catch(setError(true));
    };

    loadRecipe();
  }, [categoryId]);

  return (
    <div style={{ height: '100%', width: '100%', margin: '0px' }}>
      <header className="d-block d-sm-block d-md-none d-lg-none d-xl-none bd-navbar">
        <div style={{ backgroundColor: '#F1FAEE' }}>
          <h1 className="text-center" style={{ margin: '0px' }}>Logo</h1>
        </div>
      </header>
      <div style={{ height: '100%' }}>
        <div className="row" style={{ height: '100%', width: '100%', margin: '0px' }}>
          <div
            className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 d-block d-sm-block d-md-flex d-lg-flex d-xl-flex justify-content-center align-items-center align-content-center"
            style={{
              padding: '0px', backgroundColor: '#E63946',
            }}
          >
            <div className="d-none d-sm-none d-md-flex d-lg-flex d-xl-flex flex-column" style={{ width: '50%' }}>
              <select className="form-control" style={{ fontFamily: 'Roboto Condensed , sans-serif' }} disabled>
                <option value="12">{selectedCategory}</option>
              </select>
              <Link
                to="/"
                className="btn kikzipe-font"
                style={{ marginTop: '10px', backgroundColor: '#457b9d', color: 'white' }}
              >
                Reset
              </Link>
            </div>
            <div className="d-block d-sm-block d-md-none d-lg-none d-xl-none">
              <img className="img-thumbnail img-fluid" src="/assets/img/image--999.jpg" alt="" width="100%" />
              <h1 className="text-center">Dish Name</h1>
              <div>
                <ul className="nav nav-tabs" style={{ backgroundColor: '#F1FAEE' }}>
                  <li className="nav-item"><a className="nav-link active" role="tab" data-toggle="tab" href="#tab-1">Info</a></li>
                  <li className="nav-item"><a className="nav-link" role="tab" data-toggle="tab" href="#tab-2">Ingredients</a></li>
                  <li className="nav-item"><a className="nav-link" role="tab" data-toggle="tab" href="#tab-3">Methods</a></li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" role="tabpanel" id="tab-1">
                    <p>Content for tab 1.</p>
                  </div>
                  <div className="tab-pane" role="tabpanel" id="tab-2">
                    <p>Content for tab 2.</p>
                  </div>
                  <div className="tab-pane" role="tabpanel" id="tab-3">
                    <p>Content for tab 3.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-lg-7 col-xl-7 d-none d-sm-none d-md-block d-lg-block d-xl-block" style={{ padding: '0px', backgroundColor: '#F1FAEE', width: '100%' }}>
            <div className="row" style={{ height: '100%', margin: '0' }}>
              <div className="col-3" style={{ padding: '0px' }}>
                <div className="row" style={{ margin: '0px' }}>
                  <div className="col" style={{ padding: '0px' }}>
                    <div><img className="img-thumbnail" src={require('../assets/img/image--999.jpg')} alt="" width="100%" /></div>
                  </div>
                </div>
                <div className="row" style={{ margin: '0px', marginTop: '5px' }}>
                  <div className="col d-flex justify-content-between align-items-center" style={{ width: '100%' }}>
                    <div style={{ width: '85%' }}>
                      <h5>Serves</h5>
                      <h6>{info.serves}</h6>
                    </div>
                    <div className="d-flex flex-column justify-content-end align-items-end align-content-end" style={{ width: '15%' }}><Person className="img-fluid" /></div>
                  </div>
                </div>
                <div className="row" style={{ margin: '0px', marginTop: '5px' }}>
                  <div className="col d-flex justify-content-between align-items-center kikzipe-font" style={{ width: '100%' }}>
                    <div style={{ width: '85%' }}>
                      <h5>Prepration Time</h5>
                      <h6>{info.preparation_time}</h6>
                    </div>
                    <div className="d-flex flex-column justify-content-end align-items-end align-content-end" style={{ width: '15%' }}><Time className="img-fluid" /></div>
                  </div>
                </div>
                <div className="row" style={{ margin: '0px', marginTop: '5px' }}>
                  <div className="col d-flex justify-content-between align-items-center" style={{ width: '100%' }}>
                    <div style={{ width: '85%' }}>
                      <h5>Cooking Time</h5>
                      <h6>{info.cooking_time}</h6>
                    </div>
                    <div className="d-flex flex-column justify-content-end align-items-end align-content-end" style={{ width: '15%' }}><Time className="img-fluid" /></div>
                  </div>
                </div>
                <div className="row" style={{ margin: '0px', marginTop: '5px' }}>
                  <div className="col d-flex justify-content-between align-items-center" style={{ width: '100%' }}>
                    <div style={{ width: '85%' }}>
                      <h5>Utensils</h5>
                      {info.utensils.map((utensil, index) => (
                        <h6 key={index}>{utensil}</h6>
                      ))}
                    </div>
                    <div className="d-flex flex-column justify-content-end align-items-end align-content-end" style={{ width: '15%' }}><Kitchen className="img-fluid" /></div>
                  </div>
                </div>
              </div>
              <div className="col-9 kikzipe-font" style={{ height: '100%' }}>
                <h2>Dish Name</h2>
                <div className="row" style={{ height: '40%' }}>
                  <div className="col">
                    <h3>Ingredients</h3>
                    <ul className="list-group">
                      {ingredients.map((ingredient, index) => (<li className="list-group-item" key={index}><span>{ingredient}</span></li>))}
                    </ul>
                  </div>
                </div>
                <div className="row" style={{ height: '50%' }}>
                  <div className="col">
                    <h3>Methods</h3>
                    <ul className="list-group">
                      {methods.map((method, index) => (
                        <li className="list-group-item" key={index}><span>{method}</span></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div />
          </div>
        </div>
      </div>
      <div className="d-sm-block d-md-none d-lg-none d-xl-none bottom-navbar" style={{ width: '100%' }}>
        <Link
          className="btn"
          to="/"
          style={{
            width: '100%', backgroundColor: '#F1FAEE', color: 'rgb(0,0,0)', height: '60px',
          }}
        >
          Reset
        </Link>
      </div>
      <footer className="footer bg-dark">
        <div className="container">
          <span className="text-white">
            Resources Used
            <Link to="/resources"> Click Here</Link>
          </span>
        </div>
      </footer>
    </div>
  );
};
export default Recipe;
