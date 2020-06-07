import React from 'react';
import {Row, Col} from 'react-bootstrap';

const FormField = ({input, type, placeholder, meta: {error, touched}}) => {
    const errorBorder = () => (touched && error) ? 'red-border' : '';

    return (
        <Row className="justify-content-center mb-3">
            <Col xs="12" className="my-auto">
                <input {...input} className={`form-control ${errorBorder()}`} type={type} placeholder={placeholder}/>
            </Col>

            <Col xs='12' className="text-danger font-bold">
                {touched && error}
            </Col>
        </Row>
    );
};


export default FormField;