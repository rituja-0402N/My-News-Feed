import React,{Component} from 'react';
import SingleSide from './SingleSide';

class SideNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidenews: [],
        };
    }

    componentDidMount() {
        const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=26fe66d50a0844eeb4d3388ae7d60eca`;

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    sidenews: data.articles
                })
            })
            .catch((error) => console.log(error));
    }

    renderItems() {
        return this.state.sidenews.map((item) => (
            <SingleSide key={item.url} item={item}/>
        ));
    }
    render() {
        return (
            <div className='row'>
                {this.renderItems()}
            </div>
        )
    }
}


export default SideNews;