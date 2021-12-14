import React from "react";
import { useContext } from "react/cjs/react.development";
import { Form, } from "semantic-ui-react";
import { AccountConsumer, AccountContext } from "../providers/AccountProvider";

class AccountForm extends React.Component {
  state = { username: this.props.username, membershipLevel: this.props.membershipLevel, };
  
  handleChange = (e, { name, value }) => this.setState({ [name]: value, });
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateAccount(this.state)
  }
  
  render() {
    const { username, membershipLevel, } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Edit Username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <Form.Select
          label="Membership Level"
          name="membershipLevel"
          value={membershipLevel}
          onChange={this.handleChange}
          options={membershipOptions}
        />
        <Form.Button color="blue">Save</Form.Button>
      </Form>
    )
  }
}

// Higher order component (HOC)-Wrapping a component in another component to provide some data or functionality

// const ConnectedAccountForm = (props) =>{
//   return(
//     <AccountConsumer>
//       {value=>(
//         <AccountForm {... props} username = {value.username} membershipLevel = {value.membershipLevel} />
//       )}
//     </AccountConsumer>
//   )
// };

const ConnectedAccountForm = (props) =>{
  const account = useContext(AccountContext);
  return(
        <AccountForm {... props} username = {account.username} membershipLevel = {account.membershipLevel} updateAccount={account.updateAccount}/>
  )
};

const membershipOptions = [
  { key: "b", text: "Bronze", value: "Bronze", },
  { key: "s", text: "Silver", value: "Silver", },
  { key: "g", text: "Gold", value: "Gold", },
  { key: "p", text: "Platinum", value: "Platinum", },
];

export default ConnectedAccountForm;