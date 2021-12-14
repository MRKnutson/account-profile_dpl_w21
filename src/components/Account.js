import React, {useContext} from "react";
import { Card, } from "semantic-ui-react";
import { AccountConsumer, AccountContext } from "../providers/AccountProvider";

const Account = () => {
  const account = useContext(AccountContext);
  return(
    <Card>
      <Card.Content>
        <Card.Header>{account.username}</Card.Header>
        <Card.Meta>
          Date Joined: {account.dateJoined}
        </Card.Meta>
      </Card.Content>
      <Card.Content>
        <p>Membership Level: {account.membershipLevel}</p>
      </Card.Content>
    </Card>
 )
};

// Pre-hook way
{/* <AccountConsumer>
  {value => <Component />}
</AccountConsumer> */}

// const Account = () => (
//   <AccountConsumer>
//     {value=>(
//     <Card>
//       <Card.Content>
//         <Card.Header>{value.username}</Card.Header>
//         <Card.Meta>
//           {value.dataJoined}
//         </Card.Meta>
//       </Card.Content>
//       <Card.Content>
//         <p>Membership Level: {value.membershipLevel}</p>
//       </Card.Content>
//     </Card>
//     )}
//   </AccountConsumer>
// )

export default Account;