import React, {Component} from 'react';
import LibraryCourse from './libraryCourse';
class Library extends Component {
    render(){
        return(
            <div className ="library">
            <h1 className="Library_title">Coursre Library</h1>
            <LibraryCourse />
            <LibraryCourse />
            <LibraryCourse />

            </div>
        )
    }
}

export default Library;