import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
// import Animation from './Animation';
import { getCategories } from '../Services/ApiCalls';
import './styles.min.css';


const Home = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [didRedirect, setDidRedirect] = useState(false);


  const loadAllCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data);
      }
    });
  };
  useEffect(() => {
    loadAllCategories();
  }, []);

  const handleChange = () => (event) => {
    const { selectedIndex, value } = event.target;
    setSelectedCategory(event.target[selectedIndex].text);
    setSelectedCategoryId(value);
  };

  const errorMessage = () => ((error) && (console.log(error)));

  const checkCategory = () => {
    if (selectedCategoryId !== '') {
      setDidRedirect(true);
    }
  };

  const performRedirect = () => {
    if (didRedirect) {
      return (
        <Redirect to={{
          pathname: `/recipe/${selectedCategoryId}`,
          state: { selectedCategory },
        }}
        />
      );
    }
  };


  return (
    <div style={{ height: '100%' }}>
      {errorMessage()}
      <div
        className="row"
        style={{ height: '100%', width: '100%', margin: '0px' }}
      >
        <div
          className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 d-flex justify-content-center align-items-center align-content-center"
          style={{
            padding: '0px', backgroundColor: '#E63946', height: '100%', width: '100%',
          }}
        >
          <div className="d-flex flex-column" style={{ width: '50%' }}>
            <select className="form-control" onChange={handleChange()}>
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={checkCategory}
              className="btn"
              style={{ marginTop: '10px', backgroundColor: '#457b9d', color: 'white' }}
            >
              Get Recipe

            </button>
            <div
              className="d-flex d-md-none d-lg-none d-xl-none justify-content-center"
              style={{ marginTop: '30%' }}
            >
              {/* <img
                alt=""
                className="img-fluid"
                src="/assets/img/education.svg"
                style={{ width: '200px', height: '200px' }}
              /> */}
            </div>
          </div>
        </div>
        <div
          className="col-md-7 col-lg-7 col-xl-7 text-truncate d-none d-sm-none d-md-block d-lg-block d-xl-block"
          style={{ padding: '0px', backgroundColor: '#F1FAEE' }}
        >
          {/* <Animation /> */}
        </div>
      </div>
      {performRedirect()}
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

export default Home;
