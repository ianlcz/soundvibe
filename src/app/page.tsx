import Input from "./components/Input/Input";

const Home = () => {
  return (
    <div className='flex max-w-full h-screen'>
      <div className='border border-blue-700 w-1/2'>
        <Input />
      </div>
      <div className='border border-green-700 w-1/2'></div>
    </div>
  );
};
export default Home;
