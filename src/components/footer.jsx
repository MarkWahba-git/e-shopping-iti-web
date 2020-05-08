import React, { Component } from 'react';
// import Categories from "./categories";

class Footer extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="footer_section">
                                    <h4 className="h4_footer">Categories</h4>
                                    <ul className="list-unstyled">
                                        <li>cat1</li>
                                        <li>cat2</li>
                                        <li>cat3</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="footer_section">
                                    <h4 className="h4_footer">Brands</h4>
                                    <ul className="list-unstyled">
                                        <li>brand1</li>
                                        <li>brand2</li>
                                        <li>brand3</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="footer_section">
                                    <h4 className="h4_footer">Other sections</h4>
                                    <ul className="list-unstyled">
                                        <li>section1</li>
                                        <li>section2</li>
                                        <li>section3</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="copyright_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="copyright">
                                    <p className="text-center p_copyright">All rights reserved for ruby team 2020</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Footer;
