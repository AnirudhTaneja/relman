import React from 'react'

function pickOptions() {
    return (
        <div>
            <div className="todoItem">
                <input type="checkbox" name="WIC"></input> <p>WIC</p>
                <br />
                <input type="checkbox" name="flatbed_9400"></input> <p>9400</p>
                <br />
                <input type="checkbox" name="flatbed_8400"></input> <p>8400</p>
                <br />
                <input type="checkbox" name="Bag_Fees"></input> <p>Bag Fees</p>
                <br />
                <input type="checkbox" name="SCO"></input> <p>SCO</p>
                <br />
                <input type="checkbox" name="Alcohol"></input> <p>Alcohol</p>
                <br />
                <input type="checkbox" name="pFresh"></input> <p>pFresh</p>
                <br />
                <input type="checkbox" name="Starbucks"></input> <p>starbucks</p>
                <br />
            </div>
            <button type="submit" name="Submit" vaule="Get Store IDs">Get Stores</button>
        </div>
    )
}

export default pickOptions
