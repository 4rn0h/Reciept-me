import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Receipt() {
    const [receipts, setReceipts] = useState([]);

    useEffect(() => {
        axios.get('/api/receipts/')
            .then((response) => {
                setReceipts(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [])

    return (
        <div>
            <h1>Receipts</h1>
            <ul>
                {receipts.map((receipt) => (
                    <li key={receipt.id}>
                        {receipt.name} - {receipt.date} - ${receipt.amaount}
                    </li>
                ))}
            </ul>
        </div>
    );
}