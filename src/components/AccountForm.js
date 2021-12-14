import React, { useState } from "react";
import { useContext } from "react/cjs/react.development";
import { Form, } from "semantic-ui-react";
import { AccountConsumer, AccountContext } from "../providers/AccountProvider";

const AccountForm = (props) => {
  
  const account = useContext(AccountContext);
  const [username, setUsername]= useState(account.username);
  const [membershipLevel, setMembershipLevel]= useState(account.membershipLevel);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    account.updateAccount({username, membershipLevel})
  }
  
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="Edit Username"
          type="text"
          name="username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />
        <Form.Select
          label="Membership Level"
          name="membershipLevel"
          value={membershipLevel}
          onChange={(e, {value})=>setMembershipLevel(value)}
          options={membershipOptions}
        />
        <Form.Button color="blue">Save</Form.Button>
      </Form>
    )
  
}


const membershipOptions = [
  { key: "b", text: "Bronze", value: "Bronze", },
  { key: "s", text: "Silver", value: "Silver", },
  { key: "g", text: "Gold", value: "Gold", },
  { key: "p", text: "Platinum", value: "Platinum", },
];

export default AccountForm;