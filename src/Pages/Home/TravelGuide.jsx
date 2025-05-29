import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Overview from './Overview';
import OurPackages from './OurPopularPackages';
import TourGuide from '../DashBoard/TourGuide/TourGuide';

const TravelGuide = () => {
    return (
        <div className='lg:mx-36'>
            <Tabs>
                <TabList>
                    <div className='text-center'>
                       <Tab>ওভারভিউ</Tab>
                        <Tab>স্পেশাল প্যাকেজসমূহ</Tab>
                        <Tab>টপ রেটেড ট্যুর গাইড</Tab>
                    </div>
                </TabList>
                <div className='text-center mx-auto'>
                    <TabPanel>
                        <Overview />
                    </TabPanel>
                    <TabPanel>
                        <OurPackages />
                    </TabPanel>
                    <TabPanel>
                        <TourGuide />
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    );
};

export default TravelGuide;
