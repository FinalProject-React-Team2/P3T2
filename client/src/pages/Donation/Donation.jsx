import React, { useState } from 'react';

const DonationPage = () => {
    const [donationAmount, setDonationAmount] = useState('');
    const [donationType, setDonationType] = useState('one-time');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the donation submission logic here
        // For example, send the data to a server or display a thank you message
        console.log(`Donation submitted: ${donationAmount} - ${donationType}`);
        alert(`Thank you for your donation of ${donationAmount} as a ${donationType} contribution!`);
    };

    return (
        <div className="donation-page">
            <h1>Make a Donation</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="amount">Donation Amount:</label>
                    <input
                        type="number"
                        id="amount"
                        value={donationAmount}
                        onChange={(e) => setDonationAmount(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="one-time"
                            checked={donationType === 'one-time'}
                            onChange={(e) => setDonationType(e.target.value)}
                        />
                        One-time
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="monthly"
                            checked={donationType === 'monthly'}
                            onChange={(e) => setDonationType(e.target.value)}
                        />
                        Monthly
                    </label>
                </div>
                <button type="submit">Donate</button>
            </form>
        </div>
    );
};

export default DonationPage;