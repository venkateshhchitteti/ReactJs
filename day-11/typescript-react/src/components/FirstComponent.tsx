import * as React from "react";
export default class FirstComponent extends React.Component<{}> {
  render() {
    return (
      <div>
        <h3>A simple reacr component example  with typescript</h3>
        <div>
         <div>
         <label>FirstName:</label>
          <input></input>
         </div>
          <div>
          <label>Gender:</label>
          <input type='radio' />Male
          <input type='radio' />FeMale
          <input type='radio' />Others
          </div>
         <div>
         <label>LastName:</label>
          <input></input>
         </div>
         <div>

         </div>
          <div>
          <label>Type Your MailId</label>
          <input></input>
          </div>
          <div>
            <label>Type Your PhoneNumber</label>
            <input></input>
          </div>
        </div>
        <p>this component shows the logrocket logError</p>
      </div>

    )
  }
}