// import Register from './components/register/Register';
// import TestWithMockData from './components/testWithMockData/TestWithMockData';
import TestingAPICalls from './components/testingAPICalls/TestingAPICalls';
import TestingStateChange from './components/testingStateChange/TestingStateChange';

function App() {
  // const mockData = [
  //   {
  //     "id": 1,
  //     "first_name": "Fletcher",
  //     "last_name": "McVanamy",
  //     "email": "mmcvanamy0@e-recht24.de",
  //     "age": 30
  //   }, {
  //     "id": 2,
  //     "first_name": "Clarice",
  //     "last_name": "Harrild",
  //     "email": "charrild1@dion.ne.jp",
  //     "age": 35
  //   },
  // ]

  // return <Register />;
  // return <TestWithMockData data={mockData} displayUnorderedList={true} handleClick={() => { }} />
  // return <TestingStateChange />
  return <TestingAPICalls />;
}

export default App
