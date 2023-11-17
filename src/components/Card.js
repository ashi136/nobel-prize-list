import React from 'react';

const Card = ({ prize }) => {
    const {category, laureates } = prize || {}

    return (
        <div className="card m-5 text-center">
            <div className="card-header text-warning">
                <strong>{category.toUpperCase()}</strong>
            </div>
            <div className="card-body">
                {Array.isArray(laureates) && laureates.length > 0 ? (
                    laureates.map((laureate, index) => (
                        <div key={index}>
                            <p className="card-text pb-0" style={{ fontSize: '16px' }}>
                                {laureate.firstname} {laureate.surname}
                            </p>

                        </div>
                    ))
                ) : (
                    <p>No laureates available</p>
                )}
            </div>
        </div>
    );
};

export default Card;
