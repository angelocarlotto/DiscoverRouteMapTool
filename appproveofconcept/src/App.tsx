import { useState } from "react";
import { AppRoutes } from "./AppRoutes";
import { Tweet } from "./components/Tweet";

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
  return (
    <div>
      <AppRoutes></AppRoutes>
      <Tweet text="teste" />
      {tweets.map((tweet) => {
        return <Tweet text={tweet} />;
      })}
      <button onClick={createTweet}>Adicionar Tweet</button>
    </div>
  );
}

export default App;
