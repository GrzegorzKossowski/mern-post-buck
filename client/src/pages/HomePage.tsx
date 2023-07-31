import {
    BsFillPersonPlusFill,
    BsGear,
    BsHeart,
    BsImage,
    BsPencil,
    BsPersonPlusFill,
    BsShare,
} from 'react-icons/bs';
import {
    BiCommentDetail,
    BiSolidPaperPlane,
} from 'react-icons/bi';
import {
    FaLinkedin,
    FaFacebook,
} from 'react-icons/fa';
interface HomePageProps {}

const HomePage = ({ ...restProps }: HomePageProps) => {
    return (
        <section className='h-screen mt-[100px] mx-10 inline-grid grid-cols-1 md:grid-cols-5 gap-8'>
            <div className='md:col-span-2'>
                <div className='border p-4 mb-8'>
                    <div className='flex items-center justify-between border-b-[1px] pb-4 mb-4 '>
                        <div className='flex  gap-4'>
                            <div className='flex overflow-hidden'>
                                <img
                                    className='inline-block h-14 w-14 rounded-full border-2'
                                    src='https://randomuser.me/api/portraits/women/68.jpg'
                                    alt=''
                                />
                            </div>
                            <div>
                                <h4 className='text-2xl'>Mary Sue</h4>
                                <span>2 friends</span>
                            </div>
                        </div>
                        <BsGear size={26} />
                    </div>
                    <div className='flex flex-col border-b-[1px] pb-4 mb-4'>
                        <div>Someantonio, CA</div>
                        <div>Some something</div>
                    </div>
                    <div className='flex flex-col border-b-[1px] pb-4 mb-4'>
                        <div className='flex justify-between'>
                            <span>Wieved profile</span>
                            <span>6543</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Impressions</span>
                            <span>1253</span>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='text-xl font-medium mb-3'>
                            Social profiles
                        </h4>
                        <div className='flex gap-4 items-center'>
                            <FaFacebook size={32} />
                            <div className=''>
                                <h5>Twitter</h5>
                                <span>Social network</span>
                            </div>
                            <BsPencil className='ms-auto' />
                        </div>
                        <div className='flex gap-4 items-center'>
                            <FaLinkedin size={32} />
                            <div className=''>
                                <h5>Twitter</h5>
                                <span>Social network</span>
                            </div>
                            <BsPencil className='ms-auto' />
                        </div>
                    </div>
                </div>
                <div className='border p-4'>
                    <h1 className='text-2xl mb-4'>Friends list</h1>
                    <div className='flex items-center justify-between pb-4 '>
                        <div className='flex gap-4 items-center'>
                            <div className='flex overflow-hidden'>
                                <img
                                    className='inline-block h-10 w-10 rounded-full border-2'
                                    src='https://randomuser.me/api/portraits/women/68.jpg'
                                    alt=''
                                />
                            </div>
                            <div>
                                <h4 className='text-xl'>Mary Sue</h4>
                                <small>Occupation</small>
                            </div>
                        </div>
                        <BsPersonPlusFill
                            size={36}
                            className='border p-1 rounded-full'
                        />
                    </div>
                    <div className='flex items-center justify-between pb-4 '>
                        <div className='flex gap-4 items-center'>
                            <div className='flex overflow-hidden'>
                                <img
                                    className='inline-block h-10 w-10 rounded-full border-2'
                                    src='https://randomuser.me/api/portraits/men/68.jpg'
                                    alt=''
                                />
                            </div>
                            <div>
                                <h4 className='text-xl'>John Doe</h4>
                                <small>Occupation</small>
                            </div>
                        </div>
                        <BsPersonPlusFill
                            size={36}
                            className='border p-1 rounded-full'
                        />
                    </div>
                </div>
            </div>
            <div className='md:col-span-3'>
                <div className='border p-4 mb-8'>
                    <div className='flex gap-8 pb-4 mb-4 border-b-[1px] '>
                        <div className='overflow-hidden min-w-fit hidden lg:flex'>
                            <img
                                className='inline-block h-16 w-16 rounded-full border-2'
                                src='https://randomuser.me/api/portraits/women/68.jpg'
                                alt=''
                            />
                        </div>
                        <textarea className='' />
                    </div>
                    <div className='flex justify-between'>
                        <button className='border px-3 py-2 flex items-center justify-between gap-2 rounded-full'>
                            <BsImage /> Image
                        </button>
                        <button className='bg-slate-200 text-slate-900 px-3 py-2 flex items-center justify-between gap-2 rounded-full font-bold'>
                            <BiSolidPaperPlane />
                            Post
                        </button>
                    </div>
                </div>
                <div className='border p-4 mb-8'>
                    <div className='flex items-center justify-between border-b-[1px] pb-4 mb-4 '>
                        <div className='flex  gap-4'>
                            <div className='flex overflow-hidden'>
                                <img
                                    className='inline-block h-14 w-14 rounded-full border-2'
                                    src='https://randomuser.me/api/portraits/women/45.jpg'
                                    alt=''
                                />
                            </div>
                            <div>
                                <h4 className='text-2xl'>Gary Reynolds</h4>
                                <span>Location</span>
                            </div>
                        </div>
                        <BsFillPersonPlusFill size={26} />
                    </div>
                    <div className='my-4'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Harum, saepe. Nobis amet provident, molestias
                        praesentium facilis debitis ad ipsum quam voluptates,
                        aliquid fugit aspernatur quasi odit eius saepe alias
                        sunt.
                    </div>
                    <div className='my-4'>
                        <img
                            className='w-full'
                            src='https://images.unsplash.com/photo-1690475565796-e1c097a15fe8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                            alt=''
                        />
                    </div>
                    <div className='flex gap-4'>
                        <div className='flex items-center gap-4'>
                            <BsHeart size={28} />
                            <span className='text-xl'>45</span>
                        </div>
                        <div className='flex items-center gap-4'>
                            <BiCommentDetail size={28} />
                            <span className='text-xl'>45</span>
                        </div>
                        <div className='ms-auto'>
                            <BsShare size={28} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
