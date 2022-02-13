import UserList from "../component/UserList";
import useFetch from "../customHook/useFetch";

const Home = () => {
  const { error, isPending, data: users } = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { users && <UserList users={users} /> }
    </div>
  );
}
 
export default Home;