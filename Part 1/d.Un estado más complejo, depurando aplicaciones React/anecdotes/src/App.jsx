import { useState } from 'react'

const Title = (props) => {
  return(
    <h1>{props.title}</h1>
  )
}

const App = () => {
  const title1 = "Anecdote of the day"
  const title2 = "Anecdote with most votes"

  const [selected, setSelected] = useState(0)
  const [anecdotes, setAnecdotes] = useState([
    {
      text: 'If it hurts, do it more often.',
      votes:  0
    },
    {
      text: 'Adding manpower to a late software project makes it later!',
      votes:  0
    },
    {
      text: 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      votes:  0
    },
    {
      text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      votes:  0
    },
    {
      text: 'Premature optimization is the root of all evil.',
      votes:  0
    },
    {
      text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      votes:  0
    },
    {
      text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      votes:  0
    },
    {
      text: 'The only way to go fast, is to go well.',
      votes:  0
    },
  ]);

  const findMostVotedAnecdote = () => {
    let maxVotes = 0;
    let mostVotedIndex = 0;

    anecdotes.forEach((anecdote, index) => {
      if(anecdote.votes > maxVotes) {
        maxVotes = anecdote.votes;
        mostVotedIndex = index;
      }
    });

    return mostVotedIndex;
  }

  const mostVotedAnecdoteIndex = findMostVotedAnecdote();

  const handleNextClick = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const handleVoteClick = () => {
    const copyOfAnecdotes = [...anecdotes]; 
    copyOfAnecdotes[selected].votes +=  1; 
    setAnecdotes(copyOfAnecdotes); 
  };

  return (
    <div>
      <Title title={title1}/>
      <p>{anecdotes[selected].text}</p>
      <p>{anecdotes[selected].votes}</p>
      <div>
        <button onClick={handleVoteClick}>vote</button>
        <button onClick={handleNextClick}>next anecdote</button>
      </div>
      <Title title={title2}/>
      <p>{anecdotes[mostVotedAnecdoteIndex].text}</p>
      <p>{anecdotes[mostVotedAnecdoteIndex].votes}</p>
    </div>

  )
}

export default App
