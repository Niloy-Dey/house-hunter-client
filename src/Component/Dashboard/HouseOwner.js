import React, { useState } from 'react';

const HouseOwner = () => {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [roomSize, setRoomSize] = useState('');
    const [picture, setPicture] = useState('');
    const [availabilityDate, setAvailabilityDate] = useState('');
    const [rentPerMonth, setRentPerMonth] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [description, setDescription] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');



    const handlePhoneNumberChange = (event) => {
        const value = event.target.value;
        setPhoneNumber(value);

        // Validate Bangladeshi phone number
        const phoneNumberRegex = /^(\+?88)?01[3-9]\d{8}$/;
        if (!phoneNumberRegex.test(value)) {
            setPhoneNumberError('Please enter a valid Bangladeshi phone number.');
        } else {
            setPhoneNumberError('');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Check if all fields are filled
        if (
            name === '' ||
            address === '' ||
            city === '' ||
            bedrooms === '' ||
            bathrooms === '' ||
            roomSize === '' ||
            picture === '' ||
            availabilityDate === '' ||
            rentPerMonth === '' ||
            phoneNumber === '' ||
            description === '' ||
            phoneNumberError !== ''
        ) {
            // Display an error message or handle the form submission accordingly
            return;
        }

        // Perform the form submission or API request to add the house
        // ...

        // Clear form fields
        setName('');
        setAddress('');
        setCity('');
        setBedrooms('');
        setBathrooms('');
        setRoomSize('');
        setPicture('');
        setAvailabilityDate('');
        setRentPerMonth('');
        setPhoneNumber('');
        setDescription('');

        // Close the modal
        // onCloseModal();
    };




    return (
        <div>

            <button class="btn" onclick="my_modal_3.showModal()">open modal</button>


            <dialog id="my_modal_3" class="modal">
                <form method="dialog" class="modal-box">
                    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="bedrooms">Bedrooms</label>
                            <input type="number" id="bedrooms" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="bathrooms">Bathrooms</label>
                            <input type="number" id="bathrooms" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="roomSize">Room Size</label>
                            <input type="text" id="roomSize" value={roomSize} onChange={(e) => setRoomSize(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="picture">Picture</label>
                            <input type="text" id="picture" value={picture} onChange={(e) => setPicture(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="availabilityDate">Availability Date</label>
                            <input type="text" id="availabilityDate" value={availabilityDate} onChange={(e) => setAvailabilityDate(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="rentPerMonth">Rent per Month</label>
                            <input type="text" id="rentPerMonth" value={rentPerMonth} onChange={(e) => setRentPerMonth(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input type="text" id="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} required />
                            {phoneNumberError && <p className="error-message">{phoneNumberError}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">Add</button>
                            {/* <button type="button" className="btn btn-secondary" onClick={onCloseModal}>Cancel</button> */}
                        </div>
                    </form>
                </form>
            </dialog>
        </div>
    );
};

export default HouseOwner;