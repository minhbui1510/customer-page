import LayoutWeb from "../layout-web/index.jsx";
import LayoutApp from "../layout-app/index.jsx";
import useDeviceType from "../../../utilities/ResizePage.jsx";

export const Homepage = () => {
    const deviceType = useDeviceType();
    return (
        <>
            <div className={deviceType === 'App' ? 'w-full' : '' }>
                {deviceType === 'Desktop' && <LayoutWeb/>}
                {deviceType === 'App' && <LayoutApp/>}
            </div>
        </>
    )
}
export default Homepage;