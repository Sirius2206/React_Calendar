import Calendar from './components/Calendar';

function App() {
  const now = new Date(1988, 7, 13);
  return (
    <Calendar date={now} />
  );
}

export default App;
