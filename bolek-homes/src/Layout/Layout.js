
import React from "react";
import HeaderBar from "./Blocks/HeaderBar";
import FooterBlock from "./Blocks/FooterBlock";






function Layout(props){

    
    return(
        <div maxWidth={false} disableGutters {...props}>
        <HeaderBar fillHeader={props.fillHeader}/>
        <div>
            {props.children}
        </div>
        <FooterBlock />
    </div >
    )
}

export default Layout