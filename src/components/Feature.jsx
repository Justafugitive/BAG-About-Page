import React from 'react'
import FeatureBox from './FeatureBox'
import Community from '../images/Community.svg'
import Face2Face from '../images/Face2face.svg'

function Feature() {
  return (
    <div id='features'>
        <div className='a-container'>
            <FeatureBox image={Community} title="Mission" text="At BAG, our mission is to empower students by providing them with practical work experience that prepares them for their desired careers. We are committed to creating opportunities for students to learn, grow, and succeed in the world of work while helping employers discover and develop top talent." />
            <FeatureBox image={Face2Face} title="Vision" text="We envision a future where every student has access to high-quality work experience programs that align with their career goals. We aspire to be the leading force in building a skilled and diverse workforce by connecting students with employers in a way that benefits both parties. Our vision is a world where students are fully prepared, employers are thriving, and opportunities are abundant for all." />
        </div>
    </div>
  )
}

export default Feature