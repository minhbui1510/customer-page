import {InputNumber} from 'primereact/inputnumber';
import {FloatLabel} from 'primereact/floatlabel';
import {FaFacebook, FaPhone} from "react-icons/fa";
import {SiGmail} from "react-icons/si";
import {
    FacebookAuthProvider,
    GoogleAuthProvider,
    PhoneAuthProvider,
    RecaptchaVerifier,
    signInWithPopup
} from "@firebase/auth";
import {auth} from '../firebase/firebase.jsx';
import {useState} from "react";

const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState();

    const signInWithFacebook = async () => {
        try {
            const provider = new FacebookAuthProvider();
            const result = await signInWithPopup(auth, provider);
            console.log(result)
        } catch (e) {
            console.error(e)
        }
    }
    const signInWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            console.log(result)
        } catch (e) {
            console.error(e)
        }
    }

    const setUpRecaptcha = async () => {
        const recaptchaVerifier = new RecaptchaVerifier("recaptcha-container", auth);
        recaptchaVerifier.render();
        try {
            const setupCaptcha = await setUpRecaptcha(phoneNumber);
            console.log(setupCaptcha)
        }catch (e) {
            console.log(e)
        }
    }

    const signInWithPhoneNumber = async () => {
        try {
            const provider = new PhoneAuthProvider();
            // const result = await s
        } catch (e) {

        }
    }
    return (
        <>
            <div className="flex flex-col justify-center items-center w-full login-container">
                <p className="w-6/12 text-center text-xl">
                    Đăng nhập
                </p>
                <div className="w-full md:w-6/12">
                    <div className="login-form">
                        <span>+84</span>
                        <FloatLabel>
                            <InputNumber id="phone" useGrouping={false} className="custom-input"
                                         placeholder="Số điện thoại " onChange={setPhoneNumber}/>
                        </FloatLabel>
                    </div>
                    <div className="w-full login-more mt-2">
                        <button className="btn phone-btn" onClick={setUpRecaptcha}>
                            <FaPhone/> Đăng nhập bằng số điện thoại
                        </button>
                    </div>
                    <div className="w-full flex text-center items-center">
                        <div className="line"></div>
                        <span className="px-5">Hoặc</span>
                        <div className="line"></div>
                    </div>
                    <div className="w-full login-more">
                        <button className="btn fb-btn" onClick={signInWithFacebook}>
                            <FaFacebook/> Đăng nhập bằng facebook
                        </button>
                        <button className="btn gmail-btn" onClick={signInWithGoogle}>
                            <SiGmail/> Đăng nhập bằng Gmail
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Login;
