import React,{Component} from 'react';
import Icon from '../icon'

class LibraryCourse extends Component{
    render(){
        return(
            <div className ="library-course">
                <label className="library-course">Problem Solvingn</label>
                     {Icon('fas fa-check', 'library-course_icon') }
                     {/* arrow component */}
                     {/* arrow component */}
                     {/* action button component */}
                   


                     <div className ="library-course-description"></div>
                        <label>course Description</label>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis sit amet ligula id pretium. Duis commodo viverra malesuada. In hac habitasse platea dictumst. Maecenas id turpis vitae enim cursus aliquam sit amet sed lectus. </p>
            </div>
        )
    }
}

export default LibraryCourse;