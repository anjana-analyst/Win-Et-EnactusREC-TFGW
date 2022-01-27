import React, { Component } from 'react';

import './AppFooter.css';

class AppFooter extends Component {
  render() {
    return (
      <div className="App-footer">
          <p class="lead">
                Copyright @ Tech for Good Week 2022
            </p>
            <a href="#" class="position-absolute bottom-0 end-0 p-5">
                <i class="bi bi-arrow-up-circle text-warning h1"></i>
            </a>
      </div>
    );
  }
}

export default AppFooter;
