import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    document.title = `${props.category} - NewsMonkey`


    const updateNews = async () => {
        props.setProgress(0)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=6499daa29d244969a58e466e87aa92c5&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30)
        let parsedData = await data.json();
        props.setProgress(70)
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100)
    }

    useEffect(() => {
        updateNews();
    }, [])

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=6499daa29d244969a58e466e87aa92c5&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    };
    return (
        <div>
            <h2 className='text-center' style={{margin:'35px 0px ',marginTop:'90px'}}>NewsMonkey - Top {props.category} Headlines </h2>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className='container'>
                    <div className='row my-2'>
                        {articles.map((element) => {
                            return <div className='col-md-4 my-3' key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 45) : ''} description={element.description ? element.description.slice(0, 85) : ''} newsUrl={element.url} urlToImage={!element.urlToImage ? 'https://www.transcontinentaltimes.com/wp-content/uploads/2023/07/ESA-Aeolus.jpg' : element.urlToImage} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    )
}

News.defaultProps = {
    pageSize: 5,
    category: 'science',
    country: 'in'
}

News.propTypes = {
    pageSize: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
}

export default News
