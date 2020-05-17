import React from 'react';
import './EditionConfig.scss';

function EditionConfig() {
  return (
    <div className="EditionConfig ">
      <div id="configTable" >
        <div className="bandeProcoCG row border-bottom">
          <div className="col-6 bg-dark ">
            <div className="row  bg-light">
              <div className="col-9 bg-light text-center margin-auto-center">
                <a href="#" className="align-middle">Intel i7 8700k</a>
              </div>
              <div className="col-3 bg-light">
                <img src="https://png.pngtree.com/png-vector/20190331/ourlarge/pngtree-processor-icon-flat-cartoon-style-vector-illustration-png-image_876822.jpg" 
                  alt="logo processeur" className="w-100" />
              </div>
            </div>
          </div>
          <div className="col-6 bg-dark border-left">
            <div className="row bandeProcoCG bg-light">
              <div className="col-3 bg-light">
                <img src="https://image.flaticon.com/icons/png/512/100/100310.png" 
                  alt="logo carte graphique" className="w-100" />
              </div>
              <div className="col-9 bg-light text-center margin-auto-center">
                <a href="#" className="align-middle">RXT 2080 Super</a>
              </div>
            </div>
          </div>
        </div>   
      </div>    
      <div id="liste des autres caractéristiques">
        <div> A -  </div>
        <div> A -  </div>
        <div> A -  </div>
        <div> A -  </div>
      </div> 
    </div>
  );
}

export default EditionConfig;
