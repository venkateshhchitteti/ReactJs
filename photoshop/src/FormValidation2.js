import { useState } from "react"
import '../src/FormValidation.css';

function FormValidation2(props) {

    const [userData, setUserData] = useState({
        emailId: '',
        passWord: '',
        confirmPassword: ''
    })

    function onChangeUserData(event) {
        setUserData({
            ...userData, [event.target.name]: event.target.value
        })
    }

    return (
        <div className="outerContainer">
            <div className="header">
                USER FORM
            </div>
            <div className="row">
                <div className="col-25">
                    <label> Email ID :</label>
                </div>
                <div className="col-75">
                    <input className='inputField' value={userData.emailId} name="emailId" onChange={onChangeUserData} ></input>
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label>Password :</label>
                </div>
                <div className="col-75">
                    <input className='inputField' value={userData.passWord} type="password" name="passWord" onChange={onChangeUserData}></input>
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label> Confirm Password :</label>
                </div>
                <div className="col-75">
                    <input className='inputField' value={userData.confirmPassword} type="password" name="confirmPassword" onChange={onChangeUserData}></input>
                </div>
            </div>
            {
                userData.passWord !== userData.confirmPassword ? <div className='errorMessage'>
                    Password and confirm password did not matched
                </div>
                    : null
            }

        </div>
    )
}

export default FormValidation2;
