import React from 'react';
import './EditionConfig.scss';

function EditionConfig() {
  return (
    <div className="EditionConfig">
      <div id="configTable" className="row">
        <div className="col-4 bg-success">
          A
        </div>
        <div className="col-4 bg-primary">
          B
        </div>
        <div className="col-4 bg-success">
          C
        </div>
      </div>        
    </div>
  );
}

export default EditionConfig;
