import React from 'react'
import { Link } from 'react-router-dom';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { FaPlay } from "react-icons/fa";
import Album from '../components/Album';
import TextArea from 'antd/es/input/TextArea';

const Song = () => {
    return (
        <>
            <section>
                <div className="container-fluid">
                    <div className="col-12">
                        <div className="row">
                            <div className=" col-5">

                                <div className="album-info text-white mt-4 d-flex justify-content-between">
                                    <div>
                                        <h3 className="">
                                            What I Was Made For
                                        </h3>
                                        <div className="d-flex gap-1">
                                            <p className="">
                                                Happier Than Ever
                                            </p>
                                            &bull;
                                            <p className="">
                                                2023
                                            </p>
                                            &bull;
                                            <p className="">
                                                11min 42sec
                                            </p>

                                        </div>

                                    </div>
                                    <div className='d-flex gap-2 align-items-center'>
                                        <img src="https://i.scdn.co/image/ab676161000051748278b782cbb5a3963db88ada" alt="" className='rounded-pill' style={{ height: '60px' }} />
                                        <h4>Tyler, The Creator</h4>
                                    </div>
                                </div>
                                <div className="text-white mt-4 d-flex gap-3 align-items-center">
                                    <h4 className='d-flex'>Genres</h4>
                                    <div className="d-flex gap-1 ">
                                        <p>
                                            Rap
                                        </p>
                                        &bull;
                                        <p>
                                            Rap
                                        </p>
                                        &bull;
                                        <p>
                                            Rap
                                        </p>
                                        &bull;
                                        <p>
                                            Rap
                                        </p>

                                    </div>
                                </div>
                                <div className="text-white mt-4">
                                    <h4>Description</h4>
                                    <p>Flower Boy is the fourth studio album by American rapper Tyler, the Creator. The album was released on July 21, 2017, by Columbia Records.</p>
                                </div>
                                <div className="text-white mt-4">
                                    <h4>Lyrics</h4>
                                    <div className='text-white fs-4 lh-l bg-secondary p-4 rounded-3 mt-3 fw-semibold'>
                                        <p>
                                            I used to float, now I just fall down<br />
                                            I used to know but I'm not sure now<br />
                                            What I was made for<br />
                                            What was I made for?<br /><br />
                                            Takin' a drive, I was an ideal<br />
                                            Looked so alive, turns out I'm not real<br />
                                            Just something you paid for<br />
                                            What was I made for?<br /><br />
                                            'Cause I, I<br />
                                            I don't know how to feel<br />
                                            But I wanna try<br />
                                            I don't know how to feel<br />
                                            But someday, I might<br />
                                            Someday, I might<br /><br />
                                            When did it end? All the enjoyment<br />
                                            I'm sad again, don't tell my boyfriend<br />
                                            It's not what he's made for<br />
                                            What was I made for?<br /><br />
                                            'Cause I, 'cause I<br />
                                            I don't know how to feel<br />
                                            But I wanna try<br />
                                            I don't know how to feel<br />
                                            But someday I might<br />
                                            Someday I might<br /><br />
                                            Think I forgot how to be happy<br />
                                            Something I'm not, but something I can be<br />
                                            Something I wait for<br />
                                            Something I'm made for<br />
                                            Something I'm made for<br />
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-7">



                                <div className="mt-4">
                                    <h4 className='text-white'>Comments</h4>
                                    <TextArea rows={3} placeholder="Leave your comment here" maxLength={4} />
                                    <div className="d-flex justify-content-end">
                                        <button className='border-0 px-3 py-2 fw-bold col-1 rounded-pill mt-2 text-center text-decoration-none bg-black' style={{ color: "#1ed760" }} type="submit">Cancel</button>
                                        <button className='border-0 px-3 py-2 fw-bold col-2 rounded-pill mt-2 text-dark text-center text-decoration-none' style={{ background: "#1ed760" }} type="submit">Comment</button>
                                    </div>
                                    <div className="comment border-top border-dark pt-3 mt-4">
                                        <div className='d-flex gap-2 align-items-center text-white'>
                                            <img src="https://i.scdn.co/image/ab676161000051748278b782cbb5a3963db88ada" alt="" className='rounded-pill' style={{ height: '40px' }} />
                                            <h6>Tyler, The Creator</h6>
                                        </div>
                                        <p className='mt-2 text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed debitis itaque ipsam. Rem sapiente, molestiae dolorem aliquid libero suscipit accusamus aliquam assumenda alias dolores cum illum quidem repudiandae odio cumque?</p>
                                    </div>
                                    <div className="comment border-top border-dark pt-3 mt-4">
                                        <div className='d-flex gap-2 align-items-center text-white'>
                                            <img src="https://i.scdn.co/image/ab676161000051748278b782cbb5a3963db88ada" alt="" className='rounded-pill' style={{ height: '40px' }} />
                                            <h6>Tyler, The Creator</h6>
                                        </div>
                                        <p className='mt-2 text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed debitis itaque ipsam. Rem sapiente, molestiae dolorem aliquid libero suscipit accusamus aliquam assumenda alias dolores cum illum quidem repudiandae odio cumque?</p>
                                    </div>
                                    <div className="comment border-top border-dark pt-3 mt-4">
                                        <div className='d-flex gap-2 align-items-center text-white'>
                                            <img src="https://i.scdn.co/image/ab676161000051748278b782cbb5a3963db88ada" alt="" className='rounded-pill' style={{ height: '40px' }} />
                                            <h6>Tyler, The Creator</h6>
                                        </div>
                                        <p className='mt-2 text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed debitis itaque ipsam. Rem sapiente, molestiae dolorem aliquid libero suscipit accusamus aliquam assumenda alias dolores cum illum quidem repudiandae odio cumque?</p>
                                    </div>
                                    <div className="comment border-top border-dark pt-3 mt-4">
                                        <div className='d-flex gap-2 align-items-center text-white'>
                                            <img src="https://i.scdn.co/image/ab676161000051748278b782cbb5a3963db88ada" alt="" className='rounded-pill' style={{ height: '40px' }} />
                                            <h6>Tyler, The Creator</h6>
                                        </div>
                                        <p className='mt-2 text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed debitis itaque ipsam. Rem sapiente, molestiae dolorem aliquid libero suscipit accusamus aliquam assumenda alias dolores cum illum quidem repudiandae odio cumque?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Song