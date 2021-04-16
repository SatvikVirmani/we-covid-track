import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVirus, faViruses, faVirusSlash } from '@fortawesome/free-solid-svg-icons'
import Loader from './Loader'

class Global extends Component {
    state = { 
        fetching: true,
        data: [],
        fetchError: false,
        todayBoxToggleGB: 'is-hidden'
     }

     componentDidMount(){
            var axios = require('axios');

            var config = {
              method: 'get',
              url: 'https://corona.lmao.ninja/v2/all?',
              headers: { }
            };
            
            axios(config)
            .then((response) => {
                this.setState({
                fetching: false,
                data: response.data
            })
            })
            .catch((error) => {
              this.setState({
                fetchError: true
              })
            });
     }
     errorRemoval = () => {
         this.setState({
             fetchError: false
         })
     }
    toggleTodayBoxGB = () => {
        if (this.state.todayBoxToggleGB === 'is-hidden') {
            this.setState({
                todayBoxToggleGB: '',
            })
        } else {
            this.setState({
                todayBoxToggleGB: 'is-hidden',
            })
        }
    }
    render() { 
        return ( 
            <div className="column mx-4 my-5 box">
                <div className="columns m-4">
                <div className="column is-6 is-flex is-align-items-center">
                        <p className="title is-4">
                            Global Cases
                        </p>
                    </div>
                    <div className="column is-6">
                    </div>
                </div>
                {this.state.fetchError ? <article className="message">
                                    <div className="message-header">
                                        <p>Error</p>
                                        <button className="delete" aria-label="delete" onClick={this.errorRemoval}></button>
                                    </div>
                                    <div className="message-body">
                                        Sorry unable to fetch information
                                    </div>
                                    </article>: ''}
                <div className="columns m-4">
                    <div className="column">
                        <div className="columns is-mobile">
                            <div className="column is-3 is-flex is-align-items-center is-justify-content-center">
                                <FontAwesomeIcon icon={faViruses} size='2x' />
                            </div>
                            <div className="column is-9">
                                <div className="container">
                                    <h1 className="subtitle is-5 has-text-left">Total Cases</h1>
                                </div>
                                <div className="container">
                                    {this.state.fetching ? <Loader /> : <h1 className="title is-4 has-text-left">{parseInt(this.state.data.cases).toLocaleString()}</h1>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="columns is-mobile">
                            <div className="column is-3 is-flex is-align-items-center is-justify-content-center">
                                <FontAwesomeIcon icon={faVirusSlash} size='2x' />
                            </div>
                            <div className="column is-9">
                                <div className="container">
                                    <h1 className="subtitle is-5 has-text-left">Total Recovered</h1>
                                </div>
                                <div className="container">
                                    {this.state.fetching ? <Loader /> : <h1 className="title is-4 has-text-left">{parseInt(this.state.data.recovered).toLocaleString()}</h1>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="columns m-4">
                    <div className="column">
                        <div className="columns is-mobile">
                            <div className="column is-3 is-flex is-align-items-center is-justify-content-center">
                                <FontAwesomeIcon icon={faViruses} size='2x' />
                            </div>
                            <div className="column is-9">
                                <div className="container">
                                    <h1 className="subtitle is-5 has-text-left">Total Critical</h1>
                                </div>
                                <div className="container">
                                    {this.state.fetching ? <Loader /> : <h1 className="title is-4 has-text-left">{parseInt(this.state.data.critical).toLocaleString()}</h1>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="columns is-mobile">
                            <div className="column is-3 is-flex is-align-items-center is-justify-content-center">
                                <FontAwesomeIcon icon={faVirus} size='2x' />
                            </div>
                            <div className="column is-9">
                                <div className="container">
                                    <h1 className="subtitle is-5 has-text-left">Total Deaths</h1>
                                </div>
                                <div className="container">
                                    {this.state.fetching ? <Loader /> : <h1 className="title is-4 has-text-left">{parseInt(this.state.data.deaths).toLocaleString()}</h1>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="button is-fullwidth" onClick={this.toggleTodayBoxGB}>View Today Stats</button>
                <div className={this.state.todayBoxToggleGB}>
                    <div className="columns m-4">
                        <div className="column">
                            <div className="columns is-mobile">
                                <div className="column is-3 is-flex is-align-items-center is-justify-content-center">
                                    <FontAwesomeIcon icon={faViruses} size='2x' />
                                </div>
                                <div className="column is-9">
                                    <div className="container">
                                        <h1 className="subtitle is-5 has-text-left">Today Cases</h1>
                                    </div>
                                    <div className="container">
                                        {this.state.fetching ? <Loader /> : <h1 className="title is-4 has-text-left">{parseInt(this.state.data.todayCases).toLocaleString()}</h1>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="columns is-mobile">
                                <div className="column is-3 is-flex is-align-items-center is-justify-content-center">
                                    <FontAwesomeIcon icon={faVirusSlash} size='2x' />
                                </div>
                                <div className="column is-9">
                                    <div className="container">
                                        <h1 className="subtitle is-5 has-text-left">Today Recovered</h1>
                                    </div>
                                    <div className="container">
                                        {this.state.fetching ? <Loader /> : <h1 className="title is-4 has-text-left">{parseInt(this.state.data.todayRecovered).toLocaleString()}</h1>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns m-4 is-centered">
                        <div className="column is-half">
                            <div className="columns is-mobile">
                                <div className="column is-3 is-flex is-align-items-center is-justify-content-center">
                                    <FontAwesomeIcon icon={faVirus} size='2x' />
                                </div>
                                <div className="column is-9">
                                    <div className="container">
                                        <h1 className="subtitle is-5 has-text-left">Today Deaths</h1>
                                    </div>
                                    <div className="container">
                                        {this.state.fetching ? <Loader /> : <h1 className="title is-4 has-text-left">{parseInt(this.state.data.todayDeaths).toLocaleString()}</h1>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
         );
    }
}
 
export default Global;