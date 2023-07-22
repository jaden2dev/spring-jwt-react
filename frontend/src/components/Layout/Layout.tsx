import React, {Fragment} from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

type Props = {
    children?: React.ReactNode
}


const Layout: React.FC<Props> = (props) => {
    return (
        <Fragment>
            <Navigation/>
            <hr/>
            <main>{props.children}</main>
            <hr/>
            <Footer/>
        </Fragment>
    )
}

export default Layout;