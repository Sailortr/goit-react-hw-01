import Profile from "../components/Profile/Profile.jsx";
import FriendsList from "../components/FriendList/FriendsList.jsx";
import TransactionHistory from "../components/TransactionHistory/TransactionHistory.jsx";
import "../components/Profile/Profile.css";
import "../components/App.jsx";
import userData from "../components/userData.json";
import friends from "../components/friends.json";
import transactions from "../components/transactions.json";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
