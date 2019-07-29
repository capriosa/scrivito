import * as React from 'react';
import * as Scrivito from 'scrivito';
import axios from 'axios';
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder';

class NewsApiComponent extends React.Component {

  constructor(props) {
    super(props);

    this.widget = this.props.widget;
    this.state = {
      article: []
    }
  }

  componentDidMount() {
    const category = this.widget.get('category');
    const entries = this.widget.get('entries');
    axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&pageSize=${entries}&country=de&apiKey=e80db3244a76493d9c466c0d2be0e437`)
      .then(res => {
        const response = res.data;
        const tmp = Object.values(response);
        const article = tmp[2];
        this.setState({ article });
      })
  }

  componentWillUnmount() {
    this.setState = '';
  }

  render() {
    if (!this.state.article.length) {
      return (
        <InPlaceEditingPlaceholder center={true}>
          Add news categories in the widget properties.
        </InPlaceEditingPlaceholder>
      );
    }

    return (

      <div className="article">

        {this.state.article.map((articles, index) =>
          articles.url.startsWith('https') ?
            <div className="media" key={index}>
              <a target="_blank" className="d-inline" href={`${articles.url}`}>
                <img className="img-responsive rectangle mr-3" src={`${articles.urlToImage}`} />
              </a>
              <div className="media-body" key={index}>
                <a target="_blank" href={`${articles.url}`}>
                  <div>{articles.source.name} </div>
                  <h1 className="h5 m-0 p-0"><b>{articles.title}</b></h1>

                  <p className="m-0 p-0 h5">{articles.description}</p>
                </a>
              </div>

            </div>

            : null

        )}


      </div>

    );
  }

}

Scrivito.provideComponent('NewsApiWidget', NewsApiComponent);


