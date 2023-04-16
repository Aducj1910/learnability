import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaBrain, FaHome, FaShoppingCart } from 'react-icons/fa';
import {MdSwipeLeft, MdForest} from 'react-icons/md';
import {TbCards} from 'react-icons/tb';
import DragonLearnLogo from '../imgs/DragonLearnLogo.png'; // Import the logo image

const Sidebar = (props) => {

    const {setCurrentPage} = props;

  return (
    <div className=" h-1500 w-24 flex flex-col
                  bg-gray-900 text-white shadow-lg">
                    
        <SidebarIcon icon={<img src={DragonLearnLogo} className='rounded-2xl' alt="Dragon Learn Logo" />} text="Home" setCurrentPage={setCurrentPage} link="Collectibles" />
        <Divider />
        <SidebarIcon icon={<MdSwipeLeft size="36" />} text="SwipeSight" setCurrentPage={setCurrentPage} />
        <SidebarIcon icon={<FaBrain size="30" />} text="WordWhiz" setCurrentPage={setCurrentPage} />
        <SidebarIcon icon={<MdForest size="30" />} text="SpellSafari" setCurrentPage={setCurrentPage} />
        <Divider />
        <SidebarIcon icon={<TbCards size="30" />} text="Collectibles" setCurrentPage={setCurrentPage} />
        <SidebarIcon icon={<FaShoppingCart size="30" />} text="Shop" setCurrentPage={setCurrentPage} />
    </div>
  );
};

const SidebarIcon = ({ icon, text = 'tooltip 💡', setCurrentPage, link=text }) => (
  <div className="sidebar-icon group" onClick={() => setCurrentPage(link)}>
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);


const Divider = () => <hr className="sidebar-hr" />;

export default Sidebar;
