import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const ProjectData = [
    {
        imgsrc: project1,
        title: "SWEPT 2.0",
        text: "SWEPT 2.0 is a mobile-first, web application that informs users of restrictive parking during summer street sweeping & winter snow removal. SWEPT can help users be aware of such restrictions & rules by conveniently placing all of these schedules & mandates conveniently in one spot.",
        view: 'http://swept.herokuapp.com/',
        kittens: 'https://github.com/elliottdombrowski/SWEPT-02',
    },
    {
        imgsrc: project2,
        title: "Weather Dashboard",
        text: "A weather dashboard built using third-party APIs, specifically the OpenWeather One Call API. The dashboard app runs in the browser & features dynamically updated HTML & CSS. The app uses localStorage to store persistent data & display the recent searches.",
        view: 'https://justinkemp10.github.io/weather-dashboard/',
        kittens: 'https://github.com/justinkemp10/weather-dashboard',
    },
    {
        imgsrc: project3,
        title: "Workday Scheduler",
        text: "A simple calender app that allows users to schedule events for every hour of the day. Each time block is color-coded to indicate past, present, or future. The app uses localStorage to store persistent data (events) & display the user's saved events.",
        view: 'https://justinkemp10.github.io/Workday-Scheduler/',
        kittens: 'https://github.com/justinkemp10/Workday-Scheduler',
    },
];

export default ProjectData;