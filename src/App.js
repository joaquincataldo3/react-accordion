import SingleQuestion from "./Comps/Question";
import questions from './data'
import './Comps/Question.css'

function App() {
  return (
    <section className="question-container">
      <div className='section-title-container'>
        <h2>Question and answers</h2>
      </div>
      <div className="q-a-list">
        {
          questions.map(question => {
            return <SingleQuestion {...question} key={question.id} />
          })
        }
      </div>
    </section>
  );
}

export default App;
