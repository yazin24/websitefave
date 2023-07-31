import React from 'react'

const Appointmentform = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='cleaning bg-violet-700 w-full h-24 md:h-52'>
                <div className='teamcleaningcolor'>

                </div>
            </div>
            <div className=''>
                <section className="bg-gray-100">
                    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                            <div className="lg:col-span-2 lg:py-12">
                                <p className="max-w-xl text-lg">
                                    At the same time, the fact that we are wholly owned and totally
                                    independent from manufacturer and other group control gives you
                                    confidence that we will only recommend what is right for you.
                                </p>

                                <div className="mt-8">
                                    <a href="" className="text-2xl font-bold text-pink-600">
                                        +232-349-0000
                                    </a>

                                    <address className="mt-2 not-italic">
                                        Fave Ecommerce Ph
                                    </address>
                                </div>
                            </div>

                            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                                <form action="" className="space-y-4">
                                    <div>
                                        <label className="sr-only" for="name">Name</label>
                                        <input className="w-full rounded-lg border border-gray-200 p-3 text-sm" placeholder="Name" type="text" id="name"/>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div>
                                            <label className="sr-only" for="email">Email</label>
                                            <input className="w-full rounded-lg border border-gray-200 p-3 text-sm" placeholder="Email address" type="email" id="email"/>
                                        </div>

                                        <div>
                                            <label className="sr-only" for="phone">Phone</label>
                                            <input className="w-full rounded-lg border border-gray-200 p-3 text-sm" placeholder="Phone Number" type="tel" id="phone"/>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="sr-only" for="message">Message</label>

                                        <textarea
                                            className="w-full rounded-lg border border-gray-200 p-3 text-sm" placeholder="Message" rows="8" id="message">

                                         </textarea>
                                    </div>

                                    <div className="mt-4">
                                        <button type="submit" className="inline-block w-full rounded-lg bg-violet-700 px-5 py-3 font-medium text-white sm:w-auto">
                                            Set Appointment
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Appointmentform