import React from 'react'

function Rating({ data }) {
    return (
        <div>
            {data.map(item =>
                <>
                    <h3>{item.name}</h3>
                    <div>

                        <h5>{item.date}</h5>
                        <h5>{item.review}</h5>
                        <p>{item.comments}</p>


                    </div>
                </>

            )}
        </div>
    )
}

export default Rating