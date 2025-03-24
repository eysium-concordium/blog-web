import { useState } from "react";



function Home() {


  const HeartButton = () => {
    const [liked, setLiked] = useState(false);
  
    const handleClick = () => {
      setLiked(!liked);
      alert(liked ? "You unliked this!" : "You liked this!");
    };
  
    return (
      <svg
        onClick={handleClick}
        height="30"
        width="30"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          cursor: "pointer",
          transition: "fill 0.3s ease",
        }}
        fill={liked ? "red" : "currentColor"} 
      >
        <path d="M20.16 5A6.29 6.29 0 0 0 12 4.36a6.27 6.27 0 0 0-8.16 9.48l6.21 6.22a2.78 2.78 0 0 0 3.9 0l6.21-6.22a6.27 6.27 0 0 0 0-8.84Zm-1.41 7.46l-6.21 6.21a.76.76 0 0 1-1.08 0l-6.21-6.24a4.29 4.29 0 0 1 0-6a4.27 4.27 0 0 1 6 0a1 1 0 0 0 1.42 0a4.27 4.27 0 0 1 6 0a4.29 4.29 0 0 1 .08 6Z" />
      </svg>
    );
  };
  return (
    <>

<div
  style={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    position: "absolute",
    left: 30,
    padding: "5px 10px",
    borderRadius: "10px",
    backgroundColor: "#2a2b38",
    color: "white",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2929";
    e.currentTarget.style.color = "white";
    e.currentTarget.style.boxShadow = "0 0 10px #2C2929, 0 0 20px #ffeba7";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2a2b38";
    e.currentTarget.style.color = "white";
    e.currentTarget.style.boxShadow = "none";
  }}
>
  <img
    src="https://th.bing.com/th/id/OIP.xi9CrNdV4GUi3TkjvXRNtQHaJQ?w=825&h=1031&rs=1&pid=ImgDetMain"
    style={{
      height: "40px",
      width: "30px",
      objectFit: "cover",
      borderRadius: "50%",
      transition: "all 0.3s ease-in-out",
    }}
  />
  Om Prasad
</div>

<div
  style={{
    background: "#2C2929",
    width: "700px",
    height: "50px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    justifySelf: "center",
    marginTop: "30px",
    boxShadow: "0px 4px 10px rgba(253, 234, 169, 0.5)", 
  }}
>
  {["Home", "Search", "Notification", "Message"].map((text, index) => (
    <h1 key={index} style={{ margin: 0 }}>
      <a
        href="#"
        style={{
          textDecoration: "none",
          color: "white",
          fontSize: "18px",
          fontWeight: "bold",
          transition: "transform 0.3s ease, color 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.2)";
          e.currentTarget.style.color = "#ffeba7"; 
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.color = "white";
        }}
      >
        {text}
      </a>
    </h1>
  ))}
</div>


<div style={{
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  flexDirection:'column'
}}>
  <div style={{
    width:'700px',
    background:'#2C2929',
    marginTop:'20px',
    borderRadius:'4px'
  }}>
    <div style={{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      
    }}>
      <div style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:'10px'
      }}>

      <img src="https://th.bing.com/th/id/OIP.tsmF9A3EdD726mspKVbFPgHaKb?rs=1&pid=ImgDetMain" style={{
        height:'30px',
        width:'30px',
        borderRadius:'50px'
      }} />
      <h3>
        Jhon Doe
        
      </h3>
      </div>
      <svg height="20" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M14 18a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0-6a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2-4a2 2 0 1 0 0-4a2 2 0 0 0 0 4" fill="currentColor"/>
</svg>
    </div>

    <div style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      borderTopWidth:'1px',
      borderColor:'#959393',
      padding:'5px'
    }}>
      <img src="https://th.bing.com/th/id/OIP.tsmF9A3EdD726mspKVbFPgHaKb?rs=1&pid=ImgDetMain" alt="" />
    </div>

    <div style={{
      display:'flex',
      flexDirection:'row',
borderTopWidth:'1px',
borderColor:'#959393',
padding:'5px',
justifyContent:'space-between'
    }}>
      <div style={{
        display:'flex',
        flexDirection:'row',
        gap:'10px',
      }}>
        <HeartButton/>
        <a href="#">

<svg height="30" width="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M12 2A10 10 0 0 0 2 12a9.89 9.89 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20Zm0 18H5.41l.93-.93a1 1 0 0 0 0-1.41A8 8 0 1 1 12 20Z" fill="currentColor"/>
</svg>
        </a>
        <a href="#">

