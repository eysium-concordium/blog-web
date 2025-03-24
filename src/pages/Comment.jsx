import CommentCard from "../components/Comment";

const Commentpage = () => {
  

  return (
   <div style={{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'

   }}>
    <div style={{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    background:'red',
    padding:20,
    marginTop:30,
    borderRadius:'10px'
    }}>
        <img src="https://designgrapher.com/wp-content/uploads/2014/12/portrait-photography-examples.jpg" style={{
            height:'600px',
            objectFit:'cover'
        }} />
    </div>
    <div>
        <CommentCard/>
    </div>
   </div>
  );
};

export default Commentpage;