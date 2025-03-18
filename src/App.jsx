import './App.css';
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Homepage from "./component/pre-login/page/Homepage.jsx";
import ProductTemplate from "./component/pre-login/layout-app/sub-component/Products.jsx";
import useDeviceType from "./utilities/ResizePage.jsx";
import Contact from "./component/pre-login/layout-app/sub-component/Contact.jsx";
import About from "./component/pre-login/layout-app/sub-component/About.jsx";
import MoreProduct from "./component/pre-login/layout-app/sub-component/MoreProduct.jsx";
import Login from "./component/login.jsx";
import Dashboard from "./component/post-login/dashboard.jsx";

function App() {
    const deviceType = useDeviceType();
    console.log(deviceType)
    const auth = false;
    return (
        <>
            {auth && <div className={'flex items-center background' + (deviceType === 'Desktop' ? ' p-[5rem]' : '')}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Homepage/>}></Route>
                        <Route path="service" element={<ProductTemplate/>}></Route>
                        <Route path="more-service/:id" element={<MoreProduct/>}></Route>
                        <Route path="contact" element={<Contact/>}></Route>
                        <Route path="about" element={<About/>}></Route>
                        <Route path="login" element={<Login/>}></Route>
                    </Routes>
                </BrowserRouter>
            </div>}
                <div className={'p-[1rem]'}>
                <BrowserRouter>
                    <Routes>
                        <Route path="homepage" element={<Dashboard/>}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default App;
