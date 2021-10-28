import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'JANUARY-2021 - SEPTEMBER 2021'} 
                        title={'Software Engineering Internship'}
                        subTitle={'Decagon Training Institute'}
                        text={'Learned and Worked on the job picking and improving on technologies like reactjs, react native '} 
                    />
                    <ResumeItem 
                        year={'2019-2020'} 
                        title={'IT Support'}
                        subTitle={'Recovery House Church'}
                        text={'Worked as the website manager as well as their IT support for everything, ran online streaming etc'} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2014 - 2019'} 
                        title={'Computer Science Degree'}
                        subTitle={'Godfrey Okoye University'}
                        text={'Graduated with a second class upper in Computer Science'} 
                    />
                   
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }
    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume