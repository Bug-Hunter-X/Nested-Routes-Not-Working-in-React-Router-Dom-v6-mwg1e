import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {  return (
  <div>
    <h1>Home</h1>
    <Outlet/>
  </div>
);}

function About() { return <div>About</div>;}

function NotFound() { return <div>Not Found</div>;}