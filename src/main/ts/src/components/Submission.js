import react, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Formik, Field, Form, ErrorMessage, yupToFormErrors} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import '../css/Submission.css';
import {TextField} from '@material-ui/core';
// import { TextArea } from 'devextreme-react';


export default class Submission extends Component {
    render() {
        return (
            <div>
                <span>
                <Formik
                    initialValues={{firstName: '', lastName: '', melliCode: '', address: ''}}
                    validationSchema={Yup.object().shape({
                        firstName: Yup.string().required('firstName is required'),
                        lastName: Yup.string().required('lastName is required'),
                        melliCode: Yup.string().required('melliCode is required'),
                        address: Yup.string().required('address is required')
                    })}
                    onSubmit={(e) => {
                        axios({
                                method: 'POST',
                                url: '/Submission',
                                data: {
                                    firstName: e.firstName,
                                    lastName: e.lastName,
                                    melliCode: e.melliCode,
                                    address: e.address
                                }
                            }
                        ).then(function (response) {
                            console.log('response: ' + response);
                        }).catch(function (error) {
                            console.log('error: ' + error);
                        });
                    }
                    }
                    render={({errors, status, touched, isSubmitting}) => (
                        <Form className='submissionForm'>
                            <fieldset>
                                <legend>Personal Information</legend>

                                <div className="form-group">
                                    <label htmlFor="Name">Name</label>
                                    <TextField name="Name" type="text"
                                               className={'form-control' + (errors.Name && touched.Name ? ' is-invalid' : '')}/>
                                    <ErrorMessage name="Name" component="div" className="invalid-feedback"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Family">Family</label>
                                    <TextField name="Family" type="text"
                                               className={'form-control' + (errors.Family && touched.Family ? ' is-invalid' : '')}/>
                                    <ErrorMessage name="Family" component="div" className="invalid-feedback"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="MelliCode">MelliCode</label>
                                    <TextField name="MelliCode" type="text"
                                               className={'form-control' + (errors.MelliCode && touched.MelliCode ? ' is-invalid' : '')}/>
                                    <ErrorMessage name="MelliCode" component="div" className="invalid-feedback"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="Address">Address</label>
                                    <TextField name="Address" type="text"
                                               className={'form-control' + (errors.Address && touched.Address ? ' is-invalid' : '')}/>
                                    <ErrorMessage name="Address" component="div" className="invalid-feedback"/>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Submit
                                    </button>
                                    {isSubmitting &&
                                    <img
                                        src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="/>
                                    }
                                </div>
                            </fieldset>
                            {status &&
                            <div className={'alert alert-danger'}>{status}</div>
                            }
                        </Form>
                    )}
                >

                </Formik>
                </span>
            </div>
        )
    }
}
