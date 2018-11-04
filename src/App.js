import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import logo from './magexo_logo.svg';
import './App.css';
import {
    Grid,
    Row,
    Glyphicon,
    Button
} from 'react-bootstrap'

class App extends Component {
  constructor(props) {
      super(props)
        this.state = {
          resources: [
              {
                  icon: 'comment',
                  url: 'https://magexo.slack.com',
                  description: 'Chat',
                  color: '#299192'
              },{
                  icon: 'ok',
                  url: 'https://magexo.atlassian.net',
                  description: 'Issues',
                  color: '#46606B'
              },{
                  icon: 'book',
                  url: 'https://magexo.atlassian.net',
                  description: 'Knowledge',
                  color: '#24B875'
              },{
                  icon: 'hdd',
                  url: 'https://git.magexo.cz',
                  description: 'Repositories',
                  color: '#B6AA55'
              },{
                  icon: 'cloud',
                  url: 'https://magexo.cloud',
                  description: 'Cloud',
                  color: '#0E3865'
              },
          ]
        }
  }

  resourceOnClick = url => {
      window.location = url
  }

  renderResources() {
      return this.state.resources.map((resource, index) => (
          <Button
              key={index}
              onClick={() => this.resourceOnClick(resource.url)}
              style={{backgroundColor: resource.color}}
          >
                  <Glyphicon glyph={resource.icon} />
                  <div className="description">{resource.description}</div>
          </Button>
      ))
  }

  render() {
    return (
        <Grid fluid={true}>
            <Row md={12}>
                <header className="header">
                    <img src={logo} width="120" className="logo"/>
                </header>
            </Row>
            <Grid>
                <Row md={5}>
                     <section>
                         <h1>Gateway</h1>
                             <div className="resources">
                                {this.renderResources()}
                             </div>
                     </section>
                </Row>
            </Grid>
        </Grid>
    );
  }
}

// TODO add latest commits, branches etc..
// TODO add latest confluence updates?
// TODO add task progress

export default App;
