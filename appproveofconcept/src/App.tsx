import { useState } from "react";
import { AppRoutes } from "./AppRoutes";
import { Tweet } from "./components/Tweet";
import {
  Link,
} from "react-router-dom";
import {Modal} from "./components/Modal";
function App() {
  const [tweets, setTweets] = useState<string[]>([
    `Tweets 1`,
    `Tweets 2`,
    `Tweets 3`,
    `Tweets 4`,
  ]);
  function createTweet() {
    setTweets([...tweets, `tweet 5`]);
  }
  const [modalOpen,setModalOpen]=useState<boolean>(false);
  return (
    <div>
      <AppRoutes></AppRoutes>
      <Tweet text="teste" />
      <button onClick={()=>setModalOpen(!modalOpen)}>Modal</button>
      <Modal isOpen={modalOpen} />
      {tweets.map((tweet) => {
        return <Tweet text={tweet} />;
      })}
      
      <button onClick={createTweet}>Adicionar Tweet{tweets.length}</button>
    </div>
  );
}

export default App;
