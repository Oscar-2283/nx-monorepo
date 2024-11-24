import NxWelcome from './nx-welcome';
import { useMyNewHook } from '@nx-monorepo/my-new-lib';
import { fetchPosts } from '@nx-monorepo/api';
import { useEffect } from 'react';

import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  const { count, increment } = useMyNewHook();
  console.log('{process.env.VITE_API_URL}', process.env.VITE_API_URL)
  console.log('{process.env.REACT_NX_TEST}', process.env.REACT_NX_TEST)

  const fetchData = async () => {
    const posts = await fetchPosts();
    console.log(posts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <NxWelcome title="nx-react" />

      <button onClick={increment}> plus </button>
      <div>count: {count}</div>
      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
