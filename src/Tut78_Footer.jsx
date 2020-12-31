import React from "react";

const Footer=()=>{

    const year=new Date().getFullYear();
    // console.log(year);
 return(
     <>
          <footer className="w-100 bg-light text-center">
<p>© {year} Trendy Technologies. All Rights Reserved. | Terms and Conditions Apply</p>
          </footer>

     </>
 )

}

export default Footer;