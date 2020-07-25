import React from 'react';

import IntroHeader from './IntroHeader/IntroHeader';
import SkillsSection from './SkillsSection/SkillsSection';
import MyJobs from '../MyJobs/MyJobs';
import MyOnlineCourses from './CourseSection/MyOnlineCourses';
import MyBlog from './BlogSection/MyBlog';
import MyTalks from './TalkSection/MyTalks'
import FooterEnd from '../Footer/FooterEnd'

import '../styles/App_styles.css'

class App extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }
    
    render(){
        return(
            <div className = 'main_container'>
                <IntroHeader/>
                <SkillsSection />
                <MyJobs />
                <MyOnlineCourses/>
                <MyBlog />
                <MyTalks />
                <FooterEnd/>
            </div>
        )
    }
}

export default App;