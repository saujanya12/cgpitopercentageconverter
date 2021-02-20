import React, { useState } from 'react'

export default function Pune() {

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

            percentage = cgpi * 8.80;

            setCgpi(cgpi);
            setPercentage(percentage);
            //calculatePerformance(percentage);
            setError(false);

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
                                    <h5>Savitribai Phule Pune University</h5>
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

                    <div className='row justify-content-center bg-white pt-4 pb-4 rounded'>
                        <div className=' col d-flex justify-content-evenly'>
                            <div>
                                <label >Percentage: </label>
                                <input type="number" className='form-control' value={percentage} disabled />
                            </div>
                        </div>
                    </div>

                    <div className='row bg-white mt-4 pt-4 pb-6  rounded'>
                        <div className='col'>
                            <p><strong>CGPA TO PERCENTAGE CONVERSION FORMULA</strong></p>
                            <p>Percentage = CGPA * 8.80 </p>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}
