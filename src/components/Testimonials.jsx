import React from "react";
import { testimonials } from "../data";

const Testimonials = () => {
    return (
        <div className="font-opensans sm:px-10 px-5 py-5 my-5 space-y-5 bg-mint-500">
            <h1 className="sm:text-3xl text-xl font-bold text-center">Testimonials</h1>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-7">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="shadow-md shadow-darkblue p-5 rounded-md space-y-3 bg-white"
                    >
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="rounded-full sm:w-20 w-14 sm:h-20 h-14 object-cover shadow-md  shadow-golden"
                        />
                        <h1 className="sm:text-2xl text-xl font-bold">{testimonial.name}</h1>
                        <p className="md:text-sm text-[12px]">{testimonial.feedback}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
