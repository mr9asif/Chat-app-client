import Buttom from "./Buttom";
import Chat from "./Chat";
import Header from "./Header";
import Top from "./Top";



const Home = () => {
    return (
        <div className='flex justify-between items-start  '>
            <div  className="w-[35%] bg-gray-200 shadow-md h-screen ">
            
            <Top ></Top>
            <Buttom></Buttom>
           

            </div>
            <div className='w-[65%] border-2 '>
               <Header></Header>
               <Chat></Chat>
            </div>
        </div>
    );
};

export default Home;