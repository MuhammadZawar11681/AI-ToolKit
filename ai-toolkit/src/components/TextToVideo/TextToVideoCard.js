
import React from "react";
import Card from "react-bootstrap/Card";


import axios from 'axios';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Hourglass } from 'react-loader-spinner';
import * as yup from "yup";
import './TextToVideo.css'
import { Button } from "react-bootstrap";


const TextToVideoCard = () => {
    const [loading, setLoading] = useState(false)
    const [videoUrl, setVideoUrl] = useState("")

    const validationSchema = yup.object().shape({
        prompt: yup.string().required("prompt is required")
    })

    const formik = useFormik({
        initialValues: {
            prompt: "",
            token: "r8_DslKjqPWuLt4LlBcU1Vir80PTjOYp7o43OWYo"
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            setLoading(true);
            const res = await axios.post("http://localhost:3001/api/video-gen", values);
            console.log(res);
            const url = res.data[0];
            setVideoUrl(url)
            setLoading(false)
        }
    })

    // const handleSubmit = (e) => {
    //     console.log(e)
    //     e.preventDefault()
    //     const prompt = e.target.elements.input.value;
    //     const token = "r8_bsFDDczvu893zs85jorc1b3DXOX12RV2IXNzv"


    //     setLoading(true);
    //     const replicate = new Replicate({
    //         auth: token
    //     })
    //     const res = await replicate.run(
    //         "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
    //         {
    //             input: {
    //                 prompt: prompt
    //             }
    //         }
    //     );
    //     console.log(res);
    //     const url = res.data.output[0]
    //     setVideoUrl(url)
    //     setLoading(false)
    // }

    return (
        <Card className="quote-card-view h-600">
            <Card.Body >
                <blockquote className="blockquote mb-0 text-center">
                    <div className="container mt-3">
                        <h1 className="mb-4">Convert your  Text To Video With <span className="purple">AI</span></h1>


                        <div className=' rounded-md shadow-xl p-5 max-w-lg w-full'>
                            <div>
                                <h3 className=' text-2xl font-bold'>Video Generation</h3>
                                <p className=' text-slate-500 text-sm mt-2'>Generate next level video with prompt.</p>
                            </div>
                            <div className='h-[300px] w-full rounded-md border-2 border-dashed my-5 flex flex-col items-center justify-center'>
                                {
                                    loading ?

                                        <Hourglass
                                            visible={true}
                                            height="80"
                                            width="80"
                                            ariaLabel="hourglass-loading"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                            colors={['#306cce', '#72a1ed']}
                                        />
                                        :
                                        videoUrl ?
                                            (
                                                <video width={"100%"} controls>
                                                    <source src={videoUrl} type='video/mp4' />
                                                </video>
                                            )
                                            :
                                            (
                                                <div>No video</div>
                                            )
                                }
                            </div>
                            <form className=' flex flex-col gap-5 ' onSubmit={formik.handleSubmit}>
                                <input id="vid-prompt"
                                    type="text"
                                    name="prompt"
                                    placeholder='Enter prompt here...'
                                    className='p-2 rounded-md border outline-none text-sm'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.prompt}
                                />
                                {formik.touched.prompt && formik.errors.prompt && (
                                    <div className=' text-red-500 text-sm'>{formik.errors.prompt}</div>
                                )}
                                {/* {formik.touched.prompt && formik.errors.prompt && (
                                    <div className=' text-red-500 text-sm'>{formik.errors.prompt}</div>
                                )} */}


                                <Button id="vid-submit" type="submit" >
                                    Generate
                                </Button>

                            </form>
                        </div>

                    </div>
                </blockquote>
            </Card.Body>
        </Card>
    );
};

export default TextToVideoCard;



