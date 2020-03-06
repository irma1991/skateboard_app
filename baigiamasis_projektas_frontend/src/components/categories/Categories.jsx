import React, {Component} from 'react';
import OneCategory from "../oneCategory/OneCategory";

class Categories extends Component{
    constructor(props) {
        super(props);
        this.state = {allCategories: []};
    }

    componentDidMount() {
        fetch(`http://skateboard.test/api/all-categories`)
            .then(response => response.json())
            .then(
                data=>{
                    this.setState({
                        allCategories: data
                    })
                }
            )
    }
    render(){
        return(
            <main>
                <div class = "container">
                </div>
            </main>
        );

    }

}
export default Categories;