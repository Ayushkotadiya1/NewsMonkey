import React from 'react'

const NewsItem = (props) =>{
        let { title, description, urlToImage, newsUrl, author, date, source } = props
        return (
            <div>
                <div className="card" style={{ width: "25rem" }}>
                    <div style={{display:'flex', justifyContent:'flex-end',position:'absolute',right:'0'}}>
                        <span className="badge rounded-pill bg-danger" >
                            {source}</span>
                    </div>
                    <img src={urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className='card-text'><small className='text-muted'>By {!author ? 'Unkonwon' : author} on {new Date(date).toTimeString()}</small></p>
                        <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }

export default NewsItem
