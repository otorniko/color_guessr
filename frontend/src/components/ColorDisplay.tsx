import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_RANDOM_COLOR } from '../queries';


const RandomColorDisplay: React.FC = () => {
    const { loading, error, data, refetch } = useQuery(GET_RANDOM_COLOR);

    if (loading) return <p>Loading a random color...</p>;
    if (error) return <p>Error fetching color: {error.message}</p>;

    const color = data?.random_color;

    if (!color) return <p>No color data found.</p>;

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>Random Color:</h2>
            <p>
                <strong>Name:</strong> {color.name}
            </p>
            <p>
                <strong>Hex:</strong> <span style={{ color: color.hex }}>{color.hex}</span>
            </p>
            <div
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: color.hex,
                    border: '1px solid black',
                    margin: '10px 0',
                }}
            />
            <p>
                <strong>Decimal RGB:</strong> R: {color.decimal.Red}, G: {color.decimal.Green}, B: {color.decimal.Blue}
            </p>
            <button
                onClick={() => refetch()}
                style={{ marginTop: '10px', padding: '8px 12px' }}
            >
                Get Another Random Color
            </button>
        </div>
    );
};

export default RandomColorDisplay;