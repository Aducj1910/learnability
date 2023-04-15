import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaBrain, FaHome, FaPoo } from 'react-icons/fa';
import {MdSwipeLeft, MdForest} from 'react-icons/md';

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-24 flex flex-col
                  bg-gray-900 text-white shadow-lg">
                    
        <SidebarIcon icon={<FaHome size="34" />} text="Home" />
        <Divider />
        <SidebarIcon icon={<MdSwipeLeft size="36" />} text="SwipeSight"  />
        <SidebarIcon icon={<FaBrain size="30" />} text="WordWhiz" />
        <SidebarIcon icon={<MdForest size="30" />} text="SpellSafari" />
        <Divider />
        <SidebarIcon icon={<BsGearFill size="30" />} text="Settings" />
    </div>
  );
};

const SidebarIcon = ({ icon, text = 'tooltip 💡' }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);


const Divider = () => <hr className="sidebar-hr" />;

export default Sidebar;