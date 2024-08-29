import React from "react";

const ContactPage = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 mx-auto md:max-w-6xl">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4">If you have any questions, please contact:</p>
            <div className="mb-6">
                <p className="font-bold">Prof. Yang Yang</p>
                <p>
                    Email:{" "}
                    <a
                        href="mailto:yangyang@cs.sjtu.edu.cn"
                        className="text-blue-600 hover:underline"
                    >
                        yangyang@cs.sjtu.edu.cn
                    </a>
                </p>
                <p>
                    Department of Computer Science and Engineering, and Key
                    Laboratory of Shanghai Education Commission for Intelligent
                    Interaction and Cognitive Engineering, Shanghai Jiao Tong
                    University
                </p>
                <p>800 Dongchuan Road, Shanghai 200240, China</p>
            </div>
            <div className="mb-6">
                <p className="font-bold">Gufeng Yu</p>
                <p>
                    Email:{" "}
                    <a
                        href="mailto:jm5820zz@sjtu.edu.cn"
                        className="text-blue-600 hover:underline"
                    >
                        jm5820zz@sjtu.edu.cn
                    </a>
                </p>
            </div>
            <p>
                Welcome to visit our group website!{" "}
                <a
                    href="https://compbio.sjtu.edu.cn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-bold hover:underline"
                >
                    https://compbio.sjtu.edu.cn
                </a>
            </p>
        </div>
    );
};

export default ContactPage;
