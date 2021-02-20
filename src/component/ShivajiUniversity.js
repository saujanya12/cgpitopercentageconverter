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
        else if (cgpi >= 11) {

            setCgpi(cgpi);
            setPercentage(percentage);
            setGrade('');
            setGradePoint('');
            setPerformance('');
            setError(true);
        }
        else {

            percentage = (cgpi * 10) - 7.5;

            setCgpi(cgpi);
            setPercentage(percentage);
            calculatePerformance(cgpi);
            setError(false);

        }
    }

    const calculatePerformance = (cgpi) => {

        if (cgpi >= 9.50 && cgpi <= 10) {
            setGrade('O');
            // setGradePoint(10);
            setPerformance('Outstanding');
        }
        else if (cgpi >= 8.86 && cgpi <= 9.49) {
            setGrade('A+');
            // setGradePoint(9);
            setPerformance('Excellent');
        }
        else if (cgpi >= 7.86 && cgpi <= 8.85) {
            setGrade('A');
            // setGradePoint(8);
            setPerformance('Very Good');
        }
        else if (cgpi >= 6.86 && cgpi <= 7.85) {
            setGrade('B+');
            // setGradePoint(7);
            setPerformance('Good');
        }
        else if (cgpi >= 5.86 && cgpi <= 6.85) {
            setGrade('B');
            // setGradePoint(7);
            setPerformance('Above Average');
        }
        else if (cgpi >= 4.86 && cgpi <= 5.85) {
            setGrade('C');
            // setGradePoint(6);
            setPerformance('Average');
        }
        else if (cgpi >= 4 && cgpi <= 4.85) {
            setGrade('P');
            // setGradePoint(5);
            setPerformance('Pass');
        }
        else if (cgpi >= 0.00 && cgpi <= 3.99) {
            setGrade('F');
            // setGradePoint(4);
            setPerformance('Failed');
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
                                    <h5>Shivaji University</h5>
                                    <hr />
                                </div>
                            </div>
                            <div className='row justify-content-center'>
                                <div className='col-sm-12 col-md-3 col-lg-3'>
                                    <label><strong className='bg-yellow'>Enter CGPI: </strong></label>
                                    <input type="number"
                                        className='form-control'
                                        value={cgpi}
                                        onChange={calculatePercentage}
                                    />
                                    {
                                        error === true ?
                                            <div className='row justify-content-center mt-2'>
                                                <div className='col'>
                                                    <p className=" alert-danger"> Please enter non-negative and less then or equal to 11. </p>
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
                        </div>
                    </div>


                    <div className='row justify-content-center bg-white pb-4 rounded-bottom border-top-0'>
                        <div className='col d-flex justify-content-evenly'>
                            <div>
                                <label >Grade:  </label>
                                <input type="text" className='form-control' value={grade} disabled />
                            </div>
                            <div >
                                <label >Performance: </label>
                                <input type="text" className='form-control' value={performance} disabled />
                            </div>
                        </div>
                    </div>

                    <div className='row bg-white mt-4 pt-4 pb-6  rounded'>
                        <div className='col'>
                            <p><strong>CGPA TO PERCENTAGE CONVERSION FORMULA</strong></p>
                            <p>Percentage = (CGPI * 10) - 7.5</p>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}
