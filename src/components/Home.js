import { useContext } from "react/cjs/react.development";
import { AccountContext } from "../providers/AccountProvider";

const Home = () =>{
  const account = useContext(AccountContext)
  return (
    <div>
      <h1>Home</h1>
      <p>Account: {account.username}</p>
    </div>
  );
};

export default Home;