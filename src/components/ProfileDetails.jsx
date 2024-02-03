import React from "react";


const ProfileDetails = ({ customer }) => (
    <div className="profile-details">
        <div className="left-container">
            <img className="profile-img" src={customer.firstname} alt="Profile Image" />
            <table>
                <tbody>
                    <tr>
                        <td>Name :</td>
                        <td>{`${customer.firstname} ${customer.lastname}`}</td>
                    </tr>
                    <tr>
                        <td>Email :</td>
                        <td>{user.email}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="right-container">
            <SignUpClassesDetails />
        </div>
    </div>
);

export default ProfileDetails;