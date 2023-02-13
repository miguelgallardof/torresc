import React, { useState } from "react";
import s from '../styles/gallery.module.css';
import Menu from "../js/categories";

export const Gallery = () => {
  const [items, setItems] = useState(Menu);
  const [active, setActive] = useState(false);
  const filterItem = (categItem) => {
    const updateItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updateItems);
    setActive(true);
  };

  return (
    <div className="container" id={s.container}>
      <h2 className="display-5 fw-bold lh-1 mb-3" id={s.title}>Look at our projects
      </h2>
      <div className={s.container}>
        <ul className="nav nav-pills justify-content-center">
          <li className="nav-item">
              <a
                className={active ? "nav-link" : "nav-link"}
                id= {s.link}
                href="javascrip:0;"
                onClick={() => setItems(Menu)}
              >
                All
              </a>
          </li>
          <li>
            <a
              className={active ? "nav-link" : "nav-link"}
              id= {s.link}
              href="javascrip:0;"
              onClick={() => filterItem("drywall")}
            >
              Drywall
            </a>
        </li>
        <li className="nav-item">
          <a
            className={active ? "nav-link" : "nav-link"}
            id= {s.link}
            href="javascrip:0;"
            onClick={() => filterItem("painting")}
          >
            Painting
          </a>
        </li>
        <li className="nav-item">
          <a
            className={active ? "nav-link" : "nav-link"}
            id= {s.link}
            href="javascrip:0;"
            onClick={() => filterItem("tiles")}
          >
            Tiles
          </a>
        </li>
        <li className="nav-item">
          <a
            className={active ? "nav-link" : "nav-link"}
            id= {s.link}
            href="javascrip:0;"
            onClick={() => filterItem("carpentry")}
          >
            Carpentry
          </a>
        </li>
        <li className="nav-item">
          <a
            className={active ? "nav-link" : "nav-link"}
            id= {s.link}
            href="javascrip:0;"
            onClick={() => filterItem("renovations")}
          >
            Renovations
          </a>
        </li>
      </ul>
    </div>

    <div className="container">
      <div className="container-fluid mt-5">
        <div className="row">
          {items.map((elem) => {
            const { id, name, image } = elem;
              return (
                <div className={`col-lg-3 col-md-6 col-sm-3${s.conteiner_card}`}
                id={id}>
                  <div className="card mb-4">
                    <img className="img-fluid" key={id} src={image} alt={name} id= {s.card}/>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};