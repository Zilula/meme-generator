import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import fileSaver from 'file-saver';



export default class FileSaver extends PureComponent {
    static propTypes = {
        img: PropTypes.string.isRequired
    }
    saveImage = () => {
        fileSaver.saveAs(this.props.img);
    };

    render() {
        return (
            <Fragment>
                <img src={this.props.img}/>
                <button onClick={this.saveImage}>Save File</button>
            </Fragment>
        );

    }
}
