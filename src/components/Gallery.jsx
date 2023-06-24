import React from 'react';
import gallery1 from "../assets/gallery/gallery1.png"
import gallery2 from "../assets/gallery/gallery2.png"
import gallery3 from "../assets/gallery/gallery3.png"

const Gallery = () => {
    return (
        <div className='max-w-[1240px] mx-auto px-3'>
            <div
                className='my-20 border-indigo-500 border-x-4'>
                <h1 className='text-4xl font-bold text-center md:text-6xl'>Our <span className='text-[#4c5696]'>Gallery</span></h1>
                <p className='my-3 text-xl text-center'>This is our top student picture</p>
            </div>
            <div className='grid gap-10 px-3  md:grid-cols-3'>
                <div className='p-3 transition duration-300 ease-in-out scale-105 border-2 border-gray-700 shadow-lg hover:shadow-inner shadow-black'>
                    <img className='w-full h-full transition duration-300 ease-in-out hover:scale-105' src="https://lh3.googleusercontent.com/pw/AJFCJaULLOi26Qalh9JieA8bTnfCQ8wiH05n8T9RiTwb3R80nDmgi1rxaoNBnWtmTKvNaBcFjrVRW7Xl2W-7SU2ibXwHeV1rKnIzAEC9NTyZL7Lx9ZslgMSc6S3M26A0Ygbh5mK-P1QeBQFi2l90Y-P_5Lm_w1tpBkMljHUoFNWkpfHFLO5HT4NhQlwWcu9YdYGHYNOdhmE2o_Nt993xVlEbNHlR6CiGm-tbrYvjrx9MaiQbqkTcyw1eaJcqozFScqn2OumLw0YNr7Eg1atPVnikp0higpgijmCPJ_pWE_qagkYpoj2ttTeoJFbdy0Bx4S0wmOGjrVmRqWGeqcdZWuOLc27FoTKY9aibC9Qjo8G7Z3CcPdebmpisE3CFRLZIaZA93zCYDScZpzCNaq8sUKW9TxijYCOKuVV39O75_S_gUA_7L_naE9JsCZ9mG6kjhAz0tQDLZwYUXr46I0tmdsEq5bcTyTYVURzm3SkqqMk-FG2PD7i6tipf0C5kzD5zQCqSzyM4UXu3L_S20u9hmqMg6yqcFJDDCtIoWIzq4K1bUqPfXZ1D-uVBDThCrBsNJpA-VyD2ZoCE5_Qmm0nTCPVsnJ2HTt_W3tTpzyq1yniJEx0TxfKuokHFTJNIHhX8ZxDc_0vPTcMTbTVX0wqB4X970KQS3bFpe3qd7GlmyUC4cZSBkaBhi83-tNdFlxWd15KUA9eJ9HRNCz7ARcjhCFHgYgp-1uTdi460sSCfHOe2Fc29--Xel7PzlGojTCpcBQX9TBgH1sgDasKKFQ4N7SRbK2ML01uPCsd24_AH0dlL7EPuVPqpTG_yLjYYSqsae58adaVZYpCaCOYOqRXgxeJDb67XdJe4F7M1cxtLCxoNtH1ueVO0wmo0jQ6EXpHtBuxDRcnoVRsLfWKnHZ75tHc0KN1jCQ=w1761-h990-s-no?authuser=0" alt="" />
                    
                </div>
                <div className='p-3 transition duration-300 ease-in-out scale-105 border-2 border-gray-700 shadow-lg hover:shadow-inner shadow-black'>
                    <img className='w-full h-full transition duration-300 ease-in-out hover:scale-105' src="https://lh3.googleusercontent.com/pw/AJFCJaWLeS26w5rq7noASclzFaWwj4HuDo17zkFa25pxYa-H2YWpC0-fsGwsr3yGm-jJJrsw4RJyzi5mJn0t0FSCJJUGh6r6s89G-WTXCNIBSWjPSROUD732Au1_5ryGQtdiOLCq6gXc6ZQBmVmJgpNGWaISN6VyD6o-tvNUhFeN80AXvAdrAJD9ZGpAaETZiIueM0LOMlEBBLd7qgpfo0NGGV93WDgcDRCtqiy2iVnSBN0ScxcV6q1fcweEM3DQm1KvH2dhovnfQjFZ_IjtRsNgBfn9Z61dph7cRdWpZawA1kgrhkfUmqiutg8A2EuhmSKGj_eurJ7UJygOdaOarxyu6dU9PStBF668Vqp1ii50ToZ6IZDK0nGj6cfZy9IalzxJ0mb7Ap4cBkf4b7d6g-rO67gO67zuj3E1OId4TFYSfjEE8BXnaU7PANZqs8SG6WzE-bYsnUSj7dHKhYmIq6Jpp7pLg0dGUAX8TEVydCWr7cJ7MkibUtPIoQTswIy5m0C1KFGBccma8pf-nldCJ7sa9Pb4J5ge4i2wFkFnU_YcB6ALqrRNqWqOCRSxLqeetJdgbwkdr89LgBAEudCS7ZeI_iZ16-mbDKRbmyOSGvjQ-LVyri-_mb27UDjgguxthayCh1KYR17xSFeX9QaC0EWNN7MRPFs1KGzxSeuPDYvYiGsZclqeyTKuqTXSwPEuOw24oXYbMbLthkxr2jr7kBLV_K9E2aM-UEF2rn8usdlRA2-V_C-GWOGIoS1dbW1AkhOQhR6ObtfWMuWJUpCJbZd3mdkOK1rN0Bf3NulXDy_PSpF7KKmMv8q-rdzoFublvcogQhrywBbJCSdKgxXaKeXzPBFGGfEHX283HyjyL0hAMo3jU6k2T5z4tnFUso7SbloHdtGYuiSVz51Pd4VvW35lKTy2wg=w1761-h990-s-no?authuser=0" alt="" />
                    
                </div>
                <div className='p-3 transition duration-300 ease-in-out scale-105 border-2 border-gray-700 shadow-lg hover:shadow-inner shadow-black'>
                    <img className='w-full h-full transition duration-300 ease-in-out hover:scale-105' src="https://lh3.googleusercontent.com/pw/AJFCJaWBI3w06iUvq_tCDNXwUlmwLbcEKyOgFL5PPyQG20m0s6geou9pIqChTIPCNu-QhRi8caGyHb8SKZ2CD6FfA2vjNy-7wYqEmVvN6oPVphaY6kNz3FCXODeb8isE0gOIkpWPd5mgeh8XIElEBPnaKAmfyMSPaM2Fw0SmAFAAHrgzoi9KEiDxMQwG4l8SY6w0wK93uHIjhDfQQiIg8N1ioLNgk4Kc9Y4p-lUzBRKwp43prQ0xtLgtJR_cDj-HVka5s_i9GwkDBavDalU9H41dum9gF2C0FR2FzRiTJSmMl7hfvar7_xyllOTmMYtVCJdivOzxEFdFH5gEf87DtjffpdSZJUACu5peGZYfWe2VJ7UPryoc0aXTxrgXcoGnCYSAiiNYjgra3ovCMmspGpahWnDz_GEO0jhEaU5P8shLBrC3uU1f1H0B5iRxEU-nv789EkhI386PKsm3c9VN5vgYyKxp72z4zBDhXrElQx99_p6nrt7XUIxvBA-WJRGviCoxGOb25CYwee0xLeV3K-NE3gC4oBZ0SXpK0pMXAG-EA-daayOad5GCg-Dxgi8XqftEYNAPEPeGjexAko88L5tlwTDCSM3Gc6YqshfC4FcC6SSgbV3zhz2EEAfzJpY13PhCVIMv49AUb4zmAdrcrWcNVn7lE33fbCrLYk2Nm7XXRv3TlipHF9194ILoCBM8A1HK2GBzTB4saDtSsqW9iwSpLoGB56qKahT4GiczCHzHVcvjfl7QrBv4FZxxjKlMem-VcQ6odKkRBH7jBp0AG3DfXCLvoBgpH9ANfFMf4bI0zjvUMwJHN21pdUqJzvxunkXeSJ4tRrQy3jjL-xLUs8vCaXwkqsEH7K2FdPVkuCfT7b1qsqWMb4F5Cg5HQXTOhtnrXsOe5ljnuBanzKe1K5eVRvhOGA=w1761-h990-s-no?authuser=0" alt="" />
                    
                </div>
                <div className='p-3 transition duration-300 ease-in-out scale-105 border-2 border-gray-700 shadow-lg hover:shadow-inner shadow-black'>
                    <img className='w-full h-full transition duration-300 ease-in-out hover:scale-105' src={gallery1} alt="" />
                    
                </div>
                <div className='p-3 transition duration-300 ease-in-out scale-105 border-2 border-gray-700 shadow-lg hover:shadow-inner shadow-black'>
                    <img className='w-full h-full transition duration-300 ease-in-out hover:scale-105' src={gallery2} alt="" />
                    
                </div>
                <div className='p-3 transition duration-300 ease-in-out scale-105 border-2 border-gray-700 shadow-lg hover:shadow-inner shadow-black'>
                    <img className='w-full h-full transition duration-300 ease-in-out hover:scale-105' src={gallery3} alt="" />
                    
                </div>
            </div>
        </div>
    );
};

export default Gallery;