<svg height="30" width="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8m-4-6l-4-4l-4 4m4-4v13" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
        </a>

      </div>

      <div style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:'5px'
      }}>
      <svg height="20" width="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
	<path d="M2.727 1.364c-.753 0-1.363.61-1.363 1.363v14.546c0 .753.61 1.363 1.363 1.363h14.546c.753 0 1.363-.61 1.363-1.363V2.727c0-.753-.61-1.363-1.363-1.363H2.727ZM17.273 0A2.727 2.727 0 0 1 20 2.727v14.546A2.727 2.727 0 0 1 17.273 20H2.727A2.727 2.727 0 0 1 0 17.273V2.727A2.727 2.727 0 0 1 2.727 0h14.546Zm-3.318 2.435a.682.682 0 0 0-.682.682V5a.682.682 0 0 0 1.364 0V3.117a.682.682 0 0 0-.682-.682ZM2.744.94l1.363.006l-.021 4.446c-.03.406.1.734.415 1.037c.313.301.744.438 1.384.4l8.625.004c.482-.055.821-.213 1.05-.469c.228-.257.346-.603.345-1.073V.942h1.364v4.347c.001.789-.227 1.46-.692 1.982c-.465.522-1.114.825-1.99.92h-8.66c-.959.059-1.765-.197-2.371-.78c-.604-.58-.89-1.304-.832-2.072l.02-4.4Z" fill="currentColor"/>
</svg>

      </div>
    </div>
  </div>

  <div style={{
    width:'700px',
    background:'#2C2929',
    marginTop:'20px',
    borderRadius:'4px'
  }}>
    <div style={{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      
    }}>
      <div style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:'10px'
      }}>

      <img src="https://th.bing.com/th/id/OIP.tsmF9A3EdD726mspKVbFPgHaKb?rs=1&pid=ImgDetMain" style={{
        height:'30px',
        width:'30px',
        borderRadius:'50px'
      }} />
      <h3>
        Jhon Doe
        
      </h3>
      </div>
      <svg height="20" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M14 18a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0-6a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2-4a2 2 0 1 0 0-4a2 2 0 0 0 0 4" fill="currentColor"/>
</svg>
    </div>

    <div style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      borderTopWidth:'1px',
      borderColor:'#959393',
      padding:'5px'
    }}>
      <img src="https://th.bing.com/th/id/OIP.tsmF9A3EdD726mspKVbFPgHaKb?rs=1&pid=ImgDetMain" alt="" />
    </div>

    <div style={{
      display:'flex',
      flexDirection:'row',
borderTopWidth:'1px',
borderColor:'#959393',
padding:'5px',
justifyContent:'space-between'
    }}>
      <div style={{
        display:'flex',
        flexDirection:'row',
        gap:'10px',
      }}>
        <HeartButton />
        <a href="#">

<svg height="30" width="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M12 2A10 10 0 0 0 2 12a9.89 9.89 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20Zm0 18H5.41l.93-.93a1 1 0 0 0 0-1.41A8 8 0 1 1 12 20Z" fill="currentColor"/>
</svg>
        </a>
        <a href="#">

<svg height="30" width="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8m-4-6l-4-4l-4 4m4-4v13" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
        </a>

      </div>

      <div style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:'5px'
      }}>
      <svg height="20" width="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
	<path d="M2.727 1.364c-.753 0-1.363.61-1.363 1.363v14.546c0 .753.61 1.363 1.363 1.363h14.546c.753 0 1.363-.61 1.363-1.363V2.727c0-.753-.61-1.363-1.363-1.363H2.727ZM17.273 0A2.727 2.727 0 0 1 20 2.727v14.546A2.727 2.727 0 0 1 17.273 20H2.727A2.727 2.727 0 0 1 0 17.273V2.727A2.727 2.727 0 0 1 2.727 0h14.546Zm-3.318 2.435a.682.682 0 0 0-.682.682V5a.682.682 0 0 0 1.364 0V3.117a.682.682 0 0 0-.682-.682ZM2.744.94l1.363.006l-.021 4.446c-.03.406.1.734.415 1.037c.313.301.744.438 1.384.4l8.625.004c.482-.055.821-.213 1.05-.469c.228-.257.346-.603.345-1.073V.942h1.364v4.347c.001.789-.227 1.46-.692 1.982c-.465.522-1.114.825-1.99.92h-8.66c-.959.059-1.765-.197-2.371-.78c-.604-.58-.89-1.304-.832-2.072l.02-4.4Z" fill="currentColor"/>
</svg>

      </div>
    </div>
  </div>

  <div style={{
    position:'fixed',
    color:'white',
    padding:'10px',
    right:100,
    bottom:20,
    width:150,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:'20px',
    transition: "all 0.3s ease-in-out",
    cursor:'pointer'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#2C2929";
    e.currentTarget.style.color = "white";
    e.currentTarget.style.boxShadow = "0 0 10px #2C2929, 0 0 20px #ffeba7";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#2a2b38";
    e.currentTarget.style.color = "white";
    e.currentTarget.style.boxShadow = "none";
  }}
  >
    <svg height="20" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2v-6Z" fill="currentColor"/>
</svg>
    New
  </div>
</div>

    </>
  );
}

export default Home;
