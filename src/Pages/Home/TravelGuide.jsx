
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Overview from './Overview';
import OurPackages from './OurPackages';
import TourGuide from '../DashBoard/TourGuide/TourGuide';
const TravelGuide = () => {
    return (
        <div className='mx-36'>
             <Tabs>
    <TabList>
     <div className='text-center'>
     <Tab>Overview</Tab>
      <Tab>Our Packages</Tab>
      <Tab>Meet Our Tour Guides</Tab>
     </div>
    </TabList>
<div className='text-center mx-auto'>
    
<TabPanel>
   <Overview></Overview>
    </TabPanel>
    <TabPanel>
    <OurPackages></OurPackages>
    </TabPanel>
    <TabPanel>
      <TourGuide></TourGuide>
    </TabPanel>
</div>
  </Tabs>
        </div>
    );
};

export default TravelGuide;