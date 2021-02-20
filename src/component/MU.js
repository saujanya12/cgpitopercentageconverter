import React, { useState } from 'react'

export default function MU() {

    const [cgpi, setCgpi] = useState(0);
    const [percentage, setPercentage] = useState('');
    const [error, setError] = useState(false)
    const [grade, setGrade] = useState('');
    const [performance, setPerformance] = useState('');
    const [gardePoint, setGradePoint] = useState('');

    const calculatePercentage = (e) => {

        let cgpi = e.target.value;
        let percentage = 0;

        if (cgpi === "") {
            setCgpi(cgpi);
            setPercentage(0);
            setGrade('');
            setGradePoint('');
            setPerformance('');
        }
        else if (cgpi > 12) {

            setCgpi(cgpi);
            setPercentage(percentage);
            setGrade('');
            setGradePoint('');
            setPerformance('');
            setError(true);
        }
        else {

            if (cgpi < 7) {
                percentage = 7.1 * cgpi + 12;
            }
            else {
                // cgpi >= 7
                percentage = 7.4 * cgpi + 12;
            }
            setCgpi(cgpi);
            setPercentage(percentage);
            calculatePerformance(percentage);
            setError(false);

        }
    }

    const calculatePerformance = (percentage) => {

        if (percentage >= 80) {
            setGrade('O');
            setGradePoint(10);
            setPerformance('Outstanding');
        }
        else if (percentage >= 75 && percentage <= 79.99) {
            setGrade('A');
            setGradePoint(9);
            setPerformance('Excellent');
        }
        else if (percentage >= 70 && percentage <= 74.99) {
            setGrade('B');
            setGradePoint(8);
            setPerformance('Very Good');
        }
        else if (percentage >= 60 && percentage <= 69.99) {
            setGrade('C');
            setGradePoint(7);
            setPerformance('Good');
        }
        else if (percentage >= 60 && percentage <= 69.99) {
            setGrade('C');
            setGradePoint(7);
            setPerformance('Good');
        }
        else if (percentage >= 50 && percentage <= 59.99) {
            setGrade('D');
            setGradePoint(6);
            setPerformance('Fair');
        }
        else if (percentage >= 45 && percentage <= 49.99) {
            setGrade('E');
            setGradePoint(5);
            setPerformance('Average');
        }
        else if (percentage >= 40 && percentage <= 44.99) {
            setGrade('P');
            setGradePoint(4);
            setPerformance('Pass');
        }
        else if (percentage < 40) {
            setGrade('F');
            setGradePoint(0);
            setPerformance('Fail');
        }


    }

    return (
        <div className='bg-mu pt-2'>
            <div className='container text-center  rounded'>
                <div className='container'>

                    <div className='row  bg-white pt-2 pb-2 mb-2 rounded'>
                        <div className='col'>
                            <div className='row'>
                                <div className='col'>
                                    <h5>Mumbai University</h5>
                                    <hr />
                                </div>
                            </div>
                            <div className='row justify-content-center'>
                                <div className='col-sm-12 col-md-3 col-lg-3'>
                                    <label><strong className=' bg-yellow'>Enter CGPI: </strong></label>
                                    <input type="number"
                                        className='form-control'
                                        value={cgpi}
                                        onChange={calculatePercentage}
                                    />
                                    {
                                        error === true ?
                                            <div className='row justify-content-center mt-2'>
                                                <div className='col'>
                                                    <p className=" alert-danger"> Please enter value less then or equal to 12. </p>
                                                </div>
                                            </div>
                                            : <div className='row justify-content-center'>
                                                <div className='col'>
                                                    <p></p>
                                                </div>
                                            </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row justify-content-center bg-white pt-4 pb-2 rounded-top border-bottom-0'>
                        <div className=' col d-flex justify-content-evenly'>
                            <div>
                                <label >Percentage: </label>
                                <input type="number" className='form-control' value={percentage} disabled />
                            </div>
                            <div>
                                <label >Grade:  </label>
                                <input type="text" className='form-control' value={grade} disabled />
                            </div>
                        </div>
                    </div>


                    <div className='row justify-content-center bg-white pb-4 rounded-bottom border-top-0'>
                        <div className='col d-flex justify-content-evenly'>
                            <div>
                                <label >Grade Point: </label>
                                <input type="text" className='form-control' value={gardePoint} disabled />
                            </div>
                            <div>
                                <label >Performance: </label>
                                <input type="text" className='form-control' value={performance} disabled />
                            </div>
                        </div>
                    </div>

                    <div className='row bg-white mt-4 pt-4 pb-6  rounded'>
                        <div className='col'>
                            <p><strong>CGPI TO PERCENTAGE CONVERSION FORMULA</strong></p>
                            <p>Percentage = 7.1 * CGPI + 12 ; if CGPI is less than 7</p>
                            <p>Percentage = 7.4 * CGPI + 12 ; if CGPI is greater than or equal to 7</p>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}